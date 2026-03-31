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
    "B2B és ipari cégek digitalizációs és növekedési partnere. Marketing, sales, rendszerek, AI és márkaépítés egy kézben.",
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
      "B2B és ipari cégek digitalizációs és növekedési partnere. Marketing, sales, rendszerek, AI és márkaépítés egy kézben.",
    type: "website",
    locale: "hu_HU",
    url: "https://slixol.com",
    siteName: "slixol",
  },
  twitter: {
    card: "summary_large_image",
    title: "slixol - Digitalizációs és növekedési partner",
    description:
      "B2B és ipari cégek digitalizációs és növekedési partnere.",
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
