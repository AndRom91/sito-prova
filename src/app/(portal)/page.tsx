import { HomePage, homeMetadata } from "@/views/home-page";

export const metadata = homeMetadata("it");

export default function CoraHomePage() {
  return <HomePage locale="it" />;
}
