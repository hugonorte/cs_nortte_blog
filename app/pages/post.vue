<script setup lang="ts">


definePageMeta({
    layout: 'home'
});
const post = {
    title: 'Assertividade: o melhor caminho para estabelecer limites',
    author: 'Braz Werneck',
    image: '~/assets/img/posts/01/01.avif',
    authorBio: [
        'Mestre em Psicologia pela UFRJ',
        'Especialista em Terapia Familiar e de Casal',
        'Terapeuta Cognitivo-Comportamental'
    ],
    authorMainTitle: 'Mestre em Psicologia pela UFRJ',
    date: '2023-10-27',
    content: [
        'Os limites nas relações compõem um tema exaustivamente discutido. Ainda hoje',
        'permanecem as dúvidas sobre como respeitosamente dizer "não" a pedidos,',
        'como reivindicar direitos de forma adequada, como expressar opiniões',
        'negativas, dentre outras ações inerentes aos relacionamentos interpessoais.',
        'Algumas informações, entretanto, são aceitas no ambiente clínico da psicologia',
        'como orientações às pessoas que enfrentam dificuldades nesse campo da vida.'
    ]
};
const footNotes = [
    {
        id: 1,
        text: 'A defesa de que alguém respeite os próprios pensamentos não quer em absoluto dizer que os pensamentos defendidos estejam certos. Trata-se da legitimação do direito que uma pessoa deve ter de pensar qualquer coisa. A modulação deve existir quando esse pensamento se manifesta.'
    },
    {
        id: 2,
        text: 'A Terapia Cognitivo-Comportamental, desenvolvida e apresentada ao mundo por Aaron Beck e colaboradores, é reconhecida por sua eficácia em diversas situações de sofrimento com causas psicológicas e dá especial atenção ao treinamento em Habilidades Sociais e será tema de um texto futuro.'
    }
];
const references = [
    'TAWWAB, Nedra Glover. Set boundaries, find peace: a guide to reclaiming yourself. London: Piatkus, 2021.',
    'MACLEOD, Chris. The social skills guidebook: manage shyness, improve your conversations and make friends, without giving up who you are. [S. I.]: [s. n.], 2016.',
    'BECK, Judith S. Terapia cognitivo-comportamental: teoria e prática. 3. ed. Porto Alegre Artmed, 2022.'
];
</script>

