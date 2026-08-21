import type { MetadataRoute } from "next";
import { serviceDetails } from "@/lib/service-details";

const siteUrl = "https://www.example.com"; // TODO: replace with real production domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/commercial",
    "/about",
    "/areas",
    "/contact",
    "/faq",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = Object.keys(serviceDetails).map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
