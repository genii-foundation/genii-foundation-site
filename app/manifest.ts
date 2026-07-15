import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GENII Foundation",
    short_name: "GENII",
    description:
      "Research, culture, and infrastructure for a more coherent world.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0c0c",
    theme_color: "#0b0c0c",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
