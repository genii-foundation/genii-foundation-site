"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

import { ContactTrigger, useContactDialog } from "./ContactDialog";

const navigationItems = [
  { href: "/", label: "Foundation" },
  { href: "/principles", label: "Principles" },
  { href: "/investing", label: "Investing" },
] as const;

export type SectionNavigationItem = {
  href: string;
  label: string;
};

function ScrollArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16">
      <path d={direction === "left" ? "M10.5 3.5 6 8l4.5 4.5" : "m5.5 3.5 4.5 4.5-4.5 4.5"} />
    </svg>
  );
}

function ScrollableNavigation({
  ariaLabel,
  children,
  className,
}: {
  ariaLabel: string;
  children: ReactNode;
  className: string;
}) {
  const navigationRef = useRef<HTMLElement>(null);
  const [scrollState, setScrollState] = useState({ start: false, end: false });

  const updateScrollState = useCallback(() => {
    const navigation = navigationRef.current;
    if (!navigation) return;

    const maximumScroll = Math.max(0, navigation.scrollWidth - navigation.clientWidth);
    const nextState = {
      start: navigation.scrollLeft > 2,
      end: navigation.scrollLeft < maximumScroll - 2,
    };

    setScrollState((currentState) =>
      currentState.start === nextState.start && currentState.end === nextState.end
        ? currentState
        : nextState,
    );
  }, []);

  useEffect(() => {
    const navigation = navigationRef.current;
    if (!navigation) return;

    const resizeObserver = new ResizeObserver(updateScrollState);
    const mutationObserver = new MutationObserver(updateScrollState);
    resizeObserver.observe(navigation);
    mutationObserver.observe(navigation, { childList: true, subtree: true });
    navigation.addEventListener("scroll", updateScrollState, { passive: true });
    const animationFrame = window.requestAnimationFrame(updateScrollState);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      navigation.removeEventListener("scroll", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const navigation = navigationRef.current;
    if (!navigation) return;

    navigation.scrollBy({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      left:
        (direction === "left" ? -1 : 1) *
        Math.max(96, navigation.clientWidth * 0.72),
    });
  };

  return (
    <div
      className="navigation-scroll-region"
      data-overflow-end={scrollState.end ? "true" : undefined}
      data-overflow-start={scrollState.start ? "true" : undefined}
    >
      <nav aria-label={ariaLabel} className={className} ref={navigationRef}>
        {children}
      </nav>
      {scrollState.start ? (
        <button
          aria-label={`Scroll ${ariaLabel.toLowerCase()} left`}
          className="navigation-scroll-button navigation-scroll-button-start"
          onClick={() => scroll("left")}
          type="button"
        >
          <ScrollArrow direction="left" />
        </button>
      ) : null}
      {scrollState.end ? (
        <button
          aria-label={`Scroll ${ariaLabel.toLowerCase()} right`}
          className="navigation-scroll-button navigation-scroll-button-end"
          onClick={() => scroll("right")}
          type="button"
        >
          <ScrollArrow direction="right" />
        </button>
      ) : null}
    </div>
  );
}

export function PrimaryNavigation({
  sectionItems = [],
}: {
  sectionItems?: readonly SectionNavigationItem[];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { isOpen: isContactOpen } = useContactDialog();
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
      <ScrollableNavigation
        ariaLabel="Primary navigation"
        className="primary-navigation"
      >
        {navigationItems.map(({ href, label }) => (
          <Link
            aria-current={!isContactOpen && pathname === href ? "page" : undefined}
            href={href}
            key={href}
            onClick={(event) => navigateFromFoundation(event, href)}
          >
            {label}
          </Link>
        ))}
        <ContactTrigger>Contact</ContactTrigger>
      </ScrollableNavigation>

      {sectionItems.length > 0 ? (
        <ScrollableNavigation
          ariaLabel="On this page"
          className="section-navigation"
        >
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
        </ScrollableNavigation>
      ) : null}
    </div>
  );
}
