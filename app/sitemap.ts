import { MetadataRoute } from "next";
import { toolsData } from "./data/tools";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: "https://resizertools.com/",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
  ];

  const toolRoutes = toolsData.map((tool) => ({
    url: `https://resizertools.com/tools/${tool.id}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...toolRoutes];
}
