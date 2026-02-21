<script setup lang="ts">
definePageMeta({
  layout: 'home'
});

useSeoMeta({
  title: 'Abertamente - Saúde Física e Mental em um só Lugar',
  ogTitle: 'Abertamente - Saúde Física e Mental em um só Lugar',
  description: 'Encontre informações, dicas e artigos sobre saúde física e mental para uma vida mais equilibrada.',
  ogDescription: 'Encontre informações, dicas e artigos sobre saúde física e mental para uma vida mais equilibrada.',
  ogImage: '/logo_principal.svg', // Assuming a logo is available or use a generic site image
  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Abertamente',
        url: 'https://abertamente.com.br', // Replace with actual URL if known
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://abertamente.com.br/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      })
    }
  ]
})
</script>

<template>
  <Hero />
  <Posts />
</template>
