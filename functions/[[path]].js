export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname; 

    // ১. স্ট্যাটিক ফাইল (CSS, JS, চিত্র ইত্যাদি) হলে সরাসরি পাস করে দেবে
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // ২. এগুলো সাধারণ পেজ তাই এগুলোতে মুভি এসইও প্রসেস হবে acquisitions না
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
                
                // কাস্টম ডাইনামিক মেটা টাইটেল এবং ডেসক্রিপশন তৈরি (আপনার ফ্রন্টএন্ড JS এর সাথে মিল রেখে)
                const pageTitle = `Watch ${safeTitle} Full Movie Online Free | Download HD 1080p - MovieDakhi`;
                const pageDesc = `Watch ${safeTitle} full movie online for free in HD quality. Download ${safeTitle} complete web series 1080p, 720p. Stream ${movieGenre} movies seamlessly on MovieDakhi.`;
                const movieUrl = `https://moviedakhi.com/${movieSlug}.html`;
                
                // 🎯 র ইমেজকে ক্রলার-ফ্রেন্ডলি ৬০০x৯০০ জেপেগে লাইটওয়েট কনভার্ট করা হলো (মেসেঞ্জার/হোয়াটসঅ্যাপ ফাস্ট লোড ফিক্স)].js]
                const rawImg = targetMovie.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";
                const imageUrl = rawImg.includes('postimg.cc') ? rawImg : `https://wsrv.nl/?url=${encodeURIComponent(rawImg)}&w=600&h=900&fit=cover&output=jpg`;

                // ⚡ কড়া মেটা ট্যাগ রিপ্লেসমেন্ট (Regex ব্যবহার করা হয়েছে যেন মাল্টিপল লাইনেও বাগ না খায়)].js]
                html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${pageTitle}</title>`);
                html = html.replace(/<meta\s+name="description"\s+content="[^"]*"/i, `<meta name="description" content="${pageDesc}"`);
                html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"/i, `<link rel="canonical" href="${movieUrl}"`);

                // ⚡ Open Graph (Facebook SEO) মেটা ট্যাগ আপডেট].js]
                html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"/i, `<meta property="og:url" content="${movieUrl}"`);
                html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"/i, `<meta property="og:title" content="${pageTitle}"`);
                html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"/i, `<meta property="og:description" content="${pageDesc}"`);
                html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"/i, `<meta property="og:image" content="${imageUrl}"`);

                // ⚡ Twitter Standard SEO মেটা ট্যাগ আপডেট (name এবং property উভয় কনফ্লিক্ট মেলাতে হাইব্রিড রেগুলার এক্সপ্রেশন)].js]
                html = html.replace(/<meta\s+(?:name|property)="twitter:url"\s+content="[^"]*"/i, `<meta name="twitter:url" content="${movieUrl}"`);
                html = html.replace(/<meta\s+(?:name|property)="twitter:title"\s+content="[^"]*"/i, `<meta name="twitter:title" content="${pageTitle}"`);
                html = html.replace(/<meta\s+(?:name|property)="twitter:description"\s+content="[^"]*"/i, `<meta name="twitter:description" content="${pageDesc}"`);
                html = html.replace(/<meta\s+(?:name|property)="twitter:image"\s+content="[^"]*"/i, `<meta name="twitter:image" content="${imageUrl}"`);

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

                // আপনার HTML ফাইলের placeholder এ সেভ করা হচ্ছে].js]
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