import { BrandPage, brandMetadata } from "@/views/brand-page";

export const metadata = brandMetadata("it", "living");

export default function LivingPage() {
  return <BrandPage locale="it" page="living" />;
}
