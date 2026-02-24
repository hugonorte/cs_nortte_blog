<script setup lang="ts">
definePageMeta({
    layout: 'home'
});
import type { PostContent, Footnote, BibliographicReference } from '../../types/models'
import { fetchPostContentById } from '../../api/posts/get'
import { fetchFootnotesByPostId } from '../../api/footnote/get'
import { fetchBibliographicReferencesByPostId } from '../../api/bibliographicReference/get'
import { computed } from 'vue';
import { formatDate } from '../../utils/date';

const config = useRuntimeConfig()
const imgUrl = config.public.publicImagesFolder
const { id } = useRoute().params;

const { data, status } = await useAsyncData(`post-${id}`, async () => {
    const [post, footnotes, refs] = await Promise.all([
        fetchPostContentById(id as string),
        fetchFootnotesByPostId(id as string),
        fetchBibliographicReferencesByPostId(id as string)
    ]);
    return { post, footnotes, refs };
});

if (!data.value?.post) {
    throw createError({ statusCode: 404, statusMessage: 'Post não encontrado' })
}

const PostContent = computed(() => data.value?.post);
const Footnotes = computed(() => data.value?.footnotes || []);
const BibliographicReferences = computed(() => data.value?.refs || []);
const isLoading = computed(() => status.value === 'pending');

if (PostContent.value) {
    useSeoMeta({
        title: PostContent.value.title,
        ogTitle: PostContent.value.title,
        description: PostContent.value.tldr,
        ogDescription: PostContent.value.tldr,
        ogImage: `${config.public.publicImagesFolder}/${PostContent.value.image_path}`,
        twitterCard: 'summary_large_image',
        articleAuthor: [PostContent.value.author_name || ''],
        articlePublishedTime: PostContent.value.created_at ? String(PostContent.value.created_at) : undefined,
    })

    useSchemaOrg([
        defineArticle({
            headline: PostContent.value.title,
            image: `${config.public.publicImagesFolder}/${PostContent.value.image_path}`,
            author: [
                {
                    name: PostContent.value.author_name,
                }
            ],
            datePublished: PostContent.value.created_at ? String(PostContent.value.created_at) : undefined,
            description: PostContent.value.tldr,
        })
    ])
}

</script>

<template>
    <main>
        <article v-if="PostContent" class="blog-post">
            <header>
                <h1>{{ PostContent.title }}</h1>
                <figure class="featured-image">
                    <img :src="`${imgUrl}/${PostContent.image_path}`" :alt="PostContent.title">
                    <figcaption>Imagem ilustrativa</figcaption>
                </figure>
                
                <section class="author-info">
                    <address>
                        <h3>{{ PostContent.author_main_title }} {{ PostContent.author_name }}</h3>
                        <p class="author-bio">{{ PostContent.author_bio }}</p>
                        <p class="social-links">
                            <strong>{{ PostContent.author_preferred_social_network }}:</strong> 
                            <a :href="`https://twitter.com/${PostContent.author_preferred_social_network_username}`" target="_blank" rel="noopener noreferrer">
                                @{{ PostContent.author_preferred_social_network_username }}
                            </a>
                        </p>
                    </address>
                    <p class="publish-date">
                        Publicado em <time :datetime="PostContent.created_at ? String(PostContent.created_at) : ''">{{ formatDate(PostContent.created_at) }}</time>
                    </p>
                </section>
            </header>

            <section class="main_text" v-html="PostContent.content"></section>

            <footer class="post-footer">
                <section v-if="Footnotes.length > 0" class="footnotes_section">
                    <aside class="footnotes">
                        <h2>Notas de Rodapé</h2>
                        <ol>
                            <li v-for="(footnote, index) in Footnotes" :key="index" :id="`nota-${index + 1}`"
                                role="doc-footnote">
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
            </footer>
        </article>
        <div v-else-if="isLoading" class="loading">
            Carregando post...
        </div>
    </main>
</template>