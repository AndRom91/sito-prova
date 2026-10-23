import { CtaBand } from "@/components/cta-band";
import { Gallery } from "@/components/gallery";
import { PageHead } from "@/components/page-head";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Galleria",
  description:
    "Le camere, le terrazze, le colazioni e gli esterni delle cinque case di Rooms Hub, tra Salerno, la Costiera Amalfitana e il Cilento.",
  path: "/galleria/",
  ogTitle: "Galleria — Rooms Hub",
  ogDescription:
    "Uno sguardo alle nostre case: camere, esterni, colazioni e appartamenti.",
});

export default function GalleriaPage() {
  return (
    <main id="contenuto">
      <PageHead
        eyebrow="Sguardi"
        title="La casa, prima di arrivarci"
        text="Clicca su una foto per vederla a tutto schermo. Usa le frecce della tastiera per passare da una all'altra, Esc per chiudere."
        current="Galleria"
      />

      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>

      <CtaBand
        title="Ti è venuta voglia di partire?"
        text="Scrivici le date e la struttura che ti incuriosisce: ti diciamo subito se è libera."
        buttonLabel="Richiedi disponibilità"
        href="/contatti/#richiesta"
      />
    </main>
  );
}
