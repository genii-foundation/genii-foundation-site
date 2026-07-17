"use client";

import { useEffect, useState } from "react";

const navigationItems = [
  { id: "work", label: "Work" },
  { id: "mission", label: "Mission" },
  { id: "fields", label: "Fields" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof navigationItems)[number]["id"];

export function PrimaryNavigation() {
  const [activeId, setActiveId] = useState<SectionId | null>(null);

  useEffect(() => {
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
  }, []);

  return (
    <nav aria-label="Primary navigation">
      {navigationItems.map(({ id, label }) => (
        <a
          aria-current={activeId === id ? "location" : undefined}
          href={`#${id}`}
          key={id}
          onClick={() => setActiveId(id)}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
