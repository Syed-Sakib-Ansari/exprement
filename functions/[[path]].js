export async function onRequest(context) {
    const { request, env } = context;
    
    // ✅ নতুন: Edge Caching (সার্ভারের লোড কমাতে এবং স্পিড বাড়াতে)
    const cache = caches.default;
    let cachedResponse = await cache.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // 🚀 ১. পুরনো ?movie=slug লিংকগুলোকে নতুন .html লিংকে ৩০১ রিডাইরেক্ট করুন (SEO সেভ করার জন্য)
    const movieParam = url.searchParams.get('movie');
    if (movieParam) {
        const redirectUrl = new URL(request.url);
        redirectUrl.pathname = `/${decodeURIComponent(movieParam)}.html`;
        redirectUrl.search = ''; 
        return Response.redirect(redirectUrl.toString(), 301);
    }

    // ২. স্ট্যাটিক ফাইল (CSS, JS, চিত্র ইত্যাদি) হলে সরাসরি পাস করে দেবে
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // ৩. এগুলো সাধারণ পেজ তাই এগুলোতে মুভি এসইও প্রসেস হবে না
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
                const computedSlug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                return computedSlug === movieSlug;
            });

            if (targetMovie) {
                // মূল index.html ফাইলটি রিড করা
                const response = await env.ASSETS.fetch(new URL('/index.html', request.url));
                let html = await response.text();

                // 🎯 মুভি ডাটা ও ইউআরএল
                const movieTitle = targetMovie.title;
                const movieDesc = `Watch ${movieTitle} in Dual Audio HD Quality Free Online on MovieDakhi.`;
                const currentMovieUrl = `https://moviedakhi.com/${encodeURIComponent(movieSlug)}.html`;

                // 🖼️ সোশ্যাল মিডিয়ার জন্য অপ্টিমাইজড পোস্টার 
                const rawPosterUrl = targetMovie.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";
                const moviePosterUrl = rawPosterUrl.includes('postimg.cc') 
                    ? rawPosterUrl 
                    : `https://wsrv.nl/?url=${encodeURIComponent(rawPosterUrl)}&w=600&output=jpeg&q=80`;

                // ক্যানোনিকাল এবং টাইটেল রিপ্লেস
                const dynamicCanonicalTag = `<link rel="canonical" href="${currentMovieUrl}">`;
                html = html.replace('</head>', `    ${dynamicCanonicalTag}\n</head>`);
                html = html.replace(/<title>.*?<\/title>/i, `<title>${movieTitle} - MovieDakhi</title>`);

                // 🚀 ৪. সোশ্যাল মিডিয়া (Facebook, WhatsApp, Twitter) প্রিভিউ ফিক্স
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

                // 🕷️ Safe Schema.org JSON-LD for Google Crawlers
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

                // ✅ নতুন: বডির ভেতরে মুভির আসল কন্টেন্ট ইনজেক্ট করা (Soft 404 ফিক্স করার জন্য)
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

                // ✅ নতুন: Response তৈরি করে Cache এ সেভ করা (১ দিনের জন্য)
                const finalResponse = new Response(html, { 
                    headers: { 
                        "content-type": "text/html;charset=UTF-8",
                        "Cache-Control": "s-maxage=86400" 
                    } 
                });
                
                context.waitUntil(cache.put(request, finalResponse.clone()));
                
                return finalResponse;

            } else {
                // 🚨 ৫. মুভি ডাটাবেজে না থাকলে একটি প্রপার ৪০৪ (Not Found) পেজ রিটার্ন করা হবে
                const notFoundHtml = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>404 Not Found - MovieDakhi</title>
                        <style>
                            body { background-color: #0f0f0f; color: #ffffff; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; }
                            h1 { font-size: 6rem; color: #dc2626; margin: 0 0 10px 0; text-shadow: 0 0 20px rgba(220, 38, 38, 0.5); }
                            p { font-size: 1.2rem; color: #a1a1aa; margin-bottom: 30px; }
                            a { text-decoration: none; background-color: #dc2626; color: white; padding: 12px 24px; border-radius: 30px; font-weight: bold; transition: 0.3s; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;}
                            a:hover { background-color: #b91c1c; transform: scale(1.05); }
                        </style>
                    </head>
                    <body>
                        <h1>404</h1>
                        <p>Sorry, the movie you are looking for has been removed or does not exist.</p>
                        <a href="/">Go Back to Home</a>
                    </body>
                    </html>
                `;
                return new Response(notFoundHtml, { 
                    status: 404, 
                    statusText: "Not Found",
                    headers: { "content-type": "text/html;charset=UTF-8" } 
                });
            }

        } catch (error) {
            // ডাটাবেজ ফেইল হলে সেফটি ব্যাকআপ হিসেবে বেসিক হোমপেজ রিটার্ন করবে
            const fallbackResponse = await env.ASSETS.fetch(new URL('/index.html', request.url));
            return fallbackResponse;
        }
    }

    // বাকি সব সাধারণ পেজের জন্য ডিফল্ট অ্যাসেট লোড
    return env.ASSETS.fetch(request);
}