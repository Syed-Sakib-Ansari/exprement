// ==========================================
// 🚀 SYSTEM & HISTORY CONFIGURATION
// ==========================================
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// ==========================================
// 🚀 SEO URL SLUG GENERATOR
// ==========================================
function generateMovieSlug(title) {
    if (!title) return "movie";
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

// ==========================================
// 🚀 DATABASE, HIGH-SPEED CACHING & INSTANT O(1) INDEXING
// ==========================================
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

// ==========================================
// 🚀 INDEXEDDB CORE LAYER HELPERS (লাইফ-টাইম স্টোরেজ বর্ম)
// ==========================================
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

// ==========================================
// 🚀 DYNAMIC FETCH ENGINE WITH ASYNCHRONOUS INDEXEDDB
// ==========================================
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
        console.warn("Live fetch failed, using internal database fallback.", err);
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
        } catch (err) {
            console.error("Background auto-update check failed safely.", err);
        }
    }, 1200);
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
        } catch (e) {
            // ক্যাশ রিড এরর হ্যান্ডেলিং
        }
    }
    await fetchAndCacheNetworkDatabase();
}

const databaseLoadPromise = loadContentDatabase();

// ==========================================
// 🚀 GLOBAL VARIABLES & DOM CACHING
// ==========================================
const categories = [
    "all", "Hollywood", "Bollywood", "South", "Animation",
    "Korean Country", "Chinese", "Hollywood Series", "Bollywood Series",
    "Korean Series", "Adult Comedy", "Others"
];

let currentItem = null;
let downloadClickCount = 0;
let currentEpisodeIndex = null;
let currentServerIndex = 1; // 🚀 নতুন সার্ভার ট্র্যাক করার জন্য
let preSearchState = null;
let currentView = 'home';
let sliderInterval;
let scrollTimeoutId = null;
let isModalClosing = false;
let lastVisitedCategory = 'all'; // 🚀 NEW: For Tracking Category Changes

const homeView = document.getElementById('homeView');
const libraryView = document.getElementById('libraryView');
const recentAddsGrid = document.getElementById('recentAddsGrid');
const libraryGrid = document.getElementById('libraryGrid');
const categorySections = document.getElementById('categorySections');
const sliderWrapper = document.getElementById('sliderWrapper');
const sliderDots = document.getElementById('sliderDots');
const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');
const categoryMenu = document.getElementById('categoryMenu');

let libraryData = [];
let libraryDisplayedCount = 0;
const ITEMS_PER_PAGE = 30;
let isLoading = false;
let activeSubGridId = null;

// ==========================================
// 🚀 UTILITY FUNCTIONS
// ==========================================
function getOptimizedImageUrl(url, width = 300) {
    if (!url) return "";
    if (url.includes('wikimedia.org') || url.includes('wikipedia.org')) {
        return url;
    }
    return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&output=webp&q=75`;
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// 🚀 EMBED URL CLEANER & PARSER (Extracts clean URL if <iframe ...> HTML tag is pasted)
function cleanEmbedUrl(rawUrl) {
    if (!rawUrl) return "";
    let str = rawUrl.trim();
    const match = str.match(/src=["']([^"']+)["']/i);
    if (match && match[1]) {
        str = match[1];
    }
    return str.replace(/&amp;/g, '&');
}

// ==========================================
// 🚀 EPISODE-STYLE MULTI-SERVER ENGINE
// ==========================================
function renderServerButtons() {
    const serverSec = document.getElementById('serverSection');
    const serverList = document.getElementById('serverList');
    if (!serverSec || !serverList || !currentItem) return;

    // 🚀 ১. যদি ওয়েব সিরিজ হয়, তবে সার্ভার অপশন পুরোপুরি হাইড করবে এবং ১ম এপিসোড প্লে করবে
    const isSeries = currentItem.episodes && currentItem.episodes.length > 0;

    if (isSeries) {
        serverSec.classList.add('hidden');
        const epIndex = currentEpisodeIndex !== null ? currentEpisodeIndex : 0;
        if (currentItem.episodes[epIndex] && currentItem.episodes[epIndex].embedUrl) {
            loadIframeUrl(currentItem.episodes[epIndex].embedUrl);
        }
        return;
    }

    // 🚀 ২. শুধু সিঙ্গেল মুভির জন্য স্টাইলিশ সার্ভার বাটন দেখাবে
    const target = currentItem;

    const servers = [
        { key: 'embedUrl', label: 'Server 1 (Primary)', },
        { key: 'embedUrl2', label: 'Server 2 (Super Fast)', },
        { key: 'embedUrl3', label: 'Server 3 (VIP Stream)', },
        { key: 'embedUrl4', label: 'Server 4 (Alternative)', }
    ];

    const activeServers = servers.filter(s => target[s.key] && typeof target[s.key] === 'string' && target[s.key].trim() !== '');

    if (activeServers.length > 0) {
        serverSec.classList.remove('hidden');
        serverList.innerHTML = '';

        activeServers.forEach((s, idx) => {
            const btn = document.createElement('button');
            // 🚀 প্রতিটি সার্ভার বাটনের জন্য আলাদা কালার ক্লাস যুক্ত করা হচ্ছে (server-btn-1, server-btn-2...)
            btn.className = `server-btn server-btn-${idx + 1} ${idx === 0 ? 'active' : ''}`;
            btn.innerHTML = `<i class="fas fa-server text-[10px]"></i> ${s.label}`;
            btn.onclick = () => playServer(target[s.key], btn);
            serverList.appendChild(btn);
        });

        // প্রথম সার্ভার প্লে করবে
        loadIframeUrl(target[activeServers[0].key]);
    } else {
        serverSec.classList.add('hidden');
    }
}

// সার্ভার বাটনে ক্লিক করলে এই ফাংশনটি কল হবে
function playServer(rawUrl, btnElement) {
    // 🚀 ১. ইউজার অন্য কোনো সার্ভার বাটনে ক্লিক করলেই স্মার্ট লিংক অ্যাড নতুন ট্যাবে ওপেন হবে
    const smartAdLink = "https://heeddialscary.com/rr3q82zj6?key=c81990371bb12dd6139bb39d8a8b4a4e";
    window.open(smartAdLink, '_blank');

    // 🚀 ২. ক্লিক করা বাটনের স্টাইল একটিভ/ড্যাপসা করা এবং নির্বাচিত ভিডিও প্লে করা
    document.querySelectorAll('.server-btn').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    loadIframeUrl(rawUrl);
}

// প্লেয়ারে আইফ্রেম লোড করার অরিজিনাল কোড
function loadIframeUrl(rawUrl) {
    let url = cleanEmbedUrl(rawUrl);
    const actualVideo = document.getElementById('actualVideo');
    if (actualVideo) {
        actualVideo.classList.remove('hidden');
        actualVideo.innerHTML = `<iframe id="videoIframe" class="absolute top-0 left-0 w-full h-full border-0 outline-none bg-black block rounded-t-2xl" src="${url}" frameborder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" style="width:100%;height:100%;object-fit:contain;border:0;"></iframe>`;
    }
}

