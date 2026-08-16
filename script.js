if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// ==========================================
// 🔑 TMDB API CONFIG & HELPER ENGINE
// ==========================================
const CLIENT_TMDB_API_KEY = "dafa07a5692eee854f7f511b99316708";
const clientTmdbCache = {};

async function getClientTMDBDetails(title, year) {
    const cacheKey = `${title}_${year}`;
    if (clientTmdbCache[cacheKey]) return clientTmdbCache[cacheKey];
    if (!CLIENT_TMDB_API_KEY) return null;

    try {
        const cleanTitle = title.replace(/\s*\(\d{4}\).*/, '').trim();
        let searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${CLIENT_TMDB_API_KEY}&query=${encodeURIComponent(cleanTitle)}`;
        let searchRes = await fetch(searchUrl);
        if (!searchRes.ok) return null;

        let searchData = await searchRes.json();
        if (!searchData.results || searchData.results.length === 0) {
            searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${CLIENT_TMDB_API_KEY}&query=${encodeURIComponent(cleanTitle)}`;
            searchRes = await fetch(searchUrl);
            if (searchRes.ok) searchData = await searchRes.json();
        }

        if (!searchData.results || searchData.results.length === 0) return null;

        const match = searchData.results[0];
        const mediaType = match.media_type === 'tv' ? 'tv' : 'movie';
        const detailUrl = `https://api.themoviedb.org/3/${mediaType}/${match.id}?api_key=${CLIENT_TMDB_API_KEY}&append_to_response=credits`;
        const detailRes = await fetch(detailUrl);
        if (!detailRes.ok) return null;

        const detail = await detailRes.json();
        const overview = detail.overview || '';
        const cast = detail.credits?.cast?.slice(0, 5).map(c => c.name).join(', ') || '';
        const crew = detail.credits?.crew || [];
        const directorObj = crew.find(c => c.job === 'Director') || crew.find(c => c.known_for_department === 'Directing');
        const director = directorObj ? directorObj.name : '';
        const runtime = detail.runtime ? `${detail.runtime} Mins` : (detail.episode_run_time?.[0] ? `${detail.episode_run_time[0]} Mins` : '');

        const result = { overview, cast, director, runtime };
        clientTmdbCache[cacheKey] = result;
        return result;
    } catch (e) {
        return null;
    }
}

function renderModalContent(item, SEOFullTitle, titleKey, cleanLang, releaseYear, contentType, dynamicFooterKeywords, tmdb) {
    const modalDescElem = document.getElementById('modalDesc');
    if (!modalDescElem) return;

    const directorText = tmdb?.director || item.director || "Renowned Director";
    const castText = tmdb?.cast || (Array.isArray(item.cast) ? item.cast.join(', ') : item.cast) || "Top Featured Ensemble Cast";
    const durationText = tmdb?.runtime || item.duration || "Full Feature Length";

    const plotText = tmdb?.overview || item.detailedPlotSummary || `${SEOFullTitle} is a prominent ${item.category || 'Cinema'} release officially debuting in ${releaseYear}. Presented in ${cleanLang}, this production delivers a rich narrative experience tailored for fans of ${item.genre || 'Action & Drama'}. The storyline brings together dynamic character arcs, high-definition audio-visual elements, and cinematic sequences that keep viewers engaged from start to finish.`;

    const playbackGuide = `On MovieDakhi, viewers can access full metadata, audio specifications, and verified stream references for ${SEOFullTitle}. The media file is encoded in x265 HEVC MKV format with English softcoded subtitles (ESub), providing ultra-smooth remote playback across Google Chrome, PC, Android, iOS, Smart TV, and Chromecast setups.`;

    modalDescElem.innerHTML = `
        <div class="seo-rich-layout text-left space-y-6 font-sans text-xs md:text-[13px] text-gray-300 antialiased select-text">
            <div class="flex flex-wrap items-center gap-3 border-b border-white/10 pb-3">
                <span class="px-2.5 py-1 text-[10px] font-black tracking-wider text-white bg-red-600 rounded-sm uppercase inline-block">
                    ${item.genre || "Action / Drama"}
                </span>
                <span class="text-[11px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span> TMDB Media Details Verified
                </span>
            </div>

            <div class="p-4 bg-zinc-900/80 border border-white/10 rounded-xl space-y-2.5 text-[12px] shadow-lg">
                <div class="flex flex-wrap items-center justify-between border-b border-white/[0.06] pb-2">
                    <span class="text-gray-400 font-medium">🎬 Director:</span>
                    <span class="font-bold text-white">${directorText}</span>
                </div>
                <div class="flex flex-wrap items-center justify-between border-b border-white/[0.06] pb-2">
                    <span class="text-gray-400 font-medium">⭐ Star Cast:</span>
                    <span class="font-bold text-red-400 truncate max-w-xs md:max-w-md">${castText}</span>
                </div>
                <div class="flex flex-wrap items-center justify-between">
                    <span class="text-gray-400 font-medium">⏱️ Runtime:</span>
                    <span class="font-bold text-amber-400">${durationText}</span>
                </div>
            </div>

            <div class="space-y-2 pt-2">
                <h3 class="text-xs md:text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <i class="fas fa-book-open text-red-500"></i> Detailed Storyline & Synopsis
                </h3>
                <p class="leading-relaxed text-gray-300 text-[12px] md:text-[13px] font-normal text-justify bg-zinc-950/60 p-3.5 rounded-lg border border-white/5">
                    ${plotText}
                </p>
            </div>

            <div class="space-y-2">
                <h3 class="text-xs md:text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <i class="fas fa-tv text-blue-500"></i> Media & Playback Overview
                </h3>
                <p class="leading-relaxed text-gray-400 text-[11px] md:text-[12px] font-normal text-justify bg-zinc-950/40 p-3 rounded-lg border border-white/5">
                    ${playbackGuide}
                </p>
            </div>

            <div class="p-4 bg-zinc-900/40 border border-white/10 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-x-8 text-[12px]">
                <div class="flex items-center justify-between py-2 border-b border-white/[0.06]">
                    <span class="text-gray-400 font-medium">📌 Title</span>
                    <span class="font-semibold text-white truncate max-w-[150px]" title="${titleKey}">${titleKey}</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-white/[0.06]">
                    <span class="text-gray-400 font-medium">🎬 Format</span>
                    <span class="font-semibold text-white">MKV / x265 HEVC</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-white/[0.06]">
                    <span class="text-gray-400 font-medium">🌐 Audio</span>
                    <span class="font-bold text-emerald-400">${cleanLang}</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-white/[0.06]">
                    <span class="text-gray-400 font-medium">📅 Release Year</span>
                    <span class="font-semibold text-white">${releaseYear}</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-white/[0.06] sm:border-b-0">
                    <span class="text-gray-400 font-medium">🔥 Quality</span>
                    <span class="font-semibold text-amber-400">720p, 1080p, 4K UHD</span>
                </div>
                <div class="flex items-center justify-between py-2">
                    <span class="text-gray-400 font-medium">📝 Subtitles</span>
                    <span class="font-semibold text-gray-200">English (ESub)</span>
                </div>
            </div>

            <div class="pt-3 border-t border-white/5">
                <p class="text-[10px] text-gray-600 leading-relaxed text-justify opacity-40 font-normal">
                    ${dynamicFooterKeywords}
                </p>
            </div>
        </div>
    `;
}

function generateMovieSlug(title) {
    if (!title) return "movie";
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

const contentData = [];
const categoryIndexMap = {};

function buildCategoryIndex() {
    Object.keys(categoryIndexMap).forEach(key => delete categoryIndexMap[key]);
    contentData.forEach(item => {
        const cat = item.category || "Others";
        if (!categoryIndexMap[cat]) {
            categoryIndexMap[cat] = [];
        }
        categoryIndexMap[cat].push(item);
    });
}

function processContentItems() {
    contentData.forEach((item, index) => {
        item.id = index;
        item.slug = generateMovieSlug(item.title);
    });
    buildCategoryIndex();
}

function openMovieDakhiDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('MovieDakhiDB', 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('cacheStore')) {
                db.createObjectStore('cacheStore');
            }
        };
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

function getIDBCache(key) {
    return openMovieDakhiDB().then(db => {
        return new Promise((resolve) => {
            const transaction = db.transaction('cacheStore', 'readonly');
            const store = transaction.objectStore('cacheStore');
            const request = store.get(key);
            request.onsuccess = (e) => resolve(e.target.result || null);
            request.onerror = () => resolve(null);
        });
    });
}

function setIDBCache(key, value) {
    return openMovieDakhiDB().then(db => {
        return new Promise((resolve) => {
            const transaction = db.transaction('cacheStore', 'readwrite');
            const store = transaction.objectStore('cacheStore');
            const request = store.put(value, key);
            request.onsuccess = () => resolve(true);
            request.onerror = () => resolve(false);
        });
    });
}

