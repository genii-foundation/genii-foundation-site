import type { Metadata } from "next";
import Image from "next/image";

import { links } from "../content";
import {
  ContactButton,
  DeeperLinks,
  Hearth,
  LinkButton,
  PageHero,
  PageShell,
  Rows,
  Section,
  Status,
  VentureCards,
} from "../parts";
import styles from "../v2.module.css";

export const metadata: Metadata = {
  title: "The Foundation | GENII Foundation",
  description:
    "GENII keeps the fire: the research, principles, and stewardship that BOW Media, Purposeful, and Providence draw on.",
  alternates: { canonical: "/foundation" },
};

const holds = [
  {
    label: "Vision and values",
    text: "What the work is for, and the measure it answers to: enrichment in the lives people lead, over engagement with a platform.",
  },
  {
    label: "Research",
    text: "The Coherence Thesis is the intellectual map: nine volumes of research behind the ventures.",
  },
  {
    label: "Principles",
    text: "The design commitments on human sovereignty, and the ten principles that govern every Providence product, partnership, and financing.",
  },
  {
    label: "Stewardship",
    text: "Care for the mission over time, so that the ventures can grow without losing what they were started to do.",
  },
] as const;

export default function FoundationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The foundation"
        title="GENII keeps the fire."
        lead="The research, principles, and stewardship every venture draws on."
        body="GENII exists for the meeting of wisdom, culture, and technology, each made stronger by the others."
        motif={<Hearth />}
      />

      <Section
        id="role"
        eyebrow="What GENII is"
        title="A foundation. The ventures carry the business."
        intro={
          <>
            <p>
              GENII Foundation holds the vision and the values. Its role is stewardship.
            </p>
            <p>
              Three complementary ventures work under it. Each has its own business model,
              and each can be funded on its own terms. As the ventures grow, they are
              expected to sustain the foundation.
            </p>
            <p>
              The foundation is also a meeting ground. It can stand behind work it does
              not operate: the tools behind Providence are built by Terran Labs, and GENII
              does not run them.
            </p>
          </>
        }
      >
        <Rows items={holds} numbered={false} />
        <Status label="Formation status">
          GENII Foundation and the entities for its ventures are under legal design. This
          site describes an intended structure. No legal form has been chosen, and how the
          ventures will sustain the foundation is an intent with no agreed mechanism yet.
        </Status>
      </Section>

      <Section
        id="ventures"
        eyebrow="Under the foundation"
        title="Three ventures, one architecture."
        intro={
          <p>
            Culture awakens possibility. Development cultivates capacity. Coordination
            turns both into contribution.
          </p>
        }
      >
        <VentureCards />
      </Section>

      <Section
        id="custodians"
        eyebrow="The Custodians"
        title="A partnership across technical invention and human-development research."
        panel
        intro={
          <p>
            A technical founder and a wisdom-keeper, working together because the two
            are more together than either alone.
          </p>
        }
      >
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
              Aubrey has written software running on over a billion devices and helped
              found multiple successful technology companies. His work synthesizes
              intentional communities, exponential technologies, and entropic stability.
              He&apos;s building tools for less addictive social media, more addictive
              long-form publications, and organized care for some of the most vulnerable
              children on this planet. He also helps teams scale technology in service of
              all life.
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
              Robert is an artist, writer, researcher, and facilitator whose work bridges
              consciousness, human development, and civilizational design. Over thirty
              years, he has co-founded foundations exploring alternative currencies,
              responsible psychoactive medicine practices, humane technology, and
              regenerative civilization. His collected work, The Atlas of Anthropos in
              Anamnesis, is devoted to remembering ourselves completely and helping
              humanity and all life flourish.
            </p>
          </article>
        </div>
        <Status label="What comes next">
          The first funded stage must also build the scientific, legal, governance, and
          operating capacity required for execution.
        </Status>
      </Section>

      <Section
        id="contact"
        eyebrow="Work with us"
        title="We are Earth learning to participate more intelligently in the ongoing service and evolution of life."
        intro={
          <>
            <p>
              We welcome researchers, builders, funders, artists, and civic stewards whose
              work belongs in this architecture.
            </p>
            <div className={styles.actions}>
              <ContactButton>Contact GENII Foundation</ContactButton>
              <LinkButton href="/investing">Funding the work</LinkButton>
            </div>
          </>
        }
      />

      <DeeperLinks current="/foundation" />
    </PageShell>
  );
}
