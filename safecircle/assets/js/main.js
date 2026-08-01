// SafeCircle site interactions
document.addEventListener('DOMContentLoaded', () => {

  // Sticky nav background on scroll
  const nav = document.getElementById('siteNav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 20) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navLinks.style.display = isOpen ? 'flex' : 'none';
      if (isOpen) {
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'rgba(11,20,32,0.98)';
        navLinks.style.padding = '18px 24px';
        navLinks.style.gap = '14px';
      }
      navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          navLinks.style.display = 'none';
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('is-open'));
      if (!wasOpen) item.classList.add('is-open');
    });
  });

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
