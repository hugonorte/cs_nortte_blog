import type { BibliographicReference } from '~/types/models';
export async function fetchBibliographicReferencesByPostId(postId: string, apiUrl?: string) {
    try {
        const baseUrl = apiUrl || useRuntimeConfig().public.apiBaseUrl;
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            } as Record<string, string>,
        } as const;

        const url = `${baseUrl}/bibliographic_reference/post/${postId}`;
        const response = await $fetch<BibliographicReference[]>(url, options)

        return response
    }
    catch (error: any) {
        console.error(`[API] Error fetching refs for post ${postId}:`, error.statusCode, error.message);
        throw {
            statusCode: error.statusCode || 500,
            statusMessage: error.message || 'API Erro ao buscar as referências',
        }
    }
}


