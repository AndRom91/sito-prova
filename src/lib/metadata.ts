import type { Metadata } from "next";

import { absoluteUrl, ogImage, siteConfig } from "@/data/site";
import { localeHref, type Locale } from "@/i18n/config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  ogTitle?: string;
  ogDescription?: string;
};

export function createPageMetadata(
  locale: Locale,
  {
    title,
    description,
    path,
    absoluteTitle = false,
    ogTitle,
    ogDescription,
  }: PageMetadataOptions,
): Metadata {
  const socialTitle = ogTitle ?? title;
  const socialDescription = ogDescription ?? description;
  const localizedPath = localeHref(locale, path);
  const canonical = absoluteUrl(localizedPath);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: {
        it: absoluteUrl(localeHref("it", path)),
        en: absoluteUrl(localeHref("en", path)),
        "x-default": absoluteUrl(localeHref("it", path)),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "it" ? "it_IT" : "en_US",
      siteName: siteConfig.name,
      title: socialTitle,
      description: socialDescription,
      url: canonical,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [ogImage.url],
    },
  };
}
