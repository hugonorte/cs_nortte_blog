<template>
  <section class="hero_container" aria-label="Destaque">
      <NuxtImg
        provider="none"
        src="/img/montagem.avif"
        class="hero_bg"
        alt=""
        preload
        fetchpriority="high"
      />
      <h1>
          Onde eu guardo dicas, códigos, conceitos <br > e volto de vez em quando para consultar.
      </h1>
    </section>  
</template>

<style scoped lang="scss">
.hero_container {
    padding: clamp(0.8rem, 6vw, 9rem);
    display: flex;
    height: 12vh;
    background-color: #00284a; /* Cor de fundo azul escura */
    border-radius: 8px;
    margin: 1rem;
    position: relative;
    overflow: hidden;
    z-index: 1;

    .hero_bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        opacity: 0.2; /* Opacidade de 20% apenas na imagem */
        filter: grayscale(100%) sepia(100%) hue-rotate(180deg) saturate(300%); /* Efeito monocromático azul */
        z-index: -1; /* Fica atrás do conteúdo (h1) */
    }

    h1 {
        font-size: clamp(1.7rem, 3vw, 4.5rem);
        color: #d0fdd4;
        background-color: rgba(0, 0, 0, 0.5);
        padding: .6rem;
        height: fit-content;
    }
}
</style>

