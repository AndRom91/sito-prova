import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { StructureDetail } from "@/components/structure-detail";
import { commonFeatures } from "@/data/features";
import { absoluteUrl } from "@/data/site";
import { structures } from "@/data/structures";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Strutture — CORA STAYS",
  description:
    "Portarotese e Zottoli a Salerno, Vietri sul Mare, Torre di Cesare sulla Costiera Amalfitana e Leucosia a Santa Maria di Castellabate: scopri le cinque case di CORA STAYS.",
  path: "/stays/strutture/",
  absoluteTitle: true,
  ogTitle: "CORA STAYS — Le strutture",
  ogDescription:
    "Cinque indirizzi tra Salerno, la Costiera Amalfitana e il Cilento, ognuno con la sua anima.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Le strutture di CORA STAYS",
  itemListElement: structures.map((structure, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: structure.title,
    url: absoluteUrl(`/stays/strutture/#${structure.id}`),
  })),
};

export default function StrutturePage() {
  return (
    <>
      <main id="contenuto">
        <PageHead
          eyebrow="Le nostre case"
          title="Cinque modi di stare tra il mare e il Cilento"
          text="Non sono copie dello stesso albergo. Sono case diverse, con spazi e ritmi diversi. Quello che condividono è il modo di accogliere: camere tenute come si tiene la propria, consigli veri e la voglia di farti sentire a casa."
          current="Strutture"
        />

        <section className="section">
          <div className="container">
            {structures.map((structure) => (
              <StructureDetail key={structure.id} structure={structure} />
            ))}
          </div>
        </section>

        <section
          className="section section--tinted"
          aria-labelledby="comuni-title"
        >
          <div className="container">
            <div className="section__head reveal">
              <div>
                <p className="eyebrow">In tutte le case</p>
                <h2 className="section__title" id="comuni-title">
                  Quello che trovi <em>sempre</em>
                </h2>
              </div>
            </div>
            <div className="features">
              {commonFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  delay={index * 70}
                />
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Non sai quale scegliere?"
          text="Raccontaci che viaggio hai in mente: mare, centro storico, Costiera o Cilento. Ti indirizziamo noi."
          buttonLabel="Parliamone"
          href="/stays/contatti/#richiesta"
        />
      </main>
      <JsonLd data={jsonLd} />
    </>
  );
}
