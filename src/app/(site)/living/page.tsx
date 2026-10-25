import coraLiving from "@/assets/images/cora-living.jpg";
import { CoraSection } from "@/components/cora-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CORA LIVING — Lifestyle",
  description:
    "CORA LIVING: oggetti, rituali e spazi che fanno casa. Una selezione di pezzi e idee per abitare con calma.",
  path: "/living/",
  absoluteTitle: true,
  ogTitle: "CORA LIVING — Lifestyle",
  ogDescription:
    "Oggetti, rituali e spazi che fanno casa. CORA LIVING arriva presto.",
});

export default function LivingPage() {
  return (
    <CoraSection
      title="CORA LIVING"
      subtitle="Lifestyle"
      description="Oggetti, rituali e spazi che fanno casa. CORA LIVING raccoglierà una selezione di pezzi e idee per abitare con calma, tra materia, luce e piccoli gesti quotidiani."
      image={coraLiving}
      alt="La tavola della colazione in terrazza, dettaglio lifestyle CORA"
    />
  );
}
