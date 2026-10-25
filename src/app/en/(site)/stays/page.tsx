import { StaysPage, staysMetadata } from "@/views/stays-page";

export const metadata = staysMetadata("en");

export default function EnglishStaysPage() {
  return <StaysPage locale="en" />;
}
