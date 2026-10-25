"use client";

import { Link } from "@/components/link";
import { usePathname } from "next/navigation";

import { getStaysNavigation } from "@/data/navigation";
import { getDictionary } from "@/i18n";
import { localeHref, stripLocale, type Locale } from "@/i18n/config";

const normalizePath = (path: string) => path.replace(/\/$/, "") || "/";

type StaysNavProps = {
  locale: Locale;
};

export function StaysNav({ locale }: StaysNavProps) {
  const t = getDictionary(locale);
  const staysNavigation = getStaysNavigation(locale);
  const pathname = usePathname();
  const currentPath = normalizePath(stripLocale(pathname));

  return (
    <div className="stays-bar">
      <div className="container stays-bar__inner">
        <Link className="stays-bar__label" href={localeHref(locale, "/stays/")}>
          CORA STAYS
        </Link>
        <nav aria-label={t.staysNav.label}>
          <ul className="stays-bar__list">
            {staysNavigation.map((item) => {
              const active = currentPath === normalizePath(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={localeHref(locale, item.href)}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
