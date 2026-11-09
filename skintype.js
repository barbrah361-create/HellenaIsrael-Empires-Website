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
    const filmNarrationToggle = skinFilm.querySelector('[data-film-narration]');
    const filmProgress = skinFilm.querySelector('[data-film-progress]');
    const filmTag = skinFilm.querySelector('[data-film-tag]');
    const filmTitle = skinFilm.querySelector('[data-film-title]');
    const filmDescription = skinFilm.querySelector('[data-film-description]');
    const filmProduct = skinFilm.querySelector('[data-film-product]');
    const filmSteps = [
        {
            tag: 'GENTLE CLEANSING',
            title: 'Gentle cleansing',
            description: 'This ceramide cleanser is made to wash away everyday dirt and impurities while supporting the skin’s moisture barrier.',
            product: 'Face Facts Ceramide Cleanser'
        },
        {
            tag: 'DEEP CLEANSING',
            title: 'Salicylic acid cleansing',
            description: 'This foaming clay cleanser is designed to deeply cleanse and purify skin. It contains salicylic acid, lactic acid, and white clay.',
            product: 'Creightons Salicylic Acid Cleanser'
        },
        {
            tag: 'BRIGHTENING CARE',
            title: 'Vitamin C brightening care',
            description: 'This vitamin C serum is intended to brighten and refresh the look of skin and help reduce the appearance of uneven tone.',
            product: 'Lacura Vitamin C Serum'
        },
        {
            tag: 'OIL CONTROL & SMOOTHING',
            title: 'Smoothing gel serum',
            description: 'This illuminating gel serum is made to smooth the look of skin and help control excess oil. Its listed ingredients include niacinamide, green tea, and vitamin C.',
            product: 'Face Facts Illuminating Gel Serum'
        }
    ];
    const stepDuration = 6500;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const speechSupported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    let activeStep = 0;
    let elapsed = 0;
    let lastStartedAt = 0;
    let playbackTimer = null;
    let sceneAnimationTimer = null;
    let isVisible = false;
    let isPlaying = !reducedMotion.matches;
    let autoplay = isPlaying;
    let narrationEnabled = false;
    let spokenStep = -1;
    let speechGeneration = 0;

    function narrationText(stepIndex) {
        const step = filmSteps[stepIndex];
        const closing = stepIndex === filmSteps.length - 1
            ? ' There are more authentic products at Hellena Israel Authentic Cosmetics Empire. Visit us today.'
            : '';
        return `${step.title}. ${step.description}${closing}`;
    }

    function currentStepDuration() {
        if (!narrationEnabled) return stepDuration;
        const wordsPerMinute = activeStep === filmSteps.length - 1 ? 105 : 120;
        return Math.max(12000, narrationText(activeStep).trim().split(/\s+/).length * 60000 / wordsPerMinute + 1500);
    }

    function updatePlaybackButton() {
        const icon = filmToggle.querySelector('i');
        icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
        filmToggle.setAttribute('aria-label', isPlaying ? 'Pause product presentation' : 'Play product presentation');
    }

    function updateProgress() {
        const progress = Math.min(elapsed / currentStepDuration(), 1);
        filmProgress.style.width = `${progress * 100}%`;
        filmProgress.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
    }

    function updateNarrationButton() {
        filmNarrationToggle.querySelector('i').className = narrationEnabled
            ? 'fas fa-volume-high'
            : 'fas fa-volume-xmark';
        filmNarrationToggle.setAttribute('aria-pressed', String(narrationEnabled));
        filmNarrationToggle.setAttribute(
            'aria-label',
            narrationEnabled ? 'Turn off spoken narration' : 'Turn on spoken narration'
        );
        filmNarrationToggle.title = narrationEnabled
            ? 'Turn off spoken narration'
            : 'Turn on spoken narration';
    }

    function speakActiveStep() {
        if (!narrationEnabled || !speechSupported) return;

        const generation = ++speechGeneration;
        window.speechSynthesis.cancel();
        const stepIndex = activeStep;
        const voices = window.speechSynthesis.getVoices();
        const englishVoices = voices.filter(voice => /^en([_-]|$)/i.test(voice.lang));
        const femaleVoicePattern = /female|hazel|susan|samantha|karen|moira|tessa|victoria|zira|jenny|aria|ava|serena|natasha|salli|joanna|kendra|kimberly|amy|emma|olivia/i;
        const accentRank = voice => {
            const language = voice.lang.toLowerCase().replace('_', '-');
            if (language === 'en-ke') return 0;
            if (language === 'en-za') return 1;
            if (language === 'en-gb') return 2;
            if (language === 'en-us') return 3;
            return 4;
        };
        const femaleVoices = englishVoices.filter(voice => femaleVoicePattern.test(voice.name));
        const voicePool = femaleVoices.length ? femaleVoices : englishVoices;
        const voice = voicePool.sort((a, b) => accentRank(a) - accentRank(b))[0];
        spokenStep = stepIndex;
        const segments = stepIndex === filmSteps.length - 1
            ? [
                { text: `${filmSteps[stepIndex].title}. ${filmSteps[stepIndex].description}`, rate: 0.98 },
                { text: 'There are more authentic products at', rate: 0.98 },
                { text: 'Hellena Israel Authentic Cosmetics Empire', rate: 0.82 },
                { text: 'Visit us today.', rate: 0.95 }
            ]
            : [{ text: narrationText(stepIndex), rate: 0.98 }];

        segments.forEach((segment, index) => {
            const utterance = new SpeechSynthesisUtterance(segment.text);
            if (voice) utterance.voice = voice;
            utterance.lang = voice?.lang || 'en-GB';
            utterance.rate = segment.rate;
            utterance.pitch = 1.08;
            utterance.onend = () => {
                if (speechGeneration !== generation || spokenStep !== stepIndex) return;
                if (index !== segments.length - 1) return;
                spokenStep = -1;
                if (narrationEnabled && isPlaying && isVisible && !document.hidden && activeStep === stepIndex) {
                    advanceStep();
                }
            };
            utterance.onerror = () => {
                if (speechGeneration === generation && spokenStep === stepIndex) spokenStep = -1;
            };
            window.speechSynthesis.speak(utterance);
        });
    }

    function stopPlaybackTimer() {
        if (playbackTimer !== null) {
            elapsed = Math.min(currentStepDuration(), elapsed + performance.now() - lastStartedAt);
            window.clearInterval(playbackTimer);
            playbackTimer = null;
        }
        updateProgress();
    }

    function advanceStep() {
        activeStep = (activeStep + 1) % filmSteps.length;
        elapsed = 0;
        renderStep();
        if (isPlaying && isVisible && !document.hidden) speakActiveStep();
    }

    function tickPlayback() {
        elapsed = Math.min(currentStepDuration(), elapsed + performance.now() - lastStartedAt);
        lastStartedAt = performance.now();

        if (elapsed >= currentStepDuration() && (!narrationEnabled || !window.speechSynthesis.speaking)) {
            advanceStep();
            return;
        }

        if (elapsed >= currentStepDuration()) elapsed = currentStepDuration();
        updateProgress();
    }

    function syncPlaybackTimer() {
        const shouldRun = isPlaying && isVisible && !document.hidden;
        if (shouldRun && playbackTimer === null) {
            lastStartedAt = performance.now();
            playbackTimer = window.setInterval(tickPlayback, 100);
            if (narrationEnabled) {
                if (window.speechSynthesis.paused && window.speechSynthesis.speaking) {
                    window.speechSynthesis.resume();
                } else if (spokenStep !== activeStep) {
                    speakActiveStep();
                }
            }
        } else if (!shouldRun) {
            stopPlaybackTimer();
            if (speechSupported && window.speechSynthesis.speaking) {
                window.speechSynthesis.pause();
            }
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

    filmNarrationToggle.disabled = !speechSupported;
    if (!speechSupported) {
        filmNarrationToggle.setAttribute('aria-label', 'Spoken narration is not supported in this browser');
        filmNarrationToggle.title = 'Spoken narration is not supported in this browser';
    } else {
        filmNarrationToggle.addEventListener('click', () => {
            narrationEnabled = !narrationEnabled;
            if (narrationEnabled) {
                if (isPlaying && isVisible && !document.hidden) speakActiveStep();
            } else {
                speechGeneration += 1;
                window.speechSynthesis.cancel();
                spokenStep = -1;
            }
            elapsed = 0;
            if (playbackTimer !== null) lastStartedAt = performance.now();
            updateProgress();
            updateNarrationButton();
        });
        updateNarrationButton();
    }

    filmChapters.forEach((chapter, index) => {
        chapter.addEventListener('click', () => {
            activeStep = index;
            elapsed = 0;
            renderStep();
            if (narrationEnabled) {
                if (isPlaying && isVisible && !document.hidden) {
                    speakActiveStep();
                } else {
                    window.speechSynthesis.cancel();
                    spokenStep = -1;
                }
            }
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