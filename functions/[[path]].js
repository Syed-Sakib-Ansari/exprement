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

    // ১. স্ট্যাটিক ফাইল এড়িয়ে যাওয়া
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt|svg|webp)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // ২. এক্সক্লুডেড পেজ চেক
    const excludedFiles = ['/', '/index.html', '/contact.html', '/dmca.html', '/privacy.html', '/disclaimer.html', '/404.html'];
    const cleanPath = path.toLowerCase().replace(/\/$/, '');

    if (excludedFiles.includes(cleanPath)) {
        return env.ASSETS.fetch(request);
    }

    // ৩. পুরনো ?movie=slug লিংক থাকলে ৩০১ রিডাইরেক্ট
    const movieParam = url.searchParams.get('movie');
    if (movieParam) {
        const redirectUrl = new URL(request.url);
        redirectUrl.pathname = `/${decodeURIComponent(movieParam)}.html`;
        redirectUrl.search = '';
        return Response.redirect(redirectUrl.toString(), 301);
    }

    const rawSlug = decodeURIComponent(path.replace(/^\//, '').replace(/\.html$/i, '')).trim();
    if (!rawSlug) return env.ASSETS.fetch(request);

    try {
        const moviesRes = await env.ASSETS.fetch(new URL('/movies.json', request.url));
        if (!moviesRes.ok) throw new Error("JSON load failed");
        const movies = await moviesRes.json();

        const cleanMovieSlug = rawSlug.toLowerCase();
        const targetMovie = movies.find(m => {
            if (m.slug && m.slug.toLowerCase().trim() === cleanMovieSlug) return true;
            if (m.title) {
                const computedSlug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                if (computedSlug === cleanMovieSlug) return true;
            }
            return false;
        });

        if (targetMovie) {
            const response = await env.ASSETS.fetch(new URL('/index.html', request.url));
            
            const movieTitle = targetMovie.title;
            const movieDesc = `${movieTitle} Dual Audio [Hindi-English] HD Media Overview & Streaming Information on MovieDakhi.`;
            const currentMovieUrl = `https://moviedakhi.com/${encodeURIComponent(rawSlug)}.html`;

            let moviePosterUrl = targetMovie.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";
            if (moviePosterUrl.startsWith('//')) {
                moviePosterUrl = 'https:' + moviePosterUrl;
            }

            const tmdb = await fetchTMDBData(targetMovie.title, targetMovie.year);
            const directorName = tmdb?.director || 'Renowned Director';
            const castList = tmdb?.cast || 'Leading Industry Cast';
            const duration = tmdb?.runtime || 'Full Feature Duration';
            const synopsis = tmdb?.overview || `${movieTitle} is available in ${targetMovie.language || 'Dual Audio'}. Stream or view details on MovieDakhi.`;

            const seoBodyContent = `
                <article style="padding: 60px 20px; color: white; max-width: 900px; margin: 0 auto; font-family: sans-serif; line-height: 1.7;">
                    <h1>${movieTitle} - Overview, Cast & Specs</h1>
                    <img src="${moviePosterUrl}" alt="${movieTitle} Poster" style="width: 260px; border-radius: 12px;">
                    <p><strong>Director:</strong> ${directorName}</p>
                    <p><strong>Cast:</strong> ${castList}</p>
                    <p><strong>Synopsis:</strong> ${synopsis}</p>
                </article>
            `;

            // 🚀 CLOUDFLARE HTMLREWRITER (মেটা ট্যাগ শতভাগ নিখুঁতভাবে রিপ্লেস করবে)
            const transformedResponse = new HTMLRewriter()
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
                .on('meta[property="og:image"]', {
                    element(e) { e.setAttribute('content', moviePosterUrl); }
                })
                .on('meta[property="og:url"]', {
                    element(e) { e.setAttribute('content', currentMovieUrl); }
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
                    element(e) { e.setInner(seoBodyContent, { html: true }); }
                })
                .transform(response);

            // নো-ক্যাশ হেডার রিটার্ন
            return new Response(transformedResponse.body, {
                status: 200,
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                    "Cache-Control": "no-cache, no-store, must-revalidate"
                }
            });

        } else {
            return new Response(`<!DOCTYPE html><html><head><title>404 - MovieDakhi</title></head><body style="background:#000;color:#fff;text-align:center;padding:100px;"><h1>404 - Page Not Found</h1></body></html>`, {
                status: 404,
                headers: { "content-type": "text/html;charset=UTF-8" }
            });
        }

    } catch (error) {
        return env.ASSETS.fetch(request);
    }
}