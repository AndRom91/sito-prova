export const siteConfig = {
  name: "Rooms Hub",
  title:
    "Rooms Hub — Case e camere tra Salerno, Costiera Amalfitana e Cilento",
  description:
    "Rooms Hub riunisce cinque indirizzi tra Salerno, Vietri sul Mare, la Costiera Amalfitana e il Cilento: camere e appartamenti curati, prenotazione diretta e il 15% di sconto dal sito.",
  shortDescription:
    "Cinque indirizzi tra Salerno, la Costiera Amalfitana e il Cilento. Camere, appartamenti e case vacanza con un unico modo di accogliere.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://androm91.github.io/sito-prova"
  ).replace(/\/$/, ""),
  basePath: (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, ""),
  email: "info@roomshub.it",
  phone: "+39 333 333 3333",
  phoneHref: "+393333333333",
  whatsapp: "https://wa.me/393333333333",
  address: "Salerno, Campania",
  legal: {
    cf: "RMNGNN90B08H703U",
    rea: "SA 515460",
  },
} as const;

export const socials = [
  {
    label: "Instagram Rooms Hub",
    handle: "@roomshub.it",
    href: "https://www.instagram.com/roomshub.it/",
  },
  {
    label: "Instagram Portarotese",
    handle: "@roomshub_portarotese",
    href: "https://www.instagram.com/roomshub_portarotese/",
  },
  {
    label: "Instagram Leucosia",
    handle: "@roomshub_leucosia",
    href: "https://www.instagram.com/roomshub_leucosia/",
  },
] as const;

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;

export const ogImage = {
  url: absoluteUrl("/og/costiera.jpg"),
  width: 1400,
  height: 818,
  alt: "La Costiera Amalfitana vista dal mare",
};
