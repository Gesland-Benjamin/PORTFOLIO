// =============================================
// PORTFOLIO — JavaScript
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================
  // CUSTOM CURSOR
  // ============================
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  if (cursor && follower) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let isHovering = false;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Scale cursor on interactive elements
    const interactables = document.querySelectorAll(
      'a, button, .btn, .project-card, .skill-tag, .stat-card, .nav__toggle, .social-link, .form-input, .form-textarea'
    );
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor--active');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor--active');
      });
    });
  }

  // ============================
  // NAVBAR — SCROLL EFFECT
  // ============================
  const nav = document.getElementById('nav');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScrollY = scrollY;
  });

  // ============================
  // NAVBAR — MOBILE TOGGLE
  // ============================
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('nav__toggle--active');
      navLinks.classList.toggle('nav__links--open');
      document.body.style.overflow = navLinks.classList.contains('nav__links--open')
        ? 'hidden'
        : '';
    });

    // Close on link click
    navLinks.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('nav__toggle--active');
        navLinks.classList.remove('nav__links--open');
        document.body.style.overflow = '';
      });
    });
  }

  // ============================
  // SMOOTH SCROLL FOR NAV LINKS
  // ============================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ============================
  // ACTIVE NAV LINK ON SCROLL
  // ============================
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav__link');

  function updateActiveLink() {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinkItems.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  // ============================
  // SCROLL REVEAL (INTERSECTION OBSERVER)
  // ============================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ============================
  // COUNTER ANIMATION
  // ============================
  const statNumbers = document.querySelectorAll('.stat-card__number');

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          animateCounter(el, target);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((el) => counterObserver.observe(el));

  function animateCounter(el, target) {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target + '+';
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, stepTime);
  }

  // ============================
  // PARTICLES
  // ============================
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const count = 50;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.bottom = `${Math.random() * 20}%`;
      particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
      particlesContainer.appendChild(particle);
    }
  }

  // ============================
  // CONTACT FORM
  // ============================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        showFormFeedback('Veuillez remplir tous les champs.', 'error');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFormFeedback('Email invalide.', 'error');
        return;
      }

      const btn = contactForm.querySelector('.form__btn');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Envoi en cours…';
      btn.disabled = true;

      // Simulate send (replace with actual backend call)
      setTimeout(() => {
        btn.innerHTML = '✓ Message envoyé !';
        btn.classList.add('btn--success');

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('btn--success');
          btn.disabled = false;
          contactForm.reset();
        }, 3000);

        showFormFeedback(
          'Merci ! Je te répondrai dans les plus brefs délais.',
          'success'
        );
      }, 1200);
    });
  }

  function showFormFeedback(msg, type) {
    const existing = document.querySelector('.form-feedback');
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.className = `form-feedback form-feedback--${type}`;
    div.textContent = msg;
    contactForm.insertBefore(div, contactForm.firstChild);

    setTimeout(() => div.remove(), 5000);
  }

});

// =============================================
// DYNAMIC FORM FEEDBACK STYLES (injected via JS)
// =============================================
const feedbackStyles = document.createElement('style');
feedbackStyles.textContent = `
  .form-feedback {
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 500;
    animation: fadeInUp 0.3s ease forwards;
  }
  .form-feedback--success {
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #4ade80;
  }
  .form-feedback--error {
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #f87171;
  }
  .btn--success {
    background: #22c55e !important;
    box-shadow: 0 4px 20px rgba(34, 197, 94, 0.25) !important;
  }
`;
document.head.appendChild(feedbackStyles);
