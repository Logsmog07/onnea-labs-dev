// Public assets need the same prefix as routes when hosted on GitHub Pages.
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return path.startsWith('/') && !path.startsWith('//') ? `${basePath}${path}` : path;
}
