import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://genii.foundation",
    },
    {
      url: "https://genii.foundation/investing",
    },
    {
      url: "https://genii.foundation/principles",
    },
  ];
}
