import { MetadataRoute } from "next";
import { toolsData } from "./data/tools";
import { blogPosts } from "./data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: "https://www.resizertools.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: "https://www.resizertools.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: "https://www.resizertools.com/editorial",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.resizertools.com/help",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.resizertools.com/privacy",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: "https://www.resizertools.com/terms",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: "https://www.resizertools.com/refund",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: "https://www.resizertools.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    {
      url: "https://www.resizertools.com/card",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://www.resizertools.com/shots",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.resizertools.com/app",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.resizertools.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const blogRoutes = blogPosts.map((post) => {
    const parsedDate = Date.parse(post.date);
    return {
      url: `https://www.resizertools.com/blog/${post.slug}`,
      lastModified: Number.isNaN(parsedDate) ? new Date("2026-11-16") : new Date(parsedDate),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  const toolRoutes = toolsData.map((tool) => ({
    url: `https://www.resizertools.com/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...toolRoutes];
}
