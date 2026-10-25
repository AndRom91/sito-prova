import type { Metadata } from "next";

import { Icon } from "@/components/icons";
import { Link } from "@/components/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you are looking for does not exist or has moved. Go back to the CORA home page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnglishNotFound() {
  return (
    <>
      <a className="skip-link" href="#contenuto">
        Skip to main content
      </a>
      <SiteHeader locale="en" />
      <main id="contenuto">
        <section className="page-head" aria-labelledby="page-title">
          <div className="container">
            <p className="eyebrow">Error 404</p>
            <h1 className="page-head__title" id="page-title">
              This page is not here.
            </h1>
            <p className="page-head__text">
              Perhaps the link has changed or the page has moved. You can go
              back to the home page or take a look at our houses.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/en/">
                Back to CORA
                <Icon name="arrow" strokeWidth={1.8} />
              </Link>
              <Link className="btn btn--ghost" href="/en/stays/strutture/">
                Discover CORA STAYS
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
