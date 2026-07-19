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
                                color="primary" variant="ghost" aria-label="Theme" @click="toggleTheme" />
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
@use "../assets/scss/_colors.scss" as *;

html.light header {
    .logo {
        a {
            text-decoration: none;
            .logo-text {
                color: $primary;
            }
        }
    }
}
html.dark header {
    

        nav {
            a {
                &:link {
                    color: #4a94de;
                }

                &:active {
                    color: #4a94de;
                }

                &:visited {
                    color: #4a94de;
                }

                &:hover {
                    color: #868fef;
                }
            }

            .logo-text {
                font-family: 'Science Gothic', sans-serif;
                color: rgb(186, 14, 14);
                font-size: 1.5rem;
                font-weight: 700;
            }
        }
    }

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
                            color: $primary;
                            font-weight: bold;
                            font-size: 18px;

                            &:hover {
                                color: $primary_darker;
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
    }</style>