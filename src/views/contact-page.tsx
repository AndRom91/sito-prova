import type { Metadata } from "next";

import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/contact-form";
import { ContactMap } from "@/components/contact-map";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { getFaqs } from "@/data/faqs";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { createPageMetadata } from "@/lib/metadata";

export function contactMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).contact;

  return createPageMetadata(locale, {
    title: t.meta.title,
    description: t.meta.description,
    path: "/stays/contatti/",
    absoluteTitle: true,
    ogTitle: t.meta.ogTitle,
    ogDescription: t.meta.ogDescription,
  });
}

type ContactPageProps = {
  locale: Locale;
};

export function ContactPage({ locale }: ContactPageProps) {
  const t = getDictionary(locale).contact;
  const faqs = getFaqs(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <main id="contenuto">
        <PageHead
          locale={locale}
          eyebrow={t.pageHead.eyebrow}
          title={t.pageHead.title}
          text={t.pageHead.text}
          current={t.pageHead.current}
        />

        <section className="section">
          <div className="container">
            <div className="contact-layout">
              <ContactDetails locale={locale} />
              <ContactForm locale={locale} />
            </div>

            <ContactMap locale={locale} />
          </div>
        </section>

        <section
          className="section section--tinted"
          aria-labelledby="faq-title"
        >
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">{t.faq.eyebrow}</p>
                <h2 className="section__title" id="faq-title">
                  {t.faq.title}
                </h2>
              </div>
            </div>

            <div className="faq reveal">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <JsonLd data={jsonLd} />
    </>
  );
}
