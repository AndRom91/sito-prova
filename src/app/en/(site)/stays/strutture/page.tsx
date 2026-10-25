import { HousesPage, housesMetadata } from "@/views/houses-page";

export const metadata = housesMetadata("en");

export default function EnglishHousesPage() {
  return <HousesPage locale="en" />;
}
