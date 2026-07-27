/**
 * Monta a URL de uma imagem a partir da pasta pública configurada
 * (runtimeConfig.public.publicImagesFolder) e do caminho vindo da API.
 *
 * Retorna undefined quando a base ou o caminho não existem, evitando
 * URLs quebradas do tipo "imagesundefined".
 */
export function buildImageUrl(base?: string, path?: string | null): string | undefined {
    if (!base || !path) return undefined;

    return `${base.replace(/\/+$/, '')}/${String(path).replace(/^\/+/, '')}`;
}
