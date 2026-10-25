import { Link } from "@/components/link";

import coraLiving from "@/assets/images/cora-living.jpg";
import torreSalone from "@/assets/images/torre-salone.jpg";
import { CoraTile } from "@/components/cora-tile";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
  ogTitle: "CORA — A World of Possibilities",
  ogDescription: siteConfig.shortDescription,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CORA",
  description: siteConfig.description,
  url: absoluteUrl("/"),
  email: siteConfig.email,
};

export default function CoraHomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <main className="cora-home" id="contenuto">
        <div className="cora-home__inner">
          <header className="cora-home__head">
            <h1 className="cora-wordmark">CORA</h1>
            <p className="cora-tagline">A WORLD OF POSSIBILITIES</p>
          </header>

          <div className="cora-rule" aria-hidden="true" />

          <div className="cora-grid">
            <CoraTile
              title="CORA STAYS"
              subtitle="Hospitality"
              href="/stays/"
              image={torreSalone}
              alt="Il salone con archi in pietra di Torre di Cesare, una delle case CORA STAYS"
              delay={0}
              priority
            />
            <CoraTile
              title="CORA WEARS"
              subtitle="Fashion"
              href="/wears/"
              variant="dark"
              delay={80}
            />
            <CoraTile
              title="CORA LIVING"
              subtitle="Lifestyle"
              href="/living/"
              image={coraLiving}
              alt="La tavola della colazione in terrazza, dettaglio lifestyle CORA"
              delay={160}
            />
            <CoraTile
              title="CORA PROJECTS"
              subtitle="New ventures"
              href="/projects/"
              variant="blank"
              delay={240}
            />
          </div>

          <footer className="cora-home__footer">
            <span>&copy; {year} CORA</span>
            <Link href="/stays/contatti/">Contatti</Link>
          </footer>
        </div>
      </main>
      <JsonLd data={jsonLd} />
    </>
  );
}
