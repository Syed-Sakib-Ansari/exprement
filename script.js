if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

let isPopupAdBlocking = false;

// ==========================================
// 🚀 SMART RESPONSIVE AD INJECTOR (Fixed & Native Banner Added)
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
    iframe.setAttribute('loading', 'lazy');
    iframe.width = w;
    iframe.height = h;
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.backgroundColor = "transparent";
    iframe.style.display = "block";
    
    iframeWrapper.appendChild(iframe);
    container.appendChild(iframeWrapper);
    
    setTimeout(() => {
        try {
            const doc = iframe.contentWindow.document;
            doc.open();
            doc.write(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="margin:0;padding:0;background:transparent;display:flex;justify-content:center;align-items:center;"><script>atOptions={key:'${key}',format:'iframe',height:${h},width:${w},params:{}};</script><script src="https://onsetcab.com/${key}/invoke.js"></scr`+`ipt></body></html>`);
            doc.close();
        } catch(e) { }
    }, 50);
}

function injectAdcash(container, zoneId, w, h) {
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
    iframe.setAttribute('loading', 'lazy');
    iframe.width = w;
    iframe.height = h;
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.backgroundColor = "transparent";
    iframe.style.display = "block";
    
    iframeWrapper.appendChild(iframe);
    container.appendChild(iframeWrapper);
    
    setTimeout(() => {
        try {
            const doc = iframe.contentWindow.document;
            doc.open();
            doc.write(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="margin:0;padding:0;background:transparent;display:flex;justify-content:center;align-items:center;"><script id="aclib" type="text/javascript" src="//acscdn.com/script/aclib.js"></scr`+`ipt><script type="text/javascript">aclib.runBanner({zoneId: '${zoneId}'});</scr`+`ipt></body></html>`);
            doc.close();
        } catch(e) { }
    }, 50);
}

function injectResponsiveAdNode(container, type) {
    if(!container) return;
    const isMobile = window.innerWidth <= 768;
    
    if (type === 'adsterra') {
        const key = isMobile ? '70c7d4486938c9292683286ff6e376a9' : 'd07f22b9f96bb57b376565604ef61214';
        const w = isMobile ? 320 : 728;
        const h = isMobile ? 50 : 90;
        injectAdsterra(container, key, w, h);
    } else {
        const zone = isMobile ? '11369238' : '11369222';
        const w = isMobile ? 300 : 728;
        const h = isMobile ? 100 : 90;
        injectAdcash(container, zone, w, h);
    }
}

function initStaticAds() {
    injectResponsiveAdNode(document.getElementById('homeAdTopAdsterra'), 'adsterra');
    injectResponsiveAdNode(document.getElementById('homeAdTopAdcash'), 'adcash');
    injectResponsiveAdNode(document.getElementById('libAdTopAdsterra'), 'adsterra');
    injectResponsiveAdNode(document.getElementById('libAdTopAdcash'), 'adcash');
}

