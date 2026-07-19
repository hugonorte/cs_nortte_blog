<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
    <div class="footer_container">
        <div class="footer-links">
            <div class="logo">
                Nortte Blog
            </div>
            <div class="separador">
                <span>&nbsp;</span>
            </div>
            <div>
                <ul>
                    <li>
                        <NuxtLink to="/">Página Inicial</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/posts">Posts</NuxtLink>
                    </li>
                    <!-- 
                    <li>
                        <NuxtLink to="/">Categorias</NuxtLink>
                    </li> 
                    -->
                    <li>
                        <NuxtLink to="/manifesto">Manifesto</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="separador">
                <span>&nbsp;</span>
            </div>
            <div>
                <ul>
                    <li>
                        <NuxtLink to="/about">Sobre</NuxtLink>
                    </li>
                    <!--<li>
                        <NuxtLink to="/contato">Contato</NuxtLink>
                    </li>-->
                    <li>
                        <NuxtLink to="/termos-de-uso">Termos de uso</NuxtLink>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; {{ currentYear }} Nortte Blog. Todos os direitos reservados.</p>
        </div>
    </div>

</template>

<style scoped lang="scss">

.footer_container {
    background: #03384f;
    background: linear-gradient(0deg, rgb(0, 5, 9) 0%, rgb(2, 29, 42) 100%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
        color: #93b0c2;
        line-height: 1.5rem;
        font-size: 0.888rem;
    }

    a {
        color: #93b7c2;
        text-decoration: none;

        &:hover {
            color: #fff;
        }
    }

    .logo {
        margin-bottom: 1.888rem;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        font-family: "Science Gothic", "Science Gothic Fallback: Arial", sans-serif;
    }

    .separador {
        height: 300px;
        display: flex;
        align-items: center;

        @media (max-width: 584px) {
            display: none;
        }
    }

    span {
        background-color: #013236;
        width: 2px;
        min-height: 170px;
        display: block;

    }

    .footer-links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: clamp(2rem, 75vw, 35rem);
        gap: 1rem;
        padding: 2rem;

        @media (max-width: 584px) {
            flex-direction: column;
            align-items: start;
            gap: 0;
            width: 80%;
        }
    }

    h2 {
        margin: 0;
        font-size: 1.5rem;
        color: #93b0c2;
    }
}

.copyright {
    text-align: center;
    color: #93b2c2;
    font-size: 0.7rem;
    width: 100%;
    background: #011213;
    padding: 1rem 0;
    max-height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>