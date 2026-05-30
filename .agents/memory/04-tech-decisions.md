---
name: Technical Decisions & Rationale
description: Why specific tools/patterns were chosen and constraints to respect
type: reference
source: Extracted from memory system for .agents/memory/
---

# Technical Decisions & Rationale — Quick Reference

## Framework & Language

**Nuxt 4** (Vue 3 meta-framework)
- **Why**: Full-stack Vue with auto-routing, SSR/SSG, built-in image/font optimization
- **Constraint**: Compatibility version 4 — stay on latest Nuxt 4, don't downgrade
- **TypeScript Strict**: Required — all code must type-check

## Styling System

**SCSS**
- **Why**: SCSS for reusable values and structure
- **Pattern**: `@use` imports only (no `@import`)
- **PostCSS**: Configured as plugin in `nuxt.config.ts`

## Testing

**Unit/Component/E2E**:
- *Nota: Atualmente a stack principal não conta com frameworks complexos de testes unitários ou E2E pré-configurados no package.json. O foco atual é a garantia de renderização via SSG.*

## Data Fetching & SSG

**SSG (Static Site Generation)**
- **Why**: Abertamente é um portal focado em performance de leitura e SEO.
- **Pattern**: Uso de hook em `nitro:config` dentro do `nuxt.config.ts` para capturar os slugs de posts publicados na API e alimentar as rotas do prerender.
- **API Fetching**: Utilizar `$fetch` para consumir o endpoint `/api/post/published`.

## SEO & Meta

**@nuxtjs/seo** (Unhead-based)
- **Why**: Automatic sitemap, robots.txt, OG image generation, SEO best practices
- **Config**: `site` object in `nuxt.config.ts` (name, url, description)
- **Pattern**: Use `useHead()` composable or `useSeoMeta()` in components

## Backend Integration (Nitro)

**Abertamente REST API**
- Environment vars: `NUXT_PUBLIC_API_BASE_URL` (URL base da API do backend em admin.abertamente.net)
- Configurada e exposta via `runtimeConfig.public` para acesso isomórfico.

## Image Optimization

**@nuxt/image**
- **Why**: Automatic format negotiation (WebP, AVIF), responsive sizing, lazy loading
- **Pattern**: Use `<NuxtImg>` instead of `<img>`

## Fonts

**@nuxt/fonts**
- **Why**: Carregamento automático e otimizado de tipografias do Google Fonts.

## Node Version Requirement

**Node 22+** (strict)
- **Why**: Nuxt 4 and new TypeScript require Node 22
- **Constraint**: Do NOT support older Node versions

## Build & Deploy

**SSG (Static Site Generation)**
```bash
npm run generate  # Creates static files
```
- **Why**: Abertamente é um portal cujo conteúdo pode ser gerado estaticamente para SEO máximo.

## Composables Over Global State

**Pattern**: Use composables for shared logic
- **Why**: Abertamente's state needs are minimal, evitando overhead de Pinia.

## Critical Constraints (Never Violate)

1. ✅ **TypeScript strict mode** — no `any` without reason
2. ✅ **No relative imports crossing directories** — use `~` alias
3. ✅ **Component props always typed** — use `defineProps<{}>()`
4. ✅ **SCSS `@use` only** — no `@import`
5. ✅ **No Options API** — use `<script setup>` only
6. ✅ **SEO First** — Todas as páginas de artigos devem ter Meta tags completas.
