import { CoraSection } from "@/components/cora-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CORA WEARS — Fashion",
  description:
    "CORA WEARS: un nuovo capitolo dedicato alla moda, fatto di capi essenziali, materiali naturali e una palette di bianco panna, beige e nero.",
  path: "/wears/",
  absoluteTitle: true,
  ogTitle: "CORA WEARS — Fashion",
  ogDescription:
    "Capi essenziali, materiali naturali e una palette di bianco panna, beige e nero. CORA WEARS arriva presto.",
});

export default function WearsPage() {
  return (
    <CoraSection
      title="CORA WEARS"
      subtitle="Fashion"
      description="Un nuovo capitolo sta prendendo forma. La prima collezione CORA WEARS arriverà presto: capi essenziali, materiali naturali e una palette che parte dal bianco panna, dal beige e dal nero."
      variant="dark"
    />
  );
}
