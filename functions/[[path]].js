export async function onRequest(context) {
    const { request, env } = context;
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

            // মূল index.html ফাইলটি রিড করা
            const response = await env.ASSETS.fetch(new URL('/index.html', request.url));
            let html = await response.text();

            if (targetMovie) {
                // 🎯 মুভি খুঁজে পাওয়া গেলে ডাইনামিক মেটা ট্যাগ ইনজেক্ট হবে
                const movieTitle = targetMovie.title;
                const moviePoster = targetMovie.posterUrl || '';
                const currentMovieUrl = `https://moviedakhi.com/${encodeURIComponent(movieSlug)}.html`;

                const dynamicCanonicalTag = `<link rel="canonical" href="${currentMovieUrl}">`;
                html = html.replace('<link rel="canonical" href="https://moviedakhi.com/">', dynamicCanonicalTag);
                html = html.replace('<title>MovieDakhi | Watch Dual Audio Movies & Web Series Free Online HD</title>', `<title>${movieTitle} - MovieDakhi</title>`);

                // ডাইনামিক ওপেন গ্রাফ (OG) ট্যাগ
                const ogTags = `
                    <meta property="og:title" content="${movieTitle} - MovieDakhi" />
                    <meta property="og:description" content="Watch ${movieTitle} in Dual Audio HD Quality Free Online on MovieDakhi." />
                    <meta property="og:image" content="${moviePoster}" />
                    <meta property="og:url" content="${currentMovieUrl}" />
                    <meta property="og:type" content="video.movie" />
                `;
                html = html.replace('</head>', `${ogTags}\n</head>`);

                // ক্রলার বা গুগলের জন্য বডিতে কন্টেন্ট পুশ
                let seoBodyContent = `
                    <div id="seo-crawler-content" style="display:none !important; visibility:hidden; height:0; width:0; overflow:hidden;">
                        <h1>${movieTitle}</h1>
                        <img src="${moviePoster}" alt="${movieTitle} Poster">
                        <p>Genre: ${targetMovie.genre || ''}</p>
                        <p>Category: ${targetMovie.category || ''}</p>
                        <p>Language: ${targetMovie.language || ''}</p>
                `;
                if (targetMovie.movieHighlights) {
                    seoBodyContent += `<p>${targetMovie.movieHighlights}</p>`;
                }
                if (targetMovie.detailedPlotSummary) {
                    seoBodyContent += `<p>${targetMovie.detailedPlotSummary}</p>`;
                }
                seoBodyContent += `</div>`;
                html = html.replace('</body>', `${seoBodyContent}\n</body>`);
            } else {
                // ⚠️ যদি মুভি স্ল্যাগ ডাটাবেজে না মেলে, তবুও ৪০৪ না দিয়ে হোমপেজ লোড করতে দিন যেন গুগল ক্রল করতে পারে!
                const fallbackCanonical = `<link rel="canonical" href="https://moviedakhi.com${path}">`;
                html = html.replace('<link rel="canonical" href="https://moviedakhi.com/">', fallbackCanonical);
            }

            return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });

        } catch (error) {
            // যেকোনো এররে সেফটি ব্যাকআপ হিসেবে বেসিক হোমপেজ রিটার্ন করবে, ৪০৪ এরর দেবে না
            const fallbackResponse = await env.ASSETS.fetch(new URL('/index.html', request.url));
            return fallbackResponse;
        }
    }

    // বাকি সব সাধারণ পেজের জন্য ডিফল্ট অ্যাসেট লোড
    return env.ASSETS.fetch(request);
}