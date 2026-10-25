import { BrandPage, brandMetadata } from "@/views/brand-page";

export const metadata = brandMetadata("it", "projects");

export default function ProjectsPage() {
  return <BrandPage locale="it" page="projects" />;
}
