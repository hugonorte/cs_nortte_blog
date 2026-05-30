---
trigger: always_on
---

# Padrões Vue 3 e TypeScript

Sempre que escrever, editar ou analisar código Vue neste projeto, deve seguir estritamente as seguintes regras:

- **Composition API (Script Setup):** Usa sempre a sintaxe `<script setup lang="ts">`. Evita a Options API ou o `defineComponent` clássico.
- **Auto-imports (Nuxt Nativo):** **PROIBIDO** importar manualmente funções nativas do Nuxt ou Vue que possuam auto-import (ex: `ref`, `computed`, `useFetch`, `useI18n`, `useRouter`, `useHead`). O compilador do Nuxt trata isso automaticamente.
- **Tipagem Estrita (TypeScript):** Define sempre interfaces ou tipos para Props, Emits e estados complexos. Usa `defineProps<{ ... }>()` e `defineEmits<{ ... }>()`. Evita o uso de `any`.
- **Data Fetching:**
    - Prefira `useFetch` para chamadas reativas vinculadas ao ciclo de vida do componente.
    - Use `pick` ou `transform` para reduzir o tamanho do payload enviado ao browser.
    - Evite o uso de `axios`; utilize o `$fetch` nativo (ofetch).
- **Nuxt Modules Standards:**
    - **Imagens:** Use o componente `<NuxtImg>` do `@nuxt/image` para otimização automática.
    - **SEO:** Utilize `useSeoMeta` ou `useHead` para metadados dinâmicos.
    - **Icons:** Use `<Icon name="..." />` do `@nuxt/icon`.
- **Folders (Nuxt 4 structure):**
    - Todo código da aplicação deve residir dentro da pasta `app/`.
    - Componentes: `app/components/`.
    - Composables: `app/composables/`.
    - Pages: `app/pages/`.
    - Layouts: `app/layouts/`.
- **Internacionalização (I18n):** Nunca escrevas texto diretamente (hardcoded) no template. Utilize `$t('key')`. As traduções devem estar em `lang/`.
- **Estilização:** Use **Tailwind CSS** para layout e componentes rápidos. Para estilos específicos e reutilizáveis, use SCSS com o padrão `@use`.
- **Hydration Safety:** Garanta que o código é compatível com SSR. Use `onMounted` para lógica exclusiva do cliente ou o componente `<ClientOnly>` para elementos que dependem de APIs do browser (window, document).
- **Nomenclatura:** 
    - **Componentes:** PascalCase (ex: `MyComponent.vue`).
    - **Variáveis/Funções:** camelCase (ex: `const myValue = ...`).
    - **Propriedades (Props):** camelCase no JavaScript, kebab-case no template (padrão Vue).
- **Gerenciamento de Estado:** Usa [Composables] para estados globais que precisam de persistência ou partilha entre páginas. Mantém estados locais dentro do componente usando `ref` ou `reactive`.
