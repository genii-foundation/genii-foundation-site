import Image from "next/image";
import Link from "next/link";

import { ActionArrow } from "./ActionArrow";
import { ContactTrigger } from "./ContactDialog";
import { SiteFooter } from "./SiteFooter";
import { links } from "./content";
import { DeeperLinks, LinkButton, Status, Steps, VentureCards } from "./parts";
import styles from "./v2.module.css";

/*
 * The homepage is the one place that shows how everything fits together: the
 * foundation, the three ventures, the measure they share, and how each feeds
 * the next. Every venture and every deeper question opens its own page.
 */

const system = [
  { label: "Insight", text: "The thesis clarifies what to investigate." },
  { label: "Culture", text: "BOW Media makes wisdom culturally accessible." },
  { label: "Practice", text: "Purposeful turns interest into capacity." },
  { label: "Coordination", text: "Providence supports meaningful action." },
  { label: "Learning", text: "Evidence returns to the entire system." },
] as const;

const journey = [
  { label: "Discover", text: "A film awakens an interest in watershed restoration." },
  { label: "Develop", text: "Teaching and practice build understanding and readiness." },
  { label: "Connect", text: "The network reveals local mentors, expertise, and resources." },
  { label: "Contribute", text: "People organize a tangible restoration project." },
  { label: "Learn", text: "The outcome informs research, curriculum, and culture." },
  {
    label: "Demonstrate",
    text: "BOW Media shares the results as new stories, restarting discovery.",
  },
] as const;

const stages = [
  {
    tag: "Established",
    title: "Source material",
    text: "A substantial Coherence Thesis and a body of published and designed cultural work.",
  },
  {
    tag: "In development",
    title: "Current work",
    text: "Emerging Providence demonstrations. Purposeful's curriculum and the design of its developmental network.",
  },
  {
    tag: "Next",
    title: "First validation",
    text: "Working product experiences, real participants, documented learning, and carefully defined pilots.",
  },
  {
    tag: "Horizon",
    title: "Future research",
    text: "Extended relational intelligence, ecological coordination, and experimental economic design.",
  },
] as const;

const readers = [
  {
    title: "Support the foundation",
    text: "Philanthropic partners fund GENII itself: stewardship, research, governance, and public-benefit infrastructure.",
    href: "/investing#philanthropy",
    action: "The philanthropic path",
  },
  {
    title: "Invest in a venture",
    text: "Investors back one or more ventures. Each carries its own business model.",
    href: "/investing#investors",
    action: "The investor path",
  },
  {
    title: "Take part",
    text: "Purposeful is where practice happens: mentorship, small gatherings, and a year-long curriculum.",
    href: "/purposeful",
    action: "See Purposeful",
  },
  {
    title: "Try what is built",
    text: "Terran Labs is proving the tools behind Providence as standalone products you can open today.",
    href: "/providence#building",
    action: "See the tools",
  },
] as const;

