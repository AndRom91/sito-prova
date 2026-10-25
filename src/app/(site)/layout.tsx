import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/i18n";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = getDictionary("it");

  return (
    <>
      <a className="skip-link" href="#contenuto">
        {t.skipToContent}
      </a>
      <SiteHeader locale="it" />
      {children}
      <SiteFooter locale="it" />
    </>
  );
}