async function fetchAndCacheNetworkDatabase() {
    try {
        const response = await fetch('movies.json');
        if (response.ok) {
            const text = await response.text();
            const db = JSON.parse(text);
            if (Array.isArray(db) && db.length > 0) {
                await setIDBCache('moviedakhi_db_cache', text);
                contentData.length = 0;
                contentData.push(...db);
                processContentItems();
            }
        }
    } catch (err) {
        processContentItems();
    }
}

function triggerBackgroundUpdateCheck() {
    setTimeout(async () => {
        try {
            const response = await fetch('movies.json');
            if (response.ok) {
                const text = await response.text();
                const cachedText = await getIDBCache('moviedakhi_db_cache');

                if (text !== cachedText) {
                    const db = JSON.parse(text);
                    if (Array.isArray(db) && db.length > 0) {
                        await setIDBCache('moviedakhi_db_cache', text);
                        contentData.length = 0;
                        contentData.push(...db);
                        processContentItems();

                        if (currentView === 'home') {
                            initHeroSlider();
                            renderRecentAdds();
                            renderCategorySections(false);
                        } else {
                            initLibraryRender();
                        }
                    }
                }
            }
        } catch (err) { }
    }, 4500);
}

async function loadContentDatabase() {
    const cachedText = await getIDBCache('moviedakhi_db_cache');
    if (cachedText) {
        try {
            const db = JSON.parse(cachedText);
            if (Array.isArray(db) && db.length > 0) {
                contentData.length = 0;
                contentData.push(...db);
                processContentItems();
                triggerBackgroundUpdateCheck();
                return;
            }
        } catch (e) { }
    }
    await fetchAndCacheNetworkDatabase();
}

const databaseLoadPromise = loadContentDatabase();

const categories = [
    "all", "Hollywood", "Bollywood", "South", "Animation",
    "Korean Country", "Chinese", "Hollywood Series", "Bollywood Series",
    "Korean Series", "Adult Comedy", "Others"
];

let currentItem = null;
let downloadClickCount = 0;
let currentEpisodeIndex = null;
let currentServerIndex = 1;
let preSearchState = null;
let currentView = 'home';
let sliderInterval;
let scrollTimeoutId = null;
let isModalClosing = false;
let lastVisitedCategory = 'all';

const homeView = document.getElementById('homeView');
const libraryView = document.getElementById('libraryView');
const recentAddsGrid = document.getElementById('recentAddsGrid');
const libraryGrid = document.getElementById('libraryGrid');
const categorySections = document.getElementById('categorySections');
const sliderWrapper = document.getElementById('sliderWrapper');
const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');
const categoryMenu = document.getElementById('categoryMenu');

let libraryData = [];
let libraryDisplayedCount = 0;
const ITEMS_PER_PAGE = 30;
let isLoading = false;
let activeSubGridId = null;

