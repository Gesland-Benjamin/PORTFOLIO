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

  // Continuous ribbons use native scrolling so touch and keyboard still work.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.skill-group').forEach(group => {
    const track = group.querySelector('.skill-logo-grid');
    const originals = [...track.children];
    let cycle = 0;
    let visible = false;
    let hovered = false;
    let touched = false;
    let frame = 0;
    let lastTime = 0;
    let position = 0;

    function tick(time) {
      const elapsed = lastTime ? Math.min(time - lastTime, 50) : 0;
      lastTime = time;
      position = (position + elapsed * 0.026) % cycle;
      track.scrollLeft = position;
      frame = requestAnimationFrame(tick);
    }

    function sync() {
      cancelAnimationFrame(frame);
      lastTime = 0;
      position = cycle ? track.scrollLeft % cycle : 0;
      if (cycle && visible && !hovered && !touched &&
          !track.matches(':focus-within') && !document.hidden && !reducedMotion.matches) {
        frame = requestAnimationFrame(tick);
      }
    }

    function layout() {
      track.querySelectorAll('[data-clone]').forEach(clone => clone.remove());
      track.scrollLeft = 0;
      cycle = 0;
      if (!reducedMotion.matches) {
        track.tabIndex = 0;
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        cycle = originals.reduce((width, card) => width + card.getBoundingClientRect().width + gap, 0);
        if (cycle > 0) {
          const copies = Math.ceil(track.clientWidth / cycle) + 1;
          for (let i = 0; i < copies; i++) {
            originals.forEach(card => {
              const clone = card.cloneNode(true);
              clone.dataset.clone = '';
              clone.setAttribute('aria-hidden', 'true');
              track.appendChild(clone);
            });
          }
        }
      } else {
        track.removeAttribute('tabindex');
      }
      sync();
    }

    group.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') { hovered = true; sync(); }
    });
    group.addEventListener('pointerleave', () => { hovered = false; sync(); });
    track.addEventListener('focusin', sync);
    track.addEventListener('focusout', () => requestAnimationFrame(sync));
    track.addEventListener('pointerdown', () => { touched = true; sync(); });
    document.addEventListener('pointerdown', event => {
      if (!group.contains(event.target)) { touched = false; sync(); }
    });
    track.addEventListener('keydown', event => {
      if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? cycle :
          track.scrollLeft + (event.key === 'ArrowRight' ? 140 : -140);
        track.scrollTo({ left: Math.max(0, next), behavior: 'instant' });
      }
    });
    document.addEventListener('visibilitychange', sync);
    reducedMotion.addEventListener('change', layout);
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    }, { threshold: 0.1 }).observe(group);
    new ResizeObserver(layout).observe(track);
    layout();
  });
});
