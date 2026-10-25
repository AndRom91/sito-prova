import type { Metadata } from "next";

import coraLiving from "@/assets/images/cora-living.jpg";
import { CoraSection } from "@/components/cora-section";
import { getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/metadata";

import type { Locale } from "@/i18n/config";

export type BrandPageKey = "wears" | "living" | "projects";

const brandPaths: Record<BrandPageKey, string> = {
  wears: "/wears/",
  living: "/living/",
  projects: "/projects/",
};

export function brandMetadata(
  locale: Locale,
  page: BrandPageKey,
): Metadata {
  const t = getDictionary(locale).brand[page].meta;

  return createPageMetadata(locale, {
    title: t.title,
    description: t.description,
    path: brandPaths[page],
    absoluteTitle: true,
    ogTitle: t.ogTitle,
    ogDescription: t.ogDescription,
  });
}

type BrandPageProps = {
  locale: Locale;
  page: BrandPageKey;
};

export function BrandPage({ locale, page }: BrandPageProps) {
  const brand = getDictionary(locale).brand;

  if (page === "living") {
    return (
      <CoraSection
        locale={locale}
        title={brand.living.title}
        subtitle={brand.living.subtitle}
        description={brand.living.description}
        image={coraLiving}
        alt={brand.living.alt}
      />
    );
  }

  if (page === "wears") {
    return (
      <CoraSection
        locale={locale}
        title={brand.wears.title}
        subtitle={brand.wears.subtitle}
        description={brand.wears.description}
        variant="dark"
      />
    );
  }

  return (
    <CoraSection
      locale={locale}
      title={brand.projects.title}
      subtitle={brand.projects.subtitle}
      description={brand.projects.description}
      variant="blank"
    />
  );
}
