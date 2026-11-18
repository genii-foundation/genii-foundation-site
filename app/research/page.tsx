import type { Metadata } from "next";

import { links } from "../content";
import {
  DeeperLinks,
  LinkButton,
  PageHero,
  PageShell,
  Rows,
  Section,
  Status,
} from "../parts";
import styles from "../v2.module.css";

export const metadata: Metadata = {
  title: "The Coherence Thesis as Research | GENII Foundation",
  description:
    "The Coherence Thesis is GENII's intellectual infrastructure: nine volumes read as a research program with four questions that can be tested.",
  alternates: { canonical: "/research" },
};

const questions = [
  {
    label: "Development",
    text: "Can deliberate practice improve discernment and self-regulation?",
  },
  {
    label: "Relationship",
    text: "Can more mature relational environments support trust and collaboration?",
  },
  {
    label: "Coordination",
    text: "Can consenting tools help match capacity, need, and opportunity?",
  },
  {
    label: "Regeneration",
    text: "Can these collaborations produce observable benefit for communities and ecologies?",
  },
] as const;

/* One line per volume, from the thesis catalog's own overview of each. */
const volumes = [
  {
    label: "I. Humanity's Most Viable Future",
    text: "Extraction spends down the living ground it needs. Coherence keeps physiology, relationship, intelligence, and institutions aligned enough to act under pressure.",
  },
  {
    label: "II. Wielding Intelligence",
    text: "Intelligence is relational, not private property.",
  },
  {
    label: "III. The Providence Imperative",
    text: "Trust, care, wisdom, and action must become legible and portable without becoming coercion or surveillance.",
  },
  {
    label: "IV. Architecting Providence",
    text: "The volume distinguishes proposals from construction and names what remains unbuilt.",
  },
  {
    label: "V. Purposeful",
    text: "Contribution becomes possible when human capacities are recognized, cultivated, and connected.",
  },
  {
    label: "VI. The Nest",
    text: "The architecture contracts to its smallest working container.",
  },
  {
    label: "VII. Presencing Genius",
    text: "The Seven Initiates, with consent, appeal, exit, and safeguarding made part of the practice.",
  },
  {
    label: "VIII. A Misanthropic Artifice",
    text: "Its factual accounting still requires claim-level verification.",
  },
  {
    label: "IX. The Cardinal Scale",
    text: "Land, Doors, Membrane, currency, governance, and community remain design commitments until the site, law, safeguards, and implementation are verified.",
  },
] as const;

export default function ResearchPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Going deeper · The Coherence Thesis"
        title="Intellectual infrastructure."
        lead="A research program, not a demand for belief."
        body="The Coherence Thesis is the map behind the three ventures. It is published in nine volumes."
      >
        <div className={styles.actions}>
          <LinkButton href={links.thesis}>Read the thesis</LinkButton>
        </div>
      </PageHero>

      <Section
        id="questions"
        eyebrow="Four questions"
        title="What the work sets out to learn."
        panel
        intro={
          <p>
            The thesis frames its central claims as questions that work with real
            people can answer.
          </p>
        }
      >
        <Rows items={questions} />
        <Status label="Standard of evidence">
          A credible thesis distinguishes principles, predictions, experiments,
          observations, and revision. These questions are open. Pilots and measurable
          outcomes have to answer them.
        </Status>
      </Section>

      <Section
        id="volumes"
        eyebrow="Nine volumes"
        title="The published thesis."
        intro={
          <p>
            The volumes mark their own limits. Several say outright which parts are
            proposals, which are designs, and which still need verification.
          </p>
        }
      >
        <Rows display items={volumes} numbered={false} />
      </Section>

      <DeeperLinks current="/research" />
    </PageShell>
  );
}
