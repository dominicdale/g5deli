# G5 Deli

One-page website for G5 Deli & Coffee Shop in the Gorbals, Glasgow. Built with
Vinext, Vite, TypeScript, React and Tailwind CSS.

## Requirements

- Node.js `>=22.13.0`

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The build creates the Vinext Worker output and exports the homepage to
`dist/client/index.html`.

## Cloudflare Pages

Connect this GitHub repo to Cloudflare Pages with:

- Framework preset: `None` or `Vite`
- Build command: `npm run build`
- Build output directory: `dist/client`
- Node.js version: `22`

`wrangler.jsonc` also declares `dist/client` as the Pages output directory, so
Wrangler-based Pages deploys can use the same build.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: build and export for Cloudflare Pages
- `npm run build:worker`: build the Vinext Worker output only
- `npm run lint`: run ESLint
