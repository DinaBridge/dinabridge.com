/* DinaBridge Mobile Navigation — v2.0
   Hamburger toggle + slide-down drawer + overlay.
   Drawer appended to <body>, not inside sticky nav,
   so it is never clipped by overflow or stacking context.
   No dependencies. Pure vanilla JS. */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var navEl = document.querySelector('nav.nav');
    if (!navEl) return;

    var navInner = navEl.querySelector('.nav-inner');
    if (!navInner) return;

    // ── Hamburger button ──
    var burger = document.createElement('button');
    burger.className = 'nav-burger';
    burger.setAttribute('aria-label', 'Open navigation menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('type', 'button');
    burger.innerHTML =
      '<span class="burger-bar"></span>' +
      '<span class="burger-bar"></span>' +
      '<span class="burger-bar"></span>';
    navInner.appendChild(burger);

    // ── Drawer (appended to body, NOT inside nav) ──
    var drawer = document.createElement('div');
    drawer.className = 'nav-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'Navigation menu');
    drawer.setAttribute('aria-hidden', 'true');

    // Copy desktop nav links
    var desktopLinks = navEl.querySelector('.nav-links');
    var drawerLinks = document.createElement('div');
    drawerLinks.className = 'drawer-links';
    if (desktopLinks) {
      var anchors = desktopLinks.querySelectorAll('a');
      for (var i = 0; i < anchors.length; i++) {
        drawerLinks.appendChild(anchors[i].cloneNode(true));
      }
    }

    // CTA in drawer
    var desktopCta = navEl.querySelector('.nav-cta');
    if (desktopCta) {
      var ctaClone = desktopCta.cloneNode(true);
      ctaClone.className = 'btn btn-primary drawer-cta';
      drawerLinks.appendChild(ctaClone);
    }

    drawer.appendChild(drawerLinks);
    document.body.appendChild(drawer);

    // ── Overlay ──
    var overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // ── State ──
    var isOpen = false;

    function openMenu() {
      isOpen = true;
      burger.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Close navigation menu');
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
      // Trap focus: move to first link
      var firstLink = drawer.querySelector('a, button');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      isOpen = false;
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open navigation menu');
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.classList.remove('is-visible');
      document.body.style.overflow = '';
      burger.focus();
    }

    burger.addEventListener('click', function () {
      isOpen ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    // Close on any drawer link click
    var drawerAnchors = drawer.querySelectorAll('a');
    for (var j = 0; j < drawerAnchors.length; j++) {
      drawerAnchors[j].addEventListener('click', closeMenu);
    }

    // Keyboard: Escape closes
    document.addEventListener('keydown', function (e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && isOpen) closeMenu();
    });

    // Close if resized past breakpoint
    window.addEventListener('resize', function () {
      if (window.innerWidth > 980 && isOpen) closeMenu();
    });
  });
}());
