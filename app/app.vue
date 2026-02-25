<script setup>
const { consent } = useConsent()
const config = useRuntimeConfig();

// Observa o consentimento do usuário. Quando se tornar verdadeiro, injeta e inicializa o script.
watch(consent, (newConsent) => {
    if (newConsent === true && config.public.googleAnalyticsId) {
        useScriptGoogleAnalytics({
            id: config.public.googleAnalyticsId
        })
    }
}, { immediate: true }) // immediate: true garante que seja executado ao carregar se o consentimento já existir.
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
        <CookieBanner />
    </NuxtLayout>
</template>
