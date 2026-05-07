/* =============================================================
   JD Tech Sage — Main JavaScript
   Description: Navigation, scroll animations, FAQ accordion,
   project filters, cookie banner, cursor effects, and more.
   ============================================================= */

/* ── Wait for DOM ── */
document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────────
     1. NAVBAR — scroll effect + mobile menu
  ───────────────────────────────────────────── */
  const navbar     = document.getElementById('navbar');
  const navToggle  = document.getElementById('navToggle');
  const mobileNav  = document.getElementById('mobileNav');

  /* Scroll class */
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* Mobile toggle */
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      // Animate hamburger to X
      const spans = navToggle.querySelectorAll('span');
      navToggle.classList.toggle('active');
      if (navToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    /* Close mobile nav on link click */
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity   = '';
        });
      });
    });
  }

  /* Active nav link highlighting based on current page */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#navbar .nav-links a, #mobileNav a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ─────────────────────────────────────────────
     2. SCROLL REVEAL ANIMATIONS
  ───────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        /* Unobserve after reveal for performance */
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  /* Observe all reveal elements */
  document.querySelectorAll('.reveal, .reveal-left, .stagger-children').forEach(el => {
    revealObserver.observe(el);
  });

  /* ─────────────────────────────────────────────
     3. FAQ ACCORDION
  ───────────────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      /* Close all open items */
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
      });

      /* Open clicked (if it was closed) */
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  /* ─────────────────────────────────────────────
     4. PROJECT FILTER (Portfolio page)
  ───────────────────────────────────────────── */
  const filterBtns    = document.querySelectorAll('.filter-btn');
  const projectCards  = document.querySelectorAll('.project-card-wrap');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      /* Update active button */
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      /* Show/hide cards with fade */
      projectCards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = '';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = ''; }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });

  /* ─────────────────────────────────────────────
     5. COOKIE BANNER
  ───────────────────────────────────────────── */
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAccept = document.getElementById('cookie-accept');
  const cookieDecline = document.getElementById('cookie-decline');

  /* Show banner if not yet accepted */
  if (cookieBanner && !localStorage.getItem('jdtechsage_cookies')) {
    setTimeout(() => { cookieBanner.classList.add('show'); }, 1500);
  }

  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('jdtechsage_cookies', 'accepted');
      cookieBanner.classList.remove('show');
    });
  }
  if (cookieDecline) {
    cookieDecline.addEventListener('click', () => {
      localStorage.setItem('jdtechsage_cookies', 'declined');
      cookieBanner.classList.remove('show');
    });
  }

  /* ─────────────────────────────────────────────
     6. CUSTOM CURSOR (desktop only)
  ───────────────────────────────────────────── */
  if (window.innerWidth > 768) {
    const cursorDot  = document.createElement('div');
    const cursorRing = document.createElement('div');
    cursorDot.className  = 'cursor-dot';
    cursorRing.className = 'cursor-ring';
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top  = mouseY + 'px';
    });

    /* Smooth ring follow */
    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top  = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    /* Expand on interactive elements */
    document.querySelectorAll('a, button, .card, .project-card, .faq-question').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorDot.style.width  = '12px';
        cursorDot.style.height = '12px';
        cursorRing.style.width  = '48px';
        cursorRing.style.height = '48px';
      });
      el.addEventListener('mouseleave', () => {
        cursorDot.style.width  = '';
        cursorDot.style.height = '';
        cursorRing.style.width  = '';
        cursorRing.style.height = '';
      });
    });
  }

  /* ─────────────────────────────────────────────
     7. ANIMATED COUNTER (for stats)
  ───────────────────────────────────────────── */
  function animateCounter(el, target, duration = 1500) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed  = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* Ease out */
      const value = Math.floor(progress * target);
      el.textContent = value + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  /* Trigger counters on visibility */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        if (!isNaN(target)) {
          animateCounter(el, target);
          counterObserver.unobserve(el);
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => {
    counterObserver.observe(el);
  });

  /* ─────────────────────────────────────────────
     8. SMOOTH SCROLL for anchor links
  ───────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ─────────────────────────────────────────────
     9. CONTACT FORM — simple validation & submit
  ───────────────────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const original = btn.innerHTML;

      /* Simple validation */
      const required = contactForm.querySelectorAll('[required]');
      let valid = true;
      required.forEach(field => {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = '#ff4757';
          valid = false;
        }
      });

      if (!valid) return;

      /* Simulate submit */
      btn.innerHTML = '⏳ Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = '✅ Message Sent!';
        contactForm.reset();
        setTimeout(() => {
          btn.innerHTML = original;
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  /* ─────────────────────────────────────────────
     10. PARTICLE BACKGROUND (subtle floating dots)
  ───────────────────────────────────────────── */
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    const canvas = document.createElement('canvas');
    canvas.id = 'hero-canvas';
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
    heroSection.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 60;

    function resize() {
      canvas.width  = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    /* Particle class */
    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size   = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,240,255,${this.opacity})`;
        ctx.fill();
      }
    }

    /* Init particles */
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    /* Draw connections between close particles */
    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,240,255,${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawLines();
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

}); /* end DOMContentLoaded */
