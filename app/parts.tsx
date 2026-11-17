import Link from "next/link";
import type { ReactNode } from "react";

import { ActionArrow } from "./ActionArrow";
import { ContactTrigger } from "./ContactDialog";
import { SiteFooter } from "./SiteFooter";
import { deeperPages, ventures } from "./content";
import styles from "./v2.module.css";

/**
 * Page parts shared by the site v2 pages. Each is a thin wrapper over the
 * classes in v2.module.css, so a page reads as its content and little else.
 */

/** Root for every inner page: header spacer, main landmark, footer. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.tokens} ${styles.page}`} id="top">
      <div className="unified-header-spacer" aria-hidden="true" />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  body,
  children,
  eyebrow,
  lead,
  motif,
  title,
}: {
  body?: ReactNode;
  children?: ReactNode;
  eyebrow: string;
  lead: ReactNode;
  /** A decorative drawing for this page's visual world. */
  motif?: ReactNode;
  title: ReactNode;
}) {
  return (
    <section className={styles.hero} aria-labelledby="page-title">
      {motif ? (
        <div className={styles.motif} aria-hidden="true">
          {motif}
        </div>
      ) : null}
      <div className={styles.frame}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <div className={styles.heroGrid}>
          <h1 id="page-title">{title}</h1>
          <div className={styles.heroCopy}>
            <p className={styles.heroLead}>{lead}</p>
            {body ? <p className={styles.heroBody}>{body}</p> : null}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * A titled section. `intro` sits beside the heading; `children` run full width
 * beneath. Pass `panel` to set the section on the paper card.
 */
export function Section({
  children,
  eyebrow,
  id,
  intro,
  panel = false,
  title,
}: {
  children?: ReactNode;
  eyebrow: string;
  id: string;
  intro?: ReactNode;
  panel?: boolean;
  title: ReactNode;
}) {
  const content = (
    <>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <div className={styles.sectionHead}>
        <h2 id={`${id}-title`}>{title}</h2>
        {intro ? <div>{intro}</div> : null}
      </div>
      {children ? <div className={styles.sectionBody}>{children}</div> : null}
    </>
  );

  return (
    <section className={styles.section} id={id} aria-labelledby={`${id}-title`}>
      <div className={styles.frame}>
        {panel ? <div className={styles.panel}>{content}</div> : content}
      </div>
    </section>
  );
}

/**
 * The honesty label. Says what state the thing above it is really in, in the
 * founders' own terms: proposed, in development, not deployed.
 */
export function Status({
  children,
  label = "Status",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <aside className={styles.status} aria-label={label}>
      <strong>{label}</strong>
      <p>{children}</p>
    </aside>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className={styles.tag}>{children}</span>;
}

/** Label and explanation rows, optionally numbered. */
export function Rows({
  display = false,
  items,
  numbered = true,
}: {
  /** Set the labels in the display face, for names rather than categories. */
  display?: boolean;
  items: readonly { label: string; text: ReactNode }[];
  numbered?: boolean;
}) {
  const List = numbered ? "ol" : "ul";

  return (
    <List className={styles.rows} data-display={display} data-numbered={numbered}>
      {items.map((item, index) => (
        <li key={item.label}>
          {numbered ? (
            <span className={styles.rowNumber} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          ) : null}
          <span className={styles.rowLabel}>{item.label}</span>
          <span className={styles.rowText}>{item.text}</span>
        </li>
      ))}
    </List>
  );
}

export function Steps({
  columns,
  items,
}: {
  /** Fix the column count when the automatic fit would strand one step. */
  columns?: 3;
  items: readonly { label: string; text: string }[];
}) {
  return (
    <ol className={styles.steps} data-columns={columns}>
      {items.map((item) => (
        <li key={item.label}>
          <strong>{item.label}</strong>
          <span>{item.text}</span>
        </li>
      ))}
    </ol>
  );
}

/** A gold pill that sends the reader to work living elsewhere on the web. */
export function LinkButton({
  children,
  href,
  quiet = false,
}: {
  children: ReactNode;
  href: string;
  quiet?: boolean;
}) {
  const className = quiet ? `${styles.button} ${styles.buttonQuiet}` : styles.button;
  const content = (
    <>
      {children} <ActionArrow />
    </>
  );

  // Internal routes go through the router; anything else is a plain anchor.
  return href.startsWith("/") ? (
    <Link className={className} href={href}>
      {content}
    </Link>
  ) : (
    <a className={className} href={href}>
      {content}
    </a>
  );
}

export function ContactButton({ children }: { children: ReactNode }) {
  return (
    <ContactTrigger className={`${styles.button} ${styles.buttonQuiet}`}>
      {children} <ActionArrow />
    </ContactTrigger>
  );
}

/** The three ventures as cards. Each opens its own page. */
export function VentureCards() {
  return (
    <div className={styles.cardGrid}>
      {ventures.map((venture, index) => (
        <Link className={styles.card} href={venture.href} key={venture.name}>
          <span className={styles.cardNumber} aria-hidden="true">
            {index + 1}
          </span>
          <h3>{venture.name}</h3>
          <p className={styles.cardRole}>{venture.role}</p>
          <p>{venture.summary}</p>
          <p className={styles.cardDetail}>{venture.detail}</p>
          <span className={styles.cardAction}>
            Explore {venture.name} <ActionArrow />
          </span>
        </Link>
      ))}
    </div>
  );
}

/** Links to the pages behind the main story, minus the page being read. */
export function DeeperLinks({ current }: { current?: string }) {
  const pages = deeperPages.filter((page) => page.href !== current);

  return (
    <section className={styles.section} id="deeper" aria-labelledby="deeper-title">
      <div className={styles.frame}>
        <p className={styles.eyebrow}>Going deeper</p>
        <div className={styles.sectionHead}>
          <h2 id="deeper-title">Choose a question.</h2>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.cardGrid}>
            {pages.map((page) => (
              <Link className={styles.card} href={page.href} key={page.href}>
                <h3>{page.title}</h3>
                <p>{page.text}</p>
                <span className={styles.cardAction}>
                  Read <ActionArrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Motifs */

/**
 * Seven equal circles, six around one, each touching its neighbours. The deck
 * uses this figure for BOW Media's mark and behind the Seven Initiates.
 */
export function SevenCircles() {
  const radius = 16;
  const ring = Array.from({ length: 6 }, (_, index) => {
    const angle = (Math.PI / 3) * index - Math.PI / 2;
    return {
      cx: 50 + 2 * radius * Math.cos(angle),
      cy: 50 + 2 * radius * Math.sin(angle),
    };
  });

  return (
    <svg fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={radius} />
      {ring.map(({ cx, cy }) => (
        <circle cx={cx.toFixed(3)} cy={cy.toFixed(3)} key={`${cx}-${cy}`} r={radius} />
      ))}
    </svg>
  );
}

/** Providence's figure: separate points, and the lines by which they meet. */
export function Constellation() {
  const points = [
    [50, 8],
    [86, 28],
    [92, 68],
    [58, 92],
    [20, 80],
    [8, 40],
    [50, 50],
    [34, 30],
    [68, 60],
  ] as const;
  const lines = [
    [0, 7],
    [7, 5],
    [7, 6],
    [6, 8],
    [8, 2],
    [8, 3],
    [6, 4],
    [0, 1],
    [1, 8],
    [5, 4],
    [1, 6],
  ] as const;

  return (
    <svg fill="none" stroke="currentColor" strokeWidth="0.4" viewBox="0 0 100 100">
      {lines.map(([from, to]) => (
        <line
          key={`${from}-${to}`}
          x1={points[from][0]}
          x2={points[to][0]}
          y1={points[from][1]}
          y2={points[to][1]}
        />
      ))}
      {points.map(([cx, cy]) => (
        <circle cx={cx} cy={cy} fill="currentColor" key={`${cx}-${cy}`} r="1.4" stroke="none" />
      ))}
      <circle cx="50" cy="50" r="44" strokeDasharray="1 3" />
    </svg>
  );
}

/** The foundation's figure: one flame held inside a ring. "GENII keeps the fire." */
export function Hearth() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="44" />
      <circle cx="50" cy="50" r="30" strokeDasharray="1 3" />
      <path d="M50 24c9 12 15 20 15 30a15 15 0 0 1-30 0c0-6 3-11 7-15 1 5 3 8 6 9-2-9-1-17 2-24Z" />
    </svg>
  );
}
