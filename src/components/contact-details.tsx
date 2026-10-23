import { Icon } from "@/components/icons";
import { siteConfig, socials } from "@/data/site";

export function ContactDetails() {
  return (
    <div className="reveal">
      <h2 className="section__title section__title--sm">I nostri recapiti</h2>
      <p className="section__lead" style={{ marginTop: "0.8rem" }}>
        Puoi scriverci per una singola struttura o per organizzare un gruppo tra
        più case. Per richieste last minute, il telefono è la strada più veloce.
      </p>

      <ul className="contact-list">
        <li>
          <span className="contact-list__icon" aria-hidden="true">
            <Icon name="mail" strokeWidth={1.6} />
          </span>
          <div>
            <span className="contact-list__label">Email</span>
            <span className="contact-list__value">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </span>
          </div>
        </li>
        <li>
          <span className="contact-list__icon" aria-hidden="true">
            <Icon name="phone" strokeWidth={1.6} />
          </span>
          <div>
            <span className="contact-list__label">Telefono e WhatsApp</span>
            <span className="contact-list__value">
              <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
              <br />
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Scrivici su WhatsApp
              </a>
            </span>
          </div>
        </li>
        <li>
          <span className="contact-list__icon" aria-hidden="true">
            <Icon name="location" strokeWidth={1.6} />
          </span>
          <div>
            <span className="contact-list__label">Dove siamo</span>
            <span className="contact-list__value">
              Salerno · Vietri sul Mare
              <br />
              Costiera Amalfitana · Santa Maria di Castellabate
            </span>
          </div>
        </li>
        <li>
          <span className="contact-list__icon" aria-hidden="true">
            <Icon name="clock" strokeWidth={1.6} />
          </span>
          <div>
            <span className="contact-list__label">Orari</span>
            <span className="contact-list__value">
              Check-in e check-out da concordare
              <br />
              Telefono e WhatsApp, rispondiamo appena possibile
            </span>
          </div>
        </li>
      </ul>

      <div className="socials" aria-label="Social network">
        {socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <Icon name="instagram" strokeWidth={1.6} />
          </a>
        ))}
        <a href={`mailto:${siteConfig.email}`} aria-label="Scrivici una email">
          <Icon name="mail" strokeWidth={1.6} />
        </a>
      </div>
    </div>
  );
}
