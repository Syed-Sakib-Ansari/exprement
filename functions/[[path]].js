export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname; 

    // ১. স্ট্যাটিক ফাইল হ্যান্ডেলিং (CSS, JS, Images, TXT) সরাসরি লোড হতে দিন
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // 🚀 ২. ফ্রন্টএন্ডের জন্য নতুন সুরক্ষিত ডাইনামিক API রুট (অন-ডিমান্ড ফুল ডাটা রিলিজ)
    if (path.startsWith('/api/movie/')) {
        const movieSlug = path.replace('/api/movie/', '');
        const movieData = await env.MOVIE_DB.get(movieSlug);
        if (!movieData) {
            return new Response(JSON.stringify({ error: "Movie not found" }), {
                status: 404,
                headers: { 
                    "content-type": "application/json;charset=UTF-8", 
                    "Access-Control-Allow-Origin": "*" 
                }
            });
        }
        return new Response(movieData, {
            headers: { 
                "content-type": "application/json;charset=UTF-8", 
                "Access-Control-Allow-Origin": "*" 
            }
        });
    }

    // ৩. গুগল ক্রলার ও সার্চ ইঞ্জিনের জন্য আলতিমেট ইন্ডিভিজুয়াল মুভি র‍্যাংকিং (SSR) লেয়ার
    const excludedFiles = ['/index.html', '/Contact.html', '/DMCA.html', '/Privacy.html', '/Disclaimer.html'];
    
    if (path.endsWith('.html') && !excludedFiles.includes(path)) {
        const movieSlug = decodeURIComponent(path.replace('/', '').replace('.html', ''));
        
        try {
            // 🎯 ৫ মেগাবাইটের জেসন ফাইল রিড করার ঝামেলা শেষ! সরাসরি KV ডেটাবেজ থেকে ডেটা কল
            const targetMovie = await env.MOVIE_DB.get(movieSlug, { type: "json" });

            const htmlRes = await env.ASSETS.fetch(new URL('/index.html', request.url));
            let html = await htmlRes.text();

            if (targetMovie) {
                const safeTitle = targetMovie.title.replace(/"/g, '&quot;');
                const safeGenre = (targetMovie.genre || 'Action, Entertainment').replace(/"/g, '&quot;');
                const safeLanguage = (targetMovie.language || 'Dual Audio').replace(/"/g, '&quot;');
                const safeCategory = (targetMovie.category || 'Recent Adds').replace(/"/g, '&quot;');
                const fullMovieUrl = `https://moviedakhi.com/${movieSlug}.html`;
                const poster = targetMovie.posterUrl || '';
                
                // গুগল ইনডেক্সিং টাইটেল ও মেটা ডেসক্রিপশন সেটআপ
                html = html.replace(/<title>.*?<\/title>/i, `<title>Watch ${safeTitle} Online Free HD | MovieDakhi</title>`);
                
                const descTag = `<meta name="description" content="Watch or download ${safeTitle} full movie. Genre: ${safeGenre} | Language: ${safeLanguage} | MovieDakhi">`;
                if (html.match(/<meta\s+name=["']description["'].*?>/i)) {
                    html = html.replace(/<meta\s+name=["']description["'].*?>/i, descTag);
                } else {
                    html = html.replace('</head>', `${descTag}\n</head>`);
                }
                
                // সোশ্যাল মিডিয়া ইনডেক্স প্রিভিউ ট্যাগ (OpenGraph & Twitter Card)
                let ogTags = `<meta property="og:title" content="Watch ${safeTitle} - MovieDakhi"><meta property="og:description" content="Stream or download ${safeTitle} in high quality free."><meta property="og:url" content="${fullMovieUrl}"><meta property="og:type" content="video.movie"><meta property="og:site_name" content="MovieDakhi">`;
                if(poster) ogTags += `<meta property="og:image" content="${poster}">`;

                let twitterTags = `<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Watch ${safeTitle} - MovieDakhi"><meta name="twitter:description" content="Fast streaming and direct download links for ${safeTitle} full movie.">`;
                if(poster) twitterTags += `<meta name="twitter:image" content="${poster}">`;

                html = html.replace('</head>', `${ogTags}\n${twitterTags}\n</head>`);
                
                // ভিডিও মোডালের লেআউট রিপ্লেসমেন্ট
                html = html.replace(/<h2 id="modalTitle"[^>]*>.*?<\/h2>/i, `<h2 id="modalTitle" class="text-3xl md:text-5xl font-black mb-6 leading-tight">${safeTitle}</h2>`);
                html = html.replace(/(<[a-z0-9]+[^>]*id="modalLanguage"[^>]*>).*?(<\/[a-z0-9]+>)/i, `$1${safeLanguage}$2`);
                html = html.replace(/(<[a-z0-9]+[^>]*id="modalCategory"[^>]*>).*?(<\/[a-z0-9]+>)/i, `$1${safeCategory}$2`);
                html = html.replace(/<p id="modalDesc"[^>]*>.*?<\/p>/i, `<p id="modalDesc" class="text-sm md:text-base text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto font-medium italic">▶ Streaming and download links for <strong>${safeTitle}</strong> are ready below. Scroll down to read the full movie synopsis and details.</p>`);

                // গুগলের রিড করার জন্য বড় টেক্সট ব্লকের ইনজেকশন লজিক
                let seoBodyContent = '';
                if (targetMovie.synopsis) seoBodyContent += `<div style="margin-top: 25px; text-align: left; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">📖 Synopsis:</b><p style="color: #bbb; font-size: 14px; line-height: 1.6;">${targetMovie.synopsis}</p></div>`;
                if (targetMovie.movieHighlights) seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">✨ Movie Highlights:</b><p style="color: #bbb; font-size: 14px; line-height: 1.6;">${targetMovie.movieHighlights}</p></div>`;
                if (targetMovie.streamingRecommendation) seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">🎯 Streaming Recommendation:</b><p style="color: #bbb; font-size: 14px; line-height: 1.6;">${targetMovie.streamingRecommendation}</p></div>`;
                if (targetMovie.detailedPlotSummary) seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">🍿 Detailed Plot Summary:</b><p style="color: #999; font-size: 13px; white-space: pre-line; line-height: 1.6; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); font-style: normal;">${targetMovie.detailedPlotSummary}</p></div>`;

                html = html.replace('<div id="modalAdBottom" class="w-full"></div>', `<div id="modalAdBottom" class="w-full"></div>\n<div id="modalSeoContent" class="text-sm md:text-base text-gray-400 leading-relaxed mt-6 max-w-3xl mx-auto font-medium text-left" style="display: block; width: 100%;">${seoBodyContent}</div>`);
                html = html.replace('</head>', `<script>window.CF_MOVIE_SLUG = "${movieSlug}";</script>\n</head>`);
            }
            
            return new Response(html, { 
                headers: { "content-type": "text/html;charset=UTF-8" }
            });
            
        } catch(e) {
            return env.ASSETS.fetch(new URL('/index.html', request.url));
        }
    }

    return env.ASSETS.fetch(request);
}