// ==========================================
// 🚀 CATEGORY MENU & NAVIGATION RENDER
// ==========================================
function renderCategories() {
    const mobileGrid = document.getElementById('mobileCategoryGrid');
    const desktopNav = document.getElementById('desktopCategoryPills');
    const libraryFilters = document.getElementById('libraryFilters');

    mobileGrid.innerHTML = ''; desktopNav.innerHTML = ''; libraryFilters.innerHTML = '';

    categories.forEach(cat => {
        const label = cat === 'Korean Country' ? 'Korean' : cat;

        if (cat === 'all') {
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
            return;
        }

        const realLink = `?view=library&category=${encodeURIComponent(cat)}`;

        const mobileItem = document.createElement('a');
        mobileItem.className = 'cat-menu-item flex items-center justify-center text-white no-underline w-full h-full';
        mobileItem.innerText = label;
        mobileItem.href = realLink;
        mobileItem.onclick = (e) => {
            e.preventDefault();
            toggleCategoryMenu(false, false, true);
            switchView('library', cat, true); // ✅ 'true' (pushState) দেওয়া হয়েছে যাতে আগের ক্যাটাগরি হিস্ট্রিতে সেভ থাকে
        };
        mobileGrid.appendChild(mobileItem);

        const desktopItem = document.createElement('a');
        desktopItem.href = realLink;
        desktopItem.className = 'category-pill border border-white/10 px-5 md:px-7 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:border-red-600 transition';
        desktopItem.innerText = label;
        desktopItem.onclick = (e) => {
            e.preventDefault();
            switchView('library', cat);
        };
        desktopNav.appendChild(desktopItem);

        const filterItem = desktopItem.cloneNode(true);
        filterItem.setAttribute('data-category', cat);
        filterItem.onclick = (e) => {
            e.preventDefault();
            switchView('library', cat);
        };
        libraryFilters.appendChild(filterItem);
    });
}

let savedScrollY = 0;

