document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let navbarTicking = false;

    const navOffset = () => {
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        return Math.max(navbarHeight + 12, 72);
    };

    const syncNavbarState = () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 12);
        }

        navbarTicking = false;
    };

    const requestNavbarSync = () => {
        if (navbarTicking) {
            return;
        }

        navbarTicking = true;
        window.requestAnimationFrame(syncNavbarState);
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const targetSelector = anchor.getAttribute('href');
            if (!targetSelector || targetSelector === '#') {
                return;
            }

            const targetId = targetSelector.slice(1);
            const target = document.getElementById(targetId);
            if (!target) {
                return;
            }

            event.preventDefault();

            const top = target.getBoundingClientRect().top + window.scrollY - navOffset();
            window.scrollTo({
                top,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    });

    syncNavbarState();
    window.addEventListener('scroll', requestNavbarSync, { passive: true });

    const revealTargets = document.querySelectorAll('.reveal-on-scroll, .section-stack .glass-panel');
    if (!revealTargets.length) {
        return;
    }

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealTargets.forEach((target) => target.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -12% 0px'
    });

    revealTargets.forEach((target) => {
        target.classList.add('reveal-on-scroll');
        observer.observe(target);
    });
});
