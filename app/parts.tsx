import Image from "next/image";
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
  figure,
  lead,
  motif,
  title,
}: {
  body?: ReactNode;
  children?: ReactNode;
  eyebrow: string;
  /** A designed figure for the right half. Copy then stacks on the left. */
  figure?: ReactNode;
  lead: ReactNode;
  /** A decorative drawing for this page's visual world. */
  motif?: ReactNode;
  title: ReactNode;
}) {
  if (figure) {
    return (
      <section className={styles.hero} id="intro" aria-labelledby="page-title">
        <div className={styles.frame}>
          <div className={styles.heroSplit}>
            <div>
              <p className={styles.eyebrow}>{eyebrow}</p>
              <h1 id="page-title">{title}</h1>
              <p className={styles.heroLead}>{lead}</p>
              {body ? <p className={styles.heroBody}>{body}</p> : null}
              {children}
            </div>
            <div className={styles.heroFigure}>{figure}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.hero} id="intro" aria-labelledby="page-title">
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

/* ------------------------------------------------------ Hero figures */

/** BOW: three covers, one from each shelf, the flagship nearest the reader. */
export function CoverFan() {
  const covers = [
    { file: "08-kids-108", title: "108" },
    { file: "06-teen-yo-where-did-all-the-elders-go", title: "Yo, Where Did All the Elders Go?" },
    { file: "01-adult-the-coherence-thesis", title: "The Coherence Thesis" },
  ] as const;

  return (
    <>
      <div className={styles.fan}>
        {covers.map((cover) => (
          <Image
            alt={`Cover of ${cover.title}`}
            height={960}
            key={cover.file}
            priority
            sizes="(max-width: 900px) 40vw, 14rem"
            src={`/bow/${cover.file}.jpg`}
            width={640}
          />
        ))}
      </div>
      <p className={styles.figureCaption}>For children, teenagers, and adults.</p>
    </>
  );
}

/**
 * Purposeful: three doorways. The thesis calls the ways in "Doors", and the
 * Seven Initiates sit behind all three.
 */
export function ThreeDoors() {
  const doors = [
    { x: 20, name: "Study", kind: "Curriculum" },
    { x: 120, name: "Mentorship", kind: "Referral network" },
    { x: 220, name: "Gatherings", kind: "Retreats" },
  ] as const;

  return (
    <svg
      aria-label="Three doorways into Purposeful: study, mentorship, and gatherings"
      className={styles.drawing}
      role="img"
      viewBox="0 0 300 250"
    >
      {doors.map((door) => (
        <g key={door.name}>
          {/* The doorway, with a smaller arch inside it for depth. */}
          <path
            d={`M${door.x} 190V78a30 30 0 0 1 60 0V190`}
            fill="rgba(255,253,247,0.55)"
            stroke="currentColor"
            strokeWidth="0.9"
          />
          <path
            d={`M${door.x + 9} 190V80a21 21 0 0 1 42 0V190`}
            fill="none"
            stroke="currentColor"
            strokeDasharray="1 3"
            strokeWidth="0.7"
          />
          <circle cx={door.x + 30} cy="96" fill="currentColor" r="2.2" />
          <text fontSize="15" textAnchor="middle" x={door.x + 30} y="214">
            {door.name}
          </text>
          <text className={styles.drawingLabel} fontSize="5.4" textAnchor="middle" x={door.x + 30} y="228">
            {door.kind}
          </text>
        </g>
      ))}
      <line stroke="currentColor" strokeWidth="0.9" x1="6" x2="294" y1="190" y2="190" />
      <text className={styles.drawingLabel} fontSize="5.4" textAnchor="middle" x="150" y="22">
        Three ways in
      </text>
    </svg>
  );
}

/**
 * The Seven Initiates as seven equal circles. Providence sits at the centre:
 * the thesis calls it "the prior six made actual".
 */
export function InitiatesFigure() {
  const radius = 46;
  const outer = ["Listening", "Intimacy", "Balance", "Art & Alchemy", "Embodiment", "Worship"];
  const ring = outer.map((name, index) => {
    const angle = (Math.PI / 3) * index - Math.PI / 2;
    return {
      name,
      cx: 150 + 2 * radius * Math.cos(angle),
      cy: 150 + 2 * radius * Math.sin(angle),
    };
  });

  return (
    <svg
      aria-label="The Seven Initiates: Listening, Intimacy, Balance, Art and Alchemy, Embodiment and Worship around Providence"
      className={styles.drawing}
      role="img"
      viewBox="0 0 300 300"
    >
      {[{ name: "Providence", cx: 150, cy: 150 }, ...ring].map(({ name, cx, cy }, index) => (
        <g key={name}>
          <circle
            cx={cx.toFixed(2)}
            cy={cy.toFixed(2)}
            fill={index === 0 ? "rgba(128,106,63,0.12)" : "rgba(255,253,247,0.5)"}
            r={radius}
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <text fontSize="12.5" textAnchor="middle" x={cx.toFixed(2)} y={(cy + 4).toFixed(2)}>
            {name}
          </text>
        </g>
      ))}
    </svg>
  );
}

/**
 * Providence: the keystone from the deck. Four standalone products, pictured
 * with public demonstration images, joined by one disc where they meet.
 */
export function Keystone() {
  const pieces = [
    { file: "freed-feed", name: "Freed", line: "Liberating legacy social media." },
    { file: "vorton-council-small", name: "Vorton", line: "Sovereign life OS." },
    { file: "vorteo-profiles", name: "Vorteo", line: "Open-source agent platform." },
    { file: "syn3h-world", name: "SYN3H", line: "Next-generation social experiences." },
  ] as const;

  return (
    <div className={styles.keystone}>
      {pieces.map((piece) => (
        <figure key={piece.name}>
          <Image
            alt={`${piece.name}, shown with demonstration data`}
            height={600}
            sizes="(max-width: 900px) 45vw, 16rem"
            src={`/providence/${piece.file}.jpg`}
            width={800}
          />
          <figcaption>
            <strong>{piece.name}</strong>
            <span>{piece.line}</span>
          </figcaption>
        </figure>
      ))}
      <div className={styles.keystoneDisc}>
        <strong>Providence</strong>
        <em>Synchronicity, by design</em>
      </div>
    </div>
  );
}
