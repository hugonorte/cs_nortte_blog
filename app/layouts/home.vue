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
  <body>
    <HeaderView />
    <main>
      <slot />
    </main>
    <FooterView />
  </body>
</template>

<style scoped lang="scss">
body {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgb(215, 233, 210);
  background: linear-gradient(180deg, rgb(215, 233, 210) 0%, rgba(254, 254, 254, 1) 5%);
  margin: 0;
  padding: 0;
}
</style>