# DinaBridge Design System — Frozen Constitution
> **Version:** 2.7.2 · **Status:** LOCKED
> This file defines the immutable core of the DinaBridge visual system.
> No AI prompt, CSS patch, or refactor may alter Layer A without an explicit `SYSTEM REDESIGN` instruction.

---

## LAYER A — Design System (NEVER changes without explicit redesign instruction)

### Color Tokens
| Token | Value | Role |
|---|---|---|
| `--navy` | `#102a43` | Primary text, headings |
| `--ink` | `#08111f` | Body text |
| `--ink-2` | `#22324a` | Secondary text |
| `--ink-3` | `#5c6d86` | Muted text, labels |
| `--paper` | `#f5f8fc` | Page background |
| `--blue` | `#0b64dd` | Primary action, links, nav |
| `--teal` | `#008b87` | Section labels, role tags |
| `--pink` | `#bc1e70` | Emphasis, badge accents |
| `--gold` | `#c6922d` | Security practice icon |
| `--magenta` | `#8b3265` | Atmospheric depth only |

### Pink Glow System — 5 Approved Use Sites Only
> RULE: Pink is depth/emphasis ONLY. Never solid. Always gradients, shadows, or `::after` pseudo-elements.
1. `.card-featured::after` — right-edge light source
2. `.how-inner::after` — steps panel right edge
3. `.contact-aside::after` — info panel right edge
4. `.cta-box::before` — bottom-right corner depth
5. `footer::before` — lower-right ambient corner

### Typography
| Role | Font | Weight |
|---|---|---|
| Headings / pull quotes | `Playfair Display` (serif) | 700, 800 |
| Body / UI | `Figtree` (sans) | 300–700 |

### Type Scale
```
--text-xs:   0.75rem
--text-sm:   0.875rem
--text-base: 1rem
--text-lg:   1.125rem
--h1-size:   clamp(2.6rem, 5vw, 4.5rem)
--h2-size:   clamp(2rem, 3.5vw, 3rem)
--h3-size:   1.25rem
--h4-size:   0.72rem
```

### Spacing Scale (8px grid — strict)
```
--sp-4 through --sp-128 (never invent new spacing values)
```
Section vertical padding: `56px` standard · Hero top: `64px` · Tight: `40px` · Card: `32px`

### Grid System
| Class | Columns |
|---|---|
| `.grid-1` | 1 col |
| `.grid-2` | 2 col |
| `.grid-3` | 3 col |
| `.grid-4` | 4 col → 2 col at 1024px → 1 col at 768px |
| `.team-grid` | `auto-fill minmax(260px, 1fr)` |

### Shadow System
```
--shadow-sm   = resting small cards
--shadow-md   = hover state escalation
--shadow-lg   = blue-tinted deep elevation
--card-shadow-rest  = standard card at rest
--card-shadow-hover = standard card on hover
```

### Radius System
```
--radius:    16px  (cards, inputs)
--radius-lg: 22px  (team cards, trust bar)
--radius-xl: 28px  (cta-box, identity-block, how-inner)
```

### Component Inventory (must always exist in global.css)
- `.nav` + `.nav-inner` + `.nav-links` + `.nav-cta` + `.nav-burger` + `.nav-drawer`
- `.btn-primary` + `.btn-secondary`
- `.section` + `.section-alt` + `.section-hero` + `.section-divider`
- `.card-featured` + `.practice-card` + `.team-card` + `.trust-card`
- `.how-inner` + `.cta-box` + `.diff-stack`
- `.trust-bar` + `.trust-stat`
- `footer` + `.footer-inner` + `.footer-brand-block` + `.footer-nav` + `.footer-gem`
- `.eyebrow` + `.badge-pink` + `.badge-blue` + `.section-label`

---

## LAYER B — Page Content (can change freely)
- Text, headings, paragraphs, section copy
- Team bios, names, titles
- CTA button labels
- Blog posts and case studies
- Meta descriptions and page titles

## LAYER C — Page Behavior Rules (controlled updates only)
- CTA hover states
- Responsive breakpoints
- Animation timing
- Scroll behavior

---

## Page Structure Inventory (baseline — must be preserved)

| Page | Required Sections |
|---|---|
| `index.html` | Hero · Trust bar · Practice cards · How section · Diff stack · Trust cards · CTA |
| `elastic-consulting.html` | Hero · Practice areas · How section · CTA |
| `solutions.html` | Hero · Solution cards · How section · CTA |
| `about.html` | Hero · Founder section · Team grid (Leadership + Specialists) · More engineers block · Identity block · CTA |
| `contact.html` | Hero · Contact form · Contact aside · CTA |

---

*Maintained by DinaBridge Engineering. Any change to this file requires explicit `SYSTEM REDESIGN` instruction.*