function getOptimizedImageUrl(url, width = 300) {
    if (!url) return "";
    if (url.includes('wikimedia.org') || url.includes('wikipedia.org')) return url;
    // 🚀 PAGE WEIGHT FIX: কোয়ালিটি ঠিক রেখে নেটওয়ার্ক পে-লোড ৫০% কমানো হয়েছে
    const isMobile = window.innerWidth < 640;
    const targetWidth = isMobile ? 180 : Math.min(width, 280);
    return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${targetWidth}&output=webp&q=78`;
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function renderServerButtons() {
    const serverSec = document.getElementById('serverSection');
    const serverList = document.getElementById('serverList');
    if (!serverSec || !serverList || !currentItem) return;

    const isSeries = currentItem.episodes && currentItem.episodes.length > 0;
    const target = isSeries ? currentItem.episodes[currentEpisodeIndex !== null ? currentEpisodeIndex : 0] : currentItem;

    if (!target) {
        serverSec.classList.add('hidden');
        return;
    }

    // 🚀 CLEAN & PROFESSIONAL STREAM SERVER CONFIG
    const servers = [
        { key: 'embedUrl', name: 'Server 1', tag: 'Primary HD' },
        { key: 'embedUrl2', name: 'Server 2', tag: 'Fast Stream' },
        { key: 'embedUrl3', name: 'Server 3', tag: 'VIP Mirror' },
        { key: 'embedUrl4', name: 'Server 4', tag: 'Alternative' },
        { key: 'embedUrl5', name: 'Server 5', tag: '4K Ultra HD' },
        { key: 'embedUrl6', name: 'Server 6', tag: 'Backup Server' }
    ];

    const activeServers = servers.filter(s => target[s.key] && typeof target[s.key] === 'string' && target[s.key].trim() !== '');

    if (activeServers.length > 1) {
        serverSec.classList.remove('hidden');
        serverList.innerHTML = '';

        activeServers.forEach((s, idx) => {
            const btn = document.createElement('button');
            btn.className = `server-btn server-btn-${idx + 1} ${idx === 0 ? 'active' : ''}`;
            btn.innerHTML = `
                <div class="server-icon-box">
                    <i class="fas fa-server"></i>
                </div>
                <div class="server-info">
                    <span class="server-title">${s.name}</span>
                    <span class="server-tag">${s.tag}</span>
                </div>
            `;
            btn.onclick = () => playServer(target[s.key], btn);
            serverList.appendChild(btn);
        });

        loadIframeUrl(target[activeServers[0].key]);
    }
    else if (activeServers.length === 1) {
        serverSec.classList.add('hidden');
        serverList.innerHTML = '';
        loadIframeUrl(target[activeServers[0].key]);
    }
    else {
        serverSec.classList.add('hidden');
        serverList.innerHTML = '';
    }
}

function playServer(rawUrl, btnElement) {
    const movieModal = document.getElementById('movieModal');

    // 🛡️ যদি বাটনটি ইতিমধ্যেই Active / Playing থাকে: কোনো অ্যাড বা রিলোড হবে না, শুধু ওপরে স্ক্রোল করবে
    if (btnElement && btnElement.classList.contains('active')) {
        if (movieModal) {
            movieModal.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
    }

    // 🚀 নতুন সার্ভার সিলেক্ট করলে অ্যাড ওপেন হবে এবং নতুন সার্ভার লোড হবে
    const smartAdLink = "https://www.effectivecpmnetwork.com/rr3q82zj6?key=c81990371bb12dd6139bb39d8a8b4a4e";
    window.open(smartAdLink, '_blank');

    document.querySelectorAll('.server-btn').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    loadIframeUrl(rawUrl);

    if (movieModal) {
        movieModal.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function decodeAndCleanUrl(rawUrl) {
    if (!rawUrl) return "";
    let str = rawUrl.trim();

    try {
        if (!str.startsWith('http') && !str.startsWith('<iframe') && /^[A-Za-z0-9+/=]+$/.test(str)) {
            str = atob(str);
        }
    } catch (e) { }

    const match = str.match(/src=["']([^"']+)["']/i);
    if (match && match[1]) str = match[1];
    return str.replace(/&amp;/g, '&');
}

function loadIframeUrl(rawUrl) {
    let url = decodeAndCleanUrl(rawUrl);
    const actualVideo = document.getElementById('actualVideo');
    if (actualVideo) {
        actualVideo.classList.remove('hidden');
        actualVideo.innerHTML = `<iframe id="videoIframe" class="absolute top-0 left-0 w-full h-full border-0 outline-none bg-black block rounded-t-2xl" src="${url}" frameborder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen="true" style="width:100%;height:100%;object-fit:contain;border:0;"></iframe>`;
    }
}

function renderCategories() {
    const mobileGrid = document.getElementById('mobileCategoryGrid');
    const desktopNav = document.getElementById('desktopCategoryPills');
    const libraryFilters = document.getElementById('libraryFilters');

    if (mobileGrid) mobileGrid.innerHTML = '';
    if (desktopNav) desktopNav.innerHTML = '';
    if (libraryFilters) libraryFilters.innerHTML = '';

    categories.forEach(cat => {
        const label = cat === 'Korean Country' ? 'Korean' : cat;

        if (cat === 'all') {
            if (mobileGrid) {
                const mobileItem = document.createElement('a');
                mobileItem.className = 'cat-menu-item flex items-center justify-center text-white no-underline w-full h-full';
                mobileItem.innerText = 'Home';
                mobileItem.href = '#';
                mobileItem.onclick = (e) => {
                    e.preventDefault();
                    toggleCategoryMenu(false, false);
                    clearSearch(true);
                    switchView('home', null, 'replace');
                };
                mobileGrid.appendChild(mobileItem);
            }
            return;
        }

        const realLink = `?view=library&category=${encodeURIComponent(cat)}`;

        if (mobileGrid) {
            const mobileItem = document.createElement('a');
            mobileItem.className = 'cat-menu-item flex items-center justify-center text-white no-underline w-full h-full';
            mobileItem.innerText = label;
            mobileItem.href = realLink;
            mobileItem.onclick = (e) => {
                e.preventDefault();
                toggleCategoryMenu(false, false, true);
                switchView('library', cat, true);
            };
            mobileGrid.appendChild(mobileItem);
        }

        if (desktopNav) {
            const desktopItem = document.createElement('a');
            desktopItem.href = realLink;
            desktopItem.className = 'category-pill border border-white/10 px-5 md:px-7 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:border-red-600 transition';
            desktopItem.innerText = label;
            desktopItem.onclick = (e) => {
                e.preventDefault();
                switchView('library', cat);
            };
            desktopNav.appendChild(desktopItem);

            if (libraryFilters) {
                const filterItem = desktopItem.cloneNode(true);
                filterItem.setAttribute('data-category', cat);
                filterItem.onclick = (e) => {
                    e.preventDefault();
                    switchView('library', cat);
                };
                libraryFilters.appendChild(filterItem);
            }
        }
    });
}

let savedScrollY = 0;

function toggleCategoryMenu(show, triggerBack = true) {
    const fab = document.getElementById('mobileFab');
    const fabIconBars = document.getElementById('fabIconBars');
    const fabIconTimes = document.getElementById('fabIconTimes');

    if (show) {
        savedScrollY = window.scrollY || document.documentElement.scrollTop;

        const activeCat = document.querySelector('#libraryFilters .category-pill.active')?.getAttribute('data-category') || null;

        try {
            window.history.replaceState({
                view: currentView,
                category: activeCat,
                scrollY: savedScrollY,
                displayedCount: libraryDisplayedCount,
                validDakhiState: true
            }, '');

            window.history.pushState({
                isMenuOpen: true,
                view: currentView,
                category: activeCat,
                scrollY: savedScrollY,
                displayedCount: libraryDisplayedCount,
                validDakhiState: true
            }, '');
        } catch (e) { }

        if (categoryMenu) {
            categoryMenu.classList.remove('hidden');
            void categoryMenu.offsetWidth;
            categoryMenu.classList.add('active');
        }

        document.body.style.position = 'fixed';
        document.body.style.top = `-${savedScrollY}px`;
        document.body.style.width = '100%';

        if (fab) fab.classList.add('menu-open');
        if (fabIconBars) fabIconBars.classList.add('scale-0', 'opacity-0', '-rotate-90');
        if (fabIconTimes) fabIconTimes.classList.remove('scale-0', 'opacity-0', 'rotate-90');
    } else {
        if (categoryMenu) {
            categoryMenu.classList.remove('active');
            setTimeout(() => categoryMenu.classList.add('hidden'), 400);
        }

        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';

        window.scrollTo({ top: savedScrollY, left: 0, behavior: 'instant' });

        if (triggerBack && window.history.state?.isMenuOpen) {
            window.history.back();
        }

        if (fab) fab.classList.remove('menu-open');
        if (fabIconBars) fabIconBars.classList.remove('scale-0', 'opacity-0', '-rotate-90');
        if (fabIconTimes) fabIconTimes.classList.add('scale-0', 'opacity-0', 'rotate-90');
    }
}

// ==========================================
// 🚀 DRAGGABLE MOBILE FAB LOGIC
// ==========================================
const fab = document.getElementById('mobileFab');
let isDragging = false;
let startX, startY, initialX, initialY;
let translateX = 0, translateY = 0;
let moved = false;

function dragStart(e) {
    moved = false;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;

    const rect = fab.getBoundingClientRect();
    initialX = rect.left;
    initialY = rect.top;

    fab.style.left = `${initialX}px`;
    fab.style.top = `${initialY}px`;
    fab.style.bottom = 'auto';
    fab.style.right = 'auto';

    fab.style.transition = 'none';
    fab.setPointerCapture(e.pointerId);
}

function drag(e) {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
        moved = true;
    }

    if (moved) {
        let nextX = initialX + dx;
        let nextY = initialY + dy;

        const maxX = document.documentElement.clientWidth - fab.offsetWidth;
        const maxY = document.documentElement.clientHeight - fab.offsetHeight;

        nextX = Math.max(0, Math.min(nextX, maxX));
        nextY = Math.max(0, Math.min(nextY, maxY));

        translateX = nextX - initialX;
        translateY = nextY - initialY;

        fab.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    }
}

function dragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    fab.releasePointerCapture(e.pointerId);

    if (moved) {
        let newX = initialX + translateX;
        let newY = initialY + translateY;

        const maxX = document.documentElement.clientWidth - fab.offsetWidth;
        const maxY = document.documentElement.clientHeight - fab.offsetHeight;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        fab.style.transform = 'none';
        fab.style.left = `${newX}px`;
        fab.style.top = `${newY}px`;

        translateX = 0;
        translateY = 0;
    }

    void fab.offsetWidth;
    fab.style.transition = 'background-color 0.3s, box-shadow 0.3s, opacity 0.3s, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
}

if (fab) {
    fab.addEventListener('pointerdown', dragStart);
    fab.addEventListener('pointermove', drag);
    fab.addEventListener('pointerup', dragEnd);
    fab.addEventListener('pointercancel', dragEnd);

    fab.addEventListener('click', (e) => {
        if (moved) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        fab.classList.add('animation-stopped');
        const isMenuOpen = categoryMenu.classList.contains('active');
        toggleCategoryMenu(!isMenuOpen);
    });
}

window.addEventListener('resize', () => {
    if (!fab) return;
    const maxX = document.documentElement.clientWidth - fab.offsetWidth;
    const maxY = document.documentElement.clientHeight - fab.offsetHeight;
    const currentX = fab.offsetLeft;
    const currentY = fab.offsetTop;

    if (currentX > maxX) fab.style.left = `${maxX}px`;
    if (currentY > maxY) fab.style.top = `${maxY}px`;
    if (currentX < 0) fab.style.left = `0px`;
    if (currentY < 0) fab.style.top = `0px`;
});

function initHeroSlider() {
    const sliderWrapper = document.getElementById('sliderWrapper');
    if (!sliderWrapper || contentData.length === 0) return;

    sliderWrapper.innerHTML = '';

    const windowWidth = window.innerWidth;
    let colCount = 3;

    if (windowWidth >= 1280) colCount = 6;
    else if (windowWidth >= 1024) colCount = 5;
    else if (windowWidth >= 640) colCount = 4;
    else colCount = 3;

    sliderWrapper.style.gridTemplateColumns = `repeat(${colCount}, minmax(0, 1fr))`;

    const uniqueMoviesMap = new Map();
    contentData.forEach(item => {
        if (item && item.title && !uniqueMoviesMap.has(item.title)) {
            uniqueMoviesMap.set(item.title, item);
        }
    });
    const uniquePool = Array.from(uniqueMoviesMap.values());
    if (uniquePool.length === 0) return;

    const itemsPerCol = 8;
    const heroImgWidth = windowWidth < 640 ? 180 : 250;

    for (let c = 0; c < colCount; c++) {
        const colDiv = document.createElement('div');
        const isUp = c % 2 === 0;
        colDiv.className = `flex flex-col ${isUp ? 'marquee-col-up' : 'marquee-col-down'}`;

        const colItems = [];
        const startIndex = (c * itemsPerCol) % uniquePool.length;

        for (let i = 0; i < itemsPerCol; i++) {
            colItems.push(uniquePool[(startIndex + i) % uniquePool.length]);
        }

        const doubledItems = [...colItems, ...colItems];

        doubledItems.forEach(movie => {
            const imgCard = document.createElement('div');
            imgCard.className = 'w-full p-1.5 md:p-2 shrink-0 box-border';
            imgCard.innerHTML = `
                <div class="w-full aspect-[2/3] rounded-lg md:rounded-xl overflow-hidden shadow-lg border border-white/10 cursor-pointer hover:scale-105 transition-transform duration-300 bg-zinc-900">
                    <img src="${getOptimizedImageUrl(movie.posterUrl, heroImgWidth)}" alt="${movie.title}" class="w-full h-full object-cover block" loading="lazy" decoding="async">
                </div>
            `;

            imgCard.onclick = () => openModal(movie.id);
            colDiv.appendChild(imgCard);
        });

        sliderWrapper.appendChild(colDiv);
    }
}

function updateSearchUI() {
    const libraryFilters = document.getElementById('libraryFilters');
    if (!searchInput) return;
    if (searchInput.value.trim().length > 0) {
        if (searchIcon) {
            searchIcon.classList.remove('fa-search');
            searchIcon.classList.add('fa-times', 'cursor-pointer');
        }
        if (libraryFilters) libraryFilters.style.display = 'none';
    } else {
        if (searchIcon) {
            searchIcon.classList.remove('fa-times', 'cursor-pointer');
            searchIcon.classList.add('fa-search');
        }
        if (libraryFilters) libraryFilters.style.display = '';
    }
}

// 🚀 SEARCH ICON CLICK HANDLER (X আইকনে ক্লিক করলে সার্চ ক্লিয়ার করার জন্য)
function handleSearchIconClick() {
    if (searchInput && searchInput.value.trim().length > 0) {
        clearSearch();
    } else if (searchInput) {
        searchInput.focus();
    }
}

// 🚀 CLEAR SEARCH & RESTORE EXACT SCROLL POSITION
function clearSearch(preventRestore = false) {
    if (searchInput) searchInput.value = '';
    updateSearchUI();
    if (searchInput) searchInput.blur();

    if (!preventRestore && preSearchState) {
        const targetState = preSearchState;
        preSearchState = null; // স্টেট রিসেট করার আগে ডাটা কপি রাখা
        switchView(targetState.view, targetState.category, 'replace', targetState.displayedCount, targetState.scrollY);
    } else {
        preSearchState = null;
        initLibraryRender();
    }
}

function switchView(viewName, filterCategory = null, mode = true, restoredCount = 0, targetScroll = 0) {
    if (mode) {
        const currentScroll = window.scrollY;
        const activeCat = document.querySelector('#libraryFilters .category-pill.active')?.getAttribute('data-category') || null;
        try {
            window.history.replaceState({
                view: currentView,
                category: activeCat,
                scrollY: currentScroll,
                displayedCount: libraryDisplayedCount,
                validDakhiState: true
            }, '');
        } catch (e) { }
    }

    currentView = viewName;
    if (homeView) homeView.classList.remove('active');
    if (libraryView) libraryView.classList.remove('active');

    if (viewName === 'home') {
        if (homeView) homeView.classList.add('active');
        document.title = "MovieDakhi | Watch Dual Audio Movies & Web Series Free Online HD";
    } else {
        if (libraryView) libraryView.classList.add('active');
        if (filterCategory && searchInput) {
            searchInput.value = '';
            updateSearchUI();
            preSearchState = null;
        }

        document.title = filterCategory && filterCategory !== 'all' ? `${filterCategory.replace(/\+/g, ' ')} Movies - MovieDakhi` : "All Movies & Web Series - MovieDakhi";

        const catValue = filterCategory || 'all';
        document.querySelectorAll('#libraryFilters .category-pill').forEach(p => p.classList.remove('active'));
        document.querySelector(`#libraryFilters .category-pill[data-category="${catValue}"]`)?.classList.add('active');

        initLibraryRender(catValue, restoredCount);

        if (lastVisitedCategory !== catValue && catValue !== 'all') {
            showUnlockPopup();
        }
        lastVisitedCategory = catValue;
    }

    if (mode) {
        try {
            const isBlob = window.location.protocol === 'blob:';
            const rootUrl = new URL('/', window.location.origin);
            if (viewName === 'library') {
                rootUrl.searchParams.set('view', 'library');
                if (filterCategory && filterCategory !== 'all') {
                    rootUrl.searchParams.set('category', filterCategory);
                }
            }

            const stateObj = { view: viewName, category: filterCategory, scrollY: targetScroll, displayedCount: restoredCount || 30, validDakhiState: true };

            if (mode === 'replace') {
                window.history.replaceState(stateObj, '', rootUrl);
            } else {
                window.history.pushState(stateObj, '', rootUrl);
            }
        } catch (e) { }

        // 🚀 EXACT SCROLL RESTORE: সার্চ ক্লিয়ার করার সাথে সাথে পূর্বের স্ক্রোল পজিশনে ফেরাবে
        requestAnimationFrame(() => {
            window.scrollTo({ top: targetScroll, left: 0, behavior: 'instant' });
            setTimeout(() => window.scrollTo({ top: targetScroll, left: 0, behavior: 'instant' }), 50);
        });
    }
}

