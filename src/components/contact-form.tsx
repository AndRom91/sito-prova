"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";

import { Icon } from "@/components/icons";
import { siteConfig } from "@/data/site";
import {
  bookingDefaults,
  bookingSchema,
  type BookingField,
  type BookingValues,
} from "@/lib/validation";
import { revealDelay } from "@/lib/styles";

type FormStatus = {
  type: "success" | "error";
  message: string;
};

const focusOrder: BookingField[] = [
  "nome",
  "email",
  "partenza",
  "messaggio",
  "privacy",
];

export function ContactForm() {
  const [values, setValues] = useState<BookingValues>(bookingDefaults);
  const [errors, setErrors] = useState<
    Partial<Record<BookingField, string>>
  >({});
  const [status, setStatus] = useState<FormStatus | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const update = (field: BookingField, value: string | boolean) => {
    setValues((previous) => ({ ...previous, [field]: value } as BookingValues));
    setErrors((previous) => {
      if (!previous[field]) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
    if (status?.type === "error") setStatus(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = bookingSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: Partial<Record<BookingField, string>> = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (
          typeof field === "string" &&
          field in values &&
          !nextErrors[field as BookingField]
        ) {
          nextErrors[field as BookingField] = issue.message;
        }
      }

      setErrors(nextErrors);
      setStatus({
        type: "error",
        message:
          "Controlla i campi evidenziati: ci manca qualche informazione per risponderti.",
      });

      const firstInvalid = focusOrder.find((field) => nextErrors[field]);
      if (firstInvalid) {
        const element = formRef.current?.elements.namedItem(firstInvalid);
        if (element instanceof HTMLElement) element.focus();
      }
      return;
    }

    const data = result.data;
    const details = [
      `Nome: ${data.nome}`,
      `Email: ${data.email}`,
      data.telefono ? `Telefono: ${data.telefono}` : "",
      data.struttura ? `Struttura: ${data.struttura}` : "",
      data.arrivo ? `Arrivo: ${data.arrivo}` : "",
      data.partenza ? `Partenza: ${data.partenza}` : "",
      data.ospiti ? `Ospiti: ${data.ospiti}` : "",
      "",
      data.messaggio,
    ].filter((line) => line !== "");

    const subject = `Richiesta disponibilità${
      data.struttura ? ` — ${data.struttura}` : ""
    }`;
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(details.join("\n"))}`;

    setErrors({});
    setStatus({
      type: "success",
      message:
        "Grazie! Si sta aprendo il tuo programma di posta con la richiesta già compilata. Se non si apre, scrivici a info@roomshub.it.",
    });
    window.location.href = mailto;
  };

  return (
    <div className="form-card reveal" id="richiesta" style={revealDelay(80)}>
      <h2>Richiedi disponibilità</h2>
      <p>
        I campi con <span style={{ color: "var(--sea)" }}>*</span> sono
        obbligatori.
      </p>

      <form ref={formRef} id="richiesta-form" noValidate onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="nome">
              Nome e cognome <span className="req">*</span>
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              autoComplete="name"
              required
              value={values.nome}
              aria-invalid={errors.nome ? true : undefined}
              aria-describedby="nome-error"
              onChange={(event) => update("nome", event.target.value)}
            />
            <span className="field__error" id="nome-error" role="alert">
              {errors.nome}
            </span>
          </div>

          <div className="field">
            <label htmlFor="email">
              Email <span className="req">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              value={values.email}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby="email-error"
              onChange={(event) => update("email", event.target.value)}
            />
            <span className="field__error" id="email-error" role="alert">
              {errors.email}
            </span>
          </div>

          <div className="field">
            <label htmlFor="telefono">Telefono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              autoComplete="tel"
              inputMode="tel"
              value={values.telefono}
              onChange={(event) => update("telefono", event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="struttura">Struttura</label>
            <select
              id="struttura"
              name="struttura"
              value={values.struttura}
              onChange={(event) => update("struttura", event.target.value)}
            >
              <option value="">Nessuna preferenza</option>
              <option value="Portarotese">Portarotese — Salerno</option>
              <option value="Zottoli">Zottoli — Salerno</option>
              <option value="Vietri sul Mare">
                Vietri sul Mare — Costa d&apos;Amalfi
              </option>
              <option value="Torre di Cesare">
                Torre di Cesare — Costiera Amalfitana
              </option>
              <option value="Leucosia">
                Leucosia — Santa Maria di Castellabate
              </option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="arrivo">Data di arrivo</label>
            <input
              type="date"
              id="arrivo"
              name="arrivo"
              value={values.arrivo}
              onChange={(event) => update("arrivo", event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="partenza">Data di partenza</label>
            <input
              type="date"
              id="partenza"
              name="partenza"
              value={values.partenza}
              aria-invalid={errors.partenza ? true : undefined}
              aria-describedby="partenza-error"
              onChange={(event) => update("partenza", event.target.value)}
            />
            <span className="field__error" id="partenza-error" role="alert">
              {errors.partenza}
            </span>
          </div>

          <div className="field field--full">
            <label htmlFor="ospiti">Numero di ospiti</label>
            <select
              id="ospiti"
              name="ospiti"
              value={values.ospiti}
              onChange={(event) => update("ospiti", event.target.value)}
            >
              <option value="1">1 ospite</option>
              <option value="2">2 ospiti</option>
              <option value="3">3 ospiti</option>
              <option value="4">4 ospiti</option>
              <option value="5">5 ospiti</option>
              <option value="6+">6 o più ospiti</option>
            </select>
          </div>

          <div className="field field--full">
            <label htmlFor="messaggio">
              Messaggio <span className="req">*</span>
            </label>
            <textarea
              id="messaggio"
              name="messaggio"
              required
              value={values.messaggio}
              aria-invalid={errors.messaggio ? true : undefined}
              aria-describedby="messaggio-error"
              placeholder="Raccontaci il viaggio: date, esigenze, bambini, animali, occasione speciale…"
              onChange={(event) => update("messaggio", event.target.value)}
            />
            <span className="field__error" id="messaggio-error" role="alert">
              {errors.messaggio}
            </span>
          </div>

          <div className="field field--full">
            <label className="checkbox" htmlFor="privacy">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                checked={values.privacy}
                aria-invalid={errors.privacy ? true : undefined}
                aria-describedby="privacy-error"
                onChange={(event) => update("privacy", event.target.checked)}
              />
              <span>
                Ho letto l&apos;informativa privacy e acconsento al trattamento
                dei dati per rispondere alla richiesta.{" "}
                <span className="req">*</span>
              </span>
            </label>
            <span className="field__error" id="privacy-error" role="alert">
              {errors.privacy}
            </span>
          </div>

          <div className="field field--full">
            <button className="btn btn--primary btn--wide" type="submit">
              Invia la richiesta
              <Icon name="arrow" strokeWidth={1.8} />
            </button>
            <p className="form-note">
              L&apos;invio apre il tuo programma di posta con il messaggio già
              compilato e indirizzato a {siteConfig.email}. Preferisci WhatsApp?
              Scrivici al {siteConfig.phone}.
            </p>
            <p
              className={`form-status${
                status ? ` form-status--${status.type} is-visible` : ""
              }`}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {status?.message}
            </p>
            <noscript>
              <p className="form-note">
                Il modulo interattivo richiede JavaScript. Nel frattempo puoi
                scriverci direttamente a{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
                oppure chiamare il {siteConfig.phone}.
              </p>
            </noscript>
          </div>
        </div>
      </form>
    </div>
  );
}
