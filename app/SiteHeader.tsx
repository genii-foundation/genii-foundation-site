"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PrimaryNavigation, type SectionNavigationItem } from "./PrimaryNavigation";
import styles from "./providence.module.css";

const foundationSections = [
  { href: "#work", label: "Current work" },
  { href: "#mission", label: "Mission" },
  { href: "#fields", label: "Fields of work" },
] as const;

const investingSections = [
  { href: "#paths", label: "Capital paths" },
  { href: "#commercial", label: "Commercial model" },
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

  return (
    <>
      <a
        className={onFoundationPage ? "site-skip-link" : styles.skipLink}
        href="#main-content"
      >
        {skipLabel}
      </a>
      <header
        className={onFoundationPage ? "site-header" : styles.header}
        data-toolbar-state={onFoundationPage ? "expanded" : "compact"}
      >
        <div className={onFoundationPage ? "header-inner" : styles.headerInner}>
          <Link
            aria-label="GENII Foundation, home"
            className={onFoundationPage ? "header-brand" : styles.headerBrand}
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
