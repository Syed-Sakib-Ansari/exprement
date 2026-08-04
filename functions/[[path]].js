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

// 🚀 মেটা ট্যাগ ইনজেক্টর
function setMetaTag(html, attrType, key, value) {
    const newTag = `<meta ${attrType}="${key}" content="${value}">`;
    const regex = new RegExp(`<meta\\s+[^>]*?${attrType}=["']${key}["'][^>]*?>`, 'i');
    if (regex.test(html)) {
        return html.replace(regex, newTag);
    }
    return html.replace('</head>', `    ${newTag}\n</head>`);
}

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname;

    // ১. স্ট্যাটিক ফাইল হলে সরাসরি পাস করে দেবে
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt|svg|webp)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // ২. এক্সক্লুডেড পেজ হলে নরমাল রেসপন্স দেবে
    const excludedFiles = ['/', '/index.html', '/contact.html', '/dmca.html', '/privacy.html', '/disclaimer.html', '/404.html'];
    const cleanPath = path.toLowerCase().replace(/\/$/, '');

    if (excludedFiles.includes(cleanPath)) {
        return env.ASSETS.fetch(request);
    }

    // ৩. পুরনো ?movie=slug থাকলে ৩০১ রিডাইরেক্ট
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
            let html = await response.text();

            const movieTitle = targetMovie.title;
            const movieDesc = `${movieTitle} Dual Audio [Hindi-English] HD Media Overview, Details & Streaming Information on MovieDakhi.`;
            const currentMovieUrl = `https://moviedakhi.com/${encodeURIComponent(rawSlug)}.html`;

            let moviePosterUrl = targetMovie.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";
            if (moviePosterUrl.startsWith('//')) {
                moviePosterUrl = 'https:' + moviePosterUrl;
            }

            const tmdb = await fetchTMDBData(targetMovie.title, targetMovie.year);

            const directorName = tmdb?.director || 'Renowned Filmmaker';
            const castList = tmdb?.cast || 'Leading Industry Ensemble Cast';
            const duration = tmdb?.runtime || 'Full Feature Duration';
            const synopsis = tmdb?.overview || `${movieTitle} is a premier ${targetMovie.category || 'Cinema'} title released in ${targetMovie.year || '2026'}. Featuring ${targetMovie.language || 'Dual Audio Hindi-English'} presentation.`;

            // Dynamic Canonical & Title
            html = html.replace('</head>', `    <link rel="canonical" href="${currentMovieUrl}">\n</head>`);
            html = html.replace(/<title>.*?<\/title>/i, `<title>${movieTitle} - MovieDakhi</title>`);

            // Meta tags for Social Preview
            html = setMetaTag(html, 'name', 'description', movieDesc);
            html = setMetaTag(html, 'property', 'og:title', `${movieTitle} - MovieDakhi`);
            html = setMetaTag(html, 'property', 'og:description', movieDesc);
            html = setMetaTag(html, 'property', 'og:url', currentMovieUrl);
            html = setMetaTag(html, 'property', 'og:image', moviePosterUrl);
            html = setMetaTag(html, 'property', 'og:type', 'video.movie');
            
            html = setMetaTag(html, 'name', 'twitter:card', 'summary_large_image');
            html = setMetaTag(html, 'name', 'twitter:title', `${movieTitle} - MovieDakhi`);
            html = setMetaTag(html, 'name', 'twitter:description', movieDesc);
            html = setMetaTag(html, 'name', 'twitter:image', moviePosterUrl);

            const seoBodyContent = `
                <article style="padding: 60px 20px; color: white; max-width: 900px; margin: 0 auto; font-family: sans-serif; line-height: 1.7;">
                    <header style="margin-bottom: 25px;">
                        <h1 style="font-size: 2.2rem; font-weight: 900; color: #e50914; margin-bottom: 12px;">${movieTitle} - Overview, Cast, Stream & Specs</h1>
                    </header>
                    <section style="display: flex; flex-wrap: wrap; gap: 25px; margin-bottom: 35px;">
                        <img src="${moviePosterUrl}" alt="${movieTitle} Poster" style="width: 260px; border-radius: 12px; height: auto; object-fit: cover;">
                        <div style="flex: 1; min-width: 280px;">
                            <p><strong>Director:</strong> ${directorName}</p>
                            <p><strong>Cast:</strong> ${castList}</p>
                        </div>
                    </section>
                </article>
            `;
            html = html.replace('<div id="seo-ssr-content"></div>', `<div id="seo-ssr-content">${seoBodyContent}</div>`);

            // 🚀 নো-ক্যাশ হেডার (যাতে ক্লাউডফ্লেয়ার ভুল পেজ আটকে না রাখে)
            return new Response(html, {
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                    "Cache-Control": "no-cache, no-store, must-revalidate"
                }
            });

        } else {
            return render404();
        }

    } catch (error) {
        return render404();
    }
}

function render404() {
    return new Response(`<!DOCTYPE html><html><head><title>404 - MovieDakhi</title></head><body style="background:#000;color:#fff;text-align:center;padding:100px;"><h1>404 - Page Not Found</h1></body></html>`, {
        status: 404,
        headers: { "content-type": "text/html;charset=UTF-8" }
    });
}