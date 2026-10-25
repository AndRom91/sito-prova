import { BrandPage, brandMetadata } from "@/views/brand-page";

export const metadata = brandMetadata("en", "wears");

export default function EnglishWearsPage() {
  return <BrandPage locale="en" page="wears" />;
}
