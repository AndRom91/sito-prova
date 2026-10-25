"use client";

import { useEffect } from "react";

type HtmlLangProps = {
  lang: string;
};

/**
 * English pages share the root layout (which declares `lang="it"`), so the
 * document language is aligned after hydration while the wrapper element
 * already carries the correct language for assistive technologies.
 */
export function HtmlLang({ lang }: HtmlLangProps) {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.lang;
    root.lang = lang;

    return () => {
      root.lang = previous;
    };
  }, [lang]);

  return null;
}
