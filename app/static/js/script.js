(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.addEventListener('load', () => {
    window.setTimeout(() => document.querySelector('.page-loader')?.classList.add('loaded'), 350);
  });

  document.querySelector('#year').textContent = new Date().getFullYear();

  const closeMenu = () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    mobileMenu?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 48);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const revealed = document.querySelectorAll('.reveal');
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -25px' });
    revealed.forEach(element => revealObserver.observe(element));
  } else {
    revealed.forEach(element => element.classList.add('in-view'));
  }

  const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
  const targets = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      const active = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!active) return;
      navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${active.target.id}`));
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, .1, .5] });
    targets.forEach(section => navObserver.observe(section));
  }

  if (!reducedMotion) {
    const parallaxItems = document.querySelectorAll('[data-parallax]');
    let pending = false;
    window.addEventListener('pointermove', event => {
      if (window.innerWidth < 761 || pending) return;
      pending = true;
      window.requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - .5;
        const y = event.clientY / window.innerHeight - .5;
        parallaxItems.forEach(item => {
          const speed = Number(item.dataset.parallax);
          item.style.setProperty('--move', `translate(${x * speed * 1000}px, ${y * speed * 850}px)`);
        });
        pending = false;
      });
    }, { passive: true });

    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        if (window.innerWidth < 761) return;
        const box = card.getBoundingClientRect();
        const rotateX = ((event.clientY - box.top) / box.height - .5) * -3;
        const rotateY = ((event.clientX - box.left) / box.width - .5) * 3;
        card.style.transform = `translateY(-9px) rotate(${rotateY * .15}deg) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }
}());
