import base from "../providence.module.css";
import styles from "./InvestingTimeline.module.css";

// Completion refers to the linked deliverable, not scientific validation or
// commercial traction. Keep future milestones framed as objectives.
const milestones = [
  {
    id: "thesis",
    status: "Published",
    delivered: true,
    title: "The Coherence Thesis",
    description:
      "Nine complementary volumes set out the research and design foundation for Providence.",
    href: "https://www.coherence-thesis.com/",
    linkLabel: "Read the thesis",
  },
  {
    id: "reader",
    status: "Launched",
    delivered: true,
    title: "Reading and listening platform",
    description:
      "A public platform makes the manuscripts accessible through reading, search, and narrated editions.",
    href: "https://www.coherence-thesis.com/",
    linkLabel: "Explore the platform",
  },
  {
    id: "app-foundation",
    status: "Built",
    delivered: true,
    title: "Native app foundation",
    description:
      "Native iPhone and Apple Watch foundations include consent models and tested simulator workflows.",
    href: "https://github.com/genii-foundation/coherence-app",
    linkLabel: "View the app project",
  },
  {
    id: "app-mvp",
    status: "Next objective",
    delivered: false,
    title: "Providence App MVP",
    description:
      "Put a working coherence companion in participants’ hands and learn what they return to in daily practice.",
  },
  {
    id: "partner-retreat",
    status: "Upcoming",
    delivered: false,
    title: "First partner retreat",
    description:
      "Deliver the first Powered By Providence retreat, testing the experience and consent process while covering its full delivery costs.",
  },
  {
    id: "adoption",
    status: "Upcoming",
    delivered: false,
    title: "Sustained paid use",
    description:
      "Establish voluntary app subscriptions, practitioner referrals, and repeat partner programs that demonstrate durable demand.",
  },
];

export function InvestingTimeline() {
  return (
    <section
      className={styles.timeline}
      id="progress"
      aria-labelledby="progress-title"
    >
      <div className={base.contentFrame}>
        <div className={styles.heading}>
          <h2 id="progress-title">From published research to commercial proof.</h2>
          <p>
            GENII has published the research and built the first technical
            foundations. The next milestones establish practical usefulness,
            delivery economics, and durable demand.
          </p>
        </div>

        <ol className={styles.milestones} role="list" aria-label="Delivered milestones and next objectives">
          {milestones.map((milestone) => (
            <li
              key={milestone.id}
              className={styles.milestone}
              data-status={milestone.delivered ? "delivered" : "upcoming"}
            >
              <span className={styles.marker} aria-hidden="true">
                {milestone.delivered && (
                  <svg viewBox="0 0 12 12" fill="none" focusable="false">
                    <path d="m3 6 2 2 4-4" />
                  </svg>
                )}
              </span>
              <p className={styles.status}>{milestone.status}</p>
              <h3>{milestone.title}</h3>
              <p className={styles.description}>{milestone.description}</p>
              {milestone.href && (
                <a className={styles.evidence} href={milestone.href}>
                  {milestone.linkLabel}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
