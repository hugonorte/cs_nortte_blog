import type { BibliographicReference } from '~/types/models';
const config = useRuntimeConfig()
const apiUrl = config.public.apiBaseUrl;

export async function fetchBibliographicReferencesByPostId(postId: string) {

    try {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            } as Record<string, string>,
        } as const;

        const response = await $fetch<BibliographicReference[]>(`${apiUrl}/bibliographic_reference/post/${postId}`, options)

        return response
    }
    catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'API Erro ao buscar as notas de rodapé',
        })
    }
}


