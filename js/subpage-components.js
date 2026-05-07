/* =============================================================
   JD Tech Sage — Subpage Shared Components
   Works inside:
   /pages/
   /blog/
   /careers/
   ============================================================= */

(function () {

  /* BASE PATH */
  const BASE = "../";

  /* ───────────────── NAVBAR ───────────────── */
  const navHTML = `
<nav id="navbar">
  <div class="container nav-inner">

    <!-- Logo -->
    <a href="${BASE}index.html" class="nav-logo" aria-label="JD Tech Sage Home">
      <img src="${BASE}images/jdtechsagelogo.png" alt="JD Tech Sage Logo" width="36" height="36">
      <span class="nav-logo-text">JD Tech <span>Sage</span></span>
    </a>

    <!-- Desktop Nav -->
    <ul class="nav-links" role="list">
      <li><a href="${BASE}index.html">Home</a></li>
      <li><a href="${BASE}pages/services.html">Services</a></li>
      <li><a href="${BASE}pages/portfolio.html">Portfolio</a></li>
      <li><a href="${BASE}pages/technologies.html">Tech Stack</a></li>
      <li><a href="${BASE}pages/blog.html">Blog</a></li>

      <!-- Company -->
      <li class="nav-dropdown">
        <a href="#" role="button">Company</a>
        <ul class="dropdown-menu">
          <li><a href="${BASE}pages/about.html">👥 About Us</a></li>
          <li><a href="${BASE}pages/testimonials.html">⭐ Testimonials</a></li>
          <li><a href="${BASE}pages/careers.html">🚀 Careers</a></li>
          <li><a href="${BASE}pages/faq.html">❓ FAQ</a></li>
        </ul>
      </li>

      <!-- Legal -->
      <li class="nav-dropdown">
        <a href="#" role="button">Legal</a>
        <ul class="dropdown-menu">
          <li><a href="${BASE}pages/nda.html">🔒 NDA</a></li>
          <li><a href="${BASE}pages/privacy.html">🛡 Privacy</a></li>
          <li><a href="${BASE}pages/terms.html">📋 Terms</a></li>
          <li><a href="${BASE}pages/cookie-policy.html">🍪 Cookies</a></li>
          <li><a href="${BASE}pages/disclaimer.html">⚠ Disclaimer</a></li>
          <li><a href="${BASE}pages/refund.html">💸 Refund</a></li>
          <li><a href="${BASE}pages/data-deletion.html">🗑 Data Deletion</a></li>
        </ul>
      </li>
    </ul>

    <!-- CTA -->
    <a href="${BASE}pages/services.html#contact"
       class="btn btn-primary nav-cta">
      Start Project
    </a>

    <!-- Mobile Toggle -->
    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>

  </div>
</nav>

<!-- Mobile Nav -->
<nav class="mobile-nav" id="mobileNav">
  <a href="${BASE}index.html">🏠 Home</a>
  <a href="${BASE}pages/services.html">⚙️ Services</a>
  <a href="${BASE}pages/portfolio.html">🖼 Portfolio</a>
  <a href="${BASE}pages/technologies.html">💻 Tech Stack</a>
  <a href="${BASE}pages/blog.html">📝 Blog</a>

  <hr>

  <a href="${BASE}pages/about.html">👥 About Us</a>
  <a href="${BASE}pages/testimonials.html">⭐ Testimonials</a>
  <a href="${BASE}pages/careers.html">🚀 Careers</a>
  <a href="${BASE}pages/faq.html">❓ FAQ</a>

  <hr>

  <a href="${BASE}pages/privacy.html">🛡 Privacy Policy</a>
  <a href="${BASE}pages/terms.html">📋 Terms</a>

  <hr>

  <a href="${BASE}pages/services.html#contact"
     class="btn btn-primary"
     style="margin-top:10px;justify-content:center;">
    🚀 Start Your Project
  </a>
</nav>
`;

  /* ───────────────── FOOTER ───────────────── */
  const footerHTML = `
<footer role="contentinfo">
  <div class="container">

    <div class="footer-grid">

      <!-- Brand -->
      <div class="footer-brand">
        <a href="${BASE}index.html" class="footer-logo">
          <img src="${BASE}images/jdtechsagelogo.png"
               alt="JD Tech Sage"
               width="32"
               height="32">

          <span class="footer-logo-text">
            JD Tech <span>Sage</span>
          </span>
        </a>

        <p class="footer-desc">
          Mahesana's leading IT company delivering modern apps,
          websites, games and IT solutions.
        </p>
      </div>

      <!-- Services -->
      <div class="footer-col">
        <h5>Services</h5>
        <ul class="footer-links">
          <li><a href="${BASE}pages/services.html#app-dev">App Development</a></li>
          <li><a href="${BASE}pages/services.html#web-dev">Web Development</a></li>
          <li><a href="${BASE}pages/services.html#game-dev">Game Development</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div class="footer-col">
        <h5>Company</h5>
        <ul class="footer-links">
          <li><a href="${BASE}pages/about.html">About</a></li>
          <li><a href="${BASE}pages/portfolio.html">Portfolio</a></li>
          <li><a href="${BASE}pages/blog.html">Blog</a></li>
          <li><a href="${BASE}pages/careers.html">Careers</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div class="footer-col">
        <h5>Legal</h5>
        <ul class="footer-links">
          <li><a href="${BASE}pages/privacy.html">Privacy Policy</a></li>
          <li><a href="${BASE}pages/terms.html">Terms</a></li>
          <li><a href="${BASE}pages/cookie-policy.html">Cookie Policy</a></li>
        </ul>
      </div>

    </div>

    <!-- Bottom -->
    <div class="footer-bottom">
      <p>© <span id="footer-year"></span> JD Tech Sage. All rights reserved. | Mahesana, Gujarat, India</p>
      <p>
        <a href="../sitemap.xml">Sitemap</a> · 
        <a href="../pages/privacy.html">Privacy</a> · 
        <a href="../pages/terms.html">Terms</a>
      </p>
    </div>

  </div>
</footer>

<!-- Cookie Banner -->
<div id="cookie-banner">
  <p>
    We use cookies to improve your experience.
    <a href="${BASE}pages/cookie-policy.html">Learn more</a>
  </p>

  <div class="cookie-btns">
    <button class="btn btn-primary" id="cookie-accept">
      Accept
    </button>

    <button class="btn btn-ghost" id="cookie-decline">
      Decline
    </button>
  </div>
</div>
`;

  /* ───────────────── INJECT ───────────────── */

  const navPlaceholder = document.getElementById("nav-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  if (navPlaceholder) {
    navPlaceholder.innerHTML = navHTML;
  }

  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }

  /* Footer Year */
  const yearEl = document.getElementById("footer-year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();