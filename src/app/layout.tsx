import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slixol.com"),
  title: "slixol - Magyarország első digitalizációs és növekedési partnere",
  description:
    "Magyarország első digitalizációs és növekedési partnere B2B és ipari cégek számára. Segítünk megújulni, fejlődni és adaptálódni a digitális térben. Marketing, sales támogatás, rendszerintegráció, AI implementálás, szakértői márkaépítés. Összehangolva, egy stratégiai partnernél.",
  keywords: [
    "digitalizáció",
    "B2B marketing",
    "növekedési partner",
    "sales támogatás",
    "CRM bevezetés",
    "AI automatizáció",
    "márkaépítés",
    "ipari digitalizáció",
    "slixol",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "slixol - Digitalizációs és növekedési partner",
    description:
      "Magyarország első digitalizációs és növekedési partnere B2B és ipari cégek számára. Segítünk megújulni, fejlődni és adaptálódni a digitális térben. Marketing, sales támogatás, rendszerintegráció, AI implementálás, szakértői márkaépítés. Összehangolva, egy stratégiai partnernél.",
    type: "website",
    locale: "hu_HU",
    url: "https://slixol.com",
    siteName: "slixol",
  },
  twitter: {
    card: "summary_large_image",
    title: "slixol - Digitalizációs és növekedési partner",
    description:
      "Magyarország első digitalizációs és növekedési partnere B2B és ipari cégek számára.",
  },
  alternates: {
    canonical: "https://slixol.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <link
          rel="preload"
          as="font"
          href="/fonts/safiro-medium-webfont.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
