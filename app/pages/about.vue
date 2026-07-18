<script setup lang="ts">
definePageMeta({
    layout: 'home'
});
</script>

<template>
    <article>
        <header>
            <h1>SOBRE O ABERTAMENTE.NET</h1>
        </header>

        <section>
            <h2>Nossa Origem</h2>
            <div class="origin-story">
                <p>O <strong>abertamente.net</strong> não nasceu em uma redação convencional, mas em um ambiente de
                    inovação e tecnologia. Somos um grupo de colegas do curso de <strong>Ciência da Computação</strong>
                    que compartilha uma visão comum: usar a tecnologia para democratizar o acesso a informações que
                    realmente importam.</p>
                <p>A semente deste projeto foi plantada durante um <strong>Hackaton</strong> em nossa universidade. O
                    desafio era criar uma solução que impactasse positivamente a sociedade, e percebemos que a saúde —
                    física e mental — era um pilar onde a clareza e a liberdade de expressão precisavam de um novo
                    espaço.</p>
            </div>
        </section>

        <section>
            <h2>O Que Fazemos</h2>
            <p>Embora nossa base seja tecnológica, entendemos que o conteúdo de valor exige profundidade e autoridade
                humana. Por isso, o abertamente.net atua como uma ponte.</p>
            <p>Nós convidamos amigos, conhecidos e autoridades reconhecidas em suas respectivas áreas do conhecimento
                para colaborar com artigos autorais. O resultado é uma curadoria de textos escritos por pessoas reais,
                revisados por seus pares e focados exclusivamente no bem-estar de quem nos lê.</p>
        </section>

        <section>
            <h2>Nossos Valores</h2>
            <p>Acreditamos que a saúde plena só é alcançada quando temos liberdade para discutir temas sensíveis sem
                amarras ideológicas ou partidárias. Aqui, o código-fonte é a verdade e o objetivo final é uma vida mais
                saudável para todos.</p>
        </section>

        <div class="cta-box">
            <p>Para entender profundamente nossas diretrizes, compromissos com a verdade e políticas de publicação,
                convidamos você a ler o nosso documento oficial.</p>
            <a href="/manifesto" class="btn-link">Acesse nosso Manifesto</a>
        </div>
    </article>
</template>

<style scoped lang="scss">
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