function toggleCategoryMenu(show, triggerBack = true) {
    const fab = document.getElementById('mobileFab');
    const fabIconBars = document.getElementById('fabIconBars');
    const fabIconTimes = document.getElementById('fabIconTimes');

    if (show) {
        // 🚀 ১. মেনু খোলার আগে একদম সঠিক স্ক্রল পজিশন রিড করা
        savedScrollY = window.scrollY || document.documentElement.scrollTop;

        const activeCat = document.querySelector('#libraryFilters .category-pill.active')?.getAttribute('data-category') || null;

        // 🚀 ২. বর্তমান পজিশনটি ব্যাকগ্রাউন্ড হিস্ট্রিতে লক করা
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

        categoryMenu.classList.remove('hidden');
        void categoryMenu.offsetWidth;
        categoryMenu.classList.add('active');

        document.body.style.position = 'fixed';
        document.body.style.top = `-${savedScrollY}px`;
        document.body.style.width = '100%';

        fab.classList.add('menu-open');

        if (fabIconBars) fabIconBars.classList.add('scale-0', 'opacity-0', '-rotate-90');
        if (fabIconTimes) fabIconTimes.classList.remove('scale-0', 'opacity-0', 'rotate-90');
    } else {
        categoryMenu.classList.remove('active');
        setTimeout(() => categoryMenu.classList.add('hidden'), 400);

        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';

        // 🚀 ৩. মেনু ক্লোজ করার সাথে সাথেই আগের জায়গায় স্ক্রল ধরে রাখা
        window.scrollTo({ top: savedScrollY, left: 0, behavior: 'instant' });

        if (triggerBack && window.history.state?.isMenuOpen) {
            window.history.back();
        }

        fab.classList.remove('menu-open');

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

// ==========================================
// 🚀 HERO SECTION MOVING CARDS ENGINE (STRICTLY UNIQUE MOVIES PER COLUMN)
// ==========================================
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

    // 🚀 STEP 1: DEDUPLICATE DATABASE BY TITLE (Removes duplicate JSON entries)
    const uniqueMoviesMap = new Map();
    contentData.forEach(item => {
        if (item && item.title && !uniqueMoviesMap.has(item.title)) {
            uniqueMoviesMap.set(item.title, item);
        }
    });
    const uniquePool = Array.from(uniqueMoviesMap.values());
    if (uniquePool.length === 0) return;

    const itemsPerCol = 8; // Number of unique movies per column

    for (let c = 0; c < colCount; c++) {
        const colDiv = document.createElement('div');
        const isUp = c % 2 === 0;
        colDiv.className = `flex flex-col ${isUp ? 'marquee-col-up' : 'marquee-col-down'}`;

        // 🚀 STEP 2: DISJOINT SET ALLOCATION (Each column gets its own EXCLUSIVE list of movies)
        const colItems = [];
        const startIndex = (c * itemsPerCol) % uniquePool.length;

        for (let i = 0; i < itemsPerCol; i++) {
            colItems.push(uniquePool[(startIndex + i) % uniquePool.length]);
        }

        // Double only for the seamless -50% loop boundary within its own column
        const doubledItems = [...colItems, ...colItems];

        doubledItems.forEach(movie => {
            const imgCard = document.createElement('div');
            imgCard.className = 'w-full p-1.5 md:p-2 shrink-0 box-border';
            imgCard.innerHTML = `
                <div class="w-full aspect-[2/3] rounded-lg md:rounded-xl overflow-hidden shadow-lg border border-white/10 cursor-pointer hover:scale-105 transition-transform duration-300 bg-zinc-900">
                    <img src="${getOptimizedImageUrl(movie.posterUrl, 300)}" alt="${movie.title}" class="w-full h-full object-cover block" loading="lazy">
                </div>
            `;
            
            imgCard.onclick = () => openModal(movie.id);
            colDiv.appendChild(imgCard);
        });

        sliderWrapper.appendChild(colDiv);
    }
}

// 🚀 স্মার্ট রি-সাইজ লিসেনার: কেবল প্রস্থ (Width) পরিবর্তন হলেই এটি কাজ করবে, মোবাইলে স্ক্রল করার সময় রিস্টার্ট হবে না
let lastWindowWidth = window.innerWidth;
window.addEventListener('resize', debounce(() => {
    if (currentView === 'home' && window.innerWidth !== lastWindowWidth) {
        lastWindowWidth = window.innerWidth;
        initHeroSlider();
    }
}, 250));

// ==========================================
// 🚀 SEARCH SYSTEM UI MANIPULATION
// ==========================================
function updateSearchUI() {
    const libraryFilters = document.getElementById('libraryFilters');
    if (searchInput.value.trim().length > 0) {
        searchIcon.classList.remove('fa-search');
        searchIcon.classList.add('fa-times', 'cursor-pointer');
        if (libraryFilters) libraryFilters.style.display = 'none';
    } else {
        searchIcon.classList.remove('fa-times', 'cursor-pointer');
        searchIcon.classList.add('fa-search');
        if (libraryFilters) libraryFilters.style.display = '';
    }
}

function handleSearchIconClick() {
    if (searchInput.value.trim().length > 0) {
        clearSearch();
    } else {
        searchInput.blur();
    }
}

function clearSearch(preventRestore = false) {
    searchInput.value = '';
    updateSearchUI();
    searchInput.blur();

    if (!preventRestore && preSearchState) {
        switchView(preSearchState.view, preSearchState.category, 'replace', preSearchState.displayedCount, preSearchState.scrollY);
        preSearchState = null;
    } else {
        preSearchState = null;
        initLibraryRender();
    }
}

function updateCanonical(url) {
    const canonicalLink = document.getElementById('canonicalLink');
    if (canonicalLink) {
        canonicalLink.setAttribute('href', 'https://moviedakhi.com/');
    }
}

// ==========================================
// 🚀 SINGLE PAGE APPLICATION (SPA) VIEW SWITCHER
// ==========================================
function switchView(viewName, filterCategory = null, mode = true, restoredCount = 0, targetScroll = 0) {
    if (mode) {
        const currentScroll = window.scrollY;
        const activeCat = document.querySelector('#libraryFilters .category-pill.active')?.getAttribute('data-category') || null;
        try {
            // 🚀 নতুন ক্যাটাগরিতে যাওয়ার ঠিক মুহূর্তে আগের পেজের স্টেট নিখুঁতভাবে হিস্ট্রিতে সেভ করা হচ্ছে
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
    homeView.classList.remove('active');
    libraryView.classList.remove('active');

    if (viewName === 'home') {
        homeView.classList.add('active');
        document.title = "MovieDakhi | Watch Dual Audio Movies & Web Series Free Online HD";
    } else {
        libraryView.classList.add('active');
        if (filterCategory) {
            searchInput.value = '';
            updateSearchUI();
            preSearchState = null;
        }

        document.title = filterCategory && filterCategory !== 'all' ? `${filterCategory.replace(/\+/g, ' ')} Movies - MovieDakhi` : "All Movies & Web Series - MovieDakhi";

        const catValue = filterCategory || 'all';
        document.querySelectorAll('#libraryFilters .category-pill').forEach(p => p.classList.remove('active'));
        document.querySelector(`#libraryFilters .category-pill[data-category="${catValue}"]`)?.classList.add('active');

        initLibraryRender(catValue, restoredCount);

        // 🚀 UNLOCK CATEGORY POPUP TRIGGER: ইউজার 'all' বাদে অন্য ক্যাটাগরিতে স্যুইচ করলে পপআপ ওপেন হবে
        if (lastVisitedCategory !== catValue && catValue !== 'all') {
            showUnlockPopup();
        }
        lastVisitedCategory = catValue;
    }

    if (mode) {
        try {
            const isBlob = window.location.protocol === 'blob:';
            // 🚀 নতুন পেজ বা ক্যাটাগরি ওপেন করার সময় সেটির পজিশন ০ (Top) হিস্ট্রিতে পুশ হবে
            const stateObj = { view: viewName, category: filterCategory, scrollY: 0, displayedCount: 30, validDakhiState: true };

            if (!isBlob) {
                const url = new URL(window.location);
                url.searchParams.set('view', viewName);
                if (filterCategory && filterCategory !== 'all' && viewName === 'library') {
                    url.searchParams.set('category', filterCategory);
                } else {
                    url.searchParams.delete('category');
                }

                url.searchParams.delete('movie');

                if (mode === 'replace') {
                    window.history.replaceState(stateObj, '', url);
                } else {
                    window.history.pushState(stateObj, '', url);
                }
                updateCanonical(url.href);
            }

            // 🚀 নতুন পেজে ঢুকলে সবসময় পেজের ওপরে (0) স্ক্রল হবে
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        } catch (e) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }
}

// ==========================================
// 🚀 CARD GENERATOR & CONTENT RENDERING
// ==========================================
function createMovieCard(item) {
    const card = document.createElement('a');
    const movieSlug = item.slug || generateMovieSlug(item.title);
    card.href = `/${movieSlug}.html`;
    card.className = 'movie-card relative flex flex-col group cursor-pointer no-underline';

    const infoText = item.seriesInfo ? `<p class="text-[9px] md:text-[10px] text-gray-400 font-medium mt-1 tracking-wide uppercase">${item.seriesInfo}</p>` : '';

    const qualityBadgeHtml = item.quality ?
        `<div class="absolute top-0 left-0 z-20 bg-[#E50914] text-white px-2 py-0.5 md:px-1.5 md:py-0.5 text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-br-lg shadow-md">${item.quality}</div>` : '';

    const languageBadgeHtml = item.language ?
        `<div class="absolute top-0 right-0 z-20 bg-[#E50914] text-white px-2 py-0.5 md:px-1.5 md:py-0.5 text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-bl-lg shadow-md">${item.language}</div>` : '';

    card.innerHTML = `
        <div class="relative rounded-lg overflow-hidden bg-[#111] shadow-xl aspect-[2/3] ring-1 ring-white/5 transition-all duration-300">
            ${qualityBadgeHtml}
            ${languageBadgeHtml}
            <img src="${getOptimizedImageUrl(item.posterUrl)}" alt="Watch ${item.title} Full Movie Online Free" class="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 will-change-transform" loading="lazy" decoding="async">
            <div class="play-overlay absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-5 transition-opacity duration-500 ease-out">
                <!-- 🚀 EXACT MATCH PLAY BUTTON DESIGN -->
                <div class="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white flex items-center justify-center bg-black/20 backdrop-blur-[1px] shadow-[0_0_15px_rgba(0,0,0,0.6)] transform scale-90 group-hover:scale-100 transition-all duration-500 ease-out">
                    <i class="fas fa-play text-white text-xs md:text-sm ml-1"></i>
                </div>
            </div>
        </div>
        <div class="mt-3 text-center flex flex-col items-center md:block">
            <h4 class="font-black text-white text-[11px] md:text-sm uppercase tracking-tight line-clamp-1 group-hover:text-red-500 transition-colors">${item.title}</h4>
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
        fragment.appendChild(createMovieCard(item));
    });

    recentAddsGrid.appendChild(fragment);
}

function renderCategorySections(forceRenderAll = false) {
    if (!categorySections) return;
    categorySections.innerHTML = '';
    const fragment = document.createDocumentFragment();

    const observerOptions = {
        root: null,
        rootMargin: '400px 0px', /* মোবাইল স্ক্রিনের জন্য অপটিমাইজড মেমোরি সেভার */
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

        filtered.slice(0, 11).forEach((item, index) => {
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
        section.className = 'mb-16 lazy-section opacity-0 min-h-[350px] transition-opacity duration-500';
        section.setAttribute('data-category-lazy', cat);

        section.innerHTML = `
            <div class="flex items-center justify-center gap-3 mb-8">
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

// ==========================================
// 🚀 DOM CACHING SYSTEM FOR SPA LIBRARY
// ==========================================
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

        // 🚀 ব্যাকে আসার পর যদি আগের চেয়ে বেশি আইটেম দরকার হয়, তা রেন্ডার করে পেজের হাইট আগের জায়গায় আনবে
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
        libraryData.slice(0, libraryDisplayedCount).forEach((item, index) => {
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
        chunk.forEach((item, index) => {
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

// ==========================================
// 🚀 DYNAMIC MOVIE MODAL OVERLAY LOGIC
// ==========================================
function openModal(id) {
    savedScrollY = window.scrollY;
    executeActualOpenModal(id);
}

function executeActualOpenModal(id) {
    if (document.getElementById('mobileFab')) document.getElementById('mobileFab').classList.add('fab-hidden');

    const item = contentData.find(m => m.id === id);
    if (!item) return;

    const movieSlug = item.slug || generateMovieSlug(item.title);

    // 🚀 BULLETPROOF URL CREATION (ক্র্যাশ প্রতিরোধ কোড)
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

    document.title = `${SEOFullTitle} [${cleanLang}] | Index of / Download 4K 1080p, Watch Online Free ${contentType} - MovieDakhi`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
    }
    metaDescription.content = `Index of /${SEOFullTitle} ${contentType} direct download link. Stream ${titleKey} online free in 4K Ultra HD / 1080p BluRay. High-speed Google Drive & Telegram links for ${cleanLang} with English Subtitles (ESub) HEVC x265 on MovieDakhi.`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = newUrl.href;

    let schemaScript = document.getElementById('seoSchemaDynamic');
    if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'seoSchemaDynamic';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
    }
    const schemaData = {
        "@context": "https://schema.org",
        "@type": isSeries ? "TVSeries" : "Movie",
        "name": titleKey,
        "alternateName": isSeries ? [
            `Index of ${titleKey}`,
            `${titleKey} Web Series All Episodes Download`,
            `${titleKey} Complete Season Download 1080p`,
            `${titleKey} Dual Audio Hindi English Web Series`,
            `Watch ${titleKey} All Seasons Online Free HD`,
            `${titleKey} Google Drive Direct Link Series`,
            `${titleKey} English Subtitles x265 HEVC`
        ] : [
            `Index of ${titleKey}`,
            `${titleKey} Full Movie Download 1080p`,
            `${titleKey} Dual Audio Hindi English`,
            `Watch ${titleKey} Full Movie Online Free HD`,
            `${titleKey} Google Drive Direct Link`,
            `${titleKey} English Subtitles x265`
        ],
        "image": item.poster || window.location.origin + "/default-poster.jpg",
        "genre": item.genre || "Entertainment",
        "dateCreated": releaseYear,
        "inLanguage": ["English", "Hindi"],
        "description": metaDescription.content
    };
    schemaScript.textContent = JSON.stringify(schemaData);

    const setMetaTag = (attrName, attrValue, content) => {
        let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
        if (!el) { el = document.createElement('meta'); el.setAttribute(attrName, attrValue); document.head.appendChild(el); }
        el.setAttribute('content', content);
    };
    setMetaTag('property', 'og:title', document.title);
    setMetaTag('property', 'og:description', metaDescription.content);
    setMetaTag('property', 'og:url', newUrl.href);
    setMetaTag('name', 'twitter:title', document.title);
    setMetaTag('name', 'twitter:description', metaDescription.content);
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    const rawPosterUrl = item.posterUrl || "https://i.postimg.cc/qqJ0X7T2/Screenshot-2026-05-19-224743.png";
    const moviePosterUrl = rawPosterUrl.includes('postimg.cc')
        ? rawPosterUrl
        : `https://wsrv.nl/?url=${encodeURIComponent(rawPosterUrl)}&w=600&output=jpeg&q=80`;

    setMetaTag('property', 'og:image', moviePosterUrl);
    setMetaTag('name', 'twitter:image', moviePosterUrl);

    const modalTitleElem = document.getElementById('modalTitle');
    const isSameMovie = modalTitleElem && modalTitleElem.innerText === titleKey;

    currentItem = item;
    if (modalTitleElem) modalTitleElem.innerText = titleKey;

    if (document.getElementById('modalLanguage')) document.getElementById('modalLanguage').innerText = item.language;
    if (document.getElementById('modalCategory')) document.getElementById('modalCategory').innerText = item.category;

    const dynamicFooterKeywords = isSeries ?
        `index of /${titleKey} download, ${titleKey} web series all episodes download, ${titleKey} complete season google drive link, ${titleKey} telegram link mkv, ${titleKey} dual audio hindi english series, ${titleKey} english subtitles esub, katmoviehd ${titleKey} series, vegamovies ${titleKey} season, download web series free movie-dakhi.` :
        `index of /${titleKey} download, ${titleKey} full movie watch online free hd, download ${titleKey} google drive link, ${titleKey} telegram link mkv, ${titleKey} dual audio hindi english download, ${titleKey} english subtitles esub, 1080p bluray download filmyzilla, 720p webrip vegamovies, bolly4u full movie download.`;

    if (document.getElementById('modalDesc')) {
        document.getElementById('modalDesc').innerHTML = `
            <div class="seo-rich-layout text-left space-y-5 font-sans text-xs md:text-[13px] text-gray-300 antialiased not-italic select-text">
                <div class="flex flex-wrap items-center gap-3 border-b border-white/5 pb-3">
                    <span class="px-2 py-0.5 text-[10px] font-black tracking-wider text-white bg-red-600 rounded-sm uppercase inline-block">
                        ${item.genre || "Drama"}
                    </span>
                    <span class="text-[11px] text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span> Ultra Fast Mirror Enabled
                    </span>
                </div>
                <p class="leading-relaxed text-gray-400 text-[12px] md:text-[13px] font-normal pt-4 pb-4">
                    Looking for the secure <strong class="text-white font-semibold">Index of /${SEOFullTitle}</strong> direct servers? MovieDakhi provides optimized, ultra-fast cloud mirrors to stream and download this trending <span class="text-red-400 font-medium">${contentType.toLowerCase()}</span> with zero buffering.
                </p>
                <div class="p-3 md:p-4 bg-zinc-900/40 border border-white/10 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-x-8 text-[12px]">
                    <div class="flex items-center justify-between py-2.5 border-b border-white/[0.06]">
                        <span class="text-gray-400 font-medium flex items-center gap-2">📌 Directory</span>
                        <span class="font-semibold text-white truncate max-w-[160px] md:max-w-xs" title="Index of /${titleKey}">Index of /${titleKey}</span>
                    </div>
                    <div class="flex items-center justify-between py-2.5 border-b border-white/[0.06]">
                        <span class="text-gray-400 font-medium flex items-center gap-2">🎬 Codec</span>
                        <span class="font-semibold text-white">MKV / MP4 / x265 HEVC</span>
                    </div>
                    <div class="flex items-center justify-between py-2.5 border-b border-white/[0.06]">
                        <span class="text-gray-400 font-medium flex items-center gap-2">🌐 Audio Track</span>
                        <span class="font-bold text-emerald-400">${cleanLang}</span>
                    </div>
                    <div class="flex items-center justify-between py-2.5 border-b border-white/[0.06]">
                        <span class="text-gray-400 font-medium flex items-center gap-2">📅 Year</span>
                        <span class="font-semibold text-white">${releaseYear}</span>
                    </div>
                    <div class="flex items-center justify-between py-2.5 border-b border-white/[0.06] sm:border-b-0">
                        <span class="text-gray-400 font-medium flex items-center gap-2">🔥 Quality</span>
                        <span class="font-semibold text-amber-400">480p, 720p, 1080p, 4K UHD</span>
                    </div>
                    <div class="flex items-center justify-between py-2.5">
                        <span class="text-gray-400 font-medium flex items-center gap-2">📝 Subtitles</span>
                        <span class="font-semibold text-gray-200">English (Softcoded ESub)</span>
                    </div>
                </div>
                <div class="flex items-start gap-3 bg-blue-950/30 border border-blue-500/25 p-4 rounded-lg text-[12px] text-blue-300/90 leading-relaxed mt-4">
                    <span class="text-base shrink-0 leading-none mt-0.5">📥</span>
                    <div>
                        <strong class="text-blue-200 font-semibold block mb-0.5">Direct Cloud Access Confirmed</strong>
                        Get instant access via high-speed <span class="text-white font-medium">Google Drive & Telegram Links</span>. Optimized perfectly for remote streaming on Mobile, PC, Chromecast, or Android Smart TV setups without annoying ads.
                    </div>
                </div>
                <div class="pt-4 border-t border-white/5">
                    <span class="text-[10px] font-bold text-gray-600 uppercase tracking-widest block mb-1.5">Metadata Index Reference</span>
                    <p class="text-[10px] text-gray-700 leading-relaxed text-justify select-none opacity-25 tracking-wide font-normal normal-case">
                        ${dynamicFooterKeywords}
                    </p>
                </div>
            </div>
        `;
    }

    downloadClickCount = 0;
    const downloadBtn = document.getElementById('mainDownloadBtn');
    if (downloadBtn) {
        document.getElementById('downloadBtnText').innerText = "Download";
        downloadBtn.classList.remove('from-gray-600', 'to-gray-800', 'border-gray-500', 'cursor-not-allowed', 'opacity-80');
        downloadBtn.classList.add('from-[#2B2727]', 'to-[#2B2727]', 'border-[#E3DADA]', 'hover:scale-105');
        const wave = downloadBtn.querySelector('.animate-shine-wave');
        if (wave) wave.classList.remove('hidden');
    }

    if (item.episodes && item.episodes.length > 0) {
        if (!isSameMovie) currentEpisodeIndex = 0;
    } else {
        currentEpisodeIndex = null;
    }

    const seriesSec = document.getElementById('seriesSection');
    const epList = document.getElementById('episodeList');

    // 🚀 ওয়েব সিরিজ হলে এপিসোড বাটনগুলো তৈরি করবে
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

        // ১ম পর্বের ভিডিও সাথে সাথে প্লে করবে
        const currentEp = item.episodes[currentEpisodeIndex || 0];
        if (currentEp && currentEp.embedUrl) {
            loadIframeUrl(currentEp.embedUrl);
        }
    } else if (seriesSec) {
        seriesSec.classList.add('hidden');
    }

    const modal = document.getElementById('movieModal');
    if (modal) {
        modal.classList.remove('hidden');
        void modal.offsetWidth;
        modal.classList.add('active');
    }

    // 🚀 সিঙ্গেল মুভি হলে সার্ভার বাটন জেনারেট করবে
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

        // 🛑 STOP VIDEO: আইফ্রেম মুছে দেওয়ার ফলে ভিডিও এবং অডিও সাথে সাথে বন্ধ হয়ে যাবে
        setTimeout(() => {
            const actualVideo = document.getElementById('actualVideo');
            if (actualVideo) {
                actualVideo.innerHTML = '';
                actualVideo.classList.add('hidden');
            }
            modal.classList.add('hidden');

            // 🚀 Movie Modal বন্ধ হওয়ার সাথে সাথেই Native Ad Popup রিলিজ করা হবে
            showNativeAdPopup();
        }, 300); // মডালের ফেইড-আউট এনিমেশনের সাথে মিল রেখে 300ms সময়
    }

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, savedScrollY);

    const fab = document.getElementById('mobileFab');
    if (fab) fab.classList.remove('fab-hidden');

    // 🎯 ইউআরএল (URL) এবং হিস্ট্রি ঠিক রাখা
    if (triggerBack && window.history.state?.isModalOpen) {
        window.history.back();
    } else if (isUserAction) {
        const url = new URL(window.location);
        url.searchParams.delete('movie');
        try {
            const currentState = history.state || { view: currentView, validDakhiState: true };
            window.history.replaceState({ ...currentState, isModalOpen: false }, '', url.pathname + (url.search ? url.search : ''));
        } catch (e) { }
        updateCanonical(url.href);
        document.title = currentView === 'home' ? "MovieDakhi | Watch Dual Audio Movies & Web Series Free Online HD" : "All Movies & Web Series - MovieDakhi";
    }

    setTimeout(() => { isModalClosing = false; }, 350);
}

// ==========================================
// 🚀 DOWNLOAD BUTTON TRIGGER & EPISODES SYSTEM
// ==========================================
function handleDownloadClick() {
    if (!currentItem) return;

    if (downloadClickCount >= 3) {
        downloadClickCount = 0;
        const downloadBtn = document.getElementById('mainDownloadBtn');
        document.getElementById('downloadBtnText').innerText = "Download";

        downloadBtn.classList.remove('from-gray-600', 'to-gray-800', 'border-gray-500', 'cursor-not-allowed', 'opacity-80');
        downloadBtn.classList.add('from-[#2B2727]', 'to-[#2B2727]', 'border-[#E3DADA]', 'hover:scale-105');

        const wave = downloadBtn.querySelector('.animate-shine-wave');
        if (wave) wave.classList.remove('hidden');

        return;
    }

    downloadClickCount++;

    if (downloadClickCount === 1) {
        document.getElementById('downloadBtnText').innerText = "Ready For Download";
        if (currentItem.downloadUrl1) {
            window.open(currentItem.downloadUrl1, '_blank');
        }
    } else if (downloadClickCount === 2) {
        document.getElementById('downloadBtnText').innerText = "Download (Final Click)";
        if (currentItem.downloadUrl1) {
            window.open(currentItem.downloadUrl1, '_blank');
        }
    } else if (downloadClickCount === 3) {
        document.getElementById('downloadBtnText').innerText = "Link Expire";

        const downloadBtn = document.getElementById('mainDownloadBtn');
        if (downloadBtn) {
            downloadBtn.classList.remove('from-[#2B2727]', 'to-[#2B2727]', 'border-[#E3DADA]', 'hover:scale-105');
            downloadBtn.classList.add('!bg-none', '!bg-[#111]', '!border-white', '!text-white', 'cursor-not-allowed', 'opacity-80');

            const wave = downloadBtn.querySelector('.animate-shine-wave');
            if (wave) wave.classList.add('hidden');
        }

        if (currentEpisodeIndex !== null && currentItem.episodes && currentItem.episodes[currentEpisodeIndex].downloadUrl) {
            window.open(currentItem.episodes[currentEpisodeIndex].downloadUrl, '_blank');
        } else if (currentItem.downloadUrl2) {
            window.open(currentItem.downloadUrl2, '_blank');
        }
    }
}

function playEpisode(index, btnElement) {
    document.querySelectorAll('.episode-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

    currentEpisodeIndex = index;
    downloadClickCount = 0;

    // 🚀 ওয়েব সিরিজের পর্বের জন্য সরাসরি ভিডিও প্লে হবে (সার্ভার বাটন ছাড়া)
    const ep = currentItem.episodes[index];
    if (ep && ep.embedUrl) {
        loadIframeUrl(ep.embedUrl);
    }

    // সার্ভার সেকশন লুকিয়ে রাখবে
    const serverSec = document.getElementById('serverSection');
    if (serverSec) serverSec.classList.add('hidden');

    const downloadBtn = document.getElementById('mainDownloadBtn');
    if (downloadBtn) {
        document.getElementById('downloadBtnText').innerText = "Download";
        downloadBtn.classList.remove('from-gray-600', 'to-gray-800', 'border-gray-500', 'cursor-not-allowed', 'opacity-80');
        downloadBtn.classList.add('from-[#2B2727]', 'to-[#2B2727]', 'border-[#E3DADA]', 'hover:scale-105');
    }
}

// ==========================================
// 🚀 SEARCH INPUT EVENT LISTENERS
// ==========================================
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
    // 🚀 বডি fixed অবস্থায় থাকলে স্ক্রল ইভেন্ট রিড করা বন্ধ রাখবে
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
});

window.addEventListener('beforeunload', () => {
    const modal = document.getElementById('movieModal');
    const catMenu = document.getElementById('categoryMenu');
    if ((!modal || !modal.classList.contains('active')) && (!catMenu || !catMenu.classList.contains('active'))) {
        sessionStorage.setItem('MovieDakhi_ExactScroll', window.scrollY);
        sessionStorage.setItem('MovieDakhi_Count', libraryDisplayedCount);
    }
});

// ==========================================
// 🚀 DOM CONTENT LOADED - APPLICATION INIT
// ==========================================
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
    initHeroSlider();
    renderRecentAdds();
    renderCategorySections(isRestoring);

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

    updateCanonical(window.location.href);

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

    // 🚀 পপআপ চালু করার কমান্ড
    initWelcomePopup();

});

