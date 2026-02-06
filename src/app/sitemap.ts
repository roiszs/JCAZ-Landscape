import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.jcazlandscape.co",
      lastModified: new Date(),
    },
  ];
}
