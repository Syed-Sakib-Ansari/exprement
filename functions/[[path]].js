export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname;

    // 🚀 ১. স্ট্যাটিক অ্যাসেট (CSS, JS, চিত্র ইত্যাদি) হলে সরাসরি পাস করে দেবে
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt|svg|webp)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // 🚀 ২. সাধারণ মেইন পেজগুলোতে মুভি চেক প্রসেস হবে না
    const excludedFiles = ['/', '/index.html', '/contact.html', '/dmca.html', '/privacy.html', '/disclaimer.html', '/404.html'];
    const cleanPath = path.toLowerCase().replace(/\/$/, '');

    if (excludedFiles.includes(cleanPath)) {
        return env.ASSETS.fetch(request);
    }

    // 🚀 ৩. পুরনো ?movie=slug লিংকগুলোকে নতুন .html লিংকে ৩০১ রিডাইরেক্ট
    const movieParam = url.searchParams.get('movie');
    if (movieParam) {
        const redirectUrl = new URL(request.url);
        redirectUrl.pathname = `/${decodeURIComponent(movieParam)}.html`;
        redirectUrl.search = '';
        return Response.redirect(redirectUrl.toString(), 301);
    }

    // 🚀 ৪. ইউআরএল থেকে মুভি স্ল্যাগ বের করা (.html থাক বা না থাক প্রপারলি ধরবে)
    const movieSlug = decodeURIComponent(path.replace(/^\//, '').replace(/\.html$/i, ''));

    if (!movieSlug) {
        return env.ASSETS.fetch(request);
    }

    try {
        // ডাটাবেজ/JSON ফাইল থেকে সব মুভি লোড করা
        const moviesRes = await env.ASSETS.fetch(new URL('/movies.json', request.url));
        if (!moviesRes.ok) throw new Error("JSON database load failed");
        const movies = await moviesRes.json();

        // স্ল্যাগ ম্যাচ করে সুনির্দিষ্ট মুভিটি খুঁজে বের করা
        const targetMovie = movies.find(m => {
            if (!m.title) return false;
            const computedSlug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            return computedSlug === movieSlug;
        });

        // 🟢 মুভি পাওয়া গেলে: কাস্টম এসইও এবং ওজি ট্যাগ ইনজেক্ট করবে
        if (targetMovie) {
            // ক্যাশ চেক (শুধুমাত্র ভ্যালিড বিদ্যমান মুভির জন্য)
            const cache = caches.default;
            const cacheHeader = request.headers.get('Cache-Control');
            const isNoCache = cacheHeader && (cacheHeader.includes('no-cache') || cacheHeader.includes('no-store'));

            if (!isNoCache) {
                let cachedResponse = await cache.match(request);
                if (cachedResponse) {
                    return cachedResponse;
                }
            }

            const response = await env.ASSETS.fetch(new URL('/index.html', request.url));
            let html = await response.text();

            const movieTitle = targetMovie.title;
            const movieDesc = `${movieTitle} Dual Audio [Hindi-English] HD Media Overview, Details & Streaming Information on MovieDakhi.`;
            const currentMovieUrl = `https://moviedakhi.com/${encodeURIComponent(movieSlug)}.html`;

            const rawPosterUrl = targetMovie.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";
            const moviePosterUrl = rawPosterUrl.includes('postimg.cc')
                ? rawPosterUrl
                : `https://wsrv.nl/?url=${encodeURIComponent(rawPosterUrl)}&w=600&output=jpeg&q=80`;

            const dynamicCanonicalTag = `<link rel="canonical" href="${currentMovieUrl}">`;
            html = html.replace('</head>', `    ${dynamicCanonicalTag}\n</head>`);
            html = html.replace(/<title>.*?<\/title>/i, `<title>${movieTitle} - MovieDakhi</title>`);

            const metaMatches = [
                { regex: /<meta\s+name="description"\s+content=".*?"\s*\/?>/i, replacement: `<meta name="description" content="${movieDesc}">` },
                { regex: /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:title" content="${movieTitle} - MovieDakhi">` },
                { regex: /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:description" content="${movieDesc}">` },
                { regex: /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:url" content="${currentMovieUrl}">` },
                { regex: /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:image" content="${moviePosterUrl}">` },
                { regex: /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:type" content="video.movie">` },
                { regex: /<meta\s+name="twitter:card"\s+content=".*?"\s*\/?>/i, replacement: `<meta name="twitter:card" content="summary_large_image">` },
                { regex: /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i, replacement: `<meta name="twitter:title" content="${movieTitle} - MovieDakhi">` },
                { regex: /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i, replacement: `<meta name="twitter:description" content="${movieDesc}">` },
                { regex: /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i, replacement: `<meta name="twitter:image" content="${moviePosterUrl}">` }
            ];

            metaMatches.forEach(item => {
                if (html.match(item.regex)) {
                    html = html.replace(item.regex, item.replacement);
                } else {
                    html = html.replace('</head>', `    ${item.replacement}\n</head>`);
                }
            });

            const movieSchema = {
                "@context": "https://schema.org",
                "@type": "Movie",
                "name": movieTitle,
                "image": moviePosterUrl,
                "genre": targetMovie.genre || '',
                "description": targetMovie.detailedPlotSummary || targetMovie.movieHighlights || movieDesc,
                "inLanguage": targetMovie.language || ''
            };
            const schemaScript = `<script type="application/ld+json">${JSON.stringify(movieSchema)}</script>`;
            html = html.replace('</head>', `    ${schemaScript}\n</head>`);

            const seoBodyContent = `
                <div style="padding: 100px 20px; color: white;">
                    <h1>${movieTitle}</h1>
                    <img src="${moviePosterUrl}" alt="${movieTitle}">
                    <p>${movieDesc}</p>
                    <p>Genre: ${targetMovie.genre || 'Entertainment'}</p>
                    <p>Language: ${targetMovie.language || 'Dual Audio'}</p>
                    <a href="${currentMovieUrl}">Download / Watch ${movieTitle}</a>
                </div>
            `;
            html = html.replace('<div id="seo-ssr-content"></div>', `<div id="seo-ssr-content">${seoBodyContent}</div>`);

            const finalResponse = new Response(html, {
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                    "Cache-Control": "s-maxage=86400"
                }
            });

            context.waitUntil(cache.put(request, finalResponse.clone()));
            return finalResponse;

        } else {
            // 🚨 মুভি ডাটাবেজে না থাকলে সরাসরি কাস্টম ৪০৪ পেজ দেখাবে (হোমপেজে ফ্যালব্যাক করবে না)
            return render404();
        }

    } catch (error) {
        // 🚨 যেকোনো এরর হলেও সরাসরি ৪০৪ পেজ দেখাবে
        return render404();
    }
}

// 🚀 কাস্টম ৪০৪ পেজ রেন্ডারার ফাংশন
function render404() {
    const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found | Movie Dakhi</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #050505;
        }
    </style>
</head>
<body class="text-white min-h-screen flex flex-col justify-between">

    <header class="flex justify-between items-center py-6 px-6 md:px-12">
        <a href="https://moviedakhi.com/" class="text-red-600 font-black text-2xl tracking-tighter uppercase">
            MOVIE DAKHI
        </a>
        <a href="https://moviedakhi.com/" class="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Back to Home
        </a>
    </header>

    <main class="flex-grow flex items-center justify-center p-6">
        <div class="bg-[#0f0f0f] border border-[#1a1a1a] p-10 md:p-16 rounded-3xl shadow-2xl max-w-3xl w-full text-center">
            <h1 class="text-8xl md:text-9xl font-black text-red-600 mb-2 drop-shadow-[0_0_25px_rgba(220,38,38,0.6)]">
                404
            </h1>
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-100">Page Not Found</h2>
            <p class="text-gray-400 mb-10 text-lg">
                Sorry, the movie or page you are looking for doesn't exist, has been moved, or is currently unavailable.
            </p>
            
            <a href="https://moviedakhi.com/" class="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full font-bold transition duration-300">
                Visit Movie Website
            </a>
        </div>
    </main>

    <footer class="py-12 border-t border-[#1a1a1a] flex flex-col items-center justify-center text-center">
        <div class="text-red-600 font-black text-3xl tracking-tighter uppercase mb-2">
            MOVIE DAKHI
        </div>
        <p class="text-gray-400 text-sm mb-8 font-medium">
            Need a movie? We are always listening to your requests.
        </p>
        <a href="https://moviedakhi.com/" class="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.5)] transition duration-300 mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
            START STREAMING
        </a>
        <p class="text-[#444444] text-xs font-bold uppercase tracking-wider">
            © 2026 MOVIE DAKHI. ALL RIGHTS RESERVED.
        </p>
    </footer>

</body>
</html>`;

    return new Response(notFoundHtml, {
        status: 404,
        statusText: "Not Found",
        headers: {
            "content-type": "text/html;charset=UTF-8",
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0"
        }
    });
}