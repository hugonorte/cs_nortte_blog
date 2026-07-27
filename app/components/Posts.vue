<script setup lang="ts">
import { computed } from 'vue';
import type { Post } from '~/types/models';
import { fetchPublishedPosts } from '~/api/posts/get';

const config = useRuntimeConfig()
const { data: Posts, status, error } = await useAsyncData<Post[]>('posts-published', () => fetchPublishedPosts(config.public.apiBaseUrl), {
  default: () => []
})

const isLoading = computed(() => status.value === 'pending')
const isEmpty = computed(() => !Array.isArray(Posts.value) || Posts.value.length === 0)
</script>

<template>
  <div v-if="isLoading" class="status-msg">
    Carregando posts...
  </div>

  <div v-else-if="error" class="status-msg error">
    Não foi possível carregar os posts no momento.
  </div>

  <div v-else-if="isEmpty" class="status-msg">
    Nenhum post cadastrado.
  </div>

  <section v-else class="postList" aria-labelledby="posts-heading">
    <h2 id="posts-heading" class="sr-only">Últimas postagens</h2>
    <PostCard v-for="post in Posts" :key="post?.id" :post="post" />
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/_colors.scss" as *;

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
}
</style>