<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Post } from '~/types/models';
import { fetchPublishedPosts } from '~/api/posts/get';

const Posts = ref<Post[]>([])

onMounted(async () => {
  Posts.value = await fetchPublishedPosts()
})
</script>

<template>
  <div class="postList">
    <PostCard v-for="post in Posts" :key="post.id" :post="post" />
  </div>
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