function createMovieCard(item, isAboveFold = false) {
    const card = document.createElement('a');
    const movieSlug = item.slug || generateMovieSlug(item.title);
    card.href = `/${movieSlug}.html`;
    card.className = 'movie-card relative flex flex-col group cursor-pointer no-underline';

    const infoText = item.seriesInfo ? `<p class="text-[9px] md:text-[10px] text-gray-400 font-medium mt-1 tracking-wide uppercase">${item.seriesInfo}</p>` : '';
    const qualityBadgeHtml = item.quality ? `<div class="absolute top-0 left-0 z-20 bg-[#E50914] text-white px-2 py-0.5 md:px-1.5 md:py-0.5 text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-br-lg shadow-md">${item.quality}</div>` : '';
    const languageBadgeHtml = item.language ? `<div class="absolute top-0 right-0 z-20 bg-[#E50914] text-white px-2 py-0.5 md:px-1.5 md:py-0.5 text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-bl-lg shadow-md">${item.language}</div>` : '';

    const loadingStrategy = isAboveFold ? 'eager' : 'lazy';
    const fetchPriority = isAboveFold ? 'high' : 'auto';

    card.innerHTML = `
        <div class="relative rounded-lg overflow-hidden bg-[#111] shadow-xl aspect-[2/3] ring-1 ring-white/5 transition-all duration-300">
            ${qualityBadgeHtml}
            ${languageBadgeHtml}
            <img src="${getOptimizedImageUrl(item.posterUrl, 250)}" alt="${item.title} Media Details & Poster" class="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110" loading="${loadingStrategy}" fetchpriority="${fetchPriority}" decoding="async">
            <div class="play-overlay absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-5 transition-opacity duration-500 ease-out">
                <div class="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white flex items-center justify-center bg-black/20 backdrop-blur-[1px] shadow-[0_0_15px_rgba(0,0,0,0.6)] transform scale-90 group-hover:scale-100 transition-all duration-500 ease-out">
                    <i class="fas fa-play text-white text-xs md:text-sm ml-1"></i>
                </div>
            </div>
        </div>
        <div class="mt-3 text-center flex flex-col items-center md:block">
            <h4 class="font-black text-white text-[11px] md:text-sm uppercase tracking-tight line-clamp-1">${item.title}</h4>
            ${infoText}
        </div>`;

    card.onclick = (e) => {
        e.preventDefault();
        openModal(item.id);
    };
    return card;
}

function renderRecentAdds() {
    if (!recentAddsGrid) return;
    recentAddsGrid.innerHTML = '';

    const recentItems = categoryIndexMap["Recent Adds"] || [];
    const fragment = document.createDocumentFragment();

    recentItems.slice(0, 18).forEach((item, index) => {
        // 🚀 First 6 items load with high priority for instant LCP
        fragment.appendChild(createMovieCard(item, index < 6));
    });

    recentAddsGrid.appendChild(fragment);
}

