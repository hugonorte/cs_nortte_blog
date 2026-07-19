<script setup lang="ts">
import type { Post } from '~/types/models';
import { fetchPublishedPosts } from '~/api/posts/get';

const config = useRuntimeConfig()
const { data: Posts } = await useAsyncData<Post[]>('posts-published', () => fetchPublishedPosts(config.public.apiBaseUrl), {
  default: () => []
})
</script>

<template>
  <section class="postList" aria-labelledby="posts-heading">
    <h2 id="posts-heading" class="sr-only">Últimas postagens</h2>
    <PostCard v-for="post in Posts" :key="post.id" :post="post" />
  </section>
</template>

<style scoped lang="scss">
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