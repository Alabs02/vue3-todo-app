export const imageUrl = (path: string): string =>
  new URL(path, import.meta.url).href