function renderCategorySections(forceRenderAll = false) {
    if (!categorySections) return;
    categorySections.innerHTML = '';
    const fragment = document.createDocumentFragment();

    const observerOptions = {
        root: null,
        rootMargin: '400px 0px',
        threshold: 0.01
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadCategorySection(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    function loadCategorySection(targetSection) {
        const cat = targetSection.getAttribute('data-category-lazy');
        const lazyGrid = targetSection.querySelector('.lazy-grid');

        const filtered = categoryIndexMap[cat] || [];

        lazyGrid.innerHTML = '';
        const cardsFragment = document.createDocumentFragment();

        filtered.slice(0, 11).forEach((item) => {
            cardsFragment.appendChild(createMovieCard(item));
        });

        lazyGrid.appendChild(cardsFragment);

        const displayName = cat === 'Korean Country' ? 'Korean' : cat;
        const viewAllCard = document.createElement('div');
        viewAllCard.className = 'view-all-card relative rounded-lg overflow-hidden group flex flex-col items-center justify-center p-6 cursor-pointer aspect-[2/3]';
        viewAllCard.innerHTML = `
            <div class="flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div class="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:border-red-600 transition-all shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <i class="fas fa-arrow-right text-white text-xl"></i>
                </div>
                <h4 class="font-black text-sm uppercase text-white tracking-widest transition-transform duration-300 group-hover:scale-110">View All</h4>
                <p class="text-[10px] text-gray-500 font-bold mt-2 uppercase tracking-tighter transition-transform duration-300 group-hover:scale-110">${displayName}</p>
            </div>`;
        viewAllCard.onclick = () => { clearSearch(true); switchView('library', cat); };
        lazyGrid.appendChild(viewAllCard);

        targetSection.classList.remove('opacity-0');
        targetSection.classList.add('opacity-100');
    }

    categories.filter(c => c !== 'all').forEach(cat => {
        const filtered = categoryIndexMap[cat] || [];
        if (filtered.length === 0) return;

        const displayName = cat === 'Korean Country' ? 'Korean' : cat;
        const section = document.createElement('section');
        section.className = 'mb-20 md:mb-32 pt-6 md:pt-12 lazy-section opacity-0 min-h-[350px] transition-opacity duration-500';
        section.setAttribute('data-category-lazy', cat);

        section.innerHTML = `
            <div class="flex items-center justify-center gap-3 mb-8 md:mb-12">
                <div class="w-1.5 h-7 md:h-9 bg-red-600 rounded-full shadow-lg shadow-red-600/20"></div>
                <h3 class="text-2xl md:text-5xl font-black tracking-tighter uppercase text-white">${displayName}</h3>
            </div>
            
            <div class="lazy-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 justify-center max-w-10xl mx-auto">
                <div class="col-span-full py-16 flex justify-center items-center">
                    <div class="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin opacity-45"></div>
                </div>
            </div>`;

        if (forceRenderAll) {
            loadCategorySection(section);
        } else {
            sectionObserver.observe(section);
        }

        fragment.appendChild(section);
    });
    categorySections.appendChild(fragment);
}

function initLibraryRender(filter = "all", initialCount = 0) {
    if (!libraryGrid) return;
    const rawQuery = searchInput ? searchInput.value : '';
    const cleanStr = (str) => str ? str.toLowerCase().replace(/[^a-z0-9]/g, '') : "";
    const cleanQuery = cleanStr(rawQuery);
    const isSearch = rawQuery.trim().length > 0;

    if (!libraryGrid.dataset.initialized) {
        libraryGrid.dataset.originalClasses = libraryGrid.className;
        libraryGrid.className = 'relative w-full';
        libraryGrid.dataset.initialized = 'true';
    }

    Array.from(libraryGrid.children).forEach(child => {
        child.classList.add('hidden');
    });

    const gridId = isSearch ? 'subgrid-search' : `subgrid-${filter.replace(/\s+/g, '-')}`;
    activeSubGridId = gridId;

    let subGrid = document.getElementById(gridId);

    if (isSearch && subGrid) {
        subGrid.remove();
        subGrid = null;
    }

    if (subGrid) {
        subGrid.classList.remove('hidden');
        let currentRendered = subGrid.children.length;
        let targetRender = Math.max(initialCount, parseInt(subGrid.dataset.displayedCount || ITEMS_PER_PAGE, 10));

        if (currentRendered < targetRender && currentRendered < libraryData.length) {
            const fragment = document.createDocumentFragment();
            libraryData.slice(currentRendered, targetRender).forEach(item => {
                fragment.appendChild(createMovieCard(item));
            });
            subGrid.appendChild(fragment);
        }
        libraryDisplayedCount = Math.min(targetRender, libraryData.length);
        subGrid.dataset.displayedCount = libraryDisplayedCount;
        updateLoadMoreVisibility();
        return;
    }

    subGrid = document.createElement('div');
    subGrid.id = gridId;
    subGrid.className = libraryGrid.dataset.originalClasses;
    libraryGrid.appendChild(subGrid);

    let sourceArray = contentData;
    if (!isSearch && filter !== "all") {
        sourceArray = categoryIndexMap[filter] || [];
    } else if (!isSearch && filter === "all") {
        sourceArray = categoryIndexMap["Recent Adds"] || [];
    }

    libraryData = sourceArray.filter(item => {
        const matchesCat = filter === "all" || item.category === filter || (filter === "all" && item.category === "Recent Adds");
        const matchesSearch = isSearch ? (cleanStr(item.title).includes(cleanQuery) || cleanStr(item.category).includes(cleanQuery) || cleanStr(item.genre).includes(cleanQuery)) : true;
        return matchesCat && matchesSearch;
    });

    libraryDisplayedCount = initialCount > 0 ? initialCount : ITEMS_PER_PAGE;
    subGrid.dataset.displayedCount = libraryDisplayedCount;

    if (libraryData.length === 0) {
        subGrid.innerHTML = `<div class="col-span-full py-20 text-center text-gray-600 font-bold uppercase tracking-widest">No Results Found</div>`;
    } else {
        const fragment = document.createDocumentFragment();
        libraryData.slice(0, libraryDisplayedCount).forEach((item) => {
            fragment.appendChild(createMovieCard(item));
        });
        subGrid.appendChild(fragment);
    }

    updateLoadMoreVisibility();

    if (isSearch && libraryView) {
        const scrollTarget = libraryView.offsetTop - 100;
        window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
}

function renderLibraryChunk() {
    if (isLoading) return;
    isLoading = true;

    const nextCount = libraryDisplayedCount + ITEMS_PER_PAGE;
    const chunk = libraryData.slice(libraryDisplayedCount, nextCount);

    let subGrid = document.getElementById(activeSubGridId);

    if (chunk.length > 0 && subGrid) {
        const fragment = document.createDocumentFragment();
        chunk.forEach((item) => {
            fragment.appendChild(createMovieCard(item));
        });
        subGrid.appendChild(fragment);
        libraryDisplayedCount = nextCount;
        subGrid.dataset.displayedCount = libraryDisplayedCount;
        updateLoadMoreVisibility();
    }

    isLoading = false;
}

function updateLoadMoreVisibility() {
    const loading = document.getElementById('loadingIndicator');
    if (!loading) return;

    if (libraryDisplayedCount < libraryData.length) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}

function openModal(id) {
    savedScrollY = window.scrollY;
    executeActualOpenModal(id);
}

function executeActualOpenModal(id) {
    if (document.getElementById('mobileFab')) document.getElementById('mobileFab').classList.add('fab-hidden');

    const item = contentData.find(m => m.id === id);
    if (!item) return;

    const movieSlug = item.slug || generateMovieSlug(item.title);

    let newUrl;
    try {
        const baseOrigin = (window.location.origin && window.location.origin !== 'null') ? window.location.origin : 'https://moviedakhi.com';
        newUrl = new URL('/' + movieSlug + '.html', baseOrigin);
    } catch (e) {
        newUrl = { href: window.location.href };
    }

    const currentState = history.state || { view: currentView, validDakhiState: true };
    try { window.history.replaceState({ ...currentState, scrollY: savedScrollY }, ''); } catch (e) { }
    try { window.history.pushState({ ...currentState, isModalOpen: true, modalId: id, validDakhiState: true }, '', (newUrl.href || newUrl)); } catch (e) { }

    const isSeries = item.episodes && item.episodes.length > 0;
    const contentType = isSeries ? "Web Series All Episodes" : "Full Movie";
    const titleKey = item.title;

    const yearMatch = titleKey.match(/\((\d{4})\)/);
    const extractedYear = yearMatch ? yearMatch[1] : new Date().getFullYear();
    const releaseYear = item.year || extractedYear;

    const titleHasYear = titleKey.includes(`(${releaseYear})`);
    const SEOFullTitle = titleHasYear ? titleKey : `${titleKey} (${releaseYear})`;
    const cleanLang = item.language || "Dual Audio [Hindi-English] / ESub";

    document.title = `${SEOFullTitle} [${cleanLang}] | ${contentType} Media Details & Info - MovieDakhi`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
    }
    metaDescription.content = `${SEOFullTitle} ${contentType} media details and stream overview. Access ${titleKey} in ${cleanLang} with English Subtitles (ESub) HEVC x265 on MovieDakhi.`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = newUrl.href;

    const setMetaTag = (attrName, attrValue, content) => {
        let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
        if (!el) { el = document.createElement('meta'); el.setAttribute(attrName, attrValue); document.head.appendChild(el); }
        el.setAttribute('content', content);
    };
    setMetaTag('property', 'og:title', document.title);
    setMetaTag('property', 'og:description', metaDescription.content);
    setMetaTag('property', 'og:url', newUrl.href);

    const modalTitleElem = document.getElementById('modalTitle');
    const isSameMovie = modalTitleElem && modalTitleElem.innerText === titleKey;

    currentItem = item;
    if (modalTitleElem) modalTitleElem.innerText = titleKey;

    if (document.getElementById('modalLanguage')) document.getElementById('modalLanguage').innerText = item.language;
    if (document.getElementById('modalCategory')) document.getElementById('modalCategory').innerText = item.category;

    const dynamicFooterKeywords = isSeries ?
        `${titleKey} web series overview, ${titleKey} episodes details, ${titleKey} season info, ${titleKey} dual audio hindi english series, ${titleKey} english subtitles esub, ${titleKey} media reference, movie-dakhi series review.` :
        `${titleKey} movie overview, ${titleKey} streaming details, ${titleKey} dual audio hindi english media, ${titleKey} english subtitles esub, ${titleKey} release info, movie-dakhi review.`;

    if (document.getElementById('modalDesc')) {
        renderModalContent(item, SEOFullTitle, titleKey, cleanLang, releaseYear, contentType, dynamicFooterKeywords, null);

        getClientTMDBDetails(item.title, releaseYear).then(tmdbData => {
            if (tmdbData) {
                renderModalContent(item, SEOFullTitle, titleKey, cleanLang, releaseYear, contentType, dynamicFooterKeywords, tmdbData);
            }
        });
    }

    // =====================================
    // 🚀 CONDITIONAL PLAYER / DOWNLOAD LOGIC
    // =====================================
    // executeActualOpenModal ফাংশনের ভেতরে:
    const hasVideoUrl = !!item.embedUrl || (item.episodes && item.episodes.length > 0 && !!item.episodes[0].embedUrl);

    const driveVideoWrapper = document.getElementById('driveVideoWrapper');
    const noVideoDownloadBox = document.getElementById('noVideoDownloadBox');
    const mainDownloadBtn = document.getElementById('mainDownloadBtn');

    if (!hasVideoUrl) {
        if (driveVideoWrapper) driveVideoWrapper.classList.add('hidden');
        if (noVideoDownloadBox) noVideoDownloadBox.classList.remove('hidden');
        if (mainDownloadBtn) mainDownloadBtn.classList.add('hidden');
    } else {
        if (driveVideoWrapper) driveVideoWrapper.classList.remove('hidden');
        if (noVideoDownloadBox) noVideoDownloadBox.classList.add('hidden');
        if (mainDownloadBtn) mainDownloadBtn.classList.remove('hidden');
    }

    resetDownloadButtonUI();

    // RESET ALL DOWNLOAD CLICKS AND STATES
    downloadClickCount = 0;

    if (mainDownloadBtn) {
        document.getElementById('downloadBtnText').innerText = "Download";
        mainDownloadBtn.classList.remove('from-gray-600', 'to-gray-800', 'border-gray-500', 'cursor-not-allowed', 'opacity-80', 'from-red-600', 'to-red-700', 'border-red-500', 'shadow-[0_0_15px_rgba(229,9,20,0.4)]');
        mainDownloadBtn.classList.add('from-[#2B2727]', 'to-[#2B2727]', 'border-[#E3DADA]', 'hover:scale-105');
        const mainIcon = mainDownloadBtn.querySelector('i');
        if (mainIcon) mainIcon.className = 'fas fa-cloud-download-alt text-md relative z-10 group:-translate-y-1 transition-transform duration-300';
    }

    const topDownloadBtn = document.getElementById('topDownloadBtn');
    if (topDownloadBtn) {
        document.getElementById('topDownloadBtnText').innerText = "Download Movie";
    }

    if (item.episodes && item.episodes.length > 0) {
        if (!isSameMovie) currentEpisodeIndex = 0;
    } else {
        currentEpisodeIndex = null;
    }

    const seriesSec = document.getElementById('seriesSection');
    const epList = document.getElementById('episodeList');

    if (item.episodes && item.episodes.length > 0 && seriesSec && epList) {
        seriesSec.classList.remove('hidden');
        if (document.getElementById('seriesInfoText')) {
            document.getElementById('seriesInfoText').innerText = item.seriesInfo || "Season 1 • Episodes";
        }
        epList.innerHTML = '';
        item.episodes.forEach((ep, idx) => {
            const btn = document.createElement('button');
            btn.className = `episode-btn px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black hover:bg-red-600 transition tracking-widest uppercase ${idx === (currentEpisodeIndex || 0) ? 'active' : ''}`;
            btn.innerText = ep.title || `Episode ${idx + 1}`;
            btn.onclick = () => playEpisode(idx, btn);
            epList.appendChild(btn);
        });

        // 🚀 সার্ভার রেন্ডারিং ফাংশনটিই এখন ভিডিও লোড করবে, তাই আলাদাভাবে loadIframeUrl কল করার প্রয়োজন নেই।
    } else if (seriesSec) {
        seriesSec.classList.add('hidden');
    }

    const modal = document.getElementById('movieModal');
    if (modal) {
        // 🚀 Step 1: Reveal element first so browser creates layout box
        modal.classList.remove('hidden');

        // 🚀 Step 2: Instant reset scroll position
        modal.scrollTop = 0;
        if (typeof modal.scrollTo === 'function') {
            modal.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }

        void modal.offsetWidth;
        modal.classList.add('active');

        // 🚀 Step 3: Re-enforce reset on next animation frame after DOM paint
        requestAnimationFrame(() => {
            modal.scrollTop = 0;
        });
    }

    renderServerButtons();

    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = '100%';
}

function closeModal(triggerBack = false, isUserAction = false) {
    if (isModalClosing) return;
    isModalClosing = true;

    const modal = document.getElementById('movieModal');
    if (modal) {
        modal.classList.remove('active');
        // 🚀 Reset scroll position when modal begins closing
        modal.scrollTop = 0;

        setTimeout(() => {
            const actualVideo = document.getElementById('actualVideo');
            if (actualVideo) {
                actualVideo.innerHTML = '';
                actualVideo.classList.add('hidden');
            }
            modal.scrollTop = 0;
            modal.classList.add('hidden');

            showNativeAdPopup();
        }, 300);
    }

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, savedScrollY);

    const fab = document.getElementById('mobileFab');
    if (fab) fab.classList.remove('fab-hidden');

    if (triggerBack && window.history.state?.isModalOpen) {
        window.history.back();
    } else if (isUserAction) {
        try {
            const currentState = history.state || { view: currentView, validDakhiState: true };
            // 🚀 URL RESET FIX: মোডাল বন্ধ করে হোমে গেলে অ্যাড্রেস বার থেকে /movie-slug.html মুছে মেইন হোম ইউআরএল সেভ করবে
            const rootUrl = new URL('/', window.location.origin);
            if (currentView === 'library') {
                rootUrl.searchParams.set('view', 'library');
                const activeCat = document.querySelector('#libraryFilters .category-pill.active')?.getAttribute('data-category');
                if (activeCat && activeCat !== 'all') {
                    rootUrl.searchParams.set('category', activeCat);
                }
            }
            window.history.replaceState({ ...currentState, isModalOpen: false }, '', rootUrl);
        } catch (e) { }
        document.title = currentView === 'home' ? "MovieDakhi | Watch Dual Audio Movies & Web Series Free Online HD" : "All Movies & Web Series - MovieDakhi";
    }

    setTimeout(() => { isModalClosing = false; }, 350);
}

// 🔄 ১. Modal ওপেন করার সময় বাটন রিসেট
function resetDownloadButtonUI() {
    downloadClickCount = 0;

    // Bottom Download Button Reset
    const mainDownloadBtn = document.getElementById('mainDownloadBtn');
    if (mainDownloadBtn) {
        document.getElementById('downloadBtnText').innerText = "Download";
        mainDownloadBtn.className = "relative overflow-hidden bg-gradient-to-r from-[#2B2727] to-[#2B2727] border border-[#E3DADA] text-white px-8 py-3.5 rounded-md font-black hover:scale-105 transition-all duration-300 text-sm uppercase tracking-widest flex items-center gap-3 group";
        const mainIcon = mainDownloadBtn.querySelector('i');
        if (mainIcon) mainIcon.className = 'fas fa-cloud-download-alt text-md relative z-10 group:-translate-y-1 transition-transform duration-300';
    }

    // Top Modern Download Button Reset
    const topDownloadBtn = document.getElementById('topDownloadBtn');
    if (topDownloadBtn) {
        topDownloadBtn.classList.remove('step-1', 'step-2', 'step-3');
        const topText = document.getElementById('topDownloadBtnText');
        const topSub = document.getElementById('topDownloadBtnSubText');
        const topIcon = document.getElementById('topDownloadBtnIcon');

        if (topText) topText.innerText = "Download";
        if (topSub) topSub.innerText = "⚡ Fast Server • Direct Link";
        if (topIcon) topIcon.className = "fas fa-cloud-arrow-down text-lg";
    }
}

// 🖱️ ২. হাইপার-নোটিসেবল ক্লিক হ্যান্ডলার
function handleDownloadClick() {
    if (!currentItem) return;

    const hasVideo = currentItem.embedUrl || (currentItem.episodes && currentItem.episodes.length > 0);

    const mainDownloadBtn = document.getElementById('mainDownloadBtn');
    const topDownloadBtn = document.getElementById('topDownloadBtn');
    const topText = document.getElementById('topDownloadBtnText');
    const topSub = document.getElementById('topDownloadBtnSubText');
    const topIcon = document.getElementById('topDownloadBtnIcon');
    const mainIcon = mainDownloadBtn ? mainDownloadBtn.querySelector('i') : null;

    // 🚀 VIDEO MODE: Watch Online Reset on 3rd click
    if (hasVideo && downloadClickCount >= 3) {
        const movieModal = document.getElementById('movieModal');
        if (movieModal) movieModal.scrollTo({ top: 0, behavior: 'smooth' });
        resetDownloadButtonUI();
        return;
    }

    downloadClickCount++;

    // 🟡 STEP 1: Gold / Amber State
    if (downloadClickCount === 1) {
        if (mainDownloadBtn) document.getElementById('downloadBtnText').innerText = "Ready For Download";

        if (topDownloadBtn) {
            topDownloadBtn.classList.remove('step-2', 'step-3');
            topDownloadBtn.classList.add('step-1');
            if (topText) topText.innerText = "Ready For Download (Step 1)";
            if (topSub) topSub.innerText = "⏳ Verified • Click Again To Finalize";
            if (topIcon) topIcon.className = "fas fa-hourglass-half text-lg animate-spin";
        }

        if (currentItem.downloadUrl1) window.open(currentItem.downloadUrl1, '_blank');
    }
    // 🔴 STEP 2: Fire Red State (Final Link Generated)
    else if (downloadClickCount === 2) {
        if (mainDownloadBtn) document.getElementById('downloadBtnText').innerText = "Download (Final Click)";

        if (topDownloadBtn) {
            topDownloadBtn.classList.remove('step-1', 'step-3');
            topDownloadBtn.classList.add('step-2');
            if (topText) topText.innerText = "Get Download Link (Final)";
            if (topSub) topSub.innerText = "🔥 Direct Link Ready • Click to Start";
            if (topIcon) topIcon.className = "fas fa-bolt text-lg animate-bounce";
        }

        if (currentItem.downloadUrl1) window.open(currentItem.downloadUrl1, '_blank');
    }
    // 🚀 STEP 3: Complete / Delivery
    else if (downloadClickCount >= 3) {
        if (hasVideo) {
            document.getElementById('downloadBtnText').innerText = "Watch Online";
            if (mainDownloadBtn) {
                mainDownloadBtn.classList.remove('from-[#2B2727]', 'to-[#2B2727]', 'border-[#E3DADA]');
                mainDownloadBtn.classList.add('from-red-600', 'to-red-700', 'border-red-500', 'shadow-[0_0_15px_rgba(229,9,20,0.4)]');
            }
            if (mainIcon) mainIcon.className = 'fas fa-play-circle text-md relative z-10 group:-translate-y-1 transition-transform duration-300';

            if (currentEpisodeIndex !== null && currentItem.episodes && currentItem.episodes[currentEpisodeIndex].downloadUrl) {
                window.open(currentItem.episodes[currentEpisodeIndex].downloadUrl, '_blank');
            } else if (currentItem.downloadUrl2) {
                window.open(currentItem.downloadUrl2, '_blank');
            }
        } else {
            // No Video Mode: Start Download & show delivered state
            if (topDownloadBtn) {
                topDownloadBtn.classList.remove('step-1', 'step-2');
                topDownloadBtn.classList.add('step-3');
                if (topText) topText.innerText = "Download Completed...";
                if (topSub) topSub.innerText = "✅ Media File Download Triggered";
                if (topIcon) topIcon.className = "fas fa-check-circle text-lg";
            }

            if (currentItem.downloadUrl2) {
                window.open(currentItem.downloadUrl2, '_blank');
            } else if (currentItem.downloadUrl1) {
                window.open(currentItem.downloadUrl1, '_blank');
            }
        }
    }
}

function playEpisode(index, btnElement) {
    // ১. বাটনের স্টাইল আপডেট
    document.querySelectorAll('.episode-btn').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    // ২. 🚀 বর্তমান এপিসোড ইনডেক্স আপডেট করা (সবচেয়ে জরুরি)
    currentEpisodeIndex = index;
    downloadClickCount = 0;

    // ৩. 🚀 ভিডিও প্লেয়ার আপডেট করা (এই লাইনটি মিসিং ছিল!)
    renderServerButtons();

    // ৪. ডাউনলোড বাটন রিসেট
    const downloadBtn = document.getElementById('mainDownloadBtn');
    if (downloadBtn) {
        document.getElementById('downloadBtnText').innerText = "Download";

        // সব মডিফায়েড স্টাইল রিমুভ করে অরিজিনাল ব্ল্যাক বাটনে ব্যাক করা
        downloadBtn.classList.remove('from-gray-600', 'to-gray-800', 'border-gray-500', 'cursor-not-allowed', 'opacity-80', 'from-red-600', 'to-red-700', 'border-red-500', 'shadow-[0_0_15px_rgba(229,9,20,0.4)]', '!bg-none', '!bg-[#111]', '!border-white', '!text-white');
        downloadBtn.classList.add('from-[#2B2727]', 'to-[#2B2727]', 'border-[#E3DADA]', 'hover:scale-105');

        // অরিজিনাল ক্লাউড ডাউনলোড আইকন রিস্টোর করা
        const icon = downloadBtn.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-cloud-download-alt text-md relative z-10 group:-translate-y-1 transition-transform duration-300';
        }

        const wave = downloadBtn.querySelector('.animate-shine-wave');
        if (wave) wave.classList.remove('hidden');
    }

    // ৫. 🚀 AUTO SCROLL FIX: এপিসোড পরিবর্তন করলে মোডালটি স্মুথলি একদম ওপরে চলে যাবে
    const movieModal = document.getElementById('movieModal');
    if (movieModal) {
        movieModal.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

if (searchInput) {
    searchInput.addEventListener('focus', () => {
        if (!preSearchState && searchInput.value.trim().length === 0) {
            const activeCat = document.querySelector('#libraryFilters .category-pill.active')?.getAttribute('data-category') || 'all';
            preSearchState = {
                view: currentView,
                scrollY: window.scrollY,
                category: activeCat,
                displayedCount: libraryDisplayedCount
            };
        }
    });

    searchInput.addEventListener('input', debounce(() => {
        const rawQuery = searchInput.value;
        updateSearchUI();

        if (rawQuery.trim().length > 0) {
            if (!preSearchState) {
                const activeCat = document.querySelector('#libraryFilters .category-pill.active')?.getAttribute('data-category') || 'all';
                preSearchState = {
                    view: currentView,
                    scrollY: window.scrollY,
                    category: activeCat,
                    displayedCount: libraryDisplayedCount
                };
            }

            if (currentView !== 'library') switchView('library');
            initLibraryRender();
        } else {
            if (preSearchState) {
                switchView(preSearchState.view, preSearchState.category, 'replace', preSearchState.displayedCount, preSearchState.scrollY);
                preSearchState = null;
            } else {
                initLibraryRender();
            }
        }
    }, 300));

    searchInput.addEventListener('blur', () => {
        setTimeout(() => {
            const modal = document.getElementById('movieModal');
            const catMenu = document.getElementById('categoryMenu');

            if ((modal && modal.classList.contains('active')) || (catMenu && catMenu.classList.contains('active'))) {
                return;
            }

            if (searchInput.value.trim().length === 0 && preSearchState) {
                clearSearch();
            }
        }, 200);
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchInput.blur();
        }
    });
}

window.addEventListener('scroll', () => {
    if (document.body.style.position === 'fixed') return;

    if (currentView === 'library') {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 500) {
            if (!isLoading && libraryDisplayedCount < libraryData.length) {
                renderLibraryChunk();
            }
        }
    }

    clearTimeout(scrollTimeoutId);
    scrollTimeoutId = setTimeout(() => {
        const modal = document.getElementById('movieModal');
        const catMenu = document.getElementById('categoryMenu');
        if ((!modal || !modal.classList.contains('active')) && (!catMenu || !catMenu.classList.contains('active')) && document.body.style.position !== 'fixed') {
            const currentState = history.state || { view: currentView, category: null, validDakhiState: true };
            try {
                window.history.replaceState({
                    ...currentState,
                    scrollY: window.scrollY,
                    displayedCount: libraryDisplayedCount
                }, '');
            } catch (e) { }
        }
    }, 150);
}, { passive: true });

