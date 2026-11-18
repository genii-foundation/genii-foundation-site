import type { Metadata } from "next";
import Link from "next/link";

import {
  ProvidenceArrow,
  ProvidenceFooter,
} from "../ProvidencePageChrome";
import { FinancialModel } from "./FinancialModel";
import { InvestingTimeline } from "./InvestingTimeline";
import styles from "../providence.module.css";

export const metadata: Metadata = {
  title: "Fund GENII and Its Ventures | GENII Foundation",
  description:
    "Two ways to fund one mission: philanthropic support for GENII Foundation, and venture investment in BOW Media, Purposeful, and Providence.",
  alternates: { canonical: "/investing" },
  openGraph: {
    title: "Two ways to fund. One mission.",
    description:
      "Philanthropic partners support the foundation. Venture investors back one or more ventures, each with its own business model.",
    url: "https://genii.foundation/investing",
    siteName: "GENII Foundation",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "GENII Foundation. For futures worth inhabiting.",
      },
    ],
  },
};

// The three ventures, in the order the deck presents them. The tree near the
// top of the page and the commercial section both read from this list so the
// names, roles, and links cannot drift apart.
const ventures = [
  {
    id: "bow-media",
    name: "BOW Media",
    href: "/bow",
    role: "Culture",
    summary:
      "Awakens curiosity and transmits wisdom through original cultural work.",
  },
  {
    id: "purposeful",
    name: "Purposeful",
    href: "/purposeful",
    role: "Development",
    summary:
      "Cultivates human capacities through practice, teachers, relationship, and contribution.",
  },
  {
    id: "providence",
    name: "Providence",
    href: "/providence",
    role: "Coordination",
    summary:
      "A synchronicity engine that aligns vision, values, and the people who carry them, toward an operating system for personal and social life.",
  },
] as const;

type VentureId = (typeof ventures)[number]["id"];

// What each venture offers commercially. Only Purposeful's retreats and
// network and Providence's app and partner system carry modeled figures in
// FinancialModel. BOW Media's one commercial fact is the Publisher milestone
// from the timeline; nothing else is claimed for it.
const commercialPathways: Record<
  VentureId,
  { horizon: string; title: string; text: string }[]
> = {
  "bow-media": [
    {
      horizon: "Building now",
      title: "GENII Publisher",
      text: "Give any author or institution a thesis-caliber e-reader, tailored to their ideas, identity, and audience.",
    },
  ],
  purposeful: [
    {
      horizon: "Professional network",
      title: "Mentorship and practitioner network",
      text: "Connects people with teachers and mentors, supported by AI and built for global reach. Training, supervision, software, standards, and referral infrastructure support qualified independent practitioners.",
    },
    {
      horizon: "Physical experience",
      title: "Retreats",
      text: "Small, curated retreats where practice happens in person, in rooms, between people.",
    },
    {
      horizon: "Year-long program",
      title: "Curriculum",
      text: "A year-long curriculum built on the principles of the Seven Initiates.",
    },
  ],
  providence: [
    {
      horizon: "First product",
      title: "Providence App",
      text: "Emergent intelligence will need a human-alignment layer. A private, on-device application using biofeedback and neurofeedback to support personal and interpersonal flourishing, from post-retreat integration to sustained practice.",
    },
    {
      horizon: "Partner distribution",
      title: "Powered By Providence",
      text: "A licensed system of telemetry, consent, training, and support for retreat centers and intentional communities.",
    },
    {
      horizon: "Licensable core",
      title: "Consent infrastructure",
      text: "Local processing, multi-person consent, participant-controlled records, and research tooling for intimate group settings.",
    },
  ],
};

// One honest line per venture about what this page does and does not model.
const ventureNotes: Record<VentureId, string> = {
  "bow-media":
    "BOW Media's commercial model is not yet modeled on this page.",
  purposeful:
    "Retreats and the mentorship and practitioner network are modeled below. The curriculum is not yet modeled.",
  providence:
    "Providence is a proposed integration, not a finished product. Its near-term experience, a personal planner, a council for reflection, and consent-based connection, is being proven through standalone tools built in collaboration with Terran Labs: Freed, Vorton, and Vorteo. Product and entity relationships with Terran Labs are still being finalized, and commercial terms for that work are not modeled on this page.",
};