<template>
    <main>
        <article>
            <header>
                <h1>{{ post.title }}</h1>
                <figure>
                    <img src="~/assets/img/posts/01/01.avif" :alt="post.title" >
                    <figcaption>Imagem ilustrativa</figcaption>
                </figure>
                <h3>{{ post.author }}</h3>
                <h4>{{ post.authorMainTitle }}</h4>
                <ul>
                    <li>{{ post.authorBio[0] }}</li>
                    <li>{{ post.authorBio[1] }}</li>
                    <li>{{ post.authorBio[2] }}</li>
                </ul> 

                <span>Instagram: @werneck.braz</span> 
                <p>Publicado em <time datetime="2023-10-27">{{ post.date }}</time></p>
            </header>

            <section class="main_text">
            <p>
                Os limites nas relações compõem um tema exaustivamente discutido. Ainda hoje
                permanecem as dúvidas sobre como respeitosamente dizer "não" a pedidos,
                como reivindicar direitos de forma adequada, como expressar opiniões
                negativas, dentre outras ações inerentes aos relacionamentos interpessoais.
                Algumas informações, entretanto, são aceitas no ambiente clínico da psicologia
                como orientações às pessoas que enfrentam dificuldades nesse campo da vida.
            </p>
            <p>
                A proposta deste texto é situar a demarcação de limites como um
                problema recorrente nas relações humanas; em seguida, caracterizar alguns
                aspectos da dinâmica desse processo, para então propor, com embasamento
                teórico específico, a assertividade como o melhor caminho para que se consiga
                avançar na imposição de limites, ou seja, no posicionamento honesto e
                respeitoso consigo mesmo e com os outros.
            </p>
            <p>
                O tema dos limites nas relações é uma constante no trabalho em
                psicoterapia. Aparece como um tópico angustiante que interfere na saúde das
                relações, positiva ou negativamente. O problema em se posicionar de maneira
                autêntica pode ser facilmente percebido, mas está profundamente ligado às
                características singulares de cada um de nós, o que faz das mudanças um
                processo frequentemente complexo e desgastante.
            </p>
            <p>
                A demarcação de limites - que também podemos chamar de
                posicionamento autêntico - é uma solicitação, mas também assume a forma de
                um descontentamento ou de uma reprovação. Esse processo transcorre
                algumas vezes sem arranhões no relacionamento; não obstante, é comum que
                haja confronto. Isso acontece, em geral, porque sentimos algum desconforto ao
                perceber que nosso espaço subjetivo está sendo invadido, quando enxergamos
                a necessidade de comunicar que alguém está sendo inconveniente ou mesmo
                desrespeitoso. Demarcar esses lugares, expressando descontentamento é, em
                geral, desagradável, mas é elemento essencial numa relação saudável.
            </p>
            <p>
                Os atos que solicitam mudança ou simplesmente dizem não a pedidos
                são comportamentos que comunicam necessidades ao outro, tendo influência
                na construção dos papéis em um relacionamento
                - ao esclarecem
                comportamentos inaceitáveis – e contribuem para gerar segurança geram
                segurança.
            </p>
            <p>
                Os limites, em sua dimensão comunicadora, e precisam ser contundentes,
                caso o interlocutor resista em aceitar as solicitações. Um lado particularmente
                importante de toda essa reflexão é que os limites estabelecidos fazem com que
                as pessoas se conheçam. Depois disso, podem escolher se querem permanecer
                próximas uma à outra.
                </p>
            <p>
                Para estabelecer limites de forma clara, a pessoa precisa lidar com as
                dificuldades que o assunto envolve. O desconforto citado acima aparece quando
                percebemos que alguém não irá respeitar alguns de nossos direitos e que o
                melhor a fazer – não necessariamente o mais agradável - é falar honestamente
                sobre isso. Especificamente neste ponto estamos nos referindo a uma das mais
                importantes habilidades de comunicação: a assertividade.
                </p>
            <p>
                A assertividade pode ser conceituada como um comportamento que
                manifesta de maneira autêntica e respeitosa o pensamento de quem fala.
                Envolve características que podem ser princípios de convivência, o que seria o
                caso do respeito – a si mesmo e ao outro. A assertividade é a maneira mais
                saudável de estabelecer limites, envolvendo em geral, dois elementos básicos:
                saber as próprias necessidades e transmitir tais necessidades a alguém
                (TAWWAB, 2021).
                </p>
            <p>
                Faz sentido pensar que toda a teoria composta sobre a assertividade leva
                em consideração as dificuldades que o ser humano eventualmente enfrenta ao
                se posicionar. Trata-se de uma habilidade comportamental norteada por crenças
                de valorização do respeito próprio e do respeito aos outros (CABALLO, 1996).
                Sendo assim, consideramos que essas mesmas crenças e uma atitude
                essencialmente respeitosa sejam base também para o estabelecimento de
                limites de forma saudável.
                </p>
            <p>
                É muito comum que o posicionamento subjetivo exija algum esforço
                emocional, às vezes, até provocando desgaste. Caso o respeito às próprias
                opiniões seja encarado como um princípio, a pessoa tenderá a enfrentar as
                adversidades para manifestar suas ideias e crenças<a 
                id="ref-1" 
                href="#nota-1" 
                role="doc-noteref"
                aria-describedby="nota-1"><sup>1</sup></a>. Por outro lado, quando o
                respeito às próprias ideias é um respeito fraco, permeado por medo da opinião
                do outro, medo do confronto e de dificuldades em manejar a própria insegurança,
                a tendência de uma manifestação que não seja autêntica torna-se o mais
                provável de acontecer.
                </p>
            <p>
                Pode-se dizer, a partir das ideias de Tawwab, que as manifestações
                assertivas compõem um importante elemento para a saúde das relações
                interpessoais, assim como as manifestações passivas ou agressivas contribuem
                para o seu adoecimento.
                </p>
            <p>
                O caminho para o comportamento assertivo traz algumas dificuldades,
                mas é em geral, viável. A assertividade faz parte do universo das habilidades
                sociais, um repertório treinável de comportamentos específicos regidos por
                crenças específicas. Como citado anteriormente, as crenças que norteiam o
                comportamento assertivo trazem o respeito como uma característica norteadora.
                Vale ressaltar, também, que as habilidades sociais são características do
                comportamento e não da personalidade. Isto significa dizer que podem ser
                treinadas, adquiridas, moduladas.
                </p>
            <p>
                O comportamento - incluindo o comportamento assertivo - é uma espécie
                de ponta de iceberg do funcionamento humano. A mudança eficaz de condutas
                desagradáveis pode até mesmo acontecer focada exclusivamente na conduta
                em si; contudo, o processo se mostra mais eficaz quando leva em conta o
                chamado modelo cognitivo, proposto por Aaron Beck, onde uma relação
                complexa de três dimensões tem como última parte o comportamento humano
                observável. Nesse modelo, o comportamento é encarado como a consequência
                de pensamentos e emoções envolvidos no processo (BECK, J. 2022). Para que
                se modifique uma conduta, então, o indivíduo deve se conhecer a ponto de saber
                um pouco sobre seus pensamentos, emoções e sentimentos, o que lhe dará a
                oportunidade de criar hipóteses a estreita relação entre seus processos
                cognitivos e sua conduta.
                </p>
            <p>
                Assim, uma das mais poderosas dificuldades para uma pessoa ser
                assertiva tem origem nos seus pensamentos sobre o que acontecerá caso ela
                diga não a pedidos, solicite respeito etc. O indivíduo deve defender a legitimidade
                de seus desejos e questionar os pensamentos que provocam medo ou
                desconfiança
                do
                comportamento
                assertivo
                (MCLEOD,
                2016).
                Esses
                pensamentos terão influência incontestável na escolha de não ser assertivo, ou
                seja, de não impor limites.
                </p>
            <p>
                Por precisão conceitual, deve-se dizer que assertividade e demarcação
                de limites não são rigorosamente a mesma coisa. Todo comportamento de
                imposição de limites pode e deve ser assertivo, já que não se estimula a
                imposição de limites agressiva, onde se perca a razão, nem passiva, onde a
                simples ideia de imposição não faz o menor sentido. Por outro lado, fazem parte
                do repertório de comportamentos assertivos o comportamento de fazer elogios,
                aceitar elogios, pedir favores, dentre outros, que não são uma demarcação ou
                imposição de limites. Em resumo, impor limites é assertividade, mas ser
                assertivo não é somente impor limites.
                </p>
            <p>
                A pergunta que permanece é: como esse conhecimento sobre
                comportamento, pensamentos e emoções pode ajudar na demarcação de limites
                saudáveis nas relações? A melhor notícia é que a assertividade – como uma
                habilidade essencialmente comportamental - pode ser treinada, melhorada,
                adquirida. Se a pessoa tem facilidade para ser assertiva, é razoável dizer que
                terá
                menos
                dificuldade
                para
                impor
                limites
                do
                que
                uma
                pessoa
                predominantemente passiva.
                </p>
            <p>
                No ambiente da psicoterapia, a abordagem cognitivo-comportamental<a 
                id="ref-2"
                href="#nota-2" 
                role="doc-noteref" 
                aria-describedby="nota-2"><sup>2</sup></a>
                traz, em seu arcabouço teórico-prático, o treino em Habilidades Sociais. Um
                treinamento que leva em conta as variáveis que dificultam o comportamento
                assertivo, assim como diversos outros elementos que atrapalham o sujeito nessa
                empreitada. Essa atividade terapêutica alcança ótimos resultados no que se
                refere à condição de se posicionar de maneira autêntica. Um dos objetivos
                quando se vislumbra um comportamento assertivo é que ele traga o menor
                sofrimento ou desconforto possível, pois a previsão de desconforto é uma das
                razões que leva alguém a se comportar de maneira passiva.
                </p>
            <p>
                A partir destas reflexões, defendemos aqui que estabelecer limites seja
                essencial para as relações saudáveis. Portanto, os que experimentam
                dificuldades nas relações devem investigar se a manifestação de seus desejos, a exigência de respeito
                aos seus direitos está preservada, não é raro que
                problemas conjugais, familiares e nas relações profissionais envolvam má
                comunicação e demarcação de limites ineficaz.
                </p>
            <p>
                A mais importante mensagem que se espera deixar com este texto é de
                que a mudança nessa dimensão da vida é perfeitamente possível e viável.
                Algumas características pessoais facilitam ou dificultam o processo, mas é
                comum que pessoas com dificuldade para se expressar de maneira autêntica
                passem a fazê-lo com alguma desenvoltura ao renunciar à falácia de que um
                relacionamento saudável tem que ser sempre agradável e ao passar a
                reconhecer e questionar as crenças que sustentam a passividade.
            </p>
            </section>

            <section class="footnotes_section">
                <aside class="footnotes">
                    <h2>Notas de Rodapé</h2>
                    <ol>
                        <li id="nota-1" role="doc-footnote">
                            {{ footNotes[0]?.text }}
                            <a href="#ref-1" role="doc-backlink" aria-label="Voltar para a referência 1">⤴️</a>
                        </li>
                        <li id="nota-2" role="doc-footnote">
                            {{ footNotes[1]?.text }}
                            <a href="#ref-2" role="doc-backlink" aria-label="Voltar para a referência 2">⤴️</a>
                        </li>
                    </ol>
                </aside>
            </section>

            <section class="bibliographic_references">
                <h2>Referências Bibliográficas</h2>
                <ol>
                    <li v-for="(reference, index) in references" :key="index">{{ reference }}</li>
                </ol>
            </section>
        </article>
        <NuxtLink to="/">Voltar</NuxtLink>
    </main>
</template>