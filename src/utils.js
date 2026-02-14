export const getAssetUrl = (relativePath, baseFolder = "") => {
    const fullPath = baseFolder ? `./assets/${baseFolder}/${relativePath}` : `./assets/${relativePath}`;
    return new URL(fullPath, import.meta.url).href;
};