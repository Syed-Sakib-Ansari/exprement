export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname; 

    // ১. স্ট্যাটিক ফাইল (CSS, JS, চিত্র ইত্যাদি) হলে সরাসরি পাস করে দেবে].js]
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // ২. এগুলো সাধারণ পেজ তাই এগুলোতে মুভি এসইও প্রসেস হবে acquisitions না].js]
    const excludedFiles = ['/index.html', '/Contact.html', '/DMCA.html', '/Privacy.html', '/Disclaimer.html'];
    
    if (path.endsWith('.html') && !excludedFiles.includes(path)) {
        // ইউআরএল থেকে স্ল্যাগ বের করা (যেমন: /avatar-2026.html -> avatar-2026)].js]
        const movieSlug = decodeURIComponent(path.replace('/', '').replace('.html', ''));
        
        try {
            // ডাটাবেজ/JSON ফাইল থেকে সব মুভি লোড করা].js]
            const moviesRes = await env.ASSETS.fetch(new URL('/movies.json', request.url));
            if (!moviesRes.ok) throw new Error("JSON database load failed");
            const movies = await moviesRes.json();
            
            // স্ল্যাগ ম্যাচ করে সুনির্দিষ্ট মুভিটি খুঁজে বের করা].js]
            const targetMovie = movies.find(m => {
                if(!m.title) return false;
                const slug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                return slug === movieSlug;
            });

            // মূল index.html ফাইলটি রিড করা].js]
            const htmlRes = await env.ASSETS.fetch(new URL('/index.html', request.url));
            let html = await htmlRes.text();

            if (targetMovie) {
                const safeTitle = targetMovie.title;
                const movieGenre = targetMovie.genre || "Entertainment";
                
                // কাস্টম ডাইনামিক মেটা টাইটেল এবং ডেসক্রিপশন তৈরি (আপনার ফ্রন্টএন্ড JS এর সাথে মিল রেখে)].js]
                const pageTitle = `Watch ${safeTitle} Full Movie Online Free | Download HD 1080p - MovieDakhi`;
                const pageDesc = `Watch ${safeTitle} full movie online for free in HD quality. Download ${safeTitle} complete web series 1080p, 720p. Stream ${movieGenre} movies seamlessly on MovieDakhi.`;
                const movieUrl = `https://moviedakhi.com/${movieSlug}.html`;
                
                // ইনবক্স গ্যারান্টি: সরাসরি ট্রাস্টেড অরিজিনাল সিডিএন ইমেজ].js]
                const imageUrl = targetMovie.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";

                // ⚡ কড়া মেটা ট্যাগ ও ক্যানোনিকাল লিংক রিপ্লেসমেন্ট (Clean Edge replacement)].js]
                html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${pageTitle}</title>`);
                html = html.replace(/<meta[^>]*?name="description"[^>]*?>/i, `<meta name="description" content="${pageDesc}">`);
                html = html.replace(/<link[^>]*?rel="canonical"[^>]*?>/i, `<link rel="canonical" href="${movieUrl}">`);

                // ⚡ Open Graph Protocols (Supports Facebook, WhatsApp, Telegram, LinkedIn, Discord, IMO, Viber, Slack, Pinterest Inboxes)].js]
                html = html.replace(/<meta[^>]*?property="og:url"[^>]*?>/i, `<meta property="og:url" content="${movieUrl}">`);
                html = html.replace(/<meta[^>]*?property="og:title"[^>]*?>/i, `<meta property="og:title" content="${pageTitle}">`);
                html = html.replace(/<meta[^>]*?property="og:description"[^>]*?>/i, `<meta property="og:description" content="${pageDesc}">`);
                
                // 🎯 ইনবক্স মাস্টার ব্লক: ওজি মেইন ইমেজের সাথে ইনবক্স চ্যাট ফ্রেমওয়ার্কের ব্যাকওয়ার্ড নোড এবং রিকোয়ার্ড ডাইমেনশন একসাথে ইনজেক্ট করা হয়েছে].js]
                const ogImageBlock = `<meta property="og:image" content="${imageUrl}">
    <meta property="og:image:secure_url" content="${imageUrl}">
    <meta property="og:image:width" content="600">
    <meta property="og:image:height" content="900">
    <meta property="og:image:type" content="image/jpeg">
    <link rel="image_src" href="${imageUrl}">
    <meta itemprop="image" content="${imageUrl}">`;
                
                html = html.replace(/<meta[^>]*?property="og:image"[^>]*?>/i, ogImageBlock);

                // ⚡ Twitter Cards & Messenger Client Protocols (index.html এর 'property' কনফ্লিক্ট মেলাতে রেগুলার এক্সপ্রেশন আপডেট করা হয়েছে)].js]
                html = html.replace(/<meta[^>]*?(?:name|property)="twitter:card"[^>]*?>/i, `<meta name="twitter:card" content="summary_large_image">`);
                html = html.replace(/<meta[^>]*?(?:name|property)="twitter:url"[^>]*?>/i, `<meta name="twitter:url" content="${movieUrl}">`);
                html = html.replace(/<meta[^>]*?(?:name|property)="twitter:title"[^>]*?>/i, `<meta name="twitter:title" content="${pageTitle}">`);
                html = html.replace(/<meta[^>]*?(?:name|property)="twitter:description"[^>]*?>/i, `<meta name="twitter:description" content="${pageDesc}">`);
                html = html.replace(/<meta[^>]*?(?:name|property)="twitter:image"[^>]*?>/i, `<meta name="twitter:image" content="${imageUrl}">`);

                // 🚀 গুগল সার্চ বটের জন্য ডাইনামিক JSON-LD "Movie Schema Markup" ইনজেকশন (এতে র‍্যাংকিং দ্বিগুণ ফাস্ট হবে)].js]
                const movieSchema = {
                    "@context": "https://schema.org",
                    "@type": "Movie",
                    "name": safeTitle,
                    "url": movieUrl,
                    "image": imageUrl,
                    "genre": movieGenre.split(', '),
                    "description": pageDesc,
                    "potentialAction": {
                        "@type": "WatchAction",
                        "target": movieUrl
                    }
                };
                html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(movieSchema)}</script>\n</head>`);

                // 🍿 গুগলের ইনডেক্সিং বটের জন্য বডি কন্টেন্ট ইনজেকশন (Visible text keywords scraping)].js]
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

                // আপনার HTML ফাইলের placeholder এ কন্টেন্ট ইনজেকশন করা হচ্ছে].js]
                html = html.replace('<div id="modalAdBottom" class="w-full"></div>', `<div id="modalAdBottom" class="w-full"></div>\n${seoBodyContent}`);
            }
            
            return new Response(html, { headers: { 'Content-Type': 'text/html' } });
        } catch (err) {
            // কোনো কারণে ফেইল হলে নরমাল index.html লোড হবে সাইট ডাউন হবে না].js]
            return env.ASSETS.fetch(request);
        }
    }

    return env.ASSETS.fetch(request);
}