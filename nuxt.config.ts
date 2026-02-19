// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/eslint', '@nuxt/image'],
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
        apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://admin.abertamente.net/api',
        siteName: process.env.NUXT_PUBLIC_SITE_NAME,
        publicImagesFolder: process.env.NUXT_PUBLIC_IMAGES_FOLDER || 'images',
    }
  },
})