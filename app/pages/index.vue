<script setup lang="ts">
definePageMeta({
  layout: 'home'
});

useSeoMeta({
  title: 'Nortte Blog - Artigos e Conhecimento',
  ogTitle: 'Nortte Blog - Artigos e Conhecimento',
  description: 'Explore artigos e conhecimento em nosso blog pessoal.',
  ogDescription: 'Explore artigos e conhecimento em nosso blog pessoal.',
  ogImage: '/og_image.png', // Generated optimal Open Graph image
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebSite({
    name: 'Nortte Blog'
  }),
  defineWebPage()
])
</script>

<template>
  <Hero />
  <Posts />
</template>
