export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname; 

    // ১. সাধারণ ফাইলগুলো (CSS, JS, JSON, Images) সরাসরি লোড হতে দিন
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // ২. যদি কোনো মুভির লিংক হয় (যেমন: /mortal-kombat.html)
    const excludedFiles = ['/index.html', '/Contact.html', '/DMCA.html', '/Privacy.html', '/Disclaimer.html'];
    
    if (path.endsWith('.html') && !excludedFiles.includes(path)) {
        
        // লিংক থেকে স্লাগ বের করা (decodeURIComponent দেওয়া হলো যেন স্পেস থাকলে সমস্যা না হয়)
        const movieSlug = decodeURIComponent(path.replace('/', '').replace('.html', ''));
        
        try {
            // movies.json থেকে ডাটা নেওয়া
            const moviesRes = await env.ASSETS.fetch(new URL('/movies.json', request.url));
            if (!moviesRes.ok) throw new Error("JSON load failed");
            const movies = await moviesRes.json();
            
            // নির্দিষ্ট মুভিটি খোঁজা
            const targetMovie = movies.find(m => {
                if(!m.title) return false;
                const slug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                return slug === movieSlug;
            });

            // index.html নেওয়া
            const htmlRes = await env.ASSETS.fetch(new URL('/index.html', request.url));
            let html = await htmlRes.text();

            // ৩. এসইও (SEO) ম্যাজিক - HTML এর ভেতরে টাইটেল ও ছবি বসানো
            if (targetMovie) {
                const safeTitle = targetMovie.title.replace(/"/g, '&quot;');
                const genre = targetMovie.genre || 'Entertainment';
                
                // Title
                html = html.replace(/<title>.*?<\/title>/i, `<title>Watch ${safeTitle} Online Free HD | MovieDakhi</title>`);
                
                // Description
                const descTag = `<meta name="description" content="Watch or download ${safeTitle} full movie. ${genre} | MovieDakhi">`;
                if (html.match(/<meta\s+name=["']description["'].*?>/i)) {
                    html = html.replace(/<meta\s+name=["']description["'].*?>/i, descTag);
                } else {
                    html = html.replace('</head>', `${descTag}\n</head>`);
                }
                
                // OG Title (ফেসবুক/টেলিগ্রাম)
                const ogTitle = `<meta property="og:title" content="Watch ${safeTitle} - HD Download | MovieDakhi">`;
                if (html.match(/<meta\s+property=["']og:title["'].*?>/i)) {
                    html = html.replace(/<meta\s+property=["']og:title["'].*?>/i, ogTitle);
                } else {
                    html = html.replace('</head>', `${ogTitle}\n</head>`);
                }

                // OG Image (লিংক শেয়ার করলে মুভির পোস্টার)
                if (targetMovie.posterUrl) {
                    const ogImage = `<meta property="og:image" content="${targetMovie.posterUrl}">`;
                    if (html.match(/<meta\s+property=["']og:image["'].*?>/i)) {
                        html = html.replace(/<meta\s+property=["']og:image["'].*?>/i, ogImage);
                    } else {
                        html = html.replace('</head>', `${ogImage}\n</head>`);
                    }
                }
                
                // 🚀 জাভাস্ক্রিপ্টকে সিগন্যাল দেওয়ার জন্য সিক্রেট ভেরিয়েবল
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