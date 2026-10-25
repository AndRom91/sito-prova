import type { Locale } from "@/i18n/config";

export type Faq = {
  question: string;
  answer: string;
};

const faqContent: Record<Locale, Faq[]> = {
  it: [
    {
      question: "Come funziona la prenotazione?",
      answer:
        "Ci scrivi le date e la struttura che preferisci. Ti confermiamo la disponibilità con il prezzo totale e il 15% di sconto riservato a chi prenota dal sito. Le condizioni di pagamento arrivano insieme alla proposta, in modo chiaro.",
    },
    {
      question: "La colazione è inclusa?",
      answer:
        "Dipende dalla struttura: in alcune case la colazione si serve in terrazza, negli appartamenti trovi la cucina attrezzata e il set per tè e caffè. Ti confermiamo tutto nella proposta, senza sorprese.",
    },
    {
      question: "Dove posso parcheggiare?",
      answer:
        "In centro a Salerno si parcheggia nelle vicinanze a pagamento; per le altre case ti indichiamo la soluzione più comoda in base alla struttura e al periodo. Chiedicelo al momento della richiesta.",
    },
    {
      question: "Posso spostarmi tra le strutture?",
      answer:
        "Volentieri: è proprio l'idea dell'hub. Se una casa è piena o vuoi dividere il soggiorno tra città e mare, organizziamo noi la seconda prenotazione e ti diamo tutti i riferimenti.",
    },
    {
      question: "Come funzionano cancellazioni, animali e bambini?",
      answer:
        "Le condizioni dipendono dalla struttura e dal periodo: te le indichiamo per iscritto prima della conferma. Per bambini, culle e animali scrivici due righe e verifichiamo insieme la casa più adatta.",
    },
  ],
  en: [
    {
      question: "How does booking work?",
      answer:
        "Send us your dates and the house you prefer. We will confirm availability with the total price and the 15% discount reserved for those who book on our site. Payment terms come with the proposal, clearly set out.",
    },
    {
      question: "Is breakfast included?",
      answer:
        "It depends on the house: in some houses breakfast is served on the terrace, while the apartments have an equipped kitchen and a tea and coffee set. We confirm everything in the proposal, with no surprises.",
    },
    {
      question: "Where can I park?",
      answer:
        "In central Salerno you can park nearby in paid spaces; for the other houses we will suggest the most convenient option based on the house and the season. Ask us when you send your request.",
    },
    {
      question: "Can I move between houses?",
      answer:
        "Of course: that is exactly the hub idea. If one house is full or you want to split your stay between town and sea, we will arrange the second booking and give you all the details.",
    },
    {
      question: "How do cancellations, pets and children work?",
      answer:
        "Terms depend on the house and the season: we set them out in writing before confirmation. For children, cots and pets, write us a few lines and we will find the most suitable house together.",
    },
  ],
};

export const getFaqs = (locale: Locale) => faqContent[locale];
