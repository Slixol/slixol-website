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
        {/* Cookiebot — must load before GTM to block until consent */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="d31c01e0-0b16-452c-968e-00d5f4aae2dc"
          data-blockingmode="auto"
          type="text/javascript"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TFH9KJK3');`,
          }}
        />
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "e04d9e26d5fd48eea844fbd653e440b4"}'
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFH9KJK3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
