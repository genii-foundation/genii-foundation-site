import type { Metadata } from "next";

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
  title: "Human Sovereignty | GENII Foundation",
  description:
    "Human sovereignty is a design requirement: the commitments on consent, control, contestability, and care that any intelligence GENII helps build must meet.",
  alternates: { canonical: "/sovereignty" },
};

const requirements = [
  {
    label: "Consent",
    text: "Participation and sharing must be voluntary, specific, and revocable.",
  },
  {
    label: "Control",
    text: "People control their goals, disclosed context, and participation.",
  },
  {
    label: "Contestability",
    text: "Recommendations should be understandable, challengeable, and never treated as moral rankings.",
  },
  {
    label: "Care",
    text: "Private data and vulnerable people require meaningful protections and oversight.",
  },
] as const;

const tests = [
  {
    label: "Privacy",
    text: "Collect minimally; protect sensitive information; avoid unnecessary centralization.",
  },
  {
    label: "Consent",
    text: "Specific, informed, revocable permission before meaningful sharing.",
  },
  {
    label: "Autonomy",
    text: "Allow people to disagree with, override, and leave the system.",
  },
  {
    label: "Non-discrimination",
    text: "No reduction of human worth to a health, behavior, or coherence score.",
  },
  {
    label: "Accountability",
    text: "Human oversight, contestability, independent evaluation, and documented failures.",
  },
] as const;

const limits = [
  {
    label: "Trust",
    text: "AI cannot determine trustworthiness.",
  },
  {
    label: "Governance",
    text: "AI cannot make binding governance decisions.",
  },
  {
    label: "Data",
    text: "AI cannot operate on participant data without specific, ongoing, fully informed consent.",
  },
  {
    label: "Audit",
    text: "AI cannot be deployed in ways that are not fully auditable.",
  },
] as const;

export default function SovereigntyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Going deeper · Human sovereignty"
        title="Human sovereignty is a design requirement."
        lead="An intelligence system worthy of trust should expand a person's ability to choose, and never quietly assume authority over their life."
        body="The aim is superintelligence that co-evolves with human sovereignty."
      />

      <Section
        id="requirements"
        eyebrow="Four requirements"
        title="Consent, control, contestability, care."
      >
        <Rows items={requirements} />
      </Section>

      <Section
        id="test"
        eyebrow="Five tests"
        title="Sovereignty is an architectural test."
        panel
        intro={
          <p>
            A promise in a policy is easy to make. These are questions to ask of the
            system itself: what it collects, what it needs permission for, and whether a
            person can walk away.
          </p>
        }
      >
        <Rows items={tests} />
        <Status>
          These are design commitments to operationalize and independently verify. They
          are not claims of deployed safeguards.
        </Status>
      </Section>

      <Section
        id="ai"
        eyebrow="From the thesis"
        title="AI as infrastructure, never as sovereign."
        intro={
          <p>
            Volume IV of The Coherence Thesis sets four limits on what AI may do inside
            anything built on this architecture.
          </p>
        }
      >
        <Rows items={limits} numbered={false} />
      </Section>

      <Section
        id="principles"
        eyebrow="In force for Providence"
        title="Ten commitments govern Providence."
        intro={
          <>
            <p>
              The Providence Principles turn these requirements into ten specific
              commitments covering participant authority, consent, evidence, mission
              control, independent review, and open infrastructure.
            </p>
            <div className={styles.actions}>
              <LinkButton href="/principles">Read the ten principles</LinkButton>
              <LinkButton href="/providence" quiet>
                About Providence
              </LinkButton>
            </div>
          </>
        }
      />

      <DeeperLinks current="/sovereignty" />
    </PageShell>
  );
}
