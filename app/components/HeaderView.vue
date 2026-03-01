<template>
    <header>
        <div class="logo">
            <NuxtLink to="/" aria-label="Ir para a página inicial">
                <img src="~/assets/img/logo_principal.svg" alt="Abertamente Logo">
            </NuxtLink>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/posts">Posts</NuxtLink>
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
        img {
            height: 60px;
            max-width: 190px;
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
            }
        }
    }
}
</style>