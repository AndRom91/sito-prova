import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

/**
 * GitHub Pages is configured to publish the repository root from `main`.
 * This script copies the static export into the root so the branch-based
 * deployment serves the CORA site instead of the README/Jekyll page.
 */
const root = process.cwd();
const outDir = join(root, "out");

if (!existsSync(join(outDir, "index.html"))) {
  console.error("Build non trovata: esegui prima `npm run build`.");
  process.exit(1);
}

const generatedEntries = new Set([
  "_next",
  "404",
  "og",
  "stays",
  "wears",
  "living",
  "projects",
  "en",
  "index.html",
  "404.html",
  "icon.svg",
  "robots.txt",
  "sitemap.xml",
  ".nojekyll",
  "index.txt",
]);

for (const entry of readdirSync(root)) {
  if (entry.startsWith("__next.")) {
    rmSync(join(root, entry), { recursive: true, force: true });
  }
}

for (const entry of readdirSync(outDir)) {
  if (entry.startsWith("__next.")) generatedEntries.add(entry);
}

for (const entry of generatedEntries) {
  const source = join(outDir, entry);
  if (!existsSync(source)) continue;

  const destination = join(root, entry);
  rmSync(destination, { recursive: true, force: true });
  cpSync(source, destination, { recursive: true });
}

console.log(
  "GitHub Pages aggiornata: build statica copiata nella root del repository.",
);
