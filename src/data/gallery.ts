import type { StaticImageData } from "next/image";

import colazioneLetto from "@/assets/images/colazione-letto.jpg";
import coraColazioneTerrazza from "@/assets/images/cora-colazione-terrazza.jpg";
import coraLiving from "@/assets/images/cora-living.jpg";
import costiera from "@/assets/images/costiera.jpg";
import leucosiaScale from "@/assets/images/leucosia-scale.jpg";
import portaroteseCamera from "@/assets/images/portarotese-camera.jpg";
import type { Locale } from "@/i18n/config";

export type GalleryCategory =
  | "camere"
  | "esterni"
  | "colazione"
  | "appartamenti";

export type GalleryFilter = "tutte" | GalleryCategory;

export type GalleryItem = {
  id: string;
  image: StaticImageData;
  alt: string;
  caption: string;
  lightboxCaption: string;
  category: GalleryCategory;
};

type GalleryItemId =
  | "colazione-terrazza"
  | "portarotese-camera"
  | "colazione-tavola"
  | "costiera"
  | "colazione-letto"
  | "leucosia-scale";

type GalleryItemContent = Omit<GalleryItem, "image"> & { id: GalleryItemId };

const galleryImages: Record<GalleryItemId, StaticImageData> = {
  "colazione-terrazza": coraColazioneTerrazza,
  "portarotese-camera": portaroteseCamera,
  "colazione-tavola": coraLiving,
  costiera: costiera,
  "colazione-letto": colazioneLetto,
  "leucosia-scale": leucosiaScale,
};

const filterLabels: Record<Locale, { value: GalleryFilter; label: string }[]> = {
  it: [
    { value: "tutte", label: "Tutte" },
    { value: "camere", label: "Camere" },
    { value: "esterni", label: "Esterni" },
    { value: "colazione", label: "Colazione" },
    { value: "appartamenti", label: "Appartamenti" },
  ],
  en: [
    { value: "tutte", label: "All" },
    { value: "camere", label: "Rooms" },
    { value: "esterni", label: "Outdoors" },
    { value: "colazione", label: "Breakfast" },
    { value: "appartamenti", label: "Houses" },
  ],
};

const itemContent: Record<Locale, GalleryItemContent[]> = {
  it: [
    {
      id: "colazione-terrazza",
      alt: "Tavolo apparecchiato per la colazione su una terrazza vista mare",
      caption: "Colazione in terrazza",
      lightboxCaption: "La colazione in terrazza, con il mare davanti",
      category: "colazione",
    },
    {
      id: "portarotese-camera",
      alt: "Camera con letto matrimoniale e testiera blu a Portarotese, Salerno",
      caption: "Portarotese, Salerno",
      lightboxCaption: "Una delle camere di Portarotese, nel centro di Salerno",
      category: "camere",
    },
    {
      id: "colazione-tavola",
      alt: "Tavolo con cornetti, succhi e caffè vista mare",
      caption: "La tavola del mattino",
      lightboxCaption: "La tavola del mattino: cornetti, succhi e caffè",
      category: "colazione",
    },
    {
      id: "costiera",
      alt: "Vista sul mare della Costiera Amalfitana",
      caption: "La Costiera",
      lightboxCaption: "La costa della Campania vista dal mare",
      category: "esterni",
    },
    {
      id: "colazione-letto",
      alt: "Vassoio della colazione sul letto con petali di rosa",
      caption: "Colazione a letto",
      lightboxCaption: "La colazione servita in camera, con i petali di rosa",
      category: "colazione",
    },
    {
      id: "leucosia-scale",
      alt: "Scalinata esterna con piante e fiori a Santa Maria di Castellabate",
      caption: "Leucosia, Cilento",
      lightboxCaption:
        "Le scale fiorite di Leucosia, a Santa Maria di Castellabate",
      category: "esterni",
    },
  ],
  en: [
    {
      id: "colazione-terrazza",
      alt: "A table set for breakfast on a sea-view terrace",
      caption: "Breakfast on the terrace",
      lightboxCaption: "Breakfast on the terrace, with the sea in front",
      category: "colazione",
    },
    {
      id: "portarotese-camera",
      alt: "Double room with a blue headboard at Portarotese, Salerno",
      caption: "Portarotese, Salerno",
      lightboxCaption: "One of the rooms at Portarotese, in the centre of Salerno",
      category: "camere",
    },
    {
      id: "colazione-tavola",
      alt: "Table with croissants, juices and coffee overlooking the sea",
      caption: "The morning table",
      lightboxCaption: "The morning table: croissants, juices and coffee",
      category: "colazione",
    },
    {
      id: "costiera",
      alt: "Sea view of the Amalfi Coast",
      caption: "The coast",
      lightboxCaption: "The Campania coast seen from the sea",
      category: "esterni",
    },
    {
      id: "colazione-letto",
      alt: "Breakfast tray on the bed with rose petals",
      caption: "Breakfast in bed",
      lightboxCaption: "Breakfast served in the room, with rose petals",
      category: "colazione",
    },
    {
      id: "leucosia-scale",
      alt: "Outdoor staircase with plants and flowers in Santa Maria di Castellabate",
      caption: "Leucosia, Cilento",
      lightboxCaption:
        "The flowered stairs of Leucosia, in Santa Maria di Castellabate",
      category: "esterni",
    },
  ],
};

const homeGalleryIds: GalleryItemId[] = [
  "portarotese-camera",
  "colazione-terrazza",
  "costiera",
  "colazione-letto",
  "colazione-tavola",
  "leucosia-scale",
];

export function getGallery(locale: Locale) {
  const items: GalleryItem[] = itemContent[locale].map((item) => ({
    ...item,
    image: galleryImages[item.id],
  }));

  return {
    filters: filterLabels[locale],
    items,
    homeItems: homeGalleryIds
      .map((id) => items.find((item) => item.id === id))
      .filter((item): item is GalleryItem => Boolean(item)),
  };
}
