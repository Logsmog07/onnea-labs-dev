# Onnea Labs

Premium marketing and growth site built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.

## Local development

Install dependencies and start the app:

```bash
npm install
npm run dev
```

The development server is intentionally pinned to **http://localhost:3000** for predictable local testing.
If port `3000` is already in use, stop the other process first or run Next manually with a different port:

```bash
npx next dev -p 3001
```

## Scripts

- `npm run dev` — starts Next.js dev server on port `3000`
- `npm run build` — creates the production build
- `npm run start` — serves the production build
- `npm run lint` — runs ESLint

## Project structure

- `src/app` — App Router pages and global styles
- `src/components` — shared layout, section, and service components
- `src/data/services.ts` — service page content model and seed content
- `src/lib` — shared animation, utility, and icon helpers

## Notes

- Primary local entry point: `http://localhost:3000`
- Service detail pages live under `/services/[slug]`
- Contact page lives at `/contact`

## GitHub Pages deployment

Repository: https://github.com/Logsmog07/onnea-labs-dev

Live site: https://logsmog07.github.io/onnea-labs-dev/

Every push to `main` builds and deploys the static `out/` directory through
`.github/workflows/deploy-pages.yml`. GitHub Pages uses GitHub Actions as its
publishing source. The workflow sets `NEXT_PUBLIC_BASE_PATH` from the Pages
configuration so navigation and public assets work under the repository path.
Local development continues to use `/` without a prefix.

To verify the Pages build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/onnea-labs-dev npm run build
```

This project exports static files; `next start` does not serve this export.
Use a static web server for `out/` or the GitHub Pages deployment.
