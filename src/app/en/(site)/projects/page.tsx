import { BrandPage, brandMetadata } from "@/views/brand-page";

export const metadata = brandMetadata("en", "projects");

export default function EnglishProjectsPage() {
  return <BrandPage locale="en" page="projects" />;
}
