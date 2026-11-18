import Image from "next/image";
import Link from "next/link";

import { ActionArrow } from "./ActionArrow";
import { SiteFooter } from "./SiteFooter";
import { links } from "./content";
import { ContactButton, LinkButton, Status, VentureCards } from "./parts";
import styles from "./v2.module.css";

/*
 * The Foundation page is the site's home, and it follows the pitch deck's main
 * line: the problem, the architecture (GENII and its three ventures), the
 * measure they share, the custodians, and how to ally with the work. Depth
 * lives on the venture pages and the pages behind them, so this page stays
 * short enough to read in one pass.
 */

const alliances = [
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
              <p>Can we develop rapidly enough to steward what we have made?</p>
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
                GENII keeps the fire: the research, principles, and stewardship behind
                every venture.
              </p>
            </div>
            <VentureCards />
            <p className={styles.closingLine}>
              Culture awakens possibility. Development cultivates capacity. Coordination
              turns both into contribution.
            </p>
            <Status label="Formation status">
              GENII is a foundation, and each venture carries its own business model. The
              foundation and the entities for its ventures are under legal design; this
              site describes an intended structure.
            </Status>
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
          className={`section-panel ${styles.block}`}
          id="custodians"
          aria-labelledby="custodians-title"
          style={{ marginTop: "var(--section-space)" }}
        >
          <p className={styles.eyebrow}>The Custodians</p>
          <div className={styles.sectionHead}>
            <h2 id="custodians-title">
              A partnership across technical invention and human-development research.
            </h2>
            <div>
              <p>
                A technical founder and a wisdom-keeper, working together because the
                two are more together than either alone.
              </p>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <div className={styles.custodians}>
              <article className={styles.custodian}>
                <Image
                  alt="Aubrey Falconer, drawn in soft charcoal"
                  height={900}
                  src="/custodians/aubrey-falconer.png"
                  width={675}
                />
                <h3>Aubrey Falconer</h3>
                <p>
                  Aubrey has written software running on over a billion devices and
                  helped found multiple successful technology companies. His work
                  synthesizes intentional communities, exponential technologies, and
                  entropic stability. He&apos;s building tools for less addictive social
                  media, more addictive long-form publications, and organized care for
                  some of the most vulnerable children on this planet. He also helps
                  teams scale technology in service of all life.
                </p>
                <LinkButton href={links.aubrey} quiet>
                  AubreyFalconer.com
                </LinkButton>
              </article>

              <article className={styles.custodian}>
                <Image
                  alt="Robert James Ryan III, drawn in soft charcoal"
                  height={900}
                  src="/custodians/robert-james-ryan-iii.png"
                  width={675}
                />
                <h3>Robert James Ryan III</h3>
                <p>
                  Robert is an artist, writer, researcher, and facilitator whose work
                  bridges consciousness, human development, and civilizational design.
                  Over thirty years, he has co-founded foundations exploring alternative
                  currencies, responsible psychoactive medicine practices, humane
                  technology, and regenerative civilization. His collected work, The
                  Atlas of Anthropos in Anamnesis, is devoted to remembering ourselves
                  completely and helping humanity and all life flourish.
                </p>
              </article>
            </div>
            <Status label="What comes next">
              The first funded stage must also build the scientific, legal, governance,
              and operating capacity required for execution.
            </Status>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.block}`}
          id="alliances"
          aria-labelledby="alliances-title"
        >
          <p className={styles.eyebrow}>Alliances</p>
          <div className={styles.sectionHead}>
            <h2 id="alliances-title">Help build the institution that will carry this vision.</h2>
            <div>
              <p>
                The research is written. The tools are running. The first ventures are
                under way.
              </p>
              <p>
                We are choosing partners who think in generations: patient capital and
                technical craft, building for the seventh generation from now.
              </p>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <div className={styles.cardGrid} data-columns="4">
              {alliances.map((alliance) => (
                <Link className={styles.card} href={alliance.href} key={alliance.title}>
                  <h3>{alliance.title}</h3>
                  <p>{alliance.text}</p>
                  <span className={styles.cardAction}>
                    {alliance.action} <ActionArrow />
                  </span>
                </Link>
              ))}
            </div>
            <p className={styles.closingLine}>
              We are building for returns that endure, with human agency at the center.
            </p>
            <div className={styles.actions} style={{ justifyContent: "center" }}>
              <ContactButton>Connect with us</ContactButton>
            </div>
          </div>
        </section>

        <p
          className={styles.closingLine}
          style={{ borderTop: 0, marginBottom: "var(--section-space)" }}
        >
          We are Earth learning to participate more intelligently in the ongoing service
          and evolution of life.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
