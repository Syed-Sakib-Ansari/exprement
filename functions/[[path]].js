export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname;

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
                if (!m.title) return false;
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

                // 🟢 ফেসবুক কমেন্ট ইনবক্স গ্যারান্টি: সোশাল ক্রলারের ট্রাস্টের জন্য কুয়েরি প্যারামিটার ছাড়া ডিরেক্ট অরিজিনাল ইমেজ ব্যবহার করা হলো ভাই
                const imageUrl = targetMovie.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";

                // ⚡ ১. index.html-এর গ্লোবাল robots ট্যাগসহ বাকি ওল্ড মেটা ট্যাগগুলো ক্লিন করা হলো যেন ক্রলার কনফিউজড না হয়
                html = html.replace(/<title>[\s\S]*?<\/title>/i, '');
                html = html.replace(/<meta[^>]*?name="description"[^>]*?>/gi, '');
                html = html.replace(/<link[^>]*?rel="canonical"[^>]*?>/gi, '');
                html = html.replace(/<meta[^>]*?name="robots"[^>]*?>/gi, ''); // 🎯 গ্লোবাল ইনডেক্স ট্যাগ ক্লিনআপ লেয়ার
                html = html.replace(/<meta[^>]*?property="og:[^>]*?>/gi, '');
                html = html.replace(/<meta[^>]*?(?:name|property)="twitter:[^>]*?>/gi, '');

                // ⚡ ২. মুভি অবজেক্টে নো-ইনডেক্স TRU থাকলে "noindex, nofollow" সেট হবে, অন্যথায় স্বাভাবিক ইনডেক্স থাকবে ভাই
                const robotsContent = targetMovie.noindex === true ? "noindex, nofollow" : "index, follow";

                // 🎯 ৩. ডাইনামিক রোবটস এবং fb:app_id ট্যাগসহ মাস্টার মনোলিথিক মেটা ব্লক (কমেন্ট প্রিভিউ ফিক্স)
                const metaBlock = `
                <title>${pageTitle}</title>
                <meta name="description" content="${pageDesc}">
                <link rel="canonical" href="${movieUrl}">
                <meta name="robots" content="${robotsContent}">
                <meta property="fb:app_id" content="966242223397117">
                <meta property="og:type" content="video.movie">
                <meta property="og:url" content="${movieUrl}">
                <meta property="og:title" content="${pageTitle}">
                <meta property="og:description" content="${pageDesc}">
                <meta property="og:image" content="${imageUrl}">
                <meta property="og:image:secure_url" content="${imageUrl}">
                <meta property="og:image:type" content="image/jpeg">
                <link rel="image_src" href="${imageUrl}">
                <meta itemprop="image" content="${imageUrl}">
                <meta name="twitter:card" content="summary_large_image">
                <meta name="twitter:url" content="${movieUrl}">
                <meta name="twitter:title" content="${pageTitle}">
                <meta name="twitter:description" content="${pageDesc}">
                <meta name="twitter:image" content="${imageUrl}">`;

                // head ট্যাগের ঠিক নিচেই সুপার হাই-প্রিওরিটিতে ইনজেক্ট করা হলো
                html = html.replace('<head>', `<head>\n    ${metaBlock}`);

                // 🚀 গুগল সার্চ বটের জন্য ডাইনামিক JSON-LD "Movie Schema Markup" ইনজেকশন (এতে র‍্যাংকিং দ্বিগুণ ফাস্ট হবে)
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

                // 🍿 গুগলের ইনডেক্সিং বটের জন্য বডি কন্টেন্ট ইনজেকশন (Visible text keywords scraping)
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

                // আপনার HTML ফাইলের placeholder এ কন্টেন্ট ইনজেকশন করা হচ্ছে
                html = html.replace('<div id="modalAdBottom" class="w-full"></div>', `<div id="modalAdBottom" class="w-full"></div>\n${seoBodyContent}`);
            }

            return new Response(html, { headers: { 'Content-Type': 'text/html' } });
        } catch (err) {
            // কোনো কারণে ফেইল হলে নরমাল index.html লোড হবে সাইট ডাউন হবে না
            return env.ASSETS.fetch(request);
        }
    }

    return env.ASSETS.fetch(request);
}