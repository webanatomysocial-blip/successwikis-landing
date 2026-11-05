import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "SuccessWikis — The Story Behind the Story",
  description:
    "A one-day SuccessWikis live experience in Jubilee Hills, Hyderabad.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
