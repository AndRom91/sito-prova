import { HousesPage, housesMetadata } from "@/views/houses-page";

export const metadata = housesMetadata("it");

export default function Page() {
  return <HousesPage locale="it" />;
}
