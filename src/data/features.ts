import type { Locale } from "@/i18n/config";

export type FeatureIcon =
  | "location"
  | "home"
  | "clock"
  | "hub"
  | "wifi"
  | "ac"
  | "coffee"
  | "document";

export type Feature = {
  title: string;
  text: string;
  icon: FeatureIcon;
};

const homeFeatureContent: Record<Locale, Feature[]> = {
  it: [
    {
      icon: "location",
      title: "Posizione, prima di tutto",
      text: "Salerno a piedi, il Cilento per rallentare. Ogni casa è scelta per dove ti porta.",
    },
    {
      icon: "home",
      title: "Case curate",
      text: "Biancheria fresca, letti comodi, aria condizionata e Wi-Fi. Le cose che servono, senza riempire le stanze di cose inutili.",
    },
    {
      icon: "clock",
      title: "Consigli veri",
      text: "Dove mangiare, quale spiaggia scegliere, come muoversi senza traffico. Ti diciamo le cose che diremmo a un amico.",
    },
    {
      icon: "hub",
      title: "Una rete, non un gruppo",
      text: "Due indirizzi indipendenti che si passano gli ospiti: prenoti da uno e ti accogliamo in entrambi.",
    },
  ],
  en: [
    {
      icon: "location",
      title: "Location, above all",
      text: "Salerno on foot, the Cilento to slow down. Every house is chosen for where it takes you.",
    },
    {
      icon: "home",
      title: "Curated houses",
      text: "Fresh linen, comfortable beds, air conditioning and Wi-Fi. The things you need, without filling the rooms with things you don't.",
    },
    {
      icon: "clock",
      title: "Honest advice",
      text: "Where to eat, which beach to choose, how to get around without traffic. We tell you what we would tell a friend.",
    },
    {
      icon: "hub",
      title: "A network, not a group",
      text: "Two independent addresses that share guests: you book with one and we welcome you in both.",
    },
  ],
};

const commonFeatureContent: Record<Locale, Feature[]> = {
  it: [
    {
      icon: "wifi",
      title: "Wi-Fi e spazi comuni",
      text: "Connessione in tutta la casa e almeno un angolo dove leggere, lavorare o non fare niente.",
    },
    {
      icon: "ac",
      title: "Aria condizionata",
      text: "In tutte le camere, per dormire bene anche nelle notti più calde dell'estate.",
    },
    {
      icon: "coffee",
      title: "Set tè e caffè",
      text: "Un piccolo rito per iniziare la giornata, in camera o davanti alla finestra.",
    },
    {
      icon: "document",
      title: "Prenotazione diretta",
      text: "Nessun intermediario: ci scrivi, ti rispondiamo e prenotando dal sito risparmi il 15%.",
    },
  ],
  en: [
    {
      icon: "wifi",
      title: "Wi-Fi and shared spaces",
      text: "A connection throughout the house and at least one corner where you can read, work or do nothing.",
    },
    {
      icon: "ac",
      title: "Air conditioning",
      text: "In every room, so you sleep well even on the hottest summer nights.",
    },
    {
      icon: "coffee",
      title: "Tea and coffee set",
      text: "A small ritual to start the day, in your room or by the window.",
    },
    {
      icon: "document",
      title: "Direct booking",
      text: "No middlemen: write to us, we reply, and by booking on our site you save 15%.",
    },
  ],
};

export const getHomeFeatures = (locale: Locale) => homeFeatureContent[locale];

export const getCommonFeatures = (locale: Locale) => commonFeatureContent[locale];
