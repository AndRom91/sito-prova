import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { HomeGallery } from "@/components/home-gallery";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { StructureCard } from "@/components/structure-card";
import heroVietri from "@/assets/images/hero-vietri.jpg";
import logoRoomsHub from "@/assets/images/logo-rooms-hub.png";
import { homeFeatures } from "@/data/features";
import { absoluteUrl, ogImage, siteConfig, socials } from "@/data/site";
import { structures } from "@/data/structures";
import { createPageMetadata } from "@/lib/metadata";
import { revealDelay } from "@/lib/styles";

export const metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
  ogTitle: "Rooms Hub — Feel home, everywhere.",
  ogDescription: siteConfig.shortDescription,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteConfig.name,
  description:
    "Case e camere tra Salerno, la Costiera Amalfitana e il Cilento: Portarotese, Zottoli, Vietri sul Mare, Torre di Cesare e Leucosia.",
  url: absoluteUrl("/"),
  image: ogImage.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salerno",
    addressRegion: "Campania",
    addressCountry: "IT",
  },
  sameAs: socials.map((social) => social.href),
};

export default function HomePage() {
  return (
    <>
      <main id="contenuto">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__panel">
            <Image
              className="hero__logo"
              src={logoRoomsHub}
              alt="Rooms Hub"
              sizes="(max-width: 960px) 180px, 268px"
              priority
            />
            <p className="eyebrow">Salerno · Costa d&apos;Amalfi · Cilento</p>
            <h1 className="hero__title" id="hero-title">
              Feel home,
              <br />
              <em>everywhere.</em>
            </h1>
            <p className="hero__text">
              Camere, appartamenti e una casa vacanza in cinque indirizzi scelti
              uno per uno, tra il blu della Costiera Amalfitana e il ritmo lento
              del Cilento.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/strutture/">
                Scopri le strutture
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
              <Link className="btn btn--ghost" href="/contatti/">
                Scrivici
              </Link>
            </div>
            <ul className="hero__points">
              <li>−15% prenotando dal sito</li>
              <li>Risposta entro 24 ore</li>
              <li>Check-in da concordare</li>
            </ul>
          </div>

          <div className="hero__photo">
            <Image
              src={heroVietri}
              alt="La terrazza di Vietri sul Mare con vista sul mare"
              sizes="(max-width: 960px) 100vw, 50vw"
              priority
            />
            <p className="hero__badge">
              <span>Vietri sul Mare</span>Costiera Amalfitana
            </p>
          </div>
        </section>

        <section className="stats" aria-label="Rooms Hub in numeri">
          <div className="container">
            <div className="stats__grid">
              <div className="stats__item">
                <span className="stats__value">5</span>
                <span className="stats__label">Strutture</span>
              </div>
              <div className="stats__item">
                <span className="stats__value">3</span>
                <span className="stats__label">Destinazioni</span>
              </div>
              <div className="stats__item">
                <span className="stats__value">−15%</span>
                <span className="stats__label">Prenotando dal sito</span>
              </div>
              <div className="stats__item">
                <span className="stats__value">24h</span>
                <span className="stats__label">Tempo di risposta</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="strutture-title">
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">Le nostre case</p>
                <h2 className="section__title" id="strutture-title">
                  Cinque indirizzi,{" "}
                  <em>una sola idea di ospitalità</em>
                </h2>
                <p className="section__lead">
                  Dal centro di Salerno alle terrazze di Vietri, fino alle scale
                  di Castellabate: ogni casa ha la sua anima, ma lo stesso modo
                  di accogliere. Scegli quella che somiglia di più al tuo
                  viaggio.
                </p>
              </div>
              <Link className="link-arrow" href="/strutture/">
                Tutte le strutture
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
            </div>

            <div className="cards">
              {structures.map((structure, index) => (
                <StructureCard
                  key={structure.id}
                  structure={structure}
                  delay={(index % 3) * 60}
                />
              ))}

              <article
                className="card card--cta reveal"
                style={revealDelay(120)}
              >
                <div className="card__body">
                  <p className="eyebrow">Oltre le camere</p>
                  <h3 className="card__title">Un hub, cinque indirizzi</h3>
                  <p className="card__text">
                    Tour, transfer e gestione immobiliare: se stai organizzando
                    un viaggio o hai una casa da affidare, parliamone con calma.
                  </p>
                  <Link className="btn btn--light" href="/contatti/">
                    Parla con noi
                    <Icon name="arrow" strokeWidth={1.8} />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="section section--tinted"
          aria-labelledby="perche-title"
        >
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">Come lavoriamo</p>
                <h2 className="section__title" id="perche-title">
                  Piccole cose, <em>fatte bene</em>
                </h2>
              </div>
            </div>

            <div className="features">
              {homeFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  delay={index * 70}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="quote-band" aria-label="La nostra idea di ospitalità">
          <div className="container container--narrow">
            <blockquote className="reveal">
              <p>
                “Non un albergo, ma un indirizzo che riconosci. Ovunque tu decida
                di fermarti.”
              </p>
              <footer>
                Rooms Hub · Salerno · Costiera Amalfitana · Cilento
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="section" aria-labelledby="galleria-title">
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">Sguardi</p>
                <h2 className="section__title" id="galleria-title">
                  Un assaggio <em>di casa</em>
                </h2>
                <p className="section__lead">
                  Camere, terrazze, colazioni e scale al sole: le immagini
                  raccontano meglio di qualsiasi descrizione.
                </p>
              </div>
              <Link className="link-arrow" href="/galleria/">
                Vai alla galleria
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
            </div>

            <HomeGallery />
          </div>
        </section>

        <CtaBand
          title="Dicci le date, al resto pensiamo noi."
          text="Rispondiamo entro 24 ore, con disponibilità reali e un consiglio sincero su dove stare meglio."
          buttonLabel="Richiedi disponibilità"
          href="/contatti/#richiesta"
        />
      </main>
      <JsonLd data={jsonLd} />
    </>
  );
}
