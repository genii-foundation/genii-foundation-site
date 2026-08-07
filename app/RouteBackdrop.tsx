"use client";

import { usePathname } from "next/navigation";

/**
 * The page backgrounds used to live on each route's own root element, so a
 * navigation unmounted one painting and mounted the next with no overlap. This
 * layer sits in the root layout instead, survives the route change, and holds
 * both palettes at once so one can fade into the other.
 */
export function RouteBackdrop() {
  const pathname = usePathname();
  const palette = pathname === "/" ? "foundation" : "providence";

  return (
    <div aria-hidden="true" className="route-backdrop" data-palette={palette}>
      <div className="route-backdrop-layer route-backdrop-foundation" />
      <div className="route-backdrop-layer route-backdrop-providence" />
    </div>
  );
}
