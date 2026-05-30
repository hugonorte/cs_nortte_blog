---
name: Code Conventions & Patterns
description: Naming, import patterns, testing conventions, and code style
type: reference
source: Extracted from memory system for .agents/memory/
---

# Code Conventions & Patterns — Quick Reference

## File Organization

**Components**: Always in a folder with `index.vue`
```
components/MyComponent/
├── index.vue              # Main component (default export)
└── MyComponent.spec.ts    # Optional test file
```

**Composables**: `app/composables/use*.ts` (camelCase)
- Examples: `useAccessibility.ts`, `useAnimatedCounter.ts`

**Pages**: `app/pages/*.vue` (kebab-case filenames)
- Auto-routed by Nuxt

**Types**: `app/types.d.ts` for global type definitions

## Imports & Aliases

**Import style**:
```ts
// ✅ Preferred
import { useMyComposable } from '~/composables/useMyComposable'

// ❌ Avoid
import { useMyComposable } from '../composables/useMyComposable'
```

**Nuxt auto-imports**:
- Components: automatic from `app/components/`
- Composables: automatic from `app/composables/`
- Utils: use `~` alias for `app/`

## TypeScript

- **Strict mode**: Enabled
- **Null checks**: Required — no `any` without explicit reason
- **Component props**: Use `defineProps<{ prop: Type }>()`
- **Emits**: Use `defineEmits<{ event: [payload] }>()`

## Vue 3 Composition API

**Always use `<script setup>`**:
```vue
<template>
  <div>{{ computed }}</div>
  <button @click="handler">Click</button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const state = ref(0)
const computed = computed(() => state.value * 2)
const handler = () => state.value++
</script>
```

**No Options API** — use `<script setup>` only

## Styling

**SCSS**:
- Use `@use` (not `@import`)
- Example: `@use '~/assets/css/variables' as *`

**Tailwind**:
- Apply classes directly in templates: `class="flex items-center"`
- No scoped style conflicts (Tailwind scopes automatically)

**Naming**: CSS variables in kebab-case

## Testing Conventions

**Unit tests** (`*.spec.ts`):
```ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from './MyComponent.vue'

describe('MyComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.html()).toContain('text')
  })
})
```

**Happy-DOM**: Used as DOM library (not jsdom)

## i18n Usage

**In templates**:
```vue
<h1>{{ $t('home.title') }}</h1>
```

**In script**:
```ts
const { t } = useI18n()
const title = t('home.title')
```

**File structure** (`app/lang/{pt-BR,en-US,es-ES}.json`):
```json
{
  "home": {
    "title": "Bem-vindo",
    "description": "..."
  }
}
```

## Naming Conventions

**Components**: PascalCase (`MyComponent`, `ProposalForm`)

**Files**: 
- Components: kebab-case when imported, folder name matches component name
- Pages: kebab-case (`power-electronics-modeling.vue`)
- Composables: camelCase with `use` prefix (`useMyLogic.ts`)
- Types: PascalCase (`User.ts`)

**Variables**: camelCase

**Constants**: SCREAMING_SNAKE_CASE (if module-level)

## No-Go Patterns

- ❌ `<script>` without `setup`
- ❌ `@import` in SCSS (use `@use`)
- ❌ Relative imports crossing multiple directories
- ❌ Untyped function parameters
- ❌ Mocking external libraries without clear reason
- ❌ Comments that describe WHAT (code is clear enough)

## Git Commit Messages

**Format**: `<type>: <description>`

**Types**: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`

**Examples**:
- `fix(i18n): correct langDir path for Nuxt 4`
- `feat: add Power Electronics Modeling page`
- `refactor: improve type safety across components`

## Environment & Secrets

**Location**: `.env` (not committed)

**Usage in code**:
```ts
const config = useRuntimeConfig()
const apiUrl = config.public.siteUrl  // Public
const secret = config.suiteCrmSecret  // Private (server-only)
```
