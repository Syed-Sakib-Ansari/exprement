// 🔑 TMDB API Key
const TMDB_API_KEY = "dafa07a5692eee854f7f511b99316708";

// 🚀 TMDB ডাটা ফেচিং হেলপার ফাংশন
async function fetchTMDBData(title, year) {
    if (!TMDB_API_KEY) return null;
    try {
        const cleanTitle = title.replace(/\s*\(\d{4}\).*/, '').trim();
        let searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(cleanTitle)}`;
        let searchRes = await fetch(searchUrl);
        if (!searchRes.ok) return null;

        let searchData = await searchRes.json();
        if (!searchData.results || searchData.results.length === 0) {
            searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(cleanTitle)}`;
            searchRes = await fetch(searchUrl);
            if (searchRes.ok) searchData = await searchRes.json();
        }

        if (!searchData.results || searchData.results.length === 0) return null;

        const match = searchData.results[0];
        const mediaType = match.media_type === 'tv' ? 'tv' : 'movie';
        const detailUrl = `https://api.themoviedb.org/3/${mediaType}/${match.id}?api_key=${TMDB_API_KEY}&append_to_response=credits`;
        const detailRes = await fetch(detailUrl);
        if (!detailRes.ok) return null;

        const detail = await detailRes.json();
        const overview = detail.overview || '';
        const cast = detail.credits?.cast?.slice(0, 6).map(c => c.name).join(', ') || '';
        const crew = detail.credits?.crew || [];
        const directorObj = crew.find(c => c.job === 'Director') || crew.find(c => c.known_for_department === 'Directing');
        const director = directorObj ? directorObj.name : '';
        const runtime = detail.runtime ? `${detail.runtime} Mins` : (detail.episode_run_time?.[0] ? `${detail.episode_run_time[0]} Mins` : '');

        return { overview, cast, director, runtime };
    } catch (e) {
        return null;
    }
}

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname;

    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt|svg|webp)$/i)) {
        return env.ASSETS.fetch(request);
    }

    const excludedFiles = ['/', '/index.html', '/contact.html', '/dmca.html', '/privacy.html', '/disclaimer.html', '/404.html'];
    const cleanPath = path.toLowerCase().replace(/\/$/, '');

    if (excludedFiles.includes(cleanPath)) {
        return env.ASSETS.fetch(request);
    }

    const movieParam = url.searchParams.get('movie');
    if (movieParam) {
        const redirectUrl = new URL(request.url);
        redirectUrl.pathname = `/${decodeURIComponent(movieParam)}.html`;
        redirectUrl.search = '';
        return Response.redirect(redirectUrl.toString(), 301);
    }

    const movieSlug = decodeURIComponent(path.replace(/^\//, '').replace(/\.html$/i, ''));
    if (!movieSlug) return env.ASSETS.fetch(request);

    try {
        const moviesRes = await env.ASSETS.fetch(new URL('/movies.json', request.url));
        if (!moviesRes.ok) throw new Error("JSON database load failed");
        const movies = await moviesRes.json();

        const targetMovie = movies.find(m => {
            if (!m.title) return false;
            const computedSlug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            return computedSlug === movieSlug;
        });

        if (targetMovie) {
            const cache = caches.default;
            const cacheHeader = request.headers.get('Cache-Control');
            const isNoCache = cacheHeader && (cacheHeader.includes('no-cache') || cacheHeader.includes('no-store'));

            if (!isNoCache) {
                let cachedResponse = await cache.match(request);
                if (cachedResponse) return cachedResponse;
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

            const tmdb = await fetchTMDBData(targetMovie.title, targetMovie.year);

            const directorName = tmdb?.director || 'Renowned Filmmaker';
            const castList = tmdb?.cast || 'Leading Industry Ensemble Cast';
            const duration = tmdb?.runtime || 'Full Feature Duration';
            const synopsis = tmdb?.overview || `${movieTitle} is a premier ${targetMovie.category || 'Cinema'} title released in ${targetMovie.year || '2026'}. Featuring ${targetMovie.language || 'Dual Audio Hindi-English'} presentation, this release captures exceptional storytelling, high-fidelity sound design, and vivid visual sequences. Viewers can explore complete media specifications, stream links, and technical playback overview directly on MovieDakhi.`;

            const dynamicCanonicalTag = `<link rel="canonical" href="${currentMovieUrl}">`;
            html = html.replace('</head>', `    ${dynamicCanonicalTag}\n</head>`);
            html = html.replace(/<title>.*?<\/title>/i, `<title>${movieTitle} - MovieDakhi</title>`);

            const metaMatches = [
                { regex: /<meta\s+name="description"\s+content=".*?"\s*\/?>/i, replacement: `<meta name="description" content="${movieDesc}">` },
                { regex: /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:title" content="${movieTitle} - MovieDakhi">` },
                { regex: /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:description" content="${movieDesc}">` },
                { regex: /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:url" content="${currentMovieUrl}">` },
                { regex: /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:image" content="${moviePosterUrl}">` }
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
                "genre": targetMovie.genre || 'Action, Drama',
                "description": synopsis,
                "inLanguage": targetMovie.language || 'Hindi, English'
            };
            const schemaScript = `<script type="application/ld+json">${JSON.stringify(movieSchema)}</script>`;
            html = html.replace('</head>', `    ${schemaScript}\n</head>`);

            const seoBodyContent = `
                <article style="padding: 60px 20px; color: white; max-width: 900px; margin: 0 auto; font-family: sans-serif; line-height: 1.7;">
                    <header style="margin-bottom: 25px;">
                        <h1 style="font-size: 2.2rem; font-weight: 900; color: #e50914; margin-bottom: 12px;">${movieTitle} - Overview, Cast, Stream & Technical Specifications</h1>
                        <p style="font-size: 1.1rem; color: #cccccc;">Explore verified storylines, star cast line-ups, production details, and high-speed streaming mirrors for <strong>${movieTitle}</strong> on MovieDakhi.</p>
                    </header>
                    <hr style="border-color: #333; margin: 20px 0;">
                    <section style="display: flex; flex-wrap: wrap; gap: 25px; margin-bottom: 35px;">
                        <img src="${moviePosterUrl}" alt="${movieTitle} Poster" style="width: 260px; border-radius: 12px; height: auto; object-fit: cover; box-shadow: 0 10px 30px rgba(0,0,0,0.8);">
                        <div style="flex: 1; min-width: 280px; background: rgba(255,255,255,0.03); p-5; padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
                            <h2 style="font-size: 1.4rem; color: #ffffff; margin-bottom: 15px; border-bottom: 2px solid #e50914; padding-bottom: 5px; display: inline-block;">Production Info</h2>
                            <ul style="list-style: none; padding: 0; margin: 0; color: #bbbbbb; font-size: 0.95rem;">
                                <li style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>🎬 Director:</strong> ${directorName}</li>
                                <li style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>⭐ Star Cast:</strong> ${castList}</li>
                                <li style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>🎭 Genre:</strong> ${targetMovie.genre || 'Action, Entertainment'}</li>
                                <li style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>🌐 Audio Language:</strong> ${targetMovie.language || 'Dual Audio [Hindi-English]'}</li>
                                <li style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>⏱️ Runtime:</strong> ${duration}</li>
                                <li style="padding: 8px 0;"><strong>📅 Release Year:</strong> ${targetMovie.year || '2026'}</li>
                            </ul>
                        </div>
                    </section>
                    <section style="margin-bottom: 35px;">
                        <h2 style="font-size: 1.5rem; color: #ffffff; margin-bottom: 12px;">Detailed Storyline & Synopsis</h2>
                        <p style="color: #dddddd; font-size: 1rem; text-align: justify; background: rgba(0,0,0,0.4); padding: 20px; border-radius: 10px; border-left: 4px solid #e50914;">${synopsis}</p>
                    </section>
                    <section style="margin-bottom: 35px;">
                        <h2 style="font-size: 1.3rem; color: #ffffff; margin-bottom: 12px;">Playback & Audio Compatibility Guide</h2>
                        <p style="color: #aaaaaa; font-size: 0.95rem; text-align: justify;">This media container for ${movieTitle} is formatted in x265 HEVC MKV structure, offering dual audio tracks including softcoded English subtitles (ESub). Optimized for seamless cloud streaming across Google Chrome, PC, Mobile, Smart TV, and Chromecast setups.</p>
                    </section>
                </article>
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
            return render404();
        }

    } catch (error) {
        return render404();
    }
}

function render404() {
    const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404 - Page Not Found | Movie Dakhi</title>
</head>
<body style="background:#050505; color:white; text-align:center; font-family:sans-serif; padding:100px 20px;">
    <h1 style="font-size:5rem; color:#e50914; margin:0;">404</h1>
    <h2>Page Not Found</h2>
    <p style="color:#888;">Sorry, the requested page or movie does not exist on MovieDakhi.</p>
    <a href="https://moviedakhi.com/" style="color:#e50914; text-decoration:none; font-weight:bold;">Return Home</a>
</body>
</html>`;

    return new Response(notFoundHtml, {
        status: 404,
        headers: { "content-type": "text/html;charset=UTF-8" }
    });
}