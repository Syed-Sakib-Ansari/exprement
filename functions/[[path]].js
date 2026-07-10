export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname; 

    // 📸 PREMIUM NATIVE IMAGE PROXY FOR SOCIAL BOT BYPASS
    if (path === '/img-proxy') {
        const targetUrl = url.searchParams.get('url');
        if (!targetUrl) return new Response('Missing URL', { status: 400 });
        try {
            const imgResponse = await fetch(targetUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
                }
            });
            if (!imgResponse.ok) return env.ASSETS.fetch(request);
            
            const responseHeaders = new Headers();
            responseHeaders.set('Content-Type', imgResponse.headers.get('Content-Type') || 'image/jpeg');
            responseHeaders.set('Cache-Control', 'public, max-age=604800'); // Cache for 7 days
            responseHeaders.set('Access-Control-Allow-Origin', '*');
            
            return new Response(imgResponse.body, {
                status: 200,
                headers: responseHeaders
            });
        } catch (e) {
            return env.ASSETS.fetch(request);
        }
    }

    // ১. স্ট্যাটিক ফাইল (CSS, JS, চিত্র ইত্যাদি) হলে সরাসরি পাস করে দেবে
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // ২. এগুলো সাধারণ পেজ তাই এগুলোতে মুভি এসইও প্রসেস হবে না
    const excludedFiles = ['/index.html', '/Contact.html', '/DMCA.html', '/Privacy.html', '/Disclaimer.html'];
    
    if (path.endsWith('.html') && !excludedFiles.includes(path)) {
        // ইউআরএল থেকে স্ল্যাগ বের করা (যেমন: /avatar-2026.html -> avatar-2026)
        const movieSlug = decodeURIComponent(path.replace('/', '').replace('.html', ''));
        
        try {
            // ডাটাবেজ/JSON ফাইল থেকে সব মুভি লোড করা
            const moviesRes = await env.ASSETS.fetch(new URL('/movies.json', request.url));
            if (!moviesRes.ok) throw new Error("JSON database load failed");
            const movies = await moviesRes.json();
            
            // স্ল্যাগ ম্যাচ করে সুনির্দিষ্ট মুভিটি খুঁজে বের করা
            const targetMovie = movies.find(m => {
                if(!m.title) return false;
                const slug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                return slug === movieSlug;
            });

            // মূল index.html ফাইলটি রিড করা
            const htmlRes = await env.ASSETS.fetch(new URL('/index.html', request.url));
            let html = await htmlRes.text();

            if (targetMovie) {
                const safeTitle = targetMovie.title;
                const movieGenre = targetMovie.genre || "Entertainment";
                
                // কাস্টম ডাইনামিক মেটা টাইটেল এবং ডেসক্রিপশন তৈরি
                const pageTitle = `Watch ${safeTitle} Full Movie Online Free | Download HD 1080p - MovieDakhi`;
                const pageDesc = `Watch ${safeTitle} full movie online for free in HD quality. Download ${safeTitle} complete web series 1080p, 720p. Stream ${movieGenre} movies seamlessly on MovieDakhi.`;
                const movieUrl = `https://moviedakhi.com/${movieSlug}.html`;
                const imageUrl = targetMovie.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";

                // ⚡ ১. ওল্ড বা কনফ্লিক্টিং ও ডুপ্লিকেট ট্যাগ ট্র্যাপ এড়াতে পুরোনো সমস্ত সোশ্যাল ট্যাগগুলোকে ১ লাইনে ক্লিনআপ করা হলো ভাই
                html = html.replace(/<title>[\s\S]*?<\/title>/i, '');
                html = html.replace(/<meta\s+name="description"[^>]*>/i, '');
                html = html.replace(/<link\s+rel="canonical"[^>]*>/i, '');
                html = html.replace(/<meta[^>]*?(property|name)="og:[^"]*"[^>]*>/gi, '');
                html = html.replace(/<meta[^>]*?(property|name)="twitter:[^"]*"[^>]*>/gi, '');

                // ⚡ ২. নিজস্ব ডোমেইনের ট্রাস্টেড রিভার্স-প্রক্সি ক্যাশ ইমেজ জেনারেট করা হলো ভাই
                const proxiedImageUrl = imageUrl.includes('i.postimg.cc') ? imageUrl : `https://moviedakhi.com/img-proxy?url=${encodeURIComponent(imageUrl)}`;

                // ⚡ ৩. ফেসবুক, মেসেঞ্জার, হোয়াটসঅ্যাপ এবং টেলিগ্রামের জন্য ফার্স্ট-ক্লিক থাম্বনেইল এনшиওরড মেটা ট্যাগ ব্লক
                const perfectMetaTags = `
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDesc}" />
    <link rel="canonical" href="${movieUrl}" />
    
    <meta property="og:type" content="video.movie" />
    <meta property="og:url" content="${movieUrl}" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="${pageDesc}" />
    <meta property="og:image" content="${proxiedImageUrl}" />
    <meta property="og:image:secure_url" content="${proxiedImageUrl}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="600" />
    <meta property="og:image:height" content="900" />
    <meta property="og:site_name" content="MovieDakhi" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${movieUrl}" />
    <meta name="twitter:title" content="${pageTitle}" />
    <meta name="twitter:description" content="${pageDesc}" />
    <meta name="twitter:image" content="${proxiedImageUrl}" />
                `;

                // head ট্যাগের শেষ মাথায় ফ্রেশ ট্যাগ ইনজেকশন
                html = html.replace('</head>', `${perfectMetaTags}\n</head>`);

                // 🚀 গুগল সার্চ বটের জন্য ডাইনামিক JSON-LD "Movie Schema Markup" ইনজেকশন
                const movieSchema = {
                    "@context": "https://schema.org",
                    "@type": "Movie",
                    "name": safeTitle,
                    "url": movieUrl,
                    "image": proxiedImageUrl,
                    "genre": movieGenre.split(', '),
                    "description": pageDesc,
                    "potentialAction": {
                        "@type": "WatchAction",
                        "target": movieUrl
                    }
                };
                html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(movieSchema)}</script>\n</head>`);

                // 🍿 গুगলের ইনডেক্সিং বটের জন্য বডি কন্টেন্ট ইনজেকশন
                let seoBodyContent = `
                <div id="modalSeoContent" class="text-sm md:text-base text-gray-400 leading-relaxed mt-6 max-w-3xl mx-auto font-medium">
                    <span class="font-bold text-gray-300">${movieGenre}</span>
                    <div class="mt-3 text-[10px] md:text-xs text-gray-500 leading-relaxed font-medium">
                        ▶ Watch <strong class="text-gray-300">${safeTitle}</strong> full movie online free in HD. You can also download the complete movie / web series in 1080p directly to your device. Enjoy high-quality streaming without buffering on MovieDakhi.
                    </div>`;

                if (targetMovie.synopsis) {
                    seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">📖 Synopsis:</b><p style="color: #bbb; font-size: 14px; line-height: 1.6;">${targetMovie.synopsis}</p></div>`;
                }
                if (targetMovie.movieHighlights) {
                    seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">🎯 Streaming Recommendation:</b><p style="color: #bbb; font-size: 14px; line-height: 1.6;">${targetMovie.movieHighlights}</p></div>`;
                }
                if (targetMovie.detailedPlotSummary) {
                    seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">🍿 Detailed Plot Summary:</b><p style="color: #999; font-size: 13px; white-space: pre-line; line-height: 1.6; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); font-style: normal;">${targetMovie.detailedPlotSummary}</p></div>`;
                }
                seoBodyContent += `</div>`;

                // আপনার HTML ফাইলের placeholder এ সেভ করা হচ্ছে
                html = html.replace('<div id="modalAdBottom" class="w-full"></div>', `<div id="modalAdBottom" class="w-full"></div>\n${seoBodyContent}`);
            }
            
            return new Response(html, { headers: { 'Content-Type': 'text/html' } });
        } catch (err) {
            return env.ASSETS.fetch(request);
        }
    }

    return env.ASSETS.fetch(request);
}