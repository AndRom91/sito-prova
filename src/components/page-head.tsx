import { Link } from "@/components/link";
import type { ReactNode } from "react";

import { getDictionary } from "@/i18n";
import { localeHref, type Locale } from "@/i18n/config";

type PageHeadProps = {
  locale: Locale;
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
  current: string;
};

export function PageHead({
  locale,
  eyebrow,
  title,
  text,
  current,
}: PageHeadProps) {
  const t = getDictionary(locale);

  return (
    <section className="page-head" aria-labelledby="page-title">
      <div className="container">
        <nav className="breadcrumb" aria-label={t.pageHead.breadcrumb}>
          <Link href={localeHref(locale, "/stays/")}>CORA STAYS</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{current}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-head__title" id="page-title">
          {title}
        </h1>
        <p className="page-head__text">{text}</p>
      </div>
    </section>
  );
}
