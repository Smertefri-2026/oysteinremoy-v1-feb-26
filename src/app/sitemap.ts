// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const SITE = "https://oysteinremoy.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Legg inn sidene du har i appen din her
  const routes = [
    "",
    "/om",
    "/markedsforing",
    "/foredrag",
    "/kurs",
    "/kontakt",
  ];

  return routes.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}