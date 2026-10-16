// Progressive enhancement: content and anchor links work without JavaScript.
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const mobile = window.matchMedia('(max-width: 768px)');
  const items = [...document.querySelectorAll('.nav__link')];
  const sections = [...document.querySelectorAll('main > section[id]')];

  function setMenu(open, restoreFocus = false) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    toggle.classList.toggle('nav__toggle--active', open);
    links.classList.toggle('nav__links--open', open);
    links.inert = mobile.matches && !open;
    if (restoreFocus) toggle.focus();
  }

  if (toggle && links) {
    document.documentElement.classList.add('nav-ready');
    setMenu(false);
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    items.forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target)) setMenu(false);
    });
    nav.addEventListener('focusout', () => {
      requestAnimationFrame(() => {
        if (!nav.contains(document.activeElement)) setMenu(false);
      });
    });
    mobile.addEventListener('change', () => setMenu(false));
  }

  let scheduled = false;
  function updateNavigation() {
    nav.classList.toggle('nav--scrolled', window.scrollY > 30);
    let current = sections[0]?.id;
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= 160) current = section.id;
    });
    items.forEach(link => {
      const active = link.hash === `#${current}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateNavigation);
    }
  }, { passive: true });
  updateNavigation();
  document.getElementById('year').textContent = new Date().getFullYear();
});
