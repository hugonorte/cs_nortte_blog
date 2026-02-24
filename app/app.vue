<script setup>
const config = useRuntimeConfig();
const googleAnalyticsId = config.public.googleAnalyticsId;
useScriptGoogleAnalytics({
  id: googleAnalyticsId
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
