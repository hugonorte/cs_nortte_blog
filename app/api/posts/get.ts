import type { Post } from '~/types/models';
import type { PostContent } from '~/types/models';

interface PostData {
    message: string;
    post: Post;
}

export async function fetchPublishedPosts(apiUrl?: string) {
    const url = apiUrl || useRuntimeConfig().public.apiBaseUrl;
    
    const options = {
        method: 'GET' as 'GET',
        headers: {
            'Content-Type': 'application/json',
        } as Record<string, string>,
    };

    try {
        const response = await $fetch<Post[]>(`${url}/post/published`, options)
        return response
    }
    catch (error: any) {
        throw {
            statusCode: 500,
            statusMessage: 'API Erro ao buscar posts',
        }
    }
}

export async function fetchPosts(apiUrl?: string) {
    const url = apiUrl || useRuntimeConfig().public.apiBaseUrl;
    
    const auth = useAuth()
    const token = auth.token.value
    if (!token) {
        throw {
            statusCode: 401,
            statusMessage: 'O usuário não está autenticado',
        }
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

        const response = await $fetch<Post[]>(`${url}/post`, options)
        return response
    }
    catch (error: any) {
        throw {
            statusCode: 500,
            statusMessage: 'Erro ao buscar posts',
        }
    }
}

export async function fetchPostsSummary(apiUrl?: string) {
    const url = apiUrl || useRuntimeConfig().public.apiBaseUrl;

    const auth = useAuth()
    const token = auth.token.value
    if (!token) {
        throw {
            statusCode: 401,
            statusMessage: 'O usuário não está autenticado',
        }
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

        const response = await $fetch<Post[]>(`${url}/post-summary`, options)
        return response
    }
    catch (error: any) {
        throw {
            statusCode: 500,
            statusMessage: 'Erro ao buscar posts',
        }
    }
}

export async function fetchPostById(id: string, apiUrl?: string) {
    const url = apiUrl || useRuntimeConfig().public.apiBaseUrl;

    try {
        const options = {
            method: 'GET' as 'GET',
            credentials: 'include' as RequestCredentials,
            headers: {} as Record<string, string>,
        };

        const response = await $fetch<Post>(`${url}/post/${id}`, options)
        return response
    }
    catch (error: any) {
        throw {
            statusCode: 500,
            statusMessage: 'API Erro ao buscar o post',
        }
    }
}

export async function fetchPostContentById(id: string, apiUrl?: string) {
    const url = apiUrl || useRuntimeConfig().public.apiBaseUrl;

    try {
        const options = {
            method: 'GET' as 'GET',
            credentials: 'include' as RequestCredentials,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            } as Record<string, string>,
        };

        const response = await $fetch<PostContent>(`${url}/post/published/${id}`, options)
        if (!response) {
            throw {
                statusCode: 404,
                statusMessage: 'Post não encontrado',
            }
        }

        return Array.isArray(response) ? response[0] : response
    }
    catch (error: any) {
        throw {
            statusCode: 500,
            statusMessage: 'API Erro ao buscar o conteúdo do post',
        }
    }
}

export async function fetchPostBySlug(slug: string, apiUrl?: string): Promise<PostContent> {
    const baseUrl = apiUrl || useRuntimeConfig().public.apiBaseUrl;
    const url = `${baseUrl}/posts/${slug}`;
    
    try {
        const options = {
            method: 'GET' as const,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            } as Record<string, string>,
        };

        const response = await $fetch<PostContent>(url, options)

        const result = Array.isArray(response) ? response[0] : response
        if (!result) {
            throw {
                statusCode: 404,
                statusMessage: 'Post não encontrado',
            }
        }
        return result
    }
    catch (error: any) {
        console.error(`[API] Error fetching post by slug "${slug}" from ${url}:`, {
            statusCode: error.statusCode,
            statusMessage: error.statusMessage,
            message: error.message,
            data: error.data
        });
        
        throw {
            statusCode: error.statusCode || 500,
            statusMessage: error.message || 'API Erro ao buscar o conteúdo do post',
        }
    }
}
