import { GalleryPage, galleryMetadata } from "@/views/gallery-page";

export const metadata = galleryMetadata("en");

export default function EnglishGalleryPage() {
  return <GalleryPage locale="en" />;
}
