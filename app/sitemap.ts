import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com";

  const routes = [
    "",
    "/zalgo-text-generator",
    "/bubble-text-generator",
    "/small-caps-text",
    "/stylish-font-generator",
    "/instagram-font-generator",
    "/discord-text-generator",
    "/glitch-text-generator",
    "/cute-text-generator",
    "/aesthetic-text-generator",
    "/fancy-text-generator",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));
}