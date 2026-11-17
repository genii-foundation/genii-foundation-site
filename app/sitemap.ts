import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://genii.foundation" },
    { url: "https://genii.foundation/foundation" },
    { url: "https://genii.foundation/bow-media" },
    { url: "https://genii.foundation/purposeful" },
    { url: "https://genii.foundation/purposeful/seven-initiates" },
    { url: "https://genii.foundation/providence" },
    { url: "https://genii.foundation/sovereignty" },
    { url: "https://genii.foundation/coherence-economy" },
    { url: "https://genii.foundation/research" },
    { url: "https://genii.foundation/investing" },
    { url: "https://genii.foundation/principles" },
  ];
}
