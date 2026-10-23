import { z } from "zod";

export const bookingSchema = z
  .object({
    nome: z
      .string()
      .trim()
      .min(2, "Inserisci nome e cognome.")
      .max(120, "Il nome è troppo lungo."),
    email: z
      .string()
      .trim()
      .email("Inserisci un indirizzo email valido.")
      .max(180, "L'indirizzo email è troppo lungo."),
    telefono: z
      .string()
      .trim()
      .max(40, "Il numero di telefono è troppo lungo.")
      .optional(),
    struttura: z.string().trim().max(120).optional(),
    arrivo: z.string().trim().optional(),
    partenza: z.string().trim().optional(),
    ospiti: z.string().trim().max(10).optional(),
    messaggio: z
      .string()
      .trim()
      .min(10, "Scrivi almeno una frase per raccontarci il viaggio.")
      .max(3000, "Il messaggio è troppo lungo."),
    privacy: z.boolean().refine(Boolean, {
      message: "Devi accettare l'informativa privacy per inviare la richiesta.",
    }),
  })
  .refine(
    (data) =>
      !data.arrivo || !data.partenza || data.partenza > data.arrivo,
    {
      path: ["partenza"],
      message: "La data di partenza deve essere successiva all'arrivo.",
    },
  );

export type BookingValues = z.infer<typeof bookingSchema>;

export type BookingField = keyof BookingValues;

export const bookingDefaults: BookingValues = {
  nome: "",
  email: "",
  telefono: "",
  struttura: "",
  arrivo: "",
  partenza: "",
  ospiti: "2",
  messaggio: "",
  privacy: false,
};
