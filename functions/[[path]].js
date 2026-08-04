export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname;

    // 🚀 ১. স্ট্যাটিক ফাইলের জন্য সরাসরি সার্ভ করা
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt|svg|webp|woff|woff2)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // 🚀 ২. সাধারণ মেইন পেজগুলোতে ইন্টারসেপ্ট হবে না
    const excludedFiles = ['/', '/index.html', '/contact.html', '/dmca.html', '/privacy.html', '/disclaimer.html', '/404.html'];
    const cleanPath = path.toLowerCase().replace(/\/$/, '');

    if (excludedFiles.includes(cleanPath)) {
        return env.ASSETS.fetch(request);
    }

    // 🚀 ৩. পুরনো ?movie=slug লিংকগুলোকে .html লিংকে ৩০১ রিডাইরেক্ট
    const movieParam = url.searchParams.get('movie');
    if (movieParam) {
        const redirectUrl = new URL(request.url);
        redirectUrl.pathname = `/${decodeURIComponent(movieParam)}.html`;
        redirectUrl.search = ''; 
        return Response.redirect(redirectUrl.toString(), 301);
    }

    // 🚀 ৪. ইউআরএল থেকে মুভি স্ল্যাগ বের করা
    const movieSlug = decodeURIComponent(path.replace(/^\//, '').replace(/\.html$/i, '')).trim().toLowerCase();
    if (!movieSlug) return env.ASSETS.fetch(request);

    try {
        const moviesRes = await env.ASSETS.fetch(new URL('/movies.json', request.url));
        if (!moviesRes.ok) throw new Error("JSON database load failed");
        const movies = await moviesRes.json();

        // 🎯 স্ল্যাগ এবং টাইটেল ফ্লেক্সিবল ম্যাচিং
        const targetMovie = movies.find(m => {
            if (m.slug && m.slug.toLowerCase().trim() === movieSlug) return true;
            if (!m.title) return false;
            const computedSlug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            return computedSlug === movieSlug;
        });

        if (targetMovie) {
            const response = await env.ASSETS.fetch(new URL('/index.html', request.url));

            const movieTitle = targetMovie.title;
            const movieDesc = `Watch ${movieTitle} in Dual Audio HD Quality Free Online on MovieDakhi.`;
            const currentMovieUrl = `https://moviedakhi.com/${encodeURIComponent(movieSlug)}.html`;

            // 🖼️ সোশ্যাল মিডিয়া পোস্টার
            let rawPoster = targetMovie.posterUrl || targetMovie.poster || targetMovie.image || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";
            if (rawPoster.startsWith('//')) {
                rawPoster = 'https:' + rawPoster;
            }
            const moviePosterUrl = rawPoster;

            // 🚀 Cloudflare HTMLRewriter (১০০% গ্যারান্টেড মেটা ট্যাগ ইনজেক্টর)
            const rewriter = new HTMLRewriter()
                .on('title', {
                    element(e) { e.setInner(`${movieTitle} - MovieDakhi`); }
                })
                .on('meta[name="description"]', {
                    element(e) { e.setAttribute('content', movieDesc); }
                })
                .on('meta[property="og:title"]', {
                    element(e) { e.setAttribute('content', `${movieTitle} - MovieDakhi`); }
                })
                .on('meta[property="og:description"]', {
                    element(e) { e.setAttribute('content', movieDesc); }
                })
                .on('meta[property="og:url"]', {
                    element(e) { e.setAttribute('content', currentMovieUrl); }
                })
                .on('meta[property="og:image"]', {
                    element(e) { e.setAttribute('content', moviePosterUrl); }
                })
                .on('meta[property="og:type"]', {
                    element(e) { e.setAttribute('content', 'video.movie'); }
                })
                .on('meta[name="twitter:card"]', {
                    element(e) { e.setAttribute('content', 'summary_large_image'); }
                })
                .on('meta[name="twitter:title"]', {
                    element(e) { e.setAttribute('content', `${movieTitle} - MovieDakhi`); }
                })
                .on('meta[name="twitter:description"]', {
                    element(e) { e.setAttribute('content', movieDesc); }
                })
                .on('meta[name="twitter:image"]', {
                    element(e) { e.setAttribute('content', moviePosterUrl); }
                })
                .on('div#seo-ssr-content', {
                    element(e) {
                        const seoContent = `
                            <div style="padding: 100px 20px; color: white;">
                                <h1>${movieTitle}</h1>
                                <img src="${moviePosterUrl}" alt="${movieTitle}">
                                <p>${movieDesc}</p>
                                <p>Genre: ${targetMovie.genre || 'Entertainment'}</p>
                                <p>Language: ${targetMovie.language || 'Dual Audio'}</p>
                                <a href="${currentMovieUrl}">Download / Watch ${movieTitle}</a>
                            </div>
                        `;
                        e.setInner(seoContent, { html: true });
                    }
                });

            const transformedResponse = rewriter.transform(response);

            // 🚀 নো-ক্যাশ হেডার (যাতে ক্লাউডফ্লেয়ার বা টেলিগ্রাম ভুল ছবি ধরে না রাখে)
            return new Response(transformedResponse.body, {
                status: 200,
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                    "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0"
                }
            });

        } else {
            return render404();
        }

    } catch (error) {
        return env.ASSETS.fetch(new URL('/index.html', request.url));
    }
}

function render404() {
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