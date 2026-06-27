export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname; 

    // ১. সাধারণ ফাইলগুলো (CSS, JS, JSON, Images) সরাসরি কোনো বাধা ছাড়া লোড হতে দিন
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // ২. মেনু বা স্ট্যাটিক পেজগুলো বাদ দিয়ে শুধু মুভি পেজগুলোর (.html) জন্য ফিল্টার করুন
    const excludedFiles = ['/index.html', '/Contact.html', '/DMCA.html', '/Privacy.html', '/Disclaimer.html'];
    
    if (path.endsWith('.html') && !excludedFiles.includes(path)) {
        const movieSlug = decodeURIComponent(path.replace('/', '').replace('.html', ''));
        
        try {
            // আপনার movies.json ডাটাবেজ ফাইলটি রিড করা
            const moviesRes = await env.ASSETS.fetch(new URL('/movies.json', request.url));
            if (!moviesRes.ok) throw new Error("JSON load failed");
            const movies = await moviesRes.json();
            
            // স্লাগ মিলিয়ে নির্দিষ্ট মুভিটি খুঁজে বের করা
            const targetMovie = movies.find(m => {
                if(!m.title) return false;
                const slug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                return slug === movieSlug;
            });

            // আপনার অরিজিনাল index.html টেমপ্লেট পেজটি তুলে নেওয়া
            const htmlRes = await env.ASSETS.fetch(new URL('/index.html', request.url));
            let html = await htmlRes.text();

            if (targetMovie) {
                // ডাটাগুলোকে এইচটিএমএল-সেফ ফরম্যাটে রূপান্তর
                const safeTitle = targetMovie.title.replace(/"/g, '&quot;');
                const safeGenre = (targetMovie.genre || 'Action, Entertainment').replace(/"/g, '&quot;');
                const safeLanguage = (targetMovie.language || 'Dual Audio').replace(/"/g, '&quot;');
                const safeCategory = (targetMovie.category || 'Recent Adds').replace(/"/g, '&quot;');
                const fullMovieUrl = `https://moviedakhi.com/${movieSlug}.html`;
                const poster = targetMovie.posterUrl || '';
                
                // ক) গুগল সার্চের জন্য মেইন ব্রাউজার টাইটেল
                html = html.replace(/<title>.*?<\/title>/i, `<title>Watch ${safeTitle} Online Free HD | MovieDakhi</title>`);
                
                // খ) অল-ইন-ওয়ান মেটা ডেসক্রিপশন
                const descTag = `<meta name="description" content="Watch or download ${safeTitle} full movie. Genre: ${safeGenre} | Language: ${safeLanguage} | MovieDakhi">`;
                if (html.match(/<meta\s+name=["']description["'].*?>/i)) {
                    html = html.replace(/<meta\s+name=["']description["'].*?>/i, descTag);
                } else {
                    html = html.replace('</head>', `${descTag}\n</head>`);
                }
                
                // গ) 🚀 অল-প্ল্যাটফর্ম ওপেন গ্রাফ ট্যাগ (Facebook, WhatsApp, Telegram, Blog Comments-এর জন্য)
                let ogTags = `
                    <meta property="og:title" content="Watch ${safeTitle} - HD Download | MovieDakhi">
                    <meta property="og:description" content="Stream or download ${safeTitle} in high quality free.">
                    <meta property="og:url" content="${fullMovieUrl}">
                    <meta property="og:type" content="video.movie">
                    <meta property="og:site_name" content="MovieDakhi">
                `;
                if(poster) ogTags += `<meta property="og:image" content="${poster}">`;

                // ঘ) 🚀 টুইটার কার্ড ট্যাগ (টুইটার/এক্স এবং বিশেষ ডিসকাস কমেন্ট সেকশনের জন্য) [FIXED TYPO BAG]
                let twitterTags = `
                    <meta name="twitter:card" content="summary_large_image">
                    <meta name="twitter:title" content="Watch ${safeTitle} - MovieDakhi">
                    <meta name="twitter:description" content="Fast streaming and direct download links for ${safeTitle} full movie.">
                `;
                if(poster) twitterTags += `<meta name="twitter:image" content="${poster}">`;

                // পুরোনো ওজি ট্যাগগুলো পরিষ্কার করে নতুন অল-প্ল্যাটফর্ম ট্যাগ ইনজেক্ট করা
                html = html.replace(/<meta property="og:title".*?>/i, '');
                html = html.replace(/<meta property="og:image".*?>/i, '');
                html = html.replace('</head>', `${ogTags}\n${twitterTags}\n</head>`);
                
                // ঙ) বডি কন্টেন্ট এবং লেবেল ম্যানেজমেন্ট
                html = html.replace(/<h2 id="modalTitle"[^>]*>.*?<\/h2>/i, `<h2 id="modalTitle" class="text-3xl md:text-5xl font-black mb-6 leading-tight">${safeTitle}</h2>`);
                html = html.replace(/(<[a-z0-9]+[^>]*id="modalLanguage"[^>]*>).*?(<\/[a-z0-9]+>)/i, `$1${safeLanguage}$2`);
                html = html.replace(/(<[a-z0-9]+[^>]*id="modalCategory"[^>]*>).*?(<\/[a-z0-9]+>)/i, `$1${safeCategory}$2`);
                html = html.replace(/<p id="modalDesc"[^>]*>.*?<\/p>/i, `<p id="modalDesc" class="text-sm md:text-base text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto font-medium italic">▶ Streaming and download links for <strong>${safeTitle}</strong> are ready below. Scroll down to read the full movie synopsis and details.</p>`);

                let seoBodyContent = '';
                if (targetMovie.synopsis) {
                    seoBodyContent += `<div style="margin-top: 25px; text-align: left; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">📖 Synopsis:</b><p style="color: #bbb; font-size: 14px; line-height: 1.6;">${targetMovie.synopsis}</p></div>`;
                }
                if (targetMovie.movieHighlights) {
                    seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">✨ Movie Highlights:</b><p style="color: #bbb; font-size: 14px; line-height: 1.6;">${targetMovie.movieHighlights}</p></div>`;
                }
                if (targetMovie.streamingRecommendation) {
                    seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; font-weight: bold; margin-bottom: 5px;">🎯 Streaming Recommendation:</b><p style="color: #bbb; font-size: 14px; line-height: 1.6;">${targetMovie.streamingRecommendation}</p></div>`;
                }
                if (targetMovie.detailedPlotSummary) {
                    seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">🍿 Detailed Plot Summary:</b><p style="color: #999; font-size: 13px; white-space: pre-line; line-height: 1.6; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); font-style: normal;">${targetMovie.detailedPlotSummary}</p></div>`;
                }

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