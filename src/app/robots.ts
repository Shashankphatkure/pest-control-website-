import type { MetadataRoute } from "next";

const siteUrl = "https://www.example.com"; // TODO: replace with real production domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
