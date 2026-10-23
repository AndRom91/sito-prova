import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  description:
    "La pagina che cerchi non esiste o è stata spostata. Torna alla home di Rooms Hub.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main id="contenuto">
      <section className="page-head" aria-labelledby="page-title">
        <div className="container">
          <p className="eyebrow">Errore 404</p>
          <h1 className="page-head__title" id="page-title">
            Questa pagina non è qui.
          </h1>
          <p className="page-head__text">
            Forse il link è cambiato o la pagina è stata spostata. Puoi tornare
            alla home oppure dare un&apos;occhiata alle nostre case.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" href="/">
              Torna alla home
              <Icon name="arrow" strokeWidth={1.8} />
            </Link>
            <Link className="btn btn--ghost" href="/strutture/">
              Scopri le strutture
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
