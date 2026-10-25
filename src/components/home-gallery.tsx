import Image from "next/image";
import { Link } from "@/components/link";

import { getGallery } from "@/data/gallery";
import { localeHref, type Locale } from "@/i18n/config";
import { revealDelay } from "@/lib/styles";

type HomeGalleryProps = {
  locale: Locale;
};

export function HomeGallery({ locale }: HomeGalleryProps) {
  const { homeItems } = getGallery(locale);

  return (
    <div className="gallery-grid">
      {homeItems.map((item, index) => (
        <Link
          key={item.id}
          className="gallery__item reveal"
          href={localeHref(locale, "/stays/galleria/")}
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
