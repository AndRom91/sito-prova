import { ContactPage, contactMetadata } from "@/views/contact-page";

export const metadata = contactMetadata("it");

export default function Page() {
  return <ContactPage locale="it" />;
}
