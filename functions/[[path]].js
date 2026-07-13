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
                const slug = m.title
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, '') // বিশেষ ক্যারেক্টার বাদ দেওয়া
                    .replace(/\s+/g, '-')         // স্পেসকে ড্যাশ করা
                    .replace(/-+/g, '-');         // ডাবল ড্যাশ ফিক্স করা
                return slug === movieSlug;
            });

            // 🎯 গুরুত্বপূর্ণ পরিবর্তন: মুভিটি ডাটাবেজে না পাওয়া গেলে সরাসরি এখানেই কাস্টম 404 রেসপন্স দিয়ে দেওয়া হবে
            if (!targetMovie) {
                return new Response(
                    `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>404 - Movie Not Found | Movie Dakhi</title>
                        <script src="https://cdn.tailwindcss.com"></script>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
                            body { font-family: 'Inter', sans-serif; background-color: #050505; }
                        </style>
                    </head>
                    <body class="text-white min-h-screen flex flex-col justify-between">
                        <header class="flex justify-between items-center py-6 px-6 md:px-12">
                            <a href="https://moviedakhi.com/" class="text-red-600 font-black text-2xl tracking-tighter uppercase">MOVIE DAKHI</a>
                        </header>
                        <main class="flex-grow flex items-center justify-center px-6 py-20">
                            <div class="text-center max-w-xl">
                                <div class="text-red-600 font-black text-9xl md:text-[12rem] leading-none tracking-tighter mb-4 animate-pulse">404</div>
                                <h1 class="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">Movie Disappeared or Removed</h1>
                                <p class="text-gray-400 text-sm md:text-base font-medium mb-10 leading-relaxed">
                                    The content you are looking for has been permanently removed due to DMCA copyright enforcement or is currently unavailable.
                                </p>
                                <a href="https://moviedakhi.com/" class="inline-block border-2 border-red-600 text-white bg-red-600 px-8 py-3 rounded-full font-bold transition duration-300 hover:bg-transparent hover:text-red-600">
                                    Visit Home Page
                                </a>
                            </div>
                        </main>
                        <footer class="py-12 border-t border-[#1a1a1a] flex flex-col items-center justify-center text-center">
                            <div class="text-red-600 font-black text-3xl tracking-tighter uppercase mb-2">MOVIE DAKHI</div>
                        </footer>
                    </body>
                    </html>`,
                    {
                        status: 404,
                        headers: { 'Content-Type': 'text/html; charset=utf-8' }
                    }
                );
            }

            // মুভি পাওয়া গেলে নরমাল প্রোসেস (যেমন আপনার আগের কোডে ছিল)
            const movieTitle = targetMovie.title || "Watch Online";
            const movieGenre = targetMovie.genre || "Action, Drama";
            const moviePoster = targetMovie.posterUrl || "";

            const safeTitle = movieTitle.replace(/"/g, '&quot;');

            // ইন্ডেক্স ফাইল ফেচ করা
            const indexRes = await env.ASSETS.fetch(new URL('/index.html', request.url));
            if (!indexRes.ok) throw new Error("Index HTML load failed");
            let html = await indexRes.text();

            // এসইও মেটা ট্যাগ বসানো
            const seoTags = `
                <title>Watch ${safeTitle} Full Movie Online Free — MovieDakhi</title>
                <meta name="description" content="Stream or download ${safeTitle} full movie in dual audio dubbed version. High speed servers link updated.">
                <meta property="og:title" content="Watch ${safeTitle} Full Movie Online Free — MovieDakhi">
                <meta property="og:description" content="Stream or download ${safeTitle} full movie.">
                <meta property="og:image" content="${moviePoster}">
                <meta name="robots" content="index, follow">
            `;

            html = html.replace('<title>MovieDakhi | Watch Dual Audio Movies & Series Online</title>', seoTags);

            const userAgent = request.headers.get('user-agent') || '';
            const isBot = userAgent.toLowerCase().includes('googlebot') || 
                          userAgent.toLowerCase().includes('google-inspection') || 
                          userAgent.toLowerCase().includes('facebookexternalhit');

            if (isBot) {
                const googleBotForcedContent = `
                <div style="background: #111111 !important; color: #ffffff !important; padding: 40px !important; margin: 20px !important; border-radius: 12px !important; border: 1px solid #222222 !important; font-family: sans-serif !important;">
                    <h1 style="font-size: 24px !important; font-weight: 900 !important; color: #dc2626 !important; margin-bottom: 16px !important; text-transform: uppercase !important;">
                        ${safeTitle} HD Streaming Online Portal
                    </h1>
                    <div style="border-top: 1px solid #333333 !important; padding-top: 16px !important;">
                        <p style="font-size: 14px !important; line-height: 1.6 !important; margin-bottom: 12px !important; color: #e4e4e7 !important;">
                            Welcome to the official index cache database for <strong>${safeTitle}</strong>. This section is optimized to serve automated data parsers, providing deep structured schemas for modern entertainment media content indexing networks.
                        </p>
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
                </div>
                `;
                html = html.replace('</body>', `${googleBotForcedContent}\n</body>`);
            }

            return new Response(html, { headers: { 'Content-Type': 'text/html' } });
        } catch (err) {
            // অন্য কোনো টেকনিক্যাল এরর হলে হোম পেজ লোড হবে
            return env.ASSETS.fetch(request);
        }
    }

    return env.ASSETS.fetch(request);
}