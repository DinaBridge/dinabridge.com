# DinaBridge Unified Design + Messaging System
## Version 1.2 — LOCKED
**Last updated:** May 2026
**Enforced in:** `global.css` v1.2
**Authority:** This document governs all present and future work on dinabridge.com.
No page, component, or content change may contradict any rule in this file.

---

## 0. Core Principle (ABSOLUTE RULE)

> **Every page = same system, different content.**

- Nothing is redesigned per page. Only composed.
- No new styles, wording patterns, or layout behaviors may be invented per page.
- `global.css` is the only CSS file. No page-level styles. No inline styles. No `<style>` blocks.

---

## 1. Design System — Structure Layer

### 1.1 Container System

| Property | Value |
|---|---|
| Max width | `--max: 1180px` |
| Horizontal padding | `--sp-24` (collapses to `--sp-16` below 520px) |
| Centering | `margin-left: auto; margin-right: auto` |

❌ No section may define its own width independently.
❌ No "compact" or "wide" container variants.
❌ No page-specific container overrides.

---

### 1.2 Typography System

**Type scale — tokens only:**

| Token | Value | Role |
|---|---|---|
| `--h1-size` | `clamp(2.5rem, 5vw, 4.25rem)` | Page title — one per page |
| `--h2-size` | `clamp(2rem, 4vw, 3rem)` | Section headings |
| `--h3-size` | `1.35rem` | Card and component titles |
| `--h4-size` | `0.75rem` | Form labels, aside subheadings |
| `--text-lg` | `1.125rem` | Hero leads, section intro paragraphs |
| `--text-base` | `1rem` | All body text — universal default |
| `--text-sm` | `0.875rem` | Nav links, secondary UI text |
| `--text-xs` | `0.75rem` | Labels, badges, buttons, captions |

**Rules:**
- ❌ No `px` or raw `rem` font sizes on any page
- ❌ No per-page typography overrides
- ❌ No custom `clamp()` expressions outside `global.css`
- ❌ No exceptions per section
- ✅ `body` font size = `--text-base`, `line-height: 1.75` — no exceptions
- ✅ All `h1` elements live inside `.section-hero` and are styled by `.section-hero h1` in `global.css`

**Hierarchy rule:**
```
H1  → page title only (one per page, inside .section-hero)
H2  → section titles (inside .section-intro, .cta-box, .how-left, etc.)
H3  → card / component titles
H4  → labels only (.aside-block h4, .field label context)
```

---

### 1.3 Spacing System

**Permitted spacing tokens:**

| Token | Value |
|---|---|
| `--sp-4` | `0.25rem` |
| `--sp-8` | `0.5rem` |
| `--sp-12` | `0.75rem` |
| `--sp-16` | `1rem` |
| `--sp-24` | `1.5rem` |
| `--sp-32` | `2rem` |
| `--sp-48` | `3rem` |
| `--sp-64` | `4rem` |
| `--sp-96` | `6rem` |

**Rules:**
- ❌ No raw pixel or rem margin/padding values on any page
- ❌ No per-page spacing adjustments
- ❌ No manual margin tuning between sections
- ✅ All `.section`, `.section-alt`, `.section-hero` use `padding: var(--sp-64) 0`

---

### 1.4 Layout System

**Permitted grid classes:**

| Class | Columns | Use |
|---|---|---|
| `.grid-1` | 1 | Single-column stacks |
| `.grid-2` | 2 equal | Default content layout |
| `.grid-3` | 3 equal | Feature/card sets |
| `.grid-4` | 4 equal | Step sequences, dashboard |

**Rules:**
- ❌ No custom `grid-template-columns` on any page
- ❌ No ad-hoc `display: flex` replacing grid for content layout
- ❌ No orphan items in grid rows (content count must divide evenly)
- ✅ All multi-column content must use one of the four grid classes above
- ✅ `.contact-grid` (1.1fr / 0.9fr) is the only permitted exception — contact page only

---

## 2. Component System

### Cards

| Component | Class combination | Use |
|---|---|---|
| Standard card | `.card-base .card` | Feature cards, service items |
| Highlighted card | `.card-base .card-highlight` | Hero service block, featured content |
| Compact/data card | `.card-base .card-compact` | Metrics, dense data |

❌ No new card variants per page.
❌ No per-page card padding or radius overrides.
✅ All cards must include `.card-base` as the base class.

### Buttons

