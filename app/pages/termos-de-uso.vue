<script setup lang="ts">
definePageMeta({
    layout: 'home'
});
</script>
<template>
    <article>
        <h1>Termos de Uso e Política de Privacidade</h1>
        <p>Atualizado em: 25 de fevereiro de 2026</p>

        <section>
            <h2>1. Introdução</h2>
            <p>
                Bem-vindo ao nosso site. Este documento estabelece as regras de utilização e explica como tratamos os
                seus dados pessoais ao navegar por nosso conteúdo. Ao utilizar este site, você concorda com os termos
                aqui descritos.
            </p>
        </section>

        <section>
            <h2>2. Condições de Uso e Gratuidade</h2>
            <p>
                O acesso e a leitura de todo o conteúdo disponível neste site são inteiramente
                <strong>gratuitos</strong>. Não cobramos assinaturas ou taxas para que o usuário consuma nossas
                informações e artigos.
            </p>
        </section>

        <section>
            <h2>3. Publicidade e Monetização</h2>
            <p>
                Para manter a gratuidade do serviço, utilizamos scripts de parceiros, como o <strong>Google
                    AdSense</strong> e outros redes de publicidade, que exibem anúncios ao longo do conteúdo.
            </p>
            <p>
                Esses parceiros podem utilizar cookies para veicular anúncios baseados em suas visitas anteriores a este
                ou a outros sites na internet. O objetivo é exibir publicidade que seja relevante para o seu perfil de
                navegação.
            </p>
        </section>

        <section>
            <h2>4. Coleta de Dados e Google Analytics</h2>
            <p>
                Utilizamos o <strong>Google Analytics</strong> para coletar dados estatísticos de navegação (como
                páginas visitadas, tempo de permanência e origem do tráfego). Esses dados são processados para
                entendermos o desempenho do site e melhorarmos a experiência do usuário.
            </p>
            <p>
                As informações coletadas são anonimizadas ou agregadas, não permitindo a identificação direta do
                indivíduo, agindo em conformidade com os princípios de finalidade e necessidade da LGPD.
            </p>
        </section>

        <section>
            <h2>5. Gestão de Cookies e Consentimento</h2>
            <p>
                Os cookies são pequenos arquivos de texto armazenados no seu navegador. Você tem o direito de aceitar ou
                recusar o uso de cookies através do nosso banner de consentimento ou das configurações do seu navegador.
            </p>
            <blockquote>
                <strong>Aviso importante:</strong> Caso você opte por não aceitar ou bloquear os cookies de navegação,
                informamos que sua experiência no site poderá ser prejudicada. Algumas funcionalidades, como a
                personalização de conteúdo e a exibição correta de anúncios e elementos interativos, podem não funcionar
                como esperado.
            </blockquote>
        </section>

        <section>
            <h2>6. Direitos do Usuário (LGPD)</h2>
            <p>
                De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você possui o direito de:
            </p>
            <ul>
                <li>Confirmar a existência de tratamento de seus dados;</li>
                <li>Acessar os dados coletados;</li>
                <li>Solicitar a correção de dados incompletos ou desatualizados;</li>
                <li>Revogar o seu consentimento a qualquer momento.</li>
            </ul>
        </section>

        <section>
            <h2>7. Alterações nestes Termos</h2>
            <p>
                Reservamos o direito de atualizar este documento periodicamente. Recomendamos a consulta regular a esta
                página para manter-se informado sobre como estamos protegendo seus dados e garantindo a transparência de
                nossas operações.
            </p>
        </section>

        <section>
            <h2>8. Contato</h2>
            <p>
                Se você tiver dúvidas sobre estes Termos ou sobre como seus dados são tratados, entre em contato conosco
                através dos canais de atendimento disponibilizados no site.
            </p>
        </section>
    </article>
</template>

<style scoped lang="scss">
article {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    line-height: 1.6;
    color: #333;
}

h1 {
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 2em;
}

h2 {
    color: #34495e;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 1.5em;
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