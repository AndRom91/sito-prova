import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { navigation } from "@/data/navigation";
import { siteConfig, socials } from "@/data/site";
import { structures } from "@/data/structures";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__main">
        <div>
          <Link className="footer__brand" href="/">
            <BrandMark />
            Rooms Hub
          </Link>
          <p className="footer__about">
            Case e camere tra Salerno, la Costiera Amalfitana e il Cilento. Un
            unico modo di accogliere: con calma, con cura, come a casa.
          </p>
        </div>

        <div>
          <h2 className="footer__title">Esplora</h2>
          <ul className="footer__list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Strutture</h2>
          <ul className="footer__list">
            {structures.map((structure) => (
              <li key={structure.id}>
                <Link href={`/strutture/#${structure.id}`}>
                  {structure.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Contatti</h2>
          <ul className="footer__list">
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
            </li>
            <li>{siteConfig.address}</li>
            <li>
              <a
                href={socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram {socials[0].handle}
              </a>
            </li>
            <li>
              <Link href="/contatti/#richiesta">Richiedi disponibilità</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          &copy; {year} Rooms Hub — C.F. {siteConfig.legal.cf} · REA{" "}
          {siteConfig.legal.rea}
        </p>
        <p>
          Foto delle strutture e dei profili Instagram ·{" "}
          <Link href="/contatti/">Privacy e cookie</Link>
        </p>
      </div>
    </footer>
  );
}
