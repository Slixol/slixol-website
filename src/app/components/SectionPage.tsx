import { notFound } from "next/navigation";
import HomePage from "./HomePage";
import { buildJsonLd, getSeoRoute } from "@/app/lib/seoRoutes";

/**
 * Shared renderer for the SEO sub-routes. Each slug has its own static route
 * folder (avoids the OpenNext/Cloudflare dynamic-route prerender 404), but they
 * all render the same one-pager with a route-specific hero + JSON-LD.
 */
export default function SectionPage({ slug }: { slug: string }) {
  const route = getSeoRoute(slug);
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