// ==========================================
// 🚀 DYNAMIC SOCIALBAR & POPUNDER INJECTOR
// ==========================================
let popAdsInjected = false;
function injectPopAds() {
    if (popAdsInjected) return;
    popAdsInjected = true;
    
    // SocialBar
    const socialBar = document.createElement('script');
    socialBar.src = "https://onsetcab.com/bb/1a/2a/bb1a2a42a86c1e91bdba1e5aeadde4ac.js";
    socialBar.async = true;
    document.body.appendChild(socialBar);
    
    // Popunder
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
    container.innerHTML = '';
    
    const iframeWrapper = document.createElement('div');
    iframeWrapper.className = "relative z-10 w-full h-full flex justify-center items-center";
    
    const iframe = document.createElement('iframe');
    iframe.setAttribute('loading', 'lazy'); 
    iframe.width = "100%";
    iframe.height = h;
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.backgroundColor = "transparent";
    iframe.style.display = "block";
    
    iframeWrapper.appendChild(iframe);
    container.appendChild(iframeWrapper);
    
    setTimeout(() => {
        try {
            const doc = iframe.contentWindow.document;
            doc.open();
            doc.write(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body{margin:0;padding:0;background:transparent;display:flex;justify-content:center;align-items:center;} #container-1ada1fa7d2cd2c77a6a06795ebf21550 { width: 100%; display: flex; justify-content: center; }</style></head><body><script async="async" data-cfasync="false" src="https://onsetcab.com/1ada1fa7d2cd2c77a6a06795ebf21550/invoke.js"></scr`+`ipt><div id="container-1ada1fa7d2cd2c77a6a06795ebf21550"></div></body></html>`);
            doc.close();
        } catch(e) { }
    }, 50);
}

// Mobile: 1 Native Banner
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

// Desktop: 3 Native Banners Horizontally
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


// ১. লোকাল ব্যাকআপ মুভির ডাটাবেজ
const contentData = [
    {
        title: "The Great Grand Superhero: Aliens Ka Aagman (2026)", embedUrl: "https://moviedakhi.4meplayer.com/#ov3ao", posterUrl: "https://m.media-amazon.com/images/M/MV5BMDQ2YTgxMzAtMTE1OS00Y2RkLWFhMzAtYWEyY2ZjNTY0YTQ3XkEyXkFqcGc@._V1_.jpg", genre: "Drama, Adventure, Comedy, Family, Sci-Fi", category: "Recent Adds", language: "Hindi", quality: "HDTC", downloadUrl1: "https://onsetcab.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263", downloadUrl2: "https://moviedakhi.4meplayer.com/#ov3ao&dl=1"
    },
    {
        title: "Obsess (2026)", embedUrl: "https://moviedakhi.4meplayer.com/#818js", posterUrl: "https://m.media-amazon.com/images/M/MV5BZjI3NjU4OTItMzYxMS00NmYxLWJjOTEtZjRhZDEzZTM5YmVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genre: "Action, Thriller", category: "Recent Adds", language: "Hindi", quality: "HDTC", downloadUrl1: "https://onsetcab.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263", downloadUrl2: "https://moviedakhi.4meplayer.com/#818js&dl=1"
    }
];

// ২. ASYNC FETCH SYSTEM
async function loadContentDatabase() {
    try {
        const response = await fetch('movies.json');
        if (response.ok) {
            const db = await response.json();
            if (Array.isArray(db) && db.length > 0) {
                contentData.length = 0; 
                contentData.push(...db); 
            }
        }
    } catch (err) {
        console.warn("External JSON database failed to load. Using fallback array.", err);
    } finally {
        contentData.forEach((item, index) => { item.id = index; });
    }
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
    if (!sliderWrapper || !sliderDots) return;
    const slides = contentData.filter(item => item.category === "Recent Adds" || item.category === "Bollywood" || item.category === "Hollywood").slice(0, 6);
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
        document.title = "MovieDakhi | Watch Free Movies & Web Series Online";
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
}

function createMovieCard(item) {
    const card = document.createElement('div');
    card.className = 'movie-card relative flex flex-col group cursor-pointer';

    const infoText = item.seriesInfo ? `<p class="text-[9px] md:text-[10px] text-gray-400 font-medium mt-1 tracking-wide uppercase">${item.seriesInfo}</p>` : '';

    const qualityBadgeHtml = item.quality ?
        `<div class="absolute top-0 left-0 z-20 bg-[#E50914] text-white px-2 py-0.5 md:px-1.5 md:py-0.5 text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-br-lg shadow-md">${item.quality}</div>` : '';

    const languageBadgeHtml = item.language ?
        `<div class="absolute top-0 right-0 z-20 bg-[#E50914] text-white px-2 py-0.5 md:px-1.5 md:py-0.5 text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-bl-lg shadow-md">${item.language}</div>` : '';

    card.innerHTML = `
        <div class="relative rounded-lg overflow-hidden bg-[#111] shadow-xl aspect-[2/3] ring-1 ring-white/5 md:ring-0 transition-all duration-300 group-hover:ring-white/20 md:group-hover:ring-transparent">
            ${qualityBadgeHtml}
            ${languageBadgeHtml}
            <img src="${getOptimizedImageUrl(item.posterUrl)}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 md:duration-300 group-hover:scale-110" loading="lazy" decoding="async">
            <div class="play-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 flex md:hidden flex-col justify-center items-center p-5 transition-all duration-300">
                <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]"><i class="fas fa-play text-white text-lg ml-1"></i></div>
            </div>
            <div class="play-overlay absolute inset-0 bg-black/80 opacity-0 hidden md:flex flex-col justify-center items-center p-5 transition-all duration-300">
                <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center"><i class="fas fa-play text-white text-lg"></i></div>
            </div>
        </div>
        <div class="mt-4 text-center flex flex-col items-center md:block">
            <h4 class="font-black text-[11px] md:text-sm uppercase tracking-tight line-clamp-1 transition-colors">${item.title}</h4>
            ${infoText}
        </div>`;
    card.onclick = () => openModal(item.id);
    return card;
}

// 🚀 RECENT ADDS RENDER (With Native Banners)
function renderRecentAdds() {
    if (!recentAddsGrid) return;
    recentAddsGrid.innerHTML = '';
    const recentItems = contentData.filter(item => item.category === "Recent Adds");
    const fragment = document.createDocumentFragment();
    
    recentItems.slice(0, 18).forEach((item, index) => {
        fragment.appendChild(createMovieCard(item));
        let currentIdx = index + 1;
        
        // Mobile: after every 8 cards
        if (currentIdx % 8 === 0) fragment.appendChild(createMobileNativeAdBlock());
        // Desktop: after every 6 cards
        if (currentIdx % 6 === 0) fragment.appendChild(createDesktopNativeAdBlock());
    });
    
    recentAddsGrid.appendChild(fragment);
}

// 🚀 CATEGORY SECTIONS RENDER (With Native Banners)
function renderCategorySections(forceRenderAll = false) {
    if (!categorySections) return;
    categorySections.innerHTML = '';
    const fragment = document.createDocumentFragment();

    const observerOptions = {
        root: null,
        rootMargin: '250px 0px',
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
        const filtered = contentData.filter(m => m.category === cat);

        lazyGrid.innerHTML = '';
        const cardsFragment = document.createDocumentFragment();
        
        filtered.slice(0, 11).forEach((item, index) => {
            cardsFragment.appendChild(createMovieCard(item));
            let currentIdx = index + 1;
            
            // Mobile: after every 8 cards
            if (currentIdx % 8 === 0) cardsFragment.appendChild(createMobileNativeAdBlock());
            // Desktop: after every 6 cards
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

        const astContainer = targetSection.querySelector('.cat-ad-adsterra');
        const acContainer = targetSection.querySelector('.cat-ad-adcash');
        if (astContainer && !astContainer.dataset.loaded) {
            injectResponsiveAdNode(astContainer, 'adsterra');
            astContainer.dataset.loaded = 'true';
        }
        if (acContainer && !acContainer.dataset.loaded) {
            injectResponsiveAdNode(acContainer, 'adcash');
            acContainer.dataset.loaded = 'true';
        }

        targetSection.classList.remove('opacity-0');
        targetSection.classList.add('opacity-100');
    }

    categories.filter(c => c !== 'all').forEach(cat => {
        const filtered = contentData.filter(m => m.category === cat);
        if (filtered.length === 0) return;

        const displayName = cat === 'Korean Country' ? 'Korean' : cat;
        const section = document.createElement('section');
        section.className = 'mb-16 lazy-section opacity-0 min-h-[350px] transition-opacity duration-500';
        section.setAttribute('data-category-lazy', cat);

        section.innerHTML = `
            <div class="w-full flex flex-col items-center gap-4 mb-8 mt-4 min-h-[150px]">
                <div class="cat-ad-adsterra w-full"></div>
                <div class="cat-ad-adcash w-full"></div>
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

// 🚀 LIBRARY RENDER (With Native Banners)
function initLibraryRender(filter = "all", initialCount = 0) {
    if (!libraryGrid) return;
    const rawQuery = searchInput ? searchInput.value : '';

    const cleanStr = (str) => {
        if (!str) return "";
        return str.toLowerCase().replace(/[^a-z0-9]/g, '');
    };

    const cleanQuery = cleanStr(rawQuery);

    libraryData = contentData.filter(item => {
        const matchesCat = filter === "all" || item.category === filter || (filter === "all" && item.category === "Recent Adds");

        const cleanTitle = cleanStr(item.title);
        const cleanGenre = cleanStr(item.genre);
        const cleanCategory = cleanStr(item.category);

        const matchesSearch = cleanTitle.includes(cleanQuery) ||
            cleanCategory.includes(cleanQuery) ||
            cleanGenre.includes(cleanQuery);

        return matchesCat && matchesSearch;
    });

    libraryGrid.innerHTML = '';
    libraryDisplayedCount = initialCount > 0 ? initialCount : ITEMS_PER_PAGE;

    if (libraryData.length === 0) {
        libraryGrid.innerHTML = `<div class="col-span-full py-20 text-center text-gray-600 font-bold uppercase tracking-widest">No Results Found</div>`;
    } else {
        const fragment = document.createDocumentFragment();
        libraryData.slice(0, libraryDisplayedCount).forEach((item, index) => {
            fragment.appendChild(createMovieCard(item));
            let currentIdx = index + 1;
            
            // Mobile: after every 8 cards
            if (currentIdx % 8 === 0) fragment.appendChild(createMobileNativeAdBlock());
            // Desktop: after every 6 cards
            if (currentIdx % 6 === 0) fragment.appendChild(createDesktopNativeAdBlock());
        });
        libraryGrid.appendChild(fragment);
    }

    updateLoadMoreVisibility();

    if (rawQuery.trim().length > 0 && libraryView) {
        const scrollTarget = libraryView.offsetTop - 100;
        window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
}

// 🚀 LIBRARY SCROLL CHUNK (With Native Banners)
function renderLibraryChunk() {
    if (isLoading) return;
    isLoading = true;
    
    const nextCount = libraryDisplayedCount + ITEMS_PER_PAGE;
    const chunk = libraryData.slice(libraryDisplayedCount, nextCount);
    
    if (chunk.length > 0 && libraryGrid) {
        const fragment = document.createDocumentFragment();
        chunk.forEach((item, index) => {
            fragment.appendChild(createMovieCard(item));
            let currentIdx = libraryDisplayedCount + index + 1;
            
            // Mobile: after every 8 cards
            if (currentIdx % 4 === 0) fragment.appendChild(createMobileNativeAdBlock());
            // Desktop: after every 6 cards
            if (currentIdx % 6 === 0) fragment.appendChild(createDesktopNativeAdBlock());
        });
        libraryGrid.appendChild(fragment);
        libraryDisplayedCount = nextCount;
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
    if(document.getElementById('mobileFab')) document.getElementById('mobileFab').classList.add('fab-hidden');
    savedScrollY = window.scrollY;

    const currentState = history.state || { view: currentView, validDakhiState: true };
    try { window.history.replaceState({ ...currentState, scrollY: savedScrollY }, ''); } catch (e) { }
    try { window.history.pushState({ ...currentState, isModalOpen: true, modalId: id, validDakhiState: true }, ''); } catch (e) { }

    const item = contentData.find(m => m.id === id);
    const modalTitleElem = document.getElementById('modalTitle');
    const isSameMovie = modalTitleElem && modalTitleElem.innerText === item.title;

    currentItem = item;
    if(modalTitleElem) modalTitleElem.innerText = item.title;
    if(document.getElementById('modalDesc')) document.getElementById('modalDesc').innerText = item.genre || "The cinematic experience of a lifetime.";
    if(document.getElementById('modalLanguage')) document.getElementById('modalLanguage').innerText = item.language;
    if(document.getElementById('modalCategory')) document.getElementById('modalCategory').innerText = item.category;

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
            actualVideoContainer.innerHTML = `<iframe id="videoIframe" class="w-full h-full border-0 outline-none" src="${url}" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" referrerpolicy="origin"></iframe>`;
        }
    }

    const modal = document.getElementById('movieModal');
    if (modal) {
        modal.classList.remove('hidden');
        void modal.offsetWidth;
        modal.classList.add('active');
        
        injectResponsiveAdNode(document.getElementById('modalAdTop'), 'adsterra');
        injectResponsiveAdNode(document.getElementById('modalAdBottom'), 'adcash');
    }

    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = '100%';
}

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
            actualVideo.innerHTML = `<iframe id="videoIframe" class="w-full h-full border-0 outline-none" src="${url}" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" referrerpolicy="origin"></iframe>`;
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

function closeModal(triggerBack = true, explicitClose = false) {
    const modal = document.getElementById('movieModal');
    if (!modal || modal.classList.contains('hidden')) return;

    if(document.getElementById('mobileFab')) document.getElementById('mobileFab').classList.remove('fab-hidden');

    if (!triggerBack) {
        modal.classList.add('hidden');
        modal.classList.remove('active');
    } else {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    setTimeout(() => {
        const actualVideoContainer = document.getElementById('actualVideo');
        if (actualVideoContainer) {
            actualVideoContainer.innerHTML = ''; 
        }
    }, 300);

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, savedScrollY);

    if (triggerBack && window.history.state?.isModalOpen) {
        window.history.back();
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

let announcementScrollY = 0;

function showAnnouncement() {
    const popup = document.getElementById('announcementPopup');
    if (!popup) return;

    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isFacebookApp = /FBAN|FBAV|Ios/i.test(ua);
    const isUCBrowser = /UCBrowser|UCWEB|UCMini/i.test(ua);
    const isInstaApp = /Instagram/i.test(ua);
    const isAndroidWebviewApp = /wv|android.*version\/[0-9]/i.test(ua);
    const isTrappedApp = isFacebookApp || isUCBrowser || isInstaApp || isAndroidWebviewApp;

    const warningText = document.getElementById('browserWarningText');
    if (warningText && isTrappedApp) {
        if (isFacebookApp) {
            warningText.innerHTML = `Facebook browser <span class="text-white font-black">Cannot Play or Download</span> movies. Tap below to use a real browser which you have!`;
        } else if (isUCBrowser) {
            warningText.innerHTML = `UC browser <span class="text-white font-black">Cannot Play or Download</span> movies. Tap below to use a real browser which you have!`;
        } else if (isInstaApp) {
            warningText.innerHTML = `Instagram browser <span class="text-white font-black">Cannot Play or Download</span> movies. Tap below to use a real browser which you have!`;
        } else if (isAndroidWebviewApp) {
            warningText.innerHTML = `This built-in browser <span class="text-white font-black">Cannot Play or Download</span> movies. Tap below to use a real browser which you have!`;
        }
    }

    const suggestionBox = document.getElementById('browserSuggestionBox');
    const topCloseBtn = document.getElementById('announcementCloseBtnTop');
    const backdrop = document.getElementById('popupBackdrop');
    const popupWelcomeText = document.getElementById('popupWelcomeText');
    const popupTelegramBtn = document.getElementById('popupTelegramBtn');
    const popupBoxContainer = document.getElementById('popupBoxContainer');

    if (isTrappedApp) {
        if (suggestionBox) suggestionBox.classList.remove('hidden');
        if (topCloseBtn) topCloseBtn.classList.add('hidden');
        if (backdrop) backdrop.onclick = null;

        if (popupWelcomeText) popupWelcomeText.classList.add('hidden');
        if (popupTelegramBtn) popupTelegramBtn.classList.add('hidden');

        if (popupBoxContainer) {
            popupBoxContainer.classList.remove('p-5', 'md:p-8');
            popupBoxContainer.classList.add('p-4');
        }
    } else {
        if (suggestionBox) suggestionBox.classList.add('hidden');
        if (topCloseBtn) topCloseBtn.classList.remove('hidden');
        if (backdrop) backdrop.onclick = closeAnnouncement;

        if (popupWelcomeText) popupWelcomeText.classList.remove('hidden');
        if (popupTelegramBtn) popupTelegramBtn.classList.remove('hidden');

        if (popupBoxContainer) {
            popupBoxContainer.classList.add('p-5', 'md:p-8');
            popupBoxContainer.classList.remove('p-4');
        }
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

// 🚀 FIXED POPUP CLOSE LOGIC (Injects Ads AFTER popup is closed!)
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

        // 🚀 Ad Unblocking Logic - Fills out previously empty spaces
        isPopupAdBlocking = false;
        initStaticAds();
        
        document.querySelectorAll('.bg-\\[\\#111\\].relative.min-h-\\[250px\\]').forEach(container => {
            if (!container.querySelector('iframe')) injectNativeBanner(container, 260);
        });
        
        document.querySelectorAll('.cat-ad-adsterra, .cat-ad-adcash').forEach(container => {
            if (!container.querySelector('iframe') && container.dataset.loaded === 'true') {
                if (container.classList.contains('cat-ad-adsterra')) injectResponsiveAdNode(container, 'adsterra');
                if (container.classList.contains('cat-ad-adcash')) injectResponsiveAdNode(container, 'adcash');
            }
        });

        setTimeout(() => {
            showBookmarkPopup();
            injectPopAds(); // 🚀 THIS IS THE MAGIC! Ads load only AFTER popup is closed.
        }, 500);

    }, 500);
}

const uaCheck = navigator.userAgent || navigator.vendor || window.opera;
const isFBCheck = /FBAN|FBAV|Ios/i.test(uaCheck);
const isUCCheck = /UCBrowser|UCWEB|UCMini/i.test(uaCheck);
const isInstaCheck = /Instagram/i.test(uaCheck);
const isAndroidWebviewCheck = /wv|android.*version\/[0-9]/i.test(uaCheck);
const isTrappedCheck = isFBCheck || isUCCheck || isInstaCheck || isAndroidWebviewCheck;

const sessionKey = 'MovieDakhi_Welcome_Session_Final';
const localKey = 'MovieDakhi_Welcome_Time_Final';
const nowTime = new Date().getTime();
const lastShown = localStorage.getItem(localKey);

const hasSession = sessionStorage.getItem(sessionKey);
const hasRecentLocal = lastShown && (nowTime - parseInt(lastShown)) < 1800000;

// 🚀 FIXED: GATEKEEPER LOGIC FOR SOCIALBAR & POPUNDER
const urlParams2 = new URLSearchParams(window.location.search);
const isFallback = urlParams2.get('fb_fallback');
const shouldShowPopup = !isFallback && (isTrappedCheck || (!hasSession && !hasRecentLocal));

if (shouldShowPopup) {
    isPopupAdBlocking = true; // 🔴 Block ads right away
    // 🛑 If popup is scheduled to show, DO NOT LOAD SocialBar/Popunder here!
    setTimeout(() => {
        sessionStorage.setItem(sessionKey, 'true');
        localStorage.setItem(localKey, nowTime.toString());
        showAnnouncement();
    }, isTrappedCheck ? 500 : 20000);
} else {
    // ✅ If no popup will show, safe to load SocialBar in the background!
    setTimeout(() => {
        injectPopAds();
    }, 3500); 
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

function showBookmarkPopup() {
    const bookmarkPopup = document.getElementById('bookmarkPopup');
    const bookmarkDesc = document.getElementById('bookmarkDesc');
    if (!bookmarkPopup || !bookmarkDesc) return;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

    if (isMobile) {
        bookmarkDesc.innerHTML = `<span class="font-black text-white text-[11px]">Tap menu</span> <i class="fas fa-ellipsis-v mx-1.5 text-gray-400"></i> <span class="font-black text-white text-[11px]">& select</span> <strong class="text-white font-black bg-white/10 px-1.5 py-0.5 rounded ml-1 whitespace-nowrap shadow-inner">Add to Home Screen</strong>`;
    } else if (isMac) {
        bookmarkDesc.innerHTML = `<span class="font-black text-white text-[11px] md:text-sm uppercase tracking-wide">Press</span> <kbd id="kbdShortcut" class="inline-block bg-white text-red-600 border-b-2 border-red-800 px-2.5 py-0.5 rounded-md font-mono font-black shadow-md mx-2.5 transition-all duration-300 transform scale-110 -translate-y-0.5 text-xs md:text-sm">Cmd + D</kbd> <span class="font-black text-white text-[11px] md:text-sm uppercase tracking-wide">to bookmark us!</span>`;
    } else {
        bookmarkDesc.innerHTML = `<span class="font-black text-white text-[11px] md:text-sm uppercase tracking-wide">Press</span> <kbd id="kbdShortcut" class="inline-block bg-white text-red-600 border-b-2 border-red-800 px-2.5 py-0.5 rounded-md font-mono font-black shadow-md mx-2.5 transition-all duration-300 transform scale-110 -translate-y-0.5 text-xs md:text-sm">Ctrl + D</kbd> <span class="font-black text-white text-[11px] md:text-sm uppercase tracking-wide">to bookmark us!</span>`;
    }

    bookmarkPopup.classList.remove('translate-y-32', 'opacity-0');
    bookmarkPopup.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

    setTimeout(() => {
        closeBookmarkPopup();
    }, 20000);
}

function triggerBookmark(e) {
    if (e && e.target.closest('button')) return;

    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const shortcut = isMac ? 'Cmd + D' : 'Ctrl + D';
    const kbd = document.getElementById('kbdShortcut');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        showToast("Tap menu <i class='fas fa-ellipsis-v mx-1 text-gray-500'></i> & select <strong class='text-white font-black'>Add to Home Screen</strong>!");
    } else {
        if (window.external && ('AddFavorite' in window.external)) {
            try {
                window.external.AddFavorite(window.location.href, document.title);
                closeBookmarkPopup();
                return;
            } catch (err) { }
        }

        if (kbd) {
            kbd.classList.add('scale-125', 'bg-red-600', 'text-white', 'border-red-800');
            setTimeout(() => {
                kbd.classList.remove('scale-125', 'bg-red-600', 'text-white', 'border-red-800');
            }, 400);
        }
        showToast(`Press ${shortcut} on your keyboard to save this site!`);
    }
}

function closeBookmarkPopup(e) {
    if (e) {
        e.stopPropagation();
    }
    const bookmarkPopup = document.getElementById('bookmarkPopup');
    if (bookmarkPopup) {
        bookmarkPopup.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
        bookmarkPopup.classList.add('translate-y-32', 'opacity-0');
    }
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

    renderCategories();
    initHeroSlider();
    renderRecentAdds();
    renderCategorySections(isRestoring);
    
    const isBlob = window.location.protocol === 'blob:';
    if (history.state) {
        const state = history.state;
        finalScroll = finalScroll > 0 ? finalScroll : (state.scrollY || 0);
        finalCount = finalCount > ITEMS_PER_PAGE ? finalCount : (state.displayedCount || ITEMS_PER_PAGE);
        switchView(state.view, state.category, false, finalCount);
    } else if (!isBlob) {
        const params = new URLSearchParams(window.location.search);
        const view = params.get('view') || 'home';
        const category = params.get('category');
        try { window.history.replaceState({ view: view, category: category, scrollY: 0, displayedCount: finalCount, validDakhiState: true }, ''); } catch (e) { }
        switchView(view, category, false, finalCount);
    } else {
        switchView('home', null, false, finalCount);
    }

    updateCanonical(window.location.href);

    if (isRestoring) {
        requestAnimationFrame(() => {
            window.scrollTo({ top: finalScroll, left: 0, behavior: 'instant' });
            setTimeout(() => {
                window.scrollTo({ top: finalScroll, left: 0, behavior: 'instant' });
            }, 50);
        });
    }

    setTimeout(() => {
        if (!isPopupAdBlocking) {
            initStaticAds();
        }
    }, 2500); 

});

window.addEventListener('popstate', (event) => {
    const state = event.state;
    const modal = document.getElementById('movieModal');

    if (modal && !modal.classList.contains('hidden')) {
        if (state && state.validDakhiState && !state.isModalOpen) {
            closeModal(false, false);
        } else {
            return;
        }
    }

    if (categoryMenu && !categoryMenu.classList.contains('hidden') && (!state || !state.isMenuOpen)) {
        toggleCategoryMenu(false, false);
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

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('movieModal') || e.target === document.getElementById('modalScrollContainer') || e.target === document.getElementById('modalFlexContainer')) closeModal(true, true);
    if (e.target === categoryMenu && e.target !== document.getElementById('mobileFab') && document.getElementById('mobileFab') && !document.getElementById('mobileFab').contains(e.target)) toggleCategoryMenu(false);
});

function openInBrowser(browser) {
    const targetDomain = 'moviedakhi.com';
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);

    let schemeUrl = '';
    let androidIntents = [];

    const genericIntent = `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end;`;

    if (browser === 'chrome') {
        schemeUrl = `googlechrome://navigate?url=https://${targetDomain}`;
        androidIntents = [
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=com.android.chrome;end;`,
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=com.chrome.beta;end;`,
            genericIntent
        ];
    } else if (browser === 'edge') {
        schemeUrl = `microsoft-edge-https://${targetDomain}`;
        androidIntents = [
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=com.microsoft.emmx;end;`,
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=com.microsoft.emmx.beta;end;`,
            genericIntent
        ];
    } else if (browser === 'opera') {
        schemeUrl = `opera-http://${targetDomain}`;
        androidIntents = [
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=com.opera.browser;end;`,
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=com.opera.mini.native;end;`,
            genericIntent
        ];
    } else if (browser === 'firefox') {
        schemeUrl = `firefox://open-url?url=https://${targetDomain}`;
        androidIntents = [
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=org.mozilla.firefox;end;`,
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=org.mozilla.firefox_beta;end;`,
            genericIntent
        ];
    } else if (browser === 'brave') {
        schemeUrl = `brave://open-url?url=https://${targetDomain}`;
        androidIntents = [
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=com.brave.browser;end;`,
            genericIntent
        ];
    } else if (browser === 'safari') {
        schemeUrl = `x-safari-https://${targetDomain}`;
        androidIntents = [genericIntent];
    } else if (browser === 'vivaldi') {
        schemeUrl = `vivaldi://${targetDomain}`;
        androidIntents = [
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=com.vivaldi.browser;end;`,
            genericIntent
        ];
    } else if (browser === 'duckduckgo') {
        schemeUrl = `ddg://${targetDomain}`;
        androidIntents = [
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=com.duckduckgo.mobile.android;end;`,
            genericIntent
        ];
    } else if (browser === 'via') {
        schemeUrl = `intent://${targetDomain}#Intent;scheme=https;package=mark.via.gp;end;`;
        androidIntents = [
            `intent://${targetDomain}#Intent;scheme=https;action=android.intent.action.VIEW;package=mark.via.gp;end;`,
            genericIntent
        ];
    }

    let appOpened = false;

    function handleVisibilityChange() {
        if (document.visibilityState === 'hidden' || document.hidden) {
            appOpened = true;
        }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", () => { appOpened = true; });
    window.addEventListener("blur", () => { appOpened = true; });

    if (isAndroid && androidIntents.length > 0) {
        let currentIntentIndex = 0;
        
        function tryNextIntent() {
            if (appOpened || currentIntentIndex >= androidIntents.length) {
                document.removeEventListener("visibilitychange", handleVisibilityChange);
                return;
            }
            
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = androidIntents[currentIntentIndex];
            document.body.appendChild(iframe);
            
            setTimeout(() => {
                if (document.body.contains(iframe)) {
                    document.body.removeChild(iframe);
                }
                if (!appOpened) {
                    currentIntentIndex++;
                    tryNextIntent();
                }
            }, 800);
        }
        
        tryNextIntent();
        showToast("Redirecting to browser...");
        
    } else if (schemeUrl) {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = schemeUrl;
        document.body.appendChild(iframe);

        setTimeout(() => {
            if(document.body.contains(iframe)) document.body.removeChild(iframe);
            document.removeEventListener("visibilitychange", handleVisibilityChange);

            if (!appOpened) {
                if (isIOS) {
                    window.location.href = `x-safari-https://${targetDomain}`;
                } else {
                    window.location.href = `https://${targetDomain}`;
                }
            }
        }, 1000);
        
        if (!isAndroid && !isIOS) {
            showToast(`Opening ${browser.charAt(0).toUpperCase() + browser.slice(1)}...`);
        } else {
            showToast("Redirecting to browser...");
        }
    }
}

function copyWebsiteLink(btn) {
    const link = "https://moviedakhi.com";
    const textArea = document.createElement("textarea");
    textArea.value = link;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showToast("Link copied! Open your browser and paste it.");

        const originalHtml = `<i class="fas fa-copy"></i> Copy`;
        btn.innerHTML = `<i class="fas fa-check"></i> Copied`;
        btn.classList.remove('bg-[#E50914]', 'hover:bg-red-600');
        btn.classList.add('bg-green-600', 'hover:bg-green-500');

        setTimeout(() => {
            btn.innerHTML = originalHtml;
            btn.classList.add('bg-[#E50914]', 'hover:bg-red-600');
            btn.classList.remove('bg-green-600', 'hover:bg-green-500');
        }, 2000);
    } catch (err) {
        showToast("Failed to copy link. Please manually select the text.");
    }

    document.body.removeChild(textArea);
}