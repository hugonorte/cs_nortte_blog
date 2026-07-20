<script setup lang="ts">
import { ref } from 'vue'

const colorMode = useColorMode()
const router = useRouter()
const searchQuery = ref('')
const honeypot = ref('')
const isSearchOpen = ref(false)

function toggleTheme() {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

function handleSearch() {
    if (searchQuery.value.trim().length >= 3) {
        const queryParams: any = { q: searchQuery.value.trim() }
        if (honeypot.value) {
            queryParams.contact_email = honeypot.value
        }
        router.push({ path: '/search', query: queryParams })
        searchQuery.value = ''
        honeypot.value = ''
        isSearchOpen.value = false
    }
}
</script>

<template>
    <div class="header-wrapper">
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
                            <button @click="isSearchOpen = !isSearchOpen" aria-label="Abrir busca" class="theme-toggle">
                                <Icon name="i-heroicons-magnifying-glass-20-solid" />
                            </button>
                        </li>
                        <li>
                            <ClientOnly>
                                <button @click="toggleTheme" aria-label="Theme" class="theme-toggle">
                                    <Icon :name="colorMode.preference === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" />
                                </button>
                                <template #fallback>
                                    <div style="width: 32px; height: 32px;"></div>
                                </template>
                            </ClientOnly>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        
        <Transition name="slide-fade">
            <div v-show="isSearchOpen" class="search-container">
                <form @submit.prevent="handleSearch" class="search-form-full">
                    <!-- Honeypot Field -->
                    <input type="text" name="contact_email" v-model="honeypot" tabindex="-1" autocomplete="off" class="sr-only" aria-hidden="true" />
                    <input type="text" v-model="searchQuery" placeholder="Buscar..." class="search-input-full" minlength="3" required />
                </form>
            </div>
        </Transition>
    </div>
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

                        .theme-toggle {
                            background: transparent;
                            border: none;
                            padding: 0;
                            margin: 0;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: inherit;
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }

    .header-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .search-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px 0;
        background: transparent;
        border: none;

        .search-form-full {
            width: 90%;
            max-width: 600px;
            display: flex;

            .search-input-full {
                flex: 1;
                background: rgba(150, 150, 150, 0.1);
                border: 1px solid rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                padding: 10px 15px;
                font-size: 16px;
                color: inherit;
                text-align: left;
                outline: none;

                html.dark & {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.2);
                }
            }
        }
    }

    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(-10px);
        opacity: 0;
    }
</style>