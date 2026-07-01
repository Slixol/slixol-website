import type { Metadata } from "next";
import { categories } from "./faqData";

export const BASE_URL = "https://slixol.com";

export interface HeroContent {
  badge?: string;
  heading: string;
  subtitle: string;
}

export interface SeoRoute {
  /** URL slug, e.g. "szolgaltatasok" → /szolgaltatasok */
  slug: string;
  /** Target section id on the one-pager to scroll to */
  sectionId: string;
  /** Breadcrumb label */
  breadcrumb: string;
  title: string;
  description: string;
  /** Route-specific hero override — unique <h1> so pages aren't duplicate content */
  hero: HeroContent;
}

export const seoRoutes: SeoRoute[] = [
  {
    slug: "modszertan",
    sectionId: "modszertan",
    breadcrumb: "Módszertan",
    title: "Módszertan | slixol",
    description:
      "A slixol módszertana: hogyan építünk integrált digitális növekedési rendszert B2B és ipari cégeknek — stratégiától a kivitelezésig, összehangolt szakértői podokkal.",
    hero: {
      badge: "Módszertan",
      heading: "A slixol módszertan — így építünk digitális növekedést",
      subtitle:
        "Nem kampányokban, hanem rendszerekben gondolkodunk. Összehangolt szakértői podok — marketing, sales, tech, AI, brand — egy központi stratégiai vezetés alatt.",
    },
  },
  {
    slug: "szolgaltatasok",
    sectionId: "szolgaltatasok",
    breadcrumb: "Szolgáltatások",
    title: "Szolgáltatások | slixol",
    description:
      "Digitális növekedési szolgáltatások B2B cégeknek: PPC és teljesítménymarketing, SEO, CRM-bevezetés, AI-automatizáció, rendszerintegráció és szakértői márkaépítés.",
    hero: {
      badge: "Szolgáltatások",
      heading: "Digitális növekedési szolgáltatások B2B cégeknek",
      subtitle:
        "Marketing, sales támogatás, rendszerintegráció, AI implementálás és szakértői márkaépítés — összehangolva, egy stratégiai partnernél.",
    },
  },
  {
    slug: "esettanulmanyok",
    sectionId: "esettanulmanyok",
    breadcrumb: "Esettanulmányok",
    title: "Esettanulmányok | slixol",
    description:
      "Mérhető eredmények valós ügyfelektől: hogyan segítettünk B2B és ipari cégeknek digitálisan növekedni. Nézd meg a slixol esettanulmányait.",
    hero: {
      badge: "Esettanulmányok",
      heading: "Esettanulmányok — mérhető eredmények ügyfeleinktől",
      subtitle:
        "Valós projektek, valós számok. Nézd meg, hogyan építettünk digitális növekedési rendszert B2B és ipari partnereinknek.",
    },
  },
  {
    slug: "kultura",
    sectionId: "kultura",
    breadcrumb: "Kultúra",
    title: "Kultúra | slixol",
    description:
      "Kik vagyunk és hogyan dolgozunk? A slixol butik szakértői ügynökség: szenior csapat, vállalkozói szemlélet és hosszú távú, partneri együttműködés.",
    hero: {
      badge: "Kultúra",
      heading: "A slixol kultúra — kik vagyunk és hogyan dolgozunk",
      subtitle:
        "Butik szakértői ügynökség szenior csapattal és vállalkozói szemlélettel. Hosszú távú partnerségekben gondolkodunk, nem gyors kampányokban.",
    },
  },
  {
    slug: "gyik",
    sectionId: "gyik",
    breadcrumb: "GYIK",
    title: "Gyakori kérdések (GYIK) | slixol",
    description:
      "Gyakori kérdések a slixolról: mivel foglalkozunk, kikkel dolgozunk, mennyibe kerül az együttműködés és hogyan indul el egy közös projekt.",
    hero: {
      badge: "GYIK",
      heading: "Gyakori kérdések a slixolról",
      subtitle:
        "Összegyűjtöttük a leggyakoribb kérdéseket az együttműködésről, az árakról és a folyamatról — hogy tisztán láss, mielőtt kapcsolatba lépsz velünk.",
    },
  },
  {
    slug: "konzultacio",
    sectionId: "konzultacio",
    breadcrumb: "Konzultáció",
    title: "Díjmentes stratégiai konzultáció | slixol",
    description:
      "Foglalj díjmentes, kb. 60 perces stratégiai konzultációt. Körbejárjuk az üzleti céljaidat és a digitalizációs kihívásaidat, és megmutatjuk, hol tudunk segíteni.",
    hero: {
      badge: "Konzultáció",
      heading: "Foglalj díjmentes stratégiai konzultációt",
      subtitle:
        "Egy strukturált, kb. 60 perces online meeting, ahol átnézzük a jelenlegi helyzeted és azonosítjuk a legnagyobb növekedési lehetőségeket. Díjmentes.",
    },
  },
];

export function getSeoRoute(slug: string): SeoRoute | undefined {
  return seoRoutes.find((r) => r.slug === slug);
}

/** Next.js metadata for a given sub-route slug. */
export function buildMetadata(slug: string): Metadata {
  const route = getSeoRoute(slug);
  if (!route) return {};
  const url = `${BASE_URL}/${route.slug}`;
  return {
    title: route.title,
    description: route.description,
    alternates: { canonical: url },
    openGraph: {
      title: route.title,
      description: route.description,
      type: "website",
      locale: "hu_HU",
      url,
      siteName: "slixol",
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
    },
  };
}

const organization = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "slixol",
  url: BASE_URL,
  description:
    "Magyarország első digitalizációs és növekedési partnere B2B és ipari cégek számára.",
  sameAs: [
    "https://www.instagram.com/__slixol__/",
    "https://www.linkedin.com/company/slixol/",
    "https://youtube.com/@slixolmedia",
    "https://www.tiktok.com/@slixol",
  ],
};

/** Build the JSON-LD graph for a given SEO route. */
export function buildJsonLd(route: SeoRoute): object {
  const pageUrl = `${BASE_URL}/${route.slug}`;

  const graph: object[] = [
    organization,
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: route.title,
      description: route.description,
      isPartOf: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "hu-HU",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Főoldal",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: route.breadcrumb,
          item: pageUrl,
        },
      ],
    },
  ];

  // FAQ page gets a rich FAQPage schema (eligible for Google rich results)
  if (route.slug === "gyik") {
    graph.push({
      "@type": "FAQPage",
      mainEntity: categories.flatMap((cat) =>
        cat.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      ),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
