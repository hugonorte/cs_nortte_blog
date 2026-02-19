<script setup lang="ts">
definePageMeta({
    layout: 'home'
});
import type { PostContent, Footnote, BibliographicReference } from '../../types/models'
import { fetchPostContentById } from '../../api/posts/get'
import { fetchFootnotesByPostId } from '../../api/footnote/get'
import { fetchBibliographicReferencesByPostId } from '../../api/bibliographicReference/get'
import { onMounted, ref } from 'vue';
import { formatDate } from '../../utils/date';
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl
const { id } = useRoute().params;
const PostContent = ref<PostContent | null>(null);
const isLoading = ref<boolean>(true)
const Footnotes = ref<Footnote[]>([]);
const BibliographicReferences = ref<BibliographicReference[]>([]);

onMounted(async () => {
    try{
        isLoading.value = true
        PostContent.value = await fetchPostContentById(id as string);
        Footnotes.value = await fetchFootnotesByPostId(id as string);
        BibliographicReferences.value = await fetchBibliographicReferencesByPostId(id as string);
    } catch (error) {
        console.error(error)
    } finally {
        isLoading.value = false
    }
})

const static_post = {
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
        text: 'A defesa de que alguém respeite os próprios pensamentos não quer em absoluto dizer que os pensamentos defendidos estejam certos. Trata-se da legitimação do direito que uma pessoa deve ter de pensar qualquer coisa. A modulação deve existir when esse pensamento se manifesta.'
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
                <h1>{{ PostContent?.title }}</h1>
                <figure>
                    <img :src="`${config.public.publicImagesFolder}/${PostContent?.image_path}`" :alt="PostContent?.title" >
                    <figcaption>Imagem ilustrativa</figcaption>
                </figure>
                <h3>{{ PostContent?.author_main_title }} {{ PostContent?.author_name }}</h3>
                <ul>
                    <li>{{ PostContent?.author_bio }}</li>
                </ul> 
                <span>{{ PostContent?.author_preferred_social_network }}: @{{ PostContent?.author_preferred_social_network_username }}</span> 
                <p>Publicado em <time :datetime="PostContent?.created_at ? String(PostContent.created_at) : ''">{{ formatDate(PostContent?.created_at) }}</time></p>
            </header>

            <section class="main_text" v-html="PostContent?.content">
            </section>

            <section v-if="Footnotes.length > 0" class="footnotes_section">
                <aside class="footnotes">
                    <h2>Notas de Rodapé</h2>
                    <ol>
                        <li v-for="(footnote, index) in Footnotes" :key="index" :id="`nota-${index + 1}`" role="doc-footnote">
                            {{ footnote.description }}
                        </li>
                    </ol>
                </aside>
            </section>

            <section v-if="BibliographicReferences.length > 0" class="bibliographic_references">
                <h2>Referências Bibliográficas</h2>
                <ol>
                    <li v-for="(reference, index) in BibliographicReferences" :key="index">
                        {{ reference.description }}
                    </li>
                </ol>
            </section>
        </article>
        <NuxtLink to="/">Voltar</NuxtLink>
    </main>
</template>