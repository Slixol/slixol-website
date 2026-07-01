import type { MetadataRoute } from "next";
import { BASE_URL, seoRoutes } from "@/app/lib/seoRoutes";

// Priority per sub-route (homepage is always 1.0)
const priorities: Record<string, number> = {
  konzultacio: 0.9,
  modszertan: 0.8,
  szolgaltatasok: 0.8,
  gyik: 0.7,
  esettanulmanyok: 0.7,
  kultura: 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...seoRoutes.map((route) => ({
      url: `${BASE_URL}/${route.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: priorities[route.slug] ?? 0.6,
    })),
  ];
}
