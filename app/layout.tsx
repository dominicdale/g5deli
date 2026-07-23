import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://g5-deli-gorbals.dominicdale.chatgpt.site"),
  title: "G5 Deli | Gorbals, Glasgow",
  description:
    "Breakfast, lunch, proper coffee and homemade treats on Crown Street, Gorbals.",
  openGraph: {
    title: "G5 Deli | Gorbals, Glasgow",
    description: "Good food. Good coffee. Good morning.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "G5 Deli | Gorbals, Glasgow",
    description: "Good food. Good coffee. Good morning.",
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
      <body>{children}</body>
    </html>
  );
}
