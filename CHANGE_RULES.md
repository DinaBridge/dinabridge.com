# DinaBridge Change Rules — Enforcement Layer
> **Version:** 2.7.2 · **Status:** ACTIVE
> These rules govern every AI-assisted or manual update to the DinaBridge site.
> They are not suggestions. They are the enforcement contract.

---

## THE NO-OVERRIDE RULE
> No update may remove, collapse, or simplify existing layout structure
> unless explicitly instructed as a **STRUCTURAL REDESIGN**.
> All updates must be **additive or corrective** — never destructive.

---

## THE STRUCTURE PRESERVATION RULE
> Never remove sections, components, or layout blocks during optimization.
> Only adjust: spacing · alignment · typography · styling · hover states.

This directly prevents:
- Sections disappearing after a "fix"
- Cards collapsing after a global CSS update
- Footer overwritten during a spacing pass
- Contact page wiped during a consistency pass

---

## CHANGE SCOPE DISCIPLINE

Before ANY change, classify the request into one of these scopes:

### ✅ Allowed without confirmation
| Scope | Example |
|---|---|
| Spacing fix | "Add more padding to hero section" |
| Typography fix | "Increase body line-height" |
| Color fix | "Teal label is too bright" |
| Grid fix | "Team grid columns misaligned on mobile" |
| Component styling | "Card hover shadow too faint" |
| Content addition | "Add new team member" |
| Hover state restoration | "Restore card lift on hover" |

### 🚨 NOT allowed unless explicitly stated
| Scope | Requires explicit instruction |
|---|---|
| Page rebuild | Must say: `REBUILD [page] FROM SCRATCH` |
| Layout rewrite | Must say: `STRUCTURAL REDESIGN` |
| System simplification | Must say: `SIMPLIFY DESIGN SYSTEM` |
| Structure removal | Must say: `REMOVE [section name]` |
| Global CSS overwrite | Must say: `REPLACE global.css` |

---

## DESTRUCTION WARNING CHECK

Before applying any change, check:
1. Does this remove or collapse any existing section, card, or layout block?
2. Does this reduce the number of components on any page?
3. Does this change `global.css` in a way that affects more than the target component?

If **YES to any** → STOP. Describe the risk. Wait for confirmation.

---

## THE SAFE MODE PROMPT

Use this as the opening instruction for any AI-assisted update:

```
All updates must respect the existing DinaBridge design system without
removing or collapsing any existing structure. Only spacing, typography,
alignment, color consistency, hover states, or component styling may be
adjusted. No page, section, card, or layout block may be deleted,
simplified, or structurally rewritten. All changes must preserve full
information architecture and visual richness across all pages.
If a change risks removing structure, stop and ask before applying.
```

---

## VERSIONING LOG

| Version | Date | Change | Scope |
|---|---|---|---|
| v2.0 | 2025 | Initial design system | System |
| v2.6.0 | 2026-04 | Card visual hierarchy patch | Component |
| v2.6.1 | 2026-04 | card-hierarchy.css imported globally | System |
| v2.7.0 | 2026-05 | Trust bar, practice cards, diff-stack, trust-card grid, hover depth | Component |
| v2.7.1 | 2026-05-10 | Footer centered + highlighted, gem signature restored | Component |
| v2.7.2 | 2026-05-10 | About page visual restoration — card elevation, hover states, identity pillars | Page |
| v2.7.2 | 2026-05-10 | DESIGN_SYSTEM.md + CHANGE_RULES.md governance layer added | System |

---

## ROLLBACK DISCIPLINE

Every commit to `main` must include a version tag in the commit message format:
```
[scope]: description [vX.Y.Z]
```
Examples:
- `fix: restore footer centering [v2.7.1]`
- `restore: about page card elevation [v2.7.2]`
- `feat: add blog section to index [v2.8.0]`

To rollback: identify the last clean commit SHA in this log and restore via GitHub UI or:
```bash
git revert <SHA>
```

---

*Maintained by DinaBridge Engineering. Violations of these rules are bugs, not opinions.*
