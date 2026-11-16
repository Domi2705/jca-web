# JCA & Asociados

Website built with React 19, Vite 8 and Tailwind CSS 4.

## Local development

Use Node.js 22.12+ (or 24) and pnpm 10.34.3.

```sh
pnpm install --frozen-lockfile
pnpm dev -- --host 127.0.0.1 --port 5173
```

Open http://127.0.0.1:5173.

## Production build

```sh
pnpm build
```

Generated files are in `dist/`.

Application: `src/App.tsx`; styles: `src/index.css`; assets: `src/assets/`.
