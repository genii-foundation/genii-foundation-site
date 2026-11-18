import type { Metadata } from "next";

import { links } from "../content";
import {
  Keystone,
  LinkButton,
  PageHero,
  PageShell,
  Rows,
  Section,
  Status,
  Steps,
} from "../parts";
import styles from "../v2.module.css";

export const metadata: Metadata = {
  title: "Providence | GENII Foundation",
  description:
    "Providence is GENII's coordination venture: a synchronicity engine, built with Terran Labs, heading toward one operating system for personal and social life.",
  alternates: { canonical: "/providence" },
};

/*
 * This page says what Providence is and where it is going, in the deck's
 * words. It does not describe the products: those are Terran Labs' own, and
 * the Terran Labs site shows them far better than a summary here could. One
 * paragraph and one link send the reader there.
 */

const howItWorks = [
  { label: "Plan", text: "Your intentions and direction." },
  { label: "Reflect", text: "A council you choose." },
  { label: "Share", text: "Only what you release." },
  { label: "Meet", text: "The right people and work." },
] as const;

const direction = [
  {
    label: "Near term",
    text: "Planner, council, and connection, with consent-based coherence sensing in Vorton.",
  },
  {
    label: "Long term",
    text: "Individual, interpersonal, collective, and ecological intelligence.",
  },
] as const;

export default function ProvidencePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Venture three · Coordination"
        title="Providence."
        subtitle="Intelligence that increases agency."
        lead="A synchronicity engine, built with Terran Labs."
        body="Standalone tools are proven first, then converge into one operating system for personal and social life, where people's intentions can find one another."
        figure={<Keystone />}
      >
        <div className={styles.actions}>
          <LinkButton href={links.terranLabs}>TerranLabs.com</LinkButton>
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
        id="direction"
        eyebrow="Where it is going"
        title="Proven alone, then joined."
        panel
      >
        <Rows display items={direction} numbered={false} />
        <Status>
          A proposed integration, not a finished product. Relationships with Terran Labs
          are still being finalized.
        </Status>
      </Section>

      <Section
        id="terran-labs"
        eyebrow="Built with Terran Labs"
        title="See the work itself."
        intro={
          <>
            <p>
              Terran Labs builds the tools Providence will join: Vorton, Freed, Vorteo,
              and SYN3H. Each stands on its own today, and GENII does not operate them.
            </p>
            <p>The Terran Labs site shows what each one is and where it stands.</p>
            <div className={styles.actions}>
              <LinkButton href={links.terranLabs}>Explore TerranLabs.com</LinkButton>
            </div>
          </>
        }
      />

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
    </PageShell>
  );
}
