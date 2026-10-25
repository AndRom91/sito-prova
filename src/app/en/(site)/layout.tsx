import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/i18n";

export default function EnglishSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = getDictionary("en");

  return (
    <>
      <a className="skip-link" href="#contenuto">
        {t.skipToContent}
      </a>
      <SiteHeader locale="en" />
      {children}
      <SiteFooter locale="en" />
    </>
  );
}
