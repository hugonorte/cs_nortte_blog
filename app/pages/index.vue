<script setup lang="ts">
definePageMeta({
  layout: 'home'
});

useSeoMeta({
  title: 'Abertamente - Saúde Física e Mental em um só Lugar!',
  ogTitle: 'Abertamente - Saúde Física e Mental em um só Lugar',
  description: 'Encontre informações, dicas e artigos sobre saúde física e mental para uma vida mais equilibrada.',
  ogDescription: 'Encontre informações, dicas e artigos sobre saúde física e mental para uma vida mais equilibrada.',
  ogImage: '/og_image.png', // Generated optimal Open Graph image
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebSite({
    name: 'Abertamente'
  }),
  defineWebPage()
])
</script>

<template>
  <Hero />
  <Posts />
</template>
