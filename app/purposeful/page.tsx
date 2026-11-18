import type { Metadata } from "next";

import { links, sevenInitiates } from "../content";
import {
  ContactButton,
  DeeperLinks,
  LinkButton,
  PageHero,
  PageShell,
  Rows,
  Section,
  Status,
  Steps,
  Tag,
  ThreeDoors,
} from "../parts";
import styles from "../v2.module.css";

export const metadata: Metadata = {
  title: "Purposeful | GENII Foundation",
  description:
    "Purposeful is GENII's development venture: mentorship, small gatherings, and a year-long curriculum built on the Seven Initiates.",
  alternates: { canonical: "/purposeful" },
};

/*
 * Status wording follows the owner's answer of 17 November 2026: the
 * curriculum is ready to go; mentorship and gatherings are earlier stage with
 * a clear vision; all three are moving forward. Nothing is shown as open for
 * enrollment, because no source says it is.
 */
const waysIn = [
  {
    kind: "Curriculum",
    title: "Study",
    tag: "Ready to go",
    text: "A year of guided study, grounded in the Seven Initiates and carried into daily life.",
  },
  {
    kind: "Referral network",
    title: "Mentorship",
    tag: "Early stage",
    text: "Matches each person with the teachers and mentors suited to them, supported by AI and built for global reach.",
  },
  {
    kind: "Retreats",
    title: "Gatherings",
    tag: "Early stage",
    text: "Days away, in small company. People slow down, practice side by side, and leave knowing the others on the same path.",
  },
] as const;

const pathway = [
  {
    label: "Discover",
    text: "Encounter teachers, ideas, and experiences that awaken possibility.",
  },
  {
    label: "Practice",
    text: "Grow discernment, embodiment, relationship, and capacity.",
  },
  {
    label: "Contribute",
    text: "Find people and work to which those capacities can be offered.",
  },
] as const;

export default function PurposefulPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Venture two · Development"
        title="Purposeful."
        subtitle="Development is the work."
        lead="A pathway through which curiosity becomes practice, relationship, contribution, and stewardship."
        body="Purposeful helps people become who they are capable of becoming, and find one another."
        figure={<ThreeDoors />}
      />

      <Section
        id="ways-in"
        eyebrow="Three ways in"
        title="Study, mentorship, and gatherings."
        intro={
          <>
            <p>
              Purposeful begins in person, in rooms, between people. The Seven Initiates
              sit at the heart of all three ways in.
            </p>
            <p>
              The thesis describes the same three as doors: mentors matched to the people
              they are suited to serve, gatherings small enough for real practice, and a
              year of study carried by people.
            </p>
          </>
        }
      >
        <div className={styles.cardGrid}>
          {waysIn.map((way) => (
            <article className={styles.card} key={way.title}>
              <Tag>{way.tag}</Tag>
              <h3>{way.title}</h3>
              <p className={styles.cardRole}>{way.kind}</p>
              <p>{way.text}</p>
            </article>
          ))}
        </div>
        <Status>
          The curriculum is written and ready. Mentorship and gatherings are at an
          earlier stage, with a clear vision, and all three are moving forward. None is
          open for enrollment yet; write to us if you want to hear when that changes.
        </Status>
      </Section>

      <Section
        id="questions"
        eyebrow="Where it starts"
        title="Three questions."
        panel
        intro={
          <>
            <p>What do I value? What do I intend? What impact do I hope to create?</p>
            <p>
              A person&apos;s answers shape which teachings, teachers, and peers are
              worth meeting. The answers stay the person&apos;s own: offered by choice,
              revised or withdrawn at any time, and never a condition of belonging.
            </p>
          </>
        }
      />

      <Section
        id="pathway"
        eyebrow="The pathway"
        title="From curiosity to contribution."
        intro={
          <p>
            The pathway describes a possible development. It is a map a person can use at
            their own pace, with no schedule every life must keep.
          </p>
        }
      >
        <Steps items={pathway} />
      </Section>

      <Section
        id="initiates"
        eyebrow="The Seven Initiates"
        title="A living curriculum."
        intro={
          <>
            <p>A gateway to teachers, teachings, and one another.</p>
            <p>
              The Seven Initiates will be Purposeful&apos;s introductory curriculum: a
              shared pathway for new participants. As the network grows, teachings from
              teachers, elders, and practitioners will be curated within these seven
              domains.
            </p>
            <div className={styles.actions}>
              <LinkButton href="/purposeful/seven-initiates">
                Explore the Seven Initiates
              </LinkButton>
            </div>
          </>
        }
      >
        <Rows
          display
          items={sevenInitiates.map(({ name, line }) => ({ label: name, text: line }))}
        />
      </Section>

      <Section
        id="join"
        eyebrow="With the other ventures"
        title="Roots for what Providence coordinates."
        intro={
          <>
            <p>
              BOW opens the door, and the thesis volume Purposeful sets out the
              thinking in full. Providence then extends the work across distance and
              time.
            </p>
            <div className={styles.actions}>
              <LinkButton href={links.thesis}>Read the thesis</LinkButton>
              <ContactButton>Ask about Purposeful</ContactButton>
            </div>
          </>
        }
      />

      <DeeperLinks current="/purposeful/seven-initiates" />
    </PageShell>
  );
}