| Class | Use |
|---|---|
| `.btn .btn-primary` | Primary action (blue filled) |
| `.btn .btn-secondary` | Secondary action (white outlined) |

❌ No new button styles.
❌ No per-page button variants.
❌ No inline button styling.

### Section Structure Pattern

Every content section must follow this hierarchy:
```html
<section class="section"> <!-- or section-alt or section-hero -->
  <div class="container">
    <!-- optional: .section-label eyebrow -->
    <!-- optional: .section-intro block (h2 + p) -->
    <!-- content: .grid-N with .card-base cards -->
    <!-- optional: .cta-box at section end -->
  </div>
</section>
```

---

## 3. Brand Message System (LOCKED)

### 3.1 Master Statement — DO NOT CHANGE

> **"DinaBridge delivers senior Elasticsearch engineering for observability, search, security, and AI — without the layers of a large agency."**

This sentence is locked. It may not be rewritten, shortened, expanded, or paraphrased.

### 3.2 Placement Rules

| Page | Placement | Format |
|---|---|---|
| Home (`index.html`) | Hero lead paragraph | `.hero-lead` |
| Solutions (`solutions.html`) | Section intro paragraph | `.section-intro p` |
| Contact (`contact.html`) | Supporting reinforcement | `.hero-lead` |
| All other pages | Optional reinforcement only | `.hero-lead` or `.section-intro p` |

### 3.3 Anti-Drift Rules

AI and contributors must NOT:
- ❌ Rephrase the master statement
- ❌ Shorten the master statement
- ❌ Expand the master statement
- ❌ Replace "Elasticsearch" with generic terms ("data platform," "modern stack," etc.)
- ❌ Create variations or alternatives to the sentence
- ❌ Move it to a position other than those listed in 3.2

### 3.4 Secondary Proof Badges

The following badges appear in `.hero-proof` spans across hero sections:
- `Elastic Certified`
- `Senior engineers only`
- `White-label delivery`

These labels are fixed. No new badges without explicit approval.

---

## 4. Alignment System

- All text is left-aligned within `.container`
- No `text-align: center` on body content (only decorative labels if needed)
- No mixed alignment within a single section
- No section-specific alignment overrides on any page

---

## 5. Page Compliance Checklist

Every page (present and future) must satisfy all of the following:

- [ ] No `style=""` attributes on any element
- [ ] No `<style>` block in `<head>` or `<body>`
- [ ] No CSS file other than `./global.css` linked
- [ ] One `<h1>` per page, inside `.section-hero`
- [ ] All font sizes use design tokens only
- [ ] All spacing uses `--sp-*` tokens only
- [ ] All layout uses `.grid-1/2/3/4` or named page components
- [ ] Master statement present in correct position
- [ ] Hero opens with `.section-hero > .container > (optional .section-label or .eyebrow) > h1`
- [ ] Footer uses standard markup unchanged

---

## 6. Forbidden (Complete List)

| Forbidden | Reason |
|---|---|
| Inline `style=""` attributes | Bypasses design system |
| Page-specific `<style>` blocks | Creates untracked overrides |
| Raw `px`/`rem` font sizes on pages | Breaks type scale consistency |
| Raw `px`/`rem` spacing on pages | Breaks spacing scale consistency |
| Custom grid columns on pages | Breaks layout consistency |
| New button variants | Creates component sprawl |
| New card variants | Creates component sprawl |
| Rewriting master statement | Breaks brand positioning |
| Generic terms replacing "Elasticsearch" | Dilutes domain positioning |
| Per-page color overrides | Breaks color system |
| Visual "optimization" per page | Violates "same system" principle |

---

## 7. System Intent

DinaBridge.com is a **single system applied consistently across multiple pages.**

Pages are not designs — they are structured compositions of the same system.

```
One system   →  global.css
One message  →  master statement
One font     →  Figtree (sans) + Playfair Display (serif)
One palette  →  color tokens in :root
Many pages   →  HTML compositions using system classes only
Zero drift   →  enforced by this document
```

---

## 8. Allowed Additions (Future Extensions)

New components or tokens may only be added to `global.css` when:
1. The pattern appears on 2+ pages (not page-specific)
2. It reuses existing tokens exclusively
3. It follows the naming convention of existing components
4. It is documented in this file before being used

New pages may only be added when:
1. They follow the Page Compliance Checklist (Section 5) completely
2. They include the master statement in the correct position
3. No new CSS is written — only existing system classes are used
