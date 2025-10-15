<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: GOOGLE_FONTS_LINK,
      crossorigin: ''
    }
  ]
})
</script>

<template>
  <div class="main_layout_container">
    <HeaderView />
      <slot />
    <FooterView />
  </div>
</template>