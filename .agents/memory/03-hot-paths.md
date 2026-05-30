---
name: Hot Paths & Critical Files
description: Frequently modified files, stable core areas, and change impact zones
type: reference
source: Extracted from memory system for .agents/memory/
---

# Hot Paths & Critical Files — Quick Reference

## High-Frequency Zones (Change Often)

These files/dirs change frequently and should be understood when context is needed:

### Pages
- `app/pages/` — new pages added regularly
- Current pages: `index.vue`, `power-electronics-modeling.vue`, `proposal.vue`, `create-meeting.vue`, `privacy.vue`, `terms.vue`

### Components
- `app/components/ProposalForm/` — form logic changes
- `app/components/PowerElectronicsModeling/` — recently added, likely to evolve
- Any component in `app/components/` under 50 lines likely to be modified

### i18n
- `app/lang/` — translations change frequently
- `nuxt.config.ts` (i18n config) — stable but check when langDir issues arise

### Tests
- `*.spec.ts` files — added/updated with features
- `cypress/` tests — E2E coverage growing

## Stable Core (Rarely Change)

These are unlikely to need modification:

- `package.json` — dependencies stable, only major updates
- `tsconfig.json` — TypeScript config stable
- `cypress.config.ts` — Cypress setup stable
- `vitest.config.ts` — Vitest setup stable
- `app/types.d.ts` — global types, rarely break

## Impact Zones (Changes Break Multiple Places)

Editing these requires careful consideration of side effects:

### Critical Config
- `nuxt.config.ts` — affects routing, modules, CSS, i18n
- `.env` — server-side integrations (Suite CRM, Google OAuth)

### Shared Styles
- `app/assets/css/main.css` — affects all pages
- Tailwind defaults (if custom config exists)

### Global Composables
- `app/composables/useAccessibility.ts` — used across components
- `app/composables/useAnimatedCounter.ts` — used in Numbers component

### Layout
- `app/layouts/` — affects page structure site-wide
- `app/app.vue` — root component (affects all pages)

## By Feature Area

### Home & Landing
- `app/pages/index.vue` — home page
- `app/components/Hero/index.vue`
- `app/components/Numbers/Numbers.vue`
- `app/components/Studies/index.vue`
- `app/components/Singularity/Singularity.vue`
- `app/components/Bess/index.vue`
- `app/components/SpecialStudies/index.vue`
- `app/components/TechnicalAndForensicAssessment/index.vue`

### Proposals & Meetings
- `app/pages/proposal.vue`
- `app/pages/create-meeting.vue`
- `app/components/ProposalForm/ProposalForm.vue`
- `app/components/GoogleAgenda/GoogleAgenda.vue`

### Power Electronics
- `app/pages/power-electronics-modeling.vue`
- `app/components/PowerElectronicsModeling/index.vue`
- i18n strings in `pt-BR.json`, `en-US.json`, `es-ES.json`

### Legal Pages
- `app/pages/privacy.vue`
- `app/pages/terms.vue`

### Layout & Navigation
- `app/components/Header/index.vue`
- `app/components/Footer/Footer.vue`
- `app/components/FooterWave/index.vue`

### Data & Visualization
- `app/assets/data/estudos.json` — studies database
- `app/assets/data/locations.json` — location/map data
- `app/components/Map/Map.vue` — uses topojson + d3

## Red Flags (Likely to Cause Issues)

When editing these, slow down and test thoroughly:

- `nuxt.config.ts` → Run `npm run build` and test locally
- Any `.json` files (malformed JSON breaks) → Validate JSON
- i18n translation keys → Check all 3 language files match keys
- Component props/emits → Grep for usages before changing signature
- Global type definitions (`types.d.ts`) → Tests must pass

## File Size Reference

- Small (< 100 lines): Safe to refactor
- Medium (100-300 lines): Check for multiple responsibilities
- Large (> 300 lines): Extract composables or split into sub-components

Most components are small-to-medium. `app.vue` and root layouts are minimal.
