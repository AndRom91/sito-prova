import type { StaticImageData } from "next/image";

import leucosiaScale from "@/assets/images/leucosia-scale.jpg";
import portaroteseCamera from "@/assets/images/portarotese-camera.jpg";
import torreSalone from "@/assets/images/torre-salone.jpg";
import vietriCamera from "@/assets/images/vietri-camera.jpg";
import zottoliCamera from "@/assets/images/zottoli-camera.jpg";

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

export const structures: Structure[] = [
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
    image: portaroteseCamera,
    alt: "Camera con letto matrimoniale e testiera blu a Portarotese, Salerno",
    tag: "Salerno centro",
    cardMeta: "Salerno · 3 camere",
    cardText:
      "Tre camere luminose tra il lungomare e il centro storico, con bagno privato e, in due camere, il balcone. La base giusta per girare Salerno a piedi.",
  },
  {
    id: "zottoli",
    index: "02",
    title: "Zottoli",
    eyebrow: "Salerno · appartamento · fino a 4 ospiti",
    text: "Un appartamento a pochi minuti dal centro di Salerno con cucina attrezzata, zona giorno con divano letto e camera matrimoniale. Pensato per chi viaggia in famiglia o si ferma qualche giorno in più: si cucina, si esce, si torna quando si vuole.",
    amenities: [
      "Letto matrimoniale",
      "Divano letto",
      "Cucina attrezzata",
      "Aria condizionata",
      "Wi-Fi gratuito",
      "Balcone",
    ],
    image: zottoliCamera,
    alt: "Camera matrimoniale con parete rossa e cuscini neri a Zottoli, Salerno",
    tag: "Appartamento",
    cardMeta: "Salerno · fino a 4 ospiti",
    cardText:
      "Un appartamento con cucina attrezzata, camera matrimoniale e balcone, pensato per famiglie e soggiorni lunghi a pochi minuti dal centro.",
  },
  {
    id: "vietri",
    index: "03",
    title: "Vietri sul Mare",
    eyebrow: "Vietri sul Mare · Costa d'Amalfi · 5 sistemazioni",
    text: "Camere e appartamenti affacciati sul Tirreno, dove la Costiera comincia. Cinque sistemazioni diverse — dalla matrimoniale vista mare alla king con vasca idromassaggio — con terrazze, ceramiche e limoni. Qui il mare è parte della casa, non solo del panorama.",
    amenities: [
      "Vista mare",
      "Terrazza",
      "Aria condizionata",
      "Wi-Fi gratuito",
      "Set tè e caffè",
      "Vasca idromassaggio",
    ],
    image: vietriCamera,
    alt: "Camera con letto matrimoniale e balcone vista mare a Vietri sul Mare",
    tag: "Vista mare",
    cardMeta: "Vietri sul Mare · Costa d'Amalfi",
    cardText:
      "Camere e appartamenti affacciati sul Tirreno, tra ceramiche, limoni e terrazze. Il mare è parte della casa, non solo del panorama.",
  },
  {
    id: "torre-di-cesare",
    index: "04",
    title: "Torre di Cesare",
    eyebrow: "Costiera Amalfitana · fino a 10 ospiti",
    text: "Una dimora storica sulla Costiera Amalfitana: cinque camere, tre bagni, un ampio salone con vista sul mare e una cucina completamente attrezzata. La piscina e le camere aggiuntive con bagno privato la rendono la casa ideale per famiglie allargate e gruppi di amici.",
    amenities: [
      "Piscina",
      "Salone panoramico",
      "Cucina attrezzata",
      "Vista mare",
      "Wi-Fi gratuito",
      "Fino a 10 ospiti",
    ],
    image: torreSalone,
    alt: "Salone con archi in pietra e divani di Torre di Cesare",
    tag: "Con piscina",
    cardMeta: "Costiera Amalfitana",
    cardText:
      "Una dimora con salone panoramico, soffitti alti e piscina. Perfetta per gruppi e famiglie che vogliono una casa tutta per sé.",
  },
  {
    id: "leucosia",
    index: "05",
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
    image: leucosiaScale,
    alt: "Scalinata esterna con piante e fiori a Santa Maria di Castellabate",
    tag: "Cilento",
    cardMeta: "Santa Maria di Castellabate",
    cardText:
      "Una casa vacanza nel Cilento, per chi cerca mare, vicoli bianchi e il tempo che rallenta. Il sud che ti fa sentire a casa.",
  },
];

export const structureById = (id: string) =>
  structures.find((structure) => structure.id === id);
