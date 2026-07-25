import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://g5deli.pages.dev"),
  title: "G5 Deli & Coffee Shop | Gorbals, Glasgow",
  description:
    "Breakfast, lunch, proper coffee and homemade treats on Crown Street, Gorbals.",
  openGraph: {
    title: "G5 Deli & Coffee Shop | Gorbals, Glasgow",
    description: "Coffee, deli favourites, catering and platters on Crown Street.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "G5 Deli & Coffee Shop | Gorbals, Glasgow",
    description: "Coffee, deli favourites, catering and platters on Crown Street.",
    images: ["/og.png"],
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
      <body className={dmSans.variable}>{children}</body>
    </html>
  );
}
