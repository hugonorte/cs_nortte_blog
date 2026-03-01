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
        <img :src="imgUrl + '/' + post.image_path" alt="Descrição da imagem">
        <div class="postContent">
            <h3>{{ post.title }}</h3>
            <p>{{ post.tldr }}</p>
            <NuxtLink :to="`/posts/${post.slug || post.id}`">
                <button>Leia mais</button>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
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

        h3 {
            margin: 0;
            font-size: 1rem;
            color: #333;
        }

        p {
            font-size: 0.8rem;
            color: #666;
        }

        button {
            background: #095907;
            background: linear-gradient(70deg, rgba(9, 89, 7, 1) 0%, rgba(78, 115, 71, 1) 10%, rgba(21, 69, 6, 1) 100%);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-style: italic;

            &:hover {
                background: #095907;
                background: linear-gradient(70deg, rgba(9, 89, 7, 1) 0%, rgba(78, 115, 71, 1) 10%, rgba(21, 69, 6, 1) 100%);
            }
        }

        ;
    }
}
</style>