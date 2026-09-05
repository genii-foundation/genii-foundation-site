"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ActionArrow } from "../ActionArrow";
import base from "../providence.module.css";
import { InvestingMilestoneArt } from "./InvestingMilestoneArt";
import styles from "./InvestingTimeline.module.css";

// Distinguish published work, active development, and future objectives.
// Illustrations describe the products and experiences, not verified outcomes.
const milestones = [
  {
    id: "thesis",
    status: "Published",
    title: "The Coherence Thesis",
    description:
      "Nine published volumes exploring coherence, consciousness, and the conditions for human flourishing.",
    href: "https://www.coherence-thesis.com/",
  },
  {
    id: "publisher",
    status: "Building now",
    title: "GENII Publisher",
    description:
      "Give any author or institution a thesis-caliber e-reader, tailored to their ideas, identity, and audience.",
  },
  {
    id: "providence",
    status: "Building now",
    title: "Providence App",
    description:
      "Two or more people record dialogue and biomarkers with shared consent, then receive customized AI feedback and coaching for growth and deeper presence.",
  },
  {
    id: "retreat",
    status: "Next objective",
    title: "First partner retreat",
    description:
      "Deliver a revenue-positive Powered By Providence retreat with shared consent and skilled guidance.",
  },
  {
    id: "community",
    status: "Future objective",
    title: "Community partnerships",
    description:
      "Support intentional communities in making presence, growth, and repair part of everyday life through ongoing partnerships.",
  },
  {
    id: "practice",
    status: "Future objective",
    title: "Sustained daily practice",
    description:
      "Earn continued use and voluntary subscriptions as participants carry shared practice into life beyond the retreat.",
  },
] as const;

export function InvestingTimeline() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    hasOverflow: false,
    canGoBack: false,
    canGoForward: false,
  });

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateScrollState = () => {
      const remaining = viewport.scrollWidth - viewport.clientWidth - viewport.scrollLeft;
      const next = {
        hasOverflow: viewport.scrollWidth > viewport.clientWidth + 1,
        canGoBack: viewport.scrollLeft > 1,
        canGoForward: remaining > 1,
      };
      setScrollState((previous) =>
        previous.hasOverflow === next.hasOverflow &&
        previous.canGoBack === next.canGoBack &&
        previous.canGoForward === next.canGoForward
          ? previous
          : next,
      );
    };

    updateScrollState();
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(viewport);
    if (viewport.firstElementChild) observer.observe(viewport.firstElementChild);
    viewport.addEventListener("scroll", updateScrollState, { passive: true });
    return () => {
      observer.disconnect();
      viewport.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  function scrollTo(left: number) {
    viewportRef.current?.scrollTo({
      left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  function advance(direction: -1 | 1) {
    const viewport = viewportRef.current;
    const firstMilestone = viewport?.querySelector("li");
    if (!viewport || !firstMilestone) return;

    const width = firstMilestone.getBoundingClientRect().width;
    const next = Math.round(viewport.scrollLeft / width) + direction;
    scrollTo(Math.max(0, next * width));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    // Keep normal link keyboard behavior; these shortcuts belong to the scroller.
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      advance(event.key === "ArrowLeft" ? -1 : 1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      scrollTo(event.key === "Home" ? 0 : event.currentTarget.scrollWidth);
    }
  }

  return (
    <section className={styles.timeline} id="progress" aria-labelledby="progress-title">
      <div className={base.contentFrame}>
        <div className={styles.heading}>
          <h2 className={styles.title} id="progress-title">Milestones.</h2>
          <p>Bootstrapped and moving forwards.</p>
        </div>
      </div>

      <div className={styles.ribbon}>
        <div className={styles.viewportFrame}>
          <div
            className={styles.viewport}
            data-overflow-left={scrollState.canGoBack}
            data-overflow-right={scrollState.canGoForward}
            ref={viewportRef}
            id="milestone-viewport"
            role="region"
            aria-label="GENII milestones"
            aria-describedby="milestone-scroll-help"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            <ol className={styles.milestones} role="list">
              {milestones.map((milestone, index) => (
                <li key={milestone.id} className={styles.milestone} data-milestone={milestone.id}>
                  <div className={styles.art}>
                    <InvestingMilestoneArt kind={milestone.id} />
                  </div>
                  <h3>
                    {"href" in milestone ? (
                      <a href={milestone.href}>
                        {milestone.title} <ActionArrow />
                      </a>
                    ) : milestone.title}
                  </h3>
                  <p className={styles.description}>{milestone.description}</p>
                  <div className={styles.step}>
                    <span className={styles.number} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.status} data-delivered={milestone.id === "thesis"}>
                      {milestone.status}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {scrollState.hasOverflow && (
          <div className={base.contentFrame}>
            <div className={styles.scrollControls}>
              <div className={styles.scrollButtons} role="group" aria-label="Explore the timeline">
                <button
                  className={styles.scrollButton}
                  type="button"
                  aria-label="Previous milestones"
                  aria-controls="milestone-viewport"
                  disabled={!scrollState.canGoBack}
                  onClick={() => advance(-1)}
                >
                  <span className={styles.previousArrow}><ActionArrow /></span>
                </button>
                <button
                  className={styles.scrollButton}
                  type="button"
                  aria-label="Next milestones"
                  aria-controls="milestone-viewport"
                  disabled={!scrollState.canGoForward}
                  onClick={() => advance(1)}
                >
                  <span className={styles.nextArrow}><ActionArrow /></span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <p className={styles.scrollHelp} id="milestone-scroll-help">
        Scroll horizontally to explore all {milestones.length} milestones. When the timeline is
        focused, use Left and Right Arrow to move, or Home and End to reach either end.
      </p>
    </section>
  );
}
