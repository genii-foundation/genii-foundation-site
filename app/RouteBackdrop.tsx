"use client";

import { usePathname } from "next/navigation";

/**
 * The page backgrounds used to live on each route's own root element, so a
 * navigation unmounted one painting and mounted the next with no overlap. This
 * layer sits in the root layout instead, survives the route change, and holds
 * both palettes at once so one can fade into the other.
 */
function paletteFor(pathname: string) {
  if (pathname === "/") return "foundation";
  // The commitments are a long read, so they sit on flat paper rather than the
  // Providence gradient.
  if (pathname === "/principles") return "principles";
  return "providence";
}

export function RouteBackdrop() {
  const palette = paletteFor(usePathname());

  return (
    <div aria-hidden="true" className="route-backdrop" data-palette={palette}>
      <div className="route-backdrop-layer route-backdrop-foundation" />
      <div className="route-backdrop-layer route-backdrop-providence" />
      <div className="route-backdrop-layer route-backdrop-principles" />
    </div>
  );
}
