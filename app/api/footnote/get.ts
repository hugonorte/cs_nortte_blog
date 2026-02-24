import type { Footnote } from '~/types/models';
export async function fetchFootnotesByPostId(postId: string) {
    const config = useRuntimeConfig()
    const apiUrl = config.public.apiBaseUrl;

    try {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            } as Record<string, string>,
        } as const;

        const response = await $fetch<Footnote[]>(`${apiUrl}/footnote/post/${postId}`, options)

        return response
    }
    catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'API Erro ao buscar as notas de rodapé',
        })
    }
}


