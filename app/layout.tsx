import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://g5-deli-gorbals.dominicdale.chatgpt.site"),
  title: "G5 Deli & Coffee Shop | Gorbals, Glasgow",
  description:
    "Breakfast, lunch, proper coffee and homemade treats on Crown Street, Gorbals.",
  openGraph: {
    title: "G5 Deli & Coffee Shop | Gorbals, Glasgow",
    description: "Coffee, deli favourites, catering and platters on Crown Street.",
    images: ["/hero-coffee-v2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "G5 Deli & Coffee Shop | Gorbals, Glasgow",
    description: "Coffee, deli favourites, catering and platters on Crown Street.",
    images: ["/hero-coffee-v2.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
