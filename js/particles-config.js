document.addEventListener('DOMContentLoaded', () => {
    const containerId = 'particles-js';
    const maxAttempts = 30;
    const retryDelay = 180;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let attempts = 0;

    const destroyExistingParticles = (container) => {
        if (window.pJSDom && window.pJSDom.length) {
            window.pJSDom.forEach((instance) => {
                if (instance && instance.pJS && instance.pJS.fn && instance.pJS.fn.vendors && instance.pJS.fn.vendors.destroypJS) {
                    instance.pJS.fn.vendors.destroypJS();
                }
            });
            window.pJSDom = [];
        }

        if (container) {
            container.innerHTML = '';
            delete container.dataset.particlesReady;
        }
    };

    const initParticles = () => {
        const container = document.getElementById(containerId);
        if (!container || container.dataset.particlesReady === 'true') {
            return;
        }

        if (prefersReducedMotion) {
            destroyExistingParticles(container);
            return;
        }

        if (typeof window.particlesJS !== 'function') {
            attempts += 1;
            if (attempts < maxAttempts) {
                window.setTimeout(initParticles, retryDelay);
            }
            return;
        }

        destroyExistingParticles(container);

        window.particlesJS(containerId, {
            particles: {
                number: {
                    value: 54,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                color: {
                    value: '#8c8c8c'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.36,
                    random: true
                },
                size: {
                    value: 2.4,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 160,
                    color: '#b2b2b2',
                    opacity: 0.18,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'window',
                events: {
                    onhover: {
                        enable: false,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: false,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 0.2
                        }
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });

        container.dataset.particlesReady = 'true';
    };

    initParticles();
    window.addEventListener('load', initParticles, { once: true });
});