export default function Home() {
  return (
    <div className={`atlas-site ${styles.tokens}`} id="top">
      <div className="header-spacer" aria-hidden="true" />

      <main className="content-frame" id="main-content">
        <section className="introduction" aria-labelledby="hero-title">
          <div className="introduction-grid">
            <h1 id="hero-title">The architecture of coherence.</h1>
            <div className="introduction-copy">
              <p>From developing the human being to coordinating the living world.</p>
              <p>One foundation. Three ventures. Culture, development, and coordination.</p>
            </div>
          </div>
        </section>

        <section
          className={`section-panel ${styles.block}`}
          id="problem"
          aria-labelledby="problem-title"
          style={{ marginTop: 0 }}
        >
          <p className={styles.eyebrow}>The problem</p>
          <div className={styles.sectionHead}>
            <h2 id="problem-title">Human capability has not kept pace with human power.</h2>
            <div>
              <p>
                We have built extraordinary systems for extending our reach, while
                underinvesting in the wisdom, relationships, and institutions needed to
                steward that power.
              </p>
              <p>Can we develop rapidly enough to steward what we have built?</p>
              <div className={styles.actions}>
                <LinkButton href={links.thesis}>Explore the thesis</LinkButton>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.block}`}
          id="architecture"
          aria-labelledby="architecture-title"
        >
          <p className={styles.eyebrow}>How it fits together</p>
          <div className={styles.sectionHead}>
            <h2 id="architecture-title">A coherent architecture in service to life.</h2>
          </div>
          <div className={styles.sectionBody}>
            <div className={styles.foundationBar}>
              <Image
                alt="GENII"
                height={238}
                src="/brand/genii-wordmark-black.png"
                width={1135}
              />
              <span>Vision &amp; Values</span>
              <p>
                GENII keeps the fire: the research, principles, and stewardship every
                venture draws on.
              </p>
              <Link className={styles.cardAction} href="/foundation" style={{ paddingTop: 0 }}>
                The foundation <ActionArrow />
              </Link>
            </div>
            <VentureCards />
            <p className={styles.closingLine}>
              Culture awakens possibility. Development cultivates capacity. Coordination
              turns both into contribution.
            </p>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.block}`}
          id="measure"
          aria-labelledby="measure-title"
        >
          <div className={styles.statement}>
            <p className={styles.eyebrow} style={{ color: "var(--gold-on-night)" }}>
              A different measure of success
            </p>
            <h2 id="measure-title" style={{ marginTop: "1.5rem" }}>
              Enrichment. <span>Not Engagement.</span>
            </h2>
            <hr />
            <p>Engagement measures the attention we capture.</p>
            <p>Enrichment asks what becomes possible in the lives we touch.</p>
            <p className={styles.statementClose}>
              We measure progress in the lives people lead beyond the platform.
            </p>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.block}`}
          id="system"
          aria-labelledby="system-title"
        >
          <p className={styles.eyebrow}>A living system</p>
          <div className={styles.sectionHead}>
            <h2 id="system-title">Each part feeds the next.</h2>
            <div>
              <p>
                Research sets the questions. Culture carries them to people. Practice
                builds the capacity to act on them. Coordination connects that capacity
                to real work, and what the work teaches returns to the research.
              </p>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <Steps items={system} />
            <Status label="What is proven">
              The flywheel is the hypothesis. Pilots and measurable outcomes must
              establish where it creates real value. Plainly: we need to test this with
              real people and see whether it helps them grow, collaborate, and contribute.
            </Status>
          </div>
        </section>

        <section
          className={`section-panel ${styles.block}`}
          id="journey"
          aria-labelledby="journey-title"
          style={{ marginTop: "var(--section-space)" }}
        >
          <p className={styles.eyebrow}>An illustrative future experience</p>
          <div className={styles.sectionHead}>
            <h2 id="journey-title">One life. A world of possible contribution.</h2>
            <div>
              <p>
                One way a single person might move through the whole architecture, told
                as an ecological restoration story.
              </p>
              <p>The goal is a more meaningful life beyond the platform.</p>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <Steps columns={3} items={journey} />
            <Status label="Illustration">
              This journey is an example of the intended experience. It describes no
              existing project or participant.
            </Status>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.block}`}
          id="status"
          aria-labelledby="status-title"
        >
          <p className={styles.eyebrow}>Where things stand</p>
          <div className={styles.sectionHead}>
            <h2 id="status-title">From intellectual foundation to demonstrable systems.</h2>
            <div>
              <p>
                The thesis is ambitious. The first stage should be specific, visible, and
                open to testing.
              </p>
              <p>
                The first funded phase should convert claims about possibility into
                evidence of use, value, safety, and impact.
              </p>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <div className={styles.cardGrid} data-columns="4">
              {stages.map((stage) => (
                <article className={styles.card} key={stage.title}>
                  <span className={styles.tag}>{stage.tag}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.block}`}
          id="paths"
          aria-labelledby="paths-title"
        >
          <p className={styles.eyebrow}>Find your way in</p>
          <div className={styles.sectionHead}>
            <h2 id="paths-title">Start from what brought you here.</h2>
          </div>
          <div className={styles.sectionBody}>
            <div className={styles.cardGrid} data-columns="4">
              {readers.map((reader) => (
                <Link className={styles.card} href={reader.href} key={reader.title}>
                  <h3>{reader.title}</h3>
                  <p>{reader.text}</p>
                  <span className={styles.cardAction}>
                    {reader.action} <ActionArrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DeeperLinks brings its own frame; the homepage frame already pads. */}
        <div style={{ margin: "0 -1.5rem" }}>
          <DeeperLinks />
        </div>

        <section className="contact section-panel" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Contact</p>
          <div className="contact-grid">
            <h2 id="contact-title">Help build what this vision requires.</h2>
            <div>
              <p>
                We seek partners who bring patient capital, technical craft, serious
                inquiry, and courageous culture, to turn a substantial body of research
                and design into a living, measurable, and economically sustainable model.
              </p>
              <ContactTrigger className="text-link">
                Contact GENII Foundation
              </ContactTrigger>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
