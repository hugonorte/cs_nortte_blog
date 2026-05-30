---
name: Project Architecture
description: Nuxt 4 structure, component organization, and key patterns
type: reference
source: Extracted from memory system for .agents/memory/
---

# Project Architecture — Quick Reference

## Directory Structure

```
app/
├── components/          # Vue 3 components organized by feature
│   ├── Bess/
│   ├── Footer/
│   ├── GoogleAgenda/
│   ├── Header/
│   ├── Hero/
│   ├── PowerElectronicsModeling/  # Recently added
│   ├── ProposalForm/
│   ├── Singularity/
│   ├── SpecialStudies/
│   ├── Studies/
│   └── TechnicalAndForensicAssessment/
├── composables/         # Reusable logic
├── layouts/             # Root layout templates
├── middleware/          # Route guards
├── pages/               # File-based routing (Nuxt 4 auto-routes)
│   ├── index.vue                    # Home
│   ├── power-electronics-modeling.vue
│   ├── proposal.vue
│   ├── create-meeting.vue
│   ├── privacy.vue
│   └── terms.vue
├── plugins/             # Vue plugins and initialization
├── lang/                # i18n translation files (pt-BR, en-US, es-ES)
├── assets/
│   ├── css/             # Global CSS (Tailwind + SCSS)
│   ├── data/            # JSON data files (estudos.json, locations.json)
│   └── img/             # Static images
└── app.vue              # Root component

server/                   # Nitro backend
└── api/                 # Server endpoints

public/                  # Static assets (favicon, etc.)
```

## Component Organization

**Format**: Each component in its own folder with `index.vue` and optional `.spec.ts`

**Examples**:
- `Header/index.vue` (layout component)
- `Bess/index.vue` (feature component)
- `PowerElectronicsModeling/index.vue` (newly added)

## Routing Strategy

**Nuxt 4 File-based Routing**:
- `/pages/index.vue` → `/`
- `/pages/power-electronics-modeling.vue` → `/power-electronics-modeling`
- `/pages/proposal.vue` → `/proposal`

No explicit route definitions — routes auto-generated from filenames.

## i18n Setup

**Config** (nuxt.config.ts):
```
restructureDir: 'app'   // Translations relative to app/
langDir: 'lang'         // Folder: app/lang/
locales: [
  { code: 'pt', file: 'pt-BR.json' },
  { code: 'en', file: 'en-US.json' },
  { code: 'es', file: 'es-ES.json' }
]
```

**Files**: `app/lang/{pt-BR,en-US,es-ES}.json`

**Default**: Portuguese (pt)

## Styling Architecture

- **Tailwind CSS v4** (PostCSS plugin)
- **SCSS** with `@use` pattern (not `@import`)
- **CSS**: `app/assets/css/main.css` (imported in nuxt.config)
- **Color mode**: Dark by default
- **TailwindCSS v4** custom config in nuxt.config.ts

## Testing Strategy

**Unit/Component** (Vitest + @nuxt/test-utils):
- Files: `*.spec.ts` co-located with components
- DOM lib: `happy-dom`
- Examples: `app/seo.spec.ts`, `app/components/ProposalForm.spec.ts`

**E2E** (Cypress):
- Config: `cypress.config.ts`
- Tests: `cypress/` folder

**TypeScript**: Strict mode enabled

## Key Integrations

- **@nuxtjs/i18n**: Multi-language support (PT, EN, ES)
- **@nuxtjs/seo**: SEO optimization (Sitemap, Robots, OG images)
- **@nuxt/image**: Image optimization
- **@nuxt/icon**: Icon library (Lucide)
- **@vueuse/motion**: Animation library
- **D3 + TopoJSON**: Data visualization (maps/charts)
- **Vee-Validate + Zod**: Form validation
- **Satori + resvg**: Social image generation

## Recent Work

- **2026-05-04**: Added Power Electronics Modeling page + component
- **2026-04-29**: Fixed i18n `langDir` path resolution for Nuxt 4
- **2026-04-27**: Improved type safety + null checks across codebase
- **2026-04-22**: Updated SEO test schema (children → innerHTML)
