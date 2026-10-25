import type { Metadata } from "next";

import coraLiving from "@/assets/images/cora-living.jpg";
import portaroteseCamera from "@/assets/images/portarotese-camera.jpg";
import { Link } from "@/components/link";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { CoraTile } from "@/components/cora-tile";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, siteConfig, siteCopy } from "@/data/site";
import { getDictionary } from "@/i18n";
import { localeHref, type Locale } from "@/i18n/config";
import { createPageMetadata } from "@/lib/metadata";

export function homeMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);

  return createPageMetadata(locale, {
    title: siteCopy[locale].title,
    description: siteCopy[locale].description,
    path: "/",
    absoluteTitle: true,
    ogTitle: t.home.meta.ogTitle,
    ogDescription: siteCopy[locale].shortDescription,
  });
}

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CORA",
    description: siteCopy[locale].description,
    url: absoluteUrl(localeHref(locale, "/")),
    email: siteConfig.email,
  };

  return (
    <>
      <a className="skip-link" href="#contenuto">
        {t.skipToContent}
      </a>
      <main className="cora-home" id="contenuto">
        <div className="cora-home__inner">
          <div className="cora-home__lang">
            <LocaleSwitcher
              locale={locale}
              label={t.languageSwitcher.label}
              optionLabels={t.languageSwitcher.options}
            />
          </div>

          <header className="cora-home__head">
            <h1 className="cora-wordmark">CORA</h1>
            <p className="cora-tagline">{t.home.tagline}</p>
          </header>

          <div className="cora-rule" aria-hidden="true" />

          <div className="cora-grid">
            <CoraTile
              title="CORA STAYS"
              subtitle="Hospitality"
              href={localeHref(locale, "/stays/")}
              image={portaroteseCamera}
              alt={t.home.tiles.staysAlt}
              delay={0}
              priority
            />
            <CoraTile
              title="CORA WEARS"
              subtitle="Fashion"
              href={localeHref(locale, "/wears/")}
              variant="dark"
              delay={80}
            />
            <CoraTile
              title="CORA LIVING"
              subtitle="Lifestyle"
              href={localeHref(locale, "/living/")}
              image={coraLiving}
              alt={t.home.tiles.livingAlt}
              delay={160}
            />
            <CoraTile
              title="CORA PROJECTS"
              subtitle="New ventures"
              href={localeHref(locale, "/projects/")}
              variant="blank"
              delay={240}
            />
          </div>

          <footer className="cora-home__footer">
            <span>&copy; {year} CORA</span>
            <Link href={localeHref(locale, "/stays/contatti/")}>
              {t.home.contact}
            </Link>
          </footer>
        </div>
      </main>
      <JsonLd data={jsonLd} />
    </>
  );
}
