import { StaysPage, staysMetadata } from "@/views/stays-page";

export const metadata = staysMetadata("it");

export default function Page() {
  return <StaysPage locale="it" />;
}
