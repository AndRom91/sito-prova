import type { StaticImageData } from "next/image";

import leucosiaScale from "@/assets/images/leucosia-scale.jpg";
import portaroteseCamera from "@/assets/images/portarotese-camera.jpg";
import type { Locale } from "@/i18n/config";

export type Structure = {
  id: string;
  index: string;
  title: string;
  eyebrow: string;
  text: string;
  amenities: string[];
  image: StaticImageData;
  alt: string;
  tag: string;
  cardMeta: string;
  cardText: string;
};

type StructureId = "portarotese" | "leucosia";

type StructureContent = Omit<Structure, "image"> & { id: StructureId };

const structureImages: Record<StructureId, StaticImageData> = {
  portarotese: portaroteseCamera,
  leucosia: leucosiaScale,
};

const structureContent: Record<Locale, StructureContent[]> = {
  it: [
    {
      id: "portarotese",
      index: "01",
      title: "Portarotese",
      eyebrow: "Salerno · 3 camere",
      text: "Nel cuore di Salerno, a due passi dal lungomare e dal centro storico. Tre camere luminose — Porta del Mare, Portarotese e Portanova — con bagno privato, aria condizionata e, in due casi, un balcone per l'aria della sera. La base giusta per girare la città a piedi.",
      amenities: [
        "Bagno privato",
        "Balcone",
        "Aria condizionata",
        "Wi-Fi gratuito",
        "TV a schermo piatto",
        "Set tè e caffè",
      ],
      alt: "Camera con letto matrimoniale e testiera blu a Portarotese, Salerno",
      tag: "Salerno centro",
      cardMeta: "Salerno · 3 camere",
      cardText:
        "Tre camere luminose tra il lungomare e il centro storico, con bagno privato e, in due camere, il balcone. La base giusta per girare Salerno a piedi.",
    },
    {
      id: "leucosia",
      index: "02",
      title: "Leucosia",
      eyebrow: "Santa Maria di Castellabate · Cilento",
      text: "Una casa vacanza nel cuore di Santa Maria di Castellabate, tra vicoli bianchi e il blu del Cilento. Gli spazi sono quelli di una casa vera: cucina, stanze da vivere e angoli all'ombra. Per chi cerca il mare, ma anche il tempo di non fare niente.",
      amenities: [
        "Casa intera",
        "Cucina",
        "Spazi esterni",
        "Wi-Fi gratuito",
        "A pochi passi dal mare",
        "Centro di Castellabate",
      ],
      alt: "Scalinata esterna con piante e fiori a Santa Maria di Castellabate",
      tag: "Cilento",
      cardMeta: "Santa Maria di Castellabate",
      cardText:
        "Una casa vacanza nel Cilento, per chi cerca mare, vicoli bianchi e il tempo che rallenta. Il sud che ti fa sentire a casa.",
    },
  ],
  en: [
    {
      id: "portarotese",
      index: "01",
      title: "Portarotese",
      eyebrow: "Salerno · 3 rooms",
      text: "In the heart of Salerno, a short walk from the seafront and the old town. Three bright rooms — Porta del Mare, Portarotese and Portanova — with private bathroom, air conditioning and, in two of them, a balcony for the evening air. The right base for exploring the city on foot.",
      amenities: [
        "Private bathroom",
        "Balcony",
        "Air conditioning",
        "Free Wi-Fi",
        "Flat-screen TV",
        "Tea and coffee set",
      ],
      alt: "Double room with a blue headboard at Portarotese, Salerno",
      tag: "Salerno centre",
      cardMeta: "Salerno · 3 rooms",
      cardText:
        "Three bright rooms between the seafront and the old town, with private bathroom and, in two rooms, a balcony. The right base for exploring Salerno on foot.",
    },
    {
      id: "leucosia",
      index: "02",
      title: "Leucosia",
      eyebrow: "Santa Maria di Castellabate · Cilento",
      text: "A holiday home in the heart of Santa Maria di Castellabate, among white alleys and the blue of the Cilento. The spaces are those of a real home: kitchen, rooms to live in and shady corners. For those looking for the sea, but also for time to do nothing.",
      amenities: [
        "Whole house",
        "Kitchen",
        "Outdoor spaces",
        "Free Wi-Fi",
        "A few steps from the sea",
        "Castellabate centre",
      ],
      alt: "Outdoor staircase with plants and flowers in Santa Maria di Castellabate",
      tag: "Cilento",
      cardMeta: "Santa Maria di Castellabate",
      cardText:
        "A holiday home in the Cilento, for those looking for the sea, white alleys and time slowing down. The south that makes you feel at home.",
    },
  ],
};

export const getStructures = (locale: Locale): Structure[] =>
  structureContent[locale].map((structure) => ({
    ...structure,
    image: structureImages[structure.id],
  }));

export const getStructureById = (locale: Locale, id: string) =>
  getStructures(locale).find((structure) => structure.id === id);
