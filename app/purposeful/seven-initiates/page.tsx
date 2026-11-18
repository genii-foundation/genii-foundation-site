import type { Metadata } from "next";

import { links } from "../../content";
import {
  DeeperLinks,
  InitiatesFigure,
  LinkButton,
  PageHero,
  PageShell,
  Rows,
  Section,
  Status,
} from "../../parts";
import styles from "../../v2.module.css";

export const metadata: Metadata = {
  title: "The Seven Initiates | GENII Foundation",
  description:
    "Listening, Intimacy, Balance, Art & Alchemy, Embodiment, Worship, Providence: the seven capacities at the heart of Purposeful's curriculum.",
  alternates: { canonical: "/purposeful/seven-initiates" },
};

/*
 * "Initiates" is the founders' deliberate spelling. Do not change it to
 * "Initiations". The short line for each is from the pitch deck; the longer
 * description is quoted or closely drawn from The Coherence Thesis, Volume III
 * (chapter 4) and Volume VII ("The Seven in Brief").
 */
const initiates = [
  {
    label: "Listening",
    short: "Attention, receptivity, and encounter.",
    text: "The gateway. The genuine act of receiving, allowing another's reality to alter one's own.",
  },
  {
    label: "Intimacy",
    short: "Relational honesty, trust, and presence.",
    text: "To be truly known and to truly know another, without collapsing into merger or retreating into defended isolation.",
  },
  {
    label: "Balance",
    short: "Discernment and dynamically integrated capacities.",
    text: "The capacity to hold opposites without premature resolution. A living body balances by moving: leaning, noticing, and returning.",
  },
  {
    label: "Art & Alchemy",
    short: "Creativity, expression, and transformation.",
    text: "The capacity to transform: to take what is given, including what is broken, and produce something that did not exist before.",
  },
  {
    label: "Embodiment",
    short: "Living intelligence expressed through the body.",
    text: "The capacity to be fully present in the body: to know one's physiological state and to regulate it with skill.",
  },
  {
    label: "Worship",
    short: "Reverence, devotion, and the value of life.",
    text: "The capacity for genuine devotion, which need not be religious: reverence for whatever gives us life.",
  },
  {
    label: "Providence",
    short: "Conscious contribution and coordinated flourishing.",
    text: "The capacity to give and to receive. The prior six made actual, and the name of the network itself.",
  },
] as const;

const safeguards = [
  {
    label: "Consent first",
    text: "A participant may pause, return, or decline. No sequence should outrank consent or individual need.",
  },
  {
    label: "A map, with no ranking",
    text: "A developmental map ranks no one. Nothing in this one may become a hierarchy of human worth.",
  },
  {
    label: "Limits on mentors",
    text: "Mentors may not diagnose, demand disclosure, isolate participants, claim spiritual authority over them, or make belonging conditional on obedience.",
  },
  {
    label: "A way out",
    text: "A participant may refuse a practice, change mentors, complain to an independent body, appeal a decision, and leave without penalty.",
  },
] as const;

export default function SevenInitiatesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Purposeful · The curriculum"
        title="The Seven Initiates."
        lead="Seven capacities at the heart of Purposeful's curriculum."
        body="The practice of presencing genius is applying the Seven Initiates to all of your interactions."
        figure={<InitiatesFigure />}
      />

      <Section
        id="seven"
        eyebrow="The seven"
        title="Each one a capacity a person can grow."
        intro={
          <p>
            Most readers already know what listening, intimacy, and embodiment are.
            The words carry their own power.
          </p>
        }
      >
        <Rows
          display
          items={initiates.map(({ label, short, text }) => ({
            label,
            text: (
              <>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{short}</strong>{" "}
                {text}
              </>
            ),
          }))}
        />
      </Section>

      <Section
        id="curriculum"
        eyebrow="In Purposeful"
        title="A year of study, carried by people."
        panel
        intro={
          <>
            <p>
              The Seven Initiates will be Purposeful&apos;s introductory curriculum: a
              shared pathway for new participants.
            </p>
            <p>
              As the network grows, teachings from teachers, elders, and practitioners
              will be curated within these seven domains. Participants&apos; interests
              will help connect them with relevant teachings, teachers, practices, and
              peers.
            </p>
            <div className={styles.actions}>
              <LinkButton href="/purposeful" quiet>
                Back to Purposeful
              </LinkButton>
            </div>
          </>
        }
      >
        <Status>
          The curriculum is written and ready to go. Enrollment has not opened. Teacher
          onboarding, discovery tools, and delivery will be tested in stages.
        </Status>
      </Section>

      <Section
        id="safeguards"
        eyebrow="How it is held"
        title="Practice that a person can refuse."
        intro={
          <p>
            Developmental work touches people where they are vulnerable. The thesis
            builds consent, appeal, exit, and safeguarding into the practice itself.
          </p>
        }
      >
        <Rows items={safeguards} numbered={false} />
        <Status label="What this is">
          The sequence is the project&apos;s working map. It is a contemporary synthesis
          by this project and has not been validated as an account of universal human
          development. The safeguards above are requirements for any program, and they
          need qualified design and review before one is offered.
        </Status>
      </Section>

      <Section
        id="source"
        eyebrow="Read further"
        title="Presencing Genius."
        intro={
          <>
            <p>
              Volume VII of The Coherence Thesis treats the Seven Initiates at length,
              and Volume V sets out Purposeful as a whole.
            </p>
            <div className={styles.actions}>
              <LinkButton href={links.thesis}>Read the thesis</LinkButton>
            </div>
          </>
        }
      />

      <DeeperLinks current="/purposeful/seven-initiates" />
    </PageShell>
  );
}
