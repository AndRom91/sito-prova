# CORA

Sito editoriale di **CORA — A World of Possibilities**: ospitalità, moda, lifestyle e nuovi progetti.

- **CORA STAYS** — l'esperienza Rooms Hub, con strutture, galleria e contatti.
- **CORA WEARS** — moda, in arrivo.
- **CORA LIVING** — oggetti e spazi, in arrivo.
- **CORA PROJECTS** — nuove imprese, in arrivo.

## Stack

- Next.js 16 (App Router, static export)
- React 19 + TypeScript
- CSS custom properties e CSS Modules di progetto
- Font Jost + Inter tramite `next/font/google`
- Validazione form con Zod

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Verifica completa

```bash
npm run check
```

Esegue lint, typecheck e build statica. L'output viene generato in `out/`.

## Deploy su GitHub Pages

Il workflow `.github/workflows/deploy.yml` pubblica automaticamente `out/` a ogni push su `main` o `master`.

Imposta in **Settings → Pages → Build and deployment** la sorgente **GitHub Actions**.

Il sito è pubblicato come project page:

- URL: `https://androm91.github.io/sito-prova/`
- `NEXT_PUBLIC_BASE_PATH=/sito-prova`
- `NEXT_PUBLIC_SITE_URL=https://androm91.github.io/sito-prova`

Se il repository o il dominio cambiano, aggiorna `NEXT_PUBLIC_BASE_PATH` e `NEXT_PUBLIC_SITE_URL` nel workflow. Se cambia solo il dominio, aggiorna anche il fallback di `siteConfig.url` in `src/data/site.ts`.

## Build manuale per GitHub Pages

```bash
NEXT_PUBLIC_BASE_PATH=/sito-prova \
NEXT_PUBLIC_SITE_URL=https://androm91.github.io/sito-prova \
npm run build
```

Carica il contenuto di `out/` sulla radice del sito. Il file `.nojekyll` viene creato automaticamente dal post-build.

## Struttura

```text
src/app/(portal)/page.tsx     Home CORA con le quattro tile
src/app/(site)/stays/         CORA STAYS (Rooms Hub)
src/app/(site)/wears/         CORA WEARS
src/app/(site)/living/        CORA LIVING
src/app/(site)/projects/      CORA PROJECTS
src/components/               Header, footer, tile, sezioni, form, galleria
src/data/                     Contenuti, navigazione e configurazione
src/app/cora.css              Livello editoriale CORA
src/app/globals.css           Design system e componenti condivisi
```
