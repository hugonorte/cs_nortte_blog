<script setup lang="ts">
definePageMeta({
  layout: 'home'
});
</script>
<template>
  <main>
    <div class="hero_container">
      <h1>
          Saúde Física e Mental <br >em um só Lugar
      </h1>
    </div>
    <div class="postList">
      <div class="post">
          <img src="~/assets/img/posts/01/01.avif" alt="Descrição da imagem" >
        <div class="postContent">
          <h3>Título do Post</h3>
          <p>Descrição do post</p>
          <NuxtLink to="/post">
            <button>Leia mais</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.hero_container {
    padding: 2rem;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 60vh;
    background-image: url('~/assets/img/woman.avif');
    background-size: cover;
    background-color: #f0f0f0;
    background-position: center;
    h1 {
        font-size: 3.5rem;
        color: #d0fdd4;
    }
}
.postList {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    .post {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 80%;
        border: 1px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        img {
            height: auto;
            max-height: 145px;
            object-fit: cover;
        }
        .postContent {
            padding: 1rem;
            h3 {
                margin: 0;
                font-size: 1.5rem;
                color: #333;
            }
            p {
                color: #666;
            }
            button {
                background-color: #007BFF;
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s ease;
                &:hover {
                    background-color: #0056b3;
                }
            };
        }
    }
}
</style>