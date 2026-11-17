import type { NextConfig } from "next";

// The managed preview broker serves the dev server from its own HTTPS origin
// and passes that origin in PASEO_PREVIEW_ORIGIN. Next blocks dev-only requests
// (hot reload, dev assets) from origins it does not know, so the preview's
// hostname is allowed here. Unset outside a preview, this changes nothing.
const previewOrigin = process.env.PASEO_PREVIEW_ORIGIN;
const previewHost = previewOrigin ? new URL(previewOrigin).hostname : undefined;

const nextConfig: NextConfig = {
  allowedDevOrigins: previewHost ? [previewHost] : [],
};

export default nextConfig;
