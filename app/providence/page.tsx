import type { Metadata } from "next";
import Image from "next/image";

import { links } from "../content";
import {
  Constellation,
  DeeperLinks,
  LinkButton,
  PageHero,
  PageShell,
  Section,
  Status,
  Steps,
  Tag,
} from "../parts";
import styles from "../v2.module.css";

export const metadata: Metadata = {
  title: "Providence | GENII Foundation",
  description:
    "Providence is GENII's coordination venture: a synchronicity engine, built with Terran Labs, heading toward one operating system for personal and social life.",
  alternates: { canonical: "/providence" },
};

const howItWorks = [
  { label: "Plan", text: "Your intentions and direction." },
  { label: "Reflect", text: "A council you choose." },
  { label: "Share", text: "Only what you release." },
  { label: "Meet", text: "The right people and work." },
] as const;

const firstExperience = [
  {
    title: "Personal planner",
    text: "Goals, values, priorities, and chosen context.",
  },
  {
    title: "Council and reflection",
    text: "AI-assisted consideration, never imposed authority.",
  },
  {
    title: "Consent-based connection",
    text: "User-controlled discovery and introductions.",
  },
] as const;

/*
 * The products are Terran Labs' own. The site says what each is in a line and
 * sends the reader to it; it does not re-describe them at length.
 */
const products = [
  {
    name: "Vorton",
    text: "Sovereign life OS.",
    action: "Open Vorton",
    href: links.vorton,
  },
  {
    name: "Freed",
    text: "Liberating legacy social media.",
    action: "Open Freed",
    href: links.freed,
  },
  {
    name: "Vorteo",
    text: "Open-source agent platform.",
    action: "Open Vorteo",
    href: links.vorteo,
  },
  // The owner asked that SYN3H be described as a movement, not a single artifact.
  {
    name: "SYN3H",
    text: "Next-generation social experiences.",
    action: "TerranLabs.com",
    href: links.terranLabs,
  },
] as const;

const horizon = ["Individual", "Interpersonal", "Collective", "Ecological"] as const;

export default function ProvidencePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Venture three · Coordination"
        title="Providence. Intelligence that increases agency."
        lead="A synchronicity engine, built with Terran Labs."
        body="Standalone tools are proven first, then converge into one operating system for personal and social life, where people's intentions can find one another."
        motif={<Constellation />}
      >
        <div className={styles.actions}>
          <LinkButton href="#building" quiet>
            See what is built
          </LinkButton>
        </div>
      </PageHero>

      <Section
        id="how"
        eyebrow="How it works"
        title="From your own intentions to the people who share them."
        intro={
          <p>
            Providence starts with one person&apos;s own direction and only then looks
            outward. By design, nothing leaves a person&apos;s space unless they choose
            to share it.
          </p>
        }
      >
        <Steps items={howItWorks} />
      </Section>

      <Section
        id="first"
        eyebrow="Near term"
        title="The first product experience."
        panel
        intro={
          <p>
            A concrete planner, council, and connection experience. This is the
            near-term focus.
          </p>
        }
      >
        <div className={styles.cardGrid}>
          {firstExperience.map((item, index) => (
            <article className={styles.card} key={item.title}>
              <span className={styles.cardNumber} aria-hidden="true">
                {index + 1}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="building"
        eyebrow="What Terran Labs is building"
        title="Proven separately, then brought together."
        intro={
          <>
            <p>
              Each tool stands alone. Proven separately, they converge into Providence.
            </p>
            <p>
              That is an ambitious claim. Ambitious claims are substantiated by proving
              the individual pieces, which is the work underway now.
            </p>
            <div className={styles.actions}>
              <LinkButton href={links.terranLabs} quiet>
                TerranLabs.com
              </LinkButton>
            </div>
          </>
        }
      >
        <figure className={styles.screenshot}>
          <Image
            alt="Vorton's council view: four advisers around a table, each offering a short written position. The data shown is a fictional demonstration."
            height={1000}
            sizes="(max-width: 700px) 100vw, 67rem"
            src="/providence/vorton-council.webp"
            width={1600}
          />
          <figcaption>
            Vorton&apos;s council, shown with fictional demonstration data.
          </figcaption>
        </figure>
        <ul className={styles.products}>
          {products.map((product) => (
            <li key={product.name}>
              <strong>{product.name}</strong>
              <span>{product.text}</span>
              <LinkButton href={product.href}>{product.action}</LinkButton>
            </li>
          ))}
        </ul>
        <Status>
          A proposed integration, not a finished product. Freed, Vorton, Vorteo, and SYN3H are
          Terran Labs products at different stages of development, and GENII does not
          operate them. Product and entity relationships with Terran Labs are still
          being finalized.
        </Status>
      </Section>

      <Section
        id="coordination"
        eyebrow="Toward a coordination device"
        title="Helping people act together."
        intro={
          <p>
            With consent, Providence would connect shared intentions, complementary
            abilities, and coherent opportunities, helping people organize resources and
            act together.
          </p>
        }
      >
        <ol className={styles.chain}>
          <li>Shared intention</li>
          <li>Complementary capacity</li>
          <li>Coherent opportunity</li>
          <li>Collective action</li>
        </ol>
      </Section>

      <Section
        id="horizon"
        eyebrow="Long term"
        title="The research horizon."
        intro={
          <p>
            Individual, interpersonal, collective, and ecological intelligence. The
            first is the near-term focus. The other three are research.
          </p>
        }
      >
        <ol className={styles.chain}>
          {horizon.map((scale) => (
            <li key={scale}>{scale}</li>
          ))}
        </ol>
        <Status>
          Conceptual design, not deployed. The thesis itself says the full architecture
          is a design intention, with no public version operating.
        </Status>
      </Section>

      <Section
        id="sovereignty"
        eyebrow="The condition"
        title="Superintelligence with human sovereignty."
        panel
        intro={
          <>
            <p>
              An intelligence system worthy of trust should expand a person&apos;s
              ability to choose.
            </p>
            <p>
              Providence is held to design commitments on consent, control,
              contestability, and care, and to the ten Providence Principles.
            </p>
            <div className={styles.actions}>
              <LinkButton href="/sovereignty">Human sovereignty</LinkButton>
              <LinkButton href="/principles" quiet>
                The ten principles
              </LinkButton>
            </div>
          </>
        }
      />

      <Section
        id="coherence"
        eyebrow="Coherence sensing"
        title="Consent-based, and taking shape inside Vorton."
        intro={
          <>
            <Tag>In progress</Tag>
            <p>
              Coherence sensing gives people who consent a reflection of the experience
              they are creating together. Much of it is already built into Vorton, which
              is how we expect to bring it to people.
            </p>
            <p>
              The earlier open-source research, a consent-first ecosystem for
              interpersonal biometric measurement and reflection, remains public.
            </p>
            <div className={styles.actions}>
              <LinkButton href={links.coherenceApp} quiet>
                Follow the research on GitHub
              </LinkButton>
            </div>
          </>
        }
      />

      <DeeperLinks />
    </PageShell>
  );
}
