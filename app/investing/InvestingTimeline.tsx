"use client";

import { useEffect, useState } from "react";
import { ActionArrow } from "../ActionArrow";
import styles from "./InvestingTimeline.module.css";
import variants from "./InvestingTimelineVariants.module.css";

const layouts = [
  { id: "rail", label: "Editorial rail" },
  { id: "windows", label: "Product windows" },
  { id: "ribbon", label: "Continuous ribbon" },
] as const;

type TimelineLayout = (typeof layouts)[number]["id"];
const isTimelineLayout = (value: string | null): value is TimelineLayout =>
  layouts.some((layout) => layout.id === value);

// These are editorial illustrations, not screenshots of released products.
// Publication is delivered; Publisher and the app are being developed.
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
      "Two or more people record dialogue and biomarkers with shared consent, then receive customized AI feedback and coaching for presence, growth, and repair.",
  },
] as const;

function ThesisPreview() {
  return (
    <div className={[styles.preview, styles.thesisPreview].join(" ")} data-preview aria-hidden="true">
      <div className={styles.book}>
        <span className={styles.bookLabel}>Nine volumes</span>
        <span className={styles.bookTitle}>The<br />Coherence<br />Thesis</span>
        <svg className={styles.bookMark} viewBox="0 0 100 100" fill="none" focusable="false">
          <circle cx="37" cy="50" r="30" />
          <circle cx="63" cy="50" r="30" />
          <path d="M50 17v66M7 50h86" />
        </svg>
      </div>
      <span className={styles.previewCaption}>Published research</span>
    </div>
  );
}

function PublisherPreview() {
  return (
    <div className={[styles.preview, styles.publisherPreview].join(" ")} data-preview aria-hidden="true">
      <div className={[styles.edition, styles.editionBack].join(" ")}>
        <span className={styles.editionMonogram}>Aa</span>
        <span className={styles.printLines} />
      </div>
      <div className={[styles.edition, styles.editionFront].join(" ")}>
        <span className={styles.editionLabel}>Your publication</span>
        <span className={styles.editionTitle}>A world<br />of ideas.</span>
        <span className={styles.printLines} />
        <span className={styles.editionCredit}>GENII Publisher</span>
      </div>
      <span className={styles.previewCaption}>Reader concept</span>
    </div>
  );
}

function ProvidencePreview() {
  return (
    <div className={[styles.preview, styles.providencePreview].join(" ")} data-preview aria-hidden="true">
      <svg className={styles.dialogue} viewBox="0 0 360 240" fill="none" focusable="false">
        <g className={styles.presenceRings}>
          <circle cx="134" cy="83" r="56" />
          <circle cx="226" cy="83" r="56" />
          <circle cx="134" cy="83" r="43" />
          <circle cx="226" cy="83" r="43" />
        </g>
        <circle cx="134" cy="83" r="25" className={styles.participantOne} />
        <circle cx="226" cy="83" r="25" className={styles.participantTwo} />
        <path className={styles.voiceOne} d="M30 153h19c12 0 12-11 21-11s10 27 19 27 9-40 18-40 10 29 18 29 11-12 20-12 10 7 19 7h37" />
        <path className={styles.voiceTwo} d="M159 157h21c12 0 12-8 21-8s10 22 19 22 9-35 18-35 10 30 18 30 11-13 20-13 10 4 19 4h35" />
        <path className={styles.reflectionPath} d="M180 175v20m-4-4 4 4 4-4" />
      </svg>
      <span className={styles.reflectionLabel}>Reflect together</span>
      <span className={styles.previewCaption}>Shared experience concept</span>
    </div>
  );
}

const previews = {
  thesis: ThesisPreview,
  publisher: PublisherPreview,
  providence: ProvidencePreview,
};

export function InvestingTimeline() {
  const [layout, setLayout] = useState<TimelineLayout>("rail");
  const isReview = process.env.NODE_ENV === "development";

  // Local design review only. Keep the public page free of comparison controls.
  useEffect(() => {
    if (!isReview) return;
    const readLayout = () => {
      const requested = new URL(window.location.href).searchParams.get("timeline");
      setLayout(isTimelineLayout(requested) ? requested : "rail");
    };
    readLayout();
    window.addEventListener("popstate", readLayout);
    return () => window.removeEventListener("popstate", readLayout);
  }, [isReview]);

  function selectLayout(nextLayout: TimelineLayout) {
    setLayout(nextLayout);
    const url = new URL(window.location.href);
    url.searchParams.set("timeline", nextLayout);
    window.history.replaceState(null, "", url);
  }

  return (
    <section
      className={[styles.timeline, variants[layout] ?? ""].join(" ")}
      id="progress"
      aria-labelledby="progress-title"
      data-layout={layout}
    >
      {isReview && (
        <div className={variants.comparison}>
          <span>Compare timeline layouts</span>
          <div className={variants.choices} role="group" aria-label="Timeline layout">
            {layouts.map((option) => (
              <button
                className={variants.choice}
                key={option.id}
                type="button"
                aria-pressed={layout === option.id}
                aria-controls="milestone-viewport"
                onClick={() => selectLayout(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className={styles.heading}>
        <h2 className={styles.title} id="progress-title">Bootstrapped and moving forward.</h2>
        <p>
          We’ve funded the work ourselves. Join us in strengthening human connection
          and healing our relationship with increasingly powerful technology.
        </p>
      </div>

      <span className={styles.scrollHint} aria-hidden="true">Scroll to explore</span>
      <div
        className={styles.viewport}
        id="milestone-viewport"
        role="region"
        aria-label="Product milestones, scroll horizontally on smaller screens"
        tabIndex={0}
      >
        <ol className={styles.milestones} data-milestones role="list">
          {milestones.map((milestone, index) => {
            const Preview = previews[milestone.id];

            return (
              <li key={milestone.id} className={styles.milestone} data-milestone>
                <div className={styles.step} data-step>
                  <span className={styles.number} data-number aria-hidden="true">0{index + 1}</span>
                  <span className={styles.status} data-status data-delivered={milestone.id === "thesis"}>
                    {milestone.status}
                  </span>
                </div>
                {layout === "windows" && <Preview />}
                <h3>
                  {"href" in milestone ? (
                    <a href={milestone.href}>
                      {milestone.title} <ActionArrow />
                    </a>
                  ) : milestone.title}
                </h3>
                <p className={styles.description} data-description>{milestone.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
