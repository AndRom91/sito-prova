import Image from "next/image";
import Link from "next/link";

import { galleryItemById, homeGalleryIds } from "@/data/gallery";
import { revealDelay } from "@/lib/styles";

export function HomeGallery() {
  const items = homeGalleryIds
    .map((id) => galleryItemById(id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <Link
          key={item.id}
          className="gallery__item reveal"
          href="/galleria/"
          style={revealDelay((index % 3) * 60)}
        >
          <Image
            src={item.image}
            alt={item.alt}
            sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw"
          />
          <span className="gallery__caption">{item.caption}</span>
        </Link>
      ))}
    </div>
  );
}
