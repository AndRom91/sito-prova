import { StaysNav } from "@/components/stays-nav";

export default function EnglishStaysLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StaysNav locale="en" />
      {children}
    </>
  );
}
