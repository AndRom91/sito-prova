import type { Metadata } from "next";

import { HtmlLang } from "@/components/html-lang";
import { ogImage, siteCopy } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: siteCopy.en.title,
    template: "%s — CORA",
  },
  description: siteCopy.en.description,
  applicationName: "CORA",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CORA",
    title: siteCopy.en.title,
    description: siteCopy.en.shortDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteCopy.en.title,
    description: siteCopy.en.shortDescription,
    images: [ogImage.url],
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="locale-root" lang="en">
      <HtmlLang lang="en" />
      {children}
    </div>
  );
}
