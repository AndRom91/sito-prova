import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/components/link";

import portaroteseCamera from "@/assets/images/portarotese-camera.jpg";
import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { HomeGallery } from "@/components/home-gallery";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { StructureCard } from "@/components/structure-card";
import { getHomeFeatures } from "@/data/features";
import { absoluteUrl, ogImage, siteConfig, socials } from "@/data/site";
import { getStructures } from "@/data/structures";
import { getDictionary } from "@/i18n";
import { localeHref, type Locale } from "@/i18n/config";
import { createPageMetadata } from "@/lib/metadata";
import { revealDelay } from "@/lib/styles";

export function staysMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).stays;

  return createPageMetadata(locale, {
    title: t.meta.title,
    description: t.meta.description,
    path: "/stays/",
    absoluteTitle: true,
    ogTitle: t.meta.ogTitle,
    ogDescription: t.meta.ogDescription,
  });
}

type StaysPageProps = {
  locale: Locale;
};

export function StaysPage({ locale }: StaysPageProps) {
  const t = getDictionary(locale).stays;
  const structures = getStructures(locale);
  const features = getHomeFeatures(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "CORA STAYS",
    description: t.jsonLdDescription,
    url: absoluteUrl(localeHref(locale, "/stays/")),
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

  return (
    <>
      <main id="contenuto">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__panel">
            <p className="hero__wordmark">
              CORA <span>STAYS</span>
            </p>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="hero__title" id="hero-title">
              {t.hero.titleLead}
              <br />
              <em>{t.hero.titleEm}</em>
            </h1>
            <p className="hero__text">{t.hero.text}</p>
            <div className="hero__actions">
              <Link
                className="btn btn--primary"
                href={localeHref(locale, "/stays/strutture/")}
              >
                {t.hero.primary}
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
              <Link
                className="btn btn--ghost"
                href={localeHref(locale, "/stays/contatti/")}
              >
                {t.hero.secondary}
              </Link>
            </div>
            <ul className="hero__points">
              {t.hero.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="hero__photo">
            <Image
              src={portaroteseCamera}
              alt={t.hero.imageAlt}
              sizes="(max-width: 960px) 100vw, 50vw"
              priority
            />
            <p className="hero__badge">
              <span>{t.hero.badgePlace}</span>
              {t.hero.badgeArea}
            </p>
          </div>
        </section>

        <section className="stats" aria-label={t.statsLabel}>
          <div className="container">
            <div className="stats__grid">
              {t.stats.map((stat) => (
                <div className="stats__item" key={stat.label}>
                  <span className="stats__value">{stat.value}</span>
                  <span className="stats__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="strutture-title">
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">{t.houses.eyebrow}</p>
                <h2 className="section__title" id="strutture-title">
                  {t.houses.titleLead} <em>{t.houses.titleEm}</em>
                </h2>
                <p className="section__lead">{t.houses.lead}</p>
              </div>
              <Link
                className="link-arrow"
                href={localeHref(locale, "/stays/strutture/")}
              >
                {t.houses.link}
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
            </div>

            <div className="cards">
              {structures.map((structure, index) => (
                <StructureCard
                  key={structure.id}
                  locale={locale}
                  structure={structure}
                  delay={(index % 3) * 60}
                />
              ))}

              <article
                className="card card--cta reveal"
                style={revealDelay(120)}
              >
                <div className="card__body">
                  <p className="eyebrow">{t.houses.ctaEyebrow}</p>
                  <h3 className="card__title">{t.houses.ctaTitle}</h3>
                  <p className="card__text">{t.houses.ctaText}</p>
                  <Link
                    className="btn btn--light"
                    href={localeHref(locale, "/stays/contatti/")}
                  >
                    {t.houses.ctaButton}
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
                <p className="eyebrow">{t.why.eyebrow}</p>
                <h2 className="section__title" id="perche-title">
                  {t.why.titleLead} <em>{t.why.titleEm}</em>
                </h2>
              </div>
            </div>

            <div className="features">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  delay={index * 70}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="quote-band" aria-label={t.quote.label}>
          <div className="container container--narrow">
            <blockquote className="reveal">
              <p>{t.quote.text}</p>
              <footer>{t.quote.footer}</footer>
            </blockquote>
          </div>
        </section>

        <section className="section" aria-labelledby="galleria-title">
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">{t.gallery.eyebrow}</p>
                <h2 className="section__title" id="galleria-title">
                  {t.gallery.titleLead} <em>{t.gallery.titleEm}</em>
                </h2>
                <p className="section__lead">{t.gallery.lead}</p>
              </div>
              <Link
                className="link-arrow"
                href={localeHref(locale, "/stays/galleria/")}
              >
                {t.gallery.link}
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
            </div>

            <HomeGallery locale={locale} />
          </div>
        </section>

        <CtaBand
          title={t.cta.title}
          text={t.cta.text}
          buttonLabel={t.cta.button}
          href={localeHref(locale, "/stays/contatti/#richiesta")}
        />
      </main>
      <JsonLd data={jsonLd} />
    </>
  );
}
