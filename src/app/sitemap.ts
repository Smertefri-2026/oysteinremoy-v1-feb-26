// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oysteinremoy.no";

  const routes = [
    "",
    "/om",
    "/markedsforing",
    "/foredrag",
    "/kurs",
    "/kontakt",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}