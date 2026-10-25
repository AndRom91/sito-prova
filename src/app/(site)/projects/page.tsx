import { CoraSection } from "@/components/cora-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CORA PROJECTS — New ventures",
  description:
    "CORA PROJECTS: nuove imprese, collaborazioni e idee da far crescere. Lo spazio per i prossimi capitoli di CORA.",
  path: "/projects/",
  absoluteTitle: true,
  ogTitle: "CORA PROJECTS — New ventures",
  ogDescription:
    "Nuove imprese, collaborazioni e idee da far crescere. CORA PROJECTS arriva presto.",
});

export default function ProjectsPage() {
  return (
    <CoraSection
      title="CORA PROJECTS"
      subtitle="New ventures"
      description="Nuove imprese, collaborazioni e idee da far crescere. CORA PROJECTS è lo spazio per i prossimi capitoli: se hai un progetto da costruire con noi, scrivici."
      variant="blank"
    />
  );
}
