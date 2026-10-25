import Image from "next/image";
import { Link } from "@/components/link";

import type { Structure } from "@/data/structures";
import { getDictionary } from "@/i18n";
import { localeHref, type Locale } from "@/i18n/config";
import { revealDelay } from "@/lib/styles";

type StructureDetailProps = {
  locale: Locale;
  structure: Structure;
};

export function StructureDetail({ locale, structure }: StructureDetailProps) {
  const t = getDictionary(locale);
  const titleId = `${structure.id}-title`;

  return (
    <article
      className="structure"
      id={structure.id}
      aria-labelledby={titleId}
    >
      <div className="structure__media reveal">
        <Image
          src={structure.image}
          alt={structure.alt}
          sizes="(max-width: 960px) 100vw, 50vw"
        />
        <span className="structure__index">{structure.index}</span>
      </div>
      <div className="structure__body reveal" style={revealDelay(80)}>
        <p className="eyebrow">{structure.eyebrow}</p>
        <h2 className="structure__title" id={titleId}>
          {structure.title}
        </h2>
        <p className="structure__text">{structure.text}</p>
        <ul className="amenities">
          {structure.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
        <div className="structure__foot">
          <p className="structure__price">
            <strong>−15%</strong> {t.structureDetail.discount}
          </p>
          <Link
            className="btn btn--primary"
            href={localeHref(locale, "/stays/contatti/#richiesta")}
          >
            {t.structureDetail.ask}
          </Link>
          <Link
            className="link-arrow"
            href={localeHref(locale, "/stays/galleria/")}
          >
            {t.structureDetail.photos}
          </Link>
        </div>
      </div>
    </article>
  );
}
