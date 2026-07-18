<script setup lang="ts">
definePageMeta({
    layout: 'home'
});
</script>

<template>
    <article>
        <header>
            <h1>MANIFESTO ABERTAMENTE.NET</h1>
            <p><em>Clareza, saúde e liberdade de expressão.</em></p>
        </header>

        <section>
            <p>O <strong>abertamente.net</strong> nasce com o propósito fundamental de ser um espaço de troca,
                informação e reflexão. Nosso objetivo é divulgar artigos autorais dedicados à saúde física e mental,
                servindo como uma bússola para aqueles que buscam uma vida mais equilibrada, consciente e plena.</p>
        </section>

        <section>
            <h2>1. Autenticidade e Colaboração</h2>
            <p>Acreditamos no valor da experiência humana. Por isso, todos os nossos textos são escritos por
                <strong>pessoas reais</strong>. Valorizamos o rigor e a melhoria contínua: nossos conteúdos podem passar
                por revisão de pares, garantindo que o conhecimento circule de forma orgânica e colaborativa.</p>
        </section>

        <section>
            <h2>2. Compromisso com a Verdade</h2>
            <p>Embora valorizemos a autonomia autoral, não abrimos mão da precisão. Qualquer informação que venha a se
                mostrar incorreta será prontamente retirada do ar. Para isso, mantemos um canal aberto para notificações
                que contenham a devida justificativa e comprovação do erro, permitindo que nossa administração aja com
                agilidade e responsabilidade.</p>
        </section>

        <section>
            <h2>3. Isenção e Foco</h2>
            <p>A saúde e o bem-estar transcendem ideologias. O conteúdo do <strong>abertamente.net</strong> é
                estritamente técnico, informativo ou reflexivo, mantendo-se <strong>isento de viés político ou
                    partidário</strong>. Nosso compromisso é com o indivíduo e sua jornada de saúde, não com agendas
                externas.</p>
        </section>

        <section>
            <h2>4. Liberdade e Responsabilidade</h2>
            <p>Defendemos a <strong>liberdade de expressão total e irrestrita</strong>, respeitando integralmente a
                legislação vigente. Entendemos que o livre debate de ideias é essencial para o amadurecimento social.
            </p>
            <p>Neste sentido, cabe ressaltar que:</p>
            <ul>
                <li>Qualquer texto publicado por um autor-colaborador é de sua <strong>inteira
                        responsabilidade</strong>.</li>
                <li>Qualquer opinião emitida nos artigos reflete exclusivamente o pensamento de seu autor.</li>
            </ul>
        </section>

        <hr>

        <div class="warning-box">
            <strong>Aviso de Sensibilidade:</strong><br>
            Os conteúdos deste site são produzidos com o intuito de informar e agregar valor, jamais de ferir ou causar
            dano a outrem. Contudo, temas relacionados à saúde física e mental podem ser sensíveis para algumas pessoas.
            Sugerimos que indivíduos que se sintam vulneráveis ou sensíveis a estes temas evitem o consumo do conteúdo
            deste portal.
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