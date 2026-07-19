<script setup lang="ts">
const colorMode = useColorMode()

function toggleTheme() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <header>
        <div class="logo">
            <NuxtLink to="/" aria-label="Ir para a página inicial">
                <span class="logo-text">Nortte Blog</span>
            </NuxtLink>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/posts">Posts</NuxtLink>
                    </li>
                    <li>
                        <ClientOnly>
                            <UButton
                                :icon="colorMode.preference === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                                color="gray"
                                variant="ghost"
                                aria-label="Theme"
                                @click="toggleTheme"
                            />
                            <template #fallback>
                                <div style="width: 32px; height: 32px;"></div>
                            </template>
                        </ClientOnly>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo-text {
            font-family: 'Science Gothic', sans-serif;
            color: white;
            font-size: 1.5rem;
            font-weight: 700;
        }
        nav {
            ul {
                list-style: none;
                display: flex;
                gap: 20px;
                li {
                    a {
                        text-decoration: none;
                        color: rgb(38, 116, 44);
                        font-weight: bold;
                        font-size: 18px;
                        &:hover {
                            color: #385238;
                        }
                    }
                }
                li {
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
}
</style>