<script setup lang="ts">
definePageMeta({
    layout: 'home'
});
</script>

<template>
    <article>
        <header>
            <h1>SOBRE O NORTTE BLOG</h1>
        </header>

        <section>
            <h2>Origem</h2>
            <div class="origin-story">
                <p>O <strong>Nortte Blog</strong> nasceu da minha necessidade de catalogar conhecimentos práticos e teóricos adquiridos ao longo da minha jornada na área de <strong>Ciência da Computação</strong>.</p>
                <p>Como desenvolvedor full stack, frequentemente me deparo com desafios complexos e conceitos que merecem ser registrados. Este espaço serve como meu "bloco de notas" público, onde organizo ideias, tutoriais e reflexões sobre tecnologia e desenvolvimento de software.</p>
            </div>
        </section>

        <section>
            <h2>O Que Faço</h2>
            <p>O foco principal do blog é explorar temas ligados à computação, arquitetura de software e desenvolvimento web com profundidade e clareza.</p>
            <p>Para otimizar a criação desse material, o conteúdo publicado aqui é escrito parte por mim e parte por <strong>Inteligência Artificial</strong>. No entanto, tudo passa pela minha rigorosa curadoria técnica para garantir a precisão e a qualidade das informações antes de chegarem até você.</p>
        </section>

        <section>
            <h2>Meus Valores</h2>
            <p>Acredito no aprendizado contínuo, na transparência intelectual e na colaboração. Aqui, a busca pela precisão técnica guia as publicações. O espaço está sempre aberto para debates construtivos, críticas e melhorias que a comunidade possa sugerir.</p>
        </section>

        <div class="cta-box">
            <p>Para entender profundamente as diretrizes, compromisso com a verdade e políticas de publicação,
                convidamos você a ler o nosso Manifesto.</p>
            <a href="/manifesto" class="btn-link">Acesse nosso Manifesto</a>
        </div>
    </article>
</template>

<style scoped lang="scss">
html.dark article {
    color: #e5e7eb;

    h1 {
        color: #4a94de;
    }

    h2 {
        color: #5d7e9f;
    }

    strong {
        color: #6b849d;
        font-weight: bold;
    }

    blockquote {
        background: #163f55;

    }

    a {
        color: #4a94de;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
article {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem;
    line-height: 1.6;
    color: #333;
}

h1 {
    color: #41694b;
    margin-bottom: 10px;
    font-size: 1.2em;
}

h2 {
    color: #34495e;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 1em;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 5px;
}

p {
    margin-bottom: 15px;
    text-align: justify;
}

ul {
    margin-left: 20px;
    margin-bottom: 15px;
}

li {
    margin-bottom: 8px;
}

strong {
    color: #2c3e50;
    font-weight: bold;
}

blockquote {
    background: #f9f9f9;
    border-left: 5px solid #3498db;
    margin: 15px 0;
    padding: 10px 20px;
    font-style: italic;
}

@media (max-width: 600px) {
    article {
        padding: 10px;
    }

    h1 {
        font-size: 1.5em;
    }

    h2 {
        font-size: 1.2em;
    }
}
</style>