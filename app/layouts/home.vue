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
      <div>
        <HeaderView />
        <slot />
      </div>
      <FooterView />
    </div>
</template>

<style scoped lang="scss">
.main_layout_container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>