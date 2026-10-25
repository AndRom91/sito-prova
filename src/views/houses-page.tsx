import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { StructureDetail } from "@/components/structure-detail";
import { getCommonFeatures } from "@/data/features";
import { absoluteUrl } from "@/data/site";
import { getStructures } from "@/data/structures";
import { getDictionary } from "@/i18n";
import { localeHref, type Locale } from "@/i18n/config";
import { createPageMetadata } from "@/lib/metadata";

export function housesMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).structures;

  return createPageMetadata(locale, {
    title: t.meta.title,
    description: t.meta.description,
    path: "/stays/strutture/",
    absoluteTitle: true,
    ogTitle: t.meta.ogTitle,
    ogDescription: t.meta.ogDescription,
  });
}

type HousesPageProps = {
  locale: Locale;
};

export function HousesPage({ locale }: HousesPageProps) {
  const t = getDictionary(locale).structures;
  const structures = getStructures(locale);
  const features = getCommonFeatures(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.jsonLdName,
    itemListElement: structures.map((structure, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: structure.title,
      url: absoluteUrl(
        `${localeHref(locale, "/stays/strutture/")}#${structure.id}`,
      ),
    })),
  };

  return (
    <>
      <main id="contenuto">
        <PageHead
          locale={locale}
          eyebrow={t.pageHead.eyebrow}
          title={t.pageHead.title}
          text={t.pageHead.text}
          current={t.pageHead.current}
        />

        <section className="section">
          <div className="container">
            {structures.map((structure) => (
              <StructureDetail
                key={structure.id}
                locale={locale}
                structure={structure}
              />
            ))}
          </div>
        </section>

        <section
          className="section section--tinted"
          aria-labelledby="comuni-title"
        >
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">{t.common.eyebrow}</p>
                <h2 className="section__title" id="comuni-title">
                  {t.common.titleLead} <em>{t.common.titleEm}</em>
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
