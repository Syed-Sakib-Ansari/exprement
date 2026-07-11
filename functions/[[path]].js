export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname;

    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt)$/i)) {
        return env.ASSETS.fetch(request);
    }

    const excludedFiles = ['/index.html', '/Contact.html', '/DMCA.html', '/Privacy.html', '/Disclaimer.html'];

    if (path.endsWith('.html') && !excludedFiles.includes(path)) {
        const movieSlug = decodeURIComponent(path.replace('/', '').replace('.html', ''));

        try {
            const moviesRes = await env.ASSETS.fetch(new URL('/movies.json', request.url));
            if (!moviesRes.ok) throw new Error("JSON database load failed");
            const movies = await moviesRes.json();

            const targetMovie = movies.find(m => {
                if (!m.title) return false;
                const slug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                return slug === movieSlug;
            });

            const htmlRes = await env.ASSETS.fetch(new URL('/index.html', request.url));
            let html = await htmlRes.text();

            if (targetMovie) {
                const safeTitle = targetMovie.title;
                const movieGenre = targetMovie.genre || "Entertainment";
                const pageTitle = `Watch ${safeTitle} Full Movie Online Free | Download HD 1080p - MovieDakhi`;
                const pageDesc = `Watch ${safeTitle} full movie online for free in HD quality. Download ${safeTitle} complete web series 1080p, 720p. Stream ${movieGenre} movies seamlessly on MovieDakhi.`;
                const movieUrl = `https://moviedakhi.com/${movieSlug}.html`;

                // 🟢 ইউনিভার্সাল ইমেজ লিঙ্ক: প্রক্সি রিমুভ করা হয়েছে যাতে ফেসবুক সব জায়গায় প্রিভিউ দেখায়
                const imageUrl = targetMovie.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";

                html = html.replace(/<title>[\s\S]*?<\/title>/i, '');
                html = html.replace(/<meta[^>]*?name="description"[^>]*?>/gi, '');
                html = html.replace(/<link[^>]*?rel="canonical"[^>]*?>/gi, '');
                html = html.replace(/<meta[^>]*?name="robots"[^>]*?>/gi, '');
                html = html.replace(/<meta[^>]*?property="og:[^>]*?>/gi, '');
                html = html.replace(/<meta[^>]*?(?:name|property)="twitter:[^>]*?>/gi, '');

                const robotsContent = targetMovie.noindex === true ? "noindex, nofollow" : "index, follow";

                // 🎯 ফেসবুকের জন্য কাস্টম মেটা ব্লক (width/height রিমুভ করা হয়েছে যাতে অটো অ্যাডজাস্ট হয়)
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
                <meta name="twitter:card" content="summary_large_image">
                <meta name="twitter:url" content="${movieUrl}">
                <meta name="twitter:title" content="${pageTitle}">
                <meta name="twitter:description" content="${pageDesc}">
                <meta name="twitter:image" content="${imageUrl}">`;

                html = html.replace('<head>', `<head>\n    ${metaBlock}`);

                const movieSchema = {
                    "@context": "https://schema.org",
                    "@type": "Movie",
                    "name": safeTitle,
                    "url": movieUrl,
                    "image": imageUrl,
                    "genre": movieGenre.split(', '),
                    "description": pageDesc,
                    "potentialAction": { "@type": "WatchAction", "target": movieUrl }
                };
                html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(movieSchema)}</script>\n</head>`);

                let seoBodyContent = `<div id="modalSeoContent" class="text-sm md:text-base text-gray-400 leading-relaxed mt-6 max-w-3xl mx-auto font-medium">
                    <span class="font-bold text-gray-300">${movieGenre}</span>
                    <div class="mt-3 text-[10px] md:text-xs text-gray-500 leading-relaxed font-medium">
                        ▶ Watch <strong class="text-gray-300">${safeTitle}</strong> full movie online free in HD.
                    </div>`;
                if (targetMovie.synopsis) seoBodyContent += `<p>${targetMovie.synopsis}</p>`;
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