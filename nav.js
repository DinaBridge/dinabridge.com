/* DinaBridge Mobile Navigation — v1.0
   Hamburger toggle + slide-down drawer + overlay
   Follows global.css design tokens exactly.
   No dependencies. Pure vanilla JS. */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav.nav');
    if (!nav) return;

    // ── Inject hamburger button ──
    const burger = document.createElement('button');
    burger.className = 'nav-burger';
    burger.setAttribute('aria-label', 'Toggle navigation');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('type', 'button');
    burger.innerHTML = `
      <span class="burger-bar"></span>
      <span class="burger-bar"></span>
      <span class="burger-bar"></span>
    `;
    nav.querySelector('.nav-inner').appendChild(burger);

    // ── Inject mobile drawer ──
    const drawer = document.createElement('div');
    drawer.className = 'nav-drawer';
    drawer.setAttribute('aria-hidden', 'true');

    // Copy links from desktop nav
    const desktopLinks = nav.querySelector('.nav-links');
    const drawerLinks = document.createElement('div');
    drawerLinks.className = 'drawer-links';
    if (desktopLinks) {
      Array.from(desktopLinks.querySelectorAll('a')).forEach(function (a) {
        const link = a.cloneNode(true);
        drawerLinks.appendChild(link);
      });
    }

    // CTA button in drawer
    const desktopCta = nav.querySelector('.nav-cta');
    if (desktopCta) {
      const ctaClone = desktopCta.cloneNode(true);
      ctaClone.className = 'btn btn-primary drawer-cta';
      drawerLinks.appendChild(ctaClone);
    }

    drawer.appendChild(drawerLinks);
    nav.appendChild(drawer);

    // ── Inject overlay ──
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // ── Toggle logic ──
    let open = false;

    function openMenu() {
      open = true;
      burger.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      open = false;
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.classList.remove('is-visible');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', function () {
      open ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    // Close on link click
    drawerLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && open) closeMenu();
    });

    // Close if resized to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 980 && open) closeMenu();
    });
  });
}());
