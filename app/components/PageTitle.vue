<script setup lang="ts">
const props = defineProps({
    title: String,
})
</script>

<template>
    <div class="pageTitle">
        <h1>{{ props.title }}</h1>
    </div>
</template>

<style scoped lang="scss">
.pageTitle {
    text-align: left;
    padding-left: 2rem;
    width: 100%;
    height: fit-content;

    h1 {
        margin: 0;
        font-size: 1.5rem;
        color: #1c5330;
    }
}
</style>