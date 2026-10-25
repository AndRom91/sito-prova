import { GalleryPage, galleryMetadata } from "@/views/gallery-page";

export const metadata = galleryMetadata("it");

export default function Page() {
  return <GalleryPage locale="it" />;
}
