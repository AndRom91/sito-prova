import type { Locale } from "@/i18n/config";

export type NavItem = {
  href: string;
  label: string;
};

const navigationContent: Record<Locale, NavItem[]> = {
  it: [
    { href: "/stays/", label: "CORA STAYS" },
    { href: "/wears/", label: "CORA WEARS" },
    { href: "/living/", label: "CORA LIVING" },
    { href: "/projects/", label: "CORA PROJECTS" },
  ],
  en: [
    { href: "/stays/", label: "CORA STAYS" },
    { href: "/wears/", label: "CORA WEARS" },
    { href: "/living/", label: "CORA LIVING" },
    { href: "/projects/", label: "CORA PROJECTS" },
  ],
};

const staysNavigationContent: Record<Locale, NavItem[]> = {
  it: [
    { href: "/stays/", label: "Panoramica" },
    { href: "/stays/strutture/", label: "Strutture" },
    { href: "/stays/galleria/", label: "Galleria" },
    { href: "/stays/contatti/", label: "Contatti" },
  ],
  en: [
    { href: "/stays/", label: "Overview" },
    { href: "/stays/strutture/", label: "Houses" },
    { href: "/stays/galleria/", label: "Gallery" },
    { href: "/stays/contatti/", label: "Contact" },
  ],
};

export const getNavigation = (locale: Locale) => navigationContent[locale];

export const getStaysNavigation = (locale: Locale) =>
  staysNavigationContent[locale];