// ==========================================
// 🚀 POPSTATE NAVIGATION HISTORY ENGINE
// ==========================================
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

    if (handledOverlayClose) {
        return;
    }

    if (state || window.location.search) {
        const targetView = state?.view || 'home';
        const targetCat = state?.category || null;
        // 🚀 স্ক্রল পজিশন নিখুঁতভাবে রিস্টোর করা
        const targetScroll = (state && typeof state.scrollY === 'number') ? state.scrollY : savedScrollY;
        const targetCount = state?.displayedCount || 30;

        updateCanonical(window.location.protocol === 'blob:' ? 'https://moviedakhi.com/' : new URL(window.location).href);

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

// ==========================================
// 🚀 GLOBAL CLICK BACKDROP CLOSERS & TOASTS
// ==========================================
window.addEventListener('click', (e) => {
    if (e.target === categoryMenu && e.target !== document.getElementById('mobileFab') && document.getElementById('mobileFab') && !document.getElementById('mobileFab').contains(e.target)) toggleCategoryMenu(false);
});

// 🚀 DESKTOP / BIG SCREEN BACKGROUND CLICK CLOSER FOR MOVIE MODAL
const movieModalElem = document.getElementById('movieModal');
if (movieModalElem) {
    movieModalElem.addEventListener('click', (e) => {
        // ইউজার প্লেয়ার, সার্ভার বাটন, ডেসক্রিপশন বা কোনো কন্ট্রোলে ক্লিক করেছে কি না তা চেক করবে
        const isInteractiveContent = e.target.closest('.drive-video-wrapper, #serverSection, #seriesSection, #mainDownloadBtn, #modalDesc, .lang-badge, button, a, iframe, input');
        
        // যদি আসল কনটেন্টের বাইরে যেকোনো ফাঁকা জায়গায় ক্লিক করে, তবে মোডাল বন্ধ হয়ে যাবে
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

// ==========================================
// 🚀 WELCOME & BOOKMARK POPUP LOGIC
// ==========================================
function initWelcomePopup() {
    const popup = document.getElementById('welcomePopup');
    const content = document.getElementById('welcomePopupContent');

    // লোকাল স্টোরেজ চেক করবে (যাতে বারবার বিরক্ত না করে)
    if (!localStorage.getItem('MovieDakhi_WelcomeShown')) {
        // ৩ সেকেন্ড পর পপআপ আসবে
        setTimeout(() => {
            if (popup) {
                popup.classList.remove('hidden');
                void popup.offsetWidth; // Trigger reflow for animation
                popup.classList.remove('opacity-0');
                if (content) content.classList.remove('scale-95');

                // 🛑 ব্যাকগ্রাউন্ড স্ক্রল বন্ধ করবে
                document.body.style.overflow = 'hidden';
            }
        }, 12000);
    }
}

function closeWelcomePopup() {
    const popup = document.getElementById('welcomePopup');
    const content = document.getElementById('welcomePopupContent');

    if (popup) {
        popup.classList.add('opacity-0');
        if (content) content.classList.add('scale-95');

        setTimeout(() => {
            popup.classList.add('hidden');
            // ✅ পপআপ কাটলে আবার ব্যাকগ্রাউন্ড স্ক্রল চালু হবে
            document.body.style.overflow = '';
        }, 500);
    }

    // ব্রাউজারে সেভ করে রাখবে
    localStorage.setItem('MovieDakhi_WelcomeShown', 'true');
}

// ==========================================
// 🚀 UNLOCK CATEGORY POPUP LOGIC
// ==========================================
// 🎛️ ON/OFF CONTROL SWITCH
// 🟢 পপআপ চালু রাখতে চাইলে: true
// 🔴 পপআপ বন্ধ রাখতে চাইলে: false
const ENABLE_UNLOCK_CATEGORY_POPUP = true;

function showUnlockPopup() {
    // 🛑 যদি কন্ট্রোল সুইচ OFF (false) থাকে, তবে পপআপ ওপেন হবে না
    if (!ENABLE_UNLOCK_CATEGORY_POPUP) return;

    const popup = document.getElementById('unlockCategoryPopup');
    if (popup) {
        popup.classList.remove('hidden');
        void popup.offsetWidth; // Trigger reflow for animation
        popup.classList.remove('opacity-0');

        // 🛑 ব্যাকগ্রাউন্ড স্ক্রল বন্ধ করবে (পেছনের কনটেন্ট ব্লার হয়ে থাকবে)
        document.body.style.overflow = 'hidden';
    }
}

function closeUnlockPopup() {
    const popup = document.getElementById('unlockCategoryPopup');
    if (popup) {
        popup.classList.add('opacity-0');
        setTimeout(() => {
            popup.classList.add('hidden');
            // ✅ পপআপ কাটলে আবার ব্যাকগ্রাউন্ড স্ক্রল চালু হবে
            document.body.style.overflow = '';
        }, 300); // এনিমেশনের সাথে মিল রেখে
    }
}

function handleWatchAdClick() {
    // ১. প্রথমে পপআপটি ক্লোজ করবে এবং পেজের স্ক্রলিং ঠিক করবে
    closeUnlockPopup();

    // ২. আপনার দেওয়া Smart Link টি নতুন ট্যাবে অ্যাড হিসেবে ওপেন করবে
    const smartAdLink = "https://heeddialscary.com/rr3q82zj6?key=c81990371bb12dd6139bb39d8a8b4a4e";
    window.open(smartAdLink, '_blank');
}

// ==========================================
// 🚀 NATIVE AD POPUP LOGIC (Randomized Timer & Backdrop Multi-Click Close)
// ==========================================
let nativeAdBackdropClickCount = 0; // 🚀 Clicks tracker

function injectNativeAdScript() {
    const container = document.getElementById('container-faea46eecf01053afa6ef2518e3c0630');
    if (!container || container.dataset.loaded) return;

    container.dataset.loaded = 'true';
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = "https://heeddialscary.com/faea46eecf01053afa6ef2518e3c0630/invoke.js";
    container.appendChild(script);
}

function showNativeAdPopup() {
    nativeAdBackdropClickCount = 0; // 🚀 Reset counter whenever popup opens
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

// 🚀 BACKDROP OUTSIDE CLICK HANDLER (Closes popup after > 2 clicks)
const nativeAdPopupElem = document.getElementById('nativeAdPopup');
if (nativeAdPopupElem) {
    nativeAdPopupElem.addEventListener('click', (e) => {
        // e.target === nativeAdPopupElem checks if the user clicked directly on the background
        if (e.target === nativeAdPopupElem) {
            nativeAdBackdropClickCount++;
            if (nativeAdBackdropClickCount > 2) {
                closeNativeAdPopup();
                nativeAdBackdropClickCount = 0;
            }
        }
    });
}

// ==========================================
// 🚀 AUTO-CLOSE POPUP ON AD CLICK (Window Blur Trick)
// ==========================================
window.addEventListener('blur', () => {
    const popup = document.getElementById('nativeAdPopup');

    // চেক করবে পপআপটি বর্তমানে ওপেন আছে কি না (opacity-100 আছে কি না)
    if (popup && popup.classList.contains('opacity-100')) {
        // যদি ওপেন থাকে এবং উইন্ডো ফোকাস হারায় (অর্থাৎ নতুন ট্যাবে অ্যাড ওপেন হয়), 
        // তবে সাথে সাথে পপআপটি নিজে থেকে ক্লোজ হয়ে যাবে।
        closeNativeAdPopup();
    }
});