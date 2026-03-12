import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Slixol – Magyarország első digitalizációs és növekedési partnere",
  description:
    "B2B és ipari cégek digitalizációs és növekedési partnere. Marketing, sales, rendszerek, AI és márkaépítés egy kézben.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Slixol – Digitalizációs és növekedési partner",
    description:
      "B2B és ipari cégek digitalizációs és növekedési partnere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