window.addEventListener('beforeunload', () => {
    const modal = document.getElementById('movieModal');
    const catMenu = document.getElementById('categoryMenu');
    if ((!modal || !modal.classList.contains('active')) && (!catMenu || !catMenu.classList.contains('active'))) {
        sessionStorage.setItem('MovieDakhi_ExactScroll', window.scrollY);
        sessionStorage.setItem('MovieDakhi_Count', libraryDisplayedCount);
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    const seoContent = document.getElementById('seo-ssr-content');
    if (seoContent) {
        seoContent.style.display = 'none';
    }

    await databaseLoadPromise;

    const reloadScroll = sessionStorage.getItem('MovieDakhi_ExactScroll');
    const reloadCount = sessionStorage.getItem('MovieDakhi_Count');
    let finalScroll = 0;
    let finalCount = ITEMS_PER_PAGE;
    let isRestoring = false;

    if (reloadScroll !== null) {
        finalScroll = parseInt(reloadScroll, 10);
        sessionStorage.removeItem('MovieDakhi_ExactScroll');
        if (finalScroll > 0) isRestoring = true;
    }
    if (reloadCount !== null) {
        finalCount = parseInt(reloadCount, 10);
        sessionStorage.removeItem('MovieDakhi_Count');
    }

    renderCategories();

    // 🚀 STEP 1: পেজের মূল কন্টেন্ট (LCP) সাথে সাথে রেন্ডার হবে
    renderRecentAdds();

    // 🚀 STEP 2: ব্রাউজারের মেইন থ্রেডকে ফ্রি রেখে ১০০ms পর ক্যাটাগরি লোড হবে
    setTimeout(() => {
        renderCategorySections(isRestoring);
    }, 100);

    // 🚀 STEP 3: ৩০০ms পর ব্যাকগ্রাউন্ড হিরো মার্কি স্লাইডার তৈরি হবে
    setTimeout(() => {
        initHeroSlider();
    }, 300);

    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => initHeroSlider(), { timeout: 1500 });
    } else {
        setTimeout(() => initHeroSlider(), 800);
    };

    const params = new URLSearchParams(window.location.search);
    const view = params.get('view') || 'home';
    const category = params.get('category');

    let movieSlug = params.get('movie');

    if (!movieSlug) {
        const path = window.location.pathname;
        if (path.endsWith('.html')) {
            const excludedFiles = ['/index.html', '/Contact.html', '/DMCA.html', '/Privacy.html', '/Disclaimer.html'];
            if (!excludedFiles.includes(path)) {
                movieSlug = decodeURIComponent(path.replace('/', '').replace('.html', ''));
            }
        }
    }

    const isBlob = window.location.protocol === 'blob:';

    if (history.state && !movieSlug) {
        const state = history.state;
        finalScroll = finalScroll > 0 ? finalScroll : (state.scrollY || 0);
        finalCount = finalCount > ITEMS_PER_PAGE ? finalCount : (state.displayedCount || ITEMS_PER_PAGE);
        switchView(state.view, state.category, false, finalCount);
    } else if (!isBlob && !movieSlug) {
        try { window.history.replaceState({ view: view, category: category, scrollY: 0, displayedCount: finalCount, validDakhiState: true }, ''); } catch (e) { }
        switchView(view, category, false, finalCount);
    } else if (!movieSlug) {
        switchView('home', null, false, finalCount);
    }

    if (isRestoring && !movieSlug) {
        requestAnimationFrame(() => {
            window.scrollTo({ top: finalScroll, left: 0, behavior: 'instant' });
            setTimeout(() => window.scrollTo({ top: finalScroll, left: 0, behavior: 'instant' }), 50);
        });
    }

    if (movieSlug) {
        const targetMovie = contentData.find(m => m.slug === movieSlug);
        if (targetMovie) {
            setTimeout(() => {
                openModal(targetMovie.id);
            }, 300);
        }
    }
});

