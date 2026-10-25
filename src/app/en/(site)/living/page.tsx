import { BrandPage, brandMetadata } from "@/views/brand-page";

export const metadata = brandMetadata("en", "living");

export default function EnglishLivingPage() {
  return <BrandPage locale="en" page="living" />;
}
