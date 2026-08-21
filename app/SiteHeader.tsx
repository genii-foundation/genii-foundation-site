"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PrimaryNavigation, type SectionNavigationItem } from "./PrimaryNavigation";

// Fields of work sits under Mission on the page, so it is reached by reading
// rather than by its own top-of-page link.
const foundationSections = [
  { href: "#work", label: "Current work" },
  { href: "#mission", label: "Mission" },
] as const;

const investingSections = [
  { href: "#paths", label: "Paths" },
  { href: "#commercial", label: "Model" },
  { href: "#architecture", label: "Architecture" },
  { href: "#invitation", label: "Diligence" },
] as const;

function Wordmark() {
  return (
    <Image
      alt="GENII"
      height={238}
      priority
      src="/brand/genii-wordmark-black.png"
      width={1135}
    />
  );
}

function getRouteChrome(pathname: string): {
  sectionItems: readonly SectionNavigationItem[];
  skipLabel: string;
} {
  if (pathname === "/") {
    return {
      sectionItems: foundationSections,
      skipLabel: "Skip to the main content",
    };
  }

  if (pathname === "/investing") {
    return {
      sectionItems: investingSections,
      skipLabel: "Skip to the investment case",
    };
  }

  if (pathname === "/principles") {
    return {
      sectionItems: [],
      skipLabel: "Skip to the Providence Principles",
    };
  }

  return {
    sectionItems: [],
    skipLabel: "Skip to the main content",
  };
}

export function SiteHeader() {
  const pathname = usePathname();
  const onFoundationPage = pathname === "/";
  const { sectionItems, skipLabel } = getRouteChrome(pathname);

  // The header's resting height is declared on the root, because the spacer that
  // reserves its space is elsewhere in the tree and must read the same value.
  // Flagging the route on the root directly, rather than matching it with :has(),
  // means the change is an ordinary restyle of the element that owns the
  // transition, so the height interpolates instead of snapping.
  useEffect(() => {
    document.documentElement.dataset.route = onFoundationPage
      ? "foundation"
      : "providence";
  }, [onFoundationPage]);

  return (
    <>
      <a
        className="site-skip-link"
        href="#main-content"
      >
        {skipLabel}
      </a>
      <header
        className="unified-header site-header"
        data-route={onFoundationPage ? "foundation" : "providence"}
        data-toolbar-state={onFoundationPage ? "expanded" : "compact"}
      >
        <div className="unified-header-inner header-inner">
          <Link
            aria-label="GENII Foundation, home"
            className="header-brand"
            href={onFoundationPage ? "#top" : "/"}
          >
            <Wordmark />
          </Link>
          <PrimaryNavigation sectionItems={sectionItems} />
        </div>
      </header>
    </>
  );
}
