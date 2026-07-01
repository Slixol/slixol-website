import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "../components/HomePage";
import { BASE_URL, buildJsonLd, getSeoRoute, seoRoutes } from "@/app/lib/seoRoutes";

// Only the slugs listed below are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return seoRoutes.map((route) => ({ section: route.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const route = getSeoRoute(section);
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

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const route = getSeoRoute(section);
  if (!route) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd(route)),
        }}
      />
      <HomePage hero={route.hero} scrollTo={route.sectionId} />
    </>
  );
}
