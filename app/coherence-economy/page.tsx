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
  title: "The Coherence Economy | GENII Foundation",
  description:
    "A research proposition: can economic design reward care, reciprocity, and regeneration? Not a launched currency.",
  alternates: { canonical: "/coherence-economy" },
};

const proposition = [
  {
    label: "The question",
    text: "Can economic design reward durable flourishing rather than extraction and attention capture?",
  },
  {
    label: "The experiment",
    text: "Explore voluntary, privacy-preserving recognition of beneficial contribution and ecological outcomes.",
  },
  {
    label: "The boundaries",
    text: "Never equate health, productivity, biometrics, or algorithmic coherence with a person's worth or rights.",
  },
] as const;

const boundaries = [
  {
    label: "Never a price of entry",
    text: "Recognition may support reflection and voluntary trust. It may never become the price of bread, belonging, or a vote.",
  },
  {
    label: "Never an institutional score",
    text: "No institution may use it to determine provision, membership, or vote weight.",
  },
  {
    label: "Circulation, not a score",
    text: "The thesis treats coherence as a property of circulation between people, with no score attached to an individual.",
  },
] as const;

export default function CoherenceEconomyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Going deeper · The Coherence Economy"
        title="What if our economy rewarded care, reciprocity, and regeneration?"
        lead="A research proposition about what an economy could recognize and reward."
      />

      <Section
        id="proposition"
        eyebrow="The proposition"
        title="A question, an experiment, and its boundaries."
        panel
      >
        <Rows items={proposition} numbered={false} />
        <Status>
          A research proposition. It is not a launched currency or an established
          financial mechanism.
        </Status>
      </Section>

      <Section
        id="thesis"
        eyebrow="In the thesis"
        title="Meant literally, on a long horizon."
        intro={
          <>
            <p>
              The Coherence Thesis proposes a currency that recognizes presence, an
              individual state, and presencing, an event between people. The proposal is
              meant literally, and on a long horizon.
            </p>
            <p>
              The thesis is plain about where this stands. No mature medium of exchange
              exists today, the central claims are hypotheses to test, and the first real
              work is a study.
            </p>
            <div className={styles.actions}>
              <LinkButton href={links.thesis}>Read the thesis</LinkButton>
            </div>
          </>
        }
      />

      <Section
        id="boundaries"
        eyebrow="Boundaries against surveillance"
        title="What it may never become."
        intro={
          <p>
            An economy that measures people can be turned against them. The thesis sets
            these limits alongside the proposal.
          </p>
        }
      >
        <Rows items={boundaries} numbered={false} />
      </Section>

      <DeeperLinks current="/coherence-economy" />
    </PageShell>
  );
}
