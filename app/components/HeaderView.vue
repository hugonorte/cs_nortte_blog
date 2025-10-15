<script setup lang="ts">
console.log("Header View")
</script>
<template>
    <div class="header_container">
        <div class="logo">
            <img src="~/assets/img/logo_negativo.svg" alt="">
            <!-- <NuxtImg src="~/assets/img/logo_negativo.svg" /> -->
            

            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/posts">Posts</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header_container {
    width: 100%;
    
    height: 80px;
    background-color: #034f04;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
                        color: white;
                        font-weight: bold;
                        font-size: 18px;
                        &:hover {
                            color: #baffba;
                        }
                    }
                }
            }
        }
    }
}
</style>