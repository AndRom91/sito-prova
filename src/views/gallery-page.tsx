import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { Gallery } from "@/components/gallery";
import { PageHead } from "@/components/page-head";
import { getDictionary } from "@/i18n";
import { localeHref, type Locale } from "@/i18n/config";
import { createPageMetadata } from "@/lib/metadata";

export function galleryMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).gallery;

  return createPageMetadata(locale, {
    title: t.meta.title,
    description: t.meta.description,
    path: "/stays/galleria/",
    absoluteTitle: true,
    ogTitle: t.meta.ogTitle,
    ogDescription: t.meta.ogDescription,
  });
}

type GalleryPageProps = {
  locale: Locale;
};

export function GalleryPage({ locale }: GalleryPageProps) {
  const t = getDictionary(locale).gallery;

  return (
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
          <Gallery locale={locale} />
        </div>
      </section>

      <CtaBand
        title={t.cta.title}
        text={t.cta.text}
        buttonLabel={t.cta.button}
        href={localeHref(locale, "/stays/contatti/#richiesta")}
      />
    </main>
  );
}
