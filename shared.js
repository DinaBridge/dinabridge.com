/* DinaBridge Shared Components — v1.2.0
   Single source of truth for:
   - Global nav (header)
   - Global footer
   - JSON-LD schema (ProfessionalService)
   Usage: <script src="/shared.js"></script> in every page <head>.
   The script detects the current page path and applies .active to the matching nav link.
*/

(function () {
  'use strict';

  /* ── Schema ───────────────────────────────────────────── */
  var schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DinaBridge",
    "url": "https://dinabridge.com",
    "description": "Senior Elasticsearch engineering consultancy for observability, search, security, and AI. White-label delivery, senior engineers only.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Colorado",
      "addressRegion": "CO",
      "addressCountry": "USA"
    },
    "areaServed": { "@type": "Country", "name": "United States" },
    "priceRange": "$$",
    "serviceType": [
      "Elasticsearch Consulting",
      "Managed Services",
      "Migration Projects",
      "Kibana Dashboard Customization",
      "Observability Implementation",
      "Security SIEM",
      "AI Search"
    ],
    "knowsAbout": [
      "Elasticsearch","Kibana","Logstash","Elastic Stack",
      "Observability","APM","SIEM","Vector Search","ELSER"
    ]
  };

  var schemaTag = document.createElement('script');
  schemaTag.type = 'application/ld+json';
  schemaTag.text = JSON.stringify(schema, null, 2);
  document.head.appendChild(schemaTag);

  /* ── Nav links config ─────────────────────────────────── */
  var NAV_LINKS = [
    { href: '/',                        label: 'Home' },
    { href: '/elastic-consulting.html', label: 'Elastic Consulting' },
    { href: '/solutions.html',          label: 'Solutions' },
    { href: '/about.html',              label: 'About' },
    { href: '/company.html',            label: 'Company' },
    { href: '/contact.html',            label: 'Contact' }
  ];

  /* ── Active detection ────────────────────────────────── */
  var path = window.location.pathname;
  // Normalise: /index.html and / both match Home
  if (path === '/index.html') path = '/';

  function isActive(href) {
    if (href === '/') return path === '/';
    return path === href || path.indexOf(href) === 0;
  }

  /* ── Build nav HTML ──────────────────────────────────── */
  function buildNavLinks() {
    return NAV_LINKS.map(function (l) {
      var cls = isActive(l.href) ? ' class="active"' : '';
      return '<a href="' + l.href + '"' + cls + '>' + l.label + '</a>';
    }).join('\n      ');
  }

  function buildFooterLinks() {
    return NAV_LINKS.map(function (l) {
      return '<a href="' + l.href + '">' + l.label + '</a>';
    }).join('\n      ');
  }

  /* ── Inject nav ──────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {

    /* Header nav */
    var navEl = document.querySelector('nav.nav');
    if (navEl) {
      navEl.innerHTML =
        '<div class="container nav-inner">\n' +
        '  <a class="brand" href="/"><span class="brand-mark">D</span><span>DinaBridge</span></a>\n' +
        '  <nav class="nav-links">\n      ' +
        buildNavLinks() +
        '\n  </nav>\n' +
        '  <a class="nav-cta" href="/contact.html">Get help with your stack</a>\n' +
        '</div>';
    }

    /* Footer */
    var footerEl = document.querySelector('footer');
    if (footerEl) {
      footerEl.innerHTML =
        '<div class="container footer-inner">\n' +
        '  <div class="footer-brand-block">\n' +
        '    <a class="brand" href="/"><span class="brand-mark">D</span><span>DinaBridge</span></a>\n' +
        '    <p class="footer-tagline">Senior Elasticsearch engineering for observability, search, security, and AI.</p>\n' +
        '  </div>\n' +
        '  <nav class="footer-nav">\n      ' +
        buildFooterLinks() +
        '\n  </nav>\n' +
        '  <div class="footer-divider"></div>\n' +
        '  <p class="footer-legal">&copy; DinaBridge LLC &middot; All rights reserved</p>\n' +
        '  <p class="footer-gem">put the gem in the room.</p>\n' +
        '</div>';
    }

  });

}());
