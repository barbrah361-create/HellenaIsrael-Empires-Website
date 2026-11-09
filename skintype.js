document.getElementById('whatsappSubmit').addEventListener('click', function() {
   
    const phoneNumber = "+254717263203"; 
   
    const skinType = document.getElementById('skinType').value;
    const skinProblem = document.getElementById('skinProblem').value;

   
    const message = `Hello Hellenaisrael Authentic Cosmetics Empire!%0A%0AI would like a consultation for my skin.%0A%0A` + 
                    `*Skin Type:* ${skinType}%0A` + 
                    `*Skin Problem:* ${skinProblem}%0A%0A` + 
                    `Please advise on the best cosmetic products for me.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
});

const skinFilm = document.querySelector('[data-skin-film]');

if (skinFilm) {
    const filmProducts = Array.from(skinFilm.querySelectorAll('.skin-film-product img'));
    const filmChapters = Array.from(skinFilm.querySelectorAll('[data-film-step]'));
    const filmToggle = skinFilm.querySelector('[data-film-toggle]');
    const filmProgress = skinFilm.querySelector('[data-film-progress]');
    const filmTag = skinFilm.querySelector('[data-film-tag]');
    const filmKicker = skinFilm.querySelector('[data-film-kicker]');
    const filmTitle = skinFilm.querySelector('[data-film-title]');
    const filmDescription = skinFilm.querySelector('[data-film-description]');
    const filmProduct = skinFilm.querySelector('[data-film-product]');
    const filmSteps = [
        {
            tag: 'GENTLE CLEANSING',
            kicker: 'STEP 01 • START FRESH',
            title: 'Cleanse with care',
            description: 'Start with a gentle cleanse to lift away the day while helping your skin feel comfortable and fresh.',
            product: 'Face Facts Ceramide Cleanser'
        },
        {
            tag: 'TARGETED CLEANSING',
            kicker: 'STEP 02 • CARE FOR CLARITY',
            title: 'Give pores a fresh start',
            description: 'For blemish-prone skin, explore a salicylic acid cleanser and follow the product directions.',
            product: 'Creightons Salicylic Acid Cleanser'
        },
        {
            tag: 'BRIGHTENING CARE',
            kicker: 'STEP 03 • BRING BACK YOUR GLOW',
            title: 'Brighten your routine',
            description: 'Add a vitamin C serum to your routine for a fresh-looking, more radiant finish.',
            product: 'Lacura Vitamin C Serum'
        },
        {
            tag: 'LIGHTWEIGHT HYDRATION',
            kicker: 'STEP 04 • FINISH WITH A GLOW',
            title: 'Hydrate and glow',
            description: 'Finish with a lightweight illuminating gel serum to leave skin feeling soft and comfortably hydrated.',
            product: 'Face Facts Illuminating Gel Serum'
        }
    ];
    const stepDuration = 6500;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let activeStep = 0;
    let elapsed = 0;
    let lastStartedAt = 0;
    let playbackTimer = null;
    let sceneAnimationTimer = null;
    let isVisible = false;
    let isPlaying = !reducedMotion.matches;
    let autoplay = isPlaying;

    function updatePlaybackButton() {
        const icon = filmToggle.querySelector('i');
        icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
        filmToggle.setAttribute('aria-label', isPlaying ? 'Pause product presentation' : 'Play product presentation');
    }

    function updateProgress() {
        const progress = Math.min(elapsed / stepDuration, 1);
        filmProgress.style.width = `${progress * 100}%`;
        filmProgress.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
    }

    function stopPlaybackTimer() {
        if (playbackTimer !== null) {
            elapsed = Math.min(stepDuration, elapsed + performance.now() - lastStartedAt);
            window.clearInterval(playbackTimer);
            playbackTimer = null;
        }
        updateProgress();
    }

    function advanceStep() {
        activeStep = (activeStep + 1) % filmSteps.length;
        elapsed = 0;
        renderStep();
    }

    function tickPlayback() {
        elapsed = Math.min(stepDuration, elapsed + performance.now() - lastStartedAt);
        lastStartedAt = performance.now();

        if (elapsed >= stepDuration) {
            advanceStep();
            return;
        }

        updateProgress();
    }

    function syncPlaybackTimer() {
        const shouldRun = isPlaying && isVisible && !document.hidden;
        if (shouldRun && playbackTimer === null) {
            lastStartedAt = performance.now();
            playbackTimer = window.setInterval(tickPlayback, 100);
        } else if (!shouldRun) {
            stopPlaybackTimer();
        }
        updatePlaybackButton();
    }

    function renderStep() {
        const step = filmSteps[activeStep];
        skinFilm.classList.remove('is-changing');
        void skinFilm.offsetWidth;
        skinFilm.classList.add('is-changing');
        if (sceneAnimationTimer !== null) {
            window.clearTimeout(sceneAnimationTimer);
        }
        sceneAnimationTimer = window.setTimeout(() => {
            skinFilm.classList.remove('is-changing');
            sceneAnimationTimer = null;
        }, 800);
        filmProducts.forEach((product, index) => {
            const selected = index === activeStep;
            product.classList.toggle('is-active', selected);
            product.setAttribute('aria-hidden', String(!selected));
        });
        filmChapters.forEach((chapter, index) => {
            const selected = index === activeStep;
            chapter.classList.toggle('is-active', selected);
            chapter.setAttribute('aria-pressed', String(selected));
        });
        filmTag.textContent = step.tag;
        filmKicker.textContent = step.kicker;
        filmTitle.textContent = step.title;
        filmDescription.textContent = step.description;
        filmProduct.textContent = step.product;
        updateProgress();
    }

    filmToggle.addEventListener('click', () => {
        isPlaying = !isPlaying;
        autoplay = false;
        syncPlaybackTimer();
    });

    filmChapters.forEach((chapter, index) => {
        chapter.addEventListener('click', () => {
            activeStep = index;
            elapsed = 0;
            renderStep();
            syncPlaybackTimer();
        });
    });

    document.addEventListener('visibilitychange', syncPlaybackTimer);
    if ('IntersectionObserver' in window) {
        const filmObserver = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
            if (isVisible && autoplay) {
                isPlaying = true;
                autoplay = false;
            }
            syncPlaybackTimer();
        }, { threshold: 0.15 });
        filmObserver.observe(skinFilm);
    } else {
        isVisible = true;
    }

    renderStep();
    syncPlaybackTimer();
}