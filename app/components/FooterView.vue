<template>
    <div class="footer_container">
        <div class="footer-links">
            <div class="logo">
                <img src="~/assets/img/logo_negativo.svg" alt="Abertamente Logo">
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
                        <NuxtLink to="/">Sobre</NuxtLink>
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
            <p>&copy; 2026 Abertamente. Todos os direitos reservados.</p>
        </div>
    </div>

</template>

<style scoped lang="scss">

.footer_container {
    background: #034F04;
    background: linear-gradient(0deg, rgb(0, 9, 0) 0%, rgb(2, 42, 14) 100%);
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
        color: #93c2a4;
        line-height: 1.5rem;
        font-size: 0.7rem;
    }

    a {
        color: #93c2a4;
        text-decoration: none;

        &:hover {
            color: #fff;
        }
    }

    .logo {
        margin-bottom: 1.888rem;
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
        background-color: #013605;
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
        color: #93c2a4;
    }
}

.copyright {
    text-align: center;
    color: #93c2a4;
    font-size: 0.7rem;
    width: 100%;
    background: #011303;
    padding: 1rem 0;
    max-height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>