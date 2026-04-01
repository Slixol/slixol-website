import type { MetadataRoute } from "next";

const sections = [
  { id: "", priority: 1 },
  { id: "#modszertan", priority: 0.8 },
  { id: "#szolgaltatasok", priority: 0.8 },
  { id: "#esettanulmanyok", priority: 0.7 },
  { id: "#kultura", priority: 0.6 },
  { id: "#gyik", priority: 0.7 },
  { id: "#konzultacio", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...sections.map((section) => ({
      url: `https://slixol.com/${section.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: section.priority,
    })),
    {
      url: "https://slixol.com/koszonjuk",
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
