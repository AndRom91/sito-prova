import { HomePage, homeMetadata } from "@/views/home-page";

export const metadata = homeMetadata("en");

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
