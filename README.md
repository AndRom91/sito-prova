# Borgo & Ulivi — sito vetrina per un hub di B&B

Sito statico (HTML + CSS + JavaScript, zero dipendenze e zero build) pensato per essere pubblicato
gratuitamente con **GitHub Pages**. È la vetrina di un hub di bed & breakfast: presentazione delle
strutture, galleria fotografica con filtri e lightbox, contatti con modulo di richiesta.

> Tutti i contenuti (nome, indirizzi, prezzi, email, foto) sono **dimostrativi**: servono da base
> pronta da personalizzare.

## Struttura del progetto

```
.
├─ main/                        ← cartella pubblicata da GitHub Pages
│  ├─ index.html                Home: hero, numeri, strutture in evidenza, galleria, CTA
│  ├─ strutture.html            Dettaglio delle 4 strutture + servizi comuni
│  ├─ galleria.html             Griglia con filtri e lightbox accessibile
│  ├─ contatti.html             Recapiti, modulo richiesta, mappa, FAQ
│  ├─ 404.html                  Pagina di errore personalizzata
│  ├─ css/style.css             Design system e stili (unico foglio)
│  ├─ js/main.js                Menu, animazioni, filtri, lightbox, form
│  ├─ assets/img/               Immagini SVG illustrative + favicon
│  ├─ robots.txt                Direttive per i motori di ricerca
│  ├─ sitemap.xml               Mappa del sito (da aggiornare col tuo dominio)
│  └─ .nojekyll                 Disattiva Jekyll su GitHub Pages
└─ .github/workflows/deploy.yml Deploy automatico della cartella main
```

## Pubblicazione su GitHub Pages

1. Crea il repository su GitHub e carica il progetto (branch `main`).
2. Vai su **Settings → Pages**.
3. In **Build and deployment → Source** scegli **GitHub Actions**.
4. Fai un push su `main` (o lancia il workflow da **Actions → Deploy sito su GitHub Pages → Run workflow**).
5. Dopo circa un minuto il sito sarà su `https://<utente>.github.io/<repo>/`.

Il workflow copia solo il contenuto di `main/`, quindi puoi tenere README, workflow e file di servizio
fuori dal sito pubblicato.

### Alternativa senza Actions

GitHub Pages, in modalità *Deploy from a branch*, permette solo la cartella root o `/docs` del branch.
Se preferisci evitare il workflow puoi quindi rinominare `main/` in `docs/` e scegliere
*Deploy from a branch* → branch `main`, cartella `/docs`. In entrambi i casi `.nojekyll` è già presente.
L'approccio con Actions resta il più pulito, perché lascia fuori dal sito README e configurazioni.

## Anteprima in locale

Non serve alcun server: apri `main/index.html` nel browser. Per un comportamento identico all'online
(gli URL relativi e la mappa funzionano meglio via HTTP) puoi usare:

```bash
# con Python installato
python -m http.server 8000 --directory main
# poi apri http://localhost:8000
```

oppure l'estensione **Live Server** di VS Code.

## Cosa personalizzare (checklist)

| Cosa | Dove |
| --- | --- |
| Nome del brand, logo SVG | tutte le pagine, `<header>` e `<footer>`; `assets/img/favicon.svg` |
| Testi, prezzi, servizi | `index.html`, `strutture.html` |
| Foto | sostituisci i file in `assets/img/` mantenendo i nomi, oppure aggiorna i percorsi `src` |
| Contatti e social | `contatti.html` (email, telefono, WhatsApp, indirizzo) e footer di ogni pagina |
| Mappa | `contatti.html`: iframe OpenStreetMap (cambia `bbox` e `marker`) |
| Form | vedi sezione successiva |
| SEO | `<title>`, `<meta name="description">`, Open Graph, dati strutturati JSON-LD (in `index.html`) |
| Dominio/canonical | sostituisci `https://tuo-utente.github.io/sito-prova/` in tutte le pagine, `robots.txt`, `sitemap.xml` |

Le immagini attuali sono **illustrazioni SVG** leggere e senza licenze: vanno benissimo per la demo,
ma per un sito reale usa fotografie in formato WebP/AVIF (max ~200 KB l'una) con attributi
`width`/`height` per evitare salti di layout.

## Collegare un invio reale al modulo

Il form funziona senza backend: valida i campi e apre il client di posta con il messaggio precompilato.
Per ricevere le richieste via email senza configurare un server puoi usare un servizio gratuito.

**Formspree** — crea un form su formspree.io, poi in `contatti.html` sostituisci il tag di apertura:

```html
<form id="richiesta-form" action="https://formspree.io/f/IL_TUO_ID" method="POST" novalidate>
```

e in `js/main.js`, nel gestore `submit`, sostituisci la parte finale (dal calcolo di `lines` fino a
`window.location.href = mailto;`) con:

```js
const response = await fetch(form.action, {
  method: "POST",
  body: new FormData(form),
  headers: { Accept: "application/json" },
});

if (response.ok) {
  setStatus("ok", "Grazie! Ti risponderemo entro un giorno lavorativo.");
  form.reset();
} else {
  setStatus("error", "Qualcosa non ha funzionato. Scrivici a info@borgoulivi.it.");
}
```

In alternativa funzionano allo stesso modo **Netlify Forms** (`data-netlify="true"`, utile se in futuro
sposti il sito su Netlify) o **Getform**.

## Accessibilità e prestazioni

- HTML semantico, skip link, focus visibile, `aria-current` sulla navigazione.
- Lightbox con gestione del focus, chiusura con `Esc` e frecce direzionali.
- Contrasti verificati sui testi principali e rispetto di `prefers-reduced-motion`.
- Nessuna libreria esterna (solo Google Fonts, con fallback di sistema): pagina leggerissima.
- Immagini `loading="lazy"` sotto la piega e dimensioni dichiarate.

## Note

- Il progetto non ha build: modifichi un file, fai commit e GitHub Pages ripubblica.
- Se in futuro vuoi servizi dinamici (calendario disponibilità, pagamenti), il candidato naturale è
  Netlify/Vercel + un piccolo backend o un servizio di booking esterno da incorporare con iframe.
- Git non è installato nell'ambiente in cui è stato generato il progetto: usa GitHub Desktop, VS Code
  o installa Git per creare il commit iniziale.
