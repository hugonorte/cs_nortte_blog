# 🧠 Agents Memory — Cached Project Context

This file serves as a **persistent memory database** for any AI agent working on the Abertamente Nuxt 4 frontend. Reference this instead of exploring the codebase to save tokens.

---

## 📋 How to Use This File

1. **Every conversation**, read this file first
2. **Search by section** for the information you need
3. **Copy exact patterns** from the examples
4. **Never explore the codebase** if the answer is here
5. **If outdated**, update the relevant section

**Token cost to read this file**: ~15K tokens (one-time per conversation)  
**Token cost to explore codebase**: 100K+ tokens  
**Savings**: 85K tokens per conversation

---

## 🏗️ SECTION 1: PROJECT STRUCTURE

### Directory Layout
```
project root/
├── app/                          # Main source code
│   ├── components/              # Vue 3 components
│   ├── pages/                   # File-based routes
│   ├── composables/             # Reusable logic
│   ├── layouts/                 # Layout templates
│   ├── assets/
│   │   ├── scss/                # Global styles (main.scss, _colors.scss)
│   │   └── img/                 # Images
│   ├── middleware/              # Route guards
│   ├── plugins/                 # Vue plugins
│   ├── types.d.ts               # Global TypeScript types
│   └── app.vue                  # Root component
│
├── server/                       # Nitro backend
│   └── api/                     # Server endpoints
│
├── public/                       # Static assets
├── nuxt.config.ts               # Nuxt configuration
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
└── CLAUDE.md                    # Quick reference
```

### Tech Stack
- **Framework**: Nuxt 4 (Vue 3) with SSG
- **Language**: TypeScript (strict mode)
- **Styling**: SCSS (@use pattern)
- **Node**: 22+ required
- **Key libs**: @nuxt/image, @nuxtjs/seo, @nuxt/fonts

---

## 🎯 SECTION 2: COMPONENT PATTERNS

### Component Structure (Required)
Every component lives in a folder with this pattern:

```
components/[ComponentName]/
├── index.vue                    # Component file
```

### Component Template (Copy This)
```vue
<template>
  <div class="component">
    <h1>{{ title }}</h1>
    <button @click="handler">{{ label }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  title: string
  label?: string
}

interface Emits {
  (e: 'click', payload: number): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const state = ref(0)
const computed = computed(() => state.value * 2)
const handler = () => emits('click', state.value)
</script>

<style scoped lang="scss">
@use '~/assets/scss/_colors' as *;

.component {
  padding: 1rem;
}
</style>
```

### Key Rules (Don't Break These)
- ✅ Use `<script setup lang="ts">` (NO Options API)
- ✅ Props: `defineProps<{ ... }>()`
- ✅ Emits: `defineEmits<{ ... }>()`
- ✅ NO `any` type without reason
- ✅ SCSS: Use `@use` only (NO `@import`)
- ✅ Imports: Use `~` alias for `app/` folder
- ✅ Naming: PascalCase for components

---

## 📄 SECTION 3: PAGE PATTERNS

### File-Based Routing
Routes are auto-generated from filenames:

```
pages/index.vue                          → /
pages/posts/[slug].vue                   → /posts/:slug
```

### Page Template (Copy This)
```vue
<template>
  <main>
    <section>
      <h1>{{ post.title }}</h1>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta } from '#app'

useSeoMeta({
  title: 'Título da Página',
  description: 'Descrição focada em SEO e leitura.'
})
</script>
```

### Key Rules
- ✅ File name in kebab-case
- ✅ Set SEO meta with `useSeoMeta()`
- ✅ Use component includes, not inline HTML

---

## 🧩 SECTION 4: COMPOSABLES

### Naming Pattern
All composables start with `use`:

```
composables/
├── usePosts.ts
└── use[YourLogic].ts
```

### Composable Template (Copy This)
```ts
import { ref, computed } from 'vue'

export const useMyLogic = () => {
  const state = ref(0)
  const doubled = computed(() => state.value * 2)
  
  const increment = () => state.value++
  
  return {
    state,
    doubled,
    increment
  }
}
```

---

## 🎨 SECTION 5: STYLING

### Global CSS
**File**: `app/assets/scss/main.scss`  
Imported in `nuxt.config.ts`:
```ts
css: ['~/assets/scss/main.scss']
```

### SCSS Pattern
```scss
@use '~/assets/scss/_colors.scss' as *;  // Only @use, no @import

.component {
  padding: 1rem;
}
```

### Key Rules
- ✅ SCSS: Use `@use` only (NO `@import`)
- ✅ Scoped styles: Use `<style scoped lang="scss">`

---

