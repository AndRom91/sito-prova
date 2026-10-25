import { ContactPage, contactMetadata } from "@/views/contact-page";

export const metadata = contactMetadata("en");

export default function EnglishContactPage() {
  return <ContactPage locale="en" />;
}
