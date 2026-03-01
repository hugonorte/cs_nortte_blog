<script setup lang="ts">
definePageMeta({
    layout: 'home'
});
import type { PostContent as FetchedPost, Footnote, BibliographicReference } from '../../types/models'
import { fetchPostBySlug } from '../../api/posts/get'
import { fetchFootnotesByPostId } from '../../api/footnote/get'
import { fetchBibliographicReferencesByPostId } from '../../api/bibliographicReference/get'
import { computed } from 'vue';
import { formatDate } from '../../utils/date';

const route = useRoute();
const config = useRuntimeConfig();

const imgUrl = config.public.publicImagesFolder;

const { data, status, error } = await useAsyncData(`post-${route.params.slug}`, async () => {
    const slug = route.params.slug as string;
    const apiUrl = config.public.apiBaseUrl;
    
    const post = await fetchPostBySlug(slug, apiUrl);
    
    if (!post || !post.id) {
        return { post: null, footnotes: [], refs: [] };
    }

    const [footnotes, refs] = await Promise.all([
        fetchFootnotesByPostId(String(post.id), apiUrl),
        fetchBibliographicReferencesByPostId(String(post.id), apiUrl)
    ]);
    
    return { post, footnotes, refs };
}, {
    watch: [() => route.params.slug]
});

if (error.value) {
    console.error(`[Page] Error loading post "${route.params.slug}":`, error.value);
    throw createError({ 
        statusCode: error.value.statusCode || 500, 
        statusMessage: error.value.message || 'Erro ao carregar o post' 
    })
}

if (!data.value?.post) {
    throw createError({ statusCode: 404, fatal: true, statusMessage: 'Post não encontrado' })
}

const FetchedPost = computed(() => data.value?.post);
const Footnotes = computed(() => data.value?.footnotes || []);
const BibliographicReferences = computed(() => data.value?.refs || []);
const isLoading = computed(() => status.value === 'pending');
const socialNetworkBaseUrls: Record<string, string> = {
    Twitter: 'https://twitter.com/',
    Instagram: 'https://instagram.com/',
    LinkedIn: 'https://linkedin.com/in/',
    Facebook: 'https://facebook.com/',
    Bluesky: 'https://bsky.app/profile/',
};

const socialLink = computed(() => {
    const network = FetchedPost.value?.author_preferred_social_network;
    const username = FetchedPost.value?.author_preferred_social_network_username;
    if (!network || !username) return '#';

    const baseUrl = socialNetworkBaseUrls[network] || '';
    return `${baseUrl}${username.replace('@', '')}`;
});

if (FetchedPost.value) {
    useSeoMeta({
        title: FetchedPost.value.title,
        ogTitle: FetchedPost.value.title,
        description: FetchedPost.value.tldr,
        ogDescription: FetchedPost.value.tldr,
        ogImage: `${config.public.publicImagesFolder}/${FetchedPost.value.image_path}`,
        twitterCard: 'summary_large_image',
        articleAuthor: [FetchedPost.value.author_name || ''],
        articlePublishedTime: FetchedPost.value.created_at ? String(FetchedPost.value.created_at) : undefined,
    })

    useSchemaOrg([
        defineArticle({
            headline: FetchedPost.value.title,
            image: `${config.public.publicImagesFolder}/${FetchedPost.value.image_path}`,
            author: [
                {
                    name: FetchedPost.value.author_name,
                }
            ],
            datePublished: FetchedPost.value.created_at ? String(FetchedPost.value.created_at) : undefined,
            description: FetchedPost.value.tldr,
        })
    ])
}
</script>

<template>
    <main>
        <article v-if="FetchedPost" class="blog-post">
            <header>
                <h1>{{ FetchedPost.title }}</h1>
                <figure class="featured-image">
                    <img :src="`${imgUrl}/${FetchedPost.image_path}`" :alt="FetchedPost.title">
                    <figcaption>Imagem ilustrativa</figcaption>
                </figure>
                
                <section class="author-info">
                    <address>
                        <h3>{{ FetchedPost.author_main_title }} {{ FetchedPost.author_name }}</h3>
                        <p class="author-bio">{{ FetchedPost.author_bio }}</p>
                        <p class="social-links">
                            <strong>{{ FetchedPost.author_preferred_social_network }}:</strong> 
                            <a :href="socialLink" target="_blank" rel="noopener noreferrer">
                                @{{ FetchedPost.author_preferred_social_network_username }}
                            </a>
                        </p>
                    </address>
                    <p class="publish-date">
                        Publicado em <time :datetime="FetchedPost.created_at ? String(FetchedPost.created_at) : ''">{{ formatDate(FetchedPost.created_at) }}</time>
                    </p>
                </section>
            </header>

            <section class="main_text" v-html="FetchedPost.content"></section>

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