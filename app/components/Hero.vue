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
    background-color: #00284a; /* Cor de fundo azul escura */
    border-radius: 8px;
    margin: 1rem;
    position: relative;
    overflow: hidden;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('~/assets/img/montagem.avif');
        background-size: cover;
        background-position: center;
        opacity: 0.2; /* Opacidade de 20% apenas na imagem */
        filter: grayscale(100%) sepia(100%) hue-rotate(180deg) saturate(300%); /* Efeito monocromático azul */
        z-index: -1; /* Fica atrás do conteúdo (h1) */
    }

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

