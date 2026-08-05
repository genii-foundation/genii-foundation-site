"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ContactTrigger } from "./ContactDialog";

const navigationItems = [
  { href: "/", label: "Foundation" },
  { href: "/principles", label: "Principles" },
  { href: "/investing", label: "Investing" },
] as const;

export type SectionNavigationItem = {
  href: string;
  label: string;
};

export function PrimaryNavigation({
  sectionItems = [],
}: {
  sectionItems?: readonly SectionNavigationItem[];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSectionHref, setActiveSectionHref] = useState<string | null>(null);
  const routeTransitionTimerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (routeTransitionTimerRef.current !== null) {
        window.clearTimeout(routeTransitionTimerRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    document
      .querySelector<HTMLElement>('header[data-toolbar-state]')
      ?.removeAttribute("aria-busy");
  }, [pathname]);

  const navigateFromFoundation = (
    event: MouseEvent<HTMLAnchorElement>,
    route: string,
  ) => {
    if (
      pathname !== "/" ||
      route === "/" ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const foundation = document.querySelector<HTMLElement>(".atlas-site");
    if (!foundation) return;

    event.preventDefault();
    if (routeTransitionTimerRef.current !== null) return;

    foundation.dataset.routeLeaving = "true";
    document.querySelector<HTMLElement>(".site-header")?.setAttribute("aria-busy", "true");
    routeTransitionTimerRef.current = window.setTimeout(() => {
      routeTransitionTimerRef.current = null;
      router.push(route);
    }, 540);
  };

  useEffect(() => {
    if (sectionItems.length === 0) return;

    const sectionTargets = sectionItems.flatMap(({ href }) => {
      const id = href.startsWith("#") ? href.slice(1) : null;
      const element = id ? document.getElementById(id) : null;
      return element ? [{ element, href }] : [];
    });
    const pageTop = document.querySelector<HTMLElement>("main > section:first-of-type");
    const targets: Array<{
      element: HTMLElement;
      href: string | null;
    }> = pageTop
      ? [{ element: pageTop, href: null }, ...sectionTargets]
      : sectionTargets;
    const visibleTargets = new Set<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) visibleTargets.add(element);
          else visibleTargets.delete(element);
        }

        let current: (typeof targets)[number] | undefined;
        for (const target of targets) {
          if (visibleTargets.has(target.element)) current = target;
        }
        if (current) setActiveSectionHref(current.href);
      },
      {
        rootMargin: "-24% 0px -66% 0px",
        threshold: 0,
      },
    );

    for (const { element } of targets) observer.observe(element);
    return () => observer.disconnect();
  }, [sectionItems]);

  return (
    <div className="navigation-stack">
      <nav aria-label="Primary navigation" className="primary-navigation">
        {navigationItems.map(({ href, label }) => (
          <Link
            aria-current={pathname === href ? "page" : undefined}
            href={href}
            key={href}
            onClick={(event) => navigateFromFoundation(event, href)}
          >
            {label}
          </Link>
        ))}
        <ContactTrigger>Contact</ContactTrigger>
      </nav>

      {sectionItems.length > 0 ? (
        <nav aria-label="On this page" className="section-navigation">
          {sectionItems.map(({ href, label }) => (
            <a
              aria-current={activeSectionHref === href ? "location" : undefined}
              href={href}
              key={href}
              onClick={() => setActiveSectionHref(href)}
            >
              <span aria-hidden="true" className="section-navigation-dot" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
