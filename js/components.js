/* =============================================================
   JD Tech Sage — Shared Components (injected via JS)
   This file exports HTML strings for the navbar, footer, 
   and cookie banner so they're consistent across all pages.
   Usage: included in every page BEFORE main.js
   ============================================================= */

(function() {

  /* ── NAVBAR HTML ── */
  const navHTML = `
<nav id="navbar">
  <div class="container nav-inner">

    <!-- Logo: place jdtechsagelogo.png in /images/ folder -->
    <a href="index.html" class="nav-logo" aria-label="JD Tech Sage Home">
      <img src="images/jdtechsagelogo.png" alt="JD Tech Sage Logo" width="36" height="36">
      <span class="nav-logo-text">JD Tech <span>Sage</span></span>
    </a>

    <!-- Desktop Navigation Links -->
    <ul class="nav-links" role="list">
      <li><a href="index.html">Home</a></li>
      <li><a href="pages/services.html">Services</a></li>
      <li><a href="pages/portfolio.html">Portfolio</a></li>
      <li><a href="pages/technologies.html">Tech Stack</a></li>
      <li><a href="pages/blog.html">Blog</a></li>
      <li class="nav-dropdown">
        <a href="#" role="button" aria-haspopup="true">Company</a>
        <ul class="dropdown-menu" role="menu">
          <li><a href="pages/about.html" role="menuitem"><span class="icon">👥</span> About Us</a></li>
          <li><a href="pages/testimonials.html" role="menuitem"><span class="icon">⭐</span> Testimonials</a></li>
          <li><a href="pages/careers.html" role="menuitem"><span class="icon">🚀</span> Careers</a></li>
          <li><a href="pages/faq.html" role="menuitem"><span class="icon">❓</span> FAQ</a></li>
        </ul>
      </li>
      <li class="nav-dropdown">
        <a href="#" role="button" aria-haspopup="true">Legal</a>
        <ul class="dropdown-menu" role="menu">
          <li><a href="pages/nda.html" role="menuitem"><span class="icon">🔒</span> NDA</a></li>
          <li><a href="pages/privacy.html" role="menuitem"><span class="icon">🛡</span> Privacy Policy</a></li>
          <li><a href="pages/terms.html" role="menuitem"><span class="icon">📋</span> Terms</a></li>
          <li><a href="pages/cookie-policy.html" role="menuitem"><span class="icon">🍪</span> Cookie Policy</a></li>
          <li><a href="pages/disclaimer.html" role="menuitem"><span class="icon">⚠️</span> Disclaimer</a></li>
          <li><a href="pages/refund.html" role="menuitem"><span class="icon">💸</span> Refund Policy</a></li>
          <li><a href="pages/data-deletion.html" role="menuitem"><span class="icon">🗑</span> Data Deletion</a></li>
        </ul>
      </li>
    </ul>

    <!-- CTA Button -->
    <a href="pages/services.html#contact" class="btn btn-primary nav-cta" aria-label="Start your project">
      Start Project
    </a>

    <!-- Mobile Hamburger -->
    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile Navigation Drawer -->
<nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
  <a href="index.html">🏠 Home</a>
  <a href="pages/services.html">⚙️ Services</a>
  <a href="pages/portfolio.html">🖼 Portfolio</a>
  <a href="pages/technologies.html">💻 Tech Stack</a>
  <a href="pages/blog.html">📝 Blog</a>
  <hr>
  <a href="pages/about.html">👥 About Us</a>
  <a href="pages/testimonials.html">⭐ Testimonials</a>
  <a href="pages/careers.html">🚀 Careers</a>
  <a href="pages/faq.html">❓ FAQ</a>
  <hr>
  <a href="pages/nda.html">🔒 NDA / Confidentiality</a>
  <a href="pages/privacy.html">🛡 Privacy Policy</a>
  <a href="pages/terms.html">📋 Terms & Conditions</a>
  <a href="pages/cookie-policy.html">🍪 Cookie Policy</a>
  <a href="pages/disclaimer.html">⚠️ Disclaimer</a>
  <a href="pages/refund.html">💸 Refund Policy</a>
  <a href="pages/data-deletion.html">🗑 Data Deletion</a>
  <hr>
  <a href="pages/services.html#contact" class="btn btn-primary" style="margin-top:8px;justify-content:center;">
    🚀 Start Your Project
  </a>
</nav>`;

  /* ── FOOTER HTML ── */
  const footerHTML = `
<footer role="contentinfo">
  <div class="container">
    <div class="footer-grid">

      <!-- Brand Column -->
      <div class="footer-brand">
        <a href="index.html" class="footer-logo" aria-label="JD Tech Sage">
          <!-- Logo: place jdtechsagelogo.png in /images/ -->
          <img src="images/jdtechsagelogo.png" alt="JD Tech Sage" width="32" height="32">
          <span class="footer-logo-text">JD Tech <span>Sage</span></span>
        </a>
        <p class="footer-desc">
          Mahesana's leading IT company delivering world-class app development, 
          game development, web solutions, and IT networking services.
        </p>
        <div class="footer-social" role="list" aria-label="Social media links">
          <a href="https://www.instagram.com/jdtechsage" target="_blank" rel="noopener" class="social-link" aria-label="Instagram" role="listitem">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/jdtechsage" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn" role="listitem">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:jdtechsage@gmail.com" class="social-link" aria-label="Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
          <a href="tel:+919427116525" class="social-link" aria-label="Phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          </a>
        </div>
      </div>

      <!-- Services Links -->
      <div class="footer-col">
        <h5>Services</h5>
        <ul class="footer-links" role="list">
          <li><a href="pages/services.html#app-dev">App Development</a></li>
          <li><a href="pages/services.html#game-dev">Game Development</a></li>
          <li><a href="pages/services.html#web-dev">Web Development</a></li>
          <li><a href="pages/services.html#networking">IT Networking</a></li>
          <li><a href="pages/services.html#camera">Camera Installation</a></li>
          <li><a href="pages/services.html#ui-ux">UI / UX Design</a></li>
        </ul>
      </div>

      <!-- Company Links -->
      <div class="footer-col">
        <h5>Company</h5>
        <ul class="footer-links" role="list">
          <li><a href="pages/about.html">About Us</a></li>
          <li><a href="pages/portfolio.html">Portfolio</a></li>
          <li><a href="pages/testimonials.html">Testimonials</a></li>
          <li><a href="pages/careers.html">Careers</a></li>
          <li><a href="pages/blog.html">Blog</a></li>
          <li><a href="pages/faq.html">FAQ</a></li>
        </ul>
      </div>

      <!-- Legal Links -->
      <div class="footer-col">
        <h5>Legal</h5>
        <ul class="footer-links" role="list">
          <li><a href="pages/privacy.html">Privacy Policy</a></li>
          <li><a href="pages/terms.html">Terms & Conditions</a></li>
          <li><a href="pages/cookie-policy.html">Cookie Policy</a></li>
          <li><a href="pages/nda.html">NDA / Confidentiality</a></li>
          <li><a href="pages/disclaimer.html">Disclaimer</a></li>
          <li><a href="pages/refund.html">Refund Policy</a></li>
          <li><a href="pages/data-deletion.html">Data Deletion</a></li>
        </ul>
      </div>

    </div><!-- /footer-grid -->

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p>© <span id="footer-year"></span> JD Tech Sage. All rights reserved. | Mahesana, Gujarat, India</p>
      <p>
        <a href="sitemap.xml">Sitemap</a> · 
        <a href="pages/privacy.html">Privacy</a> · 
        <a href="pages/terms.html">Terms</a>
      </p>
    </div>
  </div>
</footer>

<!-- Cookie Banner -->
<div id="cookie-banner" role="dialog" aria-label="Cookie consent">
  <p>
    We use cookies to enhance your experience. 
    <a href="pages/cookie-policy.html">Learn more</a>
  </p>
  <div class="cookie-btns">
    <button class="btn btn-primary" id="cookie-accept" style="padding:8px 18px;font-size:0.7rem;">Accept</button>
    <button class="btn btn-ghost" id="cookie-decline" style="padding:8px 18px;font-size:0.7rem;">Decline</button>
  </div>
</div>`;

  /* ── Inject into page ── */
  const navPlaceholder    = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder)    navPlaceholder.innerHTML    = navHTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

  /* Set footer year */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Fix relative paths for pages inside /pages/ subfolder */
  const isInPagesDir = window.location.pathname.includes('/pages/');
  if (isInPagesDir) {
    /* Fix all href/src that start with images/ or pages/ or index.html */
    document.querySelectorAll('[href], [src]').forEach(el => {
      const attr = el.tagName === 'IMG' || el.tagName === 'SCRIPT' ? 'src' : 'href';
      const val  = el.getAttribute(attr);
      if (!val) return;
      if (val.startsWith('images/'))  el.setAttribute(attr, '../' + val);
      if (val.startsWith('pages/'))   el.setAttribute(attr, '../' + val);
      if (val.startsWith('sitemap'))  el.setAttribute(attr, '../' + val);
      if (val === 'index.html')       el.setAttribute(attr, '../index.html');
    });
  }

})();
