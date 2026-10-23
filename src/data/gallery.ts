import type { StaticImageData } from "next/image";

import colazioneLetto from "@/assets/images/colazione-letto.jpg";
import colazioneTavola from "@/assets/images/colazione-tavola.jpg";
import colazioneTerrazza from "@/assets/images/colazione-terrazza.jpg";
import costiera from "@/assets/images/costiera.jpg";
import heroVietri from "@/assets/images/hero-vietri.jpg";
import leucosiaScale from "@/assets/images/leucosia-scale.jpg";
import portaroteseCamera from "@/assets/images/portarotese-camera.jpg";
import torreCamera from "@/assets/images/torre-camera.jpg";
import torreSalone from "@/assets/images/torre-salone.jpg";
import vietriCamera from "@/assets/images/vietri-camera.jpg";
import zottoliCamera from "@/assets/images/zottoli-camera.jpg";
import zottoliCucina from "@/assets/images/zottoli-cucina.jpg";

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

export const galleryFilters: { value: GalleryFilter; label: string }[] = [
  { value: "tutte", label: "Tutte" },
  { value: "camere", label: "Camere" },
  { value: "esterni", label: "Esterni" },
  { value: "colazione", label: "Colazione" },
  { value: "appartamenti", label: "Appartamenti" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "hero-vietri",
    image: heroVietri,
    alt: "La terrazza di Vietri sul Mare con vista sul mare",
    caption: "La terrazza di Vietri",
    lightboxCaption: "La terrazza di Vietri sul Mare, affacciata sul mare",
    category: "esterni",
  },
  {
    id: "colazione-terrazza",
    image: colazioneTerrazza,
    alt: "Tavolo apparecchiato per la colazione su una terrazza vista mare",
    caption: "Colazione in terrazza",
    lightboxCaption: "La colazione in terrazza, con il mare davanti",
    category: "colazione",
  },
  {
    id: "vietri-camera",
    image: vietriCamera,
    alt: "Camera con letto matrimoniale e balcone vista mare a Vietri sul Mare",
    caption: "Camera vista mare",
    lightboxCaption: "La camera con balcone vista mare di Vietri sul Mare",
    category: "camere",
  },
  {
    id: "torre-salone",
    image: torreSalone,
    alt: "Salone con archi in pietra e divani di Torre di Cesare",
    caption: "Il salone di Torre di Cesare",
    lightboxCaption: "Il salone con gli archi in pietra di Torre di Cesare",
    category: "appartamenti",
  },
  {
    id: "portarotese-camera",
    image: portaroteseCamera,
    alt: "Camera con letto matrimoniale e testiera blu a Portarotese, Salerno",
    caption: "Portarotese, Salerno",
    lightboxCaption: "Una delle camere di Portarotese, nel centro di Salerno",
    category: "camere",
  },
  {
    id: "colazione-tavola",
    image: colazioneTavola,
    alt: "Tavolo con cornetti, succhi e caffè vista mare",
    caption: "La tavola del mattino",
    lightboxCaption: "La tavola del mattino: cornetti, succhi e caffè",
    category: "colazione",
  },
  {
    id: "costiera",
    image: costiera,
    alt: "Vista sul mare della Costiera Amalfitana",
    caption: "La Costiera",
    lightboxCaption: "La costa vista da Torre di Cesare",
    category: "esterni",
  },
  {
    id: "zottoli-camera",
    image: zottoliCamera,
    alt: "Camera matrimoniale con parete rossa e cuscini neri a Zottoli, Salerno",
    caption: "Zottoli, Salerno",
    lightboxCaption: "La camera matrimoniale dell'appartamento Zottoli",
    category: "camere",
  },
  {
    id: "zottoli-cucina",
    image: zottoliCucina,
    alt: "Cucina attrezzata con tavolo e sedie dell'appartamento Zottoli",
    caption: "La cucina di Zottoli",
    lightboxCaption: "La cucina attrezzata dell'appartamento Zottoli",
    category: "appartamenti",
  },
  {
    id: "colazione-letto",
    image: colazioneLetto,
    alt: "Vassoio della colazione sul letto con petali di rosa",
    caption: "Colazione a letto",
    lightboxCaption: "La colazione servita in camera, con i petali di rosa",
    category: "colazione",
  },
  {
    id: "torre-camera",
    image: torreCamera,
    alt: "Camera matrimoniale bianca con travi a vista a Torre di Cesare",
    caption: "Torre di Cesare",
    lightboxCaption: "Una camera di Torre di Cesare, con le travi a vista",
    category: "camere",
  },
  {
    id: "leucosia-scale",
    image: leucosiaScale,
    alt: "Scalinata esterna con piante e fiori a Santa Maria di Castellabate",
    caption: "Leucosia, Cilento",
    lightboxCaption:
      "Le scale fiorite di Leucosia, a Santa Maria di Castellabate",
    category: "esterni",
  },
];

export const homeGalleryIds = [
  "vietri-camera",
  "torre-camera",
  "colazione-terrazza",
  "costiera",
  "zottoli-cucina",
  "leucosia-scale",
] as const;

export const galleryItemById = (id: string) =>
  galleryItems.find((item) => item.id === id);
