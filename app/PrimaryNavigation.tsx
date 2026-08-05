"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ContactTrigger } from "./ContactDialog";

const navigationItems = [
  { id: "work", label: "Work" },
  { id: "mission", label: "Mission" },
  { id: "fields", label: "Fields" },
  { id: "investing", label: "Investing" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof navigationItems)[number]["id"];

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
  const onFoundationPage = pathname === "/";
  const [activeId, setActiveId] = useState<SectionId | null>(null);

  useEffect(() => {
    if (!onFoundationPage) return;

    const sectionTargets = navigationItems.flatMap(({ id }) => {
      const element = document.getElementById(id);
      return element ? [{ element, id }] : [];
    });
    const topTargets = [
      document.querySelector<HTMLElement>(".header-spacer"),
      document.querySelector<HTMLElement>(".introduction"),
    ].flatMap((element) => (element ? [{ element, id: null }] : []));
    const targets: Array<{
      element: HTMLElement;
      id: SectionId | null;
    }> = [...topTargets, ...sectionTargets];
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
        if (current) setActiveId(current.id);
      },
      {
        rootMargin: "-28% 0px -62% 0px",
        threshold: 0,
      },
    );

    for (const { element } of targets) observer.observe(element);
    return () => observer.disconnect();
  }, [onFoundationPage]);

  return (
    <div className="navigation-stack">
      <nav aria-label="Primary navigation" className="primary-navigation">
        {navigationItems.map(({ id, label }) => {
          if (id === "contact" && onFoundationPage) {
            return (
              <ContactTrigger current={activeId === id} key={id}>
                {label}
              </ContactTrigger>
            );
          }

          if (id === "investing") {
            return (
              <a
                aria-current={pathname === "/investing" ? "page" : undefined}
                href="/investing"
                key={id}
              >
                {label}
              </a>
            );
          }

          const href = onFoundationPage ? `#${id}` : `/#${id}`;
          return (
            <a
              aria-current={activeId === id ? "location" : undefined}
              href={href}
              key={id}
              onClick={() => {
                if (onFoundationPage) setActiveId(id);
              }}
            >
              {label}
            </a>
          );
        })}
      </nav>

      {sectionItems.length > 0 ? (
        <nav aria-label="On this page" className="section-navigation">
          {sectionItems.map(({ href, label }) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
