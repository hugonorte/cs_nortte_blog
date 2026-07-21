<script setup lang="ts">
import type { PostCard } from '~/types/models';
const config = useRuntimeConfig()
const imgUrl = config.public.publicImagesFolder;


const props = defineProps<{
    post: PostCard
}>()

</script>

<template>
    <div class="post">
        <img :src="`${imgUrl}${post.imagePath}`" :alt="post.title">
        <div class="postContent">
            <div>
                <h3>{{ post.title }}</h3>
                <p>{{ post.tldr }}</p>
            </div>
            <NuxtLink v-if="post.slug || post.id" :to="`/posts/slug/${post.slug || post.id}`" class="read-more-btn">
                Leia mais
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
html.dark .postContent {
    h3 {
        color: #b3c9de ;
    }
    p {
        color: #c1d5ea ;
    }
    .read-more-btn {
            background: #6906b0;
            background: linear-gradient(70deg, rgb(52, 7, 89) 0%, rgb(108, 71, 115) 10%, rgb(69, 6, 58) 100%);
            color: white;

            &:hover {
                background: #430759;
                background: linear-gradient(70deg, rgb(87, 18, 139) 0%, rgb(130, 94, 151) 10%, rgb(119, 23, 136) 100%);
            }
    }
}
.post {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: clamp(260px, 20vw, 270px);
    border: 1px solid #d9ded9;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }

    img {
        height: auto;
        max-height: 145px;
        object-fit: cover;
    }

    .postContent {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1 1 auto;

        h3 {
            margin: 0;
            font-size: 1rem;
            color: #333;
        }

        p {
            font-size: 0.8rem;
            color: #666;
        }

        .read-more-btn {
            background: rgb(7, 73, 89);
            background: linear-gradient(70deg, rgb(7, 73, 89) 0%, rgb(71, 97, 115) 10%, rgb(6, 69, 60) 100%);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-style: italic;
            text-decoration: none;
            display: inline-block;
            text-align: center;

            &:hover {
                background: #095907;
                background: linear-gradient(70deg, rgba(9, 89, 7, 1) 0%, rgba(78, 115, 71, 1) 10%, rgba(21, 69, 6, 1) 100%);
            }
        }

        ;
    }
}
</style>