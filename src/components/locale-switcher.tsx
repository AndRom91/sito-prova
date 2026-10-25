"use client";

import { usePathname } from "next/navigation";

import { Link } from "@/components/link";
import { locales, switchLocalePath, type Locale } from "@/i18n/config";

type LocaleSwitcherProps = {
  locale: Locale;
  label: string;
  optionLabels: Record<Locale, string>;
  onNavigate?: () => void;
};

export function LocaleSwitcher({
  locale,
  label,
  optionLabels,
  onNavigate,
}: LocaleSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav className="lang-switch" aria-label={label}>
      {locales.map((option) => {
        const active = option === locale;

        return (
          <Link
            key={option}
            className="lang-switch__item"
            href={switchLocalePath(pathname, option)}
            hrefLang={option}
            lang={option}
            title={optionLabels[option]}
            aria-label={optionLabels[option]}
            aria-current={active ? "true" : undefined}
            onClick={onNavigate}
          >
            {option.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
