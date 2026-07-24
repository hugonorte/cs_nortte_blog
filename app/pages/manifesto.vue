<script setup lang="ts">
definePageMeta({
    layout: 'home'
});
</script>

<template>
    <article>
        <header>
            <h1>MANIFESTO do Nortte Blog</h1>
            <p><em>Meu bloco de notas sobre assuntos da área de Ciência da Computação</em></p>
        </header>

        <section>
            <p>O <strong>Nortte Blog</strong> visa ser uma área dedicada às minhas anotações sobre os diversos assuntos da área de ciência da computação. Como atuo profissionalmente como desenvolvedor full stack, provavelmente os assuntos relacionados a esse tema deverão ter uma maior quantidade e profundidade nas abordagens.</p>
        </section>

        <section>
            <h2>1. Autenticidade, IA e Colaboração</h2>
            <p>O conteúdo publicado neste blog é escrito parte por mim mesmo e parte por Inteligência Artificial, sempre com a minha rigorosa curadoria técnica. Valorizo a melhoria contínua, portanto qualquer colaboração, crítica ou elogio é muito bem-vinda. Basta entrar em contato comigo pelo GitHub: <a href="https://github.com/hugonorte" target="_blank" rel="noopener noreferrer">@hugonorte</a>.</p>
        </section>

        <section>
            <h2>4. Liberdade e Responsabilidade</h2>
            <p>A liberdade de expressão é um direito fundamental, e este blog respeita integralmente a legislação vigente. Entendemos que o livre debate de ideias é essencial para o amadurecimento social.</p>
            <p>Aqui, cabe ressaltar que:</p>
            <ul>
                <li>Todo conteúdo publicado neste blog é de minha <strong>inteira responsabilidade</strong>. No entanto, poderão existir citações de outros autores com devida atribuição. Caso você seja autor de alguma frase ou ideia aqui citada e discorde da sua veiculação, por favor, entre em contato pelo GitHub: <a href="https://github.com/hugonorte" target="_blank" rel="noopener noreferrer">@hugonorte</a>, que providenciarei a devida citação ou remoção, conforme desejar.</li>
                <li>Qualquer opinião emitida nos artigos reflete exclusivamente o meu pensamento e não devem ser interpretadas como opiniões de terceiros ou de entidades das quais faço parte.</li>
            </ul>
        </section>
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
}
article {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem;
    line-height: 1.6;
    color: #333;
}

h1 {
    color: #0a5bad;
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