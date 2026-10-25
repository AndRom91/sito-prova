import { BrandPage, brandMetadata } from "@/views/brand-page";

export const metadata = brandMetadata("it", "wears");

export default function WearsPage() {
  return <BrandPage locale="it" page="wears" />;
}