window.addEventListener('popstate', (event) => {
    const state = event.state;
    const modal = document.getElementById('movieModal');

    let handledOverlayClose = false;

    if (modal && (!modal.classList.contains('hidden') || isModalClosing)) {
        if (state && state.validDakhiState && !state.isModalOpen) {
            if (!isModalClosing) {
                closeModal(false, false);
            }
            handledOverlayClose = true;
        } else if (state && state.isModalOpen) {
            return;
        } else {
            return;
        }
    }

    if (categoryMenu && (!categoryMenu.classList.contains('hidden') || categoryMenu.classList.contains('active')) && (!state || !state.isMenuOpen)) {
        toggleCategoryMenu(false, false);
        handledOverlayClose = true;
    }

    if (handledOverlayClose) return;

    if (state || window.location.search) {
        const targetView = state?.view || 'home';
        const targetCat = state?.category || null;
        const targetScroll = (state && typeof state.scrollY === 'number') ? state.scrollY : savedScrollY;
        const targetCount = state?.displayedCount || 30;

        switchView(targetView, targetCat, false, targetCount);

        requestAnimationFrame(() => {
            window.scrollTo({ top: targetScroll, left: 0, behavior: 'instant' });
            setTimeout(() => {
                window.scrollTo({ top: targetScroll, left: 0, behavior: 'instant' });
            }, 50);
        });
    } else {
        switchView('home', null, false);
        void document.documentElement.offsetHeight;
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
});

window.addEventListener('click', (e) => {
    if (e.target === categoryMenu && e.target !== document.getElementById('mobileFab') && document.getElementById('mobileFab') && !document.getElementById('mobileFab').contains(e.target)) toggleCategoryMenu(false);
});

const movieModalElem = document.getElementById('movieModal');
if (movieModalElem) {
    movieModalElem.addEventListener('click', (e) => {
        if (window.innerWidth < 1024) return;
        const isInteractiveContent = e.target.closest('.drive-video-wrapper, #serverSection, #seriesSection, #socialJoinSection, #mainDownloadBtn, #modalDesc, .lang-badge, button, a, iframe, input');

        if (!isInteractiveContent) {
            closeModal(true, true);
        }
    });
}

function showToast(message) {
    const toast = document.getElementById('toastMessage');
    const toastText = document.getElementById('toastText');
    if (!toast || !toastText) return;

    toastText.innerHTML = message;
    toast.classList.remove('opacity-0', '-translate-y-8', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
        toast.classList.add('opacity-0', '-translate-y-8', 'pointer-events-none');
        toast.classList.remove('opacity-100', 'translate-y-0');
    }, 4000);
}

