const fs = require('fs');
const https = require('https');

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const BASE_WEBSITE_URL = "https://moviedakhi.com";
const TRACKING_FILE = ".posted_movies.json";

if (!BOT_TOKEN || !CHAT_ID) {
    console.error("❌ এরর: TELEGRAM_BOT_TOKEN অথবা TELEGRAM_CHAT_ID এনভায়রনমেন্ট ভেরিয়েবলে পাওয়া যায়নি!");
    process.exit(1);
}

function generateMovieSlug(title) {
    if (!title) return "movie";
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function sendTelegramPhoto(item) {
    return new Promise((resolve) => {
        const movieSlug = item.slug || generateMovieSlug(item.title);
        const movieUrl = `${BASE_WEBSITE_URL}/${movieSlug}.html`;

        // 📝 টেলিগ্রাম পোস্টের ক্যাপশন ফরম্যাট
        let caption = `🎬 <b>${item.title}</b>\n\n`;
        
        if (item.seriesInfo) {
            caption += `📺 <b>Season/Series:</b> ${item.seriesInfo}\n`;
        }
        if (item.language) {
            caption += `🌐 <b>Language:</b> ${item.language}\n`;
        }
        if (item.quality) {
            caption += `🔥 <b>Quality:</b> ${item.quality}\n`;
        }
        if (item.genre) {
            caption += `🎭 <b>Genre:</b> ${item.genre}\n`;
        }
        
        caption += `\n⚡ <i>Fast High-Speed Stream & Direct Download Available!</i>`;

        const payload = JSON.stringify({
            chat_id: CHAT_ID,
            photo: item.posterUrl,
            caption: caption,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "🍿 Watch & Download Now", url: movieUrl }
                    ]
                ]
            }
        });

        const options = {
            hostname: 'api.telegram.org',
            port: 443,
            path: `/bot${BOT_TOKEN}/sendPhoto`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const response = JSON.parse(data || '{}');
                if (response.ok) {
                    console.log(`✅ সফলভাবে পোস্ট হয়েছে: ${item.title}`);
                } else {
                    console.error(`❌ পোস্ট করতে ব্যর্থ: "${item.title}" -`, response.description);
                }
                resolve();
            });
        });

        req.on('error', (e) => {
            console.error(`❌ নেটওয়ার্ক এরর: "${item.title}" -`, e.message);
            resolve();
        });

        req.write(payload);
        req.end();
    });
}

async function runAutoPoster() {
    try {
        if (!fs.existsSync('movies.json')) {
            console.error("❌ movies.json ফাইল পাওয়া যায়নি!");
            return;
        }

        const rawData = fs.readFileSync('movies.json', 'utf8');
        const movies = JSON.parse(rawData);

        // পূর্বে পোস্ট হওয়া মুভির লিস্ট পড়া
        let postedTitles = [];
        if (fs.existsSync(TRACKING_FILE)) {
            try {
                postedTitles = JSON.parse(fs.readFileSync(TRACKING_FILE, 'utf8'));
            } catch (e) {
                postedTitles = [];
            }
        }

        // শুধুমাত্র নতুন মুভিগুলো ফিল্টার করা
        const newMovies = movies.filter(m => m && m.title && !postedTitles.includes(m.title.trim()));

        if (newMovies.length === 0) {
            console.log("ℹ️ কোনো নতুন মুভি নেই পোস্ট করার জন্য।");
            return;
        }

        console.log(`🚀 ${newMovies.length} টি নতুন মুভি পাওয়া গেছে। টেলিগ্রামে পোস্ট করা হচ্ছে...`);

        for (const movie of newMovies) {
            await sendTelegramPhoto(movie);
            postedTitles.push(movie.title.trim());
            // টেলিগ্রাম লিমিট এড়াতে প্রতিটি পোস্টের মাঝে ১.৫ সেকেন্ড বিরতি
            await new Promise(r => setTimeout(r, 1500));
        }

        // ট্র্যাকিং ফাইল আপডেট করা
        fs.writeFileSync(TRACKING_FILE, JSON.stringify(postedTitles, null, 2), 'utf8');
        console.log("🎉 সব নতুন মুভি টেলিগ্রামে পোস্ট করা সম্পন্ন হয়েছে!");
    } catch (err) {
        console.error("❌ স্ক্রিপ্ট এরর:", err);
    }
}

runAutoPoster();