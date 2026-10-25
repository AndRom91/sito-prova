export const locales = ["it", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export const htmlLang: Record<Locale, string> = {
  it: "it",
  en: "en",
};

export const normalizePath = (path: string) =>
  path.startsWith("/") ? path : `/${path}`;

/**
 * Build the URL of a logical path for a locale.
 * Italian lives at the root, English under `/en`.
 */
export function localeHref(locale: Locale, path: string): string {
  const clean = normalizePath(path);

  if (locale === defaultLocale) return clean;

  return clean === "/" ? "/en/" : `/en${clean}`;
}

/** Remove the English prefix from a pathname, if present. */
export function stripLocale(pathname: string): string {
  const clean = normalizePath(pathname);

  if (clean === "/en") return "/";
  if (clean.startsWith("/en/")) return clean.slice(3) || "/";

  return clean;
}

/** Keep the current page while switching language. */
export function switchLocalePath(pathname: string, locale: Locale): string {
  return localeHref(locale, stripLocale(pathname));
}
