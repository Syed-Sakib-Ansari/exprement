const fs = require('fs');
const path = require('path');

// ১. আপনার মূল বড় movies.json ফাইলটি রিড করা
const rawData = fs.readFileSync('movies.json', 'utf8');
const movies = JSON.parse(rawData);

const movieIndex = [];
const outputFolder = path.join(__dirname, 'data', 'movies');

if (!fs.existsSync(outputFolder)){
    fs.mkdirSync(outputFolder, { recursive: true });
}

function generateMovieSlug(title) {
    if (!title) return "movie";
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

// ২. লুপ চালিয়ে ফাইল আলাদা করা হচ্ছে
movies.forEach(movie => {
    const slug = generateMovieSlug(movie.title);

    // হালকা ফাইলের জন্য বেসিক ডাটা (movies-index.json)
    movieIndex.push({
        title: movie.title,
        slug: slug,
        posterUrl: movie.posterUrl,
        category: movie.category,
        language: movie.language,
        quality: movie.quality,
        seriesInfo: movie.seriesInfo || ""
    });

    // ভারী তথ্যের জন্য সিঙ্গেল মুভি অবজেক্ট (data/movies/slug.json)
    const movieDetails = {
        title: movie.title,
        embedUrl: movie.embedUrl,
        downloadUrl1: movie.downloadUrl1,
        downloadUrl2: movie.downloadUrl2,
        synopsis: movie.synopsis || "",
        movieHighlights: movie.movieHighlights || "",
        streamingRecommendation: movie.streamingRecommendation || "",
        detailedPlotSummary: movie.detailedPlotSummary || "",
        episodes: movie.episodes || []
    };

    fs.writeFileSync(
        path.join(outputFolder, `${slug}.json`), 
        JSON.stringify(movieDetails, null, 2), 
        'utf8'
    );
});

// ৩. মেইন হালকা ইনডেক্স ফাইলটি সেভ করা
fs.writeFileSync('movies-index.json', JSON.stringify(movieIndex, null, 2), 'utf8');
console.log(`✅ Sharding Complete! movies-index.json এবং data/movies/ ফোল্ডার চেক করুন।`);