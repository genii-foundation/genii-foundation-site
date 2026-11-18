"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PrimaryNavigation, type SectionNavigationItem } from "./PrimaryNavigation";

// The sections a reader is most likely to jump to. The rest are reached by
// reading down the page. Keep this list short enough to fit the row beside the
// wordmark at desktop width: a link that does not fit cannot show as selected.
// The first link is the one selected at the top of the page.
const foundationSections = [
  { href: "#architecture", label: "Architecture" },
  { href: "#measure", label: "Enrichment" },
  { href: "#custodians", label: "Custodians" },
  { href: "#alliances", label: "Alliances" },
] as const;

// On-page links for the site v2 pages, keyed by route.
const pageSections: Record<string, readonly SectionNavigationItem[]> = {
  "/bow": [
    { href: "#studio", label: "Studio" },
    { href: "#catalog", label: "Catalog" },
    { href: "#flagship", label: "Flagship" },
    { href: "#publisher", label: "Publisher" },
  ],
  "/purposeful": [
    { href: "#ways-in", label: "Ways in" },
    { href: "#questions", label: "Questions" },
    { href: "#pathway", label: "Pathway" },
    { href: "#initiates", label: "Seven Initiates" },
  ],
  "/purposeful/seven-initiates": [
    { href: "#seven", label: "The seven" },
    { href: "#curriculum", label: "Curriculum" },
    { href: "#safeguards", label: "Safeguards" },
  ],
  "/providence": [
    { href: "#how", label: "How it works" },
    { href: "#first", label: "Near term" },
    { href: "#building", label: "Built" },
    { href: "#horizon", label: "Horizon" },
    { href: "#sovereignty", label: "Sovereignty" },
  ],
  "/sovereignty": [
    { href: "#requirements", label: "Requirements" },
    { href: "#test", label: "Tests" },
    { href: "#ai", label: "AI limits" },
    { href: "#principles", label: "Principles" },
  ],
  "/coherence-economy": [
    { href: "#proposition", label: "Proposition" },
    { href: "#thesis", label: "In the thesis" },
    { href: "#boundaries", label: "Boundaries" },
  ],
  "/research": [
    { href: "#questions", label: "Questions" },
    { href: "#volumes", label: "Volumes" },
  ],
};

const investingSections = [
  { href: "#structure", label: "Structure" },
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
      skipLabel: "Skip to the funding paths",
    };
  }

  if (pathname === "/principles") {
    return {
      sectionItems: [],
      skipLabel: "Skip to the Providence Principles",
    };
  }

  return {
    sectionItems: pageSections[pathname] ?? [],
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
