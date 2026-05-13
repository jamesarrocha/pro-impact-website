// ============================================
// PRO IMPACT DISTRIBUTORS — Site JS
// ============================================

(function () {
  const nav = document.getElementById('nav');
  const navToggle = document.querySelector('.nav-toggle');

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky nav state on scroll
  const onScroll = () => {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('menu-open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-links a').forEach((a) => {
      a.addEventListener('click', () => {
        nav.classList.remove('menu-open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal-on-scroll via IntersectionObserver
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            // Subtle stagger if multiple items in same observer batch
            const target = entry.target;
            const delay = (idx % 6) * 80;
            setTimeout(() => target.classList.add('in'), delay);
            io.unobserve(target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  // Animated counters
  const counters = document.querySelectorAll('.stat-num');
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10) || 0;
        const duration = 1400;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString();
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((c) => countObserver.observe(c));

  // Hero video playback safety (some browsers require explicit play)
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    const ensurePlay = () => {
      const p = heroVideo.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };
    ensurePlay();
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) ensurePlay();
    });
  }
})();
