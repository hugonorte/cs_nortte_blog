import type { Post } from '~/types/models';
import type { PostContent } from '~/types/models';
const config = useRuntimeConfig()
const apiUrl = config.public.apiBaseUrl;

interface PostData {
    message: string;
    post: Post;
}

export async function fetchPublishedPosts() {
    const options = {
        method: 'GET' as 'GET',
        headers: {
            'Content-Type': 'application/json',
        } as Record<string, string>,
    };

    try {
        //api/post/published
        const response = await $fetch<Post[]>(`${apiUrl}/post/published`, options)
        return response
    }
    catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'API Erro ao buscar posts',
        })
    }
}

export async function fetchPosts() {
    const auth = useAuth()
    const token = auth.token.value
    if (!token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'O usuário não está autenticado',
        })
    }

    try {
        const options = {
            method: 'GET' as 'GET',
            credentials: 'include' as RequestCredentials,
            headers: {} as Record<string, string>,
        };

        if (token) {
            options.headers.Authorization = `Bearer ${token}`;
        }

        const response = await $fetch<Post[]>(`${apiUrl}/post`, options)

        return response
    }
    catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Erro ao buscar posts',
        })
    }
}

export async function fetchPostsSummary() {
    const auth = useAuth()
    const token = auth.token.value
    if (!token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'O usuário não está autenticado',
        })
    }

    try {
        const options = {
            method: 'GET' as 'GET',
            credentials: 'include' as RequestCredentials,
            headers: {} as Record<string, string>,
        };

        if (token) {
            options.headers.Authorization = `Bearer ${token}`;
        }

        const response = await $fetch<Post[]>(`${apiUrl}/post-summary`, options)

        return response
    }
    catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Erro ao buscar posts',
        })
    }
}

export async function fetchPostById(id: string) {
    try {
        const options = {
            method: 'GET' as 'GET',
            credentials: 'include' as RequestCredentials,
            headers: {} as Record<string, string>,
        };

        const response = await $fetch<Post>(`${apiUrl}/post/${id}`, options)

        return response
    }
    catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'API Erro ao buscar o post',
        })
    }
}

export async function fetchPostContentById(id: string) {
    try {
        const options = {
            method: 'GET' as 'GET',
            credentials: 'include' as RequestCredentials,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            } as Record<string, string>,
        };

        const response = await $fetch<PostContent>(`${apiUrl}/post/published/${id}`, options)
        if (!response) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Post não encontrado',
            })
        }

        //retornar o primeiro item do array
        return response
    }
    catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'API Erro ao buscar o conteúdo do post',
        })
    }
}