// 🚀 ON/OFF CONTROL CHECK
const ENABLE_UNLOCK_CATEGORY_POPUP = false;

function showUnlockPopup() {
    if (!ENABLE_UNLOCK_CATEGORY_POPUP) return;

    const popup = document.getElementById('unlockCategoryPopup');
    if (popup) {
        popup.classList.remove('hidden');
        void popup.offsetWidth;
        popup.classList.remove('opacity-0');
        document.body.style.overflow = 'hidden';
    }
}

function closeUnlockPopup() {
    const popup = document.getElementById('unlockCategoryPopup');
    if (popup) {
        popup.classList.add('opacity-0');
        setTimeout(() => {
            popup.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }
}

function handleWatchAdClick() {
    closeUnlockPopup();
    const smartAdLink = "https://www.effectivecpmnetwork.com/rr3q82zj6?key=c81990371bb12dd6139bb39d8a8b4a4e";
    window.open(smartAdLink, '_blank');
}

let nativeAdBackdropClickCount = 0;

function injectNativeAdScript() {
    const container = document.getElementById('container-faea46eecf01053afa6ef2518e3c0630');
    if (!container || container.dataset.loaded) return;

    container.dataset.loaded = 'true';
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = "https://pl30567165.effectivecpmnetwork.com/faea46eecf01053afa6ef2518e3c0630/invoke.js";
    container.appendChild(script);
}

// 🚀 ON/OFF CONTROL CHECK
const ENABLE_NATIVE_AD_POPUP = false;

function showNativeAdPopup() {

    if (!ENABLE_NATIVE_AD_POPUP) return;

    nativeAdBackdropClickCount = 0;
    injectNativeAdScript();
    const popup = document.getElementById('nativeAdPopup');
    if (popup) {
        popup.classList.remove('opacity-0', 'pointer-events-none', '-z-50');
        popup.classList.add('opacity-100', 'pointer-events-auto', 'z-[99990]');
        document.body.style.overflow = 'hidden';
    }
}

function closeNativeAdPopup() {
    const popup = document.getElementById('nativeAdPopup');
    if (popup) {
        popup.classList.remove('opacity-100', 'pointer-events-auto', 'z-[99990]');
        popup.classList.add('opacity-0', 'pointer-events-none', '-z-50');

        setTimeout(() => {
            document.body.style.overflow = '';
        }, 300);
    }
}

const nativeAdPopupElem = document.getElementById('nativeAdPopup');
if (nativeAdPopupElem) {
    nativeAdPopupElem.addEventListener('click', (e) => {
        if (e.target === nativeAdPopupElem) {
            nativeAdBackdropClickCount++;
            if (nativeAdBackdropClickCount > 4) {
                closeNativeAdPopup();
                nativeAdBackdropClickCount = 0;
            }
        }
    });
}

window.addEventListener('blur', () => {
    const popup = document.getElementById('nativeAdPopup');
    if (popup && popup.classList.contains('opacity-100')) {
        closeNativeAdPopup();
    }
});