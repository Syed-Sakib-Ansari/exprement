const fs = require('fs');

// ১. ফাইলগুলো পড়া
const movies = JSON.parse(fs.readFileSync('movies.json', 'utf-8'));
const template = fs.readFileSync('index.html', 'utf-8'); // আপনার মূল ডিজাইন

// ২. আউটপুট ফোল্ডার তৈরি (dist)
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// মূল হোমপেজটি dist ফোল্ডারে সেভ করা
fs.writeFileSync('dist/index.html', template);

// ৩. প্রতিটি মুভির জন্য আলাদা HTML জেনারেট করা
movies.forEach(movie => {
    // লিংকের জন্য স্লাগ তৈরি
    let slug = movie.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    let html = template;

    // --- [SEO ম্যাজিক শুরু] ---
    // গুগলের জন্য Title ও Meta Description পরিবর্তন
    html = html.replace(/<title>.*?<\/title>/, `<title>Watch ${movie.title} Online Free HD | MovieDakhi</title>`);
    html = html.replace(/<meta name="description" content=".*?">/, `<meta name="description" content="Watch or download ${movie.title} full movie. ${movie.keyStory || ''}">`);
    
    // OG Tags (ফেসবুক/টেলিগ্রামে শেয়ারের জন্য)
    const ogTags = `
    <meta property="og:title" content="${movie.title} - MovieDakhi">
    <meta property="og:image" content="${movie.posterUrl}">
    `;
    html = html.replace('</head>', ogTags + '\n</head>');

    // গুগলের পড়ার জন্য আপনার ইউনিক স্টোরিগুলো HTML-এর ভেতরে হার্ডকোড করে দেওয়া (মানুষের মতো ন্যাচারাল টেক্সট)
    const seoStoryContent = `
        <div style="margin-top:25px; text-align:left; background:#141414; padding:20px; border-radius:12px; border-left:4px solid #E50914;">
            <h3 style="color:white; font-weight:900; font-size:18px;">Key Story</h3>
            <p style="color:#bbb; margin-bottom:15px; line-height:1.6;">${movie.keyStory || movie.genre}</p>
            
            <h3 style="color:#34A853; font-weight:900; font-size:18px;">Pros</h3>
            <p style="color:#bbb; margin-bottom:15px; line-height:1.6;">${movie.pros || "Great storyline and visual effects."}</p>
            
            <h3 style="color:#00A5FF; font-weight:900; font-size:18px;">Why Watch</h3>
            <p style="color:#bbb; margin-bottom:15px; line-height:1.6;">${movie.whyWatch || "A must watch for entertainment lovers."}</p>
            
            <h3 style="color:#FFC107; font-weight:900; font-size:18px;">Spoken Scripts</h3>
            <p style="color:#bbb; line-height:1.6;">${movie.spokenScripts || "Welcome to MovieDakhi..."}</p>
        </div>
    `;
    
    // Modal-এর ভেতরে টাইটেল এবং স্টোরি রিপ্লেস করা
    html = html.replace('id="modalTitle" class="text-3xl md:text-5xl font-black mb-6 leading-tight">Content Title', `id="modalTitle" class="text-3xl md:text-5xl font-black mb-6 leading-tight">${movie.title}`);
    html = html.replace('Description here...', `Watch ${movie.title} Full Movie HD. ${seoStoryContent}`);
    // --- [SEO ম্যাজিক শেষ] ---

    // সবচেয়ে গুরুত্বপূর্ণ: জাভাস্ক্রিপ্টকে বোঝানোর জন্য একটি গোপন ফ্ল্যাগ দেওয়া
    html = html.replace('</body>', `<script>window.STATIC_MOVIE_SLUG = "${slug}";</script>\n</body>`);

    // ফাইনাল HTML ফাইলটি সেভ করা
    fs.writeFileSync(`dist/${slug}.html`, html);
});

console.log(`✅ ম্যাজিক সফল! ${movies.length} টি মুভির জন্য আলাদা স্ট্যাটিক পেজ তৈরি হয়ে গেছে!`);