import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { it, type Dictionary } from "./dictionaries/it";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { it, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
