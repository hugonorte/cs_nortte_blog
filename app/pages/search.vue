<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Post } from '~/types/models'
import { searchPosts } from '~/api/posts/get'

const route = useRoute()
const config = useRuntimeConfig()

definePageMeta({
    layout: 'home'
})

const query = computed(() => route.query.q as string || '')
const honeypotQuery = computed(() => route.query.contact_email as string || '')

const { data: Posts, pending, error } = await useAsyncData<Post[]>('search-posts', () => {
    if (query.value.length < 3) return Promise.resolve([])
    return searchPosts(query.value, config.public.apiBaseUrl, honeypotQuery.value)
}, {
    watch: [query, honeypotQuery]
})
</script>

<template>
    <main>
        <PageTitle :title="`Resultados para: &quot;${query}&quot;`" />
        
        <div v-if="query.length < 3" class="status-msg">
            Digite pelo menos 3 caracteres para pesquisar.
        </div>

        <div v-else-if="pending" class="status-msg">
            Buscando posts...
        </div>
        
        <div v-else-if="error" class="status-msg error">
            {{ error.statusMessage || 'Ocorreu um erro ao realizar a busca.' }}
        </div>
        
        <div v-else-if="!Posts || Posts.length === 0" class="status-msg">
            Nenhum post encontrado para esta busca.
        </div>
        
        <section v-else class="postList" aria-labelledby="posts-heading">
            <h2 id="posts-heading" class="sr-only">Resultados da busca</h2>
            <PostCard v-for="post in Posts" :key="post.id" :post="post" />
        </section>
    </main>
</template>

<style scoped lang="scss">
@use "../assets/scss/_colors.scss" as *;

@media (min-width: 1450px) {
    main {
        width: 90%;
        margin: 0 auto;
    }
}

.status-msg {
    text-align: center;
    padding: 3rem;
    font-size: 1.2rem;
    color: $primary;
    
    html.dark & {
        color: $primary_lighter;
    }
    
    &.error {
        color: rgb(211, 75, 75);
    }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.postList {
  display: flex;
  flex-direction: row;
  align-items: top;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;

    

    @media (max-width: 584px) {
        justify-content: center;
    }

  @media (max-width: 584px) {
    justify-content: center;
  }
}
</style>
