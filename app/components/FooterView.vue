<script setup lang="ts">
console.log("footer")
</script>

<template>
    <div class="footer_container">
        <h2>Footer Component</h2>
    </div>
</template>

<style scoped lang="scss">
.footer_container {
    background: #034F04;
background: linear-gradient(0deg,rgba(3, 79, 4, 1) 0%, rgba(87, 199, 133, 1) 100%);
    padding: 1rem;
    text-align: center;

    h2 {
        margin: 0;
        font-size: 1.5rem;
    }
}
</style>