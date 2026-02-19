<script setup lang="ts">
definePageMeta({
    layout: 'home'
});
</script>

<template>
    <main>
        <section class="posts_list_container">
            <h1>Posts</h1>
            <!-- Conteúdo da lista de posts virá aqui -->
        </section>
    </main>
</template>

<style scoped lang="scss">
.posts_list_container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    
    h1 {
        font-size: 2.5rem;
        color: #034f04;
        margin-bottom: 2rem;
    }
}
</style>