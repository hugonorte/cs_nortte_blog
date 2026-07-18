# Technical Specification - Nortte Blog

## Executive Summary

Este documento serve como a "Fonte da Verdade" para os agentes **@engineer** e **@qa**. O objetivo é construir e manter o **Nortte Blog** utilizando **Nuxt 4**, garantindo uma aplicação robusta, gerada estaticamente (SSG) para alta performance de SEO, e focada em ser um portal de artigos e conhecimento de ponta.

---

## 1. Tech Stack & Infrastructure

### 1.1 Framework Core

- **Framework**: Nuxt 4.
- **Linguagem**: TypeScript (Strict Mode) / Vue 3.
- **Estilização**: SCSS (`sass`).
- **Engine**: Nitro (Configurado para SSG - Static Site Generation na construção dos posts do blog).

### 1.2 Módulos Obrigatórios

- **SEO**: `@nuxtjs/seo` (Meta tags, Sitemap, Robots).
- **Imagens**: `@nuxt/image` (Otimização automática de imagens).
- **Fontes**: `@nuxt/fonts` (Gerenciamento e otimização de tipografia).
- **Scripts**: `@nuxt/scripts` (Para gerenciar carregamento de scripts de terceiros).
- **Linting**: `@nuxt/eslint`.

---

## 2. Component Specifications (Portal e Artigos)

### 2.1 Global: Header & Footer

- **Descrição**: Logo do Nortte Blog, Menu principal de navegação pelas categorias, e links utilitários.
- **Eng. Req**:
  - Header responsivo, otimizado para carregamento veloz.
  - Navegação gerida pelo `vue-router` nativo do Nuxt.

### 2.2 Section: Página Inicial (Blog/Portal)

- **Descrição**: Exibição em destaque dos artigos mais recentes e categorias de informação.
- **Eng. Req**:
  - Implementar usando componentes reutilizáveis, como `PostCard`.
  - Dados dos posts consumidos da API externa (`admin.abertamente.net/api`).
  - Otimização rigorosa de imagens de capa via `@nuxt/image`.

### 2.3 Section: Páginas de Artigos (Post)

- **Descrição**: Página de leitura detalhada de cada artigo.
- **Eng. Req**: 
  - As rotas das páginas devem ser geradas estaticamente (SSG) durante o build. O arquivo `nuxt.config.ts` já implementa um hook em `nitro:config` que busca os IDs e slugs em `/post/published` para adicionar ao `nitroConfig.prerender.routes`.
  - Inserção rigorosa de metadados de SEO para o artigo (título, descrição, autor, imagens OG) utilizando o `@nuxtjs/seo` (via `useSeoMeta` ou `useHead`).
  - O conteúdo rico que vem do backend deve ser exibido mantendo a segurança contra XSS.

---

## 3. Shared Architectures

### 3.1 Directory Standards (Nuxt 4)

- `app/components/`: Componentes organizados logicamente (ex: `Header`, `PostCard`).
- `app/composables/`: Lógica compartilhada (`usePosts`, `useAnalytics`).
- `app/pages/`: Páginas mapeadas diretamente via File-based routing (ex: `index.vue`, `posts/[slug].vue`).
- `app/assets/`: Arquivos estáticos e SCSS globais.

### 3.2 Security & Data

- **Uso estrito de `runtimeConfig`** para variáveis de ambiente. A `NUXT_PUBLIC_API_BASE_URL` é fundamental para o consumo dos dados dos posts.
- **Proteção XSS**: Ao renderizar os conteúdos de posts que possivelmente vêm formatados em HTML, garantir que a renderização é sanitizada e proveniente apenas da API oficial do Nortte Blog.

---

## 4. Acceptance Criteria (@qa)

- [ ] Site nota 90+ no Lighthouse (Performance/SEO).
- [ ] O SSG deve pre-renderizar corretamente todos os posts publicados da API durante a etapa de `generate`.
- [ ] Todas as metatags de SEO devem ser injetadas adequadamente em artigos dinâmicos.
- [ ] O layout deve ser perfeitamente legível e responsivo, focado na experiência de leitura (Tipografia do `@nuxt/fonts` renderizando perfeitamente sem layout shift).

---

## 5. Estratégia de Deploy

- **Versão do Node.js**: O Nuxt 4 exige **Node.js 22+**. O ambiente de build deve rodar sobre esta versão.
- **Processo de Geração**: O comando oficial é `npm run generate` para criar o bundle estático final na pasta `.output/public` ou `dist`, consumindo os dados da API remota em tempo de build.

---

## Approval Gate

> [!IMPORTANT]
> **Esta organização está otimizada para os agentes.**
> Cada seção possui uma descrição de negócio e requisitos focados em performance, SSG e SEO para portais de conteúdo.
> Podemos prosseguir para o desenvolvimento?
