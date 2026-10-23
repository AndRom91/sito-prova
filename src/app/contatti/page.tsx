import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/contact-form";
import { ContactMap } from "@/components/contact-map";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { faqs } from "@/data/faqs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contatti e disponibilità",
  description:
    "Scrivi a Rooms Hub per disponibilità, informazioni e soggiorni tra Salerno, la Costiera Amalfitana e il Cilento. Email, telefono e modulo di richiesta.",
  path: "/contatti/",
  ogTitle: "Contatti — Rooms Hub",
  ogDescription:
    "Raccontaci le date e la struttura che ti interessa: rispondiamo entro 24 ore.",
});

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

export default function ContattiPage() {
  return (
    <>
      <main id="contenuto">
        <PageHead
          eyebrow="Parliamoci"
          title="Scrivici come scriveresti a un amico"
          text="Due righe sulle date, sul numero di ospiti e su cosa cerchi. Rispondiamo entro 24 ore, con disponibilità reali e nessun preventivo automatico."
          current="Contatti"
        />

        <section className="section">
          <div className="container">
            <div className="contact-layout">
              <ContactDetails />
              <ContactForm />
            </div>

            <ContactMap />
          </div>
        </section>

        <section
          className="section section--tinted"
          aria-labelledby="faq-title"
        >
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">Domande frequenti</p>
                <h2 className="section__title" id="faq-title">
                  Prima di scrivere
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
