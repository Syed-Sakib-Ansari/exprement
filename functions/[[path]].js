export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname;

    // ১. স্ট্যাটিক ফাইল (CSS, JS, চিত্র ইত্যাদি) হলে সরাসরি পাস করে দেবে
    if (path.match(/\.(css|js|json|png|jpg|jpeg|gif|ico|xml|txt)$/i)) {
        return env.ASSETS.fetch(request);
    }

    // ২. এগুলো সাধারণ পেজ তাই এগুলোতে মুভি এসইও প্রসেস হবে না
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

            // যদি মুভিটি ডাটাবেজে না থাকে, তবে নরমাল রিকোয়েস্ট পাস হবে (Fallback to main index)
            if (!targetMovie) {
                return env.ASSETS.fetch(request);
            }

            // মূল index.html ফাইলটি মেমোরিতে নেওয়া
            const indexRes = await env.ASSETS.fetch(new URL('/index.html', request.url));
            if (!indexRes.ok) throw new Error("Index template load failed");
            let html = await indexRes.text();

            // ডাটা প্রিপারেশন
            const safeTitle = targetMovie.title;
            const isSeries = targetMovie.episodes && targetMovie.episodes.length > 0;
            const contentType = isSeries ? "Web Series All Episodes" : "Full Movie";
            const cleanLang = targetMovie.language || "Dual Audio [Hindi-English]";
            
            const yearMatch = safeTitle.match(/\((\d{4})\)/);
            const extractedYear = yearMatch ? yearMatch[1] : new Date().getFullYear();
            const movieYear = targetMovie.year || extractedYear;

            const titleHasYear = safeTitle.includes(`(${movieYear})`);
            const SEOTitle = titleHasYear ? safeTitle : `${safeTitle} (${movieYear})`;

            // ৩. মেটা ট্যাগ জেনারেটর (গুগল এবং সোশ্যাল মিডিয়ার জন্য হাইপার অপ্টিমাইজড)
            const dynamicTitle = `${SEOTitle} [${cleanLang}] | Index of / Download 4K 1080p, Watch Online Free ${contentType} - MovieDakhi`;
            const dynamicDesc = `Index of /${SEOTitle} ${contentType} direct download link. Stream ${safeTitle} online free in 4K Ultra HD / 1080p BluRay. High-speed Google Drive & Telegram links for ${cleanLang} with English Subtitles (ESub) HEVC x265 on MovieDakhi.`;
            const dynamicUrl = url.href;
            
            const rawPosterUrl = targetMovie.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";
            const moviePosterUrl = rawPosterUrl.includes('postimg.cc') 
                ? rawPosterUrl 
                : `https://wsrv.nl/?url=${encodeURIComponent(rawPosterUrl)}&w=600&output=jpeg&q=80`;

            // ৪. মেটা কন্টেন্ট রিপ্লেসমেন্ট ইনজেকশন
            html = html.replace(/<title>.*?<\/title>/i, `<title>${dynamicTitle}</title>`);

            const metaMatches = [
                { regex: /<meta\s+name="description"\s+content=".*?"\s*\/?>/i, replacement: `<meta name="description" content="${dynamicDesc}">` },
                { regex: /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:title" content="${dynamicTitle}">` },
                { regex: /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:description" content="${dynamicDesc}">` },
                { regex: /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:url" content="${dynamicUrl}">` },
                { regex: /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, replacement: `<meta property="og:image" content="${moviePosterUrl}">` },
                { regex: /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i, replacement: `<meta name="twitter:title" content="${dynamicTitle}">` },
                { regex: /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i, replacement: `<meta name="twitter:description" content="${dynamicDesc}">` },
                { regex: /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i, replacement: `<meta name="twitter:image" content="${moviePosterUrl}">` }
            ];

            metaMatches.forEach(item => {
                if (html.match(item.regex)) {
                    html = html.replace(item.regex, item.replacement);
                } else {
                    html = html.replace('</head>', `${item.replacement}\n</head>`);
                }
            });

            // ৫. ডাইনামিক স্কিমা জেনারেশন (গুগল রিচ স্নিপেটের জন্য বর্ম)
            const schemaData = {
                "@context": "https://schema.org",
                "@type": isSeries ? "TVSeries" : "Movie",
                "name": safeTitle,
                "image": targetMovie.posterUrl || "",
                "genre": targetMovie.category || "Entertainment",
                "dateCreated": movieYear,
                "inLanguage": ["English", "Hindi"],
                "description": dynamicDesc
            };
            const dynamicSchemaScript = `<script id="seoSchemaDynamic" type="application/ld+json">${JSON.stringify(schemaData)}</script>`;
            html = html.replace('</head>', `${dynamicSchemaScript}\n</head>`);

            // ৬. ক্রলার গ্যারান্টি লেয়ার (GoogleBot / Facebook Scraper-এর জন্য স্ট্রাকচার্ড ডেটা ইনজেকশন)
            const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
            const isBot = userAgent.includes('googlebot') || userAgent.includes('google-inspection') || userAgent.includes('facebookexternalhit');

            if (isBot) {
                const movieGenre = targetMovie.category || "Hollywood";
                let seoBodyContent = `
                <div id="seoContentSection" style="background: #000 !important; color: #fff !important; padding: 20px !important; font-family: sans-serif !important; direction: ltr !important;">
                    <h1 style="font-size: 24px !important; margin-bottom: 10px !important; color: #ef4444 !important;">${dynamicTitle}</h1>
                    <p style="font-size: 14px !important; line-height: 1.6 !important; color: #e4e4e7 !important; margin-bottom: 15px !important;">${dynamicDesc}</p>
                    <div style="border: 1px solid #27272a !important; padding: 15px !important; border-radius: 8px !important; background: #09090b !important;">
                        <p style="font-size: 12px !important; line-height: 1.6 !important; margin-bottom: 8px !important; color: #d4d4d8 !important;">
                            <strong>Database Source:</strong> ${movieSlug}.html — Direct Download Link Activated (Secure Cloud Server)
                        </p>
                        <p style="font-size: 12px !important; line-height: 1.6 !important; margin-bottom: 8px !important; color: #d4d4d8 !important;">
                            <strong>Genre Category:</strong> ${movieGenre}
                        </p>
                        <p style="font-size: 12px !important; line-height: 1.6 !important; margin: 0 !important; color: #a1a1aa !important;">
                            Stream online or download ${safeTitle} complete season / full movie via high-speed Google Drive and Telegram links. Available in Dual Audio [Hindi-English] Dubbed 4K Ultra HD, 1080p BluRay, and x265 HEVC codec free on MovieDakhi.
                        </p>
                    </div>
                `;
                
                if (targetMovie.movieHighlights) {
                    seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">🎯 Streaming Recommendation:</b><p style="color: #bbb; font-size: 14px; line-height: 1.6;">${targetMovie.movieHighlights}</p></div>`;
                }
                if (targetMovie.detailedPlotSummary) {
                    seoBodyContent += `<div style="margin-top: 20px; text-align: left;"><b style="color: #fff; font-size: 16px; display: block; margin-bottom: 5px;">🍿 Detailed Plot Summary:</b><p style="color: #999; font-size: 13px; white-space: pre-line; line-height: 1.6; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); font-style: normal;">${targetMovie.detailedPlotSummary}</p></div>`;
                }
                seoBodyContent += `</div>`;

                // লেআউট ব্রেক ছাড়া বডির একদম শেষে ন্যাচারাল ফুটারের ওপরে পুশ করার মেথড
                html = html.replace('</body>', `${seoBodyContent}\n</body>`);
            }

            return new Response(html, { headers: { 'Content-Type': 'text/html' } });
        } catch (err) {
            // কোনো কারণে ফেইল হলে নরমাল index.html লোড হবে, সাইট ডাউন হবে না
            return env.ASSETS.fetch(request);
        }
    }

    return env.ASSETS.fetch(request);
}