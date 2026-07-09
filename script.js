// ==========================================
// 🚀 SYSTEM & HISTORY CONFIGURATION
// ==========================================
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// ==========================================
// 🚀 NETWORK SPEED OPTIMIZATION FOR ADS
// ==========================================
if (!document.querySelector('link[href="https://onsetcab.com"]')) {
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect'; 
    preconnect1.href = 'https://onsetcab.com';
    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'dns-prefetch'; 
    preconnect2.href = 'https://onsetcab.com';
    document.head.appendChild(preconnect1); 
    document.head.appendChild(preconnect2);
}

let isPopupAdBlocking = false;

// ==========================================
// 🚀 SEO URL SLUG GENERATOR
// ==========================================
function generateMovieSlug(title) {
    if (!title) return "movie";
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

// ==========================================
// 🚀 SMART RESPONSIVE AD INJECTOR (ADSTERRA)
// ==========================================
function injectAdsterra(container, key, w, h) {
    if(!container || isPopupAdBlocking) return;
    container.innerHTML = '';
    container.className = "flex bg-[#0a0a0a] border border-white/5 rounded-xl relative overflow-hidden justify-center items-center shrink-0 mx-auto shadow-lg";
    container.style.width = '100%';
    container.style.maxWidth = w + 'px';
    container.style.minHeight = h + 'px';
    
    const label = document.createElement('span');
    label.className = "absolute top-1 left-2 text-[6px] md:text-[8px] text-gray-600 font-black tracking-widest uppercase pointer-events-none z-0";
    label.innerText = "Advertisement";
    container.appendChild(label);
    
    const iframeWrapper = document.createElement('div');
    iframeWrapper.className = "relative z-10 w-full h-full flex justify-center items-center";
    
    const iframe = document.createElement('iframe');
    iframe.width = w;
    iframe.height = h;
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.backgroundColor = "transparent";
    iframe.style.display = "block";
    iframe.setAttribute('allowtransparency', 'true');
    
    iframeWrapper.appendChild(iframe);
    container.appendChild(iframeWrapper);
    
    setTimeout(() => {
        try {
            const doc = iframe.contentWindow.document || iframe.contentDocument;
            doc.open();
            doc.write(`<!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>body{margin:0;padding:0;background:transparent;display:flex;justify-content:center;align-items:center;}</style>
            </head>
            <body>
                <script type="text/javascript">
                    atOptions = {
                        'key' : '${key}',
                        'format' : 'iframe',
                        'height' : ${h},
                        'width' : ${w},
                        'params' : {}
                    };
                </script>
                <script type="text/javascript" src="https://onsetcab.com/${key}/invoke.js"></script>
            </body>
            </html>`);
            doc.close();
        } catch(e) { }
    }, 10);
}

function injectResponsiveAdNode(container) {
    if(!container) return;
    if(container.querySelector('iframe')) return; 
    
    const isMobile = window.innerWidth <= 768;
    const key = isMobile ? '70c7d4486938c9292683286ff6e376a9' : 'd07f22b9f96bb57b376565604ef61214';
    const w = isMobile ? 320 : 728;
    const h = isMobile ? 50 : 90;
    injectAdsterra(container, key, w, h);
}

function initStaticAds() {
    injectResponsiveAdNode(document.getElementById('homeAdTopAdsterra'));
    injectResponsiveAdNode(document.getElementById('homeAdTopAdsterra2'));
    injectResponsiveAdNode(document.getElementById('libAdTopAdsterra'));
    injectResponsiveAdNode(document.getElementById('libAdTopAdsterra2'));
}

// ==========================================
// 🚀 DYNAMIC POPUNDER INJECTOR
// ==========================================
let popAdsInjected = false;
function injectPopAds() {
    if (popAdsInjected) return;
    popAdsInjected = true;
    
    const socialBar = document.createElement('script');
    socialBar.src = "https://onsetcab.com/bb/1a/2a/bb1a2a42a86c1e91bdba1e5aeadde4ac.js";
    socialBar.async = true;
    document.body.appendChild(socialBar);
    
    const popunder = document.createElement('script');
    popunder.src = "https://onsetcab.com/b0/0f/d3/b00fd39ae575d8dcda8321c78d265453.js";
    popunder.async = true;
    document.body.appendChild(popunder);
}

// ==========================================
// 🚀 NATIVE BANNER (2:1) ISOLATED INJECTOR
// ==========================================
function injectNativeBanner(container, h = 260) {
    if(!container || isPopupAdBlocking) return;
    if(container.querySelector('iframe')) return;
    
    container.innerHTML = '';
    
    const iframeWrapper = document.createElement('div');
    iframeWrapper.className = "relative z-10 w-full h-full flex justify-center items-center";
    
    const iframe = document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.style.height = h + "px";
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.backgroundColor = "transparent";
    iframe.style.display = "block";
    iframe.setAttribute('allowtransparency', 'true');
    
    iframeWrapper.appendChild(iframe);
    container.appendChild(iframeWrapper);
    
    setTimeout(() => {
        try {
            const doc = iframe.contentWindow.document || iframe.contentDocument;
            doc.open();
            doc.write(`<!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>body{margin:0;padding:0;background:transparent;display:flex;justify-content:center;align-items:center;} #container-1ada1fa7d2cd2c77a6a06795ebf21550 { width: 100%; display: flex; justify-content: center; }</style>
            </head>
            <body>
                <script async="async" data-cfasync="false" src="https://onsetcab.com/1ada1fa7d2cd2c77a6a06795ebf21550/invoke.js"></script>
                <div id="container-1ada1fa7d2cd2c77a6a06795ebf21550"></div>
            </body>
            </html>`);
            doc.close();
        } catch(e) { }
    }, 10);
}

function createMobileNativeAdBlock() {
    const block = document.createElement('div');
    block.className = 'flex md:hidden col-span-full w-full justify-center my-4';
    const container = document.createElement('div');
    container.className = 'w-full bg-[#111] rounded-xl overflow-hidden border border-white/5 shadow-lg relative min-h-[250px] flex items-center justify-center';
    
    const label = document.createElement('span');
    label.className = "absolute top-1 left-2 text-[6px] md:text-[8px] text-gray-600 font-black tracking-widest uppercase pointer-events-none z-0";
    label.innerText = "Advertisement";
    container.appendChild(label);
    
    injectNativeBanner(container, 260);
    block.appendChild(container);
    return block;
}

function createDesktopNativeAdBlock() {
    const block = document.createElement('div');
    block.className = 'hidden md:flex col-span-full w-full justify-between gap-4 my-6';
    
    for(let i=0; i<3; i++) {
        const container = document.createElement('div');
        container.className = 'flex-1 w-full bg-[#111] rounded-xl overflow-hidden border border-white/5 shadow-lg relative min-h-[250px] flex items-center justify-center';
        
        const label = document.createElement('span');
        label.className = "absolute top-1 left-2 text-[8px] text-gray-600 font-black tracking-widest uppercase pointer-events-none z-0";
        label.innerText = "Advertisement";
        container.appendChild(label);

        injectNativeBanner(container, 260);
        block.appendChild(container);
    }
    return block;
}

// ==========================================
// 🚀 DATABASE, HIGH-SPEED CACHING & INSTANT O(1) INDEXING
// ==========================================
const contentData = [
    {
        title: "The Great Grand Superhero: Aliens Ka Aagman (2026)", embedUrl: "https://moviedakhi.4meplayer.com/#ov3ao", posterUrl: "https://m.media-amazon.com/images/M/MV5BMDQ2YTgxMzAtMTE1OS00Y2RkLWFhMzAtYWEyY2ZjNTY0YTQ3XkEyXkFqcGc@._V1_.jpg", genre: "Drama, Adventure, Comedy, Family, Sci-Fi", category: "Recent Adds", language: "Hindi", quality: "HDTC", downloadUrl1: "https://onsetcab.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263", downloadUrl2: "https://moviedakhi.4meplayer.com/#ov3ao&dl=1"
    },
    {
        title: "Obsess (2026)", embedUrl: "https://moviedakhi.4meplayer.com/#818js", posterUrl: "https://m.media-amazon.com/images/M/MV5BZjI3NjU4OTItMzYxMS00NmYxLWJjOTEtZjRhZDEzZTM5YmVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genre: "Action, Thriller", category: "Recent Adds", language: "Hindi", quality: "HDTC", downloadUrl1: "https://onsetcab.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263", downloadUrl2: "https://moviedakhi.4meplayer.com/#818js&dl=1"
    }
];

const categoryIndexMap = {}; // $O(1)$ হ্যাশ-ম্যাপ গ্লোবাল অবজেক্ট

function buildCategoryIndex() {
    // আগের ইনডেক্সিং কি ক্লিয়ার করা
    Object.keys(categoryIndexMap).forEach(key => delete categoryIndexMap[key]);
    // ডাটাবেজ ম্যাপ স্ট্রাকচারে পুশ করা
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
    buildCategoryIndex(); // আল্ট্রা ফাস্ট হ্যাশ-ম্যাপ বিল্ডার চালুকরণ
}

async function fetchAndCacheNetworkDatabase() {
    try {
        const response = await fetch('movies.json');
        if (response.ok) {
            const text = await response.text();
            const db = JSON.parse(text);
            if (Array.isArray(db) && db.length > 0) {
                localStorage.setItem('moviedakhi_db_cache', text);
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
                const cachedText = localStorage.getItem('moviedakhi_db_cache');
                
                // যদি সার্ভারে কোনো পরিবর্তন হয়ে থাকে তবেই সাইলেন্ট আপডেট হবে
                if (text !== cachedText) {
                    const db = JSON.parse(text);
                    if (Array.isArray(db) && db.length > 0) {
                        localStorage.setItem('moviedakhi_db_cache', text);
                        contentData.length = 0; 
                        contentData.push(...db); 
                        processContentItems();
                        
                        // ব্রাউজার স্ক্রিন সাইলেন্ট লাইভ রিলিজ রিফ্রেশমেন্ট
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
    }, 1200); // মূল থ্রেডের কাজ শেষ হওয়ার পর ব্যাকগ্রাউন্ড চেক চালু হবে
}

async function loadContentDatabase() {
    const cachedData = localStorage.getItem('moviedakhi_db_cache');
    if (cachedData) {
        try {
            const db = JSON.parse(cachedData);
            if (Array.isArray(db) && db.length > 0) {
                contentData.length = 0;
                contentData.push(...db);
                processContentItems(); // ০ মিলি-সেকেন্ডে পেজ ওপেন হবে
                triggerBackgroundUpdateCheck(); // সাইলেন্ট ব্যাকগ্রাউন্ড ভ্যালিডেটর রান
                return;
            }
        } catch (e) {
            localStorage.removeItem('moviedakhi_db_cache');
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
let preSearchState = null;
let currentView = 'home';
let sliderInterval;

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
            toggleCategoryMenu(false, false);
            switchView('library', cat, 'replace');
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

    if (show) {
        savedScrollY = window.scrollY;

        const currentState = history.state || {};
        try { window.history.replaceState({ ...currentState, scrollY: savedScrollY }, ''); } catch (e) { }
        try { window.history.pushState({ ...currentState, isMenuOpen: true }, ''); } catch (e) { }

        categoryMenu.classList.remove('hidden');
        void categoryMenu.offsetWidth; 
        categoryMenu.classList.add('active');

        document.body.style.position = 'fixed';
        document.body.style.top = `-${savedScrollY}px`;
        document.body.style.width = '100%';

        fab.classList.add('menu-open');
    } else {
        categoryMenu.classList.remove('active');
        setTimeout(() => categoryMenu.classList.add('hidden'), 400);

        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, savedScrollY);

        if (triggerBack && window.history.state?.isMenuOpen) {
            window.history.back();
        }

        fab.classList.remove('menu-open');
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
// 🚀 HERO SLIDER INITIALIZATION
// ==========================================
function initHeroSlider() {
    if (!sliderWrapper || !sliderDots) return;
    
    // ম্যাপ ট্র্যাকার থেকে ইনস্ট্যান্ট কালেক্ট করা হচ্ছে
    const slides = [...(categoryIndexMap["Recent Adds"] || []), ...(categoryIndexMap["Bollywood"] || []), ...(categoryIndexMap["Hollywood"] || [])].slice(0, 6);
    if (slides.length === 0) return;

    let currentSlide = 0;
    sliderWrapper.innerHTML = '';
    sliderDots.innerHTML = '';

    const isMobile = window.innerWidth <= 768;
    const sliderImageWidth = isMobile ? 600 : 1200;

    slides.forEach((movie, index) => {
        const slide = document.createElement('div');
        slide.className = `slide w-full h-full absolute inset-0 transition-opacity duration-1000 ${index === 0 ? 'active' : ''}`;
        
        const loadingAttr = index === 0 ? 'eager' : 'lazy';
        const priorityAttr = index === 0 ? 'fetchpriority="high"' : '';

        slide.innerHTML = `
            <img src="${getOptimizedImageUrl(movie.posterUrl, sliderImageWidth)}" class="w-full h-full object-cover object-center" alt="${movie.title}" loading="${loadingAttr}" ${priorityAttr}>
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <div class="slide-content transform translate-y-10 opacity-0 transition-all duration-700 ease-out max-w-4xl">
                    <span class="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest mb-4 rounded-full shadow-lg shadow-red-600/40">New Release</span>
                    <h2 class="text-3xl md:text-6xl font-black mb-4 text-white drop-shadow-2xl leading-tight">${movie.title}</h2>
                    <p class="text-gray-200 text-sm md:text-base font-medium mb-8 line-clamp-3 max-w-2xl mx-auto drop-shadow-md">${movie.genre}</p>
                    <button onclick="openModal(${movie.id})" class="bg-white text-black px-8 py-3 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-gray-200 hover:scale-105 transition transform shadow-xl flex items-center justify-center gap-2 mx-auto">
                        <i class="fas fa-play"></i> Watch Now
                    </button>
                </div>
            </div>`;
        sliderWrapper.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${index === 0 ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/60'}`;
        dot.onclick = () => goToSlide(index);
        sliderDots.appendChild(dot);
    });

    function startSlideTimer() {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(() => { goToSlide((currentSlide + 1) % slides.length); }, 3500);
    }

    window.goToSlide = (index) => {
        const allSlides = document.querySelectorAll('.slide');
        const allDots = sliderDots.children;
        if (allSlides.length > 0) {
            allSlides[currentSlide].classList.remove('active');
            allDots[currentSlide].className = 'w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300';
            currentSlide = index;
            allSlides[currentSlide].classList.add('active');
            allDots[currentSlide].className = 'w-6 h-2 rounded-full bg-white transition-all duration-300';
            startSlideTimer();
        }
    };
    
    setTimeout(() => {
        const activeSlide = document.querySelector('.slide.active .slide-content');
        if (activeSlide) { activeSlide.style.opacity = '1'; activeSlide.style.transform = 'translateY(0)'; }
    }, 50);
    startSlideTimer();
}

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
        const currentState = window.history.state || {
            view: currentView,
            category: null,
            displayedCount: libraryDisplayedCount,
            validDakhiState: true
        };
        try { window.history.replaceState({ ...currentState, scrollY: currentScroll }, ''); } catch (e) { }
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
    }

    if (mode) {
        try {
            const isBlob = window.location.protocol === 'blob:';
            const stateObj = { view: viewName, category: filterCategory, scrollY: targetScroll, displayedCount: 30, validDakhiState: true };

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
            } else {
                if (mode === 'replace') {
                    window.history.replaceState(stateObj, '', window.location.href);
                } else {
                    window.history.pushState(stateObj, '', window.location.href);
                }
            }
            void document.documentElement.offsetHeight;
            window.scrollTo({ top: targetScroll, behavior: 'instant' });
        } catch (e) {
            console.warn("Navigation History Error (Safely Ignored):", e.message);
            void document.documentElement.offsetHeight;
            window.scrollTo({ top: targetScroll, behavior: 'instant' });
        }
    }

    setTimeout(() => {
        if (!isPopupAdBlocking) {
            initStaticAds();
        }
    }, 100);
}

// ==========================================
// 🚀 CARD GENERATOR & CONTENT RENDERING
// ==========================================
function createMovieCard(item) {
    const card = document.createElement('a'); 
    const movieSlug = item.slug || generateMovieSlug(item.title);
    card.href = `?movie=${movieSlug}`;
    card.className = 'movie-card relative flex flex-col group cursor-pointer no-underline';

    const infoText = item.seriesInfo ? `<p class="text-[9px] md:text-[10px] text-gray-400 font-medium mt-1 tracking-wide uppercase">${item.seriesInfo}</p>` : '';

    const qualityBadgeHtml = item.quality ?
        `<div class="absolute top-0 left-0 z-20 bg-[#E50914] text-white px-2 py-0.5 md:px-1.5 md:py-0.5 text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-br-lg shadow-md">${item.quality}</div>` : '';

    const languageBadgeHtml = item.language ?
        `<div class="absolute top-0 right-0 z-20 bg-[#E50914] text-white px-2 py-0.5 md:px-1.5 md:py-0.5 text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-bl-lg shadow-md">${item.language}</div>` : '';

    card.innerHTML = `
        <div class="relative rounded-lg overflow-hidden bg-[#111] shadow-xl aspect-[2/3] ring-1 ring-white/5 md:ring-0 transition-all duration-300 group-hover:ring-white/20 md:group-hover:ring-transparent">
            ${qualityBadgeHtml}
            ${languageBadgeHtml}
            <img src="${getOptimizedImageUrl(item.posterUrl)}" alt="Watch ${item.title} Full Movie Online Free" class="w-full h-full object-cover transition-transform duration-500 md:duration-300 group-hover:scale-110" loading="lazy" decoding="async">
            <div class="play-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 flex md:hidden flex-col justify-center items-center p-5 transition-all duration-300">
                <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]"><i class="fas fa-play text-white text-lg ml-1"></i></div>
            </div>
            <div class="play-overlay absolute inset-0 bg-black/80 opacity-0 hidden md:flex flex-col justify-center items-center p-5 transition-all duration-300">
                <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center"><i class="fas fa-play text-white text-lg"></i></div>
            </div>
        </div>
        <div class="mt-4 text-center flex flex-col items-center md:block">
            <h4 class="font-black text-white text-[11px] md:text-sm uppercase tracking-tight line-clamp-1 transition-colors">${item.title}</h4>
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
    
    // 🎯 ওল্ড কোডের লুপ বাদ দিয়ে ডাইরেক্ট ও(১) হ্যাশ-ম্যাপ রিড করা হচ্ছে
    const recentItems = categoryIndexMap["Recent Adds"] || [];
    const fragment = document.createDocumentFragment();
    
    recentItems.slice(0, 18).forEach((item, index) => {
        fragment.appendChild(createMovieCard(item));
        let currentIdx = index + 1;
        
        if (currentIdx % 8 === 0) fragment.appendChild(createMobileNativeAdBlock());
        if (currentIdx % 6 === 0) fragment.appendChild(createDesktopNativeAdBlock());
    });
    
    recentAddsGrid.appendChild(fragment);
}

function renderCategorySections(forceRenderAll = false) {
    if (!categorySections) return;
    categorySections.innerHTML = '';
    const fragment = document.createDocumentFragment();

    const observerOptions = {
        root: null,
        rootMargin: '2500px 0px',
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
        
        // 🎯 লুপ ও ফিল্টার ছাড়া ইনস্ট্যান্ট ও(১) হ্যাশ-ম্যাপ কন্টেন্ট রিড
        const filtered = categoryIndexMap[cat] || [];

        lazyGrid.innerHTML = '';
        const cardsFragment = document.createDocumentFragment();
        
        filtered.slice(0, 11).forEach((item, index) => {
            cardsFragment.appendChild(createMovieCard(item));
            let currentIdx = index + 1;
            
            if (currentIdx % 8 === 0) cardsFragment.appendChild(createMobileNativeAdBlock());
            if (currentIdx % 6 === 0) cardsFragment.appendChild(createDesktopNativeAdBlock());
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

        targetSection.querySelectorAll('.cat-ad-adsterra').forEach(container => {
            if (!container.dataset.loaded) {
                injectResponsiveAdNode(container);
                container.dataset.loaded = 'true';
            }
        });

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
            <div class="w-full flex flex-col items-center gap-4 mb-8 mt-4 min-h-[150px]">
                <div class="cat-ad-adsterra w-full"></div>
                <div class="cat-ad-adsterra w-full"></div>
            </div>

            <div class="flex items-center space-x-3 mb-8 justify-center">
                <div class="w-1.5 h-7 bg-red-600 rounded-full shadow-lg shadow-red-600/20"></div>
                <h3 class="text-2xl md:text-5xl font-black tracking-tighter uppercase">${displayName}</h3>
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
        libraryDisplayedCount = parseInt(subGrid.dataset.displayedCount || ITEMS_PER_PAGE, 10);
        return; 
    }

    subGrid = document.createElement('div');
    subGrid.id = gridId;
    subGrid.className = libraryGrid.dataset.originalClasses;
    libraryGrid.appendChild(subGrid);

    // 🎯 ম্যাপ রিড অপ্টিমাইজেশন লেয়ার (সার্চ না থাকলে পুরো ডাটাবেজের লুপ বন্ধ রাখবে)
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
            let currentIdx = index + 1;
            
            if (currentIdx % 8 === 0) fragment.appendChild(createMobileNativeAdBlock());
            if (currentIdx % 6 === 0) fragment.appendChild(createDesktopNativeAdBlock());
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
            let currentIdx = libraryDisplayedCount + index + 1;
            
            if (currentIdx % 4 === 0) fragment.appendChild(createMobileNativeAdBlock());
            if (currentIdx % 6 === 0) fragment.appendChild(createDesktopNativeAdBlock());
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
// 🚀 DYNAMIC AD INTERSTITIAL STATE ENGINE & LOGIC
// ==========================================
let pendingModalId = null;
let activePopupType = null;
let isAdTabOpened = false;
const adTargetUrl = "https://onsetcab.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263";

// পপআপ অ্যাকশন ও উইন্ডো রাউটিং হ্যান্ডলার (ইনস্ট্যান্ট ক্লোজ মেকানিজম যুক্ত করা হয়েছে)
function handlePopupAction(type) {
    window.open(adTargetUrl, '_blank');

    if (type === 'unlock') {
        const unlockDiv = document.getElementById('unlockPopup');
        if (unlockDiv) {
            unlockDiv.classList.remove('flex');
            unlockDiv.classList.add('hidden');
        }
    } else if (type === 'feedback') {
        const feedbackDiv = document.getElementById('feedbackPopup');
        if (feedbackDiv) {
            feedbackDiv.classList.remove('flex');
            feedbackDiv.classList.add('hidden');
        }
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.classList.remove('overflow-hidden');
        window.scrollTo(0, savedScrollY);

        const feedbackAdScript = document.createElement('script');
        feedbackAdScript.src = "https://onsetcab.com/b0/0f/d3/b00fd39ae575d8dcda8321c78d265453.js";
        feedbackAdScript.async = true;
        document.body.appendChild(feedbackAdScript);
    }

    activePopupType = null;
    isAdTabOpened = false;
}

window.addEventListener('focus', () => {
    isAdTabOpened = false;
    activePopupType = null;
});

// ==========================================
// 🚀 DYNAMIC MOVIE MODAL OVERLAY LOGIC
// ==========================================
function openModal(id) {
    savedScrollY = window.scrollY;
    executeActualOpenModal(id);

    const popup = document.getElementById('unlockPopup');
    if (popup) {
        popup.classList.remove('hidden');
        popup.classList.add('flex');
        document.body.classList.add('overflow-hidden'); 
    }
}

function executeActualOpenModal(id) {
    if(document.getElementById('mobileFab')) document.getElementById('mobileFab').classList.add('fab-hidden');

    const item = contentData.find(m => m.id === id);
    if (!item) return;

    const movieSlug = item.slug || generateMovieSlug(item.title);
    const newUrl = new URL(window.location.origin + '/' + movieSlug + '.html');
    
    const currentState = history.state || { view: currentView, validDakhiState: true };
    try { window.history.replaceState({ ...currentState, scrollY: savedScrollY }, ''); } catch (e) { }
    try { window.history.pushState({ ...currentState, isModalOpen: true, modalId: id, validDakhiState: true }, '', newUrl); } catch (e) { }

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

    const modalTitleElem = document.getElementById('modalTitle');
    const isSameMovie = modalTitleElem && modalTitleElem.innerText === titleKey;

    currentItem = item;
    if(modalTitleElem) modalTitleElem.innerText = titleKey;
    
    if(document.getElementById('modalLanguage')) document.getElementById('modalLanguage').innerText = item.language;
    if(document.getElementById('modalCategory')) document.getElementById('modalCategory').innerText = item.category;

    const dynamicFooterKeywords = isSeries ? 
        `index of /${titleKey} download, ${titleKey} web series all episodes download, ${titleKey} complete season google drive link, ${titleKey} telegram link mkv, ${titleKey} dual audio hindi english series, ${titleKey} english subtitles esub, katmoviehd ${titleKey} series, vegamovies ${titleKey} season, download web series free movie-dakhi.` :
        `index of /${titleKey} download, ${titleKey} full movie watch online free hd, download ${titleKey} google drive link, ${titleKey} telegram link mkv, ${titleKey} dual audio hindi english download, ${titleKey} english subtitles esub, 1080p bluray download filmyzilla, 720p webrip vegamovies, bolly4u full movie download.`;

    if(document.getElementById('modalDesc')) {
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
                <div class="p-3 md:p-4 bg-zinc-900/40 border border-white/10 rounded-lg grid g-cols-1 sm:grid-cols-2 gap-x-8 text-[12px]">
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
    if (item.episodes && seriesSec && epList) {
        seriesSec.classList.remove('hidden');
        document.getElementById('seriesInfoText').innerText = item.seriesInfo;
        epList.innerHTML = '';
        item.episodes.forEach((ep, idx) => {
            const btn = document.createElement('button');
            btn.className = `episode-btn px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black hover:bg-red-600 transition tracking-widest uppercase`;
            if (idx === (currentEpisodeIndex || 0)) btn.classList.add('active');
            btn.innerText = ep.title;
            btn.onclick = () => playEpisode(idx, btn);
            epList.appendChild(btn);
        });
    } else if (seriesSec) { 
        seriesSec.classList.add('hidden'); 
    }

    let url = item.episodes && currentEpisodeIndex !== null ? item.episodes[currentEpisodeIndex].embedUrl : (item.episodes ? item.episodes[0].embedUrl : item.embedUrl);
    const actualVideoContainer = document.getElementById('actualVideo');

    if (actualVideoContainer) {
        actualVideoContainer.classList.remove('hidden');
        const existingIframe = document.getElementById('videoIframe');
        const needsNewIframe = !isSameMovie || !existingIframe || existingIframe.src === "" || existingIframe.src === "about:blank";

        if (needsNewIframe) {
            actualVideoContainer.innerHTML = `<iframe id="videoIframe" class="w-full h-full border-0 outline-none rounded-lg bg-black" src="${url}" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`;
        }
    }

    const modal = document.getElementById('movieModal');
    if (modal) {
        modal.classList.remove('hidden');
        void modal.offsetWidth; 
        modal.classList.add('active');
        
        setTimeout(() => {
            injectResponsiveAdNode(document.getElementById('modalAdTop'));
            injectResponsiveAdNode(document.getElementById('modalAdBottom'));
        }, 150);
    }

    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = '100%';
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
    const episode = currentItem.episodes[index];
    document.querySelectorAll('.episode-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

    let url = episode.embedUrl;

    const actualVideo = document.getElementById('actualVideo');
    if (actualVideo) {
        actualVideo.classList.remove('hidden');

        const existingIframe = document.getElementById('videoIframe');
        
        if (!existingIframe || existingIframe.src !== url) {
            actualVideo.innerHTML = `<iframe id="videoIframe" class="w-full h-full border-0 outline-none rounded-lg bg-black" src="${url}" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`;
        }
    }

    currentEpisodeIndex = index;
    downloadClickCount = 0;
    const downloadBtn = document.getElementById('mainDownloadBtn');
    document.getElementById('downloadBtnText').innerText = "Download";

    downloadBtn.classList.remove('from-gray-600', 'to-gray-800', 'border-gray-500', 'cursor-not-allowed', 'opacity-80');
    downloadBtn.classList.add('from-[#2B2727]', 'to-[#2B2727]', 'border-[#E3DADA]', 'hover:scale-105');

    const wave = downloadBtn.querySelector('.animate-shine-wave');
    if (wave) wave.classList.remove('hidden');
}

let isModalClosing = false;

function closeModal(triggerBack = true, explicitClose = false) {
    const modal = document.getElementById('movieModal');
    if (!modal || modal.classList.contains('hidden')) return;

    if(document.getElementById('mobileFab')) document.getElementById('mobileFab').classList.remove('fab-hidden');

    isModalClosing = true;
    document.title = "MovieDakhi | Watch Dual Audio Movies & Web Series Free Online HD";

    modal.classList.remove('active');
    modal.classList.add('hidden');
    isModalClosing = false;

    const actualVideoContainer = document.getElementById('actualVideo');
    if (actualVideoContainer) {
        actualVideoContainer.innerHTML = ''; 
    }

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.classList.remove('overflow-hidden');
    window.scrollTo(0, savedScrollY);

    if (triggerBack && window.history.state?.isModalOpen) {
        window.history.back();
    }

    const feedbackPopup = document.getElementById('feedbackPopup');
    if (feedbackPopup) {
        feedbackPopup.classList.remove('hidden');
        feedbackPopup.classList.add('flex');
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

// ==========================================
// 🚀 GENERAL ANNOUNCEMENT POPUP LOGIC
// ==========================================
let announcementScrollY = 0;

function showAnnouncement() {
    const popup = document.getElementById('announcementPopup');
    if (!popup) return;

    const topCloseBtn = document.getElementById('announcementCloseBtnTop');
    const backdrop = document.getElementById('popupBackdrop');
    const popupTelegramBtn = document.getElementById('popupTelegramBtn');
    const popupBoxContainer = document.getElementById('popupBoxContainer');

    if (topCloseBtn) topCloseBtn.classList.remove('hidden');
    if (backdrop) backdrop.onclick = closeAnnouncement;

    if (popupTelegramBtn) popupTelegramBtn.classList.remove('hidden');

    if (popupBoxContainer) {
        popupBoxContainer.classList.add('p-5', 'md:p-8');
        popupBoxContainer.classList.remove('p-4');
    }

    popup.classList.remove('hidden');
    popup.classList.add('flex');

    announcementScrollY = window.scrollY || document.documentElement.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${announcementScrollY}px`;
    document.body.style.width = '100%';

    setTimeout(() => {
        popup.classList.add('active');
    }, 50);
}

function closeAnnouncement() {
    const popup = document.getElementById('announcementPopup');
    if(!popup) return;
    
    popup.classList.remove('active');

    setTimeout(() => {
        popup.classList.add('hidden');
        popup.classList.remove('flex');

        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo({ top: announcementScrollY, behavior: 'instant' });

        isPopupAdBlocking = false;
        initStaticAds();
        
        document.querySelectorAll('.bg-\\[\\#111\\].relative.min-h-\\[250px\\]').forEach(container => {
            if (!container.querySelector('iframe')) injectNativeBanner(container, 260);
        });
        
        document.querySelectorAll('.cat-ad-adsterra').forEach(container => {
            if (!container.querySelector('iframe') && container.dataset.loaded === 'true') {
                injectResponsiveAdNode(container);
            }
        });

        setTimeout(() => {
            injectPopAds(); 
        }, 500);

    }, 500);
}

// ==========================================
// 🚀 SESSION & SCROLL PERSISTENCE CONFIG
// ==========================================
const sessionKey = 'MovieDakhi_Welcome_Session_Final';
const localKey = 'MovieDakhi_Welcome_Time_Final';
const nowTime = new Date().getTime();
const lastShown = localStorage.getItem(localKey);

const hasSession = sessionStorage.getItem(sessionKey);
const hasRecentLocal = lastShown && (nowTime - parseInt(lastShown)) < 1800000;

const urlParams2 = new URLSearchParams(window.location.search);
const isFallback = urlParams2.get('fb_fallback');
const shouldShowPopup = !isFallback && (!hasSession && !hasRecentLocal);

if (shouldShowPopup) {
    isPopupAdBlocking = false; 
    setTimeout(() => {
        sessionStorage.setItem(sessionKey, 'true');
        localStorage.setItem(localKey, nowTime.toString());
        showAnnouncement();
    }, 20000);
} else {
    setTimeout(() => {
        injectPopAds();
    }, 3500); 
}

let scrollTimeoutId;
window.addEventListener('scroll', () => {
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
        if ((!modal || !modal.classList.contains('active')) && (!catMenu || !catMenu.classList.contains('active'))) {
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

    // renderCategories();
    // initHeroSlider();
    // renderRecentAdds();
    // renderCategorySections(isRestoring);
    
    // const params = new URLSearchParams(window.location.search);
    // const view = params.get('view') || 'home';
    // const category = params.get('category');
    // const movieSlug = params.get('movie');

    // const isBlob = window.location.protocol === 'blob:';

    renderCategories();
    initHeroSlider();
    renderRecentAdds();
    renderCategorySections(isRestoring);
    
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view') || 'home';
    const category = params.get('category');
    
    // 🎯 পরিবর্তন: const বদলে let করা হলো এবং ডিরেক্ট পাথনেম রিডিং মেকানিজম যুক্ত করা হলো
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

    setTimeout(() => {
        initStaticAds();
    }, 100); 
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

    if (categoryMenu && !categoryMenu.classList.contains('hidden') && (!state || !state.isMenuOpen)) {
        toggleCategoryMenu(false, false);
        handledOverlayClose = true;
    }

    if (handledOverlayClose) {
        return;
    }

    if (state || window.location.search) {
        updateCanonical(window.location.protocol === 'blob:' ? 'https://moviedakhi.com/' : new URL(window.location).href);
        switchView(state?.view || 'home', state?.category || null, false, state?.displayedCount || 30);
        void document.documentElement.offsetHeight;
        window.scrollTo({ top: state?.scrollY || 0, behavior: 'instant' });
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
    if (e.target === document.getElementById('movieModal') || e.target === document.getElementById('modalScrollContainer') || e.target === document.getElementById('modalFlexContainer')) closeModal(true, true);
    if (e.target === categoryMenu && e.target !== document.getElementById('mobileFab') && document.getElementById('mobileFab') && !document.getElementById('mobileFab').contains(e.target)) toggleCategoryMenu(false);
});

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