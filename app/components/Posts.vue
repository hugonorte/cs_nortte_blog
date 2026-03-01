<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Post } from '~/types/models';
import { fetchPublishedPosts } from '~/api/posts/get';

const Posts = ref<Post[]>([])

onMounted(async () => {
  const config = useRuntimeConfig()
  Posts.value = await fetchPublishedPosts(config.public.apiBaseUrl)
})
</script>

<template>
  <section class="postList" aria-label="Últimas postagens">
    <PostCard v-for="post in Posts" :key="post.id" :post="post" />
  </section>
</template>

<style scoped lang="scss">
.postList {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 584px) {
    justify-content: center;
  }
}
</style>