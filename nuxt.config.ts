// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://abertamente.net',
    name: process.env.NUXT_PUBLIC_SITE_NAME || 'Abertamente',
    description: 'Portal Abertamente - Informação e Conhecimento',
    defaultLocale: 'pt-BR', // Assuming Portuguese based on the project name
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/scripts',
  ],
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
  hooks: {
    async 'nitro:config'(nitroConfig: any) {
      if (nitroConfig.dev) { return }
      
      try {
        const response = await fetch('https://admin.abertamente.net/api/post/published')
        const data = await response.json() as any[]
        // Map the IDs into full Nuxt routes
        const routes = data.map(post => `/posts/${post.id}`)
        
        // Ensure the nitro properties exist
        nitroConfig.prerender = nitroConfig.prerender || {}
        nitroConfig.prerender.routes = nitroConfig.prerender.routes || []
        
        nitroConfig.prerender.routes.push(...routes)
      } catch (error) {
        console.error('Failed to fetch posts for prerendering:', error)
      }
    }
  },
  runtimeConfig: {
    public: {
        apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://admin.abertamente.net/api',
        siteName: process.env.NUXT_PUBLIC_SITE_NAME,
        publicImagesFolder: process.env.NUXT_PUBLIC_IMAGES_FOLDER || 'images',
        googleAnalyticsId: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    }
  },
})