const developmentSequence = [
  {
    number: "01",
    title: "Validate the human model",
    text: "Purposeful's mentor relationships, small gatherings, and facilitated practice establish whether the underlying experience creates value before software enters the system.",
  },
  {
    number: "02",
    title: "Validate the signal",
    text: "Independent research tests whether interpersonal coherence can be measured reliably and reflected without overstating what the signal means.",
  },
  {
    number: "03",
    title: "Launch the companion",
    text: "The on-device Providence companion extends reflection into daily life and establishes the first recurring revenue surface.",
  },
  {
    number: "04",
    title: "Establish practitioner distribution",
    text: "Purposeful's training, software, supervision, and referral infrastructure connect the product to skilled independent practice.",
  },
  {
    number: "05",
    title: "License the partner system",
    text: "Powered By Providence packages the shared technical and ethical core for retreat centers and intentional communities.",
  },
  {
    number: "06",
    title: "Pursue frontier research",
    text: "Portable relational standing and future currency systems remain long-horizon research, gated by evidence, governance, and demonstrated demand.",
  },
];

export default function InvestingPage() {
  return (
    <div className={styles.site} id="top">
      <div className="unified-header-spacer" aria-hidden="true" />

      <main id="main-content">
        <section
          className={`${styles.hero} ${styles.investingHero}`}
          aria-labelledby="investing-title"
        >
          <div className={styles.contentFrame}>
            <div className={styles.investingHeroGrid}>
              <h1 id="investing-title">Two ways to fund. One mission.</h1>
              <div className={styles.investingHeroCopy}>
                <p className={styles.investingHeroLead}>
                  Philanthropic partners support GENII Foundation. Venture
                  investors back one or more of its ventures, each with its own
                  business model.
                </p>
                <p>
                  GENII keeps the fire: the research, principles, and stewardship
                  every venture draws on. BOW Media, Purposeful, and Providence
                  carry the business models.
                </p>
                <a
                  className={`${styles.investingHeroAction} action-link`}
                  href="#paths"
                >
                  See both paths <ProvidenceArrow />
                </a>
              </div>
            </div>

            {/* The funding structure as a plain tree. Read top to bottom it is
                the order of support: philanthropy above the foundation, the
                foundation above its ventures, and commercial investment as the
                base the ventures stand on. Plain markup, so it reads in that
                order without CSS; the connectors are drawn by
                providence.module.css. */}
            <div className={styles.fundingTree} id="structure">
              <a className={`${styles.treeBand} ${styles.treeBandAbove}`} href="#philanthropy">
                <span>Philanthropic support</span>
                <strong>Supports the foundation itself</strong>
              </a>

              <div className={styles.treeRoot}>
                <div className={`${styles.treeNode} ${styles.treeFoundation}`}>
                  <p className={styles.treeRole}>Foundation</p>
                  <h3>GENII Foundation</h3>
                  <p>Research, principles, and stewardship. Holds the vision and values.</p>
                </div>
              </div>

              <ul className={styles.treeBranches} aria-label="GENII ventures">
                {ventures.map((venture) => (
                  <li className={styles.treeNode} key={venture.id}>
                    <p className={styles.treeRole}>{venture.role}</p>
                    <h3>
                      <Link href={venture.href}>{venture.name}</Link>
                    </h3>
                    <p>{venture.summary}</p>
                  </li>
                ))}
              </ul>

              <a className={`${styles.treeBand} ${styles.treeBandBelow}`} href="#investors">
                <span>Commercial investment</span>
                <strong>Backs one or more ventures</strong>
              </a>
            </div>

            {/* The deck states this as intent. No mechanism is agreed, so the
                sentence must not read as a commitment. */}
            <p className={styles.treeIntent}>
              As the ventures grow, GENII intends for them to sustain the foundation. No
              mechanism for that is agreed yet.
            </p>

            <aside className={styles.investingStatus} aria-label="Formation status">
              <strong>Formation status</strong>
              <p>
                GENII Foundation and the entities for its ventures are under legal
                design. This page describes the intended structure, not completed
                entities or offering terms.
              </p>
            </aside>
          </div>
        </section>

        <section
          className={[styles.premise, styles.investingPremise].join(" ")}
          aria-labelledby="premise-title"
        >
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>How it is structured</p>
            <div className={styles.premiseGrid}>
              <h2 id="premise-title">
                One foundation. Three ventures. Each funded on its own terms.
              </h2>
              <div>
                <p>
                  The work begins with skilled human practice. Mentors, peers,
                  practitioners, retreats, and communities create the conditions
                  for deliberate interpersonal practice. Technology gives
                  participants useful perception of the experience they are
                  creating together.
                </p>
                <p>
                  GENII holds the vision, values, research, and shared standards in
                  permanent mission stewardship. Each venture carries its own
                  business model and commercializes the products and services
                  that can scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InvestingTimeline />

        <section className={styles.capitalPaths} id="paths" aria-labelledby="paths-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Capital strategy</p>
            <div className={styles.sectionHeading}>
              <h2 id="paths-title">Two capital pathways. One mission.</h2>
              <p>
                The two paths carry different legal and economic commitments.
                Philanthropy funds the foundation and its public-benefit work.
                Patient investment funds a venture and seeks a return.
              </p>
            </div>

            <div className={styles.pathGrid}>
              <article
                className={`${styles.pathCard} ${styles.philanthropyCard}`}
                id="philanthropy"
              >
                <div className={styles.pathNumber}>01</div>
                <p className={styles.pathType}>For the philanthropic partner</p>
                <h3>Support the foundation.</h3>
                <p className={styles.pathLead}>
                  Philanthropic partners fund GENII&apos;s stewardship, research,
                  governance, institutional capacity, cultural and public-benefit
                  infrastructure, and the conditions for independent learning,
                  over a three to ten year horizon.
                </p>

                <div className={styles.pathDetails}>
                  <section>
                    <h4>What philanthropy can fund</h4>
                    <ul>
                      <li>Independent scientific research and validation</li>
                      <li>Consent, safety, and data-sovereignty standards</li>
                      <li>Open protocols and public education</li>
                      <li>Founding gatherings and scholarships</li>
                      <li>Reasonable compensation for the charitable team</li>
                    </ul>
                  </section>
                  <section>
                    <h4>Fiscal sponsorship during formation</h4>
                    <p>
                      A comprehensive fiscal sponsor can receive eligible gifts,
                      employ the initial charitable team, administer restricted
                      budgets, and hold project assets while GENII prepares its own
                      exemption application.
                    </p>
                  </section>
                  <section>
                    <h4>Governance</h4>
                    <p>
                      Restricted budgets, independent oversight, published evidence
                      thresholds, participant safeguards, and arm&apos;s-length agreements
                      with the ventures preserve charitable purpose.
                    </p>
                  </section>
                </div>

                <a
                  className={styles.pathAction}
                  href="mailto:hello@genii.foundation?subject=Philanthropic%20partnership%20with%20GENII"
                >
                  Discuss philanthropic support <ProvidenceArrow />
                </a>
              </article>

              <article
                className={`${styles.pathCard} ${styles.investorCard}`}
                id="investors"
              >
                <div className={styles.pathNumber}>02</div>
                <p className={styles.pathType}>For the patient impact investor</p>
                <h3>Back one or more ventures.</h3>
                <p className={styles.pathLead}>
                  Each venture has its own business model and can be financed on
                  its own terms. Which venture raises first is not yet decided. The
                  intended first financing is patient impact investment led by
                  values-aligned angels and family offices. Conventional
                  institutional venture capital is outside the plan at this stage.
                </p>

                <div className={styles.pathDetails}>
                  <section>
                    <h4>What investors back</h4>
                    <p>
                      A defined venture, working product, technical team, initial
                      pilots, a credible market hypothesis, and an evidence-based
                      next stage.
                    </p>
                  </section>
                  <section>
                    <h4>Modeled revenue surfaces</h4>
                    <ul>
                      <li>Purposeful retreats</li>
                      <li>
                        Purposeful mentorship and practitioner network: training,
                        software, and renewals
                      </li>
                      <li>Providence App subscriptions</li>
                      <li>Powered By Providence implementation and licensing</li>
                    </ul>
                  </section>
                  <section>
                    <h4>Intended capital structure</h4>
                    <p>
                      A mission-aligned commercial entity for each venture, in the
                      jurisdiction best suited to its governance and financing. The
                      intended terms combine patient return mechanics with
                      permanent founder and mission-steward authority over any
                      sale, merger, or change of control. Counsel will translate
                      these commitments into the charter, investor rights, and
                      financing documents.
                    </p>
                  </section>
                </div>

                <a
                  className={styles.pathAction}
                  href="mailto:hello@genii.foundation?subject=Venture%20investment%20with%20GENII"
                >
                  Discuss venture investment <ProvidenceArrow />
                </a>
              </article>
            </div>

            {/* A lighter third invitation. It asks for work, not money, so it
                sits outside the two numbered capital paths. */}
            <aside
              className={styles.collaboratorInvite}
              id="collaborators"
              aria-labelledby="collaborator-title"
            >
              <p className={styles.eyebrow}>For collaborators</p>
              <div>
                <h3 id="collaborator-title">Bring work that belongs here.</h3>
                <p>
                  Some people will bring their own work rather than capital:
                  research, teaching, practice, cultural work, or technology that
                  fits within GENII&apos;s architecture and one of its ventures.
                  Tell us what you are building and where you see it fitting.
                </p>
                <a
                  className={styles.pathAction}
                  href="mailto:hello@genii.foundation?subject=Collaborating%20with%20GENII"
                >
                  Propose a collaboration <ProvidenceArrow />
                </a>
              </div>
            </aside>

            <aside
              className={styles.contributorSignal}
              aria-labelledby="contributor-signal-title"
            >
              <p className={styles.eyebrow}>Recurring individual support</p>
              <div>
                <h3 id="contributor-signal-title">
                  Recurring contributors turn conviction into leverage.
                </h3>
                <p>
                  Individual gifts fund GENII&apos;s public-interest work immediately.
                  They also show patient angels that GENII and its ventures are
                  earning durable support from the people they intend to serve. A
                  one-time gift is a vote of confidence. A monthly contribution
                  makes that vote legible over time and gives the team a
                  dependable base for planning.
                </p>
                <p>
                  This support increases the force of larger investment. Angels can
                  finance product capacity, research, practitioner infrastructure,
                  and community work against demonstrated commitment. A broad base
                  of recurring contributors also reduces dependence on any single
                  funder.
                </p>
                <p className={styles.contributorBoundary}>
                  Charitable gifts to GENII, customer payments to the ventures, and
                  investment capital will be tracked and reported separately. They
                  fund different work and create different rights.
                </p>
              </div>
            </aside>

            <div className={styles.twoChecks}>
              <p className={styles.eyebrow}>Dual-capital participation</p>
              <div>
                <h3>Separate instruments create separate rights.</h3>
                <p>
                  One partner may support the foundation and invest in a venture. A
                  charitable gift funds the public-benefit mandate. A separately
                  documented investment funds that venture and carries the
                  associated economic rights. The two transactions remain legally
                  and financially distinct.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.venture} id="commercial" aria-labelledby="venture-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Commercial system</p>
            <div className={styles.sectionHeading}>
              <h2 id="venture-title">Each venture carries its own business model.</h2>
              <p>
                BOW Media carries culture, Purposeful carries development, and
                Providence carries coordination. Purposeful and Providence have
                modeled revenue surfaces on this page; BOW Media does not yet.
                GENII retains stewardship of the public-interest layer.
              </p>
            </div>

            <div className={styles.ventureModels}>
              {ventures.map((venture) => (
                <section
                  aria-labelledby={`${venture.id}-model-title`}
                  className={styles.ventureModel}
                  key={venture.id}
                >
                  <header className={styles.ventureModelHeader}>
                    <p className={styles.eyebrow}>{venture.role}</p>
                    <h3 id={`${venture.id}-model-title`}>
                      <Link href={venture.href}>{venture.name}</Link>
                    </h3>
                    <p>{venture.summary}</p>
                  </header>

                  <div className={styles.ventureGrid}>
                    {commercialPathways[venture.id].map((pathway) => (
                      <article key={pathway.title}>
                        <p>{pathway.horizon}</p>
                        <h4>{pathway.title}</h4>
                        <span>{pathway.text}</span>
                      </article>
                    ))}
                  </div>

                  <p className={styles.ventureModelNote}>{ventureNotes[venture.id]}</p>
                </section>
              ))}
            </div>

            <div className={styles.retreatStatement}>
              <div>
                <p className={styles.eyebrow}>Purposeful retreats</p>
                <h3>Retreats validate the practice and generate revenue.</h3>
              </div>
              <div>
                <p>
                  Retreats provide a bounded setting for consent, skilled guidance,
                  immediate reflection, and disciplined product research. Purposeful
                  hosts each retreat, and Providence technology can support it with
                  participant consent. Every Purposeful retreat must cover its full
                  delivery cost before companion subscriptions or research support
                  receive credit.
                </p>
                <p>
                  Purposeful will partner with established venues and intentional
                  communities rather than own land. Each partner retains authority
                  over its place, program, and culture.
                </p>
              </div>
            </div>

            <FinancialModel />
          </div>
        </section>

        <section className={styles.poweredSystem} aria-labelledby="powered-title">
          <div className={styles.contentFrame}>
            <div className={styles.poweredHeader}>
              <div>
                <p className={styles.eyebrow}>Providence partner system</p>
                <h3 id="powered-title">Powered By Providence</h3>
              </div>
              <p>
                Providence creates consent-bound experiences in which people can
                perceive, practice, and carry forward the quality of presence they
                build together. Measuring one person&apos;s regulated state is only
                a small part of it.
              </p>
            </div>

            <div className={styles.poweredGrid}>
              <article>
                <p className={styles.poweredType}>Peak-experience retreat centers</p>
                <h4>Perceive what happens in the room.</h4>
                <p>
                  Local signal processing, wearable pairing, multi-person consent,
                  a guide console, shared reflection, and private post-retreat
                  integration extend an existing program without displacing its
                  practitioners.
                </p>
                <dl>
                  <div>
                    <dt>Partner value</dt>
                    <dd>Structured reflection, program learning, and continuity after participants leave.</dd>
                  </div>
                  <div>
                    <dt>Proposed revenue</dt>
                    <dd>Implementation fees, annual licenses, training, instrumentation, and support.</dd>
                  </div>
                </dl>
              </article>

              <article>
                <p className={styles.poweredType}>Long-term intentional communities</p>
                <h4>Build coherence into the culture.</h4>
                <p>
                  Voluntary check-ins, group practice, conflict-repair support,
                  shared reflection, and institutional memory give a community
                  better visibility into the culture it creates over time.
                </p>
                <dl>
                  <div>
                    <dt>Partner value</dt>
                    <dd>A voluntary practice layer for governance, belonging, repair, and cultural learning.</dd>
                  </div>
                  <div>
                    <dt>Proposed revenue</dt>
                    <dd>Paid discovery, implementation, annual licenses, support, and optional research partnerships.</dd>
                  </div>
                </dl>
              </article>
            </div>

            <div className={styles.poweredCore}>
              <p>Shared core</p>
              <ul>
                <li>Local-first telemetry</li>
                <li>Multi-person consent</li>
                <li>Participant-controlled records</li>
                <li>Practitioner support</li>
                <li>Federated research</li>
              </ul>
            </div>

            <aside className={styles.communityBoundary}>
              <strong>Community operating boundary</strong>
              <p>
                Physiological measures have no role in decisions about housing,
                employment, leadership, membership, or access to community life.
                Community leaders cannot inspect individual coherence records.
                Participation is voluntary, contestable, and reversible.
              </p>
            </aside>

            <aside className={styles.sensingBoundary}>
              <strong>Ambient sensing frontier</strong>
              <p>
                Continuous ambient sensing may eventually extend the companion,
                but it also captures bystanders. Product development must first
                establish multi-person consent, visible session boundaries,
                bystander protection, redaction, and reliable withdrawal.
              </p>
            </aside>
          </div>
        </section>

        <section className={styles.returnCase} aria-labelledby="return-title">
          <div className={styles.contentFrame}>
            <div className={styles.returnHeading}>
              <div>
                <p className={styles.eyebrow}>Distribution and retention</p>
                <h3 id="return-title">High-trust acquisition can produce recurring voluntary use.</h3>
              </div>
              <p>
                The venture case depends on a repeatable path from a high-value
                experience to sustained individual use. Retention, partner renewal,
                and practitioner productivity must prove that path.
              </p>
            </div>

            <div className={styles.returnGrid}>
              <article>
                <span>Revenue positive</span>
                <h4>Purposeful retreats</h4>
                <p>
                  Purposeful prices each program to cover full delivery costs and
                  contribute cash beyond them.
                </p>
              </article>
              <article>
                <span>Recurring partner revenue</span>
                <h4>Powered retreats and communities</h4>
                <p>
                  Operators pay Providence for implementation, licenses, training,
                  instrumentation, coaching, and ongoing support.
                </p>
              </article>
              <article>
                <span>Recurring individual revenue</span>
                <h4>Providence App</h4>
                <p>
                  Participants may subscribe to supported companion functions for
                  continued practice after a retreat or practitioner engagement.
                </p>
              </article>
            </div>

            <div className={styles.returnBoundary}>
              <h4>Patient impact capital is the first fit.</h4>
              <p>
                The intended first investors are values-aligned angels and
                family offices. For Providence, large companion adoption and
                repeatable partner licensing can create substantial enterprise
                value. Mission stewards retain exclusive authority over any sale,
                merger, or change of control.
              </p>
              <p>
                The Providence software core remains open source. Providence earns
                revenue from the official product, trusted marks, hosted services,
                integrations, training, and accountable implementation.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sequence} aria-labelledby="sequence-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Execution sequence</p>
            <div className={styles.sectionHeading}>
              <h2 id="sequence-title">Evidence gates each expansion.</h2>
              <p>
                Each product must establish demand, safety, and repeatable delivery
                before its venture finances the next layer.
              </p>
            </div>

            {/* The deck's capital flow line. The arrows are the deck's own
                notation; the label gives screen readers a plain reading. */}
            <p
              className={styles.capitalFlow}
              aria-label="Capital leads to capabilities, then working demonstrations, then validation, then the next stage."
            >
              Capital → Capabilities → Working demonstrations → Validation → Next stage
            </p>

            <ol className={styles.sequenceList}>
              {developmentSequence.map((stage) => (
                <li key={stage.number}>
                  <span>{stage.number}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.architecture} id="architecture" aria-labelledby="architecture-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Institutional architecture</p>
            <div className={styles.sectionHeading}>
              <h2 id="architecture-title">Mission protection with commercial clarity.</h2>
              <p>
                This is the intended structure; the entities are under legal
                design. The Foundation protects research, standards, access, and
                the commons. Each venture builds products, signs customers, and
                provides investors a defined economic instrument.
              </p>
            </div>

            <div className={styles.architectureGrid}>
              <article>
                <p>Public charity</p>
                <h3>GENII Foundation</h3>
                <ul>
                  <li>Research and public education</li>
                  <li>Open standards and reference protocols</li>
                  <li>Evidence standards and participant safety</li>
                  <li>Scholarships and equitable access</li>
                  <li>Mission, trademark, and commons stewardship</li>
                </ul>
              </article>
              <div className={styles.architectureRelationship} aria-label="Arm's-length licenses and services">
                <svg
                  aria-hidden="true"
                  className={styles.architectureArrow}
                  focusable="false"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path className={styles.architectureArrowHorizontal} d="M0 5H100M100 5L97 1" />
                  <path className={styles.architectureArrowVertical} d="M50 0V10M50 10L43 7" />
                </svg>
                <span>Arm&apos;s-length</span>
                <strong>licenses and services</strong>
                <svg
                  aria-hidden="true"
                  className={styles.architectureArrow}
                  focusable="false"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path className={styles.architectureArrowHorizontal} d="M100 5H0M0 5L3 9" />
                  <path className={styles.architectureArrowVertical} d="M50 10V0M50 0L57 3" />
                </svg>
              </div>
              <article>
                <p>Mission-aligned commercial entities</p>
                <h3>The ventures</h3>
                <ul>
                  <li>BOW Media: original cultural work and publishing</li>
                  <li>Purposeful: mentorship network, retreats, and curriculum</li>
                  <li>Providence: app, partner licenses, and consent infrastructure</li>
                  <li>Implementation, training, and support</li>
                  <li>Patient, noncontrolling investor return</li>
                </ul>
              </article>
            </div>

            <aside className={styles.ipStewardship}>
              <strong>Intellectual property and stewardship</strong>
              <p>
                Robbie authored the founding manuscripts. Aubrey and Robbie control
                the relevant founding intellectual property. Before financing,
                counsel will document founder contributions, copyright and trademark
                ownership, the open-source policy, and the arm&apos;s-length licenses
                between the Foundation and each venture.
              </p>
            </aside>

            <div className={styles.satelliteGrid}>
              <article>
                <h3>Fiscal sponsorship</h3>
                <p>
                  A charitable operating home during formation, with responsibility
                  for gifts, payroll, compliance, restricted budgets, and project assets.
                </p>
              </article>
              <article>
                <h3>Independent practitioners</h3>
                <p>
                  Qualified practitioners provide guided experiences, integration,
                  and referrals through Purposeful&apos;s network, and a
                  professional distribution channel for Providence.
                </p>
              </article>
              <article>
                <h3>Retreat and community partners</h3>
                <p>
                  Partner organizations retain authority over place, program, and
                  culture while hosting Purposeful retreats or licensing Providence
                  technology and practice systems.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.guardrails} aria-labelledby="guardrails-title">
          <div className={styles.contentFrame}>
            <div className={styles.guardrailIntro}>
              <p className={styles.eyebrow}>Providence principles</p>
              <div>
                <h2 id="guardrails-title">
                  Ten principles govern every Providence product, partnership, and financing.
                </h2>
                <div className={styles.principleSummaryCopy}>
                  <p>
                    Ten inviolable commitments define Providence&apos;s boundaries for
                    participant authority, consent, evidence, mission control,
                    independent review, and open infrastructure.
                  </p>
                  <Link className={styles.principleAction} href="/principles">
                    Read all ten principles <ProvidenceArrow />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.invitation} id="invitation" aria-labelledby="invitation-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Investor diligence</p>
            <div className={styles.invitationGrid}>
              <h2 className={styles.invitationClosing} id="invitation-title">
                Help us build for returns that endure, with human agency at the center.
              </h2>
              <div>
                <p>
                  GENII is opening diligence conversations with patient impact
                  angels and values-aligned family offices for its ventures. It is
                  also speaking with scientific partners, philanthropic funders,
                  fiscal sponsors, practitioners, and community operators.
                </p>
                <p>
                  We will share the current product thesis, commercial model,
                  governance commitments, open risks, and evidence required before
                  accepting capital.
                </p>
                <a
                  className={styles.invitationAction}
                  href="mailto:hello@genii.foundation?subject=GENII%20investor%20diligence"
                >
                  Start a diligence conversation <ProvidenceArrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <aside className={styles.discussionDisclaimer} aria-label="Investment document disclaimer">
          <div className={styles.contentFrame}>
            <small>
              This working discussion document is not an offer to sell securities,
              tax advice, legal advice, or a promise of financial or charitable results.
            </small>
          </div>
        </aside>
      </main>

      <ProvidenceFooter />
    </div>
  );
}
