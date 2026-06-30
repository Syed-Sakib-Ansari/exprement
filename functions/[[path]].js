export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname; 

    // ১. স্ট্যাটিক অ্যাসেট ফাইল হলে কোনো প্রসেস ছাড়াই সরাসরি রিড করবে
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt)$/i)) {
        return env.ASSETS.fetch(request);
    }

    const excludedFiles = ['/index.html', '/Contact.html', '/DMCA.html', '/Privacy.html', '/Disclaimer.html'];
    
    if (path.endsWith('.html') && !excludedFiles.includes(path)) {
        const movieSlug = decodeURIComponent(path.replace('/', '').replace('.html', ''));
        
        try {
            // 🚀 পরিবর্তন: ২৫ MB-র ফাইলের পরিবর্তে সরাসরি সুনির্দিষ্ট মুভির মাত্র ২ KB-র ফাইলটি ব্যাকএন্ড ফেচ করছে!
            const movieRes = await env.ASSETS.fetch(new URL(`/data/movies/${movieSlug}.json`, request.url));
            
            const htmlRes = await env.ASSETS.fetch(new URL('/index.html', request.url));
            let html = await htmlRes.text();

            if (movieRes.ok) {
                const targetMovie = await movieRes.json();
                const safeTitle = targetMovie.title || "Movie";
                const movieGenre = targetMovie.genre || "Entertainment";

                const pageTitle = `Watch ${safeTitle} Full Movie Online Free | Download HD 1080p - MovieDakhi`;
                const pageDesc = `Watch ${safeTitle} full movie online for free in HD quality. Download ${safeTitle} complete web series 1080p, 720p. Stream ${movieGenre} movies seamlessly on MovieDakhi.`;
                const movieUrl = `https://moviedakhi.com/${movieSlug}.html`;
                const imageUrl = targetMovie.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";

                // মেটা ট্যাগ রিপ্লেসমেন্ট (গুগল এসইও এর জন্য)
                html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${pageTitle}</title>`);
                html = html.replace(/<meta\s+name="description"\s+content="[^"]*"/i, `<meta name="description" content="${pageDesc}"`);
                html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"/i, `<link rel="canonical" href="${movieUrl}"`);

                // Open Graph (Facebook SEO)
                html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"/i, `<meta property="og:url" content="${movieUrl}"`);
                html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"/i, `<meta property="og:title" content="${pageTitle}"`);
                html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"/i, `<meta property="og:description" content="${pageDesc}"`);
                html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"/i, `<meta property="og:image" content="${imageUrl}"`);

                // Twitter SEO
                html = html.replace(/<meta\s+property="twitter:url"\s+content="[^"]*"/i, `<meta property="twitter:url" content="${movieUrl}"`);
                html = html.replace(/<meta\s+property="twitter:title"\s+content="[^"]*"/i, `<meta property="twitter:title" content="${pageTitle}"`);
                html = html.replace(/<meta\s+property="twitter:description"\s+content="[^"]*"/i, `<meta property="twitter:description" content="${pageDesc}"`);
                html = html.replace(/<meta\s+property="twitter:image"\s+content="[^"]*"/i, `<meta property="twitter:image" content="${imageUrl}"`);

                // 🚀 গুগল সার্চ কনসোলের জন্য "Movie Schema Markup" ইনজেকশন
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

                // 🍿 গুগলের ক্রলার ইনডেক্সিংয়ের জন্য টেক্সট ইনজেকশন
                let seoBodyContent = `
                <div id="modalSeoContent" class="text-sm md:text-base text-gray-400 leading-relaxed mt-6 max-w-3xl mx-auto font-medium等">
                    <span class="font-bold text-gray-300">${movieGenre}</span>
                    <div class="mt-3 text-[10px] md:text-xs text-gray-500 leading-relaxed font-medium">
                        ▶ Watch <strong class="text-gray-300">${safeTitle}</strong> full movie online free in HD. You can also download the complete movie / web series in 1080p directly to your device. Enjoy high-quality streaming without buffering on MovieDakhi.
                    </div>`;

                if (targetMovie.synopsis) {
                    seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">📖 Synopsis:</b><p style="color: #bbb; font-size: 14px; line-height: 1.6;">${targetMovie.synopsis}</p></div>`;
                }
                if (targetMovie.movieHighlights) {
                    seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">🎯 Movie Highlights:</b><p style="color: #bbb; font-size: 14px; line-height: 1.6;">${targetMovie.movieHighlights}</p></div>`;
                }
                if (targetMovie.detailedPlotSummary) {
                    seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">🍿 Detailed Plot Summary:</b><p style="color: #999; font-size: 13px; white-space: pre-line; line-height: 1.6; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">${targetMovie.detailedPlotSummary}</p></div>`;
                }
                seoBodyContent += `</div>`;

                html = html.replace('<div id="modalAdBottom" class="w-full"></div>', `<div id="modalAdBottom" class="w-full"></div>\n${seoBodyContent}`);
            }
            
            return new Response(html, { headers: { 'Content-Type': 'text/html' } });
        } catch (err) {
            return env.ASSETS.fetch(request);
        }
    }

    return env.ASSETS.fetch(request);
}