import type { Footnote } from '~/types/models';
export async function fetchFootnotesByPostId(postId: string, apiUrl?: string) {
    try {
        const baseUrl = apiUrl || useRuntimeConfig().public.apiBaseUrl;
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            } as Record<string, string>,
        } as const;

        const url = `${baseUrl}/footnote/post/${postId}`;
        const response = await $fetch<Footnote[]>(url, options)

        return response
    }
    catch (error: any) {
        console.error(`[API] Error fetching footnotes for post ${postId}:`, error.statusCode, error.message);
        throw {
            statusCode: error.statusCode || 500,
            statusMessage: error.message || 'API Erro ao buscar as notas de rodapé',
        }
    }
}


