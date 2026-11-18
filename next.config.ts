import type { NextConfig } from "next";

// The managed preview broker serves the dev server from its own HTTPS origin
// and passes that origin in PASEO_PREVIEW_ORIGIN. Next blocks dev-only requests
// (hot reload, dev assets) from origins it does not know, so the preview's
// hostname is allowed here. Unset outside a preview, this changes nothing.
const previewOrigin = process.env.PASEO_PREVIEW_ORIGIN;
const previewHost = previewOrigin ? new URL(previewOrigin).hostname : undefined;

const nextConfig: NextConfig = {
  allowedDevOrigins: previewHost ? [previewHost] : [],
  // Addresses used by the first draft and by the pitch deck's planning notes.
  // The foundation page merged into the home page; BOW Media became BOW.
  async redirects() {
    return [
      { source: "/foundation", destination: "/", permanent: false },
      { source: "/bow-media", destination: "/bow", permanent: false },
    ];
  },
};

export default nextConfig;