## 🔧 SECTION 6: TYPESCRIPT REQUIREMENTS

### Strict Mode (Enforced)
All code must pass TypeScript strict mode:
```ts
"strict": true,
"noUnusedLocals": true,
"noUnusedParameters": true,
"noImplicitAny": true
```

### Key Rules
- ✅ NO `any` without explicit reason
- ✅ Props always typed
- ✅ Emits always typed
- ✅ Function return types
- ✅ Interface over type (prefer interfaces)

---

## 🚀 SECTION 7: DEVELOPMENT COMMANDS

### Essential Commands
```bash
npm install                        # Setup
npm run dev                         # Dev server (localhost:3000)
npm run build                       # Build for production
npm run generate                    # SSG static generation
npm run preview                     # Test production build locally
```

---

## 🛑 SECTION 8: CONSTRAINTS (CRITICAL)

### Never Violate These
1. ✅ **TypeScript Strict** — No `any`, all code must type-check
2. ✅ **No relative imports** — Use `~` alias for `app/` folder
3. ✅ **Props always typed** — Use `defineProps<{}>()`
4. ✅ **SCSS @use only** — No `@import`, use `@use` pattern
5. ✅ **Script setup only** — No Options API

### Red Flags 🚩
- ❌ Reading Options API in old code? Ignore it, use Composition API
- ❌ Seeing `@import` in SCSS? Wrong pattern, use `@use`
- ❌ Relative imports like `../../../`? Wrong, use `~` alias
- ❌ Untyped component props? Add types with `defineProps<{}>()`

---

## 📍 SECTION 9: FILE LOCATIONS (HOT PATHS)

### Frequently Modified
These files change often, safe to modify:
- `app/pages/` — Adding new pages (e.g. index.vue, posts/[slug].vue)
- `app/components/` — Adding/updating components

### Stable Core
These rarely change, be careful:
- `nuxt.config.ts` — Config (changes affect everything)
- `package.json` — Dependencies
- `tsconfig.json` — TypeScript config

---

## 🔍 SECTION 10: COMMON GREP PATTERNS

Use these to find code efficiently WITHOUT reading entire files:

```bash
# Find components
find app/components -name "index.vue" -o -name "*.vue"

# Find pages
ls app/pages/*.vue

# Find composables
ls app/composables/

# Find component definition
grep -r "defineProps\|defineEmits" app/components/[NAME]/ | head -5

# See recent changes
git log --oneline -10

# See diff
git diff HEAD app/components/Header/index.vue
```

---

## 💡 SECTION 11: TOKEN-SAVING TIPS

### Read These Instead of Code
- **Understand project?** → Read CLAUDE.md (quick ref)
- **Need coding rules?** → Read conventions.md
- **Find a file?** → Read hot_paths.md
- **Understand decisions?** → Read tech_decisions.md
- **Stuck on pattern?** → Read conventions.md + grep 1 example

### Don't Explore
- ❌ Read entire codebase
- ❌ Search for patterns in many files
- ❌ Read full components for examples
- ❌ Analyze dependencies for understanding
- ❌ Read git history for learning (use git log instead)

### Do This Instead
- ✅ Read this memory file
- ✅ Grep for exact patterns
- ✅ Read only the file you're modifying
- ✅ Use `git log` to understand changes
- ✅ Follow patterns from conventions.md

### Token Budget
- Load this memory: ~15K tokens (once per conversation)
- Grep for examples: 1-5K tokens
- Read 1 file: 5-10K tokens
- Write code: 0 tokens (you know the pattern)
- **Total per task**: 20-30K tokens vs. 100K+ without this

---

## 🔗 SECTION 12: RELATED RESOURCES

### In This Project
- **CLAUDE.md** (root) — Quick reference
- **.agents/rules/** — How agents should work
- **.agents/skills/** — Efficient searching
- **.agents/workflows/** — Step-by-step processes
- **.agents/TOKEN_OPTIMIZATION_QUICK_START.md** — 5-min onboarding

### External Resources
- [Nuxt Docs](https://nuxt.com/)
- [Vue 3 Docs](https://vuejs.org/)

---

## ✅ VERIFICATION CHECKLIST

Before starting work, verify:

- [ ] This memory is loaded in conversation
- [ ] You've read CLAUDE.md
- [ ] You understand the constraint from SECTION 8
- [ ] You know the component pattern from SECTION 2
- [ ] You know where to find files from SECTION 9
- [ ] You'll use grep patterns from SECTION 10
- [ ] You'll follow token-saving tips from SECTION 11

If all checked: You're ready to work efficiently! 🚀

---

**Remember**: This memory exists to save tokens. Use it liberally. Never explore the codebase if the answer is here.
