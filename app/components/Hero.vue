<template>
  <section class="hero_container" aria-label="Destaque">
      <h1>
          Guardando dicas, códigos, conceitos agora <br > e consultando sempre.
      </h1>
    </section>  
</template>

<style scoped lang="scss">
.hero_container {
    padding: clamp(0.8rem, 6vw, 9rem);
    display: flex;
    height: 60vh;
    background-image: url('~/assets/img/montagem.avif');
    background-size: cover;
    background-color: transparent;
    background-position: center;
    border-radius: 8px;
    margin:1rem;
    h1 {
        font-size: clamp(1.7rem, 3vw, 4.5rem);
        color: #d0fdd4;
        background-color: rgba(0, 0, 0, 0.5);
        padding: .6rem;
        background-size: cover;
        height: fit-content;
    }
}
</style>

