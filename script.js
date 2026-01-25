// --- 1. PRELOADER LOGIC ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    // Hide the loader after content is loaded (simulated delay for demo effect if fast)
    setTimeout(() => {
        preloader.classList.add('hidden-loader');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 500); // 500ms delay to let user see animation

    // --- POPUP LOGIC: Trigger after 4 seconds ---
    setTimeout(() => {
        // Check session storage to show only once per session
        // To force show every time for testing, remove the if check
        if (!sessionStorage.getItem('welcomePopupShown')) {
            const welcomeModal = document.getElementById('welcomeModal');
            if(welcomeModal) {
                welcomeModal.classList.remove('hidden');
                // Force a reflow before adding the active class for transition
                void welcomeModal.offsetWidth;
                welcomeModal.classList.add('active');
                
                // LOCK SCROLL
                document.body.classList.add('overflow-hidden');
                
                sessionStorage.setItem('welcomePopupShown', 'true');
            }
        }
    }, 4000);
});

function closeWelcomeModal() {
    const welcomeModal = document.getElementById('welcomeModal');
    if(welcomeModal) {
        welcomeModal.classList.remove('active');
        
        // UNLOCK SCROLL
        document.body.classList.remove('overflow-hidden');

        setTimeout(() => {
            welcomeModal.classList.add('hidden');
        }, 300); // Wait for transition
    }
}

// Welcome Modal Outside Click Logic
const welcomeModalElement = document.getElementById('welcomeModal');
if (welcomeModalElement) {
    welcomeModalElement.addEventListener('click', (e) => {
        if (e.target === welcomeModalElement) {
            closeWelcomeModal();
        }
    });
}

// --- 2. DATA (Updated: Using category="Recent Adds" directly) ---
const moviesData = [
    // =======================================================================
    // 1. RECENT ADDS / RECENT ADDS / RECENT ADDS / RECENT 
    // =======================================================================
    {
        title: "Kidnapped: Elizabeth Smart (2026)",
        embedUrl: "https://short.icu/Hnln0ef5g",
        posterUrl: "https://resizing.flixster.com/1z2LbUKBKXMBUCvfT3BJybyGGFI=/fit-in/705x460/v2/https://resizing.flixster.com/vHGrr3IiSF5LEIA2NQMAQZeIeaA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I1MmFjZmM3LWY2MDMtNDY2ZS05N2U3LTA0ODBkMjQyNGEyNy5qcGc=",
        genre: "Documentary, Crime",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Big Fake (2026)",
        embedUrl: "https://short.icu/HL8ZfgO_P",
        posterUrl: "https://resizing.flixster.com/M5DwJi-3GJnNpEl8GXtZ5SHhqzY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31965488_v_v10_aa.jpg",
        genre: "Drama, Mystery & Thriller",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Cheekatilo (2026)",
        embedUrl: "https://short.icu/ZHboSJf2I",
        posterUrl: "https://resizing.flixster.com/tDhcjnbtUNm8Z2lXxkdbik1EXTk=/fit-in/705x460/v2/https://resizing.flixster.com/bFeY3wFMjCGCZEVbIrU4ahnCSJI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU1YTEzOWRkLTRkZDYtNDYxNi05YzE2LTg0Mzk5ZTRkNGNkMC5qcGc=",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mowgli (2025)",
        embedUrl: "https://short.icu/Y_bNvZZW5",
        posterUrl: "https://resizing.flixster.com/yC2Egz64J0aJvJIajke4rINVqhU=/fit-in/705x460/v2/https://resizing.flixster.com/JAZpQ8EJTQ561i3G-wec6h54Rk4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlhYTQ1OTg1LTA3NDYtNGRmNS05MmMzLWU0NjljMWY3ZWQ3YS5qcGc=",
        genre: "Action, Adventure, Drama, Romance",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Safia Safdar (2026)",
        embedUrl: "https://short.icu/YlW5PP3Jt",
        posterUrl: "https://movieassetsdigital.sgp1.cdn.digitaloceanspaces.com/original/32b909131b16ad5572f94b5b411d99552f240422",
        genre: "drama. Mystery, Thriller",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Parasakthi (2026)",
        embedUrl: "https://short.icu/S1YAfzbIl",
        posterUrl: "https://resizing.flixster.com/hB-AdQlS2_19kISOZa6QGu15t0o=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p32066236_p_v13_aa.jpg",
        genre: "Drama",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Retta Thala (2025)",
        embedUrl: "https://short.icu/jGJfl3o_9",
        posterUrl: "https://resizing.flixster.com/z6A7KdmbhwGIASHSYn6SADh1Seo=/fit-in/705x460/v2/https://resizing.flixster.com/rg3RXUaL_8DA75fJvTkX_vbQZxM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZjMTg4OTY4LThmYjctNDE3OS1iY2JiLWQ0MGY1NjIyMDY4YS5qcGc=",
        genre: "Action, Mystery & Thriller",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "45 (2026)",
        embedUrl: "https://short.icu/SiN3C3cBt",
        posterUrl: "https://resizing.flixster.com/BqHqvQPvS3GZmbQmGbZtECwjrag=/fit-in/705x460/v2/https://resizing.flixster.com/eSPywC9v_ANVF68NgiJMIuRohZc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzkwZDliNDg4LWYxM2QtNDc5ZC1hN2EwLTk1NjkxZDcyOThiZC5qcGc=",
        genre: "Action, Drama, Comedy",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Rip (2026)",
        embedUrl: "https://short.icu/YZzYkXfWG",
        posterUrl: "https://resizing.flixster.com/ucV5aDwnfhDPtMmXlov8cFOzP9w=/fit-in/705x460/v2/https://resizing.flixster.com/RMXC9aHsZxWf--hK5hh-Xbc9YkI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlmY2IxNDc3LTNiNTMtNDZjOS1iZjExLTU5Mjk1MmE4ZjQxMC53ZWJw",
        genre: "Crime, Drama, Action",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "28 Years Later: The Bone Temple (2026)",
        embedUrl: "https://short.icu/Lbwva2Yn2",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNGJhYmRjYmUtOGY5My00ODIyLTlhNjctMzk0NjYyOGE1MGIwXkEyXkFqcGc@._V1_.jpg",
        genre: "Horror",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Rahu Ketu (2026)",
        embedUrl: "https://short.icu/OAklOO3E9",
        posterUrl: "https://resizing.flixster.com/Arp_OTPmU_ZrUzgAQH5Fcxe3oSY=/fit-in/705x460/v2/https://resizing.flixster.com/hvPcmkCCQkxlH9i3kkINs3E_nrw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA4YzRhYjUwLWNkNGQtNGZjZi1hNDBlLTMzYzc2MGY0MmExMC5qcGc=",
        genre: "Comedy, Drama",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Taskaree: The Smuggler's Web (2026)",
        embedUrl: "https://short.icu/dfWzLix8c",
        posterUrl: "https://resizing.flixster.com/Q2gvXUlUqd-jljT_JFDF3cdvVBs=/fit-in/705x460/v2/https://resizing.flixster.com/_g1s57Z8DKPoPWmvNEeXOtLFLTM=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZjhhYzJhZDctOWY3Ni00MTkxLTgzODctYjBlNjFhZDYzMWE3LmpwZw==",
        genre: "Crime, Mystery & Thriller",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=OUN4bWkvRFFXeDIwQjFSb3RLK1dBRDBFRXZ0WnBHZW9lSmZZbzBsRk44bFJ3em5ReGlTYzF1NmhNdENXTUcrQ2NjS1hFUmNLN3kzUEdqdXppcGxzLzNCNyt0Q2RRSzUwUi9WdjlIUmJsMzA9",
        seriesInfo: "Season 1, Episode All"
    },
    {
        title: "Happy Patel: Khatarnak Jasoos (2026)",
        embedUrl: "https://short.icu/WNW3JQBg9",
        posterUrl: "https://resizing.flixster.com/bLX9zRd-1t464hNTmvED03u2ekM=/fit-in/705x460/v2/https://resizing.flixster.com/DVR0zq7Rk43S3k9Ug4sOFFjt1uQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZmMTE4MzNlLTcyYjctNDU4Ni05NmEwLWZhMTk3ODczNTFjZi5qcGc=",
        genre: "Action, Comedy, Crime",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "One Two Cha Cha Chaa (2026)",
        embedUrl: "https://short.icu/4sj9SP9g0",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZDkwYTI5ZjEtZjU3Mi00OGQ2LWE3NGUtYzRhMjVmZjNiMzYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Drama, Comedy",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Laalo: Krishna Sada Sahaayate (2025)",
        embedUrl: "https://short.icu/ceOQlWI4l",
        posterUrl: "https://resizing.flixster.com/GiGgELx2QMeYag3klrzZ4tsWif8=/fit-in/705x460/v2/https://resizing.flixster.com/9iK1j4NiYGRYHBlUROPMNVgHrZU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YzN2UyMDkxLTI1MDItNDYxMC1hMTJiLTg2NTYxNzk0Zjc4YS5qcGc=",
        genre: "Drama, Thriller, Survival",
        category: "Recent Adds",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    // =======================================================================
    // 1. BOLLYWOOD / BOLLYWOOD / BOLLYWOOD/ BOLLYWOOD /
    // =======================================================================
    {
        title: "Border 2 (2026)",
        embedUrl: "https://short.icu/So7nLeWjB",
        posterUrl: "https://resizing.flixster.com/oWf0ZvZGFcCbkPZPdZqAALR1JoQ=/fit-in/705x460/v2/https://resizing.flixster.com/K_C20zw6Ydg0jbTf_9HdQoiDi6M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZhYTJkZDg4LTYzMjgtNDg5MC1iN2YwLTNhZWQ0YTU3OGJlMS5qcGc=",
        genre: "War, History, Drama, Action",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Safia Safdar (2026)",
        embedUrl: "https://short.icu/YlW5PP3Jt",
        posterUrl: "https://movieassetsdigital.sgp1.cdn.digitaloceanspaces.com/original/32b909131b16ad5572f94b5b411d99552f240422",
        genre: "drama. Mystery, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bihu attack (2026)",
        embedUrl: "https://short.icu/k2sKGNeLj",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTgzMjMwMWYtMzUzMC00ZWQ1LWE1YmYtYjRjYTMzMTY0YTk5XkEyXkFqcGc@._V1_.jpg",
        genre: "Action, War",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Rahu Ketu (2026)",
        embedUrl: "https://short.icu/OAklOO3E9",
        posterUrl: "https://resizing.flixster.com/Arp_OTPmU_ZrUzgAQH5Fcxe3oSY=/fit-in/705x460/v2/https://resizing.flixster.com/hvPcmkCCQkxlH9i3kkINs3E_nrw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA4YzRhYjUwLWNkNGQtNGZjZi1hNDBlLTMzYzc2MGY0MmExMC5qcGc=",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Happy Patel: Khatarnak Jasoos (2026)",
        embedUrl: "https://short.icu/WNW3JQBg9",
        posterUrl: "https://resizing.flixster.com/bLX9zRd-1t464hNTmvED03u2ekM=/fit-in/705x460/v2/https://resizing.flixster.com/DVR0zq7Rk43S3k9Ug4sOFFjt1uQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZmMTE4MzNlLTcyYjctNDU4Ni05NmEwLWZhMTk3ODczNTFjZi5qcGc=",
        genre: "Action, Comedy, Crime",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "One Two Cha Cha Chaa (2026)",
        embedUrl: "https://short.icu/4sj9SP9g0",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZDkwYTI5ZjEtZjU3Mi00OGQ2LWE3NGUtYzRhMjVmZjNiMzYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Drama, Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jugnuma The Fable (2025)",
        embedUrl: "https://short.icu/dCD__X2n3",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYzdkY2NiZGItYzBiZS00NGZmLWEzY2QtYmFmZTdlMmUwY2QwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Drama, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Honeymoon Se Hatya (2026)",
        embedUrl: "https://short.icu/jc3fHi7ZF",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNzFmOGIxZGUtMTg4NS00YTAwLWI1MDQtN2YwMTkyZDA2ZWIxXkEyXkFqcGc@._V1_QL75_UX190_CR0,28,190,281_.jpg",
        genre: "Crime, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Nikita Roy (2025)",
        embedUrl: "https://short.icu/keucnyZfW",
        posterUrl: "https://resizing.flixster.com/9YDzKnU2ccQE512Fa6thL1EaCU8=/fit-in/705x460/v2/https://resizing.flixster.com/Ca1qJZiX05tlsOj-3KfMYbZm6yI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVjZjQzNjQ2LTVhNjMtNDExMi1hMDQ5LThlNGViY2JjYzhjOS5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Inspector Zende (2025)",
        embedUrl: "https://short.icu/5sLX6LKQX",
        posterUrl: "https://resizing.flixster.com/9Pqs7Rl5qzcZgWdmSHmhPPO4cRU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30953561_p_v10_aa.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dhurandhar (2025)",
        embedUrl: "https://short.icu/SnhUlQbxx9",
        posterUrl: "https://resizing.flixster.com/e9BwbefXTLrSGZl_SyKa5WEYtq4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30946914_p_v8_aa.jpg",
        genre: "Action, Adventure, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Homebound (2025)",
        embedUrl: "https://short.icu/xvAdHhax9",
        posterUrl: "https://resizing.flixster.com/uym-0g8pY-iRyRgx2ailRuRgCwI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30136875_p_v8_ab.jpg",
        genre: "Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ek Chatur Naar (2025)",
        embedUrl: "https://short.icu/MqPbuFrRY",
        posterUrl: "https://resizing.flixster.com/xxtbR0Fahjj01k_BKm0R7mhUcUA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31141714_p_v8_aa.jpg",
        genre: "Comedy, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "De De Pyaar De 2 (2025)",
        embedUrl: "https://short.icu/RliG6PS_p-",
        posterUrl: "https://resizing.flixster.com/qVwSNXQgLKAA3Bj76Pufdm7Sb38=/fit-in/705x460/v2/https://resizing.flixster.com/wad59luQ0LjESTXwxw51gJ7_EKo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNjYTZkMTk2LTA0MGUtNDIyYy1iZjg3LWQ5MjgyYjg5MDYyYi5qcGc=",
        genre: "Romance, Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jassi Weds Jassi (2025)",
        embedUrl: "https://short.icu/SxgNgGEX-",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Jassi_Weds_Jassi.jpeg/250px-Jassi_Weds_Jassi.jpeg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Heer Express (2025)",
        embedUrl: "https://short.icu/9oQWL38MI",
        posterUrl: "https://resizing.flixster.com/d-j_0zTUhHk6wJpdc-NCr4LNoQw=/fit-in/705x460/v2/https://resizing.flixster.com/s8mHRgPigXmeq2uuW7gPf59NF50=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M1YzNkYjViLTZlYzgtNDcxNy1hOWI1LWYyMGQ1YWQ3NThiYi5qcGc=",
        genre: "Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ikkis (2025)",
        embedUrl: "https://short.icu/TJV9X-QZ3",
        posterUrl: "https://resizing.flixster.com/L3C0ivLugq77ZlDuBLp7oUi0ftY=/fit-in/705x460/v2/https://resizing.flixster.com/4hZ1tcHd-dJlyXySrwhXS69bNFE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJlYWQxYjk2LWZjNTUtNDNhZC1iMDYyLTJkZDU1Yjk3Yzk0MS5qcGc=",
        genre: "Biography, War, History, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bhagwat Chapter One: Raakshas (2025)",
        embedUrl: "https://short.icu/-hyND4_lA",
        posterUrl: "https://resizing.flixster.com/x_8a9G-frD5OF_TTgmISwRg40R4=/fit-in/705x460/v2/https://resizing.flixster.com/z6_KRWHWDUU-1sGMds2oiU230iI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMwYjhmZTQyLTI3ZDgtNDhlNi04M2MwLWM3YzE1YWMwNmQxZS5qcGc=",
        genre: "Action, Crime, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Raat Akeli Hai: The Bansal Murders (2025)",
        embedUrl: "https://short.icu/YPAOD_hPy",
        posterUrl: "https://resizing.flixster.com/xKaJZ1l4v_GTRfK4sVvk99tQD9I=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31948487_v_v10_aa.jpg",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Saali Mohabbat (2025)",
        embedUrl: "https://short.icu/onXAQD32n",
        posterUrl: "https://resizing.flixster.com/sIAQYLvw6n2TdQbrobh5VvecdcI=/fit-in/705x460/v2/https://resizing.flixster.com/ZwGPypCl4qxjIKb3QHzEKvmHXHQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NkMDYwYmY4LTBmMDYtNDU0Mi04NGU5LWFiOTEzY2ZlNDBjNy5qcGc=",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pihu (2018)",
        embedUrl: "https://short.icu/i9v9g7kzS",
        posterUrl: "https://resizing.flixster.com/zIZSqCrudcf1RqXdUxUVK7y2Rtc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17055853_v_v8_aa.jpg",
        genre: "Drama, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Blood Money (2012)",
        embedUrl: "https://short.icu/wiwA8SQiQ",
        posterUrl: "https://resizing.flixster.com/fAerQFxGuf_Vy4lx_bXd1y26YOU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9209351_p_v10_aa.jpg",
        genre: "Action, Drama, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Tanhaji: The Unsung Warrior (2020)",
        embedUrl: "https://short.icu/bz--yFUZB",
        posterUrl: "https://resizing.flixster.com/zqbzE1WqdcrJRA-Uj_T5Fky0vOs=/fit-in/705x460/v2/https://resizing.flixster.com/bvaSs0rQ0JAhECaf4DCAIjeMfrc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZkYzQxNWMzLWE5NGYtNGY3ZC04MzIwLWE5N2ZlZmI4ZjQ3Ni53ZWJw",
        genre: "Action, History, Drama, Biography",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Khel Khel Mein (2024)",
        embedUrl: "https://short.icu/8Y95GR0_g",
        posterUrl: "https://resizing.flixster.com/bLlyVUQCzXRXUK4TbjEtHKoTH4s=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27936608_p_v8_aa.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Chehre (2021)",
        embedUrl: "https://short.icu/vAfMD_0Ey",
        posterUrl: "https://resizing.flixster.com/sOqzV2xa99z293gRrcIXseU8Svs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20518514_p_v8_aa.jpg",
        genre: "Mystery & Thriller, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kaabil (2017)",
        embedUrl: "https://short.icu/BWVO2GAHz",
        posterUrl: "https://resizing.flixster.com/EG25ChBj6UAoE-RFQyPnY1s_b9g=/fit-in/705x460/v2/https://resizing.flixster.com/gsweyS83-EVdI--Bz95G2IAEVAc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MzY2ZiMDAwLTYxNTUtNGVlNS1iYjAzLTNjM2IxY2YyY2M1OS53ZWJw",
        genre: "Action, Drama, Romance, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kahaani (2012)",
        embedUrl: "https://short.icu/2RmMnm5QX",
        posterUrl: "https://resizing.flixster.com/8n_XO-B-RTIEBRlTktr2aXC1BNY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9124174_p_v8_aa.jpg",
        genre: " Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kahaani 2: Durga Rani Singh (2016)",
        embedUrl: "https://short.icu/llPfB4To-",
        posterUrl: "https://resizing.flixster.com/vWbNYTA9c8rkBcT3zl5tgNFLYgY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13554503_p_v8_aa.jpg",
        genre: " Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mardaani (2014)",
        embedUrl: "https://short.icu/6glzIVZ99",
        posterUrl: "https://resizing.flixster.com/3JNmR0LMRFNss_4PHm1l0QKIz-A=/fit-in/705x460/v2/https://resizing.flixster.com/CjYYW7YgICHAl_Fu2ewWqRU_aeU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBhNTkxNzQ2LTBmOTktNDU0YS1iN2I4LWZmZWY0YjQ3ZWQ4OC53ZWJw",
        genre: "Action, Mystery & Thriller, Crime, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mardaani 2 (2019)",
        embedUrl: "https://short.icu/WeznVSLa3",
        posterUrl: "https://resizing.flixster.com/kjJHETOIzMDJxInWuGgzUxCog8k=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17456460_v_v8_aa.jpg",
        genre: "Action, Mystery & Thriller, Crime, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Thamma (2025)",
        embedUrl: "https://short.icu/N5--Hm5o6",
        posterUrl: "https://resizing.flixster.com/bQ1o4xY_6v4jeDznUhtllyagbCA=/fit-in/705x460/v2/https://resizing.flixster.com/VPTlxhzmIrSLqcudRvrP7BIPpNg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I5NTkxNWU3LWFjM2YtNDQzYi05OGZmLWM0ZThhNmJkY2ExMC5qcGc=",
        genre: "Horror, Comedy, Fantasy, Mystery, Thriller, Romance",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Chhichhore (2019)",
        embedUrl: "https://short.icu/yXuY2OfHg",
        posterUrl: "https://resizing.flixster.com/chsOamdtlGeuJ8LtRO0-jLPUHs4=/fit-in/705x460/v2/https://resizing.flixster.com/NwZOfQNz2l58k-pOh8--OMDTOQ0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2IzN2U1MmY5LTg1MDgtNDIzMi1hMDQyLTRiODYzYTcyNWVkNi53ZWJw",
        genre: "Comedy, Romance, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Crew (2024)",
        embedUrl: "https://short.icu/1mQLPSCGt",
        posterUrl: "https://resizing.flixster.com/Znodt0sFIozpZNt5NjZyj4XTRGk=/fit-in/705x460/v2/https://resizing.flixster.com/zea_xEMlxpIna4ZyNf3xLBvrEQE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNmZDEzMjlhLTE0ZTctNDlmMS1iYTM5LTFhNjNkZDI4Y2Q5Yi5qcGc=",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ek Deewane Ki Deewaniyat (2025)",
        embedUrl: "https://short.icu/Vx34t3nyn",
        posterUrl: "https://resizing.flixster.com/nukg3i_6Iv6rJVXwhrW7ahWAX1E=/fit-in/705x460/v2/https://resizing.flixster.com/ebQcXdW550txfTHyd5JZ9RRGgps=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JiZjI2NDU0LTk5YWItNDM5Yy1hNGNiLWY1NDU4ZjM4ZWFiOS5qcGc=",
        genre: "Romance",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Phobia (2016)",
        embedUrl: "https://short.icu/u1oDnGsNI",
        posterUrl: "https://resizing.flixster.com/yWqX2LbGEfsW06j-dmjZ0YDQ1ME=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14040115_v_v8_ab.jpg",
        genre: "Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Vicky Vidya Ka Woh Wala Video (2024)",
        embedUrl: "https://short.icu/4Dr8ty-88",
        posterUrl: "https://resizing.flixster.com/TGibnRe1TWGgwwMN5TQ41oml8Nk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28276749_v_v13_aa.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Single Salma (2025)",
        embedUrl: "https://short.icu/PJ2ECfPNWZ",
        posterUrl: "https://resizing.flixster.com/dC289I6Y5rCSvJ0bnNacgVk3Qxc=/fit-in/705x460/v2/https://resizing.flixster.com/6ymuSsUdey2BIlIcfJ6hvE5SzrA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg4NjQ3YTRlLTQ2MjAtNGFjOS04OTU3LWUxNGFhMzM2YmViMS5qcGc=",
        genre: "Comedy, Drama, Romance",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Soulmates (2025)",
        embedUrl: "https://short.icu/wvtTzyI9p",
        posterUrl: "https://resizing.flixster.com/9dSzzHo_emAft-zrMj5pmKBsQCU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31474208_v_v8_aa.jpg",
        genre: "Drama, Comedy, Romance",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Suspect X / Jaane Jaan (2023)",
        embedUrl: "https://short.icu/qXLmLYh_8",
        posterUrl: "https://resizing.flixster.com/PaJGX84UMNXMyQ7L5Okv2X4gLkQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25572648_v_v13_aa.jpg",
        genre: "Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Haseen Dillruba (2021)",
        embedUrl: "https://short.icu/gDRYEJ6pW",
        posterUrl: "https://resizing.flixster.com/SDzuo7gb4sbzav806y-kaI03TRY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20108754_p_v8_aa.jpg",
        genre: "Mystery & Thriller, Romance, Crime, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bhool Chuk Maaf (2025)",
        embedUrl: "https://short.icu/kF0JOTHK6",
        posterUrl: "https://resizing.flixster.com/EkWz0vFy1Kd4fM-POeuKCKbIWMU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30065568_p_v8_aa.jpg",
        genre: "Drama, Romance",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Atithi Bhooto Bhava (2022)",
        embedUrl: "https://short.icu/8ETUaP5O9",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMGNhYjg1YjktNDA0Zi00YjJiLWEwZjAtNjNkZmM2MTY0OTI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fateh (2025)",
        embedUrl: "https://short.icu/3MEJyX2e0",
        posterUrl: "https://resizing.flixster.com/lOvHVWvNqq_4HYhAJkrrZxa3Ew8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29185463_v_v8_aa.jpg",
        genre: "Action, Crime",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kill (2024)",
        embedUrl: "https://short.icu/6_vOOc0Kn",
        posterUrl: "https://resizing.flixster.com/fg_IIXyMjKsdmEUZVUCnhTuB-HU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25687818_p_v8_ab.jpg",
        genre: "Action, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ittefaq (2017)",
        embedUrl: "https://short.icu/nS6huCQf-",
        posterUrl: "https://resizing.flixster.com/vAd2CpxsQ8afrJ9lwn7SSPN9M9s=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14647581_p_v8_aa.jpg",
        genre: "Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jawan (2023)",
        embedUrl: "https://short.icu/vJPmHNj7n",
        posterUrl: "https://resizing.flixster.com/CHqLe9Boq_dYbKf8JY1Su5nOMfQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24533950_p_v8_ae.jpg",
        genre: "Action, Mystery, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pathaan (2023)",
        embedUrl: "https://short.icu/cqEo51hBXq",
        posterUrl: "https://resizing.flixster.com/A5lyxva4T2WYFfstHO_yXwS2Mlc=/fit-in/705x460/v2/https://resizing.flixster.com/HfX59D-pT_W5gaD2qIpSUg6Vsv4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk2OWZjOWU0LWY3MjctNDkzOS04YzZkLTFiMDAyNjMzMjVmMy5qcGc=",
        genre: "Action, Mystery, Thriller, Romance",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Stree 2 (2024)",
        embedUrl: "https://short.icu/T8AXOj7b9",
        posterUrl: "https://resizing.flixster.com/72t31B8680LrNe-2X7Cjng3ANYQ=/fit-in/705x460/v2/https://resizing.flixster.com/-BySAkdgRiMQsbCbwXyLluGPBXw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JhYzMxMDg0LTExZDUtNGVhNy05NjNjLTZkZDIxNzZkMjM5Mi5qcGc=",
        genre: "Comedy, Horror",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bhool Bhulaiyaa 2 (2022)",
        embedUrl: "https://short.icu/bBlbkoZoy",
        posterUrl: "https://resizing.flixster.com/YZCmOFmUq_KuEWg6_Ui-m48q_JU=/fit-in/705x460/v2/https://resizing.flixster.com/3wnUBlurrR5TY2pkmq2QhOxitPI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc1NDlkYjJlLWY1ZTAtNDhkMC05YmVlLWJjNjAzMjgwNDRjYS5qcGc=",
        genre: "Comedy, Horror",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Krrish (2006)",
        embedUrl: "https://short.icu/UU4PnpXEK",
        posterUrl: "https://resizing.flixster.com/AMEb2X62QdVOpo5iNmSLpqwFH_k=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162876_v_h10_ac.jpg",
        genre: "Adventure, Sci-Fi, Action",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Krrish 3 (2013)",
        embedUrl: "https://short.icu/oKV631Ahf",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Krrish_3_%282013_film%29_poster.jpg/250px-Krrish_3_%282013_film%29_poster.jpg",
        genre: "Adventure, Sci-Fi, Action",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sooryavanshi (2021)",
        embedUrl: "https://short.icu/-EclAF34s",
        posterUrl: "https://resizing.flixster.com/MfK3NL9w-YUF9OyyB7k1SVTWFKA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17650237_p_v8_ad.jpg",
        genre: "Drama, Action",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Badla (2019)",
        embedUrl: "https://short.icu/aKq51vfVT",
        posterUrl: "https://resizing.flixster.com/3HXemEtMXKGYVR0ji2y_MT6WR6Y=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16616150_p_v8_aa.jpg",
        genre: "Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kennedy (2023)",
        embedUrl: "https://short.icu/INrAJKEXT",
        posterUrl: "https://resizing.flixster.com/Q_ivcVDBGljpL4SYgepBTcMAORc=/fit-in/705x460/v2/https://resizing.flixster.com/tL80OY-xKfz1wuUhgI0OdzCQFPU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBhM2IzODZkLTc2MDItNDk5Ny1iODczLWQzMzI2YjExNmM2Mi5qcGc=",
        genre: "Action, Crime, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Apurva (2023)",
        embedUrl: "https://short.icu/wUXTww6v5",
        posterUrl: "https://resizing.flixster.com/SAiYCisRmweU-Xu0ZoS6sAvMs4M=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26268944_v_v8_aa.jpg",
        genre: "Drama, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ludo (2020)",
        embedUrl: "https://short.icu/7kmG6y08_",
        posterUrl: "https://resizing.flixster.com/9THYGIa5r_ROvVJAWWd92tLqFeQ=/fit-in/705x460/v2/https://resizing.flixster.com/orZuohKQ5aMFpKW69WA3VANRn_g=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA3MjJhNWM0LTY3NWYtNDY1MC04ZDdjLWFiYmM1NGJkNTAxYS5qcGc=",
        genre: "Drama, Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Tumbbad (2018)",
        embedUrl: "https://short.icu/qn9HaTlJc",
        posterUrl: "https://resizing.flixster.com/-aytHr7I07XALT_0YbGLm9NLC0M=/fit-in/705x460/v2/https://resizing.flixster.com/sRSFJMUFo-smCBzKriWQzJ8mT-g=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVkZGMyODk1LTJkNjktNGE4Yi04NDkyLWEzOGE5NTRlYWQwMy5qcGc=",
        genre: "Horror, Fantasy, Drama, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Chhaava (2025)",
        embedUrl: "https://short.icu/1u_wRh-dm",
        posterUrl: "https://resizing.flixster.com/IM6EMrgxu72ejFgS6E1ZxfJ5024=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29362791_p_v10_aa.jpg",
        genre: "Action, Drama, History",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bahut Hua Sammaan (2020)",
        embedUrl: "https://short.icu/MpWXDNy1a",
        posterUrl: "https://resizing.flixster.com/GmlQGjoZhk284phm-2tjRqWFgqk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20670011_v_v8_aa.jpg",
        genre: "Crime, Drama, Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "8x10 Tasveer (2009)",
        embedUrl: "https://short.icu/OOBR2s4G5",
        posterUrl: "https://resizing.flixster.com/ImYzKNDTai-de44WGU9JWbaeL5M=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3510020_v_v8_ab.jpg",
        genre: "Mystery & Thriller, Crime, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Satyaprem Ki Katha (2023)",
        embedUrl: "https://short.icu/f9b9sRwEa",
        posterUrl: "https://resizing.flixster.com/mgpd_2i91VWa6hdnV9bo35rYpJ4=/fit-in/705x460/v2/https://resizing.flixster.com/HGwMEOU55W4dcwUdYSZc3O4BaIg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU1OTBiZDVmLTRlNmYtNGJlYy04OGNkLTg2OTNiZTJiN2I3MC5qcGc=",
        genre: "Musical, Romance, Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Munjya (2024)",
        embedUrl: "https://short.icu/TP3tq4ovk",
        posterUrl: "https://resizing.flixster.com/xcVpuVw8UGQCX7Vdue-wjjjlQyw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27543903_p_v8_aa.jpg",
        genre: "Fantasy, Comedy, Horror",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dhoondte Reh Jaoge (2009)",
        embedUrl: "https://short.icu/W0maCYtea",
        posterUrl: "https://resizing.flixster.com/0LrMpk3rn_rPzSecpJjYcGuwCqU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186883_v_v8_aa.jpg",
        genre: "Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kanjoos Makhichoos (2023)",
        embedUrl: "https://short.icu/uZROmHgs_",
        posterUrl: "https://resizing.flixster.com/_sviwp2zY-OFhq36y0NizynWdhE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25250850_p_v7_aa.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Lootcase (2019)",
        embedUrl: "https://short.icu/zedNF2ChE",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/45/Lootcase_film_poster.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sunny Sanskari Ki Tulsi Kumari (2025)",
        embedUrl: "https://short.icu/zOU5e8KXn",
        posterUrl: "https://resizing.flixster.com/BYGURKboCXc8atvaazTe4Cl-mWU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31255503_p_v8_aa.jpg",
        genre: "Romance, Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Haq (2025)",
        embedUrl: "https://short.icu/qRBXEamgW",
        posterUrl: "https://resizing.flixster.com/7wF94CDV91UDCN8AVwy5KyTEED0=/fit-in/705x460/v2/https://resizing.flixster.com/StQNwUEzxCYcwPo8Lpfg4qMs2RI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2UyZTg1Zjg0LWE1MGYtNDk5ZS04OTc3LWQwMzE4ZTA2NjA5YS5qcGc=",
        genre: "Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Baramulla (2025)",
        embedUrl: "https://short.icu/Ro9qe4-hn",
        posterUrl: "https://resizing.flixster.com/liO76PeFwHmmOH1tkk3oGDtDWtY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31500527_p_v8_aa.jpg",
        genre: "Crime, Drama, Horror, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Rakkhosh (2019)",
        embedUrl: "https://short.icu/6OgNsXk2l",
        posterUrl: "https://resizing.flixster.com/cVRc6_YFHkmg8yS8WRk3-IQC-tw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17071615_v_v8_aa.jpg",
        genre: "Horror",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bank Chor (2017)",
        embedUrl: "https://short.icu/lgcKHV6GR",
        posterUrl: "https://resizing.flixster.com/5-1ACAbCq5U9itVoXZ-KA4HizPg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14477920_v_v8_aa.jpg",
        genre: "Comedy, Mystery & Thriller, Action",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Knock Out (2010)",
        embedUrl: "https://short.icu/vjz6Yi5fZ",
        posterUrl: "https://resizing.flixster.com/pqQGkPR6Mh6DVkq1CzeloQxyZ_0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8349098_p_v8_aa.jpg",
        genre: "Action, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kismet Love Paisa Dilli (2012)",
        embedUrl: "https://short.icu/NPVYaxl6a",
        posterUrl: "https://resizing.flixster.com/jX0h2hRk1lInKjmEH2OfMtp7JAs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9501374_p_v8_aa.jpg",
        genre: "Adventure, Comedy, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Gumraah (2023)",
        embedUrl: "https://short.icu/nMm6kZVzwh",
        posterUrl: "https://resizing.flixster.com/qfQwfzENy2-k9ZgI_VISPOwQEB0=/fit-in/705x460/v2/https://resizing.flixster.com/RfpQ7D7JTDbnP-AeS64F8b7BGWc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZkZWY0ZmM2LTE3ODgtNGY3NC04ZTY0LTVlM2JkOGFkMTZkYy5qcGc=",
        genre: "Action, Crime, Drama, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Flat 211 (2017)",
        embedUrl: "https://short.icu/xgtb6SGKL",
        posterUrl: "https://resizing.flixster.com/-wkKi5keSW840l3jEyeOAMlOENo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16967026_v_v13_aa.jpg",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Trapped (2017)",
        embedUrl: "https://short.icu/5NrQoeHS-",
        posterUrl: "https://resizing.flixster.com/i8NRBCPxRgCLRPVMnubQodkkI5E=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14525263_p_v8_aa.jpg",
        genre: "Drama, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Looop Lapeta (2022)",
        embedUrl: "https://short.icu/MqEcc8oZl",
        posterUrl: "https://resizing.flixster.com/NIFTzINJufFRIktXS1qo56IQUO0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21429073_v_v13_aa.jpg",
        genre: "Romance, Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Crazxy (2025)",
        embedUrl: "https://short.icu/CF-fVGVOf",
        posterUrl: "https://resizing.flixster.com/OoAif6raqOwIiJE52TzjCAFRF6k=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30056604_v_v9_aa.jpg",
        genre: "Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Maalik (2025)",
        embedUrl: "https://short.icu/tlIqlIBUi",
        posterUrl: "https://resizing.flixster.com/TGegDzveBNToAxNtRPUX0YS3biY=/fit-in/705x460/v2/https://resizing.flixster.com/ZbElBfGMgiXbJgdtdLudUEckCWA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFjNTQ4NWQ1LTdjNmItNGMzNS1iMTJhLWFmY2IzNGZkNGMyMi5wbmc=",
        genre: "Action, Mystery & Thriller, Crime, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Welcome Home (2020)",
        embedUrl: "https://short.icu/C9JFRAU5Z",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZTQ5YmM3ZWUtNTkxMS00M2U5LWIwN2ItNDM0OTIwNmRlN2FhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Crime, Suspense, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Madgaon Express (2024)",
        embedUrl: "https://short.icu/g505XNn-s",
        posterUrl: "https://resizing.flixster.com/Fy5Mbzezn0M8nt6bC6vnutY6O3I=/fit-in/705x460/v2/https://resizing.flixster.com/TqYPBtLWaw9EeNLRMi7JuqTaAbY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E3YTU5N2IyLTRlZDQtNDI4NS1iYWFhLWU2M2JkYmJmNmU5My5qcGc=",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Chup (2022)",
        embedUrl: "https://short.icu/HDXytcRM8",
        posterUrl: "https://resizing.flixster.com/MtEmxE4WFCU51jeuQ-jX9bXhpgg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23019886_v_v12_ab.jpg",
        genre: "Mystery & Thriller, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ugly (2013)",
        embedUrl: "https://short.icu/wSfiq58G2",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjY3MjU0MTItNjUzMi00MWRiLWI2ZTUtMTM3MjJlYmJhNmQ2XkEyXkFqcGc@._V1_.jpg",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Stolen (2023)",
        embedUrl: "https://short.icu/aYBr5wUq1",
        posterUrl: "https://resizing.flixster.com/Mv_n--FapBgoQ2MX58L6dBYy88w=/fit-in/705x460/v2/https://resizing.flixster.com/-Ux9sywyOGY-YLawikOtb7yb5SY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFjNDEzNWMwLTE2OWItNGU4MS1hMzMxLTlhMmQyNmQzYmQ5MS5qcGc=",
        genre: "Drama, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Singham Again (2024)",
        embedUrl: "https://short.icu/Fu72J_EAp",
        posterUrl: "https://resizing.flixster.com/Zm6Equoy0yPevlz0MCpRRY4qs2E=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28518900_v_v8_aa.jpg",
        genre: "Kids & Family, Action, Mystery & Thriller, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Maa (2025)",
        embedUrl: "https://short.icu/d_wWCQvoS",
        posterUrl: "https://resizing.flixster.com/lITI-adlAq2bgD_5Apj_D1JBA_I=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30424068_v_v8_aa.jpg",
        genre: "Horror",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sikandar (2025)",
        embedUrl: "https://short.icu/yq07VLGS_",
        posterUrl: "https://resizing.flixster.com/H2rdnNQsVu0O7fpz12oo4wcd-sY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29453667_v_v11_aa.jpg",
        genre: "Action, Drama, Mystery, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Baby John (2024)",
        embedUrl: "https://short.icu/WTbyXHOEE",
        posterUrl: "https://resizing.flixster.com/UyZEPWUBMlWtdSGGAv53LifakyM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28970017_v_v8_aa.jpg",
        genre: "Action, Mystery & Thriller, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh (2025)",
        embedUrl: "https://short.icu/UbT3JW8GU",
        posterUrl: "https://resizing.flixster.com/xhD7xOxrnesjAUSg9Nsu7CmWADs=/fit-in/705x460/v2/https://resizing.flixster.com/GoP90fToK8xc5LIFda3tH3LINSg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgwZDU3ZGNjLTc3NjEtNGQ3ZC1hYmQ0LTlmMGY2ZTVlMzI5ZC5qcGc=",
        genre: "History, Drama, Mystery, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Housefull 5 (2025)",
        embedUrl: "https://short.icu/LT_lMoAyK",
        posterUrl: "https://resizing.flixster.com/8tFWPxGS9RGc6LXrjo0RqW0Q5gs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30151687_k_v9_ab.jpg",
        genre: "Comedy, Mystery & Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mere Husband Ki Biwi (2025)",
        embedUrl: "https://short.icu/zlygHiWnN",
        posterUrl: "https://resizing.flixster.com/pq4YhOsoizBWKqI8VxQ7Y74omKk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29480542_p_v13_aa.jpg",
        genre: "Romance",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Raid (2018)",
        embedUrl: "https://short.icu/w4flSNIMs",
        posterUrl: "https://resizing.flixster.com/g6UqeODruk4LV6gk0rXCw2Qz9yA=/fit-in/705x460/v2/https://resizing.flixster.com/lr2rIlDghsvlLco88dbsw1PH2AU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgwMWUyZjhhLWI5ZDYtNDY1NS04YmEzLTRhODVjMjE2MmMyYi53ZWJw",
        genre: "Romance",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dangal (2016)",
        embedUrl: "https://short.icu/mE8oZPbgb",
        posterUrl: "https://resizing.flixster.com/NOC0WYNiMFaSHRHacWIi4jy42zs=/fit-in/705x460/v2/https://resizing.flixster.com/pgk7SHTEFR3NbWDlGMl4etn9rj4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVkNWFlYmQxLTkyYzktNGZiYi1iN2JiLTU1MGRlNTM4ZDc0My53ZWJw",
        genre: "Biography, Drama, Action",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Drishyam (2015)",
        embedUrl: "https://short.icu/MxwFkanQq",
        posterUrl: "https://resizing.flixster.com/4sC4YcejZENFIwx1_QxeRNl8Jec=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11992916_p_v8_ab.jpg",
        genre: "Mystery, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Drishyam 2 (2022)",
        embedUrl: "https://short.icu/G4nZE1Dm8",
        posterUrl: "https://resizing.flixster.com/D1x96ZiIBptu4zSs-3-v7MfpF-k=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23271406_v_v8_aa.jpg",
        genre: "Mystery, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Animal (2023)",
        embedUrl: "https://short.icu/xsKD28gTv",
        posterUrl: "https://resizing.flixster.com/khgrYLzUxfPWF2g6EYakw_sjdoM=/fit-in/705x460/v2/https://resizing.flixster.com/YKdWAkcU4WdKAb4uY9tPegxuVns=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgyYzY3MTg4LTViZDEtNDNjZS1iMDg0LTQ2ODA3YzI4YTk0ZC5qcGc=",
        genre: "Action, Mystery, Thriller, Crime, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sonu Ke Titu Ki Sweety (2018)",
        embedUrl: "https://short.icu/aKZOULwtP",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/77/Sonu_Ke_Titu_Ki_Sweety_-_Movie_Poster.jpg",
        genre: "Romance, Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jolly LLB 3 (2025)",
        embedUrl: "https://short.icu/0e1ufOM7F",
        posterUrl: "https://resizing.flixster.com/dPVFycdOD4b4nISFoEfq5iVwhjs=/fit-in/705x460/v2/https://resizing.flixster.com/Tnv_S4QO2auWsBWLEHCf6utfJHw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2QzN2RjYzNhLWQ3MTEtNGUzZi05ODVhLTY3NGM5M2YwNzQ4Yy5qcGc=",
        genre: "Comedy, Drama, Mystery, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Tees Mar Khan (2010)",
        embedUrl: "https://short.icu/xo2nPSibd",
        posterUrl: "https://resizing.flixster.com/J2zTKfDbSy6Nd0GX3dHnt9KKWPc=/fit-in/705x460/v2/https://resizing.flixster.com/7utenCUDhk0NsFPEuvXnaeWLq7A=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I5MWY2MGQzLTMxNTUtNDFiOC05MzI4LTcxYzgyYWVjMjFlZS53ZWJw",
        genre: "Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Stree (2018)",
        embedUrl: "https://short.icu/9euGhAwQ0",
        posterUrl: "https://resizing.flixster.com/laiSCNDE3mRWevZnR0Y75sucRfE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15884362_v_v8_ab.jpg",
        genre: "Comedy, Horror",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Adipurush (2023)",
        embedUrl: "https://short.icu/oOQVyAli_",
        posterUrl: "https://resizing.flixster.com/6d4x4dTYsXJTkRRTLaBjSSYbVP4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24425102_v_v8_aa.jpg",
        genre: "Action, Adventure, Fantasy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "12th Fail (2023)",
        embedUrl: "https://short.icu/IwwBM33Eb",
        posterUrl: "https://resizing.flixster.com/kbhVmYDlHH2kLBklnGSjnIbO6NM=/fit-in/705x460/v2/https://resizing.flixster.com/J5YuJPY7tf0w_88V6dgX0Y0lRsg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVkYWM0NmJhLTkwODktNGJkMi05MzM5LWYyMTQwOGVlZTE3OS5qcGc=",
        genre: "Biography, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jolly LLB 2 (2017)",
        embedUrl: "https://short.icu/Mqf159riR",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Jolly_LLB_2_first_look.jpg/250px-Jolly_LLB_2_first_look.jpg",
        genre: "Suspense, Drama, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jolly LLB (2013)",
        embedUrl: "https://short.icu/mAnFjqVuX",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/b1/Jolly_LLB_First_Look.jpg",
        genre: "Suspense, Drama, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bodyguard (2011)",
        embedUrl: "https://short.icu/nvlvgZWyW",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Bodyguard_poster.jpg/250px-Bodyguard_poster.jpg",
        genre: "Action, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Zindaji Na Milegi Dobara (2011)",
        embedUrl: "https://short.icu/kGcmqNYdY",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BOGIzYzg5NzItNDRkYS00NmIzLTk3NzQtZWYwY2VlZDhiYWQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Drama, Romance, Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pati Patni Aur Woh (2019)",
        embedUrl: "https://short.icu/8xH-_tI0e",
        posterUrl: "https://resizing.flixster.com/DpPBRmzrbfMVhbawGPSsFACwwAI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17661756_v_v8_aa.jpg",
        genre: "Romance, Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Laapataa Ladies (2023)",
        embedUrl: "https://short.icu/s4JQ9Xu1q",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Laapataa_Ladies_poster.jpg/250px-Laapataa_Ladies_poster.jpg",
        genre: "Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Saiyaara (2025)",
        embedUrl: "https://short.icu/Caoes6cCb",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Saiyaara_film_poster.jpg/250px-Saiyaara_film_poster.jpg",
        genre: "Romance, Emotional, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jaat (2025)",
        embedUrl: "https://short.icu/GmJHTVFvV",
        posterUrl: "https://resizing.flixster.com/1sDRWiQsINwOTwJVCedaMa552W0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29861512_p_v8_aa.jpg",
        genre: "Action, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bhool Bhulaiyaa 3 (2024)",
        embedUrl: "https://short.icu/sIrh36maX",
        posterUrl: "https://resizing.flixster.com/LHP3d_sSsVB1jJU7_J7BrdZuNF4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28206483_v_v8_aa.jpg",
        genre: "Comedy, Horror",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Son of Sardaar 2 (2025)",
        embedUrl: "https://short.icu/Ina5GjqG_",
        posterUrl: "https://resizing.flixster.com/4hr71N5QvQ2MjW7fg96DeXhPNNk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30708270_v_v13_aa.jpg",
        genre: "Comedy,Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dhadak 2 (2025)",
        embedUrl: "https://short.icu/WYRy1_gGe",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Dhadak_2.jpg/250px-Dhadak_2.jpg",
        genre: "Romance,Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Made in China (2019)",
        embedUrl: "https://short.icu/U7uWdNMUz",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/3/3e/Made_In_China_poster.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Tiger 3 (2023)",
        embedUrl: "https://short.icu/P8hONAOt6",
        posterUrl: "https://resizing.flixster.com/7SVG23hP8ZGnGVUvBDFKcRXMOSQ=/fit-in/705x460/v2/https://resizing.flixster.com/EhnZhhnlXPpQk_tXymRE5RpssVs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VjMDc3ODZmLTUyOTEtNGE1NC04NzM5LTQyZGJkMjQxMWM1ZC5qcGc=",
        genre: "Action, Mystery, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Tiger Zinda Hai (2017)",
        embedUrl: "https://short.icu/zOB5i3gA2X",
        posterUrl: "https://resizing.flixster.com/_X8MZ4nJJeF0o0XP90RJgbb2k1Y=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14825610_v_v8_aa.jpg",
        genre: "Action, Adventure, Mystery, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kis Kisko Pyaar Karoon (2015)",
        embedUrl: "https://short.icu/Zd1gk5l41",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Kis_Kisko_Pyaar_Karoon_-_Poster.jpg/250px-Kis_Kisko_Pyaar_Karoon_-_Poster.jpg",
        genre: "Comedy,Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Baaghi 4 (2025)",
        embedUrl: "https://short.icu/mDXgTu9Ro",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Baaghi_4.jpg/250px-Baaghi_4.jpg",
        genre: "Action+Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hera Pheri (2000)",
        embedUrl: "https://short.icu/GApk0xhdW",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/a5/Hera_Pheri_2000_poster.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Phir Hera Pheri (2006)",
        embedUrl: "https://short.icu/bmruoTTLD",
        posterUrl: "https://resizing.flixster.com/24MMWPf4BWaNbPeFFncDCav3YC4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3491245_p_v8_ac.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jai Mummy Di (2020)",
        embedUrl: "https://short.icu/eu6RPKX4U",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Jai_Mummy_Di_poster.jpg/250px-Jai_Mummy_Di_poster.jpg",
        genre: "Comedy+Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Freddy (2022)",
        embedUrl: "https://short.icu/s--PPKFZA",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/c/cb/Freddy_Official_Poster.jpg",
        genre: "Suspense+Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fighter (2024)",
        embedUrl: "https://short.icu/bNxSqRDRT",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Fighter_film_teaser.jpg/250px-Fighter_film_teaser.jpg",
        genre: "Action+Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Golmaal Returns (2008)",
        embedUrl: "https://short.icu/MtEQvryRx",
        posterUrl: "https://resizing.flixster.com/9B5C_b26MvKXkBGFCTGckxFCxbw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p190560_v_v8_aa.jpg",
        genre: "Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Housefull 2 (2012)",
        embedUrl: "https://short.icu/6xkg7b2c4",
        posterUrl: "https://resizing.flixster.com/K4ogMLqm7gy8viA3QwoOTvXd7-c=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9133931_v_v8_aa.jpg",
        genre: "Romance, Comedy, Action",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jai Mummy Di (2020)",
        embedUrl: "https://short.icu/bfqFoGKr5",
        posterUrl: "https://resizing.flixster.com/CnntlNTdJ95GD7L3mv9BTgsnLYg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17838081_v_v8_aa.jpg",
        genre: "Romance, Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ek Tha Tiger (2012)",
        embedUrl: "https://short.icu/xLxrY_8FP",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Ek_Tha_Tiger_theatrical_poster.jpg/250px-Ek_Tha_Tiger_theatrical_poster.jpg",
        genre: "Action+Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Double Dhamaal (2011)",
        embedUrl: "https://short.icu/TL4AjKQxZ",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Double_dhamaal.jpg/250px-Double_dhamaal.jpg",
        genre: "Comedy+Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dhol (2007)",
        embedUrl: "https://short.icu/QPSde-xQV",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Dhol1.jpg/250px-Dhol1.jpg",
        genre: "Comedy+Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dhamaal (2007)",
        embedUrl: "https://short.icu/fMI-syh36",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Dhamaal_2007.jpg/250px-Dhamaal_2007.jpg",
        genre: "Comedy+Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "De Dana Dan (2009)",
        embedUrl: "https://short.icu/mF_6N2wzr8",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Dedanadan.jpg/250px-Dedanadan.jpg",
        genre: "Comedy+Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Chup Chup Ke (2006)",
        embedUrl: "https://short.icu/4eMnQQk61",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Chup_Chup_Ke_poster.jpg/250px-Chup_Chup_Ke_poster.jpg",
        genre: "Comedy+Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ujda Chaman (2019)",
        embedUrl: "https://short.icu/78O7Bn4xA",
        posterUrl: "https://resizing.flixster.com/r_UE_394f6NGwMkvlMoMM-dCFEI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17543151_p_v8_aa.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Brahmāstra: Part One – Shiva (2022)",
        embedUrl: "https://short.icu/iWnF1mqjt",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/ea/Brahmastra_Part_One_Shiva.jpg",
        genre: "Action++Sci-Fi+Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bholaa (2023)",
        embedUrl: "https://short.icu/jFVp67cR9",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Bholaa_film_poster.jpg/250px-Bholaa_film_poster.jpg",
        genre: "Action+Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bhagam Bhag (2006)",
        embedUrl: "https://short.icu/rd2VRtGVv",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/BhagamBhag.jpg/250px-BhagamBhag.jpg",
        genre: "Comedy+Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "One Two Three (2008)",
        embedUrl: "https://short.icu/Yj6_zSDRzY",
        posterUrl: "https://resizing.flixster.com/1kMXNr-cry4Qa7hs_p3EMq9hFNU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18646035_v_v8_aa.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bawaal (2023)",
        embedUrl: "https://short.icu/ic04MI80s",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Bawaal_Official_Poster.jpg/250px-Bawaal_Official_Poster.jpg",
        genre: "Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "War 2 (2025)",
        embedUrl: "https://short.icu/4BEnreUvE",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/War_2_official_poster.jpg/250px-War_2_official_poster.jpg",
        genre: "Action+Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bang Bang! (2014)",
        embedUrl: "https://short.icu/g6sAAtB6j",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Bang_Bang_%282014_Film%29.jpg/250px-Bang_Bang_%282014_Film%29.jpg",
        genre: "Action+Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "BALA (2019)",
        embedUrl: "https://short.icu/yisCJ3C8V",
        posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitMCGiCM0SgD47VsaNWyeJWxwXngfW6PiAIfgtHrVrBP5TTnlLnBwfniRz2ASa4QMjjt5&s=10",
        genre: "Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Andhadhun (2018)",
        embedUrl: "https://short.icu/dPPQHPinz",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/47/Andhadhun_poster.jpg",
        genre: "Suspense+Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Vash Level 2",
        embedUrl: "https://short.icu/VX4ttBk-w",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Official_Poster_of_Vash_Level_2.jpg/250px-Official_Poster_of_Vash_Level_2.jpg",
        genre: "Horror",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pyaar Ka Punchnama 2 (2015)",
        embedUrl: "https://strmup.cc/N2kZrAmfgeQ1p",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Pyaar-Ka-Punch.jpg/250px-Pyaar-Ka-Punch.jpg",
        genre: "Drama+Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pyaar Ka Punchnama (2011)",
        embedUrl: "https://strmup.cc/HI5XqpQiBufzZ",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Pyar_Ka_Punchnama.jpg",
        genre: "Drama+Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dunki (2023)",
        embedUrl: "https://strmup.cc/abZgN0uKBVS3o",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Dunki_poster.jpg/250px-Dunki_poster.jpg",
        genre: "Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Baaghi (2016)",
        embedUrl: "https://short.icu/r84F-AUcw",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/07/Baaghi_Hindi_film_poster.jpg",
        genre: "Action, Suspense, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Dirty Picture (2011)",
        embedUrl: "https://short.icu/inj41Sb5R",
        posterUrl: "https://resizing.flixster.com/PKVfceSNI_zPHdjoDGOSgn4-hS4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8965553_v_v8_ab.jpg",
        genre: "Drama, Musical, Adult",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Baaghi 3 (2020)",
        embedUrl: "https://short.icu/Cpt14rS_y",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Baaghi_3_Film_Poster.jpg/250px-Baaghi_3_Film_Poster.jpg",
        genre: "Action, Suspense, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Aankhon Ki Gustaakhiyan (2025)",
        embedUrl: "https://short.icu/rN8YiPBy0",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Aankhon_Ki_Gustaakhiyan.jpg/250px-Aankhon_Ki_Gustaakhiyan.jpg",
        genre: "Romance, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Baaghi 2 (2018)",
        embedUrl: "https://short.icu/lQWTqIjii",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Baaghi_2_Official_Poster.jpg/250px-Baaghi_2_Official_Poster.jpg",
        genre: "Action, Suspense, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Main Prem Ki Diwani Hoon (2003)",
        embedUrl: "https://short.icu/Ibs5Owm_9",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/70/Main_Prem_Ki_Diwani_Hoon_Film_Poster.jpg",
        genre: "Romance, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Singh Is King (2008)",
        embedUrl: "https://short.icu/bkeEbsYe0",
        posterUrl: "https://resizing.flixster.com/sbi_DXq2QiEHsMTnoLC5mUlXSIg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p183661_k_v8_aa.jpg",
        genre: "Action, Comedy, Romance, Crime, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "3 Idiots (2009)",
        embedUrl: "https://short.icu/BmLZZ-DMn",
        posterUrl: "https://resizing.flixster.com/BHLgpifi6wLUjJz2U7WekoRcC7U=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7951929_v_h8_ae.jpg",
        genre: "Comedy",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Welcome (2007)",
        embedUrl: "https://short.icu/CUs16szyU",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/f/f4/Welcome_poster_2007.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bhool Bhulaiyaa (2007)",
        embedUrl: "https://short.icu/pxspiRXxf",
        posterUrl: "https://resizing.flixster.com/YgRxxRoFxd-hOEs9vYG-iBK3pHM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p173317_p_v8_ab.jpg",
        genre: "Comedy, Horror, Mystery, Thriller",
        category: "Bollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    // =======================================================================
    // 1. HOLLYWOOD / HOLLYWOOD / HOLLYWOOD/ HOLLYWOOD /
    // =======================================================================
    {
        title: "Kidnapped: Elizabeth Smart (2026)",
        embedUrl: "https://short.icu/Hnln0ef5g",
        posterUrl: "https://resizing.flixster.com/1z2LbUKBKXMBUCvfT3BJybyGGFI=/fit-in/705x460/v2/https://resizing.flixster.com/vHGrr3IiSF5LEIA2NQMAQZeIeaA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I1MmFjZmM3LWY2MDMtNDY2ZS05N2U3LTA0ODBkMjQyNGEyNy5qcGc=",
        genre: "Documentary, Crime",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Big Fake (2026)",
        embedUrl: "https://short.icu/HL8ZfgO_P",
        posterUrl: "https://resizing.flixster.com/M5DwJi-3GJnNpEl8GXtZ5SHhqzY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31965488_v_v10_aa.jpg",
        genre: "Drama, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Beyond Skyline (2017)",
        embedUrl: "https://short.icu/7ldsLyGDI",
        posterUrl: "https://resizing.flixster.com/I4upzRIxP72RCm_fj96uzoPkT5Q=/fit-in/705x460/v2/https://resizing.flixster.com/1BVBq9DdaJq45zfdNJBqSkzhPqo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJjYTg0NmEwLWUxNDEtNGFmZi1iMDZmLWM0Mzk5MzdiMzYyNy53ZWJw",
        genre: "Sci-Fi, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Rip (2026)",
        embedUrl: "https://short.icu/YZzYkXfWG",
        posterUrl: "https://resizing.flixster.com/ucV5aDwnfhDPtMmXlov8cFOzP9w=/fit-in/705x460/v2/https://resizing.flixster.com/RMXC9aHsZxWf--hK5hh-Xbc9YkI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlmY2IxNDc3LTNiNTMtNDZjOS1iZjExLTU5Mjk1MmE4ZjQxMC53ZWJw",
        genre: "Crime, Drama, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "28 Years Later: The Bone Temple (2026)",
        embedUrl: "https://short.icu/Lbwva2Yn2",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNGJhYmRjYmUtOGY5My00ODIyLTlhNjctMzk0NjYyOGE1MGIwXkEyXkFqcGc@._V1_.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Don't Knock Twice (2017)",
        embedUrl: "https://short.icu/TjJ3mVCIQ",
        posterUrl: "https://resizing.flixster.com/-Hizg2B9mOY0rmMgf_Or38to640=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13704393_p_v8_at.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Inside Man (2006)",
        embedUrl: "https://short.icu/IbQ8TQF_I",
        posterUrl: "https://resizing.flixster.com/jcLCHi8xPRmF0A2tyVxuIaRQtdE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159788_v_v8_bb.jpg",
        genre: "Mystery & Thriller, Crime, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ocean's Eleven (2001)",
        embedUrl: "https://short.icu/O2tIEviqd",
        posterUrl: "https://resizing.flixster.com/7tzXZyMTxUC8pgxsc71Fqa0RfsA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28801_p_v11_ab.jpg",
        genre: "Comedy, Drama, Crime",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Heist of the Century (2020)",
        embedUrl: "https://short.icu/iO1_lEMMO",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMGY3ODI1NWUtNjhiYi00NmQzLThiOGUtYTc0Yzc2ZjNmYjEzXkEyXkFqcGc@._V1_.jpg",
        genre: "Thriller, Mystery, Crime",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Menu (2022)",
        embedUrl: "https://short.icu/kQCwBWLrv",
        posterUrl: "https://resizing.flixster.com/zOKmnshG2KV3dfWZ1rOY5K5LXp0=/fit-in/705x460/v2/https://resizing.flixster.com/ThP55y9O__xdEFFCmmJ0pDy9FeI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FlZTkwYTAyLWNkNWYtNDA0ZS04N2FhLTE0NDUwZmM0ODdiOC5qcGc=",
        genre: "Horror, Mystery & Thriller, Comedy",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Focus (2025)",
        embedUrl: "https://short.icu/LCuEJHrGwQ",
        posterUrl: "https://resizing.flixster.com/t8dRL3wVeyCiKmv0miSNoaXZ-pQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10939169_v_v8_ay.jpg",
        genre: "Comedy, Drama, Mystery & Thriller, Romance",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Tusk (2014)",
        embedUrl: "https://short.icu/7LL8MAwSP",
        posterUrl: "https://resizing.flixster.com/32h8hzEsDr96BFO0fVK_EeCxqDw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10905368_p_v13_ai.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ghosted (2023)",
        embedUrl: "https://short.icu/qmhDAD3SY",
        posterUrl: "https://resizing.flixster.com/TFOAEsnBRZec1ElD-NvQWgcvQd4=/fit-in/705x460/v2/https://resizing.flixster.com/b-IiMmd59d7GxQeGfXt2_0GIaD0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg0ZTc3NWY1LTFmNWMtNGZkNi1hYjIwLWIzMjkyNDYwNDczNi5wbmc=",
        genre: "Action, Romance, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Red One (2024)",
        embedUrl: "https://short.icu/FE90TUSTB",
        posterUrl: "https://resizing.flixster.com/wfgzGJQUN4UY-DttWCoXtUZiuOE=/fit-in/705x460/v2/https://resizing.flixster.com/ukJO5gxsPMKM-M-_A1BB5IWhGHM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU2NjNhNGE3LTY3YjItNDdlYi05NmFjLTMxYTMwMTBiZjdhOS5qcGc=",
        genre: "Holiday, Action, Adventure, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Guns Akimbo (2019)",
        embedUrl: "https://short.icu/2FWVP3Mlo",
        posterUrl: "https://resizing.flixster.com/i2QUm0UL5tFD5E3ZAkTlCeTkcq4=/fit-in/705x460/v2/https://resizing.flixster.com/lmb8J6Uzv0GsFxQo-yi16WSaBHk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlhNGMxYzVjLTAwM2YtNDVjZC1hNzI2LTk0N2FkNTI5OTE5ZC53ZWJw",
        genre: "Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bullet Train (2022)",
        embedUrl: "https://short.icu/vhB41rVWS",
        posterUrl: "https://resizing.flixster.com/7QzlR00u-hYVS-mkJTrL4f9cBz8=/fit-in/705x460/v2/https://resizing.flixster.com/0Wuqfdlk2B3QUnrB7wPlQ7c47AI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI3OTIwZDU1LTEwNmQtNGYwZS1iNjhlLTIwNmU0MjdiYmY2MS5qcGc=",
        genre: "Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Rush Hour (1998)",
        embedUrl: "https://short.icu/sYk9ehcpM",
        posterUrl: "https://resizing.flixster.com/4EUz8jClLI06B2iGGbmGINVtDl8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21702_v_v8_ab.jpg",
        genre: "Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Rush Hour 2 (2001)",
        embedUrl: "https://short.icu/RBjKrUWNk",
        posterUrl: "https://resizing.flixster.com/eMh41yuhqYJ_01_N9DOuooEHhHk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28145_v_v8_af.jpg",
        genre: "Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Rush Hour 3 (2007)",
        embedUrl: "https://short.icu/AhSC560No",
        posterUrl: "https://resizing.flixster.com/CQjAcon_eDvwoSXmxF3FLcwtMQY=/fit-in/705x460/v2/https://resizing.flixster.com/S35NjDlKx2G8aYVqn5SfDghZwzk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzExZTU4ODE5LWIyYjYtNDllZi04MDdhLWY3YWM2NDlhYjJjOC53ZWJw",
        genre: "Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Winnie-the-Pooh: Blood and Honey (2023)",
        embedUrl: "https://short.icu/-k8iXqC7v",
        posterUrl: "https://resizing.flixster.com/snJL8MR9JB8DrOiS8vclcvd1H7U=/fit-in/705x460/v2/https://resizing.flixster.com/x38YTTwZhjxXX8A24ZNCekdc2bc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBiMTJlNDMwLTVjYmQtNDg4NS1hZGM3LTQ2MTMzNjZkM2VjMy5qcGc=",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Inside Job (2010)",
        embedUrl: "https://short.icu/-VB2Dm5To",
        posterUrl: "https://resizing.flixster.com/ZJ4_a7fleBCPeMEhAFUvlFZJ5_E=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8202241_p_v8_ae.jpg",
        genre: "Documentary",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Too Big to Fail (2011)",
        embedUrl: "https://short.icu/JIvOicorr",
        posterUrl: "https://resizing.flixster.com/xcnlOpYg795PWc9DXG5z4dCz6jI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8600086_p_v8_ab.jpg",
        genre: "Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Into the Wild (2007)",
        embedUrl: "https://short.icu/i-dpNkibo",
        posterUrl: "https://resizing.flixster.com/6fVgI7ta8LKtSIihmdG11Du4Xy8=/fit-in/705x460/v2/https://resizing.flixster.com/V1JdGJcpja4PTbusQ-Sk2hUVEyI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VmNDRjZTk2LTI3YjctNDY4Ny1iM2FmLTY5NmU0ZmIzYzMzNC5qcGc=",
        genre: "Biography, Drama, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ballerina (2025)",
        embedUrl: "https://short.icu/2Ht520XbJ",
        posterUrl: "https://resizing.flixster.com/Obx0xSa2MwznuG9CxsHEwegHq9Y=/fit-in/705x460/v2/https://resizing.flixster.com/LzOx5oXHCkEBotyKyTLCFq5mGnQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhiNWQ2MGU5LTUxMTEtNDc0Zi04ODg1LTkxZmMwZTYyNmNkMy5wbmc=",
        genre: "Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Internship (2026)",
        embedUrl: "https://short.icu/1zZp64R3y",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNDMyNzM2ZTUtOTBlZS00ZTExLTliZjYtZDkzYzQxOTQ3ZDUzXkEyXkFqcGc@._V1_.jpg",
        genre: "Action, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Us (2019)",
        embedUrl: "https://short.icu/qb-e2EKzF",
        posterUrl: "https://resizing.flixster.com/yTdkQ85hzgjlXWwWn-ygE3950H4=/fit-in/705x460/v2/https://resizing.flixster.com/s-5EbDRMyhekAVkvO4FgOnE2Ybc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MyZWMxMmM0LTdmOTMtNDU3OC05MThiLTk2OTU5YjFkZDhjZi53ZWJw",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Weapons (2025)",
        embedUrl: "https://short.icu/Be_a6nwyj",
        posterUrl: "https://resizing.flixster.com/urnEX1TNbxIyYQPcRuEISEPcCqM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30053254_v_v13_ah.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "One Last Adventure: The Making of Stranger Things 5 (2026)",
        embedUrl: "https://short.icu/pwMvswIvRX",
        posterUrl: "https://resizing.flixster.com/RySUwR7xtWFEWIVTTWle9T0yUKE=/fit-in/705x460/v2/https://resizing.flixster.com/Y9LuKKzz7gyGwXOiuHQ45yVzyHc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q0MTc5M2JlLTU3NDYtNDNhNS04NzI0LTI4YzAyZWRmNDVjOC5qcGc=",
        genre: "Documentary",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Greenland 2: Migration (2026)",
        embedUrl: "https://short.icu/dd0LN4Kqb",
        posterUrl: "https://resizing.flixster.com/Jcagxp8DzEFJ6TE1LiWFs0IvnJ8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31225913_v_v13_ae.jpg",
        genre: "Action, Adventure, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "It Feeds (2025)",
        embedUrl: "https://short.icu/6aIQ2Dvf0",
        posterUrl: "https://resizing.flixster.com/PSjIrHJ3qcO75wCCK67gLCGtow8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28237146_v_v9_ah.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Witchboard (2025)",
        embedUrl: "https://short.icu/mB4eNeJFX",
        posterUrl: "https://resizing.flixster.com/2cZ_-YQZ3seDZMIsbpsEP9JF0WU=/fit-in/705x460/v2/https://resizing.flixster.com/wKasgk5mnDiJs7k5rVTP2AyBiZE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyNzYxZGRiLTlmZjEtNGQyNy05ZTU1LTA4NjMxZDhjNzY2OS5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "57 Seconds (2023)",
        embedUrl: "https://short.icu/u8d6JoU-o",
        posterUrl: "https://resizing.flixster.com/qZ-yclOE-NERm5bRIsiLTDGsblU=/fit-in/705x460/v2/https://resizing.flixster.com/HD9ONO4LekridkDRzlpRyMvj4Qk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU0ZGQzZDY4LTExZjYtNDg4Yi1hNTBjLTcxYmRiZWNhNzIxMy5qcGc=",
        genre: "Action, Mystery & Thriller, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Argylle (2024)",
        embedUrl: "https://short.icu/x_EzK-adq",
        posterUrl: "https://resizing.flixster.com/rT7dFI8qwbIEA7GyDLcc2Nmn9K4=/fit-in/705x460/v2/https://resizing.flixster.com/sutljIrYjy_CppdngrSZTk1V4bI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RiZmY2NGJjLWI2NjEtNDkzNS04ODdmLTNhYmViNDUxOTY4Mi5qcGc=",
        genre: "Action, Adventure, Comedy, Drama, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "This Is 40 (2012)",
        embedUrl: "https://short.icu/kZb0CTVtn",
        posterUrl: "https://resizing.flixster.com/ISZoVOkwmN6-P1KdXRmfDo2fTV4=/fit-in/705x460/v2/https://resizing.flixster.com/0QSGvG-9AZaX1XYIPobkAdO0lXs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc4ZWJlNDE2LTExNDktNGNiMi05NGEzLWI3OTUwYWU3MzY4MS53ZWJw",
        genre: "Romance, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Human Centipede (2009)",
        embedUrl: "https://short.icu/feJMRG5cK",
        posterUrl: "https://resizing.flixster.com/znCXKZxU-Iabw0XxZVRhi3UsBCc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7915218_p_v8_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Five Nights at Freddy's 2 (2025)",
        embedUrl: "https://short.icu/FXIzk1o7f",
        posterUrl: "https://resizing.flixster.com/wNJUhdpdruTyKy-p9EQ1DPnXn8s=/fit-in/705x460/v2/https://resizing.flixster.com/yFQ1_2PES9kQgGXipTnpyiLho-c=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FjOTc0MWU4LWM2NzItNGEzZC05M2Y1LTM2OTM1ZDAwYTczZC5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Knowing (2009)",
        embedUrl: "https://short.icu/f-7_bX9ya",
        posterUrl: "https://resizing.flixster.com/VDk4jXJXqEV8Y7yMSvKHNbBIvDk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p182354_p_v10_ag.jpg",
        genre: "Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Bourne Supremacy (2004)",
        embedUrl: "https://short.icu/sQW89FDub9",
        posterUrl: "https://resizing.flixster.com/33vUzEylM5z-jDHN9co-E_svkA0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p34579_v_v8_at.jpg",
        genre: "Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Bourne Ultimatum (2007)",
        embedUrl: "https://short.icu/fXR9Xzq-g",
        posterUrl: "https://resizing.flixster.com/itEpKPXuTM4IkgAyNQYGFKy_cqg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p166270_p_v8_ai.jpg",
        genre: "Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jason Bourne (2016)",
        embedUrl: "https://short.icu/VJmm1m565",
        posterUrl: "https://resizing.flixster.com/VzGvR1r9a5DdHzKwXvFmi4N0-VM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12547089_p_v8_ap.jpg",
        genre: "Action, Mystery & Thriller, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Bourne Legacy (2012)",
        embedUrl: "https://short.icu/BheRQ9hbd",
        posterUrl: "https://resizing.flixster.com/Tr_Yy9MSZZkgSOEWPpO-CxEbF78=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9047834_v_v8_aw.jpg",
        genre: "Action, Mystery & Thriller, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Bourne Identity (2002)",
        embedUrl: "https://short.icu/L3c08FtIf",
        posterUrl: "https://resizing.flixster.com/F_K8qSf78IyGiHc7wwvH7qN964A=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28900_p_v8_ar.jpg",
        genre: "Action, Mystery & Thriller, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Prince of Persia: The Sands of Time (2010)",
        embedUrl: "https://short.icu/Q0QmAx4td",
        posterUrl: "https://resizing.flixster.com/JrjHrP9KMvcVu5_Rd8k_iLfj0q8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3546197_p_v8_av.jpg",
        genre: "Adventure, Action, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hercules (2014)",
        embedUrl: "https://short.icu/zrEMrm_K5",
        posterUrl: "https://resizing.flixster.com/srmjGx1PoHc5_hbmI9yG-KCit4U=/fit-in/705x460/v2/https://resizing.flixster.com/g9_221zPK8olgDM1BuXsOgVf2_4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI4MWJhNWUwLWU4MDUtNGEyNC1hNGMxLTIwYTJmYWQ5YjJiYS53ZWJw",
        genre: "Adventure, Action, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Snake Eyes: G.I. Joe Origins (2012)",
        embedUrl: "https://short.icu/gTUh0RJ_H",
        posterUrl: "https://resizing.flixster.com/K0qbaXtqgni_I_WWDtWe_u4ad_c=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18128210_p_v13_ai.jpg",
        genre: "Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "G.I. Joe: Retaliation (2013)",
        embedUrl: "https://short.icu/0l8VH6U14",
        posterUrl: "https://resizing.flixster.com/Mf3U0-F756x03J6dJDj8eM6cjdQ=/fit-in/705x460/v2/https://resizing.flixster.com/eR0w1084iisZonVTAflxuAehL7E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk3MzhkMzZjLWM1NjktNDc1YS1hMjlkLWUzYWEwNjAxZjg0ZC53ZWJw",
        genre: "Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ouija: Origin of Evil (2016)",
        embedUrl: "https://short.icu/KPW0A-iIL",
        posterUrl: "https://resizing.flixster.com/6j4UJrpEex-Wdb5ZxRbghKMCETM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12770833_v_v8_ab.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ouija (2014)",
        embedUrl: "https://short.icu/yKYp6Im_M",
        posterUrl: "https://resizing.flixster.com/6W6owEWR-HjvL2ZoXvqKIXbBC6U=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10542827_p_v10_ah.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Room (2019)",
        embedUrl: "https://short.icu/qyuG3EKqj",
        posterUrl: "https://resizing.flixster.com/yVh60VSJx4iF90AAtR6fOpR3MrE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17843676_p_v8_aa.jpg",
        genre: "Drama, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Wicked: For Good (2025)",
        embedUrl: "https://short.icu/ax9tkRA8e",
        posterUrl: "https://resizing.flixster.com/_oSRw-1UvL2FEnf6evaQFndUVEo=/fit-in/705x460/v2/https://resizing.flixster.com/1udyHgoIqT1-2LitoJfbaaumai0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFhYjBiNWVmLTk0NWUtNDE5Mi04ZTZiLWJiOTcxNmIyZWQxNC5qcGc=",
        genre: "Kids & Family, Musical, Fantasy, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Trap House (2025)",
        embedUrl: "https://short.icu/mpxC7pJxo",
        posterUrl: "https://resizing.flixster.com/aR34661qprjy4OIyUkFi1zw40uY=/fit-in/705x460/v2/https://resizing.flixster.com/myAGwTAMMid5sLVHOABU-rJtVqM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JkNzhiOGNmLTJjNGQtNGQxYi05OGZmLTE0MWFmMDhmOTRhNC5qcGc=",
        genre: "Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Not Without Hope (2025)",
        embedUrl: "https://short.icu/Vl1USs9ct",
        posterUrl: "https://resizing.flixster.com/MQI70G72e4_79pdq9NgNojQGq0E=/fit-in/705x460/v2/https://resizing.flixster.com/fTzgyHBSViCAcgr7Ft3KaO4OfQI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAxMTQ5NjFkLWI3N2EtNDkyMS1hZTAwLWNlOGQyMmIwYWM3YS5wbmc=",
        genre: "Mystery & Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "28 Years Later (2025)",
        embedUrl: "https://short.icu/azW8dZbyFN",
        posterUrl: "https://resizing.flixster.com/7gqZpjQLAr5aqtgt604N8kaOOUk=/fit-in/705x460/v2/https://resizing.flixster.com/iBImSX7-VRjcV7kyjqqSXlaes5M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc5YTYzMDk1LTZkODgtNDQ3Ny1hOTZjLWRjNzQwMTg0NWNmMC5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Together (2025)",
        embedUrl: "https://short.icu/M93KoAfFb",
        posterUrl: "https://resizing.flixster.com/ZIWbpfKroQ-1zY4QlY4s7ifc514=/fit-in/705x460/v2/https://resizing.flixster.com/GQy_kHowMZiyNLn87P-H-jgBCNo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RlMmE2YWFlLTg2ZmMtNGRjYy04MjAwLTEwMGY0YzVjYjA3MS5qcGc=",
        genre: "Horror, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Interstellar (2014)",
        embedUrl: "https://short.icu/sgo6OVTIuh",
        posterUrl: "https://resizing.flixster.com/hbGUo8QQYfHvpcnhIGhydp3yDUI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_v_v8_ab.jpg",
        genre: "Sci-Fi, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Lucy (2014)",
        embedUrl: "https://short.icu/jplhYPXRn",
        posterUrl: "https://resizing.flixster.com/x35kHz8UiPRWmZZnHiLxQ-2gXGk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10479310_p_v8_an.jpg",
        genre: "Action, Mystery & Thriller, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://speedostream1.com/d/0m1rhjlwtemr_h"
    },
    {
        title: "Frankenstein (2025)",
        embedUrl: "https://short.icu/q-cBNYUWo",
        posterUrl: "https://resizing.flixster.com/p0lv6m8uDb6a4KBrMMRAaUfsK20=/fit-in/705x460/v2/https://resizing.flixster.com/WRSM9xi8vtGwxGVD4AAx-8vTy-g=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M4ZDZhYmUzLWFhZGYtNDViMi05NTg4LTE2NTYyZTExYjdkNS5qcGc=",
        genre: "Horror, Drama, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://speedostream1.com/7k4nwx2k7z3c"
    },
    {
        title: "Dangerous Animals (2025)",
        embedUrl: "https://short.icu/01nsn9OXk",
        posterUrl: "https://resizing.flixster.com/V-t8GA2R6qgI-tERWIyeDFltVio=/fit-in/705x460/v2/https://resizing.flixster.com/4y7QSLtp9eYae-RTetv5chPgrVM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E1NDkzOGQwLWRmNDgtNGYzZC05ZTcwLTdhNWM3NzA0MjkxYS5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Prey (2022)",
        embedUrl: "https://short.icu/EPmqvf8Vc",
        posterUrl: "https://resizing.flixster.com/s2G_GKerQDkVPkQKUSkBe8scASM=/fit-in/705x460/v2/https://resizing.flixster.com/pbJEPbmzbJO7G6_fE7Sij-2rMuY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYzMjg3YWE5LTMxOGEtNDYyYi1hY2I2LTI1MGZhOGU1MzBkNi5qcGc=",
        genre: "Sci-Fi, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dune: Part Two (2024)",
        embedUrl: "https://short.icu/4Kc2GJSjm",
        posterUrl: "https://resizing.flixster.com/nXWIJUBV4l4cG-aL1Szpu9WrO4M=/fit-in/705x460/v2/https://resizing.flixster.com/PgHhmCKS3hR6GUsVNlC-vZ9d90I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZhOTA0OTIzLTEwNDctNDhkNS1iNTc3LTY3MjBmNDc5OGU1Mi5qcGc=",
        genre: "Sci-Fi, Adventure, Action, Fantasy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Army of Thieves (2021)",
        embedUrl: "https://short.icu/Ir6bwGYNY",
        posterUrl: "https://resizing.flixster.com/fOR-TkWNzjKBGLAyXb5UFDprGJE=/fit-in/705x460/v2/https://resizing.flixster.com/zVZ3DaUsMvf9YALIJphH8llzZ4M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgwNWRiYmY0LWUwMmUtNGU0MS05ZWZmLTBmZDYyNDQ5MmFlYy5qcGc=",
        genre: "Action, Crime, Drama, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Osiris (2025)",
        embedUrl: "https://short.icu/ip5Vc-vmr",
        posterUrl: "https://resizing.flixster.com/m7uUojxa3ACDKYXxFGomNozW9NU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30346357_v_v8_ad.jpg",
        genre: "Sci-Fi, Horror, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Interview (2014)",
        embedUrl: "https://short.icu/TpEiQyIJm",
        posterUrl: "https://resizing.flixster.com/Z6CMMDjTi7OQxZdjaCGVP61FLr4=/fit-in/705x460/v2/https://resizing.flixster.com/0PLDXQhksxs7UgSjqa27mVi7xAQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M1ZDYxMWNlLTZlNGEtNGVhMy1hNzQ5LWI2ZDA5ZDA4NzliMy53ZWJw",
        genre: "Comedy, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Materialists (2025)",
        embedUrl: "https://short.icu/ShGwWqvBg",
        posterUrl: "https://resizing.flixster.com/znF3ARQ7-4Pvrq7c8p-3e4ChDrg=/fit-in/705x460/v2/https://resizing.flixster.com/_y9lbKjJOvNchzCPYjJ5Ko02A9I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIxYTNiOGJmLTE5NGUtNDk1MS04ODI2LTZhMWY3ODhjNjJjYS5qcGc=",
        genre: "Romance, Comedy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Berlin Syndrome (2017)",
        embedUrl: "https://short.icu/uI02cmLm2",
        posterUrl: "https://resizing.flixster.com/1SqdlpGoW-6atPBz1YIUNUzymFs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/172549/172549_ab.jpg",
        genre: "Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Flight Risk (2025)",
        embedUrl: "https://short.icu/rrLQjNwli",
        posterUrl: "https://resizing.flixster.com/KwqLpPJ4RpeDzOT68fFvjaTYIhE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27741505_v_v13_ai.jpg",
        genre: "Mystery & Thriller, Action, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Evil Dead Rise (2023)",
        embedUrl: "https://short.icu/6olf4gSm9",
        posterUrl: "https://resizing.flixster.com/GnrlIssbI6U4kyWg7PiOwxPAM74=/fit-in/705x460/v2/https://resizing.flixster.com/rWoHzijYNZv7RJb5P7BQQoGOo80=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2YzliZDFjLWI2NTUtNDFmMi04OTUzLTUwNGFlOTRkOWIyNy5qcGc=",
        genre: "Horror, Mystery & Thriller, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Passengers (2016)",
        embedUrl: "https://short.icu/z3iJdK5o8",
        posterUrl: "https://resizing.flixster.com/AkTSZX2eDbjFWZ8NjD_TU0Mnyi8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12939834_v_v8_ak.jpg",
        genre: "Sci-Fi, Adventure, Mystery & Thriller, Romance",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Matrix (1999)",
        embedUrl: "https://short.icu/2bz5TsXsR",
        posterUrl: "https://resizing.flixster.com/Glno4DK6v7M9I5tiAu67kTCVsRk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22804_v_v7_ae.jpg",
        genre: "Sci-Fi, Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Matrix 2 Reloaded (2003)",
        embedUrl: "https://short.icu/TcsZBQU_B",
        posterUrl: "https://resizing.flixster.com/yN5lhSX7nqg0CKr915b_xaMZnAU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31912_p_v8_bb.jpg",
        genre: "Sci-Fi, Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Matrix Revolutions (2003)",
        embedUrl: "https://short.icu/mrYDg4Yah",
        posterUrl: "https://resizing.flixster.com/0vYM_tfGaCd2OIgHE8scVtASAf4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p33157_v_v8_ad.jpg",
        genre: "Sci-Fi, Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Matrix Resurrections (2021)",
        embedUrl: "https://short.icu/yAirLx8Er",
        posterUrl: "https://resizing.flixster.com/HCIWqNZc9xxQpzXhwattoxm1YxI=/fit-in/705x460/v2/https://resizing.flixster.com/azk7WCNkOsS1Yb2QOZ6nYBMaVZs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q4ZWE4ZTUwLTI5MTMtNDQ5Yi05M2Y5LTVlNWVlNjU5YWRmZC5qcGc=",
        genre: "Sci-Fi, Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "A Quiet Place (2018)",
        embedUrl: "https://short.icu/OXEL-UK9k",
        posterUrl: "https://resizing.flixster.com/TN2d40XHh7Gh7VbGXw58uL3TvZQ=/fit-in/705x460/v2/https://resizing.flixster.com/or3jxjzmcmu88rC-mcksfO642IU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNmYjhmOGMzLWU1YjctNGEyNS04OTJhLWY4YmIwMjNmZmFiMC53ZWJw",
        genre: "Horror, Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "A Quiet Place Part II (2021)",
        embedUrl: "https://short.icu/_xvk4IzjF",
        posterUrl: "https://resizing.flixster.com/sUBuHu--cmQDghS__ciqJQvqbr0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15923621_v_v12_bp.jpg",
        genre: "Horror, Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "A Quiet Place: Day One (2024)",
        embedUrl: "https://short.icu/RO3ZOF_6U",
        posterUrl: "https://resizing.flixster.com/VhHm8SWJnQ2LLsqNQI3rAkisz4c=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22100632_v_v12_ao.jpg",
        genre: "Horror, Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "21 Jump Street (2012)",
        embedUrl: "https://short.icu/JBlDSWD8r",
        posterUrl: "https://resizing.flixster.com/6BnoqhDK_xUMX_-zj76Fjh7JOjU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/111056/111056_aa.jpg",
        genre: "Comedy, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Xeno (2025)",
        embedUrl: "https://short.icu/Th2E9leaB",
        posterUrl: "https://resizing.flixster.com/Kfme6DyL6FYFLvOJ_pQfzvODZFc=/fit-in/705x460/v2/https://resizing.flixster.com/qwd_zJJp1zGML2T24idhB5jD_Ro=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdmZjUzMWQ3LTJhMTktNDMxZi1iMTI1LWM4ZWE4NDdhMzc4YS5qcGc=",
        genre: "Sci-Fi, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Honest Thief (2020)",
        embedUrl: "https://short.icu/cZaI0nEv5",
        posterUrl: "https://resizing.flixster.com/2JZqPBiL3Yuy1qw0-gMh5vkZYmU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17395468_v_v8_ac.jpg",
        genre: "Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Unbroken (2014)",
        embedUrl: "https://short.icu/thQ_4U0I7",
        posterUrl: "https://resizing.flixster.com/8n6rJDNv94g3JLEn98jHGmhZ4fA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10570028_v_v8_ap.jpg",
        genre: "Biography, History, Drama, War",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Greenland (2020)",
        embedUrl: "https://short.icu/WEZGTbA7in",
        posterUrl: "https://resizing.flixster.com/jVCq8Q6mPrONXIehX-5r_ElbsYQ=/fit-in/705x460/v2/https://resizing.flixster.com/2WN2BY4kcKyJEYOUTA9DUGrLIS4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U1YmE3ODM2LTBiNDctNGJhOC04NzZlLTRmOWUyZDdkNTRiMy53ZWJw",
        genre: "Action, Adventure, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Midsommar (2019)",
        embedUrl: "https://short.icu/S1bBF-yg_",
        posterUrl: "https://resizing.flixster.com/x5ZD7VkGdQZ5Rh0fmzliuAUaL1s=/fit-in/705x460/v2/https://resizing.flixster.com/5_6JUaZOyYgTKo_AR_nmHwogdYw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMyZDg4YzQ5LTNjOTQtNGRmNS04ZGYwLWMwNzM3ZDUyODBiNC53ZWJw",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Green Inferno (2015)",
        embedUrl: "https://short.icu/2_DFRK-Rg",
        posterUrl: "https://resizing.flixster.com/f14rLHwRvMdwBUgtUEdnZnwzAdY=/fit-in/705x460/v2/https://resizing.flixster.com/-5y2iuefVzz3OQfwWksv_G30WXs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAyZmVlNDYzLTk5ZmYtNGRjNC1hMzY3LWFjZGViNzY4NGYwNC53ZWJw",
        genre: "Horror, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Blood Red Sky (2021)",
        embedUrl: "https://short.icu/gK0BbhCTT",
        posterUrl: "https://resizing.flixster.com/Vuzx57vOgIUQ9wXdLE1fCxkhqZ4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20186967_v_v13_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Death Race (2008)",
        embedUrl: "https://short.icu/KGm4WppoU",
        posterUrl: "https://resizing.flixster.com/F98d32PgC606TiTDP2sHiKK-xiM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p176368_v_v8_ar.jpg",
        genre: "Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Death Race 2 (2010)",
        embedUrl: "https://short.icu/dllKwX1en",
        posterUrl: "https://resizing.flixster.com/YAr0m_Iy-NK4Mtm5MN-Ydy9E81w=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8335283_p_v8_af.jpg",
        genre: "Action, Mystery & Thriller, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Death Race 3: Inferno (2012)",
        embedUrl: "https://short.icu/Mn67ZvULE",
        posterUrl: "https://resizing.flixster.com/yqTVo_y-wJjVFYGSzn4mnMJlTFg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9620132_v_v8_ab.jpg",
        genre: "Action, Mystery & Thriller, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Moonfall (2022)",
        embedUrl: "https://short.icu/zaXpib7kx",
        posterUrl: "https://resizing.flixster.com/Pn18mNSYziwDK4yGaMMFCzv1OuU=/fit-in/705x460/v2/https://resizing.flixster.com/CRmwq_V2DcGeyxIu7lRZegydFaY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZhZDk2MGYzLThjNTctNDEyMi1hNjZmLTM0YWMwNjU1N2I0OC5qcGc=",
        genre: "Sci-Fi, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Eternal Sunshine of the Spotless Mind (2004)",
        embedUrl: "https://short.icu/x9Jfzevzg",
        posterUrl: "https://resizing.flixster.com/jNQTjViVCqLBvioVnxG0S0pykew=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/35896/35896_aa.jpg",
        genre: "Romance, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Touch (2024)",
        embedUrl: "https://short.icu/fPEkLG1w1",
        posterUrl: "https://resizing.flixster.com/-Zy3fRQCZHm065E_auAxAvXCH_I=/fit-in/705x460/v2/https://resizing.flixster.com/klonTXSxpwrMlt3R_wcgFpvgsEg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JlYjk5YjVhLWIxMzktNDVkYi05ZjgwLTBhNTFhNWI2YmIyNy5qcGc=",
        genre: "Romance, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Cleaner (2025)",
        embedUrl: "https://short.icu/-fKpb2PvO",
        posterUrl: "https://resizing.flixster.com/q2ZiI5r-Kx2E50odexMMrQZTmo0=/fit-in/705x460/v2/https://resizing.flixster.com/uBz-VSUPKCwY1RgXmZVxEDOkhUg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQxYjUyY2ViLTAyMjItNDU3ZC05NTY2LWU5YzNjNWQxNTFmMi5qcGc=",
        genre: "Mystery & Thriller, Action, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "We're the Millers (2013)",
        embedUrl: "https://short.icu/KkZ48YN84",
        posterUrl: "https://resizing.flixster.com/xsZNg0_dvMSlnl3aU7FER9Yt-pM=/fit-in/705x460/v2/https://resizing.flixster.com/-oKCFGHkiEthlPcFJ-mLTiYRXmY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U4Zjk1OGFmLTgzODYtNDYwMi1iZTAyLTAyMThkZGU4OTM0Ni53ZWJw",
        genre: "Comedy, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pacific Rim (2013)",
        embedUrl: "https://short.icu/PeZgECXoU",
        posterUrl: "https://resizing.flixster.com/C2jMqzNCBLZMB62YTF0sGmCddpk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9360990_v_v8_av.jpg",
        genre: "Sci-Fi, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pacific Rim Uprising (2018)",
        embedUrl: "https://short.icu/RgVcoyaxk",
        posterUrl: "https://resizing.flixster.com/_oTqxWtMbIHC9mEQ4qx46729jws=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11714869_p_v8_ae.jpg",
        genre: "Sci-Fi, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Source Code (2011)",
        embedUrl: "https://short.icu/6iudfSi37",
        posterUrl: "https://resizing.flixster.com/JXl0gocKYjRUUGBNI_nSugQ_j9I=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8395541_v_v8_ao.jpg",
        genre: "Mystery & Thriller, Sci-Fi, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "TRON: Ares (2025)",
        embedUrl: "https://short.icu/-ogj58W5w",
        posterUrl: "https://resizing.flixster.com/TxJrYt9XX1GeopiWq-ZXP2hlkuw=/fit-in/705x460/v2/https://resizing.flixster.com/fzmeO69Rut9wZO1-I6eEcuuG5B4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgzMWZkYTFmLTA4MmMtNGQwYy04MDE3LTAyNDI1ODI4MTAxOC5qcGc=",
        genre: "Sci-Fi, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Code 8 (2019)",
        embedUrl: "https://short.icu/vLokMET9H",
        posterUrl: "https://resizing.flixster.com/0MwbTfA639drTtYzO-EaRY1KMcA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17573367_v_v8_aa.jpg",
        genre: "Action, Adventure, Sci-Fi, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Night Hunter / Nomis (2018)",
        embedUrl: "https://short.icu/mribIR97b",
        posterUrl: "https://resizing.flixster.com/bXw6hocaYioKiaFnqE-DPL87R5g=/fit-in/705x460/v2/https://resizing.flixster.com/qKaelIK-ixKoygmqSJTATp3GSYw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M2N2UxMzQ5LWZjZTktNGRiMS04MzdmLTJkZjI0ZmUwMTllMC53ZWJw",
        genre: "Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Wild Hogs (2007)",
        embedUrl: "https://short.icu/JLRaECTHV",
        posterUrl: "https://resizing.flixster.com/GXWRorqqGNJd6KLVVAQRoWAWVRs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/55838/55838_aa.jpg",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hellhounds (2009)",
        embedUrl: "https://short.icu/U3p2sUfVt",
        posterUrl: "https://resizing.flixster.com/JslGtY8Zsqdi3-Wu24bP-YXsfdE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3490129_v_v8_aa.jpg",
        genre: "Adventure, Fantasy, Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Loft (2015)",
        embedUrl: "https://short.icu/AopXs0mmD",
        posterUrl: "https://resizing.flixster.com/W9oQf7R3kemi3uCxEpSxqoHAyYM=/fit-in/705x460/v2/https://resizing.flixster.com/BbTi8vX0CFV_THTv1ar0ICi5AmA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MyZTA2YjdiLTI5NDQtNDE2ZC1hYWE2LTEzN2IzZGQwY2E1YS5qcGc=",
        genre: "Mystery & Thriller, Adult",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Nerve (2016)",
        embedUrl: "https://short.icu/NFTgzhZky",
        posterUrl: "https://resizing.flixster.com/BxCOEEzfO_F8ef6kYdS0rP74KcE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12711858_v_v8_ak.jpg",
        genre: "Mystery & Thriller, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Secret Headquarters (2022)",
        embedUrl: "https://short.icu/aPpdQ17_4j",
        posterUrl: "https://resizing.flixster.com/BDvUitzEFiwdn_NHFLc0N8ci7K0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20304897_v_v12_ab.jpg",
        genre: "Kids & Family, Action, Adventure, Comedy, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jack the Ripper (1959)",
        embedUrl: "https://short.icu/s6nsOoZjN",
        posterUrl: "https://resizing.flixster.com/_XEzbhu0qg_sJIxtmrFf_uFyP8o=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p52191_v_v8_aa.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Super (2018)",
        embedUrl: "https://short.icu/E7zELyShj",
        posterUrl: "https://resizing.flixster.com/eruArhrVqY3rlTFtzm_VwlQr4z4=/fit-in/705x460/v2/https://resizing.flixster.com/oDp1tiAVyPQdiAAlvzMt2Cn2J_Q=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIzNjBlMmNiLWM1ZWQtNGI1Ny1iZGYwLTczMTA5OTliNDQ5ZC53ZWJw",
        genre: "Mystery & Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Anchorman: The Legend of Ron Burgundy (2004)",
        embedUrl: "https://short.icu/iaLMSAFxA",
        posterUrl: "https://resizing.flixster.com/nYPSUSUSG3lqS8GlITLV8q1Dw7w=/fit-in/705x460/v2/https://resizing.flixster.com/xXO-ngbivn_d24sUHhcKndYknVk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRjNzlmNmE1LTJlYjEtNGZjZC04YWYwLWJhMjI5ZWZjMDE5OC53ZWJw",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Tiger House (2015)",
        embedUrl: "https://short.icu/si1F6CDht",
        posterUrl: "https://resizing.flixster.com/4e9dJLseawz_HgyMUQDexBgvYuM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12046688_v_v12_ai.jpg",
        genre: "Mystery & Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Holy Ghost (2025)",
        embedUrl: "https://short.icu/lBEkmxGzE",
        posterUrl: "https://resizing.flixster.com/92yAalbltXaQrcXq07QCqpyB5dY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30883647_p_v13_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Leave the World Behind (2023)",
        embedUrl: "https://short.icu/gTj6bbB_QB",
        posterUrl: "https://resizing.flixster.com/Q0uoEcZ39hmnF28PPDL3xNn-qos=/fit-in/705x460/v2/https://resizing.flixster.com/gjBl91cQPoUL3N1PFDNkmJgbMbY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNjNDA5NzM2LTAyNTItNDUyMC04MjFkLWFhMmMyYjk4OGQ1Ni5qcGc=",
        genre: "Mystery & Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bambi: The Reckoning (2025)",
        embedUrl: "https://short.icu/KF7OfTbLh",
        posterUrl: "https://resizing.flixster.com/0sPcu4UJfe1YrkCDsoh6nefLSDU=/fit-in/705x460/v2/https://resizing.flixster.com/UlRtp1oNgzfhU4SEdyY97w8bb7I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JmNzU0NTI1LTUwYzUtNDE3ZS1hMWRhLTcwMjZiMGVjOWQzMi5qcGc=",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Under the Skin (2024)",
        embedUrl: "https://short.icu/jXB4agPg-",
        posterUrl: "https://resizing.flixster.com/p16tgahL5qrEl1m0VJ30-VAiBzA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10187422_p_v12_ae.jpg",
        genre: "Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mr. Nobody (2009)",
        embedUrl: "https://short.icu/BXPD2FuhA",
        posterUrl: "https://resizing.flixster.com/WKLy2Ew_5Q8HImMa0OCOiLueDDI=/fit-in/705x460/v2/https://resizing.flixster.com/3-wgShI6qtzPK0tD7Z5NcNqXtdE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FhNTc1NDBkLWRhN2UtNDZjYS1hMGJiLTc0NzExNTA2YWZhOS53ZWJw",
        genre: "Drama, Sci-Fi",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Unfriended: Dark Web (2018)",
        embedUrl: "https://short.icu/6oBUBq0RF",
        posterUrl: "https://resizing.flixster.com/LauYhfcFUH49c0V5zzDDhgS87t8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15528568_p_v8_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Mist (2007)",
        embedUrl: "https://short.icu/s32tv-gA-",
        posterUrl: "https://resizing.flixster.com/sBMXl44adKaJaYDtbtdnS7XmPx8=/fit-in/705x460/v2/https://resizing.flixster.com/VCN_jBn6yk9fvisJDPaEP4nvIGA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUzZWUzZjA4LTEzM2EtNDU5YS1hZjI1LTJhYTgyZjZiNTEyMC5qcGc=",
        genre: "Horror, Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "M3GAN 2.0 (2025)",
        embedUrl: "https://short.icu/VWqroIMB4",
        posterUrl: "https://resizing.flixster.com/hgJQDmt8XOvkhFAimd_Ay4Zk1vY=/fit-in/705x460/v2/https://resizing.flixster.com/4FrPfIEf2MNhTOnst4zcSvA3XLk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc3ZjU4ODViLTBiNGYtNDc5NS04YTI5LWI4YjMwZDQwNWRhYi5qcGc=",
        genre: "Action, Sci-Fi, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "M3GAN (2023)",
        embedUrl: "https://short.icu/5vpf6I82V",
        posterUrl: "https://resizing.flixster.com/ey0R-GBMfZaLP67TGLBVZEkELYE=/fit-in/705x460/v2/https://resizing.flixster.com/rPJASTXFjLpmiVTi3D6RGcq-skM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhjYjA0ODBiLTNlNmUtNDlhOS05ZWRlLThlOGQ2MmEyZjlmYS5qcGc=",
        genre: "Horror, Mystery & Thriller, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The School for Good and Evil (2022)",
        embedUrl: "https://short.icu/J8i5nNkeA",
        posterUrl: "https://resizing.flixster.com/upiyIxZ-aGaRiyHS2WGgJRZyLNA=/fit-in/705x460/v2/https://resizing.flixster.com/ND64xRlf5zF89M40xIk-DZSPMhE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhlNjJhZDYwLTk2NDktNGE0OC05NmYyLWZhYzVkN2E4NDE2My5qcGc=",
        genre: "Drama, Action, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Constantine (2005)",
        embedUrl: "https://short.icu/WUarAF47n",
        posterUrl: "https://resizing.flixster.com/Djce9l1c7vB8X9hwMp6GWOGs3Kc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p35545_v_v12_ab.jpg",
        genre: "Fantasy, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Avatar (2009)",
        embedUrl: "https://short.icu/7Nm2vQpuD",
        posterUrl: "https://resizing.flixster.com/79_bzkpQbMtfbaDtHSRQXoLuIT4=/fit-in/705x460/v2/https://resizing.flixster.com/US4oIx6TDB28ihQIlkRR0olD1f0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNmNjE4NjkxLTdjZGUtNDEyMS1iZTQ1LTIyZDk4MGRiOTY0Zi53ZWJw",
        genre: "Sci-Fi/Adventure/Action/Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Avatar: The Way of Water (2022)",
        embedUrl: "https://short.icu/rbXW8Apjd",
        posterUrl: "https://resizing.flixster.com/Npr_4YSkqvxwgzlp0jgohy_EAic=/fit-in/705x460/v2/https://resizing.flixster.com/JRJ7Yg9m_hVgLpbbV_xnXt_g3hg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgwODA1MDViLWYyNGUtNDQyMC1hMmU4LThjMzNjN2M1MmZjOS5qcGc=",
        genre: "Sci-Fi/Adventure/Action/Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Ritual (2017)",
        embedUrl: "https://short.icu/Lrex9p7_Y",
        posterUrl: "https://resizing.flixster.com/rfryIU95meTvgkHEGtUE89kT8oA=/fit-in/705x460/v2/https://resizing.flixster.com/Y9KtRAJKxPgnl8rlY44soohN15A=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgwZTdhMjFhLTkzZjYtNDI0ZC1hMGQxLTE0YzljMmIwYTI4YS53ZWJw",
        genre: "Horror",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Prometheus (2012)",
        embedUrl: "https://short.icu/gThPl-rCX",
        posterUrl: "https://resizing.flixster.com/d65tmAmryy3uhkkCh_x7y2kQ-w4=/fit-in/705x460/v2/https://resizing.flixster.com/gZozlk_D-cINTUhKSvvjJrwyQh0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y5ZWVmNTEyLWVlOWMtNGRlOS04ODU1LTc5ZjcxZTk1ZDk4MC53ZWJw",
        genre: "Sci-Fi, Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Arrival (2016)",
        embedUrl: "https://short.icu/MWP3USEb0",
        posterUrl: "https://resizing.flixster.com/_dIbj740sBYbzNJdxHfz5Gg3oQU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13003177_p_v8_ad.jpg",
        genre: "Sci-Fi, Mystery & Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Army Of The Death (2021)",
        embedUrl: "https://short.icu/ZvfCfqdnq",
        posterUrl: "https://resizing.flixster.com/9VK5zDVweDt3cXTD6QEj56Ebnog=/fit-in/705x460/v2/https://resizing.flixster.com/lNRldHOBEcz-g1JpWi53eUPtCfA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyN2RiOGJlLTgyYzMtNDI0OS1iNDJiLTlmZWQ3OWNmNjEwOS5qcGc=",
        genre: "Horror, Action, Adventure, Crime",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Black Medicine (2021)",
        embedUrl: "https://short.icu/nUvbnq28g",
        posterUrl: "https://resizing.flixster.com/n7nBMSAwBDDaMKYCW6kW97hdeeA=/fit-in/705x460/v2/https://resizing.flixster.com/sw81_kIIdlnsDUiOwDIgFZf-zRk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhjYmQ3NDkxLTI4ODktNDcwYy05NDE2LTk1ZGQxODE4NTc2ZC5qcGc=",
        genre: "Drama, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Finch (2021)",
        embedUrl: "https://short.icu/LaSvcenV8",
        posterUrl: "https://resizing.flixster.com/vGxJHvHAmfnJK2h_5mnFdSdeTH0=/fit-in/705x460/v2/https://resizing.flixster.com/q-KskuWU_4JWSmAwaAwE_es-Q5A=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdmYjNjM2U5LWRlNzAtNDkwYi04ZGM1LWFkMGY3OGE2YzhhMy5wbmc=",
        genre: "Sci-Fi, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "7:11 PM (2023)",
        embedUrl: "https://short.icu/kEWLKRKYQ",
        posterUrl: "https://resizing.flixster.com/kdn65ulmgbaTieauErbSheGwWOU=/fit-in/705x460/v2/https://resizing.flixster.com/ay7Jt5s-pUCWNvb5lNL1t5O7vxw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M4N2NkMTM3LTBiM2YtNGViYy04NzI2LTYwMjMyMzcxOWEyNy5qcGc=",
        genre: "Sci-Fi, Mystery & Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Atlas (2024)",
        embedUrl: "https://short.icu/7YDAAHvkK",
        posterUrl: "https://resizing.flixster.com/BkHAc30gfGeBqs20Z7JY0oa44PA=/fit-in/705x460/v2/https://resizing.flixster.com/0iQm4yhjVd8HrXQ-PIWZo4RU4xE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YxZDA0NzI4LTMyN2YtNGU3My1iOTI0LTA1M2UyOWU2MTQyMC5qcGc=",
        genre: "Sci-Fi, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Blink (2022)",
        embedUrl: "https://short.icu/wyjYCt-Vl",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZTRlM2M2MzgtMWM2ZC00N2U3LTg5ZjUtMTg2ZTJjZjA4ZTU1XkEyXkFqcGc@._V1_.jpg",
        genre: "Horror, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "8MM (1999)",
        embedUrl: "https://short.icu/RbynNiKxq",
        posterUrl: "https://resizing.flixster.com/XxOw1jtL2V9-8zQeF2PWgSZwQtE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22635_p_v8_aa.jpg",
        genre: "Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Nope (2022)",
        embedUrl: "https://short.icu/MC5lv8PHV",
        posterUrl: "https://resizing.flixster.com/M9GATFCUgW2TDjzeCxRqBpomQxE=/fit-in/705x460/v2/https://resizing.flixster.com/6EeYrywKueOFue9uRSQqLxfGKI0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA0NzZhZTk0LTI3NjctNGZiNi04Yjg4LWRiN2RkNTJiYWZlNy5qcGc=",
        genre: "Sci-Fi, Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Gemini Man (2019)",
        embedUrl: "https://short.icu/7z8epx0nB",
        posterUrl: "https://resizing.flixster.com/oGxYprkGasNbnnW37JRvepdAteU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15226139_p_v8_ac.jpg",
        genre: "Action, Mystery & Thriller, Sci-Fi, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "MR-9: Do or Die (2023)",
        embedUrl: "https://short.icu/d10vSgK7BB",
        posterUrl: "https://resizing.flixster.com/L5ee5MC5ehs8NxH2vfwyfuQLFjM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25251762_v_v13_ac.jpg",
        genre: "Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Visions (2025)",
        embedUrl: "https://short.icu/d10vSgK7BB",
        posterUrl: "https://resizing.flixster.com/Rmfxno3n_mAijuAWbuzVS_VFLbs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25913046_p_v8_ab.jpg",
        genre: "Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bird Box Barcelona (2023)",
        embedUrl: "https://short.icu/xRIDbsLL3",
        posterUrl: "https://resizing.flixster.com/_mEPlDckItAQ4anB2-C6h5z-7Qc=/fit-in/705x460/v2/https://resizing.flixster.com/h3rCecwmN2UhXQj4th2i54rNCLs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc5ZDEzZjhiLTg0ZWYtNGJiYi1hMDdhLWFiODBmY2M0N2I0MC5qcGc=",
        genre: "Horror, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Scream (2022)",
        embedUrl: "https://short.icu/FDx7RzFIX",
        posterUrl: "https://resizing.flixster.com/2Nm6xP3tlDJPY0yHLbWR7TZuT14=/fit-in/705x460/v2/https://resizing.flixster.com/HcHUjHo9RAGGj8F24tSTYzG0T2I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM4ZWVkODA1LTJjZjUtNDBmMC1hNDkyLTQ0MzZmMTYyOTZmNS5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "X (2022)",
        embedUrl: "https://short.icu/7RjLe173l",
        posterUrl: "https://resizing.flixster.com/ohfWlSL_mUyOikKt2QGRXTy3lJI=/fit-in/705x460/v2/https://resizing.flixster.com/cRURehiarRjU_NG86MKlLwDJ1pw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VmODgxYjc4LTAyMTktNGJlMS1iNmExLWYzYWU3MGMwY2E4ZC5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "See for Me (2022)",
        embedUrl: "https://short.icu/ZhuaBv6xB",
        posterUrl: "https://resizing.flixster.com/I4V4PYG6PfuA9gxrWjBStxiVydE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20832001_k_v8_ad.jpg",
        genre: "Mystery & Thriller, Crime, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Last Warrior: A Messenger of Darkness (2021)",
        embedUrl: "https://short.icu/6RG8V5kWB",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNDQ3YzZiZmMtMmI1Zi00MmRjLTkxZDYtMGRkYzA5NTJjYTk5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Mystery & Thriller, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Beta Test (2021)",
        embedUrl: "https://short.icu/aXWd2S-Cc",
        posterUrl: "https://resizing.flixster.com/6rc6ldopD0OZ_HI2d51NL1Y0dWs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20492620_v_v12_ae.jpg",
        genre: "Mystery & Thriller, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Seven (1995)",
        embedUrl: "https://short.icu/B5OQFgoVq",
        posterUrl: "https://resizing.flixster.com/2QSTmHipqhQivxGDZZMpEKJMubg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17198_p_v12_an.jpg",
        genre: "Mystery & Thriller, Crime, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Crawlspace (2022)",
        embedUrl: "https://short.icu/1F4T3LZHq",
        posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21432350_v_v13_aa.jpg",
        genre: "Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Men (2022)",
        embedUrl: "https://short.icu/e5w_ngO4n",
        posterUrl: "https://resizing.flixster.com/qaVXfJCxnrk5ilQj5YXPF54fIbk=/fit-in/705x460/v2/https://resizing.flixster.com/sCtfTO0OGwvHfiDC_3o8afNl8gI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzkzMjY5YjQ2LWY3ODQtNDA1OC1hZDUyLTk0ZDc3OGFjMDk0ZC5qcGc=",
        genre: "Mystery & Thriller, Horror, Drama, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The 8th Night (2021)",
        embedUrl: "https://short.icu/tIGIqva-k",
        posterUrl: "https://resizing.flixster.com/6PihCZ-Si5rtpR1hY-f7T6ox0Lk=/fit-in/705x460/v2/https://resizing.flixster.com/kLXH_amQvyQLj7lPGt97PoYpEOQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NkNzk0NmJjLTZmNGItNDhiMC1iODJhLTc0ZThiYjZjNGMyZi5qcGc=",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Uncharted (2022)",
        embedUrl: "https://short.icu/2MrE_cy__",
        posterUrl: "https://resizing.flixster.com/aXQxny5yQU5JFI-6fU-R44ChdDs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19458781_p_v12_ah.jpg",
        genre: "Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dragon Fury (2021)",
        embedUrl: "https://short.icu/Zhw-8oZUnq",
        posterUrl: "https://resizing.flixster.com/zuojhaRJwdGFIPd99netZjhdSSA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20337598_v_v13_aa.jpg",
        genre: "Fantasy, Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Tinder Swindler (2022)",
        embedUrl: "https://short.icu/s6YFEZXv2",
        posterUrl: "https://resizing.flixster.com/1QUv_8VF8xU-sgRICD1U5KNMaXg=/fit-in/705x460/v2/https://resizing.flixster.com/TM3X5hWS6IRmpgcAhYS9zPMrlYE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E1N2NmOTU5LTIyYWEtNGRlYi1iMTNmLTE5NjQ2MTMzZTU0Zi5qcGc=",
        genre: "Documentary",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Space Sweepers (2021)",
        embedUrl: "https://short.icu/eEg35p7Kz",
        posterUrl: "https://resizing.flixster.com/TbrU34gMLnRPQUj6b8_96chzYPA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19323897_v_v8_aa.jpg",
        genre: "Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Maleficent (2014)",
        embedUrl: "https://short.icu/qGlW0mIr4",
        posterUrl: "https://resizing.flixster.com/7qsYEzkmOs_8T6Jw_n40oQ_evEo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10086642_p_v12_an.jpg",
        genre: "Fantasy, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ellipse (2018)",
        embedUrl: "https://short.icu/LYafDy9gD",
        posterUrl: "https://resizing.flixster.com/FU9BtOThXyTIcnIFD96XDM7z_5I=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16924527_v_v12_ab.jpg",
        genre: "Sci-Fi, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Day Shift (2022)",
        embedUrl: "https://short.icu/9VxzwzwyX",
        posterUrl: "https://resizing.flixster.com/pBZtDUQWGg44iAL7tXX_t0RymDc=/fit-in/705x460/v2/https://resizing.flixster.com/PZPOOQM8PwGL70qshjeR__3kzhA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgwOTZlNmQxLWJlYzUtNGE2Yy1hZjQ3LTczMzE3NjQ0MzQ4MS5qcGc=",
        genre: "Action, Horror, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Family Switch (2023)",
        embedUrl: "https://short.icu/DCeT7CI2s",
        posterUrl: "https://resizing.flixster.com/zNJI2FBXYza-aOIakKowth3D604=/fit-in/705x460/v2/https://resizing.flixster.com/Z8gs9lng-shHkpvA2e7K7sTd6BY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2UxNDNlZDliLTdhNWEtNGRjYS05MGIyLTc1NjgwMTA1MzUwYi5qcGc=",
        genre: "Kids & Family, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Glass Onion: A Knives Out Mystery (2022)",
        embedUrl: "https://short.icu/6D30hS2rN",
        posterUrl: "https://resizing.flixster.com/BRbTJ51LqM__2dTepPLu_uz6-tg=/fit-in/705x460/v2/https://resizing.flixster.com/Mtg-vEUajN8oamKcLLI7hZT-Rhs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FhYTcxNzNkLTExYzItNDk1NC1iNDNmLWViMDRlYjg5NzliNC5qcGc=",
        genre: "Mystery & Thriller, Comedy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Palm Springs (2020)",
        embedUrl: "https://short.icu/uuX09scXKI",
        posterUrl: "https://resizing.flixster.com/a_6Eq57ZjvsoP5G5eXTHApbMryM=/fit-in/705x460/v2/https://resizing.flixster.com/us8tHh-h0GN8qIXNH1rybCT5kj4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E1ZjE2ZTM5LWM3MzEtNDlmNS1iNjg2LTllZGRiOWFhMjg5ZS5wbmc=",
        genre: "Romance, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Welcome Home (2018)",
        embedUrl: "https://short.icu/YOmKgSt5u",
        posterUrl: "https://resizing.flixster.com/myJsTARwNyStEsmam-6GL5UDwQ4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15928537_p_v13_at.jpg",
        genre: "Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "John and the Hole (2021)",
        embedUrl: "https://short.icu/byNS5G2ip2",
        posterUrl: "https://resizing.flixster.com/Zqi0YirAx7VcOqMxwtVRXiYEIqQ=/fit-in/705x460/v2/https://resizing.flixster.com/ADKZLPW-CGFwakYFQE6KOgAsq-s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2QyMzQzNzIwLWI3MGYtNGRkYi05YTMxLTJkYzZjNTk5NTAwMy5qcGc=",
        genre: "Mystery & Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Happy Death Day (2017)",
        embedUrl: "https://short.icu/ZrV1QAUj0",
        posterUrl: "https://resizing.flixster.com/g-TJd80j10eKv2w2w08nCXLOyIs=/fit-in/705x460/v2/https://resizing.flixster.com/PiX_fIuJPNzpc-Xee4vEEXSgtmw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I5MDk3N2FjLWZhMTItNDc4ZS04NzQ2LWRjYWYwYWRjNWJlYS53ZWJw",
        genre: "Horror, Mystery & Thriller, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Happy Death Day 2U (2019)",
        embedUrl: "https://short.icu/3z3CP9hzt",
        posterUrl: "https://resizing.flixster.com/Jxo-3I6cxgHy8nClRKN1IK8_olY=/fit-in/705x460/v2/https://resizing.flixster.com/VMbqG1fS7K4YHTz3qRYk3i7j1oI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgyNGU3MTk5LTY5YjktNGJhYi05OTM4LWYzMzFlZjJlYTE3Yi53ZWJw",
        genre: "Horror, Mystery & Thriller, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Frequently Asked Questions About Time Travel (2009)",
        embedUrl: "https://short.icu/b_xh0IWuh",
        posterUrl: "https://resizing.flixster.com/UcN7FkELrkr4Wn4CqiN-yhpK_Bw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3530335_p_v8_aa.jpg",
        genre: "Comedy, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "In the Shadow of the Moon (2019)",
        embedUrl: "https://short.icu/RoYar5dlT",
        posterUrl: "https://resizing.flixster.com/MyRlaE-2H8WNOqv1--PYDJzo-XE=/fit-in/705x460/v2/https://resizing.flixster.com/PVPnrzSYbdEUuDSqpOgKaqFxRRs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIyY2YzZDMwLWE2N2MtNDUzZi05MGNhLTUzY2QzZTdkM2RiMS53ZWJw",
        genre: "Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Time Trap (2017)",
        embedUrl: "https://short.icu/PAm2CSy4O",
        posterUrl: "https://resizing.flixster.com/oNWDwAY0Tnd2A-NPVv-K8G1OvWw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15025235_v_v8_aa.jpg",
        genre: "Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Project Almanac (2015)",
        embedUrl: "https://short.icu/9sPJVZQaI",
        posterUrl: "https://resizing.flixster.com/wO6h41G8JmaaNNGBcdpp8ESxtJ8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10172962_p_v8_ar.jpg",
        genre: "Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Déjà Vu (2016)",
        embedUrl: "https://short.icu/82bVtZwgV",
        posterUrl: "https://resizing.flixster.com/4VMK5bXsau3ULZUbejmpS5KJEwg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162535_v_v11_ap.jpg",
        genre: "Sci-Fi, Mystery & Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sinister (2012)",
        embedUrl: "https://short.icu/YpdLdhn-m",
        posterUrl: "https://resizing.flixster.com/MFxtVUO4ItiBi4GR-u7U1Tk9pSQ=/fit-in/705x460/v2/https://resizing.flixster.com/7x-VyxyjSTDYjExRr_vIoD4ZWaI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhlYjNiZjc2LWE0MWQtNDU0Ny1hNDdlLWM5OTBiMWFiNjFjOC53ZWJw",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Don't Die: The Man Who Wants to Live Forever (2025)",
        embedUrl: "https://short.icu/WsfZLNNVs",
        posterUrl: "https://resizing.flixster.com/htM4gGUqXC1OHqGZ1kJ1QFExIWw=/fit-in/705x460/v2/https://resizing.flixster.com/6GHP-W529MjekFxdQ1eOeE6MOIE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y4NTRmNzA1LTYyN2YtNGQ0NS1iMzdlLWIwNGZiNDg2YjczOC5qcGc=",
        genre: "Documentary",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Companion (2025)",
        embedUrl: "https://short.icu/yqfHDMVnil",
        posterUrl: "https://resizing.flixster.com/gH-yLcxmjPvYGkBMYVn5_aVrFS4=/fit-in/705x460/v2/https://resizing.flixster.com/S8QC5Q_ClUyg-guAIMH7-7cPm1s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdlNmI1MGUzLWZhNGEtNDYxNy05YTA2LWNjNThhZGY5MzIwZC5qcGc=",
        genre: "Mystery & Thriller, Sci-Fi, Horror, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Apocalypto (2006)",
        embedUrl: "https://short.icu/C1PfELOZi",
        posterUrl: "https://resizing.flixster.com/Sfr5a_edgA3kII2_N2fuOyYfidY=/fit-in/705x460/v2/https://resizing.flixster.com/JKLIxQosrT5r8zuCMCYo2FDIsMM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRjOTIyNmYzLTA2OWQtNGUxMC04YTJlLWJkMjZiZDk2ZWQwMS53ZWJw",
        genre: "Adventure, Action",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Shadows of the Dead (2016)",
        embedUrl: "https://short.icu/bDnobYqfm",
        posterUrl: "https://resizing.flixster.com/3ZI-L0yyR4dWahByyCByzaHSYdg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13330051_p_v8_ab.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Rake (2018)",
        embedUrl: "https://short.icu/ncJoPilSe",
        posterUrl: "https://resizing.flixster.com/MyKL-CXqnQhudhl6HlxcSA_-hlQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15512675_p_v8_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "A Perfect Murder (1998)",
        embedUrl: "https://short.icu/oG_PzhR14",
        posterUrl: "https://resizing.flixster.com/4Bvs50gTivRffx9nl2UddL52zBA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21049_v_v8_ac.jpg",
        genre: "Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Occupation (2018)",
        embedUrl: "https://short.icu/q4-B-L3H0",
        posterUrl: "https://resizing.flixster.com/hMl4knsTx3mmu7l0P3kxjRX9Z8c=/fit-in/705x460/v2/https://resizing.flixster.com/Sur0DWCe_WCojv9-0-Iylm9QhHU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VhYmYxZmEyLWU5NDEtNDUzMi05MjdiLTA3ZTllMGQ5MzM4OC53ZWJw",
        genre: "Sci-Fi, Action, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Paycheck (2003)",
        embedUrl: "https://short.icu/JAxv0ezPL",
        posterUrl: "https://resizing.flixster.com/bExCD_tnlYcCw8l_omSCxPnUKqc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p33626_v_v12_al.jpg",
        genre: "Sci-Fi, Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Escape From Alcatraz (1979)",
        embedUrl: "https://short.icu/O1aoxCjhQ",
        posterUrl: "https://resizing.flixster.com/6RgloQvgSUax7VJGniXQ56h9Czg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3635_p_v8_af.jpg",
        genre: "Mystery & Thriller, Drama, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Cabin in the Woods (2012)",
        embedUrl: "https://short.icu/ngJsOujxp",
        posterUrl: "https://resizing.flixster.com/4J3ZghCslY4qwUH89Atuv-GU0TA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7820886_p_v11_ab.jpg",
        genre: "Horror, Comedy, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Cloud Atlas (2012)",
        embedUrl: "https://short.icu/P1XxIIi-K",
        posterUrl: "https://resizing.flixster.com/qRzPpImLqsybJaskybq3q8tH4hs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/119516/119516_aa.jpg",
        genre: "Drama, Mystery & Thriller, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Cosmoball (2020)",
        embedUrl: "https://short.icu/y5erVJ6Qm",
        posterUrl: "https://resizing.flixster.com/Q2i-3Yi9B2umj5dN1wfw8YVYUj0=/fit-in/705x460/v2/https://resizing.flixster.com/Wru0Ff91Ap0v0cTGwxERoRyJMVY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2QxNjE0ZDk0LTkxZTYtNDNmNS1hZmZhLTJhYTY0YTM0NmE4Ny5qcGc=",
        genre: "Action, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Expend4bles (2023)",
        embedUrl: "https://short.icu/SuqzWdXUv",
        posterUrl: "https://resizing.flixster.com/tDSVFEI47SNPps-OidU5a-FTo-I=/fit-in/705x460/v2/https://resizing.flixster.com/HE19WUUwDAVf77AN1OgpUqCX4vg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E1ZmYxOGU5LTVlNTEtNDI1ZC05MTkwLWMyMjM4ZDc4YTQwOC5qcGc=",
        genre: "Action, Adventure, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Expendables 3 (2014)",
        embedUrl: "https://short.icu/-UK-AVwMf",
        posterUrl: "https://resizing.flixster.com/9A3mMlnTyGu9DtNdyVky_BTRkZQ=/fit-in/705x460/v2/https://resizing.flixster.com/gzdk5PtGOm7ZWg-lLgRx5sURNUs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E0MzVjN2U3LWEwMmEtNDg1YS1iYjliLTBmNmU1YTBlNjA5Mi53ZWJw",
        genre: "Action, Mystery & Thriller, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Expendables (2010)",
        embedUrl: "https://short.icu/paII1d0TL",
        posterUrl: "https://resizing.flixster.com/tCCXbUUSnA0LX1UkK6GoP_VN5jY=/fit-in/705x460/v2/https://resizing.flixster.com/rcqF353vRiJv5bQXlFqToc7pbrQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY0ODUwY2E5LWE1MTMtNDFmNS05NDgxLWMxZDc3OGQ4YmJlZi5qcGc=",
        genre: "Action, Mystery & Thriller, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Expendables 2 (2012)",
        embedUrl: "https://short.icu/tOWGXKn-0",
        posterUrl: "https://resizing.flixster.com/MLpl07ga799kGXWTFbebGBWVFxE=/fit-in/705x460/v2/https://resizing.flixster.com/9EWgHzCjCKKTJqewXmbPz06ewGc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NhYjUyZDE5LWNiYTAtNDcxZi05NWEyLTA5NjUxYjlkNzE0Yy53ZWJw",
        genre: "Action, Mystery & Thriller, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "2067 (2020)",
        embedUrl: "https://short.icu/OGnsbDQlcb",
        posterUrl: "https://resizing.flixster.com/p6mGyJzpIvCIAGX9YYrqgtJPKWE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18775455_v_v11_ab.jpg",
        genre: "Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Don't Let Go (2019)",
        embedUrl: "https://short.icu/arTf32fVTw",
        posterUrl: "https://resizing.flixster.com/r3p6iG_hGjR3qUuClfh8ByhsSao=/fit-in/705x460/v2/https://resizing.flixster.com/oXlgaG6PsECbu5nBcISr9O2GC94=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZmYjFiNDljLTU3ZjAtNDEyZS1iMzdiLTIwZmU1N2MyZTkyOS53ZWJw",
        genre: "Sci-Fi, Mystery & Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Parallel (2024)",
        embedUrl: "https://short.icu/Ist3bPP8O",
        posterUrl: "https://resizing.flixster.com/ONaqb95nNrDcd48QUzvJKyzXt3E=/fit-in/705x460/v2/https://resizing.flixster.com/GyVub9rGU6uhdW6x-BeT35DqyDQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM1YmEwZGJhLTkyMzYtNGNmMy1hN2VhLTk2Y2RhNDBjOTA3Yi5qcGc=",
        genre: "Sci-Fi, Mystery & Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Downsizing (2017)",
        embedUrl: "https://short.icu/g3DQuG8dU",
        posterUrl: "https://resizing.flixster.com/9D1JVyBwieYPPd3AcKAVrwPiH8s=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13462266_v_v8_ap.jpg",
        genre: "Comedy, Drama, Sci-Fi, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hellraiser (2022)",
        embedUrl: "https://short.icu/xH4q6KR7c",
        posterUrl: "https://resizing.flixster.com/cxfvbobKlCiPpkhNmvz5_CHTgi8=/fit-in/705x460/v2/https://resizing.flixster.com/KLd94e7Tu2zBav24CAwEaxJG-GM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VjNTFlZDhhLTA4M2QtNGZkZi1hNDljLTc5OTg4MGY2MThhZC5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Number 24 (2024)",
        embedUrl: "https://short.icu/FlL5cW286",
        posterUrl: "https://resizing.flixster.com/oeM3F3kJBz5ino1xZBzCSSLFhps=/fit-in/705x460/v2/https://resizing.flixster.com/qRAieyh5PQtfOShmN4Om6wcgL10=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JjNWFkYTljLTExZmMtNDcwNi05NjgxLTUzOTgyMmQwNDkxMS5qcGc=",
        genre: "Mystery & Thriller, War, Biography, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Novocaine (2025)",
        embedUrl: "https://short.icu/rz0Ar_hbPR",
        posterUrl: "https://resizing.flixster.com/71Hl_CV5hreOYmOXUGM-9Xo7thw=/fit-in/705x460/v2/https://resizing.flixster.com/MdoLqYBS-znXlvk7XCK7aIwTkMQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2MjhlZTE1LWMxODAtNGJlMC04Yjc2LWEyNDBiODk0OGRkZS5qcGc=",
        genre: "Action, Comedy, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Divergent (2014)",
        embedUrl: "https://short.icu/x5biVqL7v",
        posterUrl: "https://resizing.flixster.com/lEcc_4mFB3DBQT39PQTzmaJnNiQ=/fit-in/705x460/v2/https://resizing.flixster.com/yQmQAPYTH0EN2D1TzvCJqOEXfcs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FkODRmODJjLTYyYjItNDhiNC1hZDVjLThiOWVmNjA2ZTNhYy53ZWJw",
        genre: "Sci-Fi, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Choose or Die (2022)",
        embedUrl: "https://short.icu/ZFAv0OY_0",
        posterUrl: "https://resizing.flixster.com/uyLr629srJmC24AhCMDRaR58hv4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21584692_v_v13_ab.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Martian (2015)",
        embedUrl: "https://short.icu/hrSCbdLnt",
        posterUrl: "https://resizing.flixster.com/nzND3N0qNnEduflhLOFvnxVMTDE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/141684/141684_aa.jpg",
        genre: "Sci-Fi, Adventure, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Battleship (2012)",
        embedUrl: "https://short.icu/8HxuIe2qR",
        posterUrl: "https://resizing.flixster.com/OgqkyTJH-NglxHKFpd1eshB2hD4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8777089_v_v11_aw.jpg",
        genre: "Sci-Fi, Action, Adventure, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Don't Breathe 2 (2021)",
        embedUrl: "https://short.icu/AeOEja9O5",
        posterUrl: "https://resizing.flixster.com/C5fP5V4ZingUjOBKMk_tlRda9Qc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19634584_v_v9_ai.jpg",
        genre: "Mystery & Thriller, Horror, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Don't Breathe (2016)",
        embedUrl: "https://short.icu/_TLdz-a-Q",
        posterUrl: "https://resizing.flixster.com/PMhWIliBWBJS_RP7mUco5MJm_tk=/fit-in/705x460/v2/https://resizing.flixster.com/QqrCS2K1-mjyL7rA88Ko5IBRCUU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc2YjEzNWIxLTk5NjItNDM5ZC1iZjBlLWIxZmVjMzZkZDVkOC53ZWJw",
        genre: "Mystery & Thriller, Horror, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Don't Move (2024)",
        embedUrl: "https://short.icu/79k1XuRDl",
        posterUrl: "https://resizing.flixster.com/2a-0F7nXxq8P70-bK4eUFld53As=/fit-in/705x460/v2/https://resizing.flixster.com/6FcQyS6Evoez662jL_C18IHdO6E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NiYzcxOWI2LTY5MjQtNDNkYi05YzQ2LWNmZDg4YmQwMjc4OS5qcGc=",
        genre: "Mystery & Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Furiosa: A Mad Max Saga (2024)",
        embedUrl: "https://short.icu/9xt2paL4M-",
        posterUrl: "https://resizing.flixster.com/MlMzX-ASKTtiV4uvkdkmh4dz_lg=/fit-in/705x460/v2/https://resizing.flixster.com/C8tEkQD0pnR7Cj5gvidLWpQknNE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5Mjc0ZGE2LTcyNTYtNGUwNS04NTg5LTcwNDE0YzdmYTliMi5qcGc=",
        genre: "Action, Adventure, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mad Max: Fury Road (2015)",
        embedUrl: "https://short.icu/2yUix3x7d",
        posterUrl: "https://resizing.flixster.com/u7LNItddeqHE8MT_e1YhFFSy_M0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/140378/140378_ab.jpg",
        genre: "Action, Adventure, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Looper (2012)",
        embedUrl: "https://short.icu/bM-q6Roet",
        posterUrl: "https://resizing.flixster.com/aYpsncn_fW4irQGsqoqfbOxalrQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9076140_p_v12_ar.jpg",
        genre: "Sci-Fi, Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Layover (2017)",
        embedUrl: "https://short.icu/OvH5TzAdV",
        posterUrl: "https://resizing.flixster.com/SaejHwnxOrbbz_uwfOmkiBBlbOo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14054822_v_v8_ab.jpg",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Theory of Everything (2014)",
        embedUrl: "https://short.icu/VObTgIJ4Y",
        posterUrl: "https://resizing.flixster.com/hfooj179DVkM1WVkyRgZ1drAzHU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10704182_v_v8_ap.jpg",
        genre: "Biography, Drama, Romance",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Pursuit of Happyness (2006)",
        embedUrl: "https://short.icu/_q8mL5ndE",
        posterUrl: "https://resizing.flixster.com/s-G9NoYJ5qltx6RyaeQmu_X3Yso=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162523_v_v11_at.jpg",
        genre: "Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Wrong Turn (2021)",
        embedUrl: "https://short.icu/w46Lr4PFZ",
        posterUrl: "https://resizing.flixster.com/0n3Y1kur0EYSxUJO2NN7MXVpvAo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19224096_v_v8_al.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Wrong Turn (2003)",
        embedUrl: "https://short.icu/MvU4zMny5",
        posterUrl: "https://resizing.flixster.com/18etsgtbuz21qPrMSt16oOv1-rs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p32136_v_v8_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Thanksgiving (2023)",
        embedUrl: "https://short.icu/oef7TrbZx",
        posterUrl: "https://resizing.flixster.com/tadJe2TpWajmxFHeaVLM1OKVF5Y=/fit-in/705x460/v2/https://resizing.flixster.com/H5CIRmSezlafOc8Fte3v2PNGr1M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNjN2ZiOTBmLTczODctNGU1MS05NGUyLTRmZThjZDk1ZGVkMC5qcGc=",
        genre: "Holiday, Horror, Mystery & Thriller, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Primer (2004)",
        embedUrl: "https://short.icu/D4L_1YuuC",
        posterUrl: "https://resizing.flixster.com/1TV2uJ-MY414RnutQJLObEnCHU4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p84960_p_v8_ab.jpg",
        genre: "Drama, Sci-Fi",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Triangle (2009)",
        embedUrl: "https://short.icu/FZsBUeqy5b",
        posterUrl: "https://resizing.flixster.com/pdoU155aEHMO3KfHKbOdiI0hz6k=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7879524_v_v8_ag.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Return to House on Haunted Hill (2007)",
        embedUrl: "https://short.icu/jr8Q9t5LM",
        posterUrl: "https://resizing.flixster.com/mTUpjqdoAWhgt24dXI9ZLPZZVDE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p172860_p_v8_ae.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Timecrimes (2008)",
        embedUrl: "https://short.icu/EO5BOQczi",
        posterUrl: "https://resizing.flixster.com/DEYI02Wmk39zADabviM83mZuURc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p179467_v_v12_ae.jpg",
        genre: "Action, Adventure, Drama, Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Spanish",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "12 Monkeys (1995)",
        embedUrl: "https://short.icu/M3RatsHQa",
        posterUrl: "https://resizing.flixster.com/QYeQd7xdvGIQY_Ve3eAaXr2J2aI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17517_v_v12_bk.jpg",
        genre: "Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Who's There (2022)",
        embedUrl: "https://short.icu/tuczXKrlc",
        posterUrl: "https://a.ltrbxd.com/resized/film-poster/8/8/8/3/5/5/888355-who-s-there--0-230-0-345-crop.jpg?v=830d06a785",
        genre: "Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Skin I Live In (2011)",
        embedUrl: "https://short.icu/kt2m7GkX8i",
        posterUrl: "https://resizing.flixster.com/qxT1O0nuwClYrW9-tQc8yqP5nls=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8731144_v_v8_aa.jpg",
        genre: "Drama, Mystery & Thriller",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Coherence (2013)",
        embedUrl: "https://short.icu/6bHHperxg",
        posterUrl: "https://resizing.flixster.com/9Z_Xe-A3zK21B-r0bm47GN6eo3s=/fit-in/705x460/v2/https://resizing.flixster.com/d96mfrlyLa13G_rR7UEFCUYfCTc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YzNTFkZWY4LWM2ZGMtNDc1Yy04N2RhLWE4YmMyNDgyNzgwOS53ZWJw",
        genre: "Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Knights of the Zodiac (2023)",
        embedUrl: "https://short.icu/eYah98MGN",
        posterUrl: "https://resizing.flixster.com/Y9KSFYNxbqWiRZiU6n3VxknVwxI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24364441_p_v12_aa.jpg",
        genre: "Fantasy, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Miss Congeniality (2000)",
        embedUrl: "https://short.icu/Wkf_vgsf9",
        posterUrl: "https://resizing.flixster.com/M9E6zqT3GvOyUVKAOA4Epy-GOhE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26773_v_v8_bd.jpg",
        genre: "Comedy, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hancock (2008)",
        embedUrl: "https://short.icu/02UfG-TfS",
        posterUrl: "https://resizing.flixster.com/79QAyaBuA6Kc_Wzt_8gf-Q8PzZQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p176343_v_v11_ah.jpg",
        genre: "Action, Comedy, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "John Wick (2014)",
        embedUrl: "https://short.icu/SCb_m7S4X",
        posterUrl: "https://resizing.flixster.com/foryqGUJI8diyhI2rvVrXP4e8z0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11016518_v_v13_ab.jpg",
        genre: "Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "John Wick: Chapter 2 (2017)",
        embedUrl: "https://short.icu/A1Prd0piT",
        posterUrl: "https://resizing.flixster.com/x53u6uSY3IRpKHsE2Ads3YF7-1g=/fit-in/705x460/v2/https://resizing.flixster.com/t03J-N7iMiWdgqbkRNHNArjDD44=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzcxY2M3ZWE3LTc3Y2ItNDExMS1hNzhkLWJhYTljMzZiZmVkNC53ZWJw",
        genre: "Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "John Wick: Chapter 3 -- Parabellum (2019)",
        embedUrl: "https://short.icu/EdfUJMLPS",
        posterUrl: "https://resizing.flixster.com/J0gDIV_6NOQwd2L9j1eHpOqrU4I=/fit-in/705x460/v2/https://resizing.flixster.com/W4TpAGQ8fGpOiZtkt8RXHW0ZvmE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2NGRkMGIzLThiOTgtNDE1Mi1iZGYyLWQ4M2Y4OTg3ZDBkMC53ZWJw",
        genre: "Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "John Wick: Chapter 4 (2023)",
        embedUrl: "https://short.icu/y5Wv-YpTK",
        posterUrl: "https://resizing.flixster.com/jeODpU4A2PkMGyXFd1UKFBmUciY=/fit-in/705x460/v2/https://resizing.flixster.com/ayiSi8HrUS3_i-Jkru1P2oMM58Q=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhiODAwYWIyLTM1MmItNGI1ZS1iOWQzLTdjZjAzMzI1MDc2Yy5qcGc=",
        genre: "Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Drop (2025)",
        embedUrl: "https://short.icu/j9TPaCZE6",
        posterUrl: "https://resizing.flixster.com/2T7FwWkasFkSWXGS4OmD271sMyQ=/fit-in/705x460/v2/https://resizing.flixster.com/DY5hB6Ny2DB3DYZDstb19TIRiGQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJmODM4ZmUyLTdkMDktNDFiMi1hOTA4LTQ0ODcxNTI5ZDBmNC5qcGc=",
        genre: "Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Pink Panther (2006)",
        embedUrl: "https://short.icu/9aGUT93uw",
        posterUrl: "https://resizing.flixster.com/bMCucozLtQgOF8fuKk9PN8TDuT0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p88891_v_v8_ak.jpg",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jack the Giant Slayer (2013)",
        embedUrl: "https://short.icu/n9I1OF7CK",
        posterUrl: "https://resizing.flixster.com/zBwyFGhXdPLa9jBRHibr2tVJC6k=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8991551_p_v13_az.jpg",
        genre: "Fantasy, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Maze Runner (2014)",
        embedUrl: "https://short.icu/nawFz9rws",
        posterUrl: "https://resizing.flixster.com/A4qrKSpkELDIfh-rXU31L1YmkKI=/fit-in/705x460/v2/https://resizing.flixster.com/qex4h8RpE7ruKmlsef6HwsHMoFw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU0ZWFkODIzLTExYzAtNDE1YS1hNDJmLTBhNjNjNjUyZjJjZC53ZWJw",
        genre: "Sci-Fi, Adventure, Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Maze Runner: The Scorch Trials (2015)",
        embedUrl: "https://short.icu/glJFx6wit",
        posterUrl: "https://resizing.flixster.com/qm5zWFy6--qd_HKstjl5ayHZ_IA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11659455_p_v12_az.jpg",
        genre: "Sci-Fi, Adventure, Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Maze Runner The Death Cure (2018)",
        embedUrl: "https://short.icu/eOVLeeC8y",
        posterUrl: "https://resizing.flixster.com/1ovoqz6BEuu9Ic00lSgcY582zXI=/fit-in/705x460/v2/https://resizing.flixster.com/8YIZ3iZgV7__n3PoVam3-RjLe7k=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y4ZjFlOGM2LWJiOTAtNDIyMS04Nzk2LThjMWM5YTJkNWZjMi53ZWJw",
        genre: "Sci-Fi, Adventure, Action, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Snowpiercer (2014)",
        embedUrl: "https://short.icu/qrN0MKJG5",
        posterUrl: "https://resizing.flixster.com/BE1Js4HEcFKSA5a8sGap75goDaI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10106695_p_v8_ap.jpg",
        genre: "Sci-Fi, Action, Mystery & Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Creator (2023)",
        embedUrl: "https://short.icu/qrN0MKJG5",
        posterUrl: "https://resizing.flixster.com/Xlkv2GyVQdZ1xxLRTxt92sgVsd4=/fit-in/705x460/v2/https://resizing.flixster.com/CqeQShqSXJ8Ec-2I9RYEXdoncH0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNjYzAzM2ZiLTc5ZGItNDUyYS05MmFkLTY5NDRiYjRiODlkYi5qcGc=",
        genre: "Sci-Fi, Action, Adventure",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Greta (2019)",
        embedUrl: "https://short.icu/vcsmcfLB6",
        posterUrl: "https://resizing.flixster.com/hMedcXa7K90FtQRpruosuhowS8w=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16333559_p_v8_ag.jpg",
        genre: "Mystery & Thriller/Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Barbie (2023)",
        embedUrl: "https://short.icu/jeOZDRH7c",
        posterUrl: "https://resizing.flixster.com/AkGvQXAuiJFgumWPr-IgntlVUIE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v8_am.jpg",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Dark Tower (2017)",
        embedUrl: "https://short.icu/N4k3jAP9s",
        posterUrl: "https://resizing.flixster.com/i2I-3vWfd6ZbrqVPdbitlYGTtRY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12676586_p_v8_as.jpg",
        genre: "Fantasy, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Spy (2015)",
        embedUrl: "https://short.icu/jNeLUGaYC",
        posterUrl: "https://resizing.flixster.com/nB3QECNmms8yhlSE8gFG2u5NbWk=/fit-in/705x460/v2/https://resizing.flixster.com/9VMIQxd2FLmt22Nm1d-7D47CaMI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc3YmI0MzI3LTcxMjMtNDdhMi05MTJiLTM3MjhiMDBlNTQ3YS5qcGc=",
        genre: "Comedy, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Longest Yard (2005)",
        embedUrl: "https://short.icu/TilkORcSo",
        posterUrl: "https://resizing.flixster.com/fVhhX-K4se9H4ozSG18gSXbIOAE=/fit-in/705x460/v2/https://resizing.flixster.com/NJwaFZ7MrRMGI1ip3iJBPckmj4s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZmNjk4MjM3LTYwNGMtNGVlYS1iM2E5LWI2ZWZkY2ZmYTUxYS53ZWJw",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Love Hurts (2025)",
        embedUrl: "https://short.icu/4G2ib3gNY",
        posterUrl: "https://resizing.flixster.com/Vg1jMpXNeqPZ-jY6Z1J-3htJQEI=/fit-in/705x460/v2/https://resizing.flixster.com/BUSNT64l_F_VStkJU4uTHYBsgWw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ExYjFlZDUyLTBhOGItNDRiOC05MzAzLTc0ZTU2MGExMDQ5MS5qcGc=",
        genre: "Holiday, Action, Comedy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Naked Gun (2025)",
        embedUrl: "https://short.icu/0ctvxjzTzE",
        posterUrl: "https://resizing.flixster.com/80sMmBoDX6HuIW7xnlCZYyHtafk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29709975_v_v12_ag.jpg",
        genre: "Comedy, Action, Crime",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Truth or Die (2012)",
        embedUrl: "https://short.icu/vfiJNrw_ro",
        posterUrl: "https://resizing.flixster.com/itKutYYOrtvF1cKPAa2fqaxb5Wo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9388342_v_v8_ab.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "100 Feet (2008)",
        embedUrl: "https://short.icu/juJ0mgRb79",
        posterUrl: "https://resizing.flixster.com/epuslneYeAAhh4HLpde2KwvLU3M=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3494825_v_v8_aa.jpg",
        genre: "Mystery & Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Yes Man (2008)",
        embedUrl: "https://short.icu/t7cMCuLhgk",
        posterUrl: "https://resizing.flixster.com/sz_QFCBYxkTCoSs-8gASiIHvFbc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p176708_v_v12_aq.jpg",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kick-Ass (2010)",
        embedUrl: "https://short.icu/gHtLXsXiQ",
        posterUrl: "https://resizing.flixster.com/HxmGmnkok3SnzmWkYb0_lPuBq3U=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7876199_p_v13_ao.jpg",
        genre: "Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kick-Ass 2 (2013)",
        embedUrl: "https://short.icu/cZXYXDfGU",
        posterUrl: "https://resizing.flixster.com/OUKXH7irJ2JBNkGol5ticI6JFYI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/124545/124545_ab.jpg",
        genre: "Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Grown Ups (2010)",
        embedUrl: "https://short.icu/he21tzJtA",
        posterUrl: "https://resizing.flixster.com/q2GBacvPiVYKOogjRRlr4XGEwaU=/fit-in/705x460/v2/https://resizing.flixster.com/-2oUrQzhCd9USHjfVyUQcCdCpFs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdiMGU4ZmRkLTYxNTktNDg1Yy1hMGJiLTY5OTE4OWNhNThjMi53ZWJw",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Gulliver's Travels (2010)",
        embedUrl: "https://short.icu/zYoLpxbGE",
        posterUrl: "https://resizing.flixster.com/I7TZJX98UpWCMoY2MG23pFnyG4g=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8149619_p_v13_an.jpg",
        genre: "Kids & Family, Comedy, Adventure, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Buried (2010)",
        embedUrl: "https://short.icu/qu8rmAJWX",
        posterUrl: "https://resizing.flixster.com/XUGj0MuZwqz--GX6KxrdtR9lkYs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8006445_v_v8_ao.jpg",
        genre: "Kids & Family, Comedy, Adventure, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Green Hornet (2011)",
        embedUrl: "https://short.icu/iK5Y5TS45",
        posterUrl: "https://resizing.flixster.com/8SSILVvlIJOyKYYLONxJqbtzqhc=/fit-in/705x460/v2/https://resizing.flixster.com/4uMjFln5vtnUZInnsJ_N7tDjNiA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzljNmJhY2IzLWMxNmItNDkwYi1hOWM2LWY5NTkxNGI0Nzk1My5qcGc=",
        genre: "Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ricky Stanicky (2024)",
        embedUrl: "https://short.icu/pXxztjTci",
        posterUrl: "https://resizing.flixster.com/wifStfo_a3kyXTVuHgLKAh_l6CM=/fit-in/705x460/v2/https://resizing.flixster.com/SsAZOs8PJtG9M3RLBEVJslhkEcI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U1NzgwY2Q5LWRiMjktNGE3YS1hNTc3LWRhYmVjODBmMTk2Yi5wbmc=",
        genre: "Comedy, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sisu (2023)",
        embedUrl: "https://short.icu/QepdpwUtt",
        posterUrl: "https://resizing.flixster.com/aGYhxO8zaVP_-KaX-tKRPwgIXF0=/fit-in/705x460/v2/https://resizing.flixster.com/LUMlPb01hdWx1gtuOyg1fs2kMyI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M0NjVmNThhLTI3MDctNDkwOS1iZDA4LTE1YmQwODE3Yzc1Ni5wbmc=",
        genre: "Action, War",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sisu: Road to Revenge (2025)",
        embedUrl: "https://short.icu/bT417Y_QC1",
        posterUrl: "https://resizing.flixster.com/A348hcWpSw3zDtnvsxRYF9a9PqU=/fit-in/705x460/v2/https://resizing.flixster.com/-5RKPajk2qRnkGkQ1o98ArSkp5Y=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJhZmU5M2RjLWNjYWUtNDkxMC1iNGY4LTVkM2U3NjhlMGIxMi5qcGc=",
        genre: "Action, War, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jackpot! (2024)",
        embedUrl: "https://short.icu/uFd86YeSf",
        posterUrl: "https://resizing.flixster.com/Lok_NaUz1dHXtydJmMXLLzFIYkI=/fit-in/705x460/v2/https://resizing.flixster.com/cJ-ZXvAojFDjeYi1VwAIOX2CNSE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EwMDgwMjUwLTQwMGYtNGViMi05MTEyLTAzMDYxMTkxZTI4ZS5qcGc=",
        genre: "Comedy, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "About Time (2013)",
        embedUrl: "https://short.icu/16cdN0lKV",
        posterUrl: "https://resizing.flixster.com/2r1PvmGjAudchMrV0kSwFn7hfIo=/fit-in/705x460/v2/https://resizing.flixster.com/3tN2qJwa7jO7xbjGwg9-zV5A8m0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNlYzFhM2I4LWMzNDAtNDhlYy05MzIwLWZhYTEzYWY0YmRmNy53ZWJw",
        genre: "Romance, Comedy, Fantasy, Drama, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bug (2007)",
        embedUrl: "https://short.icu/m0KktsGYw",
        posterUrl: "https://resizing.flixster.com/kxqUSDvPOjyoYt2dDsCKNrDHnEQ=/fit-in/705x460/v2/https://resizing.flixster.com/GM_mQdTgYP7clw7SRAeMTYcvzHQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2UxZWE5MjRkLTYzZGItNDAzMC1hN2MzLWE4MDcyYjBmY2M3Zi53ZWJw",
        genre: "Drama, Mystery & Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Identity (2003)",
        embedUrl: "https://short.icu/oFP-2qB_l",
        posterUrl: "https://resizing.flixster.com/Z7jK9YdrS1sUn7H8OeR9X_82bs4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31147_p_v8_ag.jpg",
        genre: "Mystery & Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ready or Not (2019)",
        embedUrl: "https://short.icu/2lJXnFGX-",
        posterUrl: "https://resizing.flixster.com/wo31iwPzzig3Lzu75N3p_w4s9yQ=/fit-in/705x460/v2/https://resizing.flixster.com/4AQw7KZZEnT4KvWQvMoYuiGgRzE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJmNWQ2M2ZhLWJmN2EtNDBmYi1hNTJhLTI1NTNlODkxZDNiYi53ZWJw",
        genre: "Horror, Mystery & Thriller, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Timescape (2022)",
        embedUrl: "https://short.icu/35JpfYN1c",
        posterUrl: "https://resizing.flixster.com/699arJNoptItrkqLrDxZFWHpHBs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22777328_v_v13_ab.jpg",
        genre: "Sci-Fi, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Brothers Grimsby (2016)",
        embedUrl: "https://short.icu/urmROXqNg",
        posterUrl: "https://resizing.flixster.com/JJPbYPlzxxbsNDzKXUIB-fa6sV0=/fit-in/705x460/v2/https://resizing.flixster.com/cE6nzkDzOu5Sn4-CwBQmjKh1T9s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJjNjQ2ZDNiLTNhMjAtNGU3Ni1hMDA1LTlmYTU0MDM1NGRkMS53ZWJw",
        genre: "Comedy, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Truth or Dare (2018)",
        embedUrl: "https://short.icu/AzPQ74Y1z",
        posterUrl: "https://resizing.flixster.com/lrWGz39l_BUE6hTdfeGCu5Vk1Ig=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14814469_v_v8_ad.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Three Thousand Years of Longing (2022)",
        embedUrl: "https://short.icu/2EyS5m1Ux",
        posterUrl: "https://resizing.flixster.com/Ui4tvPFo2zg2Ar4XE9eRdZJySt0=/fit-in/705x460/v2/https://resizing.flixster.com/6e6GoR_5a8SsCzJbKR3lO4Q1YO8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgxZDgxYTgxLWRhNGItNDJkMy1hNzNmLTg5ODAwYzg0MGRkOC5qcGc=",
        genre: "Fantasy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Toxic Avenger (2025)",
        embedUrl: "https://short.icu/J4HXUMM98",
        posterUrl: "https://resizing.flixster.com/6jVyZG4bsPJU2nY-Xry36kfaNmM=/fit-in/705x460/v2/https://resizing.flixster.com/k7Fjk9oDjqwXC0mBv4hXfGCAl2w=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE5YTI1YzJlLWI1OTItNDIyNy04ZTY5LTFjMWY0MmMyYmM5YS5qcGc=",
        genre: "Action, Comedy, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Platform (2019)",
        embedUrl: "https://short.icu/kE6M2bjWj",
        posterUrl: "https://resizing.flixster.com/M08F58ohDSyC0hcf6zpQ1inEqQs=/fit-in/705x460/v2/https://resizing.flixster.com/XwTNbjwSHIWCpRygYzSgcGgxivE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUzMzNmMjRjLTc2YzgtNGRhMS1hMDJkLTM1MjZmYzQ4OGFjZi53ZWJw",
        genre: "Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Platform 2 (2024)",
        embedUrl: "https://short.icu/zXZN1z3er",
        posterUrl: "https://resizing.flixster.com/UD86l3TyZiSgSOOVwa-ZeySNN6E=/fit-in/705x460/v2/https://resizing.flixster.com/TA64-K5eFkZKHwrYfQpjdRsg5DA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU3NjE2ZjEzLWI4NTktNDQ4Zi04YTVlLWUxODYwMWJiZTM4NS5qcGc=",
        genre: "Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Would You Rather (2012)",
        embedUrl: "https://short.icu/LWEZHxcf9_",
        posterUrl: "https://resizing.flixster.com/vBtV-N39tfBTkRrxCfgNYa5jHiQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9712918_p_v8_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Meander (2021)",
        embedUrl: "https://short.icu/ZVPDxvRb4",
        posterUrl: "https://resizing.flixster.com/JGTBrvu-wzzNXpoj_E0Nz0YE2mc=/fit-in/705x460/v2/https://resizing.flixster.com/Db8d3R-eoO5a3MREg-N4slaV_ww=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc4Zjg3YmVjLTkzZjktNDgxZC05MTJkLTFlYjlhOWFjMjQ2My5wbmc=",
        genre: "Horror, Sci-Fi, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "In Time (2011)",
        embedUrl: "https://short.icu/J-Ye5nlc7",
        posterUrl: "https://resizing.flixster.com/MTJlkrK5Y6iboOzR9RRhsf12jzw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8640610_p_v8_ae.jpg",
        genre: "Sci-Fi, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fall (2022)",
        embedUrl: "https://short.icu/IH9Y2RTEf",
        posterUrl: "https://resizing.flixster.com/kJsa4OXtsAz9qIoBJfBnAX3e2vs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22397104_v_v10_aa.jpg",
        genre: "Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Evil Nun (2025)",
        embedUrl: "https://short.icu/oUf_JP2o3j",
        posterUrl: "https://resizing.flixster.com/Rcs_EpQFENdAyIFQsjW6aFyYqas=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30876397_v_v13_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Devil (2010)",
        embedUrl: "https://short.icu/10lWXO8NQ",
        posterUrl: "https://resizing.flixster.com/SLZQ40QecuzoNYiifaLfdqQllVI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8193232_p_v8_as.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mirrors (2008)",
        embedUrl: "https://short.icu/ZIJD0938y",
        posterUrl: "https://resizing.flixster.com/9UHzy0SgqR6MiGntvT_Geq4KwLQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p179490_v_v8_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Boss Level (2021)",
        embedUrl: "https://short.icu/pyixkdPrf",
        posterUrl: "https://resizing.flixster.com/bozfrK6oV3gKcUv3iUzKzDKOsUs=/fit-in/705x460/v2/https://resizing.flixster.com/MsNQktP_hfutKgD4mqzpH_C1fio=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M0NGFhM2JiLTMwMjYtNDQzNS1hOTFjLTk1MTY0NWRjN2YxMi5qcGc=",
        genre: "Action, Mystery & Thriller, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Project Power (2020)",
        embedUrl: "https://short.icu/PDVedV1FN",
        posterUrl: "https://resizing.flixster.com/KhL3Ddtkp9HLGQHbN2xCwUKWWnE=/fit-in/705x460/v2/https://resizing.flixster.com/aaAX988Q4hp-w-MvT1XYwG8aNgw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk3NGRjYTA2LTZiNzAtNGNkMS1hMjAxLTEzMTk3MzA0MGY1OC53ZWJw",
        genre: "Action, Mystery & Thriller, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Influencers (2025)",
        embedUrl: "https://short.icu/Rm3ZvNPjr",
        posterUrl: "https://resizing.flixster.com/Ao6gJaIAVQFlf4fwc3BMQcK5CB0=/fit-in/705x460/v2/https://resizing.flixster.com/dWYQcOVyujJ_N19JbbajVCSxUQQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU5OTVmN2NhLTc0NDMtNGQ0Mi05YzlmLTc3M2IyNzAwOGYwNy5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Follow Me (2024)",
        embedUrl: "https://short.icu/8bG7Az9gH",
        posterUrl: "https://resizing.flixster.com/Uy0Li0hh0WuZ7XKP_XD0lORFxDU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29078428_v_v8_aa.jpg",
        genre: "Mystery & Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Americana (2025)",
        embedUrl: "https://short.icu/9OtyQf8JQ",
        posterUrl: "https://resizing.flixster.com/bPjCap1quRjMWIq0Qs8vygkUG-Q=/fit-in/705x460/v2/https://resizing.flixster.com/HTU5Prd8ZHIbV3OpepxTF5REZFA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I1NjA0YzJkLTVkMDUtNGU5NC1hMTgyLTljYmUxYTQ3ZWIwZC5qcGc=",
        genre: "Mystery & Thriller, Crime, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Triple 9 (2016)",
        embedUrl: "https://short.icu/1xSZWm-Ut",
        posterUrl: "https://resizing.flixster.com/HcflUiakVM0iH2ig0Ixi2uWUVdk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11659557_p_v8_ax.jpg",
        genre: "Crime, Drama, Mystery & Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Final Destination (2000)",
        embedUrl: "https://short.icu/8dr-IUHyH",
        posterUrl: "https://resizing.flixster.com/MgSHYerA_X0zmhFYGjMwq_yZu3k=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25022_v_v13_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Final Destination 2 (2003)",
        embedUrl: "https://short.icu/RZn5-ZmF7",
        posterUrl: "https://resizing.flixster.com/04iWn3QZnALzzdot4MbpqGaksDw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31359_p_v8_af.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Final Destination 3 (2006)",
        embedUrl: "https://short.icu/8uA17w6yX",
        posterUrl: "https://resizing.flixster.com/4XoqeFaX9q_BTmUejRyNYNJ4_dc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159765_v_v12_af.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Final Destination 4 (2006)",
        embedUrl: "https://short.icu/i1Z77X1b8",
        posterUrl: "https://resizing.flixster.com/OCJCmBF091-IAi3BnhJ2DigarKc=/fit-in/705x460/v2/https://resizing.flixster.com/l1fvK3W_p2AOgJ_6J0df9evjNSA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzcxZGFiNDk5LWU3NWMtNDI3OS1hOTZjLTQxYjdhZDJjOTZlZC53ZWJw",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Final Destination Bloodlines (2025)",
        embedUrl: "https://short.icu/VTnH_X5DK",
        posterUrl: "https://resizing.flixster.com/RFcYH_8xIdaOUFIVQVd-wtgWfH4=/fit-in/705x460/v2/https://resizing.flixster.com/fMPxFfapy9bIhXUyUqJ1d7hrpNM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U0MTFhZjkyLTBkM2YtNGNlNC04NmFiLTBkZjBiOTFjNjRhNy5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Automata (2014)",
        embedUrl: "https://short.icu/eSlZOHmTt",
        posterUrl: "https://resizing.flixster.com/sgBt4QDZXe0-AkRB-Xl4NSoea04=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10971391_p_v12_aj.jpg",
        genre: "Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fortune Cookie (2016)",
        embedUrl: "https://short.icu/e8uZruhUy",
        posterUrl: "https://resizing.flixster.com/Y_v7Os7Dkot0uL6pvR1bLcGI37U=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12757533_v_v8_ab.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "I, Frankenstein (2014)",
        embedUrl: "https://short.icu/R-TeN2aFK",
        posterUrl: "https://resizing.flixster.com/zHLdKi-FaZBXSoHW_xXrLVYnJ7I=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9366650_p_v8_ak.jpg",
        genre: "Fantasy, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Godzilla Minus One (2023)",
        embedUrl: "https://short.icu/EiF_a1cgq",
        posterUrl: "https://resizing.flixster.com/h7kKZuLbKmh3K7x_9rb_vFoZYHw=/fit-in/705x460/v2/https://resizing.flixster.com/CDYB6aGzmamA9BCmveGRQ880KRs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk5MmIwMzZiLWU2ZGMtNDU4NC04YTYxLTA3YmRlMDVkYjI3YS5qcGc=",
        genre: "Sci-Fi, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Click (2006)",
        embedUrl: "https://short.icu/ED_tlt35N",
        posterUrl: "https://resizing.flixster.com/VYSGIx1C-mvv8ZbB39L6HRxqvU4=/fit-in/705x460/v2/https://resizing.flixster.com/Vr2hkMVMv0isLrN7uyu9RSiqRAg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI0NTY5NmIyLTEwYmYtNDQ5ZS04YWJhLTdjZDliYTkwYzExZS53ZWJw",
        genre: "Comedy/Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sorority Row (2009)",
        embedUrl: "https://short.icu/MzbXjnoD6",
        posterUrl: "https://resizing.flixster.com/Ioq4lVLS_j27Eu6fFbhsKWgT-3k=/fit-in/705x460/v2/https://resizing.flixster.com/G_U7cn6oxDLoVLx43H4RvjLRfrA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYzOWFiZjVhLTBiYWYtNDU3Zi05NDY4LTIxYjlkMzUwMzU3My53ZWJw",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Indecent Proposal (1993)",
        embedUrl: "https://short.icu/kWf58jk30E",
        posterUrl: "https://resizing.flixster.com/KiOJr6TR5XasqD8-V39ALIbAvbc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14700_v_v7_aj.jpg",
        genre: "Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bionic (2024)",
        embedUrl: "https://short.icu/CDyvkotZ9",
        posterUrl: "https://resizing.flixster.com/kQAes62LCTgNMAEA_CaEm0zy094=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27284135_v_v10_aa.jpg",
        genre: "Sci-Fi, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hansel & Gretel: Witch Hunters (2013)",
        embedUrl: "https://short.icu/Axcm6-F_g",
        posterUrl: "https://resizing.flixster.com/fV9vZ5jORFMtf6GQZ_573g2c77E=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8869378_p_v8_ab.jpg",
        genre: "Fantasy, Horror, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hostel (2005)",
        embedUrl: "https://short.icu/x58ITSCYoB",
        posterUrl: "https://resizing.flixster.com/FXkzdqPtEVkbFh2CP3cs1r7nJWw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p160256_p_v8_ad.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hostel Part II (2007)",
        embedUrl: "https://short.icu/NdnMf2YVh",
        posterUrl: "https://resizing.flixster.com/kDZdzCVR9EYU4kqBrbbBVsa0iBc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162784_p_v8_aa.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hostel Part III (2011)",
        embedUrl: "https://short.icu/jrKZrWhRl",
        posterUrl: "https://resizing.flixster.com/jeq9WYe5Way73ZVPPjvvxKWO8kk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8955467_p_v8_aj.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Nocturnal Animals (2016)",
        embedUrl: "https://short.icu/696uhHoAI",
        posterUrl: "https://resizing.flixster.com/q3vxwMzeVzwZV04pTFdxpzPn8v8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12934420_p_v8_aj.jpg",
        genre: "Mystery & Thriller, Crime, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Great Wall (2017)",
        embedUrl: "https://short.icu/L3DSjvhYsK",
        posterUrl: "https://resizing.flixster.com/tCCwGu0p2hk6LFv-MMu148uAigY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12962840_v_v8_aj.jpg",
        genre: "Adventure, Action, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Troll 2 (2025)",
        embedUrl: "https://short.icu/R5XnMgi4Uj",
        posterUrl: "https://resizing.flixster.com/nY7FpRZLdD7t2aFzRtmFnoZ1hBo=/fit-in/705x460/v2/https://resizing.flixster.com/ekLCmODDUjN90ta_n8qe-hz0pf4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZhZDcyMDc4LTAwZDMtNDAyMy04MTg3LWQ5Mzc5OTY5ODhjOC5qcGc=",
        genre: "Action, Adventure, Fantasy, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Get Out (2017)",
        embedUrl: "https://short.icu/GOr9rLwba",
        posterUrl: "https://resizing.flixster.com/E0r-pRbt6a7keDFRQsxeaADPor8=/fit-in/705x460/v2/https://resizing.flixster.com/6s3OX-xIrC2acov-ekcQnL4q7dU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2QyYjAzYTIzLTZmMzItNGEzMi04N2NkLWU5MWE1ZWIwMjllMC53ZWJw",
        genre: "Horror, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Until Dawn (2025)",
        embedUrl: "https://short.icu/45NQLjDsv",
        posterUrl: "https://resizing.flixster.com/_pLgwdHEMD9rekUuG9vw1hWNxGM=/fit-in/705x460/v2/https://resizing.flixster.com/4piFgrjX_dbjitE78ILbti9RWZs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY3ZWI3ZWI0LTJkNTYtNGViZC05NjIxLTY4Y2NkYTViOGE1Mi5qcGc=",
        genre: "Horror, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Girl in the Basement (2021)",
        embedUrl: "https://short.icu/0kjfjovMD",
        posterUrl: "https://resizing.flixster.com/-HvzcxSwTm0X3RotY5k-UoW1MeE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19348950_v_v8_aa.jpg",
        genre: "Crime, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Abigail (2024)",
        embedUrl: "https://short.icu/02bHEGLZaf",
        posterUrl: "https://resizing.flixster.com/XnZGCf8xC53vXEGLCsNVoIVqLvc=/fit-in/705x460/v2/https://resizing.flixster.com/_3auZfilUqYm0D5ahozuLUmwTc4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIxNWM1ZmNmLTlmZmMtNDU1ZC05MTQ4LTdlODA2OGMwYzgyMC5qcGc=",
        genre: "Horror, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Collection (2012)",
        embedUrl: "https://short.icu/hgDvokozg",
        posterUrl: "https://resizing.flixster.com/1bRViufyLxqnqKuh7OIfqMvHO4M=/fit-in/705x460/v2/https://resizing.flixster.com/2L3zENoEnJLYgAWYnamoVsbx3Ww=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzliNzgyYzkxLTI0NmUtNDA1Zi1iNmZjLWI2MDU3NTU2ZDczMC53ZWJw",
        genre: "Horror, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Abigail (2019)",
        embedUrl: "https://short.icu/85uYJN0B8",
        posterUrl: "https://resizing.flixster.com/8mSlhF3ZvfM5Cusb7R_pLJDeJRk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17651383_v_v12_ah.jpg",
        genre: "Action, Adventure, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jumper (2008)",
        embedUrl: "https://short.icu/3SAweJorz",
        posterUrl: "https://resizing.flixster.com/DS331-Z3V0nEWDCy99Gnc5oW8Yo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p173063_v_v8_an.jpg",
        genre: "Sci-Fi, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Darkest Hour (2011)",
        embedUrl: "https://short.icu/b7jtBhysZ",
        posterUrl: "https://resizing.flixster.com/n3mujIaU2SN7g1nnit4oclo6ljA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8554321_v_v8_am.jpg",
        genre: "Sci-Fi, Action, Mystery, Thriller, Adventure, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Island (2005)",
        embedUrl: "https://short.icu/Pgr4rDa1n",
        posterUrl: "https://resizing.flixster.com/ioojB3CUbMLotLDAAbQNmqwWLoA=/fit-in/705x460/v2/https://resizing.flixster.com/4at0UP8NFNcbxMW6OMlVULyELtk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc0MjJhMzIxLTQ1ZTMtNDUwOC04YTBiLTAxNWRmMGMwYzZjOS5qcGc=",
        genre: "Sci-Fi, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bram Stoker's Dracula (1992)",
        embedUrl: "https://short.icu/9LxZhEBln",
        posterUrl: "https://resizing.flixster.com/whyoNd4bCapoQ1xuQCWQVyId_8s=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/2398/2398_ag.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ex Machina (2015)",
        embedUrl: "https://short.icu/mRc-52ylZ",
        posterUrl: "https://resizing.flixster.com/MS2iIvltp5ld-0d57Hf6OFuxshk=/fit-in/705x460/v2/https://resizing.flixster.com/9GJLahPUxkDXZKzbroBYY13Y-lc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MyYmMyNTMwLWYxMTQtNDdlMC1iMzVlLTJiMzQ1MjRiMzE5ZC53ZWJw",
        genre: "Sci-Fi, Mystery & Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Keeping Up With the Joneses (2016)",
        embedUrl: "https://short.icu/lCLyA3gvY",
        posterUrl: "https://resizing.flixster.com/vT29btvHyqI4Vo3ZJGs_L4QDHUA=/fit-in/705x460/v2/https://resizing.flixster.com/enyNUpCEZd2MDKeAYbduq-vyyOc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZlMjcxOTJiLTVkZDktNDE1ZS05YjBlLTdjYjA4ZTQ2Njc4OC53ZWJw",
        genre: "Comedy, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Neighbors (2014)",
        embedUrl: "https://short.icu/ZLyh0WRyK",
        posterUrl: "https://resizing.flixster.com/_LCVhqpNVbM3PCG5cXp7cqmJngg=/fit-in/705x460/v2/https://resizing.flixster.com/G3ExytWFaXkErvz2RF0YDyiCuQQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M3Yzc1MDYyLWRkMmQtNDg1My1iZDJmLWEzN2YxZWQ3NTYyZC53ZWJw",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Neighbors 2: Sorority Rising (2016)",
        embedUrl: "https://short.icu/a-1hpyncf",
        posterUrl: "https://resizing.flixster.com/UFFbXbhtaoNpN2Ih5HWMkOlcGdk=/fit-in/705x460/v2/https://resizing.flixster.com/pfAG6SMt3hhXRLZJnPuJttRw6ts=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyNDA1ZWUzLTY4MjctNGQ2Ni1iNjZkLTIwY2M2OGVkNWY0MS53ZWJw",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Abandon (2024)",
        embedUrl: "https://short.icu/qqB3J3XYb",
        posterUrl: "https://resizing.flixster.com/Zp5KfCbZKmIPKuzol_RZJOHla28=/fit-in/705x460/v2/https://resizing.flixster.com/EPdPR_81mfKeuR6ILtB6ka94rB8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyN2E3YTJkLTg5YTAtNDVlYi1iYmIwLTcyYjJhNGVmMTFiYi5qcGc=",
        genre: "Sci-Fi, Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Percy Jackson: Sea of Monsters (2013)",
        embedUrl: "https://short.icu/KGyKtRTiZ",
        posterUrl: "https://resizing.flixster.com/3vLGGhnqc-8gK5FO8oEr8mJknEg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9756823_v_v12_as.jpg",
        genre: "Kids, Family, Adventure, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Mummy (1999)",
        embedUrl: "https://short.icu/UCxkEXR4D",
        posterUrl: "https://resizing.flixster.com/UUpS7g8WARuyW7OTwa-RM2SAlog=/fit-in/705x460/v2/https://resizing.flixster.com/V5gQiOpTjrb0JLfyVP2Dyum9i_8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJlYWI5MjcxLTE5NDctNDc4OC05ZGI2LWFmODE4YzAyZmRkNC5qcGc=",
        genre: "Adventure, Action, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Mummy Returns (2001)",
        embedUrl: "https://short.icu/AhoP710FM",
        posterUrl: "https://resizing.flixster.com/y0X4V_v32QfeA0MrAl7fEEsphS4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27207_p_v13_an.jpg",
        genre: "Adventure, Action, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Mummy: Tomb of the Dragon Emperor (2008)",
        embedUrl: "https://short.icu/4tGKU5FWw",
        posterUrl: "https://resizing.flixster.com/v2KdbAE1Xwo6upYPvdvRQvQol84=/fit-in/705x460/v2/https://resizing.flixster.com/iear3hBLKCpIZUo5MNAzXVY7KOE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ5YWZkNDM0LWY0YTQtNDMwYy04NmQzLTc1NzE0ZGY2YTMwMC53ZWJw",
        genre: "Adventure, Action, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Men in Black (1997)",
        embedUrl: "https://short.icu/o5E3ccNL9",
        posterUrl: "https://resizing.flixster.com/xSZ104_zuJ1ltDkv3OZg3EcSLoY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19526_p_v8_au.jpg",
        genre: "Sci-Fi, Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Men in Black 2 (2002)",
        embedUrl: "https://short.icu/RBN41b4G-",
        posterUrl: "https://resizing.flixster.com/MUVCFO3flLgT1dElNWXt9cIY_r4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29160_v_v8_ak.jpg",
        genre: "Sci-Fi, Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Men in Black 3 (2012)",
        embedUrl: "https://short.icu/P6JEDZHaV",
        posterUrl: "https://resizing.flixster.com/C9fTQ86k0K5vGYNvn0Ivcl_OQh4=/fit-in/705x460/v2/https://resizing.flixster.com/MPR6QYPMAtKclbrGE7p8awRoHDc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAyMDI4YTQ5LWYwNjctNGQ2Mi1hMTI5LTllY2IxYmMwOWQ5MS53ZWJw",
        genre: "Sci-Fi, Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Brick (2025)",
        embedUrl: "https://short.icu/lfTOZ5CEE",
        posterUrl: "https://resizing.flixster.com/-3aHiscPeIm_xpGwrfQUaGBXUG0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30465441_p_v7_aa.jpg",
        genre: "Mystery, Thriller, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "World War Z (2013)",
        embedUrl: "https://short.icu/NiUVBbd6K",
        posterUrl: "https://resizing.flixster.com/yDroNrC0-rpnnfrF7HoROATit_4=/fit-in/705x460/v2/https://resizing.flixster.com/jJZr44RlalP5udBb60YHfOpN0m4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFiYjQyYWViLTVlNjItNDg1My1hZDg1LWNhOGRiNDM4ZjI5OC53ZWJw",
        genre: "Horror, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "I Am Number Four (2011)",
        embedUrl: "https://short.icu/1Cx00eHLD",
        posterUrl: "https://resizing.flixster.com/_tZHg_dVUvtZDgG7Jy1r7Aby1ic=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8329406_p_v8_ad.jpg",
        genre: "Action, Sci-Fi, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "A Thousand Words (2012)",
        embedUrl: "https://short.icu/_zZftwm0s",
        posterUrl: "https://resizing.flixster.com/kDKQ0DesRipOINC7tEQma0wwsfQ=/fit-in/705x460/v2/https://resizing.flixster.com/ZhADYt_A2MKCULihDA2PGSWXHEo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc3MjYyZjY3LTcwOTktNDI0Ni05ZGI1LTEyMGJiOTE1NWU0ZS53ZWJw",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Skeleton Key (2005)",
        embedUrl: "https://short.icu/ejeI6DQYm",
        posterUrl: "https://resizing.flixster.com/szwbPnH4gRb0zZsNO1YXfUvhWaU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p36172_v_v8_ai.jpg",
        genre: "Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Frequency (2000)",
        embedUrl: "https://short.icu/-jFhx2c9v",
        posterUrl: "https://resizing.flixster.com/dpY0pfwPcII7St0xqyYfznHVSzY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25233_k_v8_ab.jpg",
        genre: "Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Running Man (2025)",
        embedUrl: "https://short.icu/Y3UzN0PY7",
        posterUrl: "https://resizing.flixster.com/Ittm7tGMZ7Br4fh44qSSET411n8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30176893_v_v9_ad.jpg",
        genre: "Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Truman Show (1998)",
        embedUrl: "https://short.icu/7G5_ILDPE",
        posterUrl: "https://resizing.flixster.com/O8yLZad4vGettWYLRqJhHoMdYvw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20974_v_v8_aj.jpg",
        genre: "Comedy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Wake Up Dead Man: A Knives Out Mystery (2025)",
        embedUrl: "https://short.icu/H-lcyb59Q",
        posterUrl: "https://resizing.flixster.com/bwUSJAQmlYRibnNhJGHDt5ZgIu8=/fit-in/705x460/v2/https://resizing.flixster.com/cRBFRr5H-cnjivNJctQASgb5TxY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzljZDQ2NTBkLTFjNTgtNDUxMy04OThlLTM4M2E3ZDI5ZTZmNy5qcGc=",
        genre: "Mystery & Thriller, Comedy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Gods of Egypt (2016)",
        embedUrl: "https://short.icu/7n30Be3qL",
        posterUrl: "https://resizing.flixster.com/5sP1G-28jQz81rgNziVe_87kz5Q=/fit-in/705x460/v2/https://resizing.flixster.com/unfx68wxFvM6DXhzkON0d4AXrA4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc2ZjY3N2EwLTAyNTctNDM3Yy05NzlhLTJkM2ZlOWE0ZjM4YS53ZWJw",
        genre: "Fantasy, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dungeons & Dragons (2000)",
        embedUrl: "https://short.icu/GEwF4Cewh",
        posterUrl: "https://resizing.flixster.com/Qciv7vH3DvT8AqnpIBIih6JArTE=/fit-in/705x460/v2/https://resizing.flixster.com/HebuM3lXoaikQEB6e7-KJn6_XVM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZlOTE2NzFhLTM1NTItNGExOC1hOWVhLTA1MmZmZGJiZTRkNS53ZWJw",
        genre: "Fantasy, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dungeons & Dragons: The Book of Vile Darkness (2012)",
        embedUrl: "https://short.icu/Q66UYy9d8",
        posterUrl: "https://resizing.flixster.com/YN0hgt5odj6_IOsorarYgOnzjC8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9456996_v_v8_ab.jpg",
        genre: "Fantasy, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dungeons & Dragons: Honor Among Thieves (2023)",
        embedUrl: "https://short.icu/4glAWw1y4",
        posterUrl: "https://resizing.flixster.com/evbZUy_hdd4k9bqOctKy31Fc9vI=/fit-in/705x460/v2/https://resizing.flixster.com/9pj24iW0EwuTzXIMVBcwc5cEeFk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU3ZGI4NjEyLTFmMmUtNGJlMS1iMjY4LTVkOTU3YzUwZDg2MS5qcGc=",
        genre: "Fantasy, Adventure, Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Damsel (2024)",
        embedUrl: "https://short.icu/S5BYzRFoZ",
        posterUrl: "https://resizing.flixster.com/dn8wvVzyLAbCDVZ0erZNtpJ8eH0=/fit-in/705x460/v2/https://resizing.flixster.com/P3ITKQPm33gw4K73O9DYCOfyZ4E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ1Zjg4NDFhLWMxY2EtNDU3NC04OTNmLTQ4MTJiMzc3Y2EwZC5qcGc=",
        genre: "Fantasy, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Snow White and the Huntsman (2012)",
        embedUrl: "https://short.icu/KNdNIHDUL",
        posterUrl: "https://resizing.flixster.com/M9Tvppqy7kN-7Wpht5XC9knXfI4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8687906_p_v8_bf.jpg",
        genre: "Fantasy, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Total Recall (2012)",
        embedUrl: "https://short.icu/D2qvOsUz1",
        posterUrl: "https://resizing.flixster.com/BApx28oxAYvscYM0wLWgvhQn47Y=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8774994_v_v8_aa.jpg",
        genre: "Sci-Fi, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Green Knight (2021)",
        embedUrl: "https://short.icu/ylxoEuAsR",
        posterUrl: "https://resizing.flixster.com/FC96-qdrIXzpAr1EelKHkMXVa0U=/fit-in/705x460/v2/https://resizing.flixster.com/jdxFqtou2Vvgsi6yicMdE-3m49I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU1MTI1ZjA3LWM0NjgtNDc4ZS1iNzExLTYxZmZlYjE1MTFhMi5qcGc=",
        genre: "Fantasy, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Huntsman: Winter's War (2016)",
        embedUrl: "https://short.icu/uCOh-QfhC",
        posterUrl: "https://resizing.flixster.com/1XgIWySlVZdl6FmK3cIdA9BFnKQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10989432_v_v8_ac.jpg",
        genre: "Fantasy, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Talk to Me (2023)",
        embedUrl: "https://short.icu/8lwmfBLcc",
        posterUrl: "https://resizing.flixster.com/Br81tepqgr1h7m0eQmfa-K9MN5E=/fit-in/705x460/v2/https://resizing.flixster.com/9WxKriao1BmRamIaqig2k8hd5uM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyZDQwYTM2LWZmYzEtNGUwMC05NzRkLTA3ODM0NThiNDE4Ny5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Darjeeling Limited (2007)",
        embedUrl: "https://short.icu/Rmp6Jwjx-",
        posterUrl: "https://resizing.flixster.com/QLle61CgASG-Q-eFfO_XTZdIk0E=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p168522_v_v8_ae.jpg",
        genre: "Comedy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Predator (2018)",
        embedUrl: "https://short.icu/QOZrKAXZW",
        posterUrl: "https://resizing.flixster.com/6WAyQxyIWC4pyw5LwYHbCEytuA0=/fit-in/705x460/v2/https://resizing.flixster.com/RsoaOj9u3r5of5s23TunzpO_PCs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE2OGY5NjQwLWJmNzktNGJhOS1hMzdlLTY4MGYwNGVkZDEwYS53ZWJw",
        genre: "Sci-Fi, Horror, Mystery, Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Predators (2010)",
        embedUrl: "https://short.icu/Uf7Wn5_bJL",
        posterUrl: "https://resizing.flixster.com/fHS4S9iJ0d8TBV-p-chUO3xPXn4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8000437_p_v12_au.jpg",
        genre: "Sci-Fi, Horror, Mystery, Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Predator (1987)",
        embedUrl: "https://short.icu/DQ0Wj8RJG",
        posterUrl: "https://resizing.flixster.com/wM7DudUJ0zap1Er2p0oL4Uvs3dk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10094_v_v9_aa.jpg",
        genre: "Sci-Fi, Horror, Mystery, Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Predator 2 (1990)",
        embedUrl: "https://short.icu/bE2VVusdS",
        posterUrl: "https://resizing.flixster.com/ez1BNV2WOgoIG_qrJ79mAcKJpVQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12894_v_v13_am.jpg",
        genre: "Sci-Fi, Horror, Mystery, Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Alien vs. Predator (2004)",
        embedUrl: "https://short.icu/aUJCnfpBk",
        posterUrl: "https://resizing.flixster.com/OoxpGgu17fXIpK32QYpBUjhQHXU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p34715_v_v12_bd.jpg",
        genre: "Sci-Fi, Horror, Mystery, Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Aliens vs. Predator: Requiem (2007)",
        embedUrl: "https://short.icu/jfOk-aPwE",
        posterUrl: "https://resizing.flixster.com/J3IS8S2jgv9c7JIhP4vFpxjCfRI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170964_v_v10_as.jpg",
        genre: "Sci-Fi, Horror, Mystery, Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "No Escape Room (2018)",
        embedUrl: "https://short.icu/q0oCin8Pc",
        posterUrl: "https://resizing.flixster.com/O6ss0p3_EWjW65U9Ca1-rDtYoPw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15947177_p_v8_aa.jpg",
        genre: "Sci-Fi, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Legend of Ochi (2025)",
        embedUrl: "https://short.icu/-iVkc4gie",
        posterUrl: "https://resizing.flixster.com/XT1sb3sB-KQoef-vM_mjt-tZODQ=/fit-in/705x460/v2/https://resizing.flixster.com/b6r_tMs77-f327md-D20V-3iwCc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJiN2Q2YmRhLWJlOGQtNDE4NC1iNWI4LWNjMDMxMzQ4MGJiZi5qcGc=",
        genre: "Kids, Family, Sci-Fi, Fantasy, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Pickup (2025)",
        embedUrl: "https://short.icu/EBiuctPLw",
        posterUrl: "https://resizing.flixster.com/Zd-V-6y_4onEkYMAD2rY8Ro1W4A=/fit-in/705x460/v2/https://resizing.flixster.com/LLhaJgwJhSCd-d7h6J3RvsbNVxA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQxYmFmMGYzLWZhYWUtNDljZi04OGMxLTBmYWFkOWNjZTU3ZC5qcGc=",
        genre: "Action, Comedy, Crime",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "10 Cloverfield Lane (2016)",
        embedUrl: "https://short.icu/TNJmt_JC8",
        posterUrl: "https://resizing.flixster.com/G4igh3sseMHNH6ofLEd10e5n8vM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/158635/158635_ab.jpg",
        genre: "Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pandorum (2009)",
        embedUrl: "https://short.icu/9Px00p4t0",
        posterUrl: "https://resizing.flixster.com/i6f2DPOmZmimSYMkm5BZhVkGFGQ=/fit-in/705x460/v2/https://resizing.flixster.com/T1MOn5Z7Vl0-EY57nEva2UbfLRE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzkyYmI3ODk4LTJlNjYtNDRjMS1hYTJlLTQzNDU0MWQ5NDhiMC53ZWJw",
        genre: "Sci-Fi, Horror, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Visit (2015)",
        embedUrl: "https://short.icu/pvG8Fu_i9",
        posterUrl: "https://resizing.flixster.com/A_UV55zbhl2jHhEn505fjggCMPg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11659618_v_v8_ak.jpg",
        genre: "Comedy, Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Unbreakable (2000)",
        embedUrl: "https://short.icu/r-EAy1CWe",
        posterUrl: "https://resizing.flixster.com/CO2VOsHI4zisgkhJr0lLuhINZ_U=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26586_v_v11_as.jpg",
        genre: "Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hulk (2003)",
        embedUrl: "https://short.icu/NLtkJArOI",
        posterUrl: "https://resizing.flixster.com/d80i7OZQxXqYvbqr5M-ddu3WF_4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p32133_k_v8_aa.jpg",
        genre: "Fantasy, Action, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Avengers (2012)",
        embedUrl: "https://short.icu/v1LSr0Eqi",
        posterUrl: "https://resizing.flixster.com/2aTmFs_GhJhRTNlOX8QIEku00NA=/fit-in/705x460/v2/https://resizing.flixster.com/igvxmgSBdkzKu1Y4vAf6ls-A63A=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBiNGQxMDUxLWZmZWQtNDJjMy04MjIzLTk0MjVlZDczN2RhMi53ZWJw",
        genre: "Action, Adventure, Fantasy, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Marvels (2023)",
        embedUrl: "https://short.icu/jxIf0-FH_",
        posterUrl: "https://resizing.flixster.com/k0SCQRK7pWzRWe_y9ZeoM99t_Lc=/fit-in/705x460/v2/https://resizing.flixster.com/M017ThZ8ZrlD1lEJL56EOAXkW2w=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E2NTI2Y2ZlLTZlNGItNDIxMi1hZTI4LTgyOTIwOTNlMDU1OS5qcGc=",
        genre: "Action, Adventure, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Spider-Man: Far From Home (2019)",
        embedUrl: "https://short.icu/WYm29-7tB",
        posterUrl: "https://resizing.flixster.com/1L3GFHgDb269ooxmQzh8wV_SBEw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14569140_v_v12_ab.jpg",
        genre: "Action, Adventure, Fantasy, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Captain Marvel (2019)",
        embedUrl: "https://short.icu/OozaEmpLv",
        posterUrl: "https://resizing.flixster.com/Gz1V4RVTfQ-bV7ic6-a-f0XWsho=/fit-in/705x460/v2/https://resizing.flixster.com/IATaLQOAfVzJ-wfnzriXuACjmgU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU5ZjVjZTkzLTkwYjEtNDI5My04ZTY0LWMwNGMzM2M0MmYwOS53ZWJw",
        genre: "Action, Adventure, Sci-Fi, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Thor: The Dark World (2013)",
        embedUrl: "https://short.icu/Dg6BhJwFO",
        posterUrl: "https://resizing.flixster.com/0kpy6MeOiJnJ-_3MNJ-of5uKDms=/fit-in/705x460/v2/https://resizing.flixster.com/nHirr4j3jyKO71dRU-JrUmgm750=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5MWU1NGEwLWI5OWEtNDFjZC04YzE3LWY3MDBhZTkxOTU0OC53ZWJw",
        genre: "Action, Adventure, Sci-Fi, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Captain America: The First Avenger (2011)",
        embedUrl: "https://short.icu/Rdw16tyVR",
        posterUrl: "https://resizing.flixster.com/MpgqFikHNHv5bnyEu3y8vHmhzpM=/fit-in/705x460/v2/https://resizing.flixster.com/Jq0TOSAEXL0emaUV_g7fHXmIrIY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q1NDI3NTg2LWQwN2EtNGVhNS1iMTIzLTY4ZWQyZmVmNDZmYi53ZWJw",
        genre: "Action, Adventure, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Incredible Hulk (2008)",
        embedUrl: "https://short.icu/_JVMKgP1Q",
        posterUrl: "https://resizing.flixster.com/XpqKmO3bLEw7BW-qHypcveyfE3Y=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p176337_v_v8_ah.jpg",
        genre: "Action, Adventure, Sci-Fi, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Spider-Man: Homecoming (2017)",
        embedUrl: "https://short.icu/3-MRCNJRn",
        posterUrl: "https://resizing.flixster.com/Y1XdJaJQe519_f2K77yCpz87a18=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/161696/161696_ab.jpg",
        genre: "Action, Adventure, Fantasy, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Black Widow (2021)",
        embedUrl: "https://short.icu/AhJtyf459",
        posterUrl: "https://resizing.flixster.com/iDYo6mpIky5GMXsh_kJtGrQs4LA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16808418_v_v13_aj.jpg",
        genre: "Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Black Panther (2018)",
        embedUrl: "https://short.icu/i45xwOvMV",
        posterUrl: "https://resizing.flixster.com/JU-GYAm63mWQW4iw7wDxogkpvsw=/fit-in/705x460/v2/https://resizing.flixster.com/YCCyDaeZz74QyD95aLJN7iZdPXc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MxM2Q4YjBhLWU0ZGUtNGY2NS05ZDRmLTExYmVlOGM0NzIzYi53ZWJw",
        genre: "Action, Adventure, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ant-Man and The Wasp (2018)",
        embedUrl: "https://short.icu/as0F9B6ja",
        posterUrl: "https://resizing.flixster.com/Houj2KtwQN3eIh2R6QZ4kiLnxfc=/fit-in/705x460/v2/https://resizing.flixster.com/OQT-Iar3VPUPi_xSo6EWdx_RS38=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQyNTBjMzY2LWJiMTItNDc3YS04ZDFiLWFiYTcxNzM4NThlZC53ZWJw",
        genre: "Action, Adventure, Fantasy, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ant-Man and the Wasp - Quantumania (2023)",
        embedUrl: "https://short.icu/MwYm7QXNe",
        posterUrl: "https://resizing.flixster.com/G6KORM78-N3a_poFrf0i76eLoMo=/fit-in/705x460/v2/https://resizing.flixster.com/_0Mhf0W_vdhwlaqOaUDX6JiReKA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE0OGY2MTIxLTE1MDEtNDI5YS1hYzVlLWYyMzExYjBmZTlhMC5qcGc=",
        genre: "Action, Adventure, Fantasy, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ant-Man (2015)",
        embedUrl: "https://short.icu/qIpCjbzP5",
        posterUrl: "https://resizing.flixster.com/_qBTDgbx1oD2TiYtvw0hr_dT5hg=/fit-in/705x460/v2/https://resizing.flixster.com/ShVm2Zof1AHp1yP6iH2o8KWMU4Y=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQyZDRhMTY0LTg4MjQtNDUzNy1hOTZlLWQ5ZTczYzlhZGRiOS53ZWJw",
        genre: "Action, Adventure, Fantasy, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Captain America: The Winter Soldier (2014)",
        embedUrl: "https://short.icu/bVx8obJXJ",
        posterUrl: "https://resizing.flixster.com/A_GM1SniSqPRZS31vQPyOyx3cb8=/fit-in/705x460/v2/https://resizing.flixster.com/0CcKqiPAlAjfgjKkaVOitCwlYmQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY4NjQ3NDY3LTNhM2QtNDI2Yi1iM2NjLWJiM2Y4MDQ1NjE0NS5qcGc=",
        genre: "Action, Adventure, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Night School (2018)",
        embedUrl: "https://short.icu/YlrP7yeVU",
        posterUrl: "https://resizing.flixster.com/SHs_VNreJSgXr4H-Wqz7IwbbjKg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15354252_v_v8_ae.jpg",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jumanji: Welcome to the Jungle (2017)",
        embedUrl: "https://short.icu/ap5VnlIl_",
        posterUrl: "https://resizing.flixster.com/pNzvDxSa_upQaDPc_uhCwkbp8-M=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13499680_v_v8_bg.jpg",
        genre: "Adventure, Action, Comedy, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jumanji: The Next Level (2019)",
        embedUrl: "https://short.icu/1A9MmmJ4_",
        posterUrl: "https://resizing.flixster.com/F4LM1aLYg013DuAD-9dL1Q7gE-k=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15446613_p_v8_ac.jpg",
        genre: "Adventure, Action, Comedy, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jumanji (1995)",
        embedUrl: "https://short.icu/1J0_o22rV",
        posterUrl: "https://resizing.flixster.com/YHwyeuUyNgu3-RwljtIlSCBIV7c=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17458_p_v9_ab.jpg",
        genre: "Kids, Family, Fantasy, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fatherhood (2021)",
        embedUrl: "https://short.icu/pmQI2x8Y_",
        posterUrl: "https://resizing.flixster.com/vcNsGxiCsqu5TnLEXC2Zk5F_Oa4=/fit-in/705x460/v2/https://resizing.flixster.com/E-68ZkhTkk5qASwbX7Hex7haHfI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk2YmM1NTI5LTY5NGQtNDYyOC1iODMyLTQ5YjNhMGZhOTE5ZS5qcGc=",
        genre: "Comedy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "About Last Night (2014)",
        embedUrl: "https://short.icu/LmHcKJLIE",
        posterUrl: "https://resizing.flixster.com/rD-RujtVc12anepwGfe6VbApaQk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10172604_v_v12_aa.jpg",
        genre: "Romance, Comedy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ride Along 2 (2016)",
        embedUrl: "https://short.icu/U3stBwdet",
        posterUrl: "https://resizing.flixster.com/fv5RdaJ6xgQ3wpPP5wrBO9ZWOnU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11928727_v_v8_aa.jpg",
        genre: "Comedy, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Zathura (2005)",
        embedUrl: "https://short.icu/b40OK2Fld",
        posterUrl: "https://resizing.flixster.com/SwPXCgBfIibVFAwf22L4nWAAWuQ=/fit-in/705x460/v2/https://resizing.flixster.com/0q9KYv0c6RkDzBlekW5lDsiVAzw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MyMjBjNTAyLTFkOGQtNDM3Yi1iNGIyLThlOTQxZTVkMzNkNS53ZWJw",
        genre: "Kids, Family, Adventure, Sci-Fi, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Shawshank Redemption (1994)",
        embedUrl: "https://short.icu/LxAN6S8wQ",
        posterUrl: "https://resizing.flixster.com/dRe7WflwIRnRDNFYlT-7I4zWng0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_p_v12_at.jpg",
        genre: "Mystery, Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Green Mile (1999)",
        embedUrl: "https://short.icu/MZMaq5hUf",
        posterUrl: "https://resizing.flixster.com/U-hHa5kLjcARuDKSzYbATdaE0dw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24429_v_v8_bn.jpg",
        genre: "Drama, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Man From Toronto (2022)",
        embedUrl: "https://short.icu/vmMMVgZb9",
        posterUrl: "https://resizing.flixster.com/btEj6xKAotT9TXg5P1wsHwkyC-w=/fit-in/705x460/v2/https://resizing.flixster.com/l9sgEFGp8tyYpz5RYRDcVLC4roE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EyY2E4MjRkLTVhYWEtNDk3NC04ZTk4LTUwMmE2ZDQyNTQwMy5qcGc=",
        genre: "Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ride Along (2014)",
        embedUrl: "https://short.icu/EkQO-j3Wl",
        posterUrl: "https://resizing.flixster.com/WNsdig8KJULSx1DDcXG0P7lxCvY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10069506_p_v8_aa.jpg",
        genre: "Comedy, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Old (2021)",
        embedUrl: "https://short.icu/iEDkD49Gg",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/99/Old_%28film%29_poster.jpg",
        genre: "Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Knock at the Cabin (2023)",
        embedUrl: "https://short.icu/lTbxtrDpB",
        posterUrl: "https://resizing.flixster.com/4D-QO4Xq50HkrXJFrniMMgMRXhw=/fit-in/705x460/v2/https://resizing.flixster.com/5dJGA-d38uNrcR2nDq1UmVBRuHc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA4NDdmZDU3LWMxNTQtNDczOC04M2VkLTQzNzQ5NGVkODExZi5qcGc=",
        genre: "Mystery, Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Glass (2019)",
        embedUrl: "https://short.icu/kxYOo0rbE",
        posterUrl: "https://resizing.flixster.com/SwC4w0a5yDxS432fNeEnqLKXFMk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14087450_v_v8_ad.jpg",
        genre: "Mystery, Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Black Phone 2 (2025)",
        embedUrl: "https://short.icu/vY2_yc2aG",
        posterUrl: "https://resizing.flixster.com/emPTHcz7_UxyX3uDhYWb5wb3GKM=/fit-in/705x460/v2/https://resizing.flixster.com/OfmbZ8Gy2cwsBeL5GQ2BOl0gJMg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q3NmNhYjA2LWI2NDAtNGNjYS1hMzE1LTNiMDFmYmM0N2RiYi5qcGc=",
        genre: "Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "After Earth (2013)",
        embedUrl: "https://short.icu/g9PbUIgWm",
        posterUrl: "https://resizing.flixster.com/qV3AOOhAE3cw5wggWSZ4pzBWtYo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9367987_v_v8_aa.jpg",
        genre: "Sci-Fi, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Percy Jackson & the Olympians: The Lightning Thief (2010)",
        embedUrl: "https://short.icu/jEyxgArqq",
        posterUrl: "https://resizing.flixster.com/FHGtm2bGjfIEm3ch24s0gD_Ohek=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p177957_v_v11_aq.jpg",
        genre: "Kids, Family, Adventure, Fantasyr",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Signs (2002)",
        embedUrl: "https://short.icu/72bVsXVEm",
        posterUrl: "https://resizing.flixster.com/e_vQ23ZZSCOkcAFTU09-iSSyReQ=/fit-in/705x460/v2/https://resizing.flixster.com/cWiDirTw9EToBiM-Aa3lOsPmPZY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2UwZDQwZWM3LTQ2YmYtNDExOS04MzE1LWJhNTMwN2I2YzdjMi53ZWJw",
        genre: "Mystery, Thriller, Sci-Fi, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Phone Booth (2003)",
        embedUrl: "https://short.icu/XtvZGv9aU",
        posterUrl: "https://resizing.flixster.com/xXRMDMas8nG8MuZH5aSlwTEbcME=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29323_v_v8_aa.jpg",
        genre: "Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Trap (2024)",
        embedUrl: "https://short.icu/EITiL8R5P",
        posterUrl: "https://resizing.flixster.com/h03seBuom7tI60Lssyma7frdsxo=/fit-in/705x460/v2/https://resizing.flixster.com/JMUezA59v3r50XvD34SELkqBnL0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZjYmVjMTllLTViOWYtNDY4NC04YWY5LTdmMGIxMTM1MWEwMS5qcGc=",
        genre: "Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Last Airbender (2010)",
        embedUrl: "https://short.icu/2FeL3E_UB",
        posterUrl: "https://resizing.flixster.com/O1JBLPhbmUZVwqCy1VbBlQjgAT0=/fit-in/705x460/v2/https://resizing.flixster.com/zkagqTNVimOxz4jUfllmjFicGjo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZkYzFjZWZhLTNmZDQtNDdkZi1hYTRjLWQ0ODlkYjg1NzIxNi53ZWJw",
        genre: "Fantasy, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Chronicles of Narnia: Prince Caspian (2008)",
        embedUrl: "https://short.icu/rRse9Z5TX",
        posterUrl: "https://resizing.flixster.com/_7LsRWeXVbRuKTDcpsEohgHsxW4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p174841_k_v8_aa.jpg",
        genre: "Kids, Family, Fantasy, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Black Phone (2021)",
        embedUrl: "https://short.icu/2S5M6lcAPg",
        posterUrl: "https://resizing.flixster.com/WJeaWCMmrM65RLNZP7ZfyqLwAaw=/fit-in/705x460/v2/https://resizing.flixster.com/r38PjcA-XGIiW3UR2pfUaGEYTNk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk4ZDA3Njk0LWE2YWUtNGZlYi1iNjQ2LTVkMmI2YTkyYmIyNy5qcGc=",
        genre: "Horror, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The BFG (2016)",
        embedUrl: "https://short.icu/a0XxkC16A",
        posterUrl: "https://resizing.flixster.com/-rES9XDO2rb5Yue-3t8DtYSrxmo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12394804_p_v8_ah.jpg",
        genre: "Kids, Family, Fantasy, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Furious 7 (2015)",
        embedUrl: "https://short.icu/Yw1vrh8QV",
        posterUrl: "https://resizing.flixster.com/C3SrSwYQ7lc16LZ2uotwDgFmiz0=/fit-in/705x460/v2/https://resizing.flixster.com/Hcy1QJVkolln5vF3rE06Q99yIJk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc3OWM0NGIyLWMwNTItNGUwZC05YTNmLTYwZTc2YzMzOGNhMi53ZWJw",
        genre: "Action, Adventure, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fast & Furious 6 (2013)",
        embedUrl: "https://short.icu/RnMLBRua_",
        posterUrl: "https://resizing.flixster.com/hKg_QE6u2-E4bK-RIFsFepY5SQk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9573130_v_v13_bg.jpg",
        genre: "Mystery, Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fast Five (2011)",
        embedUrl: "https://short.icu/64f3U8a-N",
        posterUrl: "https://resizing.flixster.com/UR17AUl_rhX7SN6thzaenICL8w0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8338313_p_v10_bb.jpg",
        genre: "Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Fast and the Furious: Tokyo Drift (2006)",
        embedUrl: "https://short.icu/HqCcp_pT-",
        posterUrl: "https://resizing.flixster.com/Ciy33ZoKTHdrJn547dBsMu3dD1w=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159790_p_v8_ak.jpg",
        genre: "Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Fast and the Furious (2001)",
        embedUrl: "https://short.icu/Wq0x3WgQH",
        posterUrl: "https://resizing.flixster.com/UIpVKYa_ZurAr4jvtGnY0MlaEV0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27779_p_v8_aa.jpg",
        genre: "Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fast & Furious Presents: Hobbs & Shaw (2019)",
        embedUrl: "https://short.icu/oseDhD6WT8",
        posterUrl: "https://resizing.flixster.com/sopkvT0OiI3swAJUG88_ltE6OIo=/fit-in/705x460/v2/https://resizing.flixster.com/3junDUcLJvCox0F3MpWAm7zDSbg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q5ODY2MDc2LTBhNzktNDg2Ni04MWE2LTAzNzZlNTM1ODQxYi53ZWJw",
        genre: "Action, Adventure, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fast & Furious (2009)",
        embedUrl: "https://short.icu/SyUEtN5te",
        posterUrl: "https://resizing.flixster.com/BsW4KDd4SA07zgl8jT_L8xp1o48=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p188702_v_v8_ba.jpg",
        genre: "Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "2 Fast 2 Furious (2003)",
        embedUrl: "https://short.icu/T8ZETdlHF",
        posterUrl: "https://resizing.flixster.com/haniAyQGiUrLS2BNW02z_W24q58=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p32092_v_v11_ae.jpg",
        genre: "Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Fate of the Furious (2017)",
        embedUrl: "https://short.icu/Ea1IR_V8X",
        posterUrl: "https://resizing.flixster.com/otzbFShJHfOsWirz2RGnsrP8OQ4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11730466_p_v8_ag.jpg",
        genre: " Action/Adventure/Mystery/Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "F9 The Fast Saga (2019)",
        embedUrl: "https://short.icu/fG-Ofxhoi",
        posterUrl: "https://resizing.flixster.com/o1CAb4iXVcFMxAqwjKJKgyINfEQ=/fit-in/705x460/v2/https://resizing.flixster.com/RYaXF6wKOa0WI2I2lY2DGkvWOgk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdhYTRiMjQ1LWMyMDctNGM1MC1iYzY3LWIzM2VhNmU0MTlkOC5qcGc=",
        genre: "Action, Adventure, Crime",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fast X (2023)",
        embedUrl: "https://short.icu/6HHLjh1wUr",
        posterUrl: "https://resizing.flixster.com/Or_Hvywcjx1KAVA-6fu0I0Y5hGg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20518399_v_v13_ar.jpg",
        genre: " Action,Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The American Society of Magical Negroes (2024)",
        embedUrl: "https://short.icu/GFVj44gy4",
        posterUrl: "https://resizing.flixster.com/7dukecVUs--_M6Wt2tXD_4lOa0k=/fit-in/705x460/v2/https://resizing.flixster.com/WHhFwaklmoh14tv4C840o_inlT0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzljZTRjMmQzLTJmOGItNDgyNS1hZjZjLTkzNTFiMTgyNDU3OC5qcGc=",
        genre: "Comedy, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Due Date (2010)",
        embedUrl: "https://short.icu/FHAw-oTgZ",
        posterUrl: "https://resizing.flixster.com/7hdB8QTgsxSCLocBsLlKT2KOL-o=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8129741_p_v8_am.jpg",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Troll (2022)",
        embedUrl: "https://short.icu/cjqUqJJCl",
        posterUrl: "https://resizing.flixster.com/Bso3CoScPEl1OMQjHLE5VCdyCt4=/fit-in/705x460/v2/https://resizing.flixster.com/ot7jNKIJPa0svcG5Hcuqmkx_WsU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJiZWI4N2Y4LTgwZTctNGEwZS05ZmMxLWQ3M2QzYTllM2IwMy5qcGc=",
        genre: "Action, Adventure, Fantasy, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Iron Man (2008)",
        embedUrl: "https://short.icu/QZuTYGKaX",
        posterUrl: "https://resizing.flixster.com/Yd3RztD1mj8vKdha7gTT0B0cKwU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170620_p_v12_ab.jpg",
        genre: "Action, Adventure, Sci-Fi, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Iron Man 2 (2010)",
        embedUrl: "https://short.icu/chk4-vOXq",
        posterUrl: "https://resizing.flixster.com/YLPwf33IFkTFak9MJvdahmB7ii0=/fit-in/705x460/v2/https://resizing.flixster.com/KesTri1yYg5hNid_ZrROuQFuJ5k=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgxNDk0ODViLWZmNDEtNDY2NC04ZjA5LTdjMzdjMzY3NTVhNC53ZWJw",
        genre: "Action, Adventure, Sci-Fi, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sherlock Holmes: A Game of Shadows (2011)",
        embedUrl: "https://short.icu/oY4qbwngX",
        posterUrl: "https://resizing.flixster.com/L3OlE6tCnInaj9jpxH0IlifX3Ds=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8418474_v_v8_ar.jpg",
        genre: "Action, Adventure, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Zodiac (2007)",
        embedUrl: "https://short.icu/l6nNn4OBi",
        posterUrl: "https://resizing.flixster.com/8M92HTc-G4lt52xwUJI7thBlG_c=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162782_v_v8_at.jpg",
        genre: "Crime, Drama, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dolittle (2020)",
        embedUrl: "https://short.icu/szXHsNsSE",
        posterUrl: "https://resizing.flixster.com/TJcW63zoV_d_nqFvwR8jxPmSuYI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16195223_v_v8_an.jpg",
        genre: "Kids, Family, Fantasy, Adventure, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Tropic Thunder (2008)",
        embedUrl: "https://short.icu/OZidvOaKU",
        posterUrl: "https://resizing.flixster.com/o64oAisvQj2NxsObafUIKEUn9g0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/65902/65902_aa.jpg",
        genre: "Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sherlock Holmes (2009)",
        embedUrl: "https://short.icu/QxfAW3CRq",
        posterUrl: "https://resizing.flixster.com/F7Gt8YtMsqapR5X9dXVmQfBQFc0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3547340_v_v8_ao.jpg",
        genre: "Action, Adventure, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Top Gun: Maverick (2022)",
        embedUrl: "https://short.icu/nUiEk0Pfd",
        posterUrl: "https://resizing.flixster.com/lLBlqA46EAe2sjjV1Mk_o3OmVhM=/fit-in/705x460/v2/https://resizing.flixster.com/TIM4kfHTVZrfpF0tYt9LIU69A5s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU1OWIwMWQwLWYyZDItNDk4Yi04MDIxLWI3OTJlNDI1NjA3NS5qcGc=",
        genre: "Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Mummy (2017)",
        embedUrl: "https://short.icu/oxGM_dQvE",
        posterUrl: "https://resizing.flixster.com/_o9mdP4S_zfd4EiRMhrPI2oLuJs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/171489/171489_aa.jpg",
        genre: "Action, Adventure, Fantasy, Horror, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Oblivion (2013)",
        embedUrl: "https://short.icu/66UIG1PfA",
        posterUrl: "https://resizing.flixster.com/LsNSQwSEkoZVWmdNew31ZIoBoZ4=/fit-in/705x460/v2/https://resizing.flixster.com/MlRGVoRrpCRhK9cXT5WyqHZU5NM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBhZDIwNmI0LTI3N2UtNGYzYy05YWZhLTYzOTdlNDM2ODA5Ni53ZWJw",
        genre: "Sci-Fi, Adventure, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Vanilla Sky (2001)",
        embedUrl: "https://short.icu/nj5fWxP_R",
        posterUrl: "https://resizing.flixster.com/X8sDAyriiEuHmsOoaI8tG8b-5_0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28886_v_v12_ar.jpg",
        genre: "Mystery, Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Edge of Tomorrow (2014)",
        embedUrl: "https://short.icu/n9esmdp5A",
        posterUrl: "https://resizing.flixster.com/v1GY0Z8Fg8lRpfb0ljfaDh81iDw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9957443_v_v8_ap.jpg",
        genre: "Sci-Fi, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "American Made (2017)",
        embedUrl: "https://short.icu/hv6gYwQDb",
        posterUrl: "https://resizing.flixster.com/mIw5Gxi1HhYLy3GpA6NCAbOdr5c=/fit-in/705x460/v2/https://resizing.flixster.com/nYJYdgmotXDgxPxWWCxFXsOIJQQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM1MTAzZmRhLTY1NDEtNGUyMi1hMTE5LTQ5Y2I4MDVlN2FlNi53ZWJw",
        genre: "Comedy, Drama, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jack Reacher: Never Go Back (2016)",
        embedUrl: "https://short.icu/PX3UPj0TU",
        posterUrl: "https://resizing.flixster.com/P7Su4_Doe5P6uqICKtmY29N5Yqc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12102699_p_v10_ae.jpg",
        genre: "Sci-Fi, Action, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Minority Report (2002)",
        embedUrl: "https://short.icu/UbOtH0qe_",
        posterUrl: "https://resizing.flixster.com/1atkLj6wr-0hCbxiUKXLJWJ15wQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29122_v_v12_as.jpg",
        genre: "Sci-Fi, Mystery & Thriller, Action, Crime, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Lions for Lambs (2007)",
        embedUrl: "https://short.icu/oxOAKdLDN",
        posterUrl: "https://resizing.flixster.com/xf2UPHGmAOHtBk0oNnb_8gEg2EI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170315_v_v8_ab.jpg",
        genre: "Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mission: Impossible - The Final Reckoning (2025)",
        embedUrl: "https://short.icu/Lh6_KJtTs",
        posterUrl: "https://resizing.flixster.com/xMk6ep6ibIwUIOmepTI37XUsVuo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18959126_v_v12_ap.jpg",
        genre: "Action, Adventure, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mission: Impossible - Rogue Nation (2015)",
        embedUrl: "https://short.icu/a-Xf7Lqxb",
        posterUrl: "https://resizing.flixster.com/MQHT-yKQ2kFd4Z8wzVPXOhcDFpM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10989210_p_v8_az.jpg",
        genre: "Action, Adventure, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mission: Impossible III (2006)",
        embedUrl: "https://short.icu/EXTGzw_Ps",
        posterUrl: "https://resizing.flixster.com/rT1s17bpI4wJvwzud5GS3Nx2gM8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p149488_p_v8_aa.jpg",
        genre: "Action, Adventure, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mission: Impossible II (2000)",
        embedUrl: "https://short.icu/UNZqZOq8I",
        posterUrl: "https://resizing.flixster.com/7hm6BFlDmE07mkwIc9LF9AIO5HU=/fit-in/705x460/v2/https://resizing.flixster.com/0dRfdjZb0gOfw1TE9F2oT-O-Duw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRkMWFiOWJjLTNlMGEtNDRjYS1hN2NiLWYwZjJkNzhhMWUwMy5qcGc=",
        genre: "Action, Adventure, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mission: Impossible - Ghost Protocol (2011)",
        embedUrl: "https://short.icu/T5plDa3UA",
        posterUrl: "https://resizing.flixster.com/0ciVmjFM2wnRVXKpqr56MzO6UHk=/fit-in/705x460/v2/https://resizing.flixster.com/lnauAR3104r_Iaj1P9PKNZHiBjs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU2YTgwMjY0LTMyMjMtNDViZi1iOGZiLTQ5ZGYwZDVjNDAxMy5qcGc=",
        genre: "Action, Adventure, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mission: Impossible - Fallout (2018)",
        embedUrl: "https://short.icu/XfXnrXQFT",
        posterUrl: "https://resizing.flixster.com/UF3QmaYzNrtUADnUM7A3wyPtWLA=/fit-in/705x460/v2/https://resizing.flixster.com/HJ7cR4hkb1sinAQOyAYO5LPbnQg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YwZTNkYjIwLTQ5MGUtNDFmYi1hYWIwLTQwNGEyYzcwNmVmNi5qcGc=",
        genre: "Action, Adventure, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mission: Impossible - Dead Reckoning Part One (2023)",
        embedUrl: "https://short.icu/nwBIjmX_V",
        posterUrl: "https://resizing.flixster.com/-JKCQ0RWieDEH-M73uqJSH1RU9I=/fit-in/705x460/v2/https://resizing.flixster.com/sjrE11CDEb_jyGqLlmWRMkkwAkI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdkOGMxYmM5LWU1M2UtNDA0MC1hOTg2LTU3YTg4YjgyN2M1Zi5qcGc=",
        genre: "Action, Adventure, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mission: Impossible (1996)",
        embedUrl: "https://short.icu/O5JMHSTol",
        posterUrl: "https://resizing.flixster.com/6-r8MDBSiHhbTwTAUcPha-INyxE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18045_p_v8_az.jpg",
        genre: "Action, Adventure, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Wolf of Wall Street (2013)",
        embedUrl: "https://short.icu/djiiM8_Un",
        posterUrl: "https://resizing.flixster.com/vUPRTVlAWCdGwn3zo6-dte_g8ls=/fit-in/705x460/v2/https://resizing.flixster.com/QLU-6pzeWGquNW8D5cZFFjHOD3k=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VmN2I2YmQ1LTA5MzItNDRkZC05ODgwLWQ0NDY0M2U3ZTU5Zi53ZWJw",
        genre: "Comedy, Drama, Biography",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Tenet (2020)",
        embedUrl: "https://short.icu/B6QRXTye5",
        posterUrl: "https://resizing.flixster.com/HJ2i5qDbfSO9CtAFvLN1dPUXcRw=/fit-in/705x460/v2/https://resizing.flixster.com/zHrh5Wu9CxOi55eiImv27H-7zMw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzliMTVjNTkwLTA1ZTUtNDEyMS04NmNmLTBiMzA2OThhMGY0MC5qcGc=",
        genre: "Action, Sci-Fi, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Lift (2024)",
        embedUrl: "https://short.icu/lQaJoTwvC",
        posterUrl: "https://resizing.flixster.com/WvbszLzvLesYEnFJ4a9o_EfLPmA=/fit-in/705x460/v2/https://resizing.flixster.com/JePOSD0hRh_ObBaKyKxzBjdkPIk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ4NzJiMzczLWMzOGYtNDBiYy04ODcyLTVlOWNhZGU2OTc3MS5qcGc=",
        genre: "Action, Comedy, Crime, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Murder on the Orient Express (2017)",
        embedUrl: "https://short.icu/XsJXoZQaz",
        posterUrl: "https://resizing.flixster.com/QVggkKlu40e85UbttG6tYv67d-c=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14119324_v_v8_ac.jpg",
        genre: "Mystery, Thriller, Crime, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Oppenheimer (2023)",
        embedUrl: "https://short.icu/_cVH6okSB",
        posterUrl: "https://resizing.flixster.com/E7Z-AK3zSu4oJgq7YwX7LjzKpNQ=/fit-in/705x460/v2/https://resizing.flixster.com/dV1vfa4w_dB4wzk7A_VzThWUWw8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEyZDMyYjZmLThmNzAtNDliNC1hMjFmLTA2ZWY4M2UyMjJhMi5qcGc=",
        genre: "Biography, History, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "No Escape (2015)",
        embedUrl: "https://short.icu/v7wvjokZ3",
        posterUrl: "https://resizing.flixster.com/6tjY_ucvgw5MGdFNfaD-QbiWXKM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11132509_v_v8_am.jpg",
        genre: "Mystery, Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Alice in Wonderland (2010)",
        embedUrl: "https://short.icu/ef56OVRXUJ",
        posterUrl: "https://resizing.flixster.com/4E2CNjoSsLKLKliLyYUqbHFJ1bU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11417709_p_v8_aa.jpg",
        genre: "Kids & Family, Fantasy, Animation",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dark Shadows (2012)",
        embedUrl: "https://short.icu/ZYhZTFxU2M",
        posterUrl: "https://resizing.flixster.com/sOd1s8zCNb8kx83DvOFAYOUNJfI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8915770_v_v8_ad.jpg",
        genre: "Comedy, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Shutter Island (2010)",
        embedUrl: "https://short.icu/jch-Z1Y77",
        posterUrl: "https://resizing.flixster.com/yIukk30HB-4Ahxf1t9qd7_kWAh8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3531967_v_v13_ac.jpg",
        genre: "Mystery, Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Memento (2000)",
        embedUrl: "https://short.icu/Ah-hUxAo7",
        posterUrl: "https://resizing.flixster.com/Ty4D10EVMxBmm5CQbJlGe4osMK4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/27156/27156_aa.jpg",
        genre: "Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "The Others (2001)",
        embedUrl: "https://short.icu/P9xgNoXnq",
        posterUrl: "https://resizing.flixster.com/2XA16N2LFsV5fLYz84T6N1Abz6w=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19365_v_v8_aa.jpg",
        genre: "Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Spiral (2021)",
        embedUrl: "https://short.icu/_NPF9Obc7",
        posterUrl: "https://resizing.flixster.com/SyUBlr9x5GvU1VnSCxHG_dQaaBM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18768136_v_v13_aa.jpg",
        genre: "Mystery, Thriller, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Saw (2004)",
        embedUrl: "https://short.icu/sv8X0YBES",
        posterUrl: "https://resizing.flixster.com/icVpdac65i_n4pYJJzqlzb8qEyc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p34813_v_v8_al.jpg",
        genre: "Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Jigsaw (2017)",
        embedUrl: "https://short.icu/ZUm_7jtKA",
        posterUrl: "https://resizing.flixster.com/B1bAT-HG2y3uvvw8kXPMENz0uX4=/fit-in/705x460/v2/https://resizing.flixster.com/VlBIjTsDd-spF5IB87FAnipxdPI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VjNzU3MmI0LTVlNTMtNGE2Mi1hNDk0LWRkZDM1ZmEwY2U3Yy53ZWJw",
        genre: "Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Saw IV (2007)",
        embedUrl: "https://short.icu/1475egdd2",
        posterUrl: "https://resizing.flixster.com/tT6360WimhYTyU33Qovw7OoyyZo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p169758_v_v8_ax.jpg",
        genre: "Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Saw VI (2009)",
        embedUrl: "https://short.icu/YQ_uvpoRG",
        posterUrl: "https://resizing.flixster.com/WvkGSO4ZjRVdF-xEHgLzvhyZ8WE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3532114_p_v8_aj.jpg",
        genre: "Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Saw: The Final Chapter (2010)",
        embedUrl: "https://short.icu/9N3QXT7ry",
        posterUrl: "https://resizing.flixster.com/8iOP7i-5j38oV1kpCtOdm9uYd04=/fit-in/705x460/v2/https://resizing.flixster.com/NTiySwWP8TMjT_ZSHgVVd1SmYQs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg0NGNhNjliLTVhMzUtNGU0MS1iYjI3LWZlZDEwYzg3YjM2NC53ZWJw",
        genre: "Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Saw III (2006)",
        embedUrl: "https://short.icu/CR1p_g0Vo",
        posterUrl: "https://resizing.flixster.com/7QIEYcT9uZ599VZ95YvX1bbsTuc=/fit-in/705x460/v2/https://resizing.flixster.com/JPwTJ4wCeKGh-cPyIT1niHkMG-I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYwZDJhYzE2LWRkYzMtNGU1YS1hYjAyLTllNDdiZDE4NTczOC53ZWJw",
        genre: "Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Saw V (2008)",
        embedUrl: "https://short.icu/oZJDDVOfv",
        posterUrl: "https://resizing.flixster.com/15X2Epv-iZBhKMokXl8OfykoEFE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p176557_p_v8_ab.jpg",
        genre: "Mystery, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Escape Plan (2013)",
        embedUrl: "https://short.icu/_IFQH6fER",
        posterUrl: "https://resizing.flixster.com/qZr5UVeEQTQe4SKM8yK10aLWrIo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9911264_v_v7_an.jpg",
        genre: "Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Fight Club (1999)",
        embedUrl: "https://short.icu/gmfDXdPTB",
        posterUrl: "https://resizing.flixster.com/HkZ7W0jZdei_lGoTyKtLo6cKy9Q=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23069_v_v8_ak.jpg",
        genre: "Drama, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "6 Underground (2019)",
        embedUrl: "https://short.icu/S2qO416K1",
        posterUrl: "https://resizing.flixster.com/HFmeRIsGj0SYmhd0hOE23lHiRks=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17622664_v_v12_aa.jpg",
        genre: "Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Foolproof (2003)",
        embedUrl: "https://short.icu/P9WX6neov",
        posterUrl: "https://resizing.flixster.com/y83ZQojqLIMtsBGGbHMfej3t6Zg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p33170_v_v8_ad.jpg",
        genre: "Mystery, Thriller, Crime, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Free Guy (2021)",
        embedUrl: "https://short.icu/Od2206HhA",
        posterUrl: "https://resizing.flixster.com/Z03YcXJEhchdHP3rkJq4G64qFIc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17644454_v_v13_ad.jpg",
        genre: "Action, Adventure, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Criminal (2016)",
        embedUrl: "https://short.icu/JA6GI-2CJ",
        posterUrl: "https://resizing.flixster.com/0Ti2bVYoxFwXJ38S--EaXI_3oJg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11952545_v_v8_aw.jpg",
        genre: "Action, Mystery, Thriller, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "The Sixth Sense (1999)",
        embedUrl: "https://short.icu/CUC3PV9Xh",
        posterUrl: "https://resizing.flixster.com/fvacrFxVnc3v3-opfaCGyhjN0F4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23611_v_v8_at.jpg",
        genre: "Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Self/less (2015)",
        embedUrl: "https://short.icu/0mQzFQdAf",
        posterUrl: "https://resizing.flixster.com/s0KHTByTxUmGJUOvu6T3CpCdjg4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10911278_v_v8_aa.jpg",
        genre: "Sci-Fi, Mystery, Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Definitely, Maybe (2008)",
        embedUrl: "https://short.icu/Lb90KpoF0",
        posterUrl: "https://resizing.flixster.com/N8UITW9nT8tSG26JlF0D_rEL1tI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p164697_v_v8_ac.jpg",
        genre: "Romance, Comedy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "R.I.P.D. (2013)",
        embedUrl: "https://short.icu/iK9a5P8EV",
        posterUrl: "https://resizing.flixster.com/P8H9cd9TZYN0TJ6lbh0Idma5vLQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9672434_k_v8_ag.jpg",
        genre: "Action, Comedy, Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "The Hitman's Bodyguard (2017)",
        embedUrl: "https://short.icu/fRDkh1EeD",
        posterUrl: "https://resizing.flixster.com/SG9UjXPK-Ygv4wDr1_tLxA8Y_w0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13086746_v_v8_ar.jpg",
        genre: "Action, Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "Life (2017)",
        embedUrl: "https://short.icu/5EsiG7aZu",
        posterUrl: "https://resizing.flixster.com/8xQZ35ZEcayUHqXv4jVMZBcmkYw=/fit-in/705x460/v2/https://resizing.flixster.com/aO_2z7JkGITaqVMiAivetYs8cNI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk0MTFhNTI2LWQwNTktNGJjMC1hMTNjLWIyOWNkMzRlODg2MC53ZWJw",
        genre: "Sci-Fi, Horror, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "The Amityville Horror (2005)",
        embedUrl: "https://short.icu/iK9a5P8EV",
        posterUrl: "https://resizing.flixster.com/GzCOlrPb9H-xVNzkh7PCyGa6n24=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p35685_v_v8_ab.jpg",
        genre: "Horror,",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {

        title: "The Change-Up (2011)",
        embedUrl: "https://short.icu/Phv8OSiT4",
        posterUrl: "https://resizing.flixster.com/NC7ygaET6om7BYQqAOX9n7MS_Cg=/fit-in/705x460/v2/https://resizing.flixster.com/Me2EQ51sH-SxQPcU3i7LIHHJYjc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJiNmU0NTUyLWY3NjItNGQ5OC1hZjUwLTA2OTYxNWI1NTVjNS53ZWJw",
        genre: "Comedy, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Stolen: Heist of the Century (2025)",
        embedUrl: "https://short.icu/-0wcRkrrX",
        posterUrl: "https://resizing.flixster.com/qgHxrxnoO0qPKyz-nWXPPOFeRJk=/fit-in/705x460/v2/https://resizing.flixster.com/YqzIbSjsCCXjMftq_3onJTncstU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc1NDI3NTEwLTNlNGItNDZiOC05MTJjLTIwMDQzZGZkZmMyYS5qcGc=",
        genre: "Mystery, Suspense, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Blade: Trinity (2004)",
        embedUrl: "https://short.icu/z0PHs-BVk",
        posterUrl: "https://resizing.flixster.com/ElTV0SmsCtRRxDZUfTohHH9iYhc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p35188_v_v8_aa.jpg",
        genre: "Horror, Action, Fantasy, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Inception (2010)",
        embedUrl: "https://short.icu/0JuHtHRub",
        posterUrl: "https://resizing.flixster.com/uvDmjRKJhP2OuN3NOM-PHm7hlME=/fit-in/705x460/v2/https://resizing.flixster.com/rExCf82U2oqQzX4eWBbwbJF-eUA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM5ZjVkOThjLThjMWUtNDY1NC1hZWM5LTVjMDYwMzFhNTIxOC53ZWJw",
        genre: "Sci-Fi, Mystery, Thriller, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dunkirk (2017)",
        embedUrl: "https://short.icu/LnS5g-gHE",
        posterUrl: "https://resizing.flixster.com/vNnYpipa4s5taek5_iceG5vHDS8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13153578_v_h9_ae.jpg",
        genre: "War, History, Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Prestige (2006)",
        embedUrl: "https://short.icu/GBRe5fAfv",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg",
        genre: "Mystery, Suspense, Action",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Now You See Me (2013)",
        embedUrl: "https://short.icu/73di5bTCl",
        posterUrl: "https://resizing.flixster.com/A-Hm5SmOWbM2zC73pt-827-lguY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9418112_v_h9_ay.jpg",
        genre: "Mystery, Suspense, Crime",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Now You See Me 2 (2016)",
        embedUrl: "https://short.icu/gcJzJOOR0",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/9a/Now_You_See_Me_2_poster.jpg",
        genre: "Mystery, Suspense, Crime",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Woodwalkers (2024)",
        embedUrl: "https://short.icu/6UaaggjgZ",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNmJiOTA2MjktM2EyOS00NGRhLTk0ZWUtMDhlMmYyMGE1YzhlXkEyXkFqcGc@._V1_FMjpg_UY678_.jpg",
        genre: "Action, Sci-Fi, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Host (2017)",
        embedUrl: "https://short.icu/nuhd-QT4G",
        posterUrl: "https://austinfilm.s3.us-east-2.amazonaws.com/wp-content/uploads/2017/11/29122050/18AFS_TheHost_Poster-1-677x1024.jpg",
        genre: "Action, Sci-Fi, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Riddick (2013)",
        embedUrl: "https://short.icu/5fHwLMjo_",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Riddick_poster.jpg/250px-Riddick_poster.jpg",
        genre: "Action, Sci-Fi, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mortal Engines (2018)",
        embedUrl: "https://short.icu/LDvuXIyop",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/MortalEngines2018poster.jpg/250px-MortalEngines2018poster.jpg",
        genre: "Action, Sci-Fi, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Lilo & Stitch (2025)",
        embedUrl: "https://short.icu/95-C5HllH",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Lilo_%26_Stitch_2025_Theatrical_Poster.jpg/250px-Lilo_%26_Stitch_2025_Theatrical_Poster.jpg",
        genre: "Comedy, Sci-Fi, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "F1 the Movie (2025)",
        embedUrl: "https://short.icu/UTmmKsf46",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/F1_%282025_film%29.png/250px-F1_%282025_film%29.png",
        genre: "Action, Sports, Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "G.I. Joe: The Rise of Cobra (2009)",
        embedUrl: "https://short.icu/Cvggon4JG",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/G.I._Joe_-_The_Rise_of_Cobra_%282009_film%29.jpg/250px-G.I._Joe_-_The_Rise_of_Cobra_%282009_film%29.jpg",
        genre: "Action, Sci-Fi, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Tron: Legacy (2010)",
        embedUrl: "https://short.icu/httk_maaH",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Tron_Legacy_poster.jpg/250px-Tron_Legacy_poster.jpg",
        genre: "Action, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Marvels (2023)",
        embedUrl: "https://short.icu/1K5ZCEf6z",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/The_Marvels_poster.jpg",
        genre: "Action, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Jester 2 (2025)",
        embedUrl: "https://short.icu/VwhGGgPon",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNzZiMWE4NTEtMmIxYS00NDlhLTg2MGQtYmMyNTg5YTBiNDNhXkEyXkFqcGc@._V1_QL75_UX154_.jpg",
        genre: "Suspense, Thriller, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Conjuring: The Devil Made Me Do It (2021)",
        embedUrl: "https://short.icu/7YADY9Er_",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/The_Conjuring_-_The_Devil_Made_Me_Do_It.png/250px-The_Conjuring_-_The_Devil_Made_Me_Do_It.png",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Real Steel (2011)",
        embedUrl: "https://short.icu/sng-ljKLC",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/2/22/Real_Steel_Poster.jpg",
        genre: "Action, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Madame Web (2024)",
        embedUrl: "https://short.icu/zcrUr_h2f",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Madame_Web_%28film%29_poster.jpg/250px-Madame_Web_%28film%29_poster.jpg",
        genre: "Action, Sci-Fi, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kraven the Hunter (2024)",
        embedUrl: "https://short.icu/c3GNEw3Oy",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Kraven_the_Hunter_%28film%29_poster.jpg/250px-Kraven_the_Hunter_%28film%29_poster.jpg",
        genre: "Action, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hellboy: The Crooked Man (2024)",
        embedUrl: "https://short.icu/UGEUUbPw56",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Hellboy_The_Crooked_Man_poster.jpg/250px-Hellboy_The_Crooked_Man_poster.jpg",
        genre: "Action, Thriller, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hellboy (2004)",
        embedUrl: "https://short.icu/KnPBfu42M",
        posterUrl: "https://resizing.flixster.com/EyFawlfnYyQKvrRBpqUwPwTpEOM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p34304_v_v13_aa.jpg",
        genre: "Action, Thriller, Sci-Fi, Fantasy, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hellboy (2019)",
        embedUrl: "https://short.icu/yVkxV8iqK",
        posterUrl: "https://resizing.flixster.com/3FwvRgtfGXx-G4PStk6dE8iAAt4=/fit-in/705x460/v2/https://resizing.flixster.com/ZbdYPdQyDUGHo9lC4EfAqWqdMV0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ1MWVjOTc1LWVlNjItNDE5ZC1hMWYwLTJjYzNjZDM0NjZkMi53ZWJw",
        genre: "Action, Thriller, Sci-Fi, Fantasy, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hellboy II: The Golden Army (2008)",
        embedUrl: "https://short.icu/dDw5uXQ1A",
        posterUrl: "https://resizing.flixster.com/gOoDg0rKeb0CckagZqTGaMMo6rA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p172364_p_v8_af.jpg",
        genre: "Action, Thriller, Sci-Fi, Fantasy, Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Conjuring 2 (2016)",
        embedUrl: "https://short.icu/Rz--p3gk0",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/2/27/The_Conjuring_2.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Conjuring: Last Rites (2025)",
        embedUrl: "https://short.icu/aHwy_s7X3",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/The_Conjuring_%E2%80%93_Last_Rites.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Conjuring (2013)",
        embedUrl: "https://short.icu/kfXw7pWzr",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Daredevil (2003)",
        embedUrl: "https://short.icu/SDpfopdxi",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/04/Daredevil_poster.JPG",
        genre: "Action, Sci-Fi, Thriller, Suspense",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Batman Begins (2005)",
        embedUrl: "https://short.icu/MZoBF6WL2",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Batman_Begins_Poster.jpg/250px-Batman_Begins_Poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Dark Knight (2008)",
        embedUrl: "https://short.icu/z4QkBaq-n",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/The_Dark_Knight_%282008_film%29.jpg/250px-The_Dark_Knight_%282008_film%29.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Dark Knight Rises (2012)",
        embedUrl: "https://short.icu/AY0T1bUDQ",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "X-Men: Apocalypse (2016)",
        embedUrl: "https://short.icu/_HFAn6zjD",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/X-Men_-_Apocalypse.jpg/250px-X-Men_-_Apocalypse.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Wolverine (2013)",
        embedUrl: "https://short.icu/KfizBXM9J",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/The_Wolverine_posterUS.jpg/250px-The_Wolverine_posterUS.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "X-Men: First Class (2011)",
        embedUrl: "https://short.icu/Xue4pqAq-",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/X-MenFirstClassMoviePoster.jpg/250px-X-MenFirstClassMoviePoster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "X-2 (2003)",
        embedUrl: "https://short.icu/xACYONQO2",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/X2_poster.jpg/250px-X2_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "X-Men (2000)",
        embedUrl: "https://short.icu/KQh9Vycvz",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "X-Men Origins: Wolverine (2009)",
        embedUrl: "https://short.icu/pbGN1n5RR",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/08/X-Men_Origins_Wolverine_theatrical_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "X-Men Days of Future Past (2014)",
        embedUrl: "https://short.icu/bMpVuPlGm",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/X-Men_Days_of_Future_Past_poster.jpg/250px-X-Men_Days_of_Future_Past_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "X-Men: The Last Stand (2006)",
        embedUrl: "https://short.icu/eJcQ0EVzn6",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/5b/X-Men_The_Last_Stand_theatrical_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Transformers: Rise of the Beasts (2023)",
        embedUrl: "https://short.icu/wUfq9VCaB",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Transformers-_Rise_of_the_Beasts.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Transformers: The Last Knight (2017)",
        embedUrl: "https://short.icu/qMS9HFA8G",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/2/26/Transformers_The_Last_Knight_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Transformers: Age of Extinction (2014)",
        embedUrl: "https://short.icu/TPL12Q6Vg",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/0f/Transformers_Age_of_Extinction_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Transformers: Dark of the Moon (2011)",
        embedUrl: "https://short.icu/9_DRZI1IN",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Transformers_dark_of_the_moon_ver5.jpg/250px-Transformers_dark_of_the_moon_ver5.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Transformers: Revenge of the Fallen (2009)",
        embedUrl: "https://short.icu/3R72fZ9gk",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/c/cb/TF2SteelPoster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Transformers (2007)",
        embedUrl: "https://short.icu/waet7srcp",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Venom: The Last Dance (2024)",
        embedUrl: "https://short.icu/uLWOId750",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/a3/Venom_The_Last_Dance_Poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Venom: Let There Be Carnage (2021)",
        embedUrl: "https://short.icu/6hJvYx1nN",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Venom_Let_There_Be_Carnage_poster.jpg/250px-Venom_Let_There_Be_Carnage_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Venom (2018)",
        embedUrl: "https://short.icu/TJDgR3t7e",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Venom_%282018_film%29_poster.png/250px-Venom_%282018_film%29_poster.png",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pirates of the Caribbean:The Curse of the Black Pearl (2003)",
        embedUrl: "https://short.icu/k9mKE3jZr",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png/250px-Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png",
        genre: "Action+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pirates of the Caribbean:Dead Men Tell No Tales (2017)",
        embedUrl: "https://short.icu/-wcXdoUJB",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/2/21/Pirates_of_the_Caribbean%2C_Dead_Men_Tell_No_Tales.jpg",
        genre: "Action+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pirates of the Caribbean:On Stranger Tides (2011)",
        embedUrl: "https://short.icu/95KhPodzD",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Pirates_of_the_Caribbean_-_On_Stranger_Tides.png",
        genre: "Action+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pirates of the Caribbean:Dead Man's Chest (2006)",
        embedUrl: "https://short.icu/x-wzF74Mi",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Pirates_of_the_caribbean_2_poster_b.jpg/250px-Pirates_of_the_caribbean_2_poster_b.jpg",
        genre: "Action+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pirates of the Caribbean:At World's End (2007)",
        embedUrl: "https://short.icu/BtNxlWcIID",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Pirates_AWE_Poster.jpg/250px-Pirates_AWE_Poster.jpg",
        genre: "Action+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Thor: Ragnarok (2017)",
        embedUrl: "https://short.icu/XLeB5lyet",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Guardians of the Galaxy Vol. 3 (2023)",
        embedUrl: "https://short.icu/ohLvo49c2",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg/250px-Guardians_of_the_Galaxy_Vol._3_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Shang-Chi (2021)",
        embedUrl: "https://short.icu/Ie1RnQbJO",
        posterUrl: "https://lumiere-a.akamaihd.net/v1/images/p_shangchiandthelegendofthetenringshomeentupdate_22055_7b62fa67.jpeg?region=0%2C0%2C540%2C800",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Thor: Love and Thunder (2022)",
        embedUrl: "https://short.icu/BL4k6EELc",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Thor_Love_and_Thunder_poster.jpeg/250px-Thor_Love_and_Thunder_poster.jpeg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Thor (2011)",
        embedUrl: "https://short.icu/VqN_V-FA-",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Iron Man 3 (2013)",
        embedUrl: "https://short.icu/EWZExK1zx",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Doctor Strange (2016)",
        embedUrl: "https://short.icu/rKdKnEuNe",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/a1/Doctor_Strange_%282016_film%29_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Eternals (2021)",
        embedUrl: "https://short.icu/uVK6wTUjV",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/9b/Eternals_%28film%29_poster.jpeg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ghost Rider: Spirit of Vengeance (2011)",
        embedUrl: "https://short.icu/EcfxEcvLW",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Ghost_Rider_2_Poster.jpg/250px-Ghost_Rider_2_Poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Deadpool & Wolverines (2024)",
        embedUrl: "https://short.icu/9tKcsNDzR",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/250px-Deadpool_%26_Wolverine_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Doctor Strange in theMultiverse of Madness (2022)",
        embedUrl: "https://short.icu/IF0rqTB_g",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ghost Rider (2007)",
        embedUrl: "https://short.icu/KHISvckHL",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/GhostRiderBigPoster.jpg/250px-GhostRiderBigPoster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Guardians of the Galaxy (2014)",
        embedUrl: "https://short.icu/dhlv5zXXO",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Guardians of the Galaxy Vol. 2 (2017)",
        embedUrl: "https://short.icu/B1JPSXE5S",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Guardians_of_the_Galaxy_Vol._2_poster.jpg/250px-Guardians_of_the_Galaxy_Vol._2_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Avengers: Endgame (2019)",
        embedUrl: "https://short.icu/vblyXU2i4",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Lord of the Rings:The Return of the King (2003)",
        embedUrl: "https://short.icu/gekXqwVC0",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg",
        genre: "Adventure+Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Avengers: Infinity War (2018)",
        embedUrl: "https://short.icu/Eng2XhGdY",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Avengers: Age of Ultron (2015)",
        embedUrl: "https://short.icu/XbPDhSuXI",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Captain America: Civil War (2016)",
        embedUrl: "https://short.icu/GyZ5qtOju",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Black Panther: Wakanda Forever (2022)",
        embedUrl: "https://short.icu/_T-rfno7o",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Black_Panther_Wakanda_Forever_poster.jpg/250px-Black_Panther_Wakanda_Forever_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Deadpool (2016)",
        embedUrl: "https://short.icu/k_gU8OspR",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/250px-Deadpool_%282016_poster%29.png",
        genre: "Action+Comedy+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Deadpool 2 (2018)",
        embedUrl: "https://short.icu/y9s2Nh1Yb",
        posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qH12Q8BQVslMs7e1iN3neUQJDT4pn5xX7Ybj4G0JR3wlYqJhWJc5Ellk6pEvear8_DBVzw&s=10",
        genre: "Action+Comedy+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Lord of The Rings- The Fellowship of The Ring (2001)",
        embedUrl: "https://short.icu/HGiT6b86C",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg",
        genre: "Adventure+Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Lord of the Rings:The Two Towers (2002)",
        embedUrl: "https://short.icu/eeKlZxKih",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/a1/Lord_Rings_Two_Towers.jpg",
        genre: "Adventure+Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mr. Bean’s Holiday (2007)",
        embedUrl: "https://short.icu/vx5AN3u4h",
        posterUrl: "https://a.ltrbxd.com/resized/sm/upload/1i/js/mj/tp/5G3gOZemcwXf2nbUFB4VCc5gl2A-0-1000-0-1500-crop.jpg?v=00c4e97f90",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Johnny English Strikes Again (2018)",
        embedUrl: "https://short.icu/yalDVi9Oo",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Johnny_English_Strikes_Again_poster.jpg/250px-Johnny_English_Strikes_Again_poster.jpg",
        genre: "Action+Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Johnny English Reborn (2011)",
        embedUrl: "https://short.icu/7dGPxTcFZ",
        posterUrl: "https://image.tmdb.org/t/p/w185/1T6qnlTVkrGr0mpgZbpSwVU5FWW.jpg",
        genre: "Action+Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "XXX: Return of Xander Cage (2017)",
        embedUrl: "https://short.icu/E_HpcBzS3",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/9c/Xxx_return_of_xander_cage_film_poster.jpeg",
        genre: "Action+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Warcraft (2016)",
        embedUrl: "https://short.icu/3xCIAQ4pX",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/56/Warcraft_Teaser_Poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Valerian and the City of a Thousand Planets (2017)",
        embedUrl: "https://short.icu/BC0ejKKRr",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/07/Valerian_and_the_City_of_a_Thousand_Planets.jpg",
        genre: "Action+Sci-Fi+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ultraviolet (2006)",
        embedUrl: "https://short.icu/12Mm4YC7O",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ultraviolet_poster.jpg/250px-Ultraviolet_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Triple Frontier (2019)",
        embedUrl: "https://short.icu/0WPopKZEBe",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Triple_Frontier.jpg/250px-Triple_Frontier.jpg",
        genre: "Action+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Matrix Resurrections (2021)",
        embedUrl: "https://short.icu/5Vs_4jtE8",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/The_Matrix_Resurrections.jpg/250px-The_Matrix_Resurrections.jpg",
        genre: "Action+Thriller+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The King’s Man (2021)",
        embedUrl: "https://short.icu/Jj9F575Ty",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/67/The_King%27s_Man.jpg",
        genre: "Action+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Tomorrow War (2021)",
        embedUrl: "https://short.icu/mN7MkCrhC",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/The_Tomorrow_War_%282021_film%29_official_theatrical_poster.jpg",
        genre: "Action+Thriller+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Hangover Part III (2013)",
        embedUrl: "https://short.icu/DngrtEkPo",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/The_Hangover_Part_3.JPG/250px-The_Hangover_Part_3.JPG",
        genre: "Comedy+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Hangover Part II (2011)",
        embedUrl: "https://short.icu/pv8oBgMzF",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/9d/HangoverPart2MP2011.jpg",
        genre: "Comedy+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Hangover (2009)",
        embedUrl: "https://short.icu/COrHKWobT",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Hangoverposter09.jpg/250px-Hangoverposter09.jpg",
        genre: "Comedy+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Adam Project (2022)",
        embedUrl: "https://short.icu/intBz9EYo",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/The_Adam_Project_poster.png/250px-The_Adam_Project_poster.png",
        genre: "Action+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Seventh Son (2014)",
        embedUrl: "https://short.icu/Ps3RwQUu7",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Seventh_Son_Poster.jpg/250px-Seventh_Son_Poster.jpg",
        genre: "Action+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sonic the Hedgehog (2020)",
        embedUrl: "https://short.icu/iogB_4g2x",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Sonic_the_Hedgehog_film_poster.jpg/250px-Sonic_the_Hedgehog_film_poster.jpg",
        genre: "Family+Action+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Smile (2022)",
        embedUrl: "https://short.icu/dDplYaXAv",
        posterUrl: "https://images.squarespace-cdn.com/content/v1/5e4c8c633c6f9213af9e358f/139d779c-c857-4ea7-8cc7-2c87f6e088e9/E4DEAA0E-647D-441E-B1D0-8C6AC5213D3B.jpeg?format=750w",
        genre: "Horror+Suspense",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Red Notice (2021)",
        embedUrl: "https://short.icu/YEHg5EXoc",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Red_Notice_-_film_promotional_image.jpg",
        genre: "Action+Adventure+Fantasy+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ready Player One (2018)",
        embedUrl: "https://short.icu/7FX2dWZtv",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/Ready_Player_One_%28film%29.png",
        genre: "Action+Adventure+Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mowgli: Legend of the Jungle (2018)",
        embedUrl: "https://short.icu/Z2ygjg5qq",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Mowgli_Legend_of_the_Jungle_poster.jpg",
        genre: "Action+Adventure+Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Most Dangerous Game (2020)",
        embedUrl: "https://short.icu/BHOIEwUqj",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/52/Most_Dangerous_Game_film_poster.jpg",
        genre: "Action+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mortal Kombat (2021)",
        embedUrl: "https://short.icu/8-Z3BRNzD",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/3/37/Mortal_Kombat_%282021_film%29.png",
        genre: "Action+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kingsman: The Secret Service (2014)",
        embedUrl: "https://short.icu/_KIIzbl2V",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/8b/Kingsman_The_Secret_Service_poster.jpg",
        genre: "Action+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kingsman: The Golden Circle (2017)",
        embedUrl: "https://short.icu/HTwnvOYHs",
        posterUrl: "https://image.tmdb.org/t/p/w185/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
        genre: "Action+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jungle Cruise (2021)",
        embedUrl: "https://short.icu/DsjYhfZcm",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Jungle_Cruise_-_theatrical_poster.png/250px-Jungle_Cruise_-_theatrical_poster.png",
        genre: "Adventure+Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "John Carter (2012)",
        embedUrl: "https://short.icu/K8bCWhJ2L",
        posterUrl: "https://image.tmdb.org/t/p/w185/7GSSyUUgUEXm1rhmiPGSRuKoqnK.jpg",
        genre: "Adventure+Fantasy+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hitman’s Wife’s Bodyguard (2021)",
        embedUrl: "https://short.icu/7KeeWj__6",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/ab/Hitman%27s_Wife%27s_Bodyguard_%282021_film%29_theatrical_release_poster.jpg",
        genre: "Action+Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Clash of the Titans (2010)",
        embedUrl: "https://short.icu/T5Fqc8T30",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Clashofthetitansremakeposter1.jpg/250px-Clashofthetitansremakeposter1.jpg",
        genre: "Action+Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Green Room (2015)",
        embedUrl: "https://short.icu/LZGWFf1ZO",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/e5/Green_Room_%28film%29_POSTER.jpg",
        genre: "Suspense+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Godzilla vs. Kong (2021)",
        embedUrl: "https://short.icu/xX3frMC8I",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Godzilla_vs._Kong.png/250px-Godzilla_vs._Kong.png",
        genre: "Action+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Godzilla: King of the Monsters (2019)",
        embedUrl: "https://short.icu/dEJ2cPu71",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/9a/Godzilla_%E2%80%93_King_of_the_Monsters_%282019%29_poster.png",
        genre: "Action+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Wrath of the Titans (2012)",
        embedUrl: "https://short.icu/dMBJxTdRR",
        posterUrl: "https://image.tmdb.org/t/p/w185/oYYLGGLEXgpqmbaL1da02qibY1S.jpg",
        genre: "Action+Fantasy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Everything Everywhere All at Once (2022)",
        embedUrl: "https://short.icu/K4cmcBhlx",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Cube (2021)",
        embedUrl: "https://short.icu/4PzYotNEH",
        posterUrl: "https://resizing.flixster.com/YkQ2M6EIclFjP8YB-0emzKefrzQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20896492_v_v10_af.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Cube 2: Hypercube (2002)",
        embedUrl: "https://short.icu/WQOhZfzJR",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/66/Cube_poster.JPG",
        genre: "Horror, Mystery & Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Timeline (2003)",
        embedUrl: "https://short.icu/J5JS91d6Z",
        posterUrl: "https://resizing.flixster.com/SG0EcngNpZIUR8FY5UfoB2M6afM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p33364_v_v8_af.jpg",
        genre: "Adventure, Action, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Jack in the Box: Awakening (2021)",
        embedUrl: "https://short.icu/r_uPIpOgD",
        posterUrl: "https://resizing.flixster.com/IDHp2vMdanZYRTDbhvNZckzmsg8=/fit-in/705x460/v2/https://resizing.flixster.com/D-ZIsdpFlwUMnki9dYjEXdUiM1U=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk0MTk3MDViLTk1NmYtNDNlOS04ZDE2LTNiYzc2NzE4M2UwNi5qcGc=",
        genre: "Horror",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bad Boys: Ride or Die (2024)",
        embedUrl: "https://short.icu/RVuSLHWcc",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg",
        genre: "Action+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Alita: Battle Angel (2019)",
        embedUrl: "https://short.icu/zz0cbu4Q5",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/ee/Alita_Battle_Angel_%282019_poster%29.png",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "2012 (2009)",
        embedUrl: "https://short.icu/AURTyNo2w",
        posterUrl: "https://image.tmdb.org/t/p/w185/6NGuxp2ysgv539S9EpfVngsUdD.jpg",
        genre: "Thriller+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Harry Potter and the Goblet of Fire (2005)",
        embedUrl: "https://short.icu/1te7KtGjK",
        posterUrl: "https://image.tmdb.org/t/p/w185/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
        genre: "Fantasy+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban (2004)",
        embedUrl: "https://short.icu/pzfrMjP7m",
        posterUrl: "https://image.tmdb.org/t/p/w185/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
        genre: "Fantasy+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Harry Potter and the Chamber of Secrets (2002)",
        embedUrl: "https://short.icu/NvuGT2wuX",
        posterUrl: "https://image.tmdb.org/t/p/w185/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
        genre: "Fantasy+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Harry Potter and the Sorcerer’s Stone (2001)",
        embedUrl: "https://short.icu/6V68mtuWt",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_QL50_SY1000_CR0,0,679,1000_AL_.jpg",
        genre: "Fantasy+Adventure",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fantastic Beasts and Where to Find Them (2016)",
        embedUrl: "https://short.icu/AOW9dBINQ",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/FBAWTFT-poster.jpg/250px-FBAWTFT-poster.jpg",
        genre: "Fantasy+Adventure+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fantastic Beasts: The Crimes of Grindelwald (2018)",
        embedUrl: "https://short.icu/uDgx2xC8r",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/3/3c/Fantastic_Beasts_-_The_Crimes_of_Grindelwald_Poster.png",
        genre: "Fantasy+Adventure+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Escape Room (2019)",
        embedUrl: "https://short.icu/7D2r1zbXV",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/99/Escape_Room_%282019_poster%29.png",
        genre: "Suspense+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Escape Room (2017)",
        embedUrl: "https://short.icu/GgFmVsTBa",
        posterUrl: "https://cdn.kinocheck.com/i/w=325/lsfhkocma1.jpg",
        genre: "Suspense+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Escape Room: Tournament of Champions (2021)",
        embedUrl: "https://short.icu/R35aMQfJh",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/3/36/Escape_Room_Tournament_of_Champions_Movie_Poster.jpg",
        genre: "Suspense+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Killer’s Game (2024)",
        embedUrl: "https://short.icu/IwPKeZIuF",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/The_Killer%27s_Game.jpg/250px-The_Killer%27s_Game.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jurassic World: Rebirth (2025)",
        embedUrl: "https://short.icu/eqVjAyAs6",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMDE1N2EzMjAtMDY1My00YWE5LWEyYjYtYmE3YjZjNzQwNDhmXkEyXkFqcGc@._V1_FMjpg_UY687_.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Thunderbolts* (2025)",
        embedUrl: "https://short.icu/E6nQR3LR_",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Thunderbolts%2A_poster.jpg/250px-Thunderbolts%2A_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "How to Train Your Dragon (2025)",
        embedUrl: "https://short.icu/N5Eb1y159",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/80/How_To_Train_Your_Dragon_2025_Poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Amazing Spider-Man (2012)",
        embedUrl: "https://short.icu/NaE7MQ4cN",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/The_Amazing_Spider-Man_%28film%29_poster.jpg/250px-The_Amazing_Spider-Man_%28film%29_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Spider-Man: No Way Home (2021)",
        embedUrl: "https://short.icu/nQpZ_tCNC",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Amazing Spider-Man 2 (2014)",
        embedUrl: "https://short.icu/c0KSJ9Lcm",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/The_Amazing_Spider-Man_2_poster.jpg/250px-The_Amazing_Spider-Man_2_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Spider-Man 3 (2007)",
        embedUrl: "https://short.icu/RNiAkssQm",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Spider-Man_3%2C_International_Poster.jpg/250px-Spider-Man_3%2C_International_Poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Spider-Man 2 (2004)",
        embedUrl: "https://short.icu/uvweeihLD",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Spider-Man_2_poster.jpg/250px-Spider-Man_2_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Spider-Man (2002)",
        embedUrl: "https://short.icu/9owv7S-tF",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Spider-Man_%282002_film%29_poster.jpg/250px-Spider-Man_%282002_film%29_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Aquaman and the Lost Kingdom (2023)",
        embedUrl: "https://short.icu/iCFfUYwxi",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Aquaman_and_the_Lost_Kingdom_poster.jpg/250px-Aquaman_and_the_Lost_Kingdom_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Fantastic Four: First Steps (2025)",
        embedUrl: "https://short.icu/p18cXcnyk",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BOGM5MzA3MDAtYmEwMi00ZDNiLTg4MDgtMTZjOTc0ZGMyNTIwXkEyXkFqcGc@._V1_FMjpg_UY711_.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Aquaman (2018)",
        embedUrl: "https://short.icu/NjacbPPqv",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Aquaman_%28film%29_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Terminator (1984)",
        embedUrl: "https://short.icu/C8Aif7QIg",
        posterUrl: "https://resizing.flixster.com/k4MMVnFj23e8DXwQSzg4bFm_AfY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7764_p_v8_au.jpg",
        genre: "Sci-Fi, Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Terminator 2: Judgment Day (1991)",
        embedUrl: "https://short.icu/4GfXAnze0",
        posterUrl: "https://resizing.flixster.com/fYk08zjc9TTyyrvrVBlCRJukXzg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13308_v_v9_ah.jpg",
        genre: "Sci-Fi, Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Terminator 3: Rise of the Machines (2003)",
        embedUrl: "https://short.icu/DM9rcUd76",
        posterUrl: "https://resizing.flixster.com/TcXnODuy1A7k_frMAULq4nKbTyM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p32090_v_v8_aa.jpg",
        genre: "Sci-Fi, Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Terminator Salvation (2009)",
        embedUrl: "https://short.icu/JhVst-KQBm",
        posterUrl: "https://resizing.flixster.com/HArvI9bcKdoV4a2l8a9qhYFi63U=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p182955_p_v10_ab.jpg",
        genre: "Sci-Fi, Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Terminator Genisys (2015)",
        embedUrl: "https://short.icu/20WcRvVJp",
        posterUrl: "https://resizing.flixster.com/2w07kWqexz41XLhsZN-BqYHMRlk=/fit-in/705x460/v2/https://resizing.flixster.com/X6RM9zt6YxN21_P1hiaf7lOQJJc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYyM2VlNTM2LTg1ZDQtNDFlZC05NjEyLTVjMGMxNzRiY2JmNS53ZWJw",
        genre: "Sci-Fi, Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Terminator: Dark Fate (2019)",
        embedUrl: "https://short.icu/POibaaW4O",
        posterUrl: "https://resizing.flixster.com/4p9GFbZ4CXwZV_Xl2TePC1OQgI0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14592194_v_v8_ab.jpg",
        genre: "Sci-Fi, Action, Mystery, Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Man of Steel (2013)",
        embedUrl: "https://short.icu/POnZZG7hw",
        posterUrl: "https://image.tmdb.org/t/p/w185/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Batman v Superman: Dawn of Justice (2016)",
        embedUrl: "https://short.icu/K1BkX71j2",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UY864_.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Birds of Prey (2020)",
        embedUrl: "https://strmup.cc/9bCsl1HX72iF3",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg",
        genre: "Action, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The 6th Day (2000)",
        embedUrl: "https://short.icu/ZYcv0toVz",
        posterUrl: "https://resizing.flixster.com/t0BeJ33oDTfZLY6VIlR2tdhLhAY=/fit-in/705x460/v2/https://resizing.flixster.com/-UBPFgl4xzgS07-a-7ZrUS-y0Rk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA5M2NlNDM1LTEwNzktNDljMC1iNTIyLWVkNGE2Y2E5MWZhMy53ZWJw",
        genre: "Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Black Adam (2022)",
        embedUrl: "https://strmup.cc/GjHbzJX1eTknN",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Blue Beetle (2023)",
        embedUrl: "https://strmup.cc/W10mxK9cT6eHs",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/Blue_Beetle_%28film%29_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Green Lantern (2011)",
        embedUrl: "https://strmup.cc/8MbxDUu3NOIAs",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/6b/Green_Lantern_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Zack Snyder’s Justice League (2021)",
        embedUrl: "https://strmup.cc/4IabHClwqx7Vr",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Zack_Snyder%27s_Justice_League.png/250px-Zack_Snyder%27s_Justice_League.png",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Shazam! Fury of the Gods (2023)",
        embedUrl: "https://strmup.cc/yGwaTD53sUmVf",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/f/fb/Shazam%21_Fury_of_the_Gods_%282023%29_Main_Poster.png",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Shazam! (2019)",
        embedUrl: "https://strmup.cc/tCoSjGksA2nE7",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Shazam%21_%28film%29_poster.jpg/250px-Shazam%21_%28film%29_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Suicide Squad (2021)",
        embedUrl: "https://strmup.cc/W6emC4FH2XoGi",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNzUzMjkxMzItMTc0MS00MjAxLWFiZGMtY2YwOGM2Yjk1ZjBmXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UY576_.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Flash (2023)",
        embedUrl: "https://strmup.cc/XlOMIUKTr4Lug",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/250px-The_Flash_%28film%29_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Wonder Woman 1984 (2020)",
        embedUrl: "https://strmup.cc/t1aSrqXnhNZfl",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Wonder_Woman_1984_poster.png/250px-Wonder_Woman_1984_poster.png",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Wonder Woman (2017)",
        embedUrl: "https://strmup.cc/d1Vj68vIDXsnY",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/b0/Wonder_Woman_%282017_film%29_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Predestination (2014)",
        embedUrl: "https://strmup.cc/lto3z7Qf2FTn8",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_QL50_SY1000_CR0,0,677,1000_AL_.jpg",
        genre: "Suspense+Thriller",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Johnny English (2003)",
        embedUrl: "https://strmup.cc/gFdJqwnWbmN2B",
        posterUrl: "https://image.tmdb.org/t/p/w185/lx3Y7teA6DaoQ6cIhwzrlnDZpFW.jpg",
        genre: "Action+Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Teenage Mutant Ninja Turtles: Out of the Shadows (2016)",
        embedUrl: "https://strmup.cc/LsRQly9x6BaS8",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/7b/Teenage_Mutant_Ninja_Turtles_Out_of_the_Shadows_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Teenage Mutant Ninja Turtles (2014)",
        embedUrl: "https://strmup.cc/vec0hg2SNbKmt",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Teenage_Mutant_Ninja_Turtles_film_July_2014_poster.jpg/250px-Teenage_Mutant_Ninja_Turtles_film_July_2014_poster.jpg",
        genre: "Action+Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Superman (2025)",
        embedUrl: "https://short.icu/2n0arTCV5",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZGVhZjQwODYtZjY1NC00NDU1LWJmOTctMTI4OWEwMjczYWQ5XkEyXkFqcGc@._V1_FMjpg_UY600_.jpg",
        genre: "Action, Sci-Fi",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dumb and Dumber To (2014)",
        embedUrl: "https://short.icu/eYdfSMlHQ",
        posterUrl: "https://resizing.flixster.com/AQu2Ooqv5pTPlJsEOt8B13RdveE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10501558_v_v13_at.jpg",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dumb and Dumber (1994)",
        embedUrl: "https://short.icu/KCh4XzIFN",
        posterUrl: "https://resizing.flixster.com/hjiMprpa3OZc0Jr1za3-O5ergYo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16298_v_v10_ac.jpg",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dumb and Dumberer: When Harry Met Lloyd (2003)",
        embedUrl: "https://short.icu/5hcwLtEXN",
        posterUrl: "https://resizing.flixster.com/nNm8cDn9yB_bokbGbCJtgzARb9w=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p32091_p_v8_aa.jpg",
        genre: "Comedy",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Girls to Buy (2022)",
        embedUrl: "https://short.icu/kOe-UEtCW",
        posterUrl: "https://resizing.flixster.com/tk50i6i2keTgUrQ3AWUIqv0diQs=/fit-in/705x460/v2/https://resizing.flixster.com/YcCr9niAIsr-_hYZ_taOdfgXwb0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ2NWNhMDJlLTAyMTAtNGU1My05ZTgyLTQxMGY2ODE2NDYzNy5qcGc=",
        genre: "Drama",
        category: "Hollywood",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    // =======================================================================
    // 1. ANIMATION / ANIMATION / ANIMATION/ ANIMATION /
    // =======================================================================
    {
        title: "The SpongeBob Movie: Search for SquarePants (2025)",
        embedUrl: "https://short.icu/O5tBCprfz",
        posterUrl: "https://resizing.flixster.com/3_UpKMrkKBgZihTnu1SXbnXbXCY=/fit-in/705x460/v2/https://resizing.flixster.com/D4XOTaLafpvnMFIDBQuZsWa9dZ0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzljZWFmMTRlLWM5MDUtNDJjMC1hYWM5LTQzMDhiNjE2NzAyNC5qcGc=",
        genre: "Kids & Family, Comedy, Adventure, Music, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Coco (2017)",
        embedUrl: "https://short.icu/pDlg1VaUFC",
        posterUrl: "https://resizing.flixster.com/5JEUeTwtiw_PyDkcw_Z7J0xjcB8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/172117/172117_ac.jpg",
        genre: "Kids & Family, Comedy, Adventure, Music, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Grave of the Fireflies (1994)",
        embedUrl: "https://short.icu/QBr1K2OPIc",
        posterUrl: "https://resizing.flixster.com/AcF30ZVHnSwbm-PonwFzLRNb5qw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19079_p_v8_aa.jpg",
        genre: "Kids & Family, Comedy, Fantasy, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Zootopia (2016)",
        embedUrl: "https://short.icu/cBKMi7RWx",
        posterUrl: "https://resizing.flixster.com/iPiVw_PAygYWdZqcZPWVSfZ_HAs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11993845_p_v8_aq.jpg",
        genre: "Kids & Family, Comedy, Fantasy, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Elemental (2023)",
        embedUrl: "https://short.icu/iis-aTB9K",
        posterUrl: "https://resizing.flixster.com/HsQlr69fJ3plUbvJHbnF9w-2gec=/fit-in/705x460/v2/https://resizing.flixster.com/d2Wksb7QiCclajiDgNFXynWEook=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y4MTU2NzhjLWMxNDAtNDI5Yy04MzNkLTA5MzQ2ZWNlMmY5Yi5qcGc=",
        genre: "Kids & Family, Comedy, Fantasy, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Spider-Man: Into the Spider-Verse (2018)",
        embedUrl: "https://short.icu/fTtpq84sn",
        posterUrl: "https://resizing.flixster.com/uEMUMcE89EaZI0513vO7dUETRpQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14939602_v_v13_aa.jpg",
        genre: "Kids, Family, Action, Adventure, Comedy, Fantasy, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Penguins of Madagascar (2014)",
        embedUrl: "https://short.icu/gbpzXgR9v",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/5f/Penguins_of_Madagascar_poster.jpg",
        genre: "Comedy,Action,Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "A Silent Voice (2017)",
        embedUrl: "https://short.icu/UAxXPWfHOe",
        posterUrl: "https://resizing.flixster.com/hc18fzpApcyn9ZeiIteSTkuLCwU=/fit-in/705x460/v2/https://resizing.flixster.com/uySebkQyz_HevTz42NxdHghv1v0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NmZTk1OGMyLThmZDctNGYwYS1iMjBkLWEyZTRmZDUxZjk0Yi5qcGc=",
        genre: "Drama, Romance, Anime",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Suzume (2023)",
        embedUrl: "https://short.icu/HhdkZYZia",
        posterUrl: "https://resizing.flixster.com/ErTvN44y1tfW_y9pMtY8rnBufZw=/fit-in/705x460/v2/https://resizing.flixster.com/zg3xSM8uDH5CXhrMDpZ-p4qhpp8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI3OGExOWVjLTIwNGEtNGRhNS1hMzIxLTE5OGFhYWNlOWRhOS5wbmc=",
        genre: "Fantasy, Adventure, Anime",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "DC League of Super-Pets (2022)",
        embedUrl: "https://short.icu/XGHsrziDv",
        posterUrl: "https://resizing.flixster.com/i4bV6BNhpl2f1S0zErto6bsKN0Y=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18414940_k_v10_ac.jpg",
        genre: "Kids & Family, Comedy, Adventure, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sausage Party (2016)",
        embedUrl: "https://short.icu/Uyk0qfZ-H",
        posterUrl: "https://resizing.flixster.com/pkbXuw_wT3bSLaitApxjDy6TXaU=/fit-in/705x460/v2/https://resizing.flixster.com/grKIHVI_Ov4wtQxUHELYmTfqlbw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VkMThlZmViLWJmZGMtNGE4My1hMTBiLWU1ZGRjMGI5ODQ4Mi53ZWJw",
        genre: "Comedy, Adventure, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sausage Party: Foodtopia (2024)",
        posterUrl: "https://resizing.flixster.com/6gwAlF1ittxchYbe5dAK5oWt_n8=/fit-in/705x460/v2/https://resizing.flixster.com/qIfNQBlQslBNjaOQczZMaQfQ5iQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMmE5NzVhMWItMGM2MS00NzgwLThiZDYtOGQ2ZmVjNTNiZjI5LmpwZw==",
        genre: "Entertainment, Comedy, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/sRl8305D2" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/xdFvP-vrs" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/Kg0qyDyHh" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/L6oCBnm87" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/WrU64QDlQ" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/YzbSa8f0s" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/jUWs60xk-" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/ZN62hyn5L" },
        ]
    },
    {
        title: "Sausage Party: Foodtopia (2025)",
        posterUrl: "https://resizing.flixster.com/2iV8zc7vcnxwvHv_bMk-MHEHIP0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30544367_b_v13_aa.jpg",
        genre: "Entertainment, Comedy, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/iDCGG16_8" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/3Q-LvKJff" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/nasE-A9dH" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/O1KO62oF-" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/iuggJheWa" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/Jsj6GHYzt7" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/dnfDIAm_39" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/_XYXkckHX" },
        ]
    },
    {
        title: "Spies in Disguise (2019)",
        embedUrl: "https://short.icu/oIfcj747K",
        posterUrl: "https://resizing.flixster.com/lkvRCIg3R_LL1ylqSTLcOcm4mpE=/fit-in/705x460/v2/https://resizing.flixster.com/1VW0qOF1n44Vz3YlYKcTSD2wnAg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VmNjhhNzU3LTNiNzAtNDQ2MS04Zjc2LWYyNTI0NDhlODUxOC53ZWJw",
        genre: "Kids & Family, Comedy, Adventure, Action, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Wild Robot (2024)",
        embedUrl: "https://short.icu/yWTZ9v1DE",
        posterUrl: "https://resizing.flixster.com/ReiHiovRyy3DLvv5UIhJwS5-6DY=/fit-in/705x460/v2/https://resizing.flixster.com/lHaqu6LmY6U4YEtS8mjPyQxxFIo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlkYTdiMzc3LWU3ZTYtNGU3Zi04OGUyLWZhM2VkMGJiOTE2Ni5qcGc=",
        genre: "Kids & Family, Comedy, Adventure, Action, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Your Name (2017)",
        embedUrl: "https://short.icu/Es4l4ZRu7",
        posterUrl: "https://resizing.flixster.com/XACD2L4QmzIVHFYnLfN0guPyqzw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13514865_v_v8_aa.jpg",
        genre: "Fantasy, Romance, Anime",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Spider-Man Across The Spider-Verse (2023)",
        embedUrl: "https://short.icu/6G4d-Wzvp",
        posterUrl: "https://resizing.flixster.com/28W1En9sRoefkdB25Zs0iCbi9hM=/fit-in/705x460/v2/https://resizing.flixster.com/_l50Ahm00b-RO9Ao2s3AyMjUWiU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ExYTZmMWFkLWViZWItNDNhMS1iZTEwLTcxODk1YTk3NWFhMy53ZWJw",
        genre: "Kids & Family, Action, Adventure, Comedy, Fantasy, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kung Fu Panda (2008)",
        embedUrl: "https://short.icu/Ep6gz-ZJI",
        posterUrl: "https://resizing.flixster.com/hN1Op8Ut4oXYsBSs1MmZ0SfKg2g=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/64718/64718_aa.jpg",
        genre: "Kids & Family, Comedy, Adventure, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kung Fu Panda 2 (2011)",
        embedUrl: "https://short.icu/w-gT4_qe8",
        posterUrl: "https://resizing.flixster.com/OJKqocPAB_q9nC3UoPNzFdu6f9Q=/fit-in/705x460/v2/https://resizing.flixster.com/UuPhHpbpSF7Dor6jM9XEXacfV_I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgxOWZkN2NjLWI3YTUtNDkzZi1iMDhmLTc5OGU3OWIyMTY1MC5qcGc=",
        genre: "Kids & Family, Comedy, Adventure, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kung Fu Panda 3 (2016)",
        embedUrl: "https://short.icu/srup7bQph",
        posterUrl: "https://resizing.flixster.com/SHnUKhF17yG9A3k7KhERZSZCwAo=/fit-in/705x460/v2/https://resizing.flixster.com/bUHfz6f5Jl-STdX8vdyauuFMIfY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUwMzUyZGMxLTViMjAtNDM5MS04YjhmLTRlNzU1YWNlMzViZS53ZWJw",
        genre: "Kids & Family, Comedy, Adventure, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kung Fu Panda 4 (2024)",
        embedUrl: "https://short.icu/tFhXD57yv",
        posterUrl: "https://resizing.flixster.com/DbYlcm3GB-pjimW8Tq749lI9kw8=/fit-in/705x460/v2/https://resizing.flixster.com/gbUUcDTtnjLFPRoTQtyPB5nW4OE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ3ZDdmYjllLTNkZDItNDJiOC1hMGZkLWVkMTdmMDg1YzViYy5qcGc=",
        genre: "Kids & Family, Comedy, Adventure, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Big Hero 6 (2014)",
        embedUrl: "https://short.icu/ANZeJv3Y8",
        posterUrl: "https://resizing.flixster.com/PCLt7TMEEyVNr1VCWj6RjU59e6I=/fit-in/705x460/v2/https://resizing.flixster.com/cF_-k2Mw9iYCpgsNC7lpVtyGkMo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiZjhjOGRlLWFiNzYtNGU3OC1iYWQ5LTBlOTY4NjIwYmIxMS53ZWJw",
        genre: "Kids & Family, Comedy, Adventure, Action, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Boss Baby: Family Business (2021)",
        embedUrl: "https://short.icu/DElguPO5U",
        posterUrl: "https://resizing.flixster.com/3JIQb7JsOuPeoTW1ixSWy7IptsU=/fit-in/705x460/v2/https://resizing.flixster.com/UauXyhYmV77HTI1VU8m0OzspdqM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJmMTg3ODU5LWJlNWEtNGNhNC1hMGNlLTU2YTU2MDIzODllNS5qcGc=",
        genre: "Kids & Family, Comedy, Adventure, Action, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Cloudy With a Chance of Meatballs 2 (2013)",
        embedUrl: "https://short.icu/mOrJTkRCW",
        posterUrl: "https://resizing.flixster.com/j78I_Hj4dW_ZGg5KIYMIcai4PgI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9872696_v_v8_ab.jpg",
        genre: "Kids & Family, Comedy, Adventure, Action, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Boss.Baby (2017)",
        embedUrl: "https://short.icu/VEZwzERb0",
        posterUrl: "https://resizing.flixster.com/7jiydFFE_LFNKqWkKZljzslx5qM=/fit-in/705x460/v2/https://resizing.flixster.com/zXDukKJ3xDGnzZ3JVoyr-u9uyYk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E3NGI4Yzk1LTZjZjYtNGE4NS04YjkxLWI0MTAyMzQxOTBlNS53ZWJw",
        genre: "Kids & Family, Comedy, Adventure, Action, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Epic (2013)",
        embedUrl: "https://short.icu/bip9As_UY",
        posterUrl: "https://resizing.flixster.com/JDNxQ2iVZyLBYP0Me-musTN11uc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9330057_p_v11_ar.jpg",
        genre: "Kids & Family, Comedy, Adventure, Action, Animation",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Planes (2013)",
        embedUrl: "https://short.icu/mU64uHf37",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/7b/Planes_FilmPoster.jpeg",
        genre: "Comedy,Adventure,Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "A Bug's Life (1998)",
        embedUrl: "https://short.icu/teEExGwXU",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/A_Bug%27s_Life.jpg/250px-A_Bug%27s_Life.jpg",
        genre: "Comedy,Adventure,Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Puss in Boots: The Last Wish (2022)",
        embedUrl: "https://short.icu/CDZvEE9Es",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg",
        genre: "Comedy,Adventure,Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Madagascar (2005)",
        embedUrl: "https://short.icu/3daHncQKv",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Madagascar_Theatrical_Poster.jpg/250px-Madagascar_Theatrical_Poster.jpg",
        genre: "Comedy,Adventure,Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Madagascar 3: Europe's Most Wanted (2012)",
        embedUrl: "https://short.icu/txxarVWZ3",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Madagascar3-Poster.jpg/250px-Madagascar3-Poster.jpg",
        genre: "Comedy,Adventure,Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Madagascar: Escape 2 Africa (2008)",
        embedUrl: "https://short.icu/dYIJhmXkl",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Madagascar2poster.jpg/250px-Madagascar2poster.jpg",
        genre: "Comedy,Adventure,Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Good Dinosaur (2015)",
        embedUrl: "https://short.icu/hTToKOBLP",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/80/The_Good_Dinosaur_poster.jpg",
        genre: "Comedy,Adventure,Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Incredibles 2 (2018)",
        embedUrl: "https://short.icu/yifii72Rd",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Incredibles_2_%282018_animated_film%29.jpg/250px-Incredibles_2_%282018_animated_film%29.jpg",
        genre: "Comedy,Action,Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Incredibles  (2004)",
        embedUrl: "https://short.icu/ieiOXHfne",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg/250px-The_Incredibles_%282004_animated_feature_film%29.jpg",
        genre: "Comedy,Action,Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "How to Train Your Dragon (2010)",
        embedUrl: "https://short.icu/AVkm6_uM-",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "How to Train Your Dragon:The Hidden World (2019)",
        embedUrl: "https://short.icu/4g9_JoiXg",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/f/fd/How_to_Train_Your_Dragon_3_poster.png",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "How to Train Your Dragon 2 (2014)",
        embedUrl: "https://short.icu/qtE6hhv2Y",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/af/How_to_Train_Your_Dragon_2_poster.jpg",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hotel Transylvania 2 (2015)",
        embedUrl: "https://short.icu/Fu8ZUPOWZ",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/5d/Hotel_Transylvania_2_poster.jpg",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hotel Transylvania (2012)",
        embedUrl: "https://short.icu/P5AQgkMbH",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/f/f5/HotelTransylvania.jpg",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hotel Transylvania 3:Summer Vacation (2018)",
        embedUrl: "https://short.icu/7ZVqJ3Jdto",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Hotel_Transylvania_3_%282018%29_Poster.jpg/250px-Hotel_Transylvania_3_%282018%29_Poster.jpg",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        quality: "HD"
    },
    {
        title: "Spider-Man: Across the Spider-Verse (2023)",
        embedUrl: "https://short.icu/6G4d-Wzvp",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Megamind (2010)",
        embedUrl: "https://short.icu/xJK3yl9WT",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Megamind2010Poster.jpg/250px-Megamind2010Poster.jpg",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ferdinand (2017)",
        embedUrl: "https://short.icu/x7nfqioRN",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Ferdinand_%28film%29.png",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Turbo (2013)",
        embedUrl: "https://short.icu/AYo1lrGzw",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Turbo_%28film%29_poster.jpg/250px-Turbo_%28film%29_poster.jpg",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mummies (2023)",
        embedUrl: "https://short.icu/86LlAWuwD",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/MummiesMoviePoster.jpg/250px-MummiesMoviePoster.jpg",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Secret Life of Pets (2016)",
        embedUrl: "https://short.icu/NwbdGdhSJ",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/64/The_Secret_Life_of_Pets_poster.jpg",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Garfield Movie (2024)",
        embedUrl: "https://short.icu/qjONbdLdV",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/The_Garfield_Movie_2024_poster.jpg/250px-The_Garfield_Movie_2024_poster.jpg",
        genre: "Comedy, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ne Zha 2 (2025)",
        embedUrl: "https://strmup.cc/yO9t7HqbLTse3",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Ne_Zha_2_poster.jpg/250px-Ne_Zha_2_poster.jpg",
        genre: "Action, Family",
        category: "Animation",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    // =======================================================================
    // 1. SOUTH / SOUTH / SOUTH/ SOUTH / SOUTH / SOUTH
    // =======================================================================
    {
        title: "Cheekatilo (2026)",
        embedUrl: "https://short.icu/ZHboSJf2I",
        posterUrl: "https://resizing.flixster.com/tDhcjnbtUNm8Z2lXxkdbik1EXTk=/fit-in/705x460/v2/https://resizing.flixster.com/bFeY3wFMjCGCZEVbIrU4ahnCSJI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU1YTEzOWRkLTRkZDYtNDYxNi05YzE2LTg0Mzk5ZTRkNGNkMC5qcGc=",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mowgli (2025)",
        embedUrl: "https://short.icu/Y_bNvZZW5",
        posterUrl: "https://resizing.flixster.com/yC2Egz64J0aJvJIajke4rINVqhU=/fit-in/705x460/v2/https://resizing.flixster.com/JAZpQ8EJTQ561i3G-wec6h54Rk4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlhYTQ1OTg1LTA3NDYtNGRmNS05MmMzLWU0NjljMWY3ZWQ3YS5qcGc=",
        genre: "Action, Adventure, Drama, Romance",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Laalo: Krishna Sada Sahaayate (2025)",
        embedUrl: "https://short.icu/ceOQlWI4l",
        posterUrl: "https://resizing.flixster.com/GiGgELx2QMeYag3klrzZ4tsWif8=/fit-in/705x460/v2/https://resizing.flixster.com/9iK1j4NiYGRYHBlUROPMNVgHrZU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YzN2UyMDkxLTI1MDItNDYxMC1hMTJiLTg2NTYxNzk0Zjc4YS5qcGc=",
        genre: "Drama, Thriller, Survival",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kumki 2 (2025)",
        embedUrl: "https://short.icu/qnrGH_2NV",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYTI4YWEyYjQtZDg0Ni00NWE0LWFkMzUtZWY2N2MzN2UxOGVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Drama, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Bed (2026)",
        embedUrl: "https://short.icu/FHcXGiqG5",
        posterUrl: "https://images.filmibeat.com/img/popcorn/movie_posters/thebed-20251231121329-24060.jpg",
        genre: "Drama, Thriller, Crime",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dear Radhi (2026)",
        embedUrl: "https://short.icu/Ex7VnepBr",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZDBiOTBmYjctNzY5Mi00ZjAxLWJmZGUtZDk1ZDljZmNjNzhhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Comedy, Fantasy, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sarvam Maya (2025)",
        embedUrl: "https://short.icu/d8ezDPPJG",
        posterUrl: "https://resizing.flixster.com/_Q7bixzrtb7hyEAM-lT5gSYSwGk=/fit-in/705x460/v2/https://resizing.flixster.com/W1JbpmDQ-ieMm_b_ZJ2Fpvc7WKA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzkzNzAzNDQ0LTYxMGQtNGZlOS1iM2ZhLWM5NjFiZjE1ZGU3MC5qcGc=",
        genre: "Comedy, Fantasy, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Asvins (2023)",
        embedUrl: "https://short.icu/AEyIZUffw",
        posterUrl: "https://resizing.flixster.com/TucQHc8sjZNRhKImwAS9Q0qzAZA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25255566_v_v13_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dhandoraa (2026)",
        embedUrl: "https://short.icu/Zdqpn4t7r",
        posterUrl: "https://preview.redd.it/dhandoraa-2026-review-discussion-thread-spoilers-must-be-v0-qc8oxfccpi9g1.jpg?width=1800&format=pjpg&auto=webp&s=59870562fb2ae1db6bb1a417f5ccfbb98224ba75",
        genre: "Mystery & Thriller, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Anantha (2026)",
        embedUrl: "https://short.icu/1EbwQuxWb",
        posterUrl: "https://scontent.fdac189-1.fna.fbcdn.net/v/t39.30808-6/615469044_1429716052498141_4787021575409013824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeECigd93hwenYQd7dcbqq5rki15iHNnSYaSLXmIc2dJhufqXALJ1IZxzw7BGZMgyJkBZtjrZJLvkPEnJysk5gmY&_nc_ohc=fI3WsinxMp0Q7kNvwE2-31B&_nc_oc=AdlMNJYXIWZ_ya5bEqpznwXvUPjheiAcJGqGPpY8b2-kD35dPjcfb9HH-i_qJVji93w&_nc_zt=23&_nc_ht=scontent.fdac189-1.fna&_nc_gid=LTRRbroPYKA6n9MtWOs0vg&oh=00_AfqVUMFcefHJGmAZK4S5mF4ahb_AHAjYk-0w8uCqt5SQ2A&oe=696CDB01",
        genre: "Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Not All Movies Are the Same: Dual (2025)",
        embedUrl: "https://short.icu/VETxVIqyr",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNjFjYjg3NTEtYmNiYS00M2RjLWIzZWUtYzQ4ZTAyMzQwZTVkXkEyXkFqcGc@._V1_.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Raja Saab (2026)",
        embedUrl: "https://short.icu/-fW_xW261",
        posterUrl: "https://resizing.flixster.com/TCnm-VWLJOfxNw4akLEDjOLGLBU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30946581_p_v8_aa.jpg",
        genre: "Comedy, Horror, Romance, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Akhanda 2 (2025)",
        embedUrl: "https://short.icu/5Rina7ZOT",
        posterUrl: "https://resizing.flixster.com/b_H_TxMNFlZ8d8M-VlecXWbbBs8=/fit-in/705x460/v2/https://resizing.flixster.com/g8OCe4LeAELv6XOf5Hv-4DsikYE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg2ZTQ3NDI4LTU0NTgtNDVjZC04MDg1LTNiM2ZkNWE5NjdkYS5qcGc=",
        genre: "Fantasy, Action, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Akhanda (2021)",
        embedUrl: "https://short.icu/TSZ-FybXo",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMmRiZDJjOTktNzE4Ny00NDdiLTkzOGQtNjllZTk1OGM4YjYzXkEyXkFqcGc@._V1_.jpg",
        genre: "Action, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Others (2025)",
        embedUrl: "https://short.icu/AB_NcFXbp",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNWIzOGQyZDItZGZhYy00YjI3LWFkY2YtNTgwNzkwMDAwYzRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Action, Drama, Suspense, Thriller, Mystery",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Eleven (2025)",
        embedUrl: "https://short.icu/EExl_cqs_",
        posterUrl: "https://resizing.flixster.com/0tznSIXWb-VPSgBLYFxYiaOMrsg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30594304_p_v8_aa.jpg",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "KA (2024)",
        embedUrl: "https://short.icu/nnA9f7pAp",
        posterUrl: "https://resizing.flixster.com/kewVjjfBama92HEfvUNQNzXItvU=/fit-in/705x460/v2/https://resizing.flixster.com/kytjFYURLSLQqTPYJkhI59zwbww=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2UzOTYyMDRlLTY0YzUtNGViMS1hZTUwLTQ5YjUzNmEzYjBiNS5qcGc=",
        genre: "Mystery & Thriller, Action",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "45 (2026)",
        embedUrl: "https://short.icu/SiN3C3cBt",
        posterUrl: "https://resizing.flixster.com/BqHqvQPvS3GZmbQmGbZtECwjrag=/fit-in/705x460/v2/https://resizing.flixster.com/eSPywC9v_ANVF68NgiJMIuRohZc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzkwZDliNDg4LWYxM2QtNDc5ZC1hN2EwLTk1NjkxZDcyOThiZC5qcGc=",
        genre: "Action, Drama, Comedy",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "House Mates (2025)",
        embedUrl: "https://short.icu/uZceJvI06",
        posterUrl: "https://resizing.flixster.com/4ioQ7VQR-EOlQpGwpycLQyy3Rms=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30836701_p_v10_aa.jpg",
        genre: "Comedy, Horror, Fantasy",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Eko (2025)",
        embedUrl: "https://short.icu/Km0BkZEqf",
        posterUrl: "https://resizing.flixster.com/g9ADdd_1ULwBCuLibHjYUOxoXd8=/fit-in/705x460/v2/https://resizing.flixster.com/YDvSYoB5W6Rwh67ysE0pVsz3XnM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY5ZWE3NTM0LTliMjEtNDZhMi04ZmQzLWQ0YjZiNTM3ODAxYi5qcGc=",
        genre: "Adventure, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Agent Sai Srinivasa Athreya (2019)",
        embedUrl: "https://short.icu/b8Jo3MT_O",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZDRiMjY1ZjQtNzFkNC00NmVhLWIyZTQtNTAzMGUzMTMxMzdkXkEyXkFqcGc@._V1_.jpg",
        genre: "Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mass Jathara (2025)",
        embedUrl: "https://short.icu/KVXoohuWq",
        posterUrl: "https://resizing.flixster.com/6TpJc9cDVxI_tjFEAwaXjp99--Q=/fit-in/705x460/v2/https://resizing.flixster.com/sS5GWqLFrvujpiJC0VC0V956QEg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I4YzY5NmQ2LWQ5NDctNGM2Yi04OTcxLTZmNWI1OThmM2I2MS5qcGc=",
        genre: "Action",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Maharaja (2024)",
        embedUrl: "https://short.icu/hLqlwOV5u",
        posterUrl: "https://resizing.flixster.com/FWDstlVnnITTHzY8eiVsbqAMxaw=/fit-in/705x460/v2/https://resizing.flixster.com/yK5sd94jiGCtF8GtGu9AbcDMYqI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2UwNjEyZGJlLWFiNTgtNDA1OS1iYjdlLTk1M2VmNDkzMTY3OS5qcGc=",
        genre: "Action, Mystery & Thriller, Crime, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Vikram (2022)",
        embedUrl: "https://short.icu/4bZVKj31l",
        posterUrl: "https://resizing.flixster.com/isSlkCu744BpjOZXhgfoLa62_v4=/fit-in/705x460/v2/https://resizing.flixster.com/N9oVCGW5d7BKOqmStmpCJsQKijI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhiMTVmMGVjLTNlOTItNDdmNy04YzRjLTFkY2E5NGZkZWFhZi5qcGc=",
        genre: "Action, Mystery & Thriller, Crime, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "RRR (2022)",
        embedUrl: "https://short.icu/i_2F4Gqt7",
        posterUrl: "https://resizing.flixster.com/BTvFIj0HhgSDhlqOs05RKv3fiFg=/fit-in/705x460/v2/https://resizing.flixster.com/BN4S6kzfD9ZbvanjxBmNLYNquLU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E2ZTQxYzhkLTFhNTItNDhkMy05ZjA3LTBmYzhjYTc2NWQyMi5qcGc=",
        genre: "Drama, Action, Adventure",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kantara: A Legend (2022)",
        embedUrl: "https://short.icu/oxdRa19at",
        posterUrl: "https://resizing.flixster.com/zgzgHzSY-52Rf-2CKPiVlAp5cuA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23030032_p_v12_ab.jpg",
        genre: "Drama, Action, Adventure",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pushpa: The Rise - Part 1 (2021)",
        embedUrl: "https://short.icu/rlclnvt8-",
        posterUrl: "https://resizing.flixster.com/AE8lfGOaDoyaRMtXGKUvm1imjuk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21200456_v_v8_aa.jpg",
        genre: "Action, Mystery & Thriller, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pushpa: The Rule - Part 2 (2024)",
        embedUrl: "https://short.icu/nFbtvhcMc",
        posterUrl: "https://resizing.flixster.com/wnU0PjocXb3dwT7W-dblLavUuIA=/fit-in/705x460/v2/https://resizing.flixster.com/LIGY2sHHbosMyQYJ8Yw4s9C_Z6Y=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY4MmIwZGI3LTYyZjUtNDBjZC1hMDA3LTQ4MTgyYWRiODQ2Ny5qcGc=",
        genre: "Action, Mystery & Thriller, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Santhana Prapthirasthu (2025)",
        embedUrl: "https://short.icu/RuRmpi72X",
        posterUrl: "https://cdn.gulte.com/wp-content/uploads/2025/01/Vikranths-Santhana-Prapthirasthu.jpeg",
        genre: "Comedy, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=OWovRkszMlFCZmZ6anJsMUcxZEFNSElEM2NSeE5HSzFQVjRlVzJXSVFJelkyRHNSZllScGdReWo0bk1yWXFyM1RYeERHR2ZFTEpGZ3l6SHVYUFdxdDhWdFErRkJkQ2IzWFVkTFovek1oSlk9"
    },
    {
        title: "Vanam (2021)",
        embedUrl: "https://short.icu/MUYvOfNNf",
        posterUrl: "https://resizing.flixster.com/ycsWtLKDc9fspgKLDpvOD_m3JUc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23756570_v_v13_aa.jpg",
        genre: "Horror, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Bank of Bhagyalakshmi (2025)",
        embedUrl: "https://short.icu/vHi6HVMP-",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNjlhODg1NjctOTA4Zi00NzkyLTliMTYtZGEyNjU5MGM4ZWM2XkEyXkFqcGc@._V1_.jpg",
        genre: "comedy, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Parasakthi (2026)",
        embedUrl: "https://short.icu/S1YAfzbIl",
        posterUrl: "https://resizing.flixster.com/hB-AdQlS2_19kISOZa6QGu15t0o=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p32066236_p_v13_aa.jpg",
        genre: "Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Retta Thala (2025)",
        embedUrl: "https://short.icu/jGJfl3o_9",
        posterUrl: "https://resizing.flixster.com/z6A7KdmbhwGIASHSYn6SADh1Seo=/fit-in/705x460/v2/https://resizing.flixster.com/rg3RXUaL_8DA75fJvTkX_vbQZxM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZjMTg4OTY4LThmYjctNDE3OS1iY2JiLWQ0MGY1NjIyMDY4YS5qcGc=",
        genre: "Action, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Rekhachithram (2025)",
        embedUrl: "https://short.icu/qramuDgdd",
        posterUrl: "https://resizing.flixster.com/bnA8D39jL2nKTaw0ZLlZPH6caaA=/fit-in/705x460/v2/https://resizing.flixster.com/Os29IZOMKHMIWImJLaLaTw3_BN0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U3N2E3YTkxLTczY2YtNDFiZC1hNWFiLTBiZGZhOGQ2OGRjOS5qcGc=",
        genre: "Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Kishkindha Kaandam (2024)",
        embedUrl: "https://short.icu/k_cxJGTHK",
        posterUrl: "https://resizing.flixster.com/HzOMGeCW93neczLMHuf2cpDEDLo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28288002_v_v12_aa.jpg",
        genre: "Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "My Name Is Shruthi (2023)",
        embedUrl: "https://short.icu/dxiO-PC9m",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BOWI5M2I5OGUtOGViYi00N2JjLTkwODctYzJkZjY3NDJlZGJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Ratsasan (2018)",
        embedUrl: "https://short.icu/eGwH_xg2V",
        posterUrl: "https://resizing.flixster.com/uYgJJ6csMDOEE77wDR68cFzdR4M=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16069514_v_v8_aa.jpg",
        genre: "Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Black (2024)",
        embedUrl: "https://short.icu/T9qLIcmnX",
        posterUrl: "https://resizing.flixster.com/3DHMlCsyhHA0zdGMpiM4q4GhSVQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28579558_v_v8_aa.jpg",
        genre: "Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Park (2024)",
        embedUrl: "https://short.icu/5UwkE9rry",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTFmYTAzNjQtMWQ1MC00ODc1LWEwMWUtNzI5OWE0MjIyMzgzXkEyXkFqcGc@._V1_.jpg",
        genre: "Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Vivekanandan Viralaanu (2024)",
        embedUrl: "https://short.icu/aGo9UoUI3",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYzc3NzU4NDUtY2M3MC00YzcyLTlmMDktNDRkZDkzYTljMGY1XkEyXkFqcGc@._V1_.jpg",
        genre: "Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Sita Ramam (2022)",
        embedUrl: "https://short.icu/blSeRHLJD",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYWE0NDNiNzEtNThmMi00NjZlLTk3NDAtYzIzOWNmNWQyYTI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Drama, Romance",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=VXZtOXRidXZOZDBTNExRNU0vRW9kaitTV294eHVtclpoQ2Nhbk5nZE93ME1PSzdFU043NytxamRqcHZRYktlVmNTRzNlTDRGdVBhY0pNWnF1VkE5YlJFV3NsbUZuYkM5aEZQd3hBNGlRdEE9"
    },
    {
        title: "Echo (2023)",
        embedUrl: "https://short.icu/MUYvOfNNf",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMWMyMTljMTItNWZmZC00ODllLWIzOTEtOTcwMzczOThlNmUwXkEyXkFqcGc@._V1_.jpg",
        genre: "Thriller, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Saaho (2019)",
        embedUrl: "https://short.icu/p2aznLuFf",
        posterUrl: "https://resizing.flixster.com/BZAzpdlQ9SvwTXsog0FQHrshlNc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17133532_p_v8_ab.jpg",
        genre: "Action, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "777 Charlie (2022)",
        embedUrl: "https://short.icu/QGBz-Yg-2",
        posterUrl: "https://resizing.flixster.com/5ixyRocGhRe57-FblBC2o0A_SE4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22301806_p_v13_aa.jpg",
        genre: "Comedy, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hanu Man (2022)",
        embedUrl: "https://short.icu/wQKLJOZI_",
        posterUrl: "https://resizing.flixster.com/86ioIcXkqX1kO8NcOaP33a9p18g=/fit-in/705x460/v2/https://resizing.flixster.com/yl4Z6PxNXzHmqcvrfa0OFUPoJCk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNiMGE5M2M0LWQ0ZGItNDgzOS05Nzc5LWVhMTA4MjY0ZmE2YS5qcGc=",
        genre: "Action, Adventure, Fantasy",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Super Deluxe (2019)",
        embedUrl: "https://short.icu/BudhW7sTe",
        posterUrl: "https://resizing.flixster.com/WNEiJcI6hQEE9RwMTVLis9MWkis=/fit-in/705x460/v2/https://resizing.flixster.com/IkBUD567mZBeC-yX3T4QJhi08cs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA1MGEwYzk1LTE2ZWItNDU0Ny1hOThhLTE2ZmFlN2NkN2VkNC53ZWJw",
        genre: "Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Devara Part 1 (2024)",
        embedUrl: "https://short.icu/x646nnF8C",
        posterUrl: "https://resizing.flixster.com/20ZHpPJxiSiLpYU_6NjCTG8NjiQ=/fit-in/705x460/v2/https://resizing.flixster.com/9t0voUhquXWmkCHRrQxngSYbX1o=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ViMTRlMDk1LWM4ZjQtNDRmYS1hNjE4LTFiYWRkNDMwOGM5NS5qcGc=",
        genre: "Action, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jailer (2023)",
        embedUrl: "https://short.icu/132FY_u6b5",
        posterUrl: "https://resizing.flixster.com/KxbWUY6CSmp5KJKXJvkv7qL-BUk=/fit-in/705x460/v2/https://resizing.flixster.com/uV5WHlEIeBOO2TAIEA1cCI9_gCA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQxZTk1NWZhLWEwMzEtNDgzMi1hM2Y0LWQ5YWQ2OTliZGEyNC5qcGc=",
        genre: "Action, Comedy, Crime",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kannum Kannum Kollaiyadithaal (2020)",
        embedUrl: "https://short.icu/FRhcfN2nn",
        posterUrl: "https://resizing.flixster.com/e6NUKuh2-4XFnMovtRcMxmfvw1w=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18021011_p_v8_aa.jpg",
        genre: "Comedy, Drama, Romance, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Lucky Baskhar (2024)",
        embedUrl: "https://short.icu/Pcep4Q4zD",
        posterUrl: "https://resizing.flixster.com/BsNYz25q_1ns1hQEqeE7MCMrxoQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28031251_p_v10_aa.jpg",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Shambhala (2025)",
        embedUrl: "https://short.icu/0d3HsAaqq",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMDk1ZTJlMDktOTc5Zi00MjIxLTlhMjItYjlhZGQxNzY5OGRkXkEyXkFqcGc@._V1_.jpg",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Anjaam Pathiraa (2022)",
        embedUrl: "https://short.icu/HLwz2QQOk",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BY2JhODUyY2MtNGFjYS00Yjg2LWEzM2EtMjE5ZWNlZDg3YTM5XkEyXkFqcGc@._V1_.jpg",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kabzaa (2023)",
        embedUrl: "https://short.icu/vlLrxEvZb",
        posterUrl: "https://resizing.flixster.com/qWfGd6lfLbr7Jr1aU6r5LnHQcms=/fit-in/705x460/v2/https://resizing.flixster.com/MfPqcMwLbotSshDUMUoFC_FAPIY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U3YzMyYmRjLTFiNmMtNDEyNi05ZjA1LTViZDUzMDJiYTc5ZS5qcGc=",
        genre: "Action",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "90's - A Middle Class Biopic (2025)",
        embedUrl: "https://short.icu/L40krfsvQ",
        posterUrl: "https://resizing.flixster.com/jW1WxHAzmSkN14FAj7W7uvnlNPc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28510579_v_v8_aa.jpg",
        genre: "Documentary, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=QVNBWHpqSy9xR1hsYUYrNDRMaDB5WllKeGlqMnFhRXZVRm1tc2xVRnNEUjIxZUhWZy9sbG5CNWJMbnRnY3Bra3lGNWQwNHgrNW1YV0ZvR3djV1hMcGVxSGp2cUJmaDI5THNzVkxwaGFoY0k9",
        seriesInfo: "Season 1, Episode All"
    },
    {
        title: "Diesel (2025)",
        embedUrl: "https://short.icu/MUYvOfNNf",
        posterUrl: "https://resizing.flixster.com/cY-EI-Qrn-VLEJEMECDjSrT5iAQ=/fit-in/705x460/v2/https://resizing.flixster.com/BXFpzRRyVtqCChP2-OFSiELiv1w=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2MGE3NzE0LTFhOTgtNDljMC1hZjA3LWI2YmI1ODhjZWFhNC5qcGc=",
        genre: "Action, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Avihitham (2025)",
        embedUrl: "https://short.icu/r86GD65OR",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/6d/Avihitham_Film.jpg",
        genre: "Comedy, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kuberaa (2025)",
        embedUrl: "https://short.icu/LfbTWqDO-",
        posterUrl: "https://resizing.flixster.com/Tm5sJ0eK9skzMa-cj8tbfBnyG7E=/fit-in/705x460/v2/https://resizing.flixster.com/Qj7_R_9gNGVWDBDC5qfPnRyHVQM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E0ZjZjNjBlLTk3OWMtNDhjNi05YmFlLTg4YTViYjYzOTNlYi5qcGc=",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Maareesan (2025)",
        embedUrl: "https://short.icu/lFAq_g3ne",
        posterUrl: "https://resizing.flixster.com/t32joDPe8GTGWaUr_G0e-sxNdm8=/fit-in/705x460/v2/https://resizing.flixster.com/TEJOuNmHBze6VVPpLykqwTqdQIE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdiYWIyNTg1LTE3YjItNDU4Mi1hZjdiLTA5N2NmMDI5OTgyNS5qcGc=",
        genre: "Kids & Family, Comedy, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Vettaiyan (2024)",
        embedUrl: "https://short.icu/LdZ9DxG1uH",
        posterUrl: "https://resizing.flixster.com/plRaD45OF3eljRNV_cX96P1173Q=/fit-in/705x460/v2/https://resizing.flixster.com/Su37yMHS_87ytsMY0PqhZxu9YFg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JkNzkwNmViLTJkNzgtNDM3Mi1hNGNkLTE4YTQ5MTRjODk3Ni5qcGc=",
        genre: "Action, Crime, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Spy (2023)",
        embedUrl: "https://short.icu/-RwGRmwLv",
        posterUrl: "https://resizing.flixster.com/v8sQBWntP4T9_YUQMtlHT8UENoY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24951636_v_v8_aa.jpg",
        genre: "Action, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Leo (2023)",
        embedUrl: "https://short.icu/xj5j5t_xV",
        posterUrl: "https://resizing.flixster.com/8AqVr9t78dXxf1GiqgxAnhTHdKs=/fit-in/705x460/v2/https://resizing.flixster.com/-BOvYVtW6LKWOdfbFz12hVdYzGk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RlNzVkZjM0LWRiZmEtNGE0YS1hYTUyLTU1YzlhYjQwMzViZi5qcGc=",
        genre: "Action, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Aaromaley (2025)",
        embedUrl: "https://short.icu/uCS49c1T2",
        posterUrl: "https://resizing.flixster.com/ZhdWE_iF5NQHGODM7tLer89k124=/fit-in/705x460/v2/https://resizing.flixster.com/cQg_1oV3vmTgxGvDTEeRicesBJA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlkMzBjNTBmLWZiOWQtNDkzZi1iZjUwLWU0YTRmOWU3YmY3Yy5qcGc=",
        genre: "Comedy, Drama, Romance",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "K-Ramp (2025)",
        embedUrl: "https://short.icu/LwU-Ahuq0",
        posterUrl: "https://resizing.flixster.com/a9VHikHBz8qfiqQsXTGGFSPeO7M=/fit-in/705x460/v2/https://resizing.flixster.com/rmx14sVS4v1siC1_1SoJvDb6KDU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIwMjM2YTUyLTEwOWItNDFkOC1hNzUwLTM0NDMyOWE2MjY1ZC5qcGc=",
        genre: "Action, Romance",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Web (2023)",
        embedUrl: "https://short.icu/EtTlZCWA7",
        posterUrl: "https://resizing.flixster.com/26UCVX1rRo7pqMAGd3hu9NAHCac=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26335914_v_v8_aa.jpg",
        genre: "Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kaantha (2025)",
        embedUrl: "https://short.icu/9FzAkJ40v",
        posterUrl: "https://resizing.flixster.com/Wj81PgFWf2AI3mXyGTt4PPfZAqE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31181428_k_v8_aa.jpg",
        genre: "Horror, Mystery & Thriller, Biography, Drama, History",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Thug Life (2025)",
        embedUrl: "https://short.icu/8Y4XTO7g-",
        posterUrl: "https://resizing.flixster.com/bgtVyLyOztlgYRlisEFO7YlTki0=/fit-in/705x460/v2/https://resizing.flixster.com/BQedJL6xsaWPd4J-_uGSwcFnefE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E3MTc1MmY5LTZiMDItNDgwZC05OWY2LWMyNGJlYTc4OTEwZi5qcGc=",
        genre: "Action, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Good Bad Ugly (2025)",
        embedUrl: "https://short.icu/_JYOtupOq",
        posterUrl: "https://resizing.flixster.com/T8bi1b49dgxBP9ALIQEw2A_9PAQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29795092_v_v8_aa.jpg",
        genre: "Action, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Game Changer (2025)",
        embedUrl: "https://short.icu/7kC2_ZdGYW",
        posterUrl: "https://resizing.flixster.com/FquxHybcq0Hn07tY4s3vmhGjkk8=/fit-in/705x460/v2/https://resizing.flixster.com/oU1jMB-OmqwbQHEfEwX7ZxLJNww=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE3NjVhNzY3LWNhM2ItNGY0ZS05Y2RkLWFjZjQ0ODdjZTI5Mi5qcGc=",
        genre: "Action, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Parking (2025)",
        embedUrl: "https://short.icu/ZBi1suN1T",
        posterUrl: "https://resizing.flixster.com/xFTzRSFPK-AuGHLSWkT1Qjp5xqI=/fit-in/705x460/v2/https://resizing.flixster.com/HC3kpfk_e4dIVpuUk0p_vj6XUNQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYyM2U2NDFkLWZhNDItNDQ2NS04ZjkzLTY2NGIwODc4MTA1NC5qcGc=",
        genre: "Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Aaryan (2025)",
        embedUrl: "https://short.icu/RFKREeeXR",
        posterUrl: "https://resizing.flixster.com/baIQZDqbKzM1CE8tFSLlgNt1aC0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31567556_v_v8_aa.jpg",
        genre: "Action, Crime, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hridayapoorvam (2025)",
        embedUrl: "https://short.icu/6HNKjFg_D",
        posterUrl: "https://resizing.flixster.com/NBqXojauqImP5E8xd8QlmNmHzYE=/fit-in/705x460/v2/https://resizing.flixster.com/d97O6fFRfcL1HhDldmbZjtTkhtY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZkNjk1YzIxLWUxZjctNDE2Zi04MjdmLTVhM2I1MmZjYjY4Yy5qcGc=",
        genre: "Comedy, Drama, Romance",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Neru (2023)",
        embedUrl: "https://short.icu/o_8QgkLXt",
        posterUrl: "https://resizing.flixster.com/XjONFVfosfJ_BjF3n5MC0xibgf4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26274686_p_v8_aa.jpg",
        genre: "Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Padakkalam (2025)",
        embedUrl: "https://short.icu/9buSU-pLW",
        posterUrl: "https://resizing.flixster.com/arh3E3-blAdtUUW2YXiHp-OFcgo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30219477_p_v8_aa.jpg",
        genre: "Comedy, Fantasy",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mirai (2025)",
        embedUrl: "https://short.icu/mSyFAjkO_",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Mirai_%282025_film%29_poster.jpg/250px-Mirai_%282025_film%29_poster.jpg",
        genre: "Sci-Fi, Action, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Marco (2024)",
        embedUrl: "https://short.icu/iHmJlMuhC",
        posterUrl: "https://resizing.flixster.com/wMV5pCJKpJ5AyOOhoL8r8VWJXas=/fit-in/705x460/v2/https://resizing.flixster.com/iotg87enNS03O5E-wSnvksvGNqU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgyZjQ5OTZlLWM0ZjgtNGI2My04MGZmLWRkMjhiMzU2YjNhYi5qcGc=",
        genre: "Action, Mystery, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bahubali 2: The Conclusion (2017)",
        embedUrl: "https://short.icu/_kfCsE8ws",
        posterUrl: "https://resizing.flixster.com/0qYhNXeNvZDWnazihSzUXaXFcHs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14612810_v_v8_ab.jpg",
        genre: "Drama, Action, Adventure, Fantasy",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kalki 2898 AD (2024)",
        embedUrl: "https://short.icu/Xv-g6S4KW",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kalki_2898_AD.jpg",
        genre: "Sci-Fi, Action, Adventure",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kantara: Chapter 1 (2025)",
        embedUrl: "https://short.icu/gC_mj92ca",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Kantara-_Chapter_1_poster.jpg/250px-Kantara-_Chapter_1_poster.jpg",
        genre: "Suspense,Action,Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mirage (2025)",
        embedUrl: "https://short.icu/L00NMsjY7",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/e3/Mirage_2025.jpg",
        genre: "Suspense, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Coolie (2025)",
        embedUrl: "https://short.icu/NE_6rK1lC",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/a8/Coolie_%282025_film%29_poster.jpg",
        genre: "Action, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "K.G.F: Chapter 1 (2018)",
        embedUrl: "https://short.icu/tpVZR-QhD",
        posterUrl: "https://resizing.flixster.com/rhwLzKF70TX0MDqLS25BbAx-ofk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16345736_v_v8_ad.jpg",
        genre: "Action, Crime, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "K.G.F: Chapter 2 (2022)",
        embedUrl: "https://short.icu/c1iCB_Kdi",
        posterUrl: "https://resizing.flixster.com/suo3hOI4Z1hQ8xivb8wMcpxSlto=/fit-in/705x460/v2/https://resizing.flixster.com/RMqSUWxqVzutVfehHFk_8_i284Y=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZhOTQzZTZmLWE1MjctNDkxYi04ODk1LWM1ZmZlY2QwMzg0ZC5qcGc=",
        genre: "Action, Crime, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "I (2015)",
        embedUrl: "https://short.icu/5q_KCRkVW",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/I_film_poster.jpg/250px-I_film_poster.jpg",
        genre: "Action, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kingdom (2025)",
        embedUrl: "https://short.icu/vKVMwOJi-",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/80/Kingdom_2025_Film_Poster.jpg",
        genre: "Action, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Lokah Chapter One: Chandra (2025)",
        embedUrl: "https://short.icu/foPnb9w4e",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNWFkMGFmNTQtOTUwYS00NDFkLWFkNDAtZjA4ODliYTc2MmFmXkEyXkFqcGc@._V1_FMjpg_UY600_.jpg",
        genre: "Action, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Maargan (2025)",
        embedUrl: "https://short.icu/bC_whPx52",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNmU4ZGIwZmMtN2JlMS00YzYxLWJlZjItNjkxNjYzYWZkYjI3XkEyXkFqcGc@._V1_FMjpg_UY720_.jpg",
        genre: "Suspense, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Salaar: Part 1 – Ceasefire (2023)",
        embedUrl: "https://short.icu/7qE5C3jz-",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
        genre: "Suspense, Action, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Vikram Vedha (2017)",
        embedUrl: "https://short.icu/Keuz4A9ly",
        posterUrl: "https://resizing.flixster.com/pxVtYeBWvZ34riDgnD8qNU-V4AU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14341711_v_v8_aa.jpg",
        genre: "Action, Crime, Drama, Mystery, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dragon (2025)",
        embedUrl: "https://short.icu/RUzKihmOJ",
        posterUrl: "https://resizing.flixster.com/eXI0BdEDdq0ATqQd07f5-jjVTWw=/fit-in/705x460/v2/https://resizing.flixster.com/wYBp4uIc3pwBvibAoaAM9fTkhOs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFhYzg4ODEzLTY4MmItNDZlYy04OWYwLWQ1MzJhZGU2MTcxYi5qcGc=",
        genre: "Comedy, Drama, Romance",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Maanaadu (2021)",
        embedUrl: "https://short.icu/5vkjDljHK",
        posterUrl: "https://resizing.flixster.com/9piKzbRY3zwUyXffJfcacEDOad8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20980727_p_v10_aa.jpg",
        genre: "Action, Adventure, Sci-Fi, Mystery, Thriller, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Viduthalai Part 1 (2023)",
        embedUrl: "https://short.icu/OM4dQdbdt",
        posterUrl: "https://resizing.flixster.com/w7AshDJV9eCZEYtJjHSLYR3maWk=/fit-in/705x460/v2/https://resizing.flixster.com/lwH6sY-6f8s5csHKwwaacTJaozk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNhZDk2ZDhmLTNiOTctNDkxYy04OTVjLWZjNDc1OTZlOTQ1MC5qcGc=",
        genre: "Action, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Viduthalai Part 2 (2024)",
        embedUrl: "https://short.icu/KnReCXyaQ",
        posterUrl: "https://resizing.flixster.com/gpG6Vu0GhXK7PsWNOE4ffu7tELw=/fit-in/705x460/v2/https://resizing.flixster.com/FzGrINf_HUps8fYv08whRwceONE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ViYjgzZDRiLTVlZDQtNDQzOS1iZGY5LWZjYmQyY2U1OTQ5ZS5qcGc=",
        genre: "Action, Crime, Drama, Mystery, Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Love Today (2022)",
        embedUrl: "https://short.icu/PpYkyut39",
        posterUrl: "https://resizing.flixster.com/uz-f60pxgkMltTj6rTBR7vf1FGo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23364878_p_v7_aa.jpg",
        genre: "Comedy, Drama, Romance",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Girlfriend (2025)",
        embedUrl: "https://short.icu/1R_-ceghI",
        posterUrl: "https://resizing.flixster.com/om4pnHn6A8x--k60SzQM3SJmTOc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31630799_p_v10_aa.jpg",
        genre: "Drama, Romance",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Akaali (2024)",
        embedUrl: "https://short.icu/ALKAs7zsJ",
        posterUrl: "https://resizing.flixster.com/tRylTyB1SXtob2n3ZUWDmMkrL2o=/fit-in/705x460/v2/https://resizing.flixster.com/sSqUbhO4wqvO4yj236PTHoePRsI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVkZDY5MGQwLTllZDEtNDQ0ZC1hZTYzLTY2NjlmZGIxMjQ1Ny5qcGc=",
        genre: "Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Aan Paavam Pollathathu (2025)",
        embedUrl: "https://short.icu/I6jp41xew",
        posterUrl: "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/243235/Aan%20Paavam%20Pollathathu.jpg",
        genre: "Comedy, Drama, Romance",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sookshma Darshini (2024)",
        embedUrl: "https://short.icu/3vaUwIORw",
        posterUrl: "https://resizing.flixster.com/ItEderKJOSpasdc-mbPKcrvT4Ho=/fit-in/705x460/v2/https://resizing.flixster.com/xMtVjVSvjHa5c60mmguk4Pj_FLo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NkODNiMTY2LTRiMDktNGRlZS1iYjU4LWVlZjIwZTlkYTc5Ni5qcGc=",
        genre: "Mystery & Thriller, Comedy",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Tourist Family (2025)",
        embedUrl: "https://short.icu/csQ6ZG2KF",
        posterUrl: "https://resizing.flixster.com/bWtVs0wWxFgxzkCDZHMkO5jO410=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30084675_v_v8_aa.jpg",
        genre: "Comedy, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dies Irae (2025)",
        embedUrl: "https://short.icu/6C2FFk6at",
        posterUrl: "https://resizing.flixster.com/mFyVAvz1NkFJzMxBb5wkUNs7RIk=/fit-in/705x460/v2/https://resizing.flixster.com/w4oDfJFdWPsBaQBQZ9YU-m4vzws=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ2YmMzZDQ0LWJmMzQtNDUwZi05NjlhLWJlYzA0MzEzM2E3YS5qcGc=",
        genre: "Horror, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dude (2025)",
        embedUrl: "https://short.icu/DKZF-s9jq",
        posterUrl: "https://resizing.flixster.com/yXvNkNLg03cg_XtLY5IWp97JuEQ=/fit-in/705x460/v2/https://resizing.flixster.com/oV_dnb8gZSdGaMuld7ikTlof7vg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NmYjMyYTlkLWQ0NzMtNDJlMy1hOTYzLWY1ZmE2MzAwNTI3NS5qcGc=",
        genre: "Comedy, Drama, Romance",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Thudarum (2025)",
        embedUrl: "https://short.icu/EZx19lSB5",
        posterUrl: "https://resizing.flixster.com/xpWjqQWrkyb9Qs0ce5M5gOopjOw=/fit-in/705x460/v2/https://resizing.flixster.com/ovf08wh2398_DXc4-f5y7VwidEI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhiMjg3MTljLTAzMTEtNDA2ZC05YmQxLTY1Y2IwMjdjYzY3Ni5qcGc=",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Gentleman (2016)",
        embedUrl: "https://short.icu/wqDB7eNjfQ",
        posterUrl: "https://resizing.flixster.com/CitP3ZudQu8YRdGbQRDNbmVmbG4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12971560_v_v8_af.jpg",
        genre: "Romance, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Drive (2025)",
        embedUrl: "https://short.icu/ajfmyZeUW",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZTU3YjQ0NjAtNTY1MS00MGZkLThmMDctNDI2YTBlNGFmZjZhXkEyXkFqcGc@._V1_.jpg",
        genre: "Romance, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "DSP (2022)",
        embedUrl: "https://short.icu/sui3m9WhO",
        posterUrl: "https://resizing.flixster.com/i97mrVXGekk6rq3sdvJ6jJAJtfk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23766874_p_v8_aa.jpg",
        genre: "Action, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ace (2025)",
        embedUrl: "https://short.icu/KbfyAKqzN",
        posterUrl: "https://resizing.flixster.com/IGfYFFph4NsWaD4dy3-hreOADwU=/fit-in/705x460/v2/https://resizing.flixster.com/hNUJngJpjfywl0kGP9omd0wMJ3I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc1NTdkYTQ3LWI1MGUtNDU0MC04MjY3LTM5NGI1MWM1Mjc5YS5qcGc=",
        genre: "Action, Adventure, Fantasy, Crime, Mystery & Thriller",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Court - State Vs. A Nobody (2025)",
        embedUrl: "https://short.icu/A_hnK9eeN",
        posterUrl: "https://resizing.flixster.com/5aFdiA3QqyekFZrWTwLN2IyFcyk=/fit-in/705x460/v2/https://resizing.flixster.com/L_mXzp-lqjJruypERYkLkfA09m8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVkNTQ1NjIwLWZjNzgtNDFlNi1iOTRjLWNmZTEyNzFiMTAzMC5qcGc=",
        genre: "Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Detective Karthik (2023)",
        embedUrl: "https://short.icu/NrkgFsbz8",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BOGI1NjZlZGMtMzA1Mi00ZDhjLWE0MDQtMDZjZDM4NDQyYTRjXkEyXkFqcGc@._V1_.jpg",
        genre: "Mystery, Thriller, Action",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kempu Haladi Hasiru (2025)",
        embedUrl: "https://short.icu/j_FobvhXV",
        posterUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kempu-haladi-hasiru-et00472592-1764240845.jpg",
        genre: "Mystery, Thriller, Drama",
        category: "South",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    // =======================================================================
    // 1. BANGLA / BANGLA / BANGLA/ BANGLA / BANGLA / BANGLA
    // =======================================================================
    {
        title: "Toofan (2024)",
        embedUrl: "https://short.icu/dcPf0VGHy",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Toofan_%282024_film%29.jpeg/250px-Toofan_%282024_film%29.jpeg",
        genre: "Action, Thriller",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Taandob (2025)",
        embedUrl: "https://short.icu/-kzRj69dW",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Taandob_movie.jpg/250px-Taandob_movie.jpg",
        genre: "Action, Thriller",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Borbaad (2025)",
        embedUrl: "https://short.icu/gHJC0kqWtT",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Borbaad_2025_film.jpg/250px-Borbaad_2025_film.jpg",
        genre: "Action, Thriller",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Priyotoma (2023)",
        embedUrl: "https://short.icu/Gmz2E07Y5",
        posterUrl: "https://asset.bioscopelive.com/uploads/images/2025/03/10/images_70003a375f5ca7ad7e9eb6de07c4ad7d_goplay_priyotoma_port.jpg",
        genre: "Action, Thriller",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Rajkumar (2024)",
        embedUrl: "https://short.icu/SX4znNLWf",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZDg4ZTUxNDMtNTdmYS00YjQ4LWI5ZGQtMTY0ZmM2NTZmNGU4XkEyXkFqcGc@._V1_.jpg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Nabab (2017)",
        embedUrl: "https://short.icu/tlnh40L86",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNDQwNjBhZmQtZWI4Yy00NmI4LTkzYTgtNmI5MWU1NTgwNGU4XkEyXkFqcGc@._V1_.jpg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Leader: Amie Bangladesh (2023)",
        embedUrl: "https://short.icu/Y7hy9FTOu",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BODY4NTVmNTgtNDEyOC00NzY3LWE5MDctMjZjNzJkZTgyYWIxXkEyXkFqcGc@._V1_.jpg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Poran (2022)",
        embedUrl: "https://short.icu/ksbDn6ilf",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZjdkMTkyOGMtN2VkOC00MzllLWExYjgtZGM1Mzc0YTVkNTE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Pett Kata Shaw (2022)",
        embedUrl: "https://short.icu/fVnTNGxvV",
        posterUrl: "https://resizing.flixster.com/pqD8fMUa-1UuKTgrGhZf625mNx8=/fit-in/705x460/v2/https://resizing.flixster.com/eQvWTUfi27Ub2G1P-fjkMaQe2bs=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMTU0OTY4ZWItZDA2Ni00YzFkLTkwNTAtZDEyOGNkNjAwMjNiLmpwZw==",
        genre: "Horror, Mystery & Thriller",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All"
    },
    {
        title: " Dorod (2024)",
        embedUrl: "https://short.icu/gs2CORd_D",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BM2NlMjQzYTktMzQ2OC00MDAwLTkxMWMtY2I2MjEyNWIzNTRhXkEyXkFqcGc@._V1_.jpg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Janowar (2021)",
        embedUrl: "https://short.icu/LE0LAJukVT",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZjI1ZDI4OWEtMDViZS00M2M3LWJmNDEtZDgyYTU1NGViMDNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bir (2020)",
        embedUrl: "https://short.icu/IZE9lANg9",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYjQyOWU2ZTktZjc2Mi00YTg2LWJlZGYtNjVjYzUyMDc4OWNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Daagi (2025)",
        embedUrl: "https://short.icu/cYF45pTPT",
        posterUrl: "https://resizing.flixster.com/TgmcBnTeKWewmvOf2zbgqbxPSes=/fit-in/705x460/v2/https://resizing.flixster.com/XJv9lAGyRTEsfRuF1RZHXq4cH90=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEyNjE2OTZhLTFkZjAtNDgyMi05OGRjLWE2MjAwMjdjMzMxZC5qcGc=",
        genre: "Thriller, Action, Romance",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Khalid (2025)",
        embedUrl: "https://short.icu/LPo9DJgDb",
        posterUrl: "https://www.themoviedb.org/t/p/w600_and_h900_face/i7qImccjCXMr1FLL0UdTo97y01Y.jpg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Din The Day (2021)",
        embedUrl: "https://short.icu/w3vQB3act",
        posterUrl: "https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/195425c0-587a-41d7-9481-82638c928c81/f7193c1d-6035-41ec-b243-5f09461d68a9.jpg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Nabab LLB (2020)",
        embedUrl: "https://short.icu/ZyUy6xra7",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMDg4ZTAxNWEtOGNjNC00NGM1LWJhYzUtZmFlYTI4MDliYmYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Karagar (2022)",
        embedUrl: "https://short.icu/0dTjxoFlk",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNWVhNzNjMWUtNTRmZi00ODMyLTljOWUtY2UwNmRlOGFlMmQ5XkEyXkFqcGc@._V1_.jpg",
        genre: "Action & Thriller",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All"
    },
    {
        title: "Karagar (2022)",
        embedUrl: "https://short.icu/SXZm9S_FX",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYjFhNTQ3YjktMzExYy00YjIzLWFhOTctZTBhYWNhOTZmMTYzXkEyXkFqcGc@._V1_.jpg",
        genre: "Action & Thriller",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode All"
    },
    {
        title: "Chokkor 302 (2025)",
        embedUrl: "https://short.icu/i1RJ3D0C_",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Chokkor_302_official_logo.jpg/250px-Chokkor_302_official_logo.jpg",
        genre: "Thriller, Suspense",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Saheb Bibi Golaam (2016)",
        embedUrl: "https://short.icu/4iCvJzaoU",
        posterUrl: "https://resizing.flixster.com/Rsa_LglMkAHMY6TYP44ozLjqzZE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13678059_v_v8_aa.jpg",
        genre: "Action, Drama",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Noor (2025)",
        embedUrl: "https://short.icu/gLbXFhmD1",
        posterUrl: "https://www.themoviedb.org/t/p/w600_and_h900_face/oE15FoMUhJF7mbMeDQykFcFN6Kr.jpg",
        genre: "Romance, Drama",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Raavan (2022)",
        embedUrl: "https://short.icu/BXBSCc8h5",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Raavan_2022_film_poster.jpeg/250px-Raavan_2022_film_poster.jpeg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Bagha Jatin (2023)",
        embedUrl: "https://short.icu/IV5XcKF2x",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Bagha_Jatin_%282023_film%29_movie_poster.jpeg/250px-Bagha_Jatin_%282023_film%29_movie_poster.jpeg",
        genre: "Thriller, Action",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Jinn (2023)",
        embedUrl: "https://short.icu/StOSx_I-7",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BOWMyNGM1ZDUtZjk3My00MjM3LWFjOGItOGYwNjUyMzliNDQxXkEyXkFqcGc@._V1_.jpg",
        genre: "Horror",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dispassionate Love (2018)",
        embedUrl: "https://short.icu/sNknqHd1i",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMmU4ZTBlNWQtYTg3MC00MDk1LTliZTQtODY4NGVkNTZhNmE2XkEyXkFqcGc@._V1_.jpg",
        genre: "Drama, Adult",
        category: "Bangla",
        language: "Bangla",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    // =======================================================================
    // 1. KOREAN / KOREAN / KOREAN/ KOREAN / KOREAN / KOREAN
    // =======================================================================
    {
        title: "Along With the Gods: The Last 49 Days (2018)",
        embedUrl: "https://short.icu/3SOd9LSdk",
        posterUrl: "https://resizing.flixster.com/V24BHpzk4N5YeP_VUx7P44jMV2o=/fit-in/705x460/v2/https://resizing.flixster.com/6lWLbUaCdPDdotv3RhV2abbp5M4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE1Y2Q3MWVmLTFhYzMtNDhhZS1iY2Y3LTZmMjRjNjcwOTFlOS5qcGc=",
        genre: "Fantasy, Adventure, Action",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Crypto-Man (2025)",
        embedUrl: "https://short.icu/xT1ZM_TiH",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMGY1ZTMyZGUtNmRlMC00NDFhLWI5NTUtOWI0YzU1YjkyNmM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Action, Mystery & Thriller",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mantis (2025)",
        embedUrl: "https://short.icu/TXGxKOYn5",
        posterUrl: "https://resizing.flixster.com/J768IRGL9p7ql3HKLpMF7UNb5Qo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31068361_v_v8_aa.jpg",
        genre: "Action, Mystery & Thriller",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Great Flood (2025)",
        embedUrl: "https://short.icu/CeqWMN6mB",
        posterUrl: "https://resizing.flixster.com/C7b6gd_iFfL5d6mGaVeb_u6ae2w=/fit-in/705x460/v2/https://resizing.flixster.com/YF2VAKmn4wq6GcLjkL2o5t0q5F8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y4M2RjMjU4LTVmY2ItNGM3OC1hZDYxLWYwOTQ2Yzk2NWUzNC5qcGc=",
        genre: "Sci-Fi, Action, Adventure, Drama, Mystery & Thriller",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Oldboy (2005)",
        embedUrl: "https://short.icu/Z0LOVUD1V",
        posterUrl: "https://resizing.flixster.com/wM4ZjkJt3pDpDFcvdJmYSgZ-xdY=/fit-in/705x460/v2/https://resizing.flixster.com/A4O8aEoaCjZEfnOEFvH8nUmxTtI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZjMjAzODE0LWQ3YTItNDg0NC1iMTY5LTIzOGJmZDM0ZTZjOC5qcGc=",
        genre: "Action, Mystery & Thriller",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Parasite (2019)",
        embedUrl: "https://short.icu/is4na2czh",
        posterUrl: "https://resizing.flixster.com/vzsqzhHZ3QzSheIb_T0X0jY2l9U=/fit-in/705x460/v2/https://resizing.flixster.com/0nQ2niq2j-E4gdW_kB5H606atmc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZlZWEwMmY4LTk1OWUtNGEyOS04ODRmLTA0OWRjMzhlYWZkNi53ZWJw",
        genre: "Comedy, Mystery & Thriller, Drama",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Door Lock (2018)",
        embedUrl: "https://short.icu/8RmCM-Cewf",
        posterUrl: "https://resizing.flixster.com/YaaorFAWHgamLALx-vJG55pTDwU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20033648_v_v13_ac.jpg",
        genre: "Mystery, Thriller",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Witch: Part 1 - The Subversion (2018)",
        embedUrl: "https://short.icu/r1LMwMVEW2",
        posterUrl: "https://resizing.flixster.com/oXhO3Xk8CpkK7bGE6BY1lISU1S4=/fit-in/705x460/v2/https://resizing.flixster.com/J0yStPk_jsr1vWqhbCcQgwvo3Ec=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNmZWVjZjE5LWEzZTgtNDM4Ny1hYTcwLWVjZDFjYzcyZTczNC53ZWJw",
        genre: "Action, Mystery, Thriller, Sci-Fi",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Peninsula (2020)",
        embedUrl: "https://short.icu/2ZIwBDIrH",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Peninsula_poster.jpg/250px-Peninsula_poster.jpg",
        genre: "Suspense, Thriller, Survival",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Train to Busan (2016)",
        embedUrl: "https://short.icu/r7lePrkA5",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/95/Train_to_Busan.jpg",
        genre: "Suspense, Thriller, Survival",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hitman: Agent Jun (2020)",
        embedUrl: "https://short.icu/hxPI5_2Yi",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Hitman_Agent_Jun.jpg/250px-Hitman_Agent_Jun.jpg",
        genre: "Action, Thriller, Comedy",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Midnight (2022)",
        embedUrl: "https://short.icu/2JtqF39_J",
        posterUrl: "https://resizing.flixster.com/DpgsI8HWwksJJ_lKGT1kHPml54o=/fit-in/705x460/v2/https://resizing.flixster.com/LZT-RDhrki2gBQRqGFP8ASP4L70=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBiYjdiZDMxLTIzYzgtNDc1MS04ZTcwLWZjZjIzN2UxODUzZC5qcGc=",
        genre: "Mystery, Thriller",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Omniscient Reader: The Prophecy (2025)",
        embedUrl: "https://short.icu/Kab9URAOA",
        posterUrl: "https://resizing.flixster.com/6aK38tRJME9JpWruICz9QEdWOEs=/fit-in/705x460/v2/https://resizing.flixster.com/GkSp3Zjpnjg4KqR5MG22CBtsZMY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2UxN2ZjNDg3LWRlOGQtNDBlMC1iM2ExLTU5MzM0NmViMzU1Yi5qcGc=",
        genre: "Fantasy, Action, Adventure",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Chaser (2008)",
        embedUrl: "https://short.icu/UB9HT9fNPV",
        posterUrl: "https://resizing.flixster.com/Niy0iUNoAjyxvZnjibAMks-A95w=/fit-in/705x460/v2/https://resizing.flixster.com/QGJnfPZt2dq4b9TSYDHH--zcAqo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgwODAxODIwLTM2ZDktNDY1My1iMzdjLTQ3YjBlNWFhNDlhNi53ZWJw",
        genre: "Action, Mystery & Thriller, Crime, Drama",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Call (2020)",
        embedUrl: "https://short.icu/HoIUdHdbL",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYzZlOGEyZTMtYmIxYS00NmIxLWIwNjYtMzY3Yjg2OThjODU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Mystery, Thriller",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Alienoid (2022)",
        embedUrl: "https://short.icu/iAjK-wnxQ",
        posterUrl: "https://resizing.flixster.com/3jkkYAXiL2U5KxYJM-OHJxsDp34=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22596281_v_v8_ac.jpg",
        genre: "Action, Fantasy, Sci-Fi",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Alienoid: Return to the Future (2024)",
        embedUrl: "https://short.icu/iMwgChag6",
        posterUrl: "https://resizing.flixster.com/pDQ6l3VlwxRlxjkebuBO_z7SCLo=/fit-in/705x460/v2/https://resizing.flixster.com/kB_hxmzzE1tb3KXenNwzZ4sfDiE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EyMDYwMjhmLTNhNTEtNDg0OC1hYzkxLWM2ZGQ1ODIyNzcwMC5qcGc=",
        genre: "Action, Fantasy, Sci-Fi",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Will You Be There (2021)",
        embedUrl: "https://short.icu/aWRHXurBw",
        posterUrl: "https://resizing.flixster.com/Tp7KuBiOTQw6mTmiC2uwSek5Hqs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13661742_p_v8_ab.jpg",
        genre: "Action, Fantasy, Sci-Fi",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Pool (2018)",
        embedUrl: "https://short.icu/SNTHC96F9",
        posterUrl: "https://resizing.flixster.com/JkgCNHaG9vOfJNAmtbmBVaH5dM8=/fit-in/705x460/v2/https://resizing.flixster.com/54LOX2x6CO-d849oVTmuLwL5rt8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U3OTZkNjRlLWI4NTgtNGE0NS04NThiLWU4OTU1MWE2NmNkZi53ZWJw",
        genre: "Action, Mystery & Thriller",
        category: "Korean Country",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    // =======================================================================
    // 1. CHINESE / CHINESE / CHINESE/ CHINESE / CHINESE /
    // =======================================================================
    {
        title: "Rise of the Legend (2016)",
        embedUrl: "https://short.icu/OCIV2FHAi",
        posterUrl: "https://resizing.flixster.com/YEPmzTD3-VX5WLDkdJ7KNAYMLsc=/fit-in/705x460/v2/https://resizing.flixster.com/rylX1-Gbc0Z3IMDRAIrpMAIpdow=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhmNGUzZWM0LWY0YzctNDIxMC05YjFkLTBjZjA3YWNiMjUwMy53ZWJw",
        genre: "Action",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kung Fu Yoga (2017)",
        embedUrl: "https://short.icu/ExIDkhjQ4",
        posterUrl: "https://resizing.flixster.com/UZMY_30pbOh1H4p65tGricm6ohg=/fit-in/705x460/v2/https://resizing.flixster.com/YKiPr1D7lhV9jiLwXK9ik3IQMlw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EwODY4ZWFiLTBjMTQtNGZlZC04MjY1LTQwNTc5NjkxOTRlMC53ZWJw",
        genre: "Action, Adventure, Comedy",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Rob N Roll (2024)",
        embedUrl: "https://short.icu/TAhFDNR9j",
        posterUrl: "https://resizing.flixster.com/QG1uuafQ0CjrgK7p2WL3WqkRSDs=/fit-in/705x460/v2/https://resizing.flixster.com/_rZbcoDY6pkxegLmTbc6sQXDfhc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U3MDM2ZjFkLTgzZDEtNDVhMy1iNmU0LTlmNjZjZGFjOTkxYS5qcGc=",
        genre: "Action, Comedy, Crime",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Snake Skin Beauty (2024)",
        embedUrl: "https://short.icu/_sEt-CRVd",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZTM3M2VkNzItZTM1ZC00Zjk0LWE2MzQtYWQ4NGVhZTBjMTQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Fantasy, Adventure, Action",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Demon Hunter (2025)",
        embedUrl: "https://short.icu/3eCiCYR_S",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMzUyYWVlMTktN2Q4YS00YzQ5LTk1MGItMGE4NWIyMmIwNzA1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Fantasy, Adventure, Action",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Monkey King 2 (2016)",
        embedUrl: "https://short.icu/JmSuv4zGj",
        posterUrl: "https://resizing.flixster.com/XOLyMGkt0RV6fHUkTUdEmziuCNk=/fit-in/705x460/v2/https://resizing.flixster.com/YyStBg027pW_ZFWAUiB9FDVjgLY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZmZmE5OWQ4LTY5OTYtNGUwMC1iNDAzLWIxOTM5OTdmM2JmYy53ZWJw",
        genre: "Fantasy, Adventure, Action",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Wandering Earth (2019)",
        embedUrl: "https://short.icu/e2DItpFfB",
        posterUrl: "https://resizing.flixster.com/C-gTehq4Sf5Wp9xF1h-hhQP4PvM=/fit-in/705x460/v2/https://resizing.flixster.com/praeatSxJj0ZlZzHXri7w1yxf2A=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ExMjYyMzFmLTAyNzUtNGU2YS1hNjM3LTQyMjAxMTRkNTM1NC53ZWJw",
        genre: "Sci-Fi",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fatal Countdown: Reset (2017)",
        embedUrl: "https://short.icu/kdb27yOC6",
        posterUrl: "https://resizing.flixster.com/bnMrkZUGQxKMpyrwfXWXS9sTcKU=/fit-in/705x460/v2/https://resizing.flixster.com/R04mq7OKL_SeqHq8H_-NvfSPfOg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ1NTlkNTVlLTlkMzktNGRjNC1iNGY0LTQ5ZWNjZjI1NzIyYy53ZWJw",
        genre: "Action, Mystery & Thriller, Sci-Fi",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "A Writer's Odyssey (2021)",
        embedUrl: "https://short.icu/fjlXx-wyu",
        posterUrl: "https://resizing.flixster.com/3OK1XR-2bVNV8e4H2S4Nv_uvy4Q=/fit-in/705x460/v2/https://resizing.flixster.com/dQ8aZ6VyWuxylx5zNBMm_-c-97U=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgwMGY5ODNjLTEyMzQtNGQzZi04NjkyLTZlMWE0N2Q3ODljMC5qcGc=",
        genre: "Action, Fantasy, Drama, Adventure",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Escape of Shark (2021)",
        embedUrl: "https://short.icu/l9Tmlq8LB",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMmVhZmM0YjUtYzQ2MS00YjM0LThmYTMtODRmOWQ4NWIzMDBmXkEyXkFqcGc@._V1_.jpg",
        genre: "Action, Adventure, Horror",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Return of Wu Kong (2018)",
        embedUrl: "https://short.icu/qI3DWrpjq1",
        posterUrl: "https://resizing.flixster.com/0MGNEh6Oy0p61TEnf72YuZMtds8=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19853018_v_v9_ab.jpg",
        genre: "Action, Sci-Fi, Adventure",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Attack on Titan: Part 2 (2015)",
        embedUrl: "https://short.icu/ZEJA3EIBV",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYmEzNmYyMDYtYmFkYy00OGNkLTkyYmQtMDA2ZTE2OTkyYmFhXkEyXkFqcGc@._V1_QL75_UX153_.jpg",
        genre: "Action, Sci-Fi, Adventure",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Attack on Titan Part 1 (2015)",
        embedUrl: "https://short.icu/VJF5PI2v8",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQ1NjYwOTkyMF5BMl5BanBnXkFtZTgwNjk2NjE3NjE@._V1_QL75_UX158_.jpg",
        genre: "Action, Sci-Fi, Adventure",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Monkey King and City of Demons (2018)",
        embedUrl: "https://short.icu/7fmWGySQ4-",
        posterUrl: "https://a.ltrbxd.com/resized/film-poster/5/0/8/2/8/6/508286-monkey-king-and-the-city-of-demons-0-1000-0-1500-crop.jpg?v=4000cc9827",
        genre: "Action, Adventure",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Immortal Stone of Nirvana (2020)",
        embedUrl: "https://short.icu/yrgU-cRcU",
        posterUrl: "https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FbQwJBZssXjBStvT1svEA9n6POy2.jpg",
        genre: "Action, Adventure",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Demon Suppressors: West Barbarian Beast (2021)",
        embedUrl: "https://short.icu/jXTf6P8lX",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYzI0MTIzMDYtZjVhYi00MzdhLWI2ZjMtZWU1OTg3MGU1M2U2XkEyXkFqcGc@._V1_FMjpg_UY673_.jpg",
        genre: "Action, Adventure",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Shaolin Soccer (2001)",
        embedUrl: "https://short.icu/Gjobo0ty0",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/3/3e/ShaolinSoccerFilmPoster.jpg",
        genre: "Action, Adventure, Comedy",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Monster Run (2020)",
        embedUrl: "https://short.icu/KOVwgYV9k",
        posterUrl: "https://i.mydramalist.com/qgk2z_4f.jpg",
        genre: "Action, Adventure",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kung Fu Hustle (2004)",
        embedUrl: "https://short.icu/jNvTgL3Dv",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/00/KungFuHustleHKposter.jpg",
        genre: "Action, Comedy",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Unstoppable (2025)",
        embedUrl: "https://short.icu/BX3oVrT-d",
        posterUrl: "https://i.mydramalist.com/l0Nw6v_4f.jpg",
        genre: "Action, Fantasy, Sci-Fi",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fullmetal Alchemist (2017)",
        embedUrl: "https://short.icu/vp8dVUjtM",
        posterUrl: "https://resizing.flixster.com/8YAiBC6OG9UWaqQcf2j1sfGRAqA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15132604_v_v8_aa.jpg",
        genre: "Action, Fantasy, Sci-Fi",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fullmetal Alchemist: The Revenge of Scar (2022)",
        embedUrl: "https://short.icu/n9EYq4SV5",
        posterUrl: "https://resizing.flixster.com/CpkovJ3K1API3-SVrdX1HLav3oc=/fit-in/705x460/v2/https://resizing.flixster.com/8XyOyQQxr44bdiM1loNoTxeDLaU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE4NjkwNjVmLTMwYzgtNDAwNi05ZTRmLTg3MTc1MGYzNTIyMS5qcGc=",
        genre: "Action, Fantasy, Sci-Fi, Adventure",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Fullmetal Alchemist Final (2022)",
        embedUrl: "https://short.icu/KHnZDhlgW",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMzIxNzUwYzctOGJjZS00NmRkLWEwY2ItZTU2NDhlZjJlMjU4XkEyXkFqcGc@._V1_.jpg",
        genre: "Action, Fantasy, Sci-Fi, Adventure",
        category: "Chinese",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    // =======================================================================
    // 1. ADULT COMEDY / ADULT COMEDY / ADULT COMEDY / ADULT COMEDY /
    // =======================================================================
    {
        title: "Snack Shack (2014)",
        embedUrl: "https://short.icu/WE3u-Jqbd",
        posterUrl: "https://resizing.flixster.com/mAhwZxBF8CdUrOlnLci-VSNkyxI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25990560_p_v13_ac.jpg",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "No Hard Feelings (2023)",
        embedUrl: "https://short.icu/KudrJsmlT",
        posterUrl: "https://resizing.flixster.com/7ok8FTdI8QSuRRTMHVp2ERkS5XQ=/fit-in/705x460/v2/https://resizing.flixster.com/DDToSwhHClBZGg_iBmbyfuEybas=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc0MTM0MGM4LTg0ODItNGQyOC1hYzBkLTUzZjVhOTBlNDVmMy5qcGc=",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Dictator (2012)",
        embedUrl: "https://short.icu/vuOAV6anD",
        posterUrl: "https://resizing.flixster.com/ce7HVomzKONTqJ5a5YPLk16qsH0=/fit-in/705x460/v2/https://resizing.flixster.com/dnJO-Te141UoWLJV2xeX6qqlwLE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhiMWNmNWQ5LTA0NDMtNGFiYy1iYTVkLWI5Yjk4NTcwMDY2NC53ZWJw",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hot Tub Time Machine (2010)",
        embedUrl: "https://short.icu/8JYKk08W0",
        posterUrl: "https://resizing.flixster.com/UMN_rBjSp5uDYxtw87-nj2UZe94=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7820979_k_v8_ab.jpg",
        genre: "Sci-Fi, Fantasy, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mike and Dave Need Wedding Dates (2016)",
        embedUrl: "https://short.icu/1N7e-7Wsh",
        posterUrl: "https://resizing.flixster.com/eG_cGvtxZVtq5_kW7Qf2-f_nKPk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12393973_v_v8_aa.jpg",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Not Another Teen Movie (2001)",
        embedUrl: "https://short.icu/Tb3kQESXm",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/4a/Not_Another_Teen_Movie_poster.jpg",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Superbad (2007)",
        embedUrl: "https://short.icu/5peK7r1Sz",
        posterUrl: "https://resizing.flixster.com/SadW5uy6cUY6TnAD7w40ZNeyrJM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/59303/59303_aa.jpg",
        genre: "Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sophomore (2012)",
        embedUrl: "https://short.icu/3d0BR3bHBw",
        posterUrl: "https://resizing.flixster.com/R2jTE3nUIT7seTMciYI6BvB4kg4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10673642_p_v7_ab.jpg",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Naked Run (2011)",
        embedUrl: "https://short.icu/tN9-NjM3E",
        posterUrl: "https://a.ltrbxd.com/resized/film-poster/4/6/4/5/4/7/464547-naked-run-0-1000-0-1500-crop.jpg?v=e890b958c7",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Girls Gone Dead (2012)",
        embedUrl: "https://short.icu/EIWtalXVf",
        posterUrl: "https://resizing.flixster.com/HrH5FV8WRKVKiagk_WeguslXLwM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9316766_p_v8_aa.jpg",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "40 Days and 40 Nights (2002)",
        embedUrl: "https://short.icu/zDN1C6o9M",
        posterUrl: "https://resizing.flixster.com/3WpOC3vNs-EGi49OYpsPCR3SW-E=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29545_v_v13_al.jpg",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "You Don't Mess With the Zohan (2008)",
        embedUrl: "https://short.icu/zShegW6bF",
        posterUrl: "https://resizing.flixster.com/-qPJKqBMq6plr-zwe4dKzBRJZds=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p172787_p_v8_aj.jpg",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Sex Trip (2017)",
        embedUrl: "https://short.icu/cBSpyqKgP",
        posterUrl: "https://resizing.flixster.com/ihqqgf2_Twp9TAINt3eK_gkmBS0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14445293_v_v8_ac.jpg",
        genre: "Adult, Fantasy, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Scary Movie (2000)",
        embedUrl: "https://short.icu/9v-z2NmI7",
        posterUrl: "https://resizing.flixster.com/J_CDaWHjaggD8Si_Tw0hKx9b39Y=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25765_v_v8_ag.jpg",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Scary Movie 2 (2001)",
        embedUrl: "https://short.icu/2sGm0YRNM",
        posterUrl: "https://resizing.flixster.com/3iki8wkrQ1JnPRTTfnnFM6BAwog=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27977_v_v8_ae.jpg",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Scary Movie 3 (2003)",
        embedUrl: "https://short.icu/5ShCaLZZe",
        posterUrl: "https://resizing.flixster.com/_N9Sn1bhGERVpc4LaNRRnClWl0I=/fit-in/705x460/v2/https://resizing.flixster.com/Ydn-5mvgv83tHhf7YLaJm5PMkG4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQwNDZlNGM2LTE1YmYtNGQ5MC1hMGQ5LWQyZTEzOThjY2E4Mi53ZWJw",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Scary Movie 4 (2006)",
        embedUrl: "https://short.icu/vTLzMu9_L",
        posterUrl: "https://resizing.flixster.com/EoBRerNQY4LfZLgi2EqxZOod6GA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159780_v_v8_aa.jpg",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Scary Movie V (2013)",
        embedUrl: "https://short.icu/vUhK_xB3_",
        posterUrl: "https://resizing.flixster.com/oJbuPu9N-pBAULBoFQMgurf-YTA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8915708_p_v8_bf.jpg",
        genre: "Adult, Comedy",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Grand Masti (2013)",
        embedUrl: "https://short.icu/Ti_b36bDN",
        posterUrl: "https://resizing.flixster.com/ibb0MlPJeKLsqEOX0ZChoUeTorQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10204813_v_v8_aa.jpg",
        genre: "Adult, Comedy, Drama, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Great Grand Masti (2016)",
        embedUrl: "https://short.icu/RsMkvHhRo",
        posterUrl: "https://resizing.flixster.com/C9Py6rJP-mAljnEvzwEHOOgmBiQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14425122_v_v8_aa.jpg",
        genre: "Adult, Comedy, Drama, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dinosaur Island (1994)",
        embedUrl: "https://short.icu/r8me1hEXA",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/e9/Dinosaur_island_1994.jpg",
        genre: "Action, Sci-Fi, Adventure",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kyaa Kool Hain Hum 3 (2016)",
        embedUrl: "https://short.icu/1x_r6h7SM",
        posterUrl: "https://resizing.flixster.com/XCE3zBweT8kdCAvAGJxhW8MlJNI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12531572_v_v8_aa.jpg",
        genre: "Adult, Comedy, Drama, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kyaa Super Kool Hain Hum (2012)",
        embedUrl: "https://short.icu/IsGIy-dAE",
        posterUrl: "https://resizing.flixster.com/4hJxmK8S-k1-ww1_KA7ikRZrajk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9365162_v_v7_ac.jpg",
        genre: "Adult, Comedy, Drama, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Lust Stories (2018)",
        embedUrl: "https://short.icu/CPvVoBiq6",
        posterUrl: "https://resizing.flixster.com/4qy14jX5QfwE3TvrYmMRBEnZHOA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15594417_v_v8_ab.jpg",
        genre: "Adult, Comedy, Drama, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Lust Stories 2 (2023)",
        embedUrl: "https://short.icu/bb8nKYW8A",
        posterUrl: "https://resizing.flixster.com/Sgp9DkbW0XcN7JsE1AA3zMScUaQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25056488_k_v8_aa.jpg",
        genre: "Adult, Comedy, Drama, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Mastizaade (2016)",
        embedUrl: "https://short.icu/4vW96RBfJ",
        posterUrl: "https://resizing.flixster.com/OwV8Ua_be6YVmYx3BJzUJfZ2Cxk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12552339_v_v8_aa.jpg",
        genre: "Adult, Comedy, Drama, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ted (2012)",
        embedUrl: "https://short.icu/6SZ-eGyU7",
        posterUrl: "https://resizing.flixster.com/WD5SgpldeUS8g7bgJx2aHuKuV1s=/fit-in/705x460/v2/https://resizing.flixster.com/VNKmpMTdyB_BDtJ4uHjej-EDdTo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyNmI5M2EwLWNlOTMtNDFlMy05ZTZiLTZhZjU3MDk2NjRmOC53ZWJw",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Ted 2 (2015)",
        embedUrl: "https://short.icu/HkBoR82ot",
        posterUrl: "https://resizing.flixster.com/2KqWBoO2CSEwwMENBKMx0Z-1JS8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10975254_p_v8_aa.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Hostess in Heat (1973)",
        embedUrl: "https://short.icu/qyztRSCrU",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjI3NTViYjEtYjNhYy00MzE2LTgwY2EtYzdhMGY2YjFkMzNjXkEyXkFqcGc@._V1_.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "My Awkward Sexual Adventure (2012)",
        embedUrl: "https://short.icu/UIXE7rSC2",
        posterUrl: "https://resizing.flixster.com/FxSzDr-o2k56ueKg1uVTE_avEog=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9689112_p_v8_ai.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "American Pie Presents: Beta House (2007)",
        embedUrl: "https://short.icu/Zp0FJqT2f",
        posterUrl: "https://resizing.flixster.com/KtvEudZVS0_rSEXUwko5nlQB4_o=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p176525_p_v8_au.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "American Pie 2 (2001)",
        embedUrl: "https://short.icu/y9yWWrUen",
        posterUrl: "https://resizing.flixster.com/HHe4eyvRk45J2IjK1qALAY97Qfg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28143_v_v8_aa.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "American Pie (1999)",
        embedUrl: "https://short.icu/uq-h1ME6i",
        posterUrl: "https://resizing.flixster.com/ww3QIQ3ONwhUMEpF2QjnbZvX9y4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23343_v_v8_ah.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "American Pie 2 (2001)",
        embedUrl: "https://short.icu/y9yWWrUen",
        posterUrl: "https://resizing.flixster.com/HHe4eyvRk45J2IjK1qALAY97Qfg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28143_v_v8_aa.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "American Pie Presents: Girls' Rules (2020)",
        embedUrl: "https://short.icu/l_ACVxaHr",
        posterUrl: "https://resizing.flixster.com/tD4tJ2rKtUcoqvHB4HvceeRT1CM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18805837_p_v8_aa.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "American Pie Presents: Band Camp (2005)",
        embedUrl: "https://short.icu/Yubm8FHkA",
        posterUrl: "https://resizing.flixster.com/Gs4eG8tVAsyDr-x31p5tHiFZCcY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p160422_p_v8_aq.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "American Pie Presents: The Naked Mile (2006)",
        embedUrl: "https://short.icu/wBv2xlNM0",
        posterUrl: "https://resizing.flixster.com/P8sf7NvaUAUNLrXuu_5KUHBGOXs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p165702_v_v8_ap.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "American Pie Presents: The Book of Love (2009)",
        embedUrl: "https://short.icu/thndYa5bu",
        posterUrl: "https://resizing.flixster.com/u3mU-1n3ezSVMTE7ca_bIY8bRY0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7932738_v_v8_ak.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "American Reunion (2012)",
        embedUrl: "https://short.icu/o4DPtTu2q",
        posterUrl: "https://resizing.flixster.com/cnoijfJAA31iU_mUNpAcf0VJ3es=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8856830_v_v13_aa.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sex Drive (2008)",
        embedUrl: "https://short.icu/JhIWUx8h6",
        posterUrl: "https://resizing.flixster.com/G1Yx6pa6ARP9T9zhKe0dcDSXiTs=/fit-in/705x460/v2/https://resizing.flixster.com/sEz2jhKoTk2MEY5GNf8AzsPweGQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY4NTFkNWUxLWFmMzEtNDM0OS04NWFiLTdmMTY0MjFjMGJhNS53ZWJw",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Road Trip (2000)",
        embedUrl: "https://short.icu/qVKwoH806",
        posterUrl: "https://resizing.flixster.com/3XkCm32AMSl3o366kvO9jVI-mkE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24671_v_v12_bf.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Eurotrip (2004)",
        embedUrl: "https://short.icu/9HflMSa5B",
        posterUrl: "https://resizing.flixster.com/H-Vlx3vT5lEldenkG8zymTdpGtc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p33823_p_v8_ai.jpg",
        genre: "Adult, Comedy, Romance",
        category: "Adult Comedy",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    // =======================================================================
    // 1. OTHER'S / OTHER'S / OTHER'S /
    // =======================================================================
    {
        title: "Risque (2025)",
        embedUrl: "https://short.icu/ntvupzjT9",
        posterUrl: "https://resizing.flixster.com/cWSPbb2N8jeY5ZiI71r4Gt6S4VE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30555139_v_v12_aa.jpg",
        genre: "Adult, Romance, Drama, Mystery & Thriller",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Boobs: An American Obsession (2010)",
        embedUrl: "https://short.icu/75kRtEIvt",
        posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10960117_p_v8_aa.jpg",
        genre: "Adult, Romance, Drama",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Room in Rome (2010)",
        embedUrl: "https://short.icu/OaBPOg7lK",
        posterUrl: "https://resizing.flixster.com/w0DnKvaYBPV6xliqPM1J5ul-72I=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8329367_p_v7_ac.jpg",
        genre: "Adult, Romance, Drama",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Dirty Entertainers: The Business of Indian Erotica (2025)",
        embedUrl: "https://short.icu/1glXpiQQd",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNmQyYWY2Y2QtZTliMy00ZTc0LTk2OGItODE2MTQzYjVhYjUyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Adult, Romance, Drama",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Kapag Tumayo Ang Testigo (2025)",
        embedUrl: "https://short.icu/f8nkzBZXk",
        posterUrl: "https://i.wll.pw/storage.waploaded.com/images/ecf5755ac3fc0b6b40b0ccf9e887b23d.jpg",
        genre: "Adult, Romance, Drama",
        category: "Others",
        language: "Tagalog",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Balconettes (2024)",
        embedUrl: "https://short.icu/NTJoiFcam",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BY2QxYTljNTYtNDJjYy00ODZhLWJlMWItYjI2ZDI5MDhjY2RkXkEyXkFqcGc@._V1_.jpg",
        genre: "Adult, Romance, Drama",
        category: "Others",
        language: "Frence",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sex Pot (2009)",
        embedUrl: "https://short.icu/rFhCWHut2",
        posterUrl: "https://resizing.flixster.com/um_2a9g47Nm-zHovdb7Z9ONOWm0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7865351_p_v10_aa.jpg",
        genre: "Comedy, Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "The Seduction (2025)",
        embedUrl: "https://short.icu/5kh1jT0tR",
        posterUrl: "https://resizing.flixster.com/94Jz0EEPyEvjCaLm03Dg306mgPs=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31475526_b_v10_aa.jpg",
        genre: "Comedy, Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: " Virgin Territory (2007)",
        embedUrl: "https://short.icu/WAEJaL6oq",
        posterUrl: "https://resizing.flixster.com/FX6vqZgpWb5ln7k0e_4vI1RIwJY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p163807_v_v8_ad.jpg",
        genre: "Comedy, Adult, Drama",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Bitch Slap (2009)",
        embedUrl: "https://short.icu/6AJ9-7gxe",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTk0OTAzOTY2NF5BMl5BanBnXkFtZTcwMzcwMzM4MQ@@._V1_.jpg",
        genre: "Comedy, Adult, Action",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Oh, Hi! (2025)",
        embedUrl: "https://short.icu/1Y1oyIZkC",
        posterUrl: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2025/06/30192546/XBC1Oi5pXmlmvE1n2KqaS1qm7B-scaled.jpg",
        genre: "Comedy, Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Sex-Positive (2024)",
        embedUrl: "https://short.icu/hDq3qAEAu",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNzZjMjM2MjEtNGNlYy00NGY4LWJmYzgtZTQzODBkNDk1M2M1XkEyXkFqcGc@._V1_.jpg",
        genre: "Comedy, Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Salo, or the 120 Days of Sodom (1977)",
        embedUrl: "https://short.icu/S5rENV4tOl",
        posterUrl: "https://assets.lastdodo.com/image/ld_large/plain/assets/catalog/assets/2012/1/18/3/b/c/pdf_3bc0f5f0-23eb-012f-b16e-0050569439b1.jpg",
        genre: "Adult, Romance, Drama",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Doin' It (2025)",
        embedUrl: "https://short.icu/Q9e2O5DaE",
        posterUrl: "https://resizing.flixster.com/BPJdpmxtOdxgVdXTO4mbKp2-icc=/fit-in/705x460/v2/https://resizing.flixster.com/wUUbw_acnkvYeJUEv0XX-sTAzGA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQxN2U2NzU2LTg3MzYtNDlkOC1hY2JhLWIyNTA1YTkyMjE4ZS5wbmc=",
        genre: "Adult, Romance, Drama, Comedy",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Target (2023)",
        embedUrl: "https://short.icu/FGyREb1BF",
        posterUrl: "https://resizing.flixster.com/09oP_2_r8Nnr8A3rqyLdbpTh9XA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM0ODAzMWYzLWM0ZmUtNDQwZC1hYmM2LTE2NTdmNmZiOWU1ZS5qcGc=",
        genre: "Adult, Romance, Comedy",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Sleeping Beauty (2011)",
        embedUrl: "https://short.icu/pRhKdAcWx",
        posterUrl: "https://resizing.flixster.com/gf63hzOCLcvQ-3gMYbpLm68i0fQ=/fit-in/705x460/v2/https://resizing.flixster.com/m3cTS7teL7iO6U2uTme7w_E1QKE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2IyNTkyMjYyLWE3OWEtNGU3OC1hMmJjLWEyNTI0ZjNmZThkNS53ZWJw",
        genre: "Drama",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Elles (2012)",
        embedUrl: "https://short.icu/RnYM6d7k7",
        posterUrl: "https://resizing.flixster.com/O1b4JkqNa8-wJziSKch_0wZIRJw=/fit-in/705x460/v2/https://resizing.flixster.com/A67vFyWyaPLJP61xb47OJbZzP7o=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JhYzM3ZTU0LTliMGEtNGVlYS1iOTRjLTZlMDEyOGM2NmI4OC53ZWJw",
        genre: "Drama",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "It Boy (2013)",
        embedUrl: "https://short.icu/gtOwgQfe7",
        posterUrl: "https://resizing.flixster.com/DVBRaRMfb4JgYYyQGND9CjUf36Y=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10401674_p_v8_al.jpg",
        genre: "Romance/Comedy",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Anora (2024)",
        embedUrl: "https://short.icu/5wuWKH5vT",
        posterUrl: "https://resizing.flixster.com/rq3ufDA9Htx5sEaTRAdbEjHHN1A=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27453748_v_v12_aj.jpg",
        genre: "Comedy, Drama, Romance",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "Project X (2024)",
        embedUrl: "https://short.icu/5aarm86V8s",
        posterUrl: "https://www.themoviedb.org/t/p/w600_and_h900_face/dBd9Xd317n5JNI97T5T2Z2g3xo.jpg",
        genre: "Adult, Horror, Sci-Fi, Thriller",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263"
    },
    {
        title: "The Ugly Stepsister (2025)",
        embedUrl: "https://short.icu/qJG5BSHP3",
        posterUrl: "https://resizing.flixster.com/CFg88hNOH4UwHEAEOQyAVCe2MlA=/fit-in/705x460/v2/https://resizing.flixster.com/TRMKipiMTnli26wJtNVweIYSsMU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZkYTA3OTQ0LWUwYWItNDUwMC04MmVjLTZhYTAyMWViMmEwZi5qcGc=",
        genre: "Horror, Comedy, Mystery & Thriller",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Confessions of a Brazilian Call Girl (2011)",
        embedUrl: "https://short.icu/YvGENn4-M",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMzVkYWYxMjgtMzQ0Yy00ZmU3LTg1MzktMWJjNmZmYjA5YjlkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Adult, Romance, Drama",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "The Dead Girls (2025)",
        embedUrl: "https://short.icu/JIIHWmWVZ",
        posterUrl: "https://resizing.flixster.com/HqmFvRJNly0SN6jYohriJUfqkeM=/fit-in/705x460/v2/https://resizing.flixster.com/6hRox5svu_KRT0z9DneevsAZjyk=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZWNjYTM1MTktYmY5ZS00ODgwLWFkYjgtNDQwY2Y2Nzc3ODQzLmpwZw==",
        genre: "Crime, Drama",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Pandora Peaks (2002)",
        embedUrl: "https://short.icu/Wclb3g-G2",
        posterUrl: "https://dtsn4at3fd5n0.cloudfront.net/docs/poster/yYJElyHsmXWpTawkTMnHuzTAvgB.jpg",
        genre: "Adult, Drama",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Private School Girls (1972)",
        embedUrl: "https://short.icu/KH-_JAB_G",
        posterUrl: "https://a.ltrbxd.com/resized/film-poster/1/8/8/2/2/7/188227-gefahrlicher-sex-fruhreifer-madchen-0-1000-0-1500-crop.jpg?v=5d0d31bbb1",
        genre: "Adult, Drama",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "The Lobster (2016)",
        embedUrl: "https://short.icu/5hvk-6pZd",
        posterUrl: "https://resizing.flixster.com/52nPtZ7PxKFxcboNseQsTVJIj6o=/fit-in/705x460/v2/https://resizing.flixster.com/EcwvV7lPov8nqDjWAFzjlr3p_uw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM4OTI0NjBlLTRlYTQtNGQzMy05OGEzLTAyODcyYWVmODY2My53ZWJw",
        genre: "Adult, Romance, Comedy, Fantasy, Drama, Sci-Fi",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Fairy in a Cage (1977)",
        embedUrl: "https://short.icu/0oPwh22WA",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BM2M4NDk4ZTEtOGVmZC00N2E0LWI2MDUtZWJkODIzNTY3ZDMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Adult, Drama",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "18 Red Latex (2020)",
        embedUrl: "https://short.icu/rN9GHidku",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZDVlZjdiNTQtMjZmMi00MmQ2LTlkNGMtYjA2NzU5MGQ2NGQxXkEyXkFqcGc@._V1_QL75_UX147_.jpg",
        genre: "Adult, Drama",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Grotesque (2009)",
        embedUrl: "https://short.icu/2tPapAq4X",
        posterUrl: "https://resizing.flixster.com/C9j3T3nryArswb9asevO_164aUE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8623326_v_v8_aa.jpg",
        genre: "Crime, Drama, Horror, Mystery & Thriller",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Locked Up (2017)",
        embedUrl: "https://short.icu/9aF6odz6f",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZDU1Njc1ZDAtZjFiOS00Yjk5LWIxMmYtZmZkOGVmZmUyY2I2XkEyXkFqcGc@._V1_.jpg",
        genre: "Mystery & Thriller",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Female Market Imprisonment (1986)",
        embedUrl: "https://short.icu/d3Q3HIAii",
        posterUrl: "https://media-cache.cinematerial.com/p/500x/2yd05m5o/female-market-dutch-vhs-movie-cover.jpg?v=1567840166",
        genre: "Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Joyland (2023)",
        embedUrl: "https://short.icu/YwPhEnHZD4",
        posterUrl: "https://resizing.flixster.com/-UhD1YPsyoIEJqh_893q3f39qCU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23347124_v_v8_ae.jpg",
        genre: "Drama",
        category: "Others",
        language: "Urdu",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Aamis (2019)",
        embedUrl: "https://short.icu/N5wKmHvWR",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNTI1M2I0MTAtNTM4Yi00YWMyLTg1ZmYtMTFhOTQ5ZjQ0NjQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Drama, Thriller, Romance, Crime Fiction",
        category: "Others",
        language: "Urdu",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Girls Guns and Blood (2019)",
        embedUrl: "https://short.icu/DFfpLYtJd",
        posterUrl: "https://images.justwatch.com/poster/305710785/s718/girls-guns-and-blood.jpg",
        genre: "Action, Comedy",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Darker Shades of Elise (2017)",
        embedUrl: "https://short.icu/H5KyuzTmC",
        posterUrl: "https://resizing.flixster.com/yG_6eF5FIGmXzFzabzZdAY3KaVc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14241745_v_v12_ac.jpg",
        genre: "Drama, Mystery & Thriller",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Girls on Film (2023)",
        embedUrl: "https://short.icu/aDbrT80t2",
        posterUrl: "https://resizing.flixster.com/NstbWZARImXVIWvBRCq898y3pIs=/fit-in/705x460/v2/https://resizing.flixster.com/Ku3-mYhP1Ea_L2Iuvl_aCZ8Kr1g=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg4MmYxN2RiLWUwYzMtNGI5YS1hM2ZmLTYzNjI4YzhkMjZlZS5qcGc=",
        genre: "Adult, Drama, Romance, LGBTQ+",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Sugar Baby (2024)",
        embedUrl: "https://short.icu/SoRn1v4ht",
        posterUrl: "https://resizing.flixster.com/rmDZ9mzuHg9cXPyPr8i07sHm_pI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28439839_v_v13_aa.jpg",
        genre: "Adult, Drama, Romance, LGBTQ+",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Sex and the Single Mom (2003)",
        embedUrl: "https://short.icu/OvgeopGZN",
        posterUrl: "https://resizing.flixster.com/hIlvkXHONpu6aCIgCxcvMWkbub0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p32723_v_v8_ab.jpg",
        genre: "Adult, Drama, Romance, LGBTQ+",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Sold (2016)",
        embedUrl: "https://short.icu/JHpSSsveR",
        posterUrl: "https://resizing.flixster.com/YcAde4MP6TCxPD3vClb9bJJgs5s=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10808295_v_v11_ab.jpg",
        genre: "Adult, Drama, Romance, LGBTQ+",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Darker Shades of Summer (2023)",
        embedUrl: "https://short.icu/A-RM7C3br",
        posterUrl: "https://resizing.flixster.com/0AfHeOC8IMYiF_9Ww9zZiG-JqMI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23620953_v_v8_aa.jpg",
        genre: "Mystery & Thriller, Drama",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Tell Me What You Want (2024)",
        embedUrl: "https://short.icu/YhaYeyFyn",
        posterUrl: "https://resizing.flixster.com/PgdSQ6K4FuQOx12RGsMfKt-agD0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29845198_v_v8_ac.jpg",
        genre: "Romance, Drama, Mystery & Thriller",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Trauma (2017)",
        embedUrl: "https://short.icu/Q6dtHtWwt",
        posterUrl: "https://resizing.flixster.com/m6GZS8P56EVvhWPMRfPpbGDIS70=/fit-in/705x460/v2/https://resizing.flixster.com/UeC_QqWbNwut6XHo-Pz79GyVlIQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E5MzRkZTIyLTkzOGYtNGQ2OS05NDE5LTliOGVjZTM5ZWFiNy53ZWJw",
        genre: "Drama, Horror, Adult",
        category: "Others",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Playing With Dolls (2015)",
        embedUrl: "https://short.icu/aBFf0YxBH",
        posterUrl: "https://resizing.flixster.com/6QN3uodTYDoYH2SlQmOQpgOr3EI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12709332_p_v8_ac.jpg",
        genre: "Horror",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Playing With Dolls: Bloodlust (2016)",
        embedUrl: "https://short.icu/Uwr79u1r_",
        posterUrl: "https://resizing.flixster.com/pIiPjUWoCcTSoZSPyCGcfrzvIT8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13117910_p_v8_aa.jpg",
        genre: "Horror",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Playing with Dolls Havoc (2017)",
        embedUrl: "https://short.icu/pH7Lurwed",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNjg1NzlhZDMtMDEyZS00NTdhLTk1NDgtZmRhM2Y1OGE1NTdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Horror",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Spring Breakers (2013)",
        embedUrl: "https://short.icu/k7gUKpPBX",
        posterUrl: "https://resizing.flixster.com/VuVIhndtbnMHth_KnojQ30u2J5E=/fit-in/705x460/v2/https://resizing.flixster.com/--eW2DKzLV2jtRsKywv1TKz3QrA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VlYTI5MTkxLWI0ZmEtNGFkZC1hOWI5LTlhYmNjMWIzY2QwNy5qcGc=",
        genre: "Comedy, Crime, Drama, Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Bikini Spring Break (2012)",
        embedUrl: "https://short.icu/dB-HvStIp",
        posterUrl: "https://resizing.flixster.com/aTd50ZRjCiJ7QX6RyZO1JQRW9fM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9251145_p_v8_ab.jpg",
        genre: "Comedy, Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Day of the Warrior (1997)",
        embedUrl: "https://short.icu/0ZWCao8pO",
        posterUrl: "https://resizing.flixster.com/2n806OTHTHCP3VzByYpDmCExeIk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18782_p_v8_aa.jpg",
        genre: "Comedy, Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Boat Trip (2003)",
        embedUrl: "https://short.icu/KrbV9EzGV",
        posterUrl: "https://resizing.flixster.com/I0RUk72b36FXY7dX6L5ZevSuaVY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30996_v_v8_af.jpg",
        genre: "Comedy, Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "American Beach House (2015)",
        embedUrl: "https://short.icu/NIcsCEYm0",
        posterUrl: "https://resizing.flixster.com/I8V1ZGHGgIwKH3ug4Uk6BYs59Wo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12044038_p_v13_ac.jpg",
        genre: "Comedy, Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Bikini Model Academy (2015)",
        embedUrl: "https://short.icu/5UsQWam1x",
        posterUrl: "https://resizing.flixster.com/eL2ODy4q1rDittH0stOJi-9smy0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12132029_p_v8_aa.jpg",
        genre: "Comedy, Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    {
        title: "Bikini Bowl-O-Rama (2023)",
        embedUrl: "https://short.icu/4tUlWsPNQ",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZTcyZDgwMmQtMDc1MC00MWE4LTlkZTMtZWM5OGE0ZjBiZDkwXkEyXkFqcGc@._V1_.jpg",
        genre: "Comedy, Adult",
        category: "Others",
        language: "English",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
    },
    // =======================================================================
    // 1. BOLLYWOOD WEB-SERIES / BOLLYWOOD WEB-SERIES / BOLLYWOOD WEB-SERIES /
    // =======================================================================
    {
        title: "Bindiya Ke Bahubali (2025)",
        embedUrl: "https://short.icu/kOck5UZFiW",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNTdmZTI2MmItMDE4OC00MGVmLWFmZDUtZTQ1ZjhkYTU1NDQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Comedy, Action, Thriller",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-6"
    },
    {
        title: "Bindiya Ke Bahubali (2025)",
        embedUrl: "https://short.icu/fFRpjm-Wg",
        posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/ac801a3e4c050696119351bc0225ea132815a8d4878655eb9719d9199fc60451.__SX340__SY454__QL60__._TTW_.jpg",
        genre: "Comedy, Action, Thriller",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode 1-3"
    },
    {
        title: "Bindiya Ke Bahubali (2025)",
        embedUrl: "https://short.icu/nr8uxw8Gg",
        posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/ac801a3e4c050696119351bc0225ea132815a8d4878655eb9719d9199fc60451.__SX340__SY454__QL60__._TTW_.jpg",
        genre: "Comedy, Action, Thriller",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode 4-6"
    },
    {
        title: "The Pradeeps of Pittsburgh (2024)",
        embedUrl: "https://short.icu/oDtPhaA-b",
        posterUrl: "https://resizing.flixster.com/ViJ1h8H2HJ8VCH7IgzZjmPasdB8=/fit-in/705x460/v2/https://resizing.flixster.com/uY8_K5IzZrqTENhs3d82MB4j5u4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vYjk4YWRmOTQtZTA1NS00ZTE5LTgzN2ItOTUwNzg0MDg2MjFjLmpwZw==",
        genre: "Comedy",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All"
    },
    {
        title: "Taskaree: The Smuggler's Web (2026)",
        embedUrl: "https://short.icu/dfWzLix8c",
        posterUrl: "https://resizing.flixster.com/Q2gvXUlUqd-jljT_JFDF3cdvVBs=/fit-in/705x460/v2/https://resizing.flixster.com/_g1s57Z8DKPoPWmvNEeXOtLFLTM=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZjhhYzJhZDctOWY3Ni00MTkxLTgzODctYjBlNjFhZDYzMWE3LmpwZw==",
        genre: "Crime, Mystery & Thriller",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All"
    },
    {
        title: "Gyaarah Gyaarah (2024)",
        embedUrl: "https://short.icu/DGxg1APTw",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BY2JiOTlhYTUtZTk5Zi00MjA1LTkxYmQtOTgyODJmNmJmYmZlXkEyXkFqcGc@._V1_.jpg",
        genre: "Crime, Mystery, Thriller, Sci-Fi",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All"
    },
    {
        title: "Mistry (2025)",
        embedUrl: "https://short.icu/HWpOjgAyQ",
        posterUrl: "https://resizing.flixster.com/yubmxi7BwFWHa9kHmtwxtn5Cbhc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30422446_b_v8_ab.jpg",
        genre: "Crime, Drama, Comedy, Mystery, Thriller",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All"
    },
    {
        title: "Mrs. Deshpande (2025)",
        embedUrl: "https://short.icu/v130sBN9e",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMGFiYzZhODQtOWU5Yy00OTRlLWFlMGUtMWJjMzBlYjBmYWIwXkEyXkFqcGc@._V1_.jpg",
        genre: "crime, mystery, family drama",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All"
    },
    {
        title: "The Ba***ds of Bollywood (2025)",
        embedUrl: "https://short.icu/cIeAE6Mf2",
        posterUrl: "https://resizing.flixster.com/KuYiraC9VYvgPRD6E4JVTeAtQjE=/fit-in/705x460/v2/https://resizing.flixster.com/K-PQZlbwdzjsk-KL79IFgfWj9Xg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNWVjZDUyMzQtOWM4MC00OGFmLThmNGUtNWQzZTExNWI3ZjQ0LmpwZw==",
        genre: "Adventure, Comedy, Drama",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Single Papa (2025)",
        embedUrl: "https://short.icu/1xELTMbGg",
        posterUrl: "https://resizing.flixster.com/NmjvPGQ7FgmaOsLEmrQ2JmiyMUc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31923453_b_v8_ab.jpg",
        genre: "Comedy, Drama",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Mandala Murders (2025)",
        embedUrl: "https://short.icu/oFbzfDOLD",
        posterUrl: "https://resizing.flixster.com/6h1lQ1awjKTgYPmG-eqXalKw3RU=/fit-in/705x460/v2/https://resizing.flixster.com/8wuorPdRZWQ-iBDWlE9jdBpVHPA=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNWFjNDQ0ODEtMmMxMS00MGRkLWJiOTAtMWRhYTkyNzljMDIwLmpwZw==",
        genre: "Crime, Mystery & Thriller, Drama",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Lafangey (2025)",
        embedUrl: "https://short.icu/-M4jHJNli",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTRiNjE0MDItYzVkMC00ZmMzLTg0Y2MtYjYwZjgzZThlZjE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Crime, Mystery & Thriller, Drama",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Sunflower (2021)",
        embedUrl: "https://short.icu/8QNFHbJG_",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMWExMThmZDMtYzM2Yi00MGI3LTkyMzEtMTgyNGI5NmFlODgxXkEyXkFqcGc@._V1_.jpg",
        genre: "Comedy, Drama, Mystery, Thriller, Crime",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Sunflower (2024)",
        embedUrl: "https://short.icu/PE6TzIEvO",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZjQ5NjYyZTItNjhlNi00NmIyLWIxYjEtODYxYTA2ZjRiMWE0XkEyXkFqcGc@._V1_.jpg",
        genre: "Comedy, Drama, Mystery, Thriller, Crime",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Sacred Games (2018)",
        embedUrl: "https://short.icu/7ne9lsa-x",
        posterUrl: "https://resizing.flixster.com/j3Pk-1QBwBZ7_pn6rGObBhi4eoY=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjMxNTc1OC53ZWJw",
        genre: "Crime, Mystery & Thriller, Drama",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Sacred Games (2019)",
        embedUrl: "https://short.icu/zEfCfYLvI",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BN2EyODc1MDAtNTg0ZC00MjRhLTg1NzctM2NjYTlmOGMwYWNiXkEyXkFqcGc@._V1_.jpg",
        genre: "Crime, Mystery & Thriller, Drama",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Mirzapur (2018)",
        embedUrl: "https://short.icu/js7l39-ZZ",
        posterUrl: "https://resizing.flixster.com/AMbvAQ0M3q2w4Yg0mkhJETrz9A0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16201106_b_v8_aa.jpg",
        genre: "Crime, Mystery & Thriller",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Mirzapur (2020)",
        embedUrl: "https://short.icu/-VWruRbDg",
        posterUrl: "https://resizing.flixster.com/9upWoSAZ_GoAy-FfHZCCumod1Uk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18962858_b_v10_aa.jpg",
        genre: "Crime, Mystery & Thriller",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Mirzapur (2024)",
        embedUrl: "https://short.icu/GfuodM0sE",
        posterUrl: "https://images.justwatch.com/poster/318579955/s718/season-3.jpg",
        genre: "Crime, Mystery & Thriller",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 3, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Mirzapur (2024)",
        embedUrl: "https://short.icu/9lkNEt5OOB",
        posterUrl: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTNmYjE5YjMwLTk0ZjQtMTFlZi04YTBkLWIzMzdmNjgxZjg3My5qcGc=",
        genre: "Crime, Mystery & Thriller",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Mirzapur Bonus Episode" /* NEW SERIES INFO */
    },
    {
        title: "Apharan (2018)",
        embedUrl: "https://short.icu/5W52ZuK1S",
        posterUrl: "https://images.justwatch.com/poster/141624456/s718/season-1.jpg",
        genre: "Crime-Fiction, Thriller, Action, Dark comedy",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Apharan (2022)",
        embedUrl: "https://short.icu/nEYd7DOJS",
        posterUrl: "https://images.ottplay.com/posters/Apharan_Season_2_2022_web_series_poster_3_122.jpeg",
        genre: "Crime-Fiction, Thriller, Action, Dark comedy",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode All" /* NEW SERIES INFO */
    },
    {
        title: "Paatal Lok (2020)",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BM2NlZDUwNzAtZTgyYi00YjhlLThhZTEtYTIxMzdjZjVkOTI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Crime, Drama",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-9",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/Mhx1_v_yF" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/XKus7iEuI" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/ANBIZ2mAd" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/KI3TzU8w_" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/slJaR63JSu" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/OjnXxPXjL" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/8tEiWpMJ5" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/i6HhN-9qH" },
        { number: 9, title: "Episode 9", embedUrl: "https://short.icu/s-AszqaOM" },
        ]
    },
    {
        title: "Paatal Lok (2025)",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BM2NlZDUwNzAtZTgyYi00YjhlLThhZTEtYTIxMzdjZjVkOTI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Crime, Drama",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode 1-9",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/CWeLykzkX" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/fl_DDQnAa" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/Y49DR3-JO" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/s4nLyTaux" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/CiC_m0zZq" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/2jNccSj5r" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/j79Ea4H-4" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/SrkpNFZar" },
        ]
    },
    {
        title: "Abhay (2019)",
        posterUrl: "https://cdn.moviefone.com/image-assets/87324/yLo5YHt5DmgC2LALtR0xuKaEz7W.jpg?d=360x540&q=80",
        genre: "Crime, Thriller, Action & Adventure",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/W2XCMXRyp" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/74A3cduDa" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/VYcKPpAbY" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/HScammoRT" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/39ji0_RUh" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/amAWWNHjl" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/o-ovZDOtP" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/CujEgzou4" },
        ]
    },
    {
        title: "Abhay (2020)",
        posterUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202203/Abhay-S2-poster_1648042264.jpg",
        genre: "Crime, Thriller, Action & Adventure",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/Su28-d6FhF" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/46dpFlh5x" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/_1OE9dvWi" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/C5DL41aEf" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/53jd1KPdW" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/InQqwkh23" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/Cs_dvZ6gt" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/uc7Xx-VWN" },
        ]
    },
    {
        title: "Abhay (2022)",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/a6/Abhay_Season_3_Poster.jpeg",
        genre: "Crime, Thriller, Action & Adventure",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 3, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/1kS7VeGGa" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/YFiw0cIHN" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/DzF4Mm47q" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/Pp8nfMUMz" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/Vs1Yijuak" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/QHSXNQxtj" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/XFUU371iX" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/J4FUFakOH" },
        ]
    },
    {
        title: "Bad Boy Billionaires: India (2020)",
        embedUrl: "https://short.icu/h00Kxu2Iu",
        posterUrl: "https://resizing.flixster.com/FV5I_TXxbNkMRjpJZC8bf4wq220=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18702477_b_v8_aa.jpg",
        genre: "Documentary, Crime",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://cdn.gdrivehub.cfd/url?photo=OUN4bWkvRFFXeDIwQjFSb3RLK1dBRDBFRXZ0WnBHZW9lSmZZbzBsRk44bFJ3em5ReGlTYzF1NmhNdENXTUcrQ2NjS1hFUmNLN3kzUEdqdXppcGxzLzNCNyt0Q2RRSzUwUi9WdjlIUmJsMzA9",
        seriesInfo: "Season 1, Episode All"
    },
    {
        title: "Afsos (2014)",
        posterUrl: "https://resizing.flixster.com/dbXJVU3pUELw1uAiQQu39Qh1uXc=/fit-in/705x460/v2/https://resizing.flixster.com/-tW741gekQkxnERuBrhPZio65yc=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjcyNzExNC53ZWJw",
        genre: "Crime, Thriller, Action & Suspense",
        category: "Bollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/mj-66jkeX" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/NuZMPjPCi" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/kgm2Jd1a2" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/t56QZScrZ" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/6mORBdmkc" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/WUtH8AMn3" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/9xsswHIH7" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/xwO0xv5Yc" },
        ]
    },
    // =======================================================================
    // 1. HOLLYWOOD WEB-SERIES / HOLLYWOOD WEB-SERIES / HOLLYWOOD WEB-SERIES /
    // =======================================================================
    {
        title: "IT: Welcome to Derry (2025)",
        posterUrl: "https://resizing.flixster.com/keD72b6iJJOE8Y1FVV6xUwC3tLk=/fit-in/705x460/v2/https://resizing.flixster.com/8GGzzrT3CqBy0r1vb0dd2bKqSoY=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvOGEyMzAyY2QtNzUwZC00Y2JlLWIyNTEtZTYyNjAzNjcwNjM5LmpwZw==",
        genre: "Fantasy, Horror",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/BEjO731Ep" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/XaGoMTqpU" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/hiCYk92k3" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/Pqzp14EH3" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/pOlXdLBlM" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/N5I1aRXn8" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/vaYDbn7sF" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/UMmSj6gEQ" },
        ]
    },
    {
        title: "The Night Manager (2016)",
        embedUrl: "https://short.icu/_jWqs1tyP",
        posterUrl: "https://resizing.flixster.com/sS6EtDVumEjce_QcrFrc1SwNCIE=/fit-in/705x460/v2/https://resizing.flixster.com/A4BbZL2FUeuh_8o_uLWOgF7zy5s=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZDA4ZDZiN2YtOGIxNi00Yjg1LWFlOTQtMjRkMTE4MmZhNWU5LmpwZw==",
        genre: "Action, Drama, Mystery & Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-3" /* NEW SERIES INFO */
    },
    {
        title: "His & Hers (2026)",
        posterUrl: "https://resizing.flixster.com/pPmG2hfgnBOyvscx8mvkU5ng0Ck=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31565940_b_v13_aa.jpg",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-6",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/NOgaibEBb" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/RBQNniH9d" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/71ICA3WUl" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/VlDtOfPFz" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/6ev8e63jbM" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/3btaE00kf" },
        ]
    },
    {
        title: "Baby Reindeer (2024)",
        embedUrl: "https://short.icu/AL2FfowzE",
        posterUrl: "https://resizing.flixster.com/dkjCM9YxLuP808JZnU8LoRe0zaE=/fit-in/705x460/v2/https://resizing.flixster.com/cjbTvM09r1lm1iN7-fyv5DNWYL4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvODk2MmM1ZjAtZmI2Zi00NWU2LTlkODMtOWQ1MzhmZTMzZDFmLmpwZw==",
        genre: "Drama, Comedy, Crime, Biography",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Run Away (2026)",
        embedUrl: "https://short.icu/bUVufQATq",
        posterUrl: "https://resizing.flixster.com/1ChqdD3jKSlcwuudN6lynY2LvW8=/fit-in/705x460/v2/https://resizing.flixster.com/cgEu1ZH4Swc3ksToVe1zROgKuhQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMzdhYzExODEtZjE1YS00ODU0LTk5MTMtNTdjN2VlM2E0NDcwLndlYnA=",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "3 Body Problem (2024)",
        embedUrl: "https://short.icu/UK0L-_Mgc",
        posterUrl: "https://resizing.flixster.com/YpSLT-qFA3_41BRhZijam4A_qnM=/fit-in/705x460/v2/https://resizing.flixster.com/FynelrRwgvfx488b9LuR9iPhSP8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMzBlNTZjYjYtYjRhOC00ZjkxLWIwYWEtZDhjNzdjODM5YjliLmpwZw==",
        genre: "Drama, Sci-Fi, Mystery & Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Fallout (2024)",
        embedUrl: "https://short.icu/51p8LDKUc",
        posterUrl: "https://resizing.flixster.com/tRB7ZT9-oir6sJE44Hw6uywA5JE=/fit-in/705x460/v2/https://resizing.flixster.com/_suBUkrhJoxiUqiRIuQncCEhJ-o=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vYWI1NDExNWMtZGJiYS00Mjg2LTk2NTYtOTJkODA0N2M2YzMxLmpwZw==",
        genre: "Drama, Sci-Fi, Action, Adventure",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Dune: Prophecy (2024)",
        embedUrl: "https://short.icu/ozq_ogXL9",
        posterUrl: "https://resizing.flixster.com/vlRO_1cBB4hWEqVbGVnzNI7DqZA=/fit-in/705x460/v2/https://resizing.flixster.com/CJCUkSzO0gPlBlSZJHos8Wi1dJE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvOTg3ZTRlMzItYTU5Mi00MGNmLTgwZDMtMWUzYjU0NmJiNDQxLmpwZw==",
        genre: "Action, Adventure, Drama, Sci-Fi",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Avatar: The Last Airbender (2024)",
        embedUrl: "https://short.icu/pssgz7M_J",
        posterUrl: "https://resizing.flixster.com/SHAzMPmuxuMdAA6gZaRBdwln52c=/fit-in/705x460/v2/https://resizing.flixster.com/O_7WBKqpbx-v2vGorZoDbwV2mto=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvYTZiZDU4MTEtMmRjYS00MDNhLWFmM2QtYjJhOTU4MGE2OTZkLmpwZw==",
        genre: "Action, Adventure, Fantasy",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Dead Boy Detectives (2024)",
        embedUrl: "https://short.icu/jZjuCwrwl",
        posterUrl: "https://resizing.flixster.com/2FnMonFI5_XdNmBAGfoikQN4iVI=/fit-in/705x460/v2/https://resizing.flixster.com/NIZFAh2ButDsOmY7Eof0bak4doE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvOTgyZTJkZTktYzgxYy00MDRmLTgyZjAtNzYzNzk5ODc5NWI2LmpwZw==",
        genre: "Comedy, Drama, Mystery & Thriller, Fantasy, Action, Adventure, LGBTQ+",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Moon Knight (2022)",
        embedUrl: "https://short.icu/KeySXjDKZ",
        posterUrl: "https://resizing.flixster.com/i5hSTbMg2cMydnq4JdB83Wk3Rco=/fit-in/705x460/v2/https://resizing.flixster.com/-VnYc7i2JJyr2r1qgfYbtFZEqgI=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNjA5ZjNkZjUtMjM0Zi00MTk3LTk0NTMtOTE4Zjg5M2RiYzcwLmpwZw==",
        genre: "Mystery & Thriller, Sci-Fi, Action",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Loki (2021)",
        embedUrl: "https://short.icu/A7uPF_jV3",
        posterUrl: "https://resizing.flixster.com/MUW_jlHLXm0bIueWS7OrKbLn4jE=/fit-in/705x460/v2/https://resizing.flixster.com/JJk-m1_kSs4_8hZa-hFoRm3JCkI=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjkxNjQ4Ny53ZWJw",
        genre: "Drama, Action, Adventure",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Loki (2023)",
        embedUrl: "https://short.icu/fLiz8wf_O",
        posterUrl: "https://resizing.flixster.com/hUChHeUtXpqfAzmiMP_nAaHv7Ug=/fit-in/705x460/v2/https://resizing.flixster.com/o1o8vBlAWaGVUudnCaTcwrrSwIQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZTdhMTEzOTUtMTc1Yi00NzljLTk0YTgtNWFiYzJhMmQwMzE4LmpwZw==",
        genre: "Drama, Action, Adventure",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Orange Is the New Black (2013)",
        embedUrl: "https://short.icu/eunav-H-v",
        posterUrl: "https://image.tmdb.org/t/p/original/q3wy6xyQtYpPEmig0BRtDwA40Pt.jpg",
        genre: "Drama, Comedy",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Bandidos (2024)",
        embedUrl: "https://short.icu/Hpr127Mc5",
        posterUrl: "https://resizing.flixster.com/Z337TD4siXWbwJxihIGAdL6AIlM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26754433_b_v8_aa.jpg",
        genre: "Action, Adventure, Comedy, Drama, Romance",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Murder Mindfully (2024)",
        embedUrl: "https://short.icu/j5c4gei4l",
        posterUrl: "https://resizing.flixster.com/xu68HR82WUrtSGiQ7Lu0JdP59uE=/fit-in/705x460/v2/https://resizing.flixster.com/DengdzGGzX5F2h7ikShXLUSodSQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMzZhMzJjYmEtNjg0YS00M2UzLTlhMDYtZjdiNWNhMjZhMjQ3LnBuZw==",
        genre: "Comedy, Crime, Mystery & Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "The Monster of Florence (2025)",
        embedUrl: "https://short.icu/lMUkRDkdT",
        posterUrl: "https://resizing.flixster.com/lnHZLIp055BDN83VRyI66Q9RCbk=/fit-in/705x460/v2/https://resizing.flixster.com/Si0oSLqkbaBZjE33Ly53TlKEL8o=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNTY4OTc1NzgtMmVmNi00NDc0LWFjYTUtYTZiM2I5MTQwODVjLmpwZw==",
        genre: "Drama, Comedy",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Ironheart (2025)",
        embedUrl: "https://short.icu/jpteD7wAI",
        posterUrl: "https://resizing.flixster.com/Yg5KhMiSQSBVicf7pzOAKohEGg8=/fit-in/705x460/v2/https://resizing.flixster.com/3cxQLtiMNRgYJ2EdR3UzdzIRtEw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZDRhMmRiYTItZTllMy00MDE0LTk2NjEtYzU1YzYxMTFlOWUxLmpwZw==",
        genre: "Drama, Sci-Fi",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Lupin (2021)",
        embedUrl: "https://short.icu/bBD0T3QBE",
        posterUrl: "https://resizing.flixster.com/jSSkPJP64zbqXN98gOurlB1gaSA=/fit-in/705x460/v2/https://resizing.flixster.com/Q1Xrw4mACrB5nVBc0r7AGweBCaQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMzdiZmI5MTUtMWY4Yi00ZjVlLWIyMjMtNzY1MmU4Njk5NzU0LmpwZw==",
        genre: "Mystery & Thriller, Sci-Fi, Action",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "The Lincoln Lawyer (2011)",
        embedUrl: "https://short.icu/dDQFjk7cT",
        posterUrl: "https://resizing.flixster.com/DaI0TOpf1Xdo13N8Xm5cjpaU04E=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8283735_p_v11_an.jpg",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "The Watcher (2022)",
        embedUrl: "https://short.icu/_kcxkKs05",
        posterUrl: "https://resizing.flixster.com/g33I0FdyVgfOeIUGyGQzPi4RCxo=/fit-in/705x460/v2/https://resizing.flixster.com/FMK0HaAY154fOtB5T8AO-jpm0Lw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMmIyMzY3NzMtMDdhNS00ZGYyLWExYzMtYzM5YzFhNDAxMmE2LmpwZw==",
        genre: "Drama, Horror, Mystery & Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Breaking Bad (2008)",
        embedUrl: "https://short.icu/TzjdDtXED",
        posterUrl: "https://resizing.flixster.com/EEM4xDSyN8QtmrWwYJsFE84GwOg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjYyNjE3LndlYnA=",
        genre: "Crime, Drama",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Breaking Bad (2009)",
        embedUrl: "https://short.icu/vFsvUJE0DE",
        posterUrl: "https://resizing.flixster.com/BrQgVSdrjZgqlU7jFbLVdBWQ0Wk=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjYyNjE4LndlYnA=",
        genre: "Crime, Drama",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Breaking Bad (2010)",
        embedUrl: "https://short.icu/mSTk_PeS2",
        posterUrl: "https://resizing.flixster.com/eR1RPtpPWXfyCfheYC8u-wrbhFw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjYyNjQ4LndlYnA=",
        genre: "Crime, Drama",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 3, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Breaking Bad (2011)",
        embedUrl: "https://short.icu/oiV-VtlnX",
        posterUrl: "https://resizing.flixster.com/of3DOEv_MEG07wPBvpURkdPvZV8=/fit-in/705x460/v2/https://resizing.flixster.com/Sy-eayeaBBfvec9MmaV2CRtGVxs=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjYyNjQ5LndlYnA=",
        genre: "Crime, Drama",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 4, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Nero the Assassin (2025)",
        embedUrl: "https://short.icu/4T2Qbm0bq",
        posterUrl: "https://resizing.flixster.com/-3xKIe1aaFmfJatHPo_qbGWcGgE=/fit-in/705x460/v2/https://resizing.flixster.com/b9I6QjPMmWAp5nWXRMcpckVHElU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMzhmYzhhZTUtZjQ4Yy00NjkxLWFmNGEtNjNiMGEyNjA5ODk1LmpwZw==",
        genre: "Action, Adventure, History, Drama",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Man Vs Baby (2025)",
        embedUrl: "https://short.icu/1ld64Jp1h",
        posterUrl: "https://resizing.flixster.com/UBqq_74N2fqcJP5-uRA0FD3idDs=/fit-in/705x460/v2/https://resizing.flixster.com/GRZxf5WyaxevK4Qg-xs3TGJUQs4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMDVjZGJlYWItMWE1Ni00ZmFmLWI4YWMtN2Y1YzYzNGNlNTlmLmpwZw==",
        genre: "Kids & Family, Comedy",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Adolescence (2025)",
        embedUrl: "https://short.icu/ClwkrnVm-",
        posterUrl: "https://resizing.flixster.com/YP3JtvPvXN9nN5gChoe_crWKGj0=/fit-in/705x460/v2/https://resizing.flixster.com/xHBOCtYwNN39zZJ5ljhZjxm0pEA=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMWJmZmY2YzAtYmQ3ZC00MmZmLWIxOTYtZmZiMzVkMzg2Mzg3LmpwZw==",
        genre: "Crime, Drama",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Bodies (2023)",
        embedUrl: "https://short.icu/U7Io_wCRB",
        posterUrl: "https://resizing.flixster.com/8hJJzZQzIIuY4iM23CE_EYqJn1k=/fit-in/705x460/v2/https://resizing.flixster.com/1JTMxB3NvngEfzUT9j0O6i0y_I4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNDZlYjA5NGUtNmIwYi00Y2RkLWExN2ItMzBkYjc4NWFiOTJlLmpwZw==",
        genre: "Crime, Drama, History",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Game of Thrones (2011)",
        embedUrl: "https://short.icu/7l7MEbZhU",
        posterUrl: "https://resizing.flixster.com/JB5u-KqrltZR7EUYSkfkdDqmnFo=/fit-in/705x460/v2/https://resizing.flixster.com/cHuwImKGA2yZ_rIAfTvEEl5DMd8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEzMzk0OS53ZWJw",
        genre: "Drama, Fantasy",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Game of Thrones (2011)",
        embedUrl: "https://short.icu/M7qCnJLuj",
        posterUrl: "https://resizing.flixster.com/Acu9hvyFWq0NzbgoD01xnuA97FQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9020464_b_v8_ab.jpg",
        genre: "Drama, Fantasy",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Game of Thrones (2011)",
        embedUrl: "https://short.icu/8V7htNCsj",
        posterUrl: "https://resizing.flixster.com/dm6PVoq0KkgDk770YyLr8zoTgRA=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9398357_b_v8_ab.jpg",
        genre: "Drama, Fantasy",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 3, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Black Mirror (2011)",
        posterUrl: "https://image.tmdb.org/t/p/original/dw7jYk7EdrkrHozG7F1Yg2eFJTm.jpg",
        genre: "Sci-Fi, Mystery, Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-4",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/FeNjX2_04" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/TbHU9psJ7" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/Y4hNhtLhq" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/Y4hNhtLhq" },
        { number: 5, title: "Episode 5", embedUrl: "" },
        { number: 6, title: "Episode 6", embedUrl: "" },
        ]
    },
    {
        title: "Black Mirror (2013)",
        posterUrl: "https://resizing.flixster.com/2oUEBOek5zulz80tMKNXl7QVbsw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9741860_b_v8_aa.jpg",
        genre: "Sci-Fi, Mystery, Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode 1-4",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/WJR65iRHp" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/79iIKVGwS" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/Pb08Q2wS1" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/NjH3pyepu" },
        ]
    },
    {
        title: "Black Mirror (2016)",
        posterUrl: "https://image.tmdb.org/t/p/original/3mKYrlZpFbpFu7CaVxoleO68MFG.jpg",
        genre: "Sci-Fi, Mystery, Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 3, Episode 1-6",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/aci2no056" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/BTWeM4RXsx" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/kxu1Kil-Q" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/M5r_T1o4O" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/zGWI8fx0u" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/76x8Qh_NL" },
        ]
    },
    {
        title: "Black Mirror (2017)",
        posterUrl: "https://sm.ign.com/t/ign_ap/screenshot/default/bm-blackmuseum-vertical-main-pre-us-1512486763965_kjks.1400.jpg",
        genre: "Sci-Fi, Mystery, Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 4, Episode 1-6",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/AAnrno2TI" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/RZiAF49zm" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/mIll3puds" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/BytVDdTBK" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/WKMbcdNwS" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/dGWZB2pwN" },
        ]
    },
    {
        title: "Sex Education (2019)",
        posterUrl: "https://resizing.flixster.com/Ucr2Oz4n5htbkjvh4HbuMwJc3OY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16314966_b_v13_ac.jpg",
        genre: "Comedy, Drama, Adult",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/VC5ZdiArm" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/Dg8Axxhi9" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/x9BzAqWzC" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/c-66Y5XRWR" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/aH2a0gftF" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/pnzPFfFgg" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/TTKLAlDII" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/2GwJlofn5" },
        ]
    },
    {
        title: "Sex Education (2020)",
        posterUrl: "https://resizing.flixster.com/goSKhIOp8O-l6PtEqiGAfenFBxI=/fit-in/705x460/v2/https://resizing.flixster.com/CdVLgQaXsb9YI5aSQ0YrPq59Pk8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vZTBhZGIzODktNTA2ZS00MGZkLWIzMDAtMTBhZWFmMGQ1NDYwLmpwZw==",
        genre: "Comedy, Drama, Adult",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/OLvWX6PAD" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/q2S7D1HNU" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/5xWfEdKoq" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/OlvsMPSpD" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/tvvR6f8Yj" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/b0yxn1oFu" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/tQPjITsRy" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/48OxlZZ9T" },
        ]
    },
    {
        title: "Sex Education (2021)",
        posterUrl: "https://resizing.flixster.com/cKuykmsn3X4u0VaQYtV991MUuCA=/fit-in/705x460/v2/https://resizing.flixster.com/hXmY87EoF9XLvqVAY5o4xduRc2E=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNmUxZmQ0YTItMDRlNC00ZGNlLWE1ZmItY2Y2OGY2NTRhMjJlLmpwZw==",
        genre: "Comedy, Drama, Adult",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 3, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/Rums2SGmV" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/hcXh7olJZ" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/rFCSuzX68" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/jXJ3lZXiY" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/ADTihycMq" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/-fN1YLTOE" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/DrO0Bjv1Fu" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/K-Emr0NTg" },
        ]
    },
    {
        title: "Sex Education (2023)",
        posterUrl: "https://resizing.flixster.com/3Cx1A4RkUH64ebAUDePa6LJ5J6A=/fit-in/705x460/v2/https://resizing.flixster.com/1Dyi8LP_cm3s1aImt3JUR-NBcqw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMGU4ZWVlZTQtYTljNS00ZjZmLWE4YzgtNWY2ZmU2MjZlYTgwLmpwZw==",
        genre: "Comedy, Drama, Adult",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 4, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/PDj6qMw4u" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/zwoeoGNkR" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/BEwgYJBiwv" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/cPCAwsJkT" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/nU2ZrbYjC" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/E14fk3iPW" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/304zXIzJr" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/XtxNHIMmX" },
        ]
    },
    {
        title: "Dept. Q (2025)",
        posterUrl: "https://resizing.flixster.com/Js9Bfa6AhQG5HfS20ELtJqU0-1M=/fit-in/705x460/v2/https://resizing.flixster.com/FA__x8c5sUSel5FctXV_DlGSvV8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvM2Q3M2Q4MjctZmQ5Zi00MmE4LTlhZDQtNGFmZDFlOGZlZGY3LmpwZw==",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-9",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/JRz5KK7OM" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/DDReK_NZA" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/JpBF9KQcL" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/l4sV7mFKJ" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/I4gPX2wtl" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/tSZi5gGeW" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/r1z4G1ljY" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/lcGc7-Nz3" },
        { number: 9, title: "Episode 9", embedUrl: "https://short.icu/GeD2y1naZp" },
        ]
    },
    {
        title: "The Gardener (2025)",
        posterUrl: "https://resizing.flixster.com/wrF-epLIg584y4b7hl_RhblK37E=/fit-in/705x460/v2/https://resizing.flixster.com/NzFUVLqr8X8LmoHeNkTAZaCg-Nk=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMzY0ZjM1ODUtODY0NC00NjExLTkxYzQtMTFkNmNiN2M2ODJmLmpwZw==",
        genre: "Drama, Mystery & Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-6",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/s6LsXvgmn" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/AXGQyGH-J" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/WT4ccJxCu" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/JLWT-nKfs" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/1TmOORK4x" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/koCX_-2_Z" },
        ]
    },
    {
        title: "Kaleidoscope (2023)",
        posterUrl: "https://resizing.flixster.com/t1UIRiSxcSf1SECu9bLGFGqesmM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23582077_b_v13_ab.jpg",
        genre: "Crime, Drama, Mystery & Thriller",
        category: "Hollywood Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/FEEiGWPsHQ" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/L4u9EOpQY" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/qP14aavJT" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/IrcIMwEag" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/FuGqCczjd" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/RktSaIyGPo" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/JsrvH3uUz" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/sWrQuQ9tE" },
        ]
    },
    // =======================================================================
    // 1. KOREAN WEB-SERIES / KOREAN WEB-SERIES / KOREAN WEB-SERIES /
    // =======================================================================
    {
        title: "The Golden Spoon (2022)",
        posterUrl: "https://i.mydramalist.com/XWvlw_4f.jpg",
        genre: "Thriller, Mystery, Drama, Comedy, Sci-Fi",
        category: "Korean Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-16",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/M6jiRrJde" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/LvIL0K1YT" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/ubm7_CiJg" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/fcwqyuLVa" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/1KawCdklU" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/gOENhS8II" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/uspW-OySn" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/U6S4EWKHo" },
        { number: 9, title: "Episode 9", embedUrl: "https://short.icu/MOQk__pMb" },
        { number: 10, title: "Episode 10", embedUrl: "https://short.icu/jStGxanQ0" },
        { number: 11, title: "Episode 11", embedUrl: "https://short.icu/MCxOfDX8S" },
        { number: 12, title: "Episode 12", embedUrl: "https://short.icu/7atzrP6bX" },
        { number: 13, title: "Episode 13", embedUrl: "https://short.icu/JDnJU9lQw" },
        { number: 14, title: "Episode 14", embedUrl: "https://short.icu/P0Z2KbOOc" },
        { number: 15, title: "Episode 15", embedUrl: "https://short.icu/SVJFqoBm6" },
        { number: 16, title: "Episode 16", embedUrl: "https://short.icu/VhubRDCQbB" },
        ]
    },
    {
        title: "Cashero (2025)",
        posterUrl: "https://resizing.flixster.com/wJqvjWXoE53PX_F4c4zNcOzMprM=/fit-in/705x460/v2/https://resizing.flixster.com/eNmQP6ZIqpbyIQBA_vGdx2SmoWM=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMGVhYjMyOGUtOTRlMC00YWYxLTkxYzEtYzYzZWQ1MDY5ZjNiLmpwZw==",
        genre: "Fantasy, Action, Comedy",
        category: "Korean Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/E_GsXHRHr" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/OSW_R59ej" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/Lu3Mr0nLy" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/vxu6NxuVx" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/FlQuSKr59" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/LCIb06Aui" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/V76-r1B__" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/LL2lc1sEj" },
        ]
    },
    {
        title: "The 8 Show (2025)",
        embedUrl: "https://short.icu/KNIdH8p38",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/The_8_Show_poster.png",
        genre: "Comedy, Drama, Mystery & Thriller",
        category: "Korean Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "All of Us Are Dead (2022)",
        embedUrl: "https://short.icu/t3Ii1NoSG",
        posterUrl: "https://resizing.flixster.com/sIfDBJAcvJVcy9dmkibIOpTQf6Y=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21368395_b_v9_ab.jpg",
        genre: "Horror, Mystery & Thriller, Action",
        category: "Korean Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode ALL" /* NEW SERIES INFO */
    },
    {
        title: "Squid Game (2025)",
        embedUrl: "https://short.icu/JRBRXToUr",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Squid_Game_season_3_poster.png/250px-Squid_Game_season_3_poster.png",
        genre: "Thriller, Survival",
        category: "Korean Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 3, Episode 1-6" /* NEW SERIES INFO */
    },
    {
        title: "Squid Game (2024)",
        embedUrl: "https://short.icu/bwn5dabqp",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Squid_Game_season_2_poster.png/250px-Squid_Game_season_2_poster.png",
        genre: "Thriller, Survival",
        category: "Korean Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode 1-7" /* NEW SERIES INFO */
    },
    {
        title: "Squid Game (2021)",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Squid_Game_season_1_poster.png/250px-Squid_Game_season_1_poster.png",
        genre: "Thriller, Survival",
        category: "Korean Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-9",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/GIZ1RQTZ2" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/0F-_q8pDjR" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/KAO3PHL2N" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/7XTSviHk9" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/KO9vEAiEj" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/MHPTBbBKo" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/Qh_ZMTQ5q" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/Z5cP2D8Va" },
        { number: 9, title: "Episode 9", embedUrl: "https://short.icu/9m77njF-z" },
        ]
    },
    {
        title: "Alice in Borderlan (2020)",
        posterUrl: "https://image.tmdb.org/t/p/original/Ac8ruycRXzgcsndTZFK6ouGA0FA.jpg",
        genre: "Thriller, Survival",
        category: "Korean Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 1, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/QgsbbPIUD" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/SfBzAptc3" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/8KIjf4DzP" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/u1oZYEa0h" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/8zx_H0cBq" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/a4beTZ_v6" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/8vMs58ima" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/y1KMD1QAp" },
        ]
    },
    {
        title: "Alice in Borderlan (2022)",
        posterUrl: "https://m.media-amazon.com/images/I/61idXIynNqL._AC_UF894,1000_QL80_.jpg",
        genre: "Thriller, Survival",
        category: "Korean Series",
        language: "Hindi",
        downloadUrl1: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        downloadUrl2: "https://www.effectivegatecpm.com/c1mfi60s7w?key=d2fb4b1ad379986bc79dd8bba9132263",
        seriesInfo: "Season 2, Episode 1-8",
        episodes: [
        { number: 1, title: "Episode 1", embedUrl: "https://short.icu/XE3LtOCTf" },
        { number: 2, title: "Episode 2", embedUrl: "https://short.icu/UI16ZJ_H-" },
        { number: 3, title: "Episode 3", embedUrl: "https://short.icu/VWHxJkbycJ" },
        { number: 4, title: "Episode 4", embedUrl: "https://short.icu/r_Y214inY" },
        { number: 5, title: "Episode 5", embedUrl: "https://short.icu/F7s29r6M1" },
        { number: 6, title: "Episode 6", embedUrl: "https://short.icu/FJo7hD6-3" },
        { number: 7, title: "Episode 7", embedUrl: "https://short.icu/WXSfC3maj" },
        { number: 8, title: "Episode 8", embedUrl: "https://short.icu/xm3QB3xVD" },
        ]
    },
];

// --- DEFINED CATEGORIES (Order matters for Home View) ---
const categoriesList = [
    "Bollywood",
    "Hollywood",
    "Animation",
    "South",
    "Bangla",
    "Korean Country",
    "Chinese",
    "Others",
    "Adult Comedy",
    "Bollywood Series",
    "Hollywood Series",
    "Korean Series"
];

// Element References
const gridElement = document.getElementById('movieGrid');
const searchInputDesktop = document.getElementById('searchInputDesktop');
const searchInputMobile = document.getElementById('searchInputMobile');
const clearSearchBtnDesktop = document.getElementById('clearSearchBtnDesktop');
const clearSearchBtnMobile = document.getElementById('clearSearchBtnMobile');
const menuToggle = document.getElementById('menu-toggle');
const navContentMobile = document.getElementById('nav-content-mobile');
const sectionTitle = document.getElementById('section-title');
const siteLogo = document.getElementById('site-logo');
const mainContent = document.getElementById('main-content');

// Modal Elements
const videoModal = document.getElementById('videoModal');
const modalContent = document.querySelector('.modal-content'); // Need this for resizing
const modalTitle = document.getElementById('modalTitle');
const videoPlayerFrame = document.getElementById('videoPlayerFrame');
const modalDownloadBtn = document.getElementById('modalDownloadBtn');
const heroSlider = document.getElementById('hero-slider');

// --- 3. SLIDER LOGIC ---
let sliderInterval;
let currentSlide = 0;

function initSlider() {
    // Filter movies marked as "Recent Adds" and limit to 15 items
    const recentMovies = moviesData.filter(m => m.category === 'Recent Adds').slice(0, 6);

    // RESET CURRENT SLIDE TO 0 every time init is called
    currentSlide = 0;

    if (recentMovies.length === 0) {
        heroSlider.style.display = 'none';
        return;
    }

    heroSlider.style.display = 'block';
    heroSlider.innerHTML = ''; // Clear existing

    // Generate Slides
    recentMovies.forEach((movie, index) => {
        const isActive = index === 0 ? 'active' : '';
        const slideHtml = `
                    <div class="slide ${isActive}" style="background-image: url('${movie.posterUrl}');">
                        <div class="slide-bg" style="background-image: url('${movie.posterUrl}');"></div>
                        <div class="slide-overlay">
                            <div class="slide-content">
                                <span class="text-[var(--color-accent)] font-bold tracking-wider text-sm uppercase mb-2 block"></span>
                                <h2 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">${movie.title}</h2>
                                <p class="text-gray-300 text-sm md:text-base mb-6 line-clamp-2 max-w-xl">${movie.genre} • ${movie.language} ${movie.seriesInfo ? '• ' + movie.seriesInfo : ''}</p>
                                <button onclick="openPlayer(${moviesData.indexOf(movie)})" class="bg-[var(--color-accent)] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                                    Watch Now
                                </button>
                            </div>
                        </div>
                    </div>
                `;
        heroSlider.insertAdjacentHTML('beforeend', slideHtml);
    });

    // Generate Dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots';
    recentMovies.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    heroSlider.appendChild(dotsContainer);

    // Add Touch Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    heroSlider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    heroSlider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            goToSlide(currentSlide + 1); // Swipe Left -> Next
        }
        if (touchEndX > touchStartX + 50) {
            goToSlide(currentSlide - 1); // Swipe Right -> Prev
        }
    }

    // Start Timer
    startSliderTimer(recentMovies.length);
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const totalSlides = slides.length;

    // Safety check
    if (slides.length === 0) return;

    // Handle wrap-around
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    currentSlide = index;

    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function startSliderTimer(length) {
    if (sliderInterval) clearInterval(sliderInterval);
    if (length > 1) {
        sliderInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 3000); // 3 Seconds
    }
}


// --- 4. PLAYER MODAL LOGIC ---

// Custom Download Logic
function handleDownloadClick(event) {
    // Prevent the default link navigation immediately
    event.preventDefault();

    const btn = event.currentTarget;
    const textSpan = btn.querySelector('span'); // Target span to keep icon
    let clickCount = parseInt(btn.dataset.clickCount || 0);

    const downloadUrl1 = btn.dataset.downloadUrl1;
    const downloadUrl2 = btn.dataset.downloadUrl2;

    // Logic: If clicked 0 or 1 times (Total 2 times), use URL 1
    if (clickCount < 2 && downloadUrl1) {
        // 1st and 2nd click: Use URL 1
        window.open(downloadUrl1, '_blank');

        // Increase count
        clickCount++;
        btn.dataset.clickCount = clickCount;

        // Update text to show progress
        if (textSpan) {
            if (clickCount === 1) {
                textSpan.textContent = '(Click 1 more time)';
            } else {
                textSpan.textContent = 'Ready For Download (Final Click)';
            }
        }

    } else if (clickCount >= 2 && downloadUrl2) {
        // 3rd click (count is 2): Use URL 2
        window.open(downloadUrl2, '_blank');

        // Update text
        if (textSpan) textSpan.textContent = 'Link Expired (SORRY)';
    }
}

// =========================================================
// UPDATED OPEN PLAYER FUNCTION (Delegates to new logic)
// =========================================================
function openPlayer(index) {
    const movie = moviesData[index];
    if (!movie) return;

    // Check if Series (based on 'episodes' array presence OR 'seriesInfo' text)
    let episodes = movie.episodes || [];

    // NOTE: Only treat as series if actual episodes are defined in the array
    // This prevents empty sidebars
    const hasEpisodes = episodes.length > 0;

    if (hasEpisodes) {
        // CALL NEW SERIES FUNCTION (Defined at bottom)
        initSeriesPlayer(movie, episodes);
    } else {
        // CALL NEW MOVIE FUNCTION (Defined at bottom)
        initMoviePlayer(movie);
    }

    // Setup Download Button Data
    if (movie.downloadUrl1) {
        modalDownloadBtn.style.display = 'flex';
        modalDownloadBtn.dataset.downloadUrl1 = movie.downloadUrl1;
        modalDownloadBtn.dataset.downloadUrl2 = movie.downloadUrl2 || movie.downloadUrl1;
        modalDownloadBtn.dataset.clickCount = 0;
        const textSpan = modalDownloadBtn.querySelector('span');
        if (textSpan) textSpan.textContent = 'Download';
    } else {
        modalDownloadBtn.style.display = 'none';
    }

    videoModal.classList.add('active');
}

function closePlayer() {
    videoModal.classList.remove('active');
    videoPlayerFrame.src = "";
}

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closePlayer();
    }
});

// --- 5. MOVIE CARD GENERATION ---
function createMovieCard(movie, index) {
    const displayGenre = movie.genre.replace(/\+/g, ' ');

    // Check for seriesInfo to create a specific layout for web series
    if (movie.seriesInfo) {
        return `
                    <div class="movie-card relative block rounded-lg overflow-hidden transition hover:shadow-2xl cursor-pointer group" onclick="openPlayer(${index})">
                        <div class="block">
                            <img 
                                data-src="${movie.posterUrl}" 
                                alt="Poster for ${movie.title} - "
                                class="w-full h-auto object-cover aspect-[2/3] placeholder-image transition duration-300 transform group-hover:scale-110"
                                loading="lazy"
                                decoding="async" 
                                onerror="this.onerror=null; this.src='https://placehold.co/300x450/1F2833/E5E7EB?text=Image+Load+Error'"
                            >
                            
                            <div class="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-0.5 rounded-full uppercase shadow-md z-10">
                                ${movie.language}
                            </div>

                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40 z-20">
                                <div class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg transform scale-0 group-hover:scale-100 transition duration-300">
                                    <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                                </div>
                            </div>

                            <div class="absolute bottom-0 left-0 right-0 pb-2 px-4 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col justify-end min-h-[18%]">
                                <h1 class="title text-md font-semibold truncate transition mb-1 shadow-sm text-white">${movie.title}</h1>
                                <div class="text-yellow-400 text-sm font-bold uppercase tracking-wide">
                                    ${movie.seriesInfo}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    }

    // Standard Movie Card
    return `
                <div class="movie-card relative block rounded-lg overflow-hidden transition hover:shadow-2xl cursor-pointer group" onclick="openPlayer(${index})">
                    <div class="block">
                        <img 
                            data-src="${movie.posterUrl}" 
                            alt="Poster for ${movie.title} - "
                            class="w-full h-auto object-cover aspect-[2/3] placeholder-image transition duration-300 transform group-hover:scale-110"
                            loading="lazy"
                            decoding="async" 
                            onerror="this.onerror=null; this.src='https://placehold.co/300x450/1F2833/E5E7EB?text=Image+Load+Error'"
                        >
                        
                        <div class="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-0.5 rounded-full uppercase shadow-md z-10">
                            ${movie.language}
                        </div>

                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40 z-20">
                                <div class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg transform scale-0 group-hover:scale-100 transition duration-300">
                                    <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                                </div>
                        </div>

                        <div class="absolute bottom-0 left-0 right-0 pb-2 px-4 bg-gradient-to-t from-black via-black/90 to-transparent pt-6">
                            <h1 class="title text-md font-semibold truncate transition shadow-sm text-white">${movie.title}</h1>
                            <p class="text-xs text-gray-400"></p>
                        </div>
                    </div>
                </div>
            `;
}

// --- 6. RENDERING ---
function renderMovies(movies) {
    gridElement.innerHTML = movies.map(movie => {
        const originalIndex = moviesData.indexOf(movie);
        return createMovieCard(movie, originalIndex);
    }).join('');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.onload = () => img.classList.remove('placeholder-image');
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '0px 0px 200px 0px' });

    document.querySelectorAll('.movie-card img').forEach(img => observer.observe(img));
}

// --- 6. LOGIC (Filter, Search, Nav) ---
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navContentMobile.classList.contains('hidden')) {
        navContentMobile.classList.remove('hidden');
        menuToggle.classList.add('open');
        const currentUrl = window.location.href;
        window.history.pushState({ menu: 'open' }, '', currentUrl);
    } else {
        navContentMobile.classList.add('hidden');
        menuToggle.classList.remove('open');
    }
});

document.addEventListener('click', (e) => {
    const isMenuOpen = !navContentMobile.classList.contains('hidden');
    const isClickInsideMenu = navContentMobile.contains(e.target);
    const isClickOnToggle = menuToggle.contains(e.target);
    if (isMenuOpen && !isClickInsideMenu && !isClickOnToggle) {
        navContentMobile.classList.add('hidden');
        menuToggle.classList.remove('open');
    }
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.onload = () => img.classList.remove('placeholder-image');
            observer.unobserve(img);
        }
    });
}, { rootMargin: '0px 0px 200px 0px' });

function generateMoviesHTML(moviesList) {
    if (!moviesList || moviesList.length === 0) return '<p class="text-gray-500 text-sm p-4">No movies found in this category.</p>';
    return moviesList.map(movie => {
        const originalIndex = moviesData.indexOf(movie);
        return createMovieCard(movie, originalIndex);
    }).join('');
}

function filterByCategory(category, updateUrl = true) {
    window.scrollTo(0, 0);
    mainContent.innerHTML = '';

    if (category === 'Recent Adds' || category === 'All') {
        if (category === 'Recent Adds') {
            initSlider();
        } else {
            if (sliderInterval) clearInterval(sliderInterval);
        }

        if (category === 'All') {
            heroSlider.style.display = 'none';
        }

        let recentMovies;
        if (category === 'All') {
            recentMovies = moviesData;
        } else {
            recentMovies = moviesData.filter(m => m.category === 'Recent Adds');
        }

        if (recentMovies.length > 0) {
            if (category === 'Recent Adds') {
                const limitedRecent = recentMovies.slice(0, 15);
                let moviesHTML = generateMoviesHTML(limitedRecent);
                moviesHTML += createSeeAllCard('All', 'View All');

                const sectionHTML = `
                            <div class="mb-8">
                                <div class="flex justify-between items-center mb-4 px-2">
                                    <div class="flex items-center">
                                        <div class="w-2 h-7 bg-[var(--color-accent)] rounded-full mr-3 md:h-10"></div>
                                        <h2 class="text-3xl font-bold text-white md:text-5xl">Recent Adds</h2>
                                    </div>
                                </div>
                                <div class="movie-grid">
                                    ${moviesHTML}
                                </div>
                            </div>
                        `;
                mainContent.insertAdjacentHTML('beforeend', sectionHTML);
            } else {
                const sectionHTML = `
                            <div class="flex items-center mb-6">
                                <div class="w-2 h-6 bg-[var(--color-accent)] rounded-full mr-3"></div>
                                <h2 class="text-2xl font-semibold" id="section-title">All Movies</h2>
                            </div>
                            <section class="movie-grid" id="movieGrid">
                                ${generateMoviesHTML(recentMovies)}
                            </section>
                        `;
                mainContent.innerHTML = sectionHTML;
                document.querySelectorAll('.movie-card img').forEach(img => observer.observe(img));
                if (updateUrl) {
                    const newUrl = new URL(window.location);
                    newUrl.searchParams.set('category', category);
                    window.history.pushState({ category: category }, '', newUrl);
                }
                return;
            }
        }

        categoriesList.forEach(catName => {
            const catMovies = moviesData.filter(m => m.category === catName).slice(0, 9);
            if (catMovies.length > 0) {
                let moviesHTML = generateMoviesHTML(catMovies);
                moviesHTML += createSeeAllCard(catName, 'See All');
                const sectionHTML = `
                            <div class="mb-8">
                                <div class="flex justify-between items-center mb-4 px-2 mt-20 pt-7 md:pt-10 md:mb-7">
                                    <div class="flex items-center">
                                        <div class="w-2 h-7 bg-[var(--color-accent)] rounded-full mr-3 md:h-10"></div>
                                        <h2 class="text-3xl font-bold text-white md:text-5xl">${catName}</h2>
                                    </div>
                                </div>
                                <div class="movie-grid">
                                    ${moviesHTML}
                                </div>
                            </div>
                        `;
                mainContent.insertAdjacentHTML('beforeend', sectionHTML);
            }
        });

    } else {
        heroSlider.style.display = 'none';
        if (sliderInterval) clearInterval(sliderInterval);

        const catMovies = moviesData.filter(movie => movie.category === category);
        const sectionHTML = `
                    <div class="flex items-center mb-6">
                        <div class="w-2 h-6 bg-[var(--color-accent)] rounded-full mr-3"></div>
                        <h2 class="text-2xl font-semibold" id="section-title">${category}</h2>
                    </div>
                    <section class="movie-grid" id="movieGrid">
                        ${generateMoviesHTML(catMovies)}
                    </section>
                `;
        mainContent.innerHTML = sectionHTML;
    }

    document.querySelectorAll('.movie-card img').forEach(img => observer.observe(img));

    if (updateUrl) {
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('category', category);
        window.history.pushState({ category: category }, '', newUrl);
    }
}

function filterBySearch() {
    const activeInput = searchInputDesktop && searchInputDesktop.value ? searchInputDesktop : searchInputMobile;
    const query = activeInput.value.toLowerCase();
    window.scrollTo(0, 0);

    if (query === '') {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category') || 'Recent Adds';
        filterByCategory(category, false);
        return;
    }

    heroSlider.style.display = 'none';
    if (sliderInterval) clearInterval(sliderInterval);

    const filtered = moviesData.filter(movie =>
        movie.title.toLowerCase().includes(query) ||
        movie.genre.toLowerCase().includes(query)
    );

    const sectionHTML = `
                <div class="flex items-center mb-6">
                    <div class="w-2 h-6 bg-[var(--color-accent)] rounded-full mr-3"></div>
                    <h2 class="text-2xl font-semibold">Search Results (${filtered.length})</h2>
                </div>
                <section class="movie-grid">
                    ${generateMoviesHTML(filtered)}
                </section>
            `;
    mainContent.innerHTML = sectionHTML;

    document.querySelectorAll('.movie-card img').forEach(img => observer.observe(img));
}

let searchTimeout = null;
const inputs = [
    { input: searchInputDesktop, clearBtn: clearSearchBtnDesktop },
    { input: searchInputMobile, clearBtn: clearSearchBtnMobile }
];

inputs.forEach(({ input, clearBtn }) => {
    input.addEventListener('input', () => {
        const otherInput = input === searchInputDesktop ? searchInputMobile : searchInputDesktop;
        const otherClearBtn = input === searchInputDesktop ? clearSearchBtnMobile : clearSearchBtnDesktop;
        otherInput.value = input.value;
        if (input.value.trim().length > 0) {
            clearBtn.classList.remove('hidden');
            otherClearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
            otherClearBtn.classList.add('hidden');
        }
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterBySearch, 300);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            clearTimeout(searchTimeout);
            filterBySearch();
            if (navContentMobile && !navContentMobile.classList.contains('hidden')) {
                navContentMobile.classList.add('hidden');
                menuToggle.classList.remove('open');
            }
            input.blur();
        }
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        const otherInput = input === searchInputDesktop ? searchInputMobile : searchInputDesktop;
        const otherClearBtn = input === searchInputDesktop ? clearSearchBtnMobile : clearSearchBtnDesktop;
        otherInput.value = '';
        clearBtn.classList.add('hidden');
        otherClearBtn.classList.add('hidden');
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category') || 'Recent Adds';
        filterByCategory(category, false);
        input.focus();
    });
});

document.body.addEventListener('click', (e) => {
    let target = e.target;
    while (target && target !== document.body) {
        if (target.hasAttribute('data-category')) {
            e.preventDefault();
            const category = target.getAttribute('data-category');
            filterByCategory(category);
            searchInputDesktop.value = '';
            searchInputMobile.value = '';
            clearSearchBtnDesktop.classList.add('hidden');
            clearSearchBtnMobile.classList.add('hidden');
            if (navContentMobile && !navContentMobile.classList.contains('hidden')) {
                navContentMobile.classList.add('hidden');
                menuToggle.classList.remove('open');
            }
            return;
        }
        target = target.parentElement;
    }
});

if (siteLogo) {
    siteLogo.addEventListener('click', (e) => {
        e.preventDefault();
        filterByCategory('Recent Adds');
        searchInputDesktop.value = '';
        searchInputMobile.value = '';
        clearSearchBtnDesktop.classList.add('hidden');
        clearSearchBtnMobile.classList.add('hidden');
        if (navContentMobile) {
            navContentMobile.classList.add('hidden');
            menuToggle.classList.remove('open');
        }
    });
}

window.addEventListener('popstate', (event) => {
    if (!navContentMobile.classList.contains('hidden')) {
        navContentMobile.classList.add('hidden');
        menuToggle.classList.remove('open');
        return;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'Recent Adds';
    filterByCategory(category, false);
    const movieSlug = urlParams.get('movie');
    if (movieSlug) {
        const movieIndex = moviesData.findIndex(m => slugify(m.title) === movieSlug);
        if (movieIndex !== -1) openPlayer(movieIndex);
    } else {
        closePlayer();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'Recent Adds';
    filterByCategory(category, false);
});

function generateSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": moviesData.map((movie, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Movie",
                "name": movie.title,
                "image": movie.posterUrl,
                "genre": movie.genre,
                "inLanguage": movie.language
            }
        }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}

function createSeeAllCard(category, label = "See All") {
    return `
                <div class="movie-card relative block rounded-lg overflow-hidden h-full flex flex-col group" onclick="filterByCategory('${category}')">
                    <div class="see-all-card-inner block h-full relative bg-[#1F2833] border-2 border-dashed border-gray-600 flex flex-col items-center justify-center aspect-[2/3] hover:bg-gray-800 hover:border-[var(--color-accent)] transition duration-300 cursor-pointer">
                        <div class="see-all-icon w-14 h-14 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center mb-3 shadow-lg transition transform duration-300">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                        <span class="text-white font-bold text-2xl uppercase tracking-wider">${label}</span>
                        <span class="text-gray-500 text-base mt-1 font-semibold">${category === 'Recent Adds' ? 'View All' : category}</span>
                    </div>
                </div>
            `;
}

generateSchema();

const episodeSidebar = document.getElementById('episodeSidebar');
const episodeList = document.getElementById('episodeList');

/**
 * INITIALIZES THE PLAYER IN SERIES MODE
 * - Shows sidebar, widens modal, and renders the list
 * - Fixed: Sets maxWidth to 1280px to accommodate sidebar without shrinking video
 */
function initSeriesPlayer(movie, episodes) {
    // Show Sidebar
    episodeSidebar.classList.remove('hidden');
    modalContent.style.maxWidth = '1280px'; // Wider to fit sidebar + video

    // Render the interactive list
    renderEpisodeList(movie, episodes);

    // Set initial state to First Episode
    modalTitle.textContent = `${movie.title}: ${episodes[0].title}`;
    if (episodes[0].embedUrl) {
        videoPlayerFrame.src = episodes[0].embedUrl;
    }
}

/**
 * INITIALIZES THE PLAYER IN MOVIE MODE (STANDARD)
 * - Hides sidebar, standard width
 */
function initMoviePlayer(movie) {
    // Hide Sidebar
    episodeSidebar.classList.add('hidden');
    modalContent.style.maxWidth = '900px'; // Standard width

    modalTitle.textContent = movie.title;
    if (movie.embedUrl && movie.embedUrl !== "#") {
        videoPlayerFrame.src = movie.embedUrl;
    } else {
        alert("Video source not available for this demo.");
        return;
    }
}

/**
 * RENDERS THE LIST OF EPISODES IN THE SIDEBAR
 */
function renderEpisodeList(movie, episodes) {
    episodeList.innerHTML = ''; // Clear old list

    episodes.forEach((ep, index) => {
        const isCurrent = index === 0; // Default to first episode

        // Create container
        const epDiv = document.createElement('div');
        epDiv.className = `episode-item flex items-center justify-between p-3 rounded-md cursor-pointer ${isCurrent ? 'active' : 'text-gray-400'}`;

        // Click Event: Change Video and Active Highlight
        epDiv.onclick = () => {
            // 1. Reset all visual states
            document.querySelectorAll('.episode-item').forEach(el => {
                el.classList.remove('active');
                el.classList.add('text-gray-400');
                // Hide play icons
                const icon = el.querySelector('.play-icon');
                if (icon) icon.classList.add('opacity-0');
            });

            // 2. Set clicked item as active
            epDiv.classList.add('active');
            epDiv.classList.remove('text-gray-400');
            epDiv.querySelector('.play-icon').classList.remove('opacity-0');

            // 3. Update Player Title and Source
            modalTitle.textContent = `${movie.title}: ${ep.title || 'Episode ' + ep.number}`;
            videoPlayerFrame.src = ep.embedUrl;
        };

        const infoDiv = document.createElement('div');
        infoDiv.className = 'flex items-center space-x-3 w-full';

        // Badge (e.g. "1")
        const badgeHtml = `<div class="episode-number-badge">${ep.number}</div>`;

        // Title & Duration
        const contentHtml = `
                    <div class="flex flex-col flex-1 min-w-0">
                        <span class="text-sm font-semibold truncate text-gray-200 group-hover:text-white">${ep.title || 'Episode ' + ep.number}</span>
                        
                    </div>
                `;

        // Play Icon (visible only on hover or active)
        const playIcon = `<svg class="w-4 h-4 text-[var(--color-accent)] opacity-0 play-icon transition-opacity duration-200" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>`;

        infoDiv.innerHTML = badgeHtml + contentHtml + playIcon;
        epDiv.appendChild(infoDiv);

        // Handle icon visibility on initial load
        if (isCurrent) {
            epDiv.querySelector('.play-icon').classList.remove('opacity-0');
        } else {
            // Hover effects for non-active items
            epDiv.addEventListener('mouseenter', () => epDiv.querySelector('.play-icon').classList.remove('opacity-0'));
            epDiv.addEventListener('mouseleave', () => {
                if (!epDiv.classList.contains('active')) epDiv.querySelector('.play-icon').classList.add('opacity-0');
            });
        }

        episodeList.appendChild(epDiv);
    });
}

document.addEventListener("contextmenu",e=>e.preventDefault());
document.onkeydown=function(e){if(123==e.keyCode)return!1;if(e.ctrlKey&&e.shiftKey){var t=e.keyCode;if(t=="I".charCodeAt(0)||t=="J".charCodeAt(0)||t=="C".charCodeAt(0))return!1}if(e.ctrlKey){var n=e.keyCode;if(n=="U".charCodeAt(0)||n=="S".charCodeAt(0))return e.preventDefault(),!1}};
setInterval(function(){debugger},100);