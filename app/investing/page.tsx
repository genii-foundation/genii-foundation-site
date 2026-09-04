import type { Metadata } from "next";
import Link from "next/link";

import {
  ProvidenceArrow,
  ProvidenceFooter,
} from "../ProvidencePageChrome";
import { FinancialModel } from "./FinancialModel";
import { InvestingComparison } from "./InvestingComparison";
import { InvestingTimeline } from "./InvestingTimeline";
import styles from "../providence.module.css";

export const metadata: Metadata = {
  title: "Invest in Providence | GENII Foundation",
  description:
    "The commercial strategy, capital architecture, and operating principles behind Providence.",
  alternates: { canonical: "/investing" },
  openGraph: {
    title: "Invest in Providence",
    description:
      "Patient capital for a consent-bound commercial system built around interpersonal coherence.",
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

const commercialPathways = [
  {
    horizon: "First product",
    title: "Providence App",
    text: "A private, on-device application using biofeedback and neurofeedback to support personal and interpersonal flourishing, from post-retreat integration to sustained practice.",
  },
  {
    horizon: "Partner distribution",
    title: "Powered By Providence",
    text: "A licensed system of telemetry, consent, training, and support for retreat centers and intentional communities.",
  },
  {
    horizon: "Professional network",
    title: "Practitioner infrastructure",
    text: "Training, supervision, software, standards, and referral infrastructure for qualified independent practitioners.",
  },
  {
    horizon: "Licensable core",
    title: "Consent infrastructure",
    text: "Local processing, multi-person consent, participant-controlled records, and research tooling for intimate group settings.",
  },
];

const developmentSequence = [
  {
    number: "01",
    title: "Validate the human model",
    text: "Mentor relationships, small gatherings, and facilitated practice establish whether the underlying experience creates value before software enters the system.",
  },
  {
    number: "02",
    title: "Validate the signal",
    text: "Independent research tests whether interpersonal coherence can be measured reliably and reflected without overstating what the signal means.",
  },
  {
    number: "03",
    title: "Launch the companion",
    text: "The on-device companion extends reflection into daily life and establishes the first recurring revenue surface.",
  },
  {
    number: "04",
    title: "Establish practitioner distribution",
    text: "Training, software, supervision, and referral infrastructure connect the product to skilled independent practice.",
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

      <InvestingComparison active="current" reviewGate />

      <main id="main-content">
        <section
          className={`${styles.hero} ${styles.investingHero}`}
          aria-labelledby="investing-title"
        >
          <div className={styles.contentFrame}>
            <div className={styles.investingHeroGrid}>
              <h1 id="investing-title">Invest in Providence.</h1>
              <div className={styles.investingHeroCopy}>
                <p className={styles.investingHeroLead}>
                  Providence is raising patient capital to build a private companion,
                  revenue-positive retreats, partner systems, and a practitioner network.
                </p>
                <p>
                  GENII Foundation protects the research, standards, and public-interest
                  infrastructure behind the commercial company.
                </p>
                <a
                  className={`${styles.investingHeroAction} action-link`}
                  href="#paths"
                >
                  See the capital strategy <ProvidenceArrow />
                </a>
              </div>
            </div>

            <aside className={styles.investingStatus} aria-label="Formation status">
              <strong>Formation status</strong>
              <p>
                GENII Foundation and Providence&apos;s separate mission-aligned company
                are under legal design. This page describes the intended structure,
                not completed entities or offering terms.
              </p>
            </aside>
          </div>
        </section>

        <InvestingTimeline />

        <section className={styles.premise} aria-labelledby="premise-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Investment premise</p>
            <div className={styles.premiseGrid}>
              <h2 id="premise-title">
                What can be measured can be cultivated. Human presence is both.
              </h2>
              <div>
                <p>
                  Providence begins with skilled human practice. Mentors, peers,
                  practitioners, retreats, and communities create the conditions
                  for deliberate interpersonal practice. Technology gives participants useful
                  perception of the experience they are creating together.
                </p>
                <p>
                  The commercial opportunity sits within that integrated system. GENII
                  holds the research, access programs, standards, and shared
                  infrastructure in permanent mission stewardship. Providence
                  commercializes the products and services that can scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.capitalPaths} id="paths" aria-labelledby="paths-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Capital strategy</p>
            <div className={styles.sectionHeading}>
              <h2 id="paths-title">One Mission. Two Paths</h2>
              <p>
                Patient investment finances the commercial system and seeks a
                return. Philanthropy finances research, access, standards, and
                infrastructure held for public benefit.
              </p>
            </div>

            <div className={styles.pathGrid}>
              <article className={`${styles.pathCard} ${styles.investorCard}`}>
                <div className={styles.pathNumber}>01</div>
                <p className={styles.pathType}>For the patient impact investor</p>
                <h3>Finance the commercial system.</h3>
                <p className={styles.pathLead}>
                  Providence&apos;s primary initial financing strategy is patient
                  impact investment into the commercial venture, led by
                  values-aligned angels and family offices. It is not pursuing
                  conventional institutional venture capital at this stage.
                </p>

                <div className={styles.pathDetails}>
                  <section>
                    <h4>Human-alignment layer</h4>
                    <p>
                      Emergent intelligence will need a human-alignment layer. The
                      Providence App is the leading first product: a private,
                      on-device application for post-retreat integration and
                      sustained coherence practice. Retreats, partner systems, and
                      practitioner tools define the commercial scope.
                    </p>
                  </section>
                  <section>
                    <h4>Initial revenue surfaces</h4>
                    <ul>
                      <li>Companion subscriptions</li>
                      <li>Providence-produced retreats</li>
                      <li>Powered By Providence implementation and licensing</li>
                      <li>Practitioner training, software, and renewals</li>
                    </ul>
                  </section>
                  <section>
                    <h4>Intended capital structure</h4>
                    <p>
                      A mission-aligned commercial company in the jurisdiction best
                      suited to its governance and financing. The intended terms
                      combine patient return mechanics with permanent founder and
                      mission-steward authority over any sale, merger, or change of
                      control. Counsel will translate these commitments into the
                      charter, investor rights, and financing documents.
                    </p>
                  </section>
                </div>

                <a
                  className={styles.pathAction}
                  href="mailto:hello@genii.foundation?subject=Patient%20capital%20for%20Providence"
                >
                  Discuss patient capital <ProvidenceArrow />
                </a>
              </article>

              <article className={`${styles.pathCard} ${styles.philanthropyCard}`}>
                <div className={styles.pathNumber}>02</div>
                <p className={styles.pathType}>For the philanthropic partner</p>
                <h3>Fund the public-interest foundation.</h3>
                <p className={styles.pathLead}>
                  Charitable capital supports measurable public benefit over the
                  same three to ten year horizon. Its mandate is research, access,
                  standards, education, and shared infrastructure.
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
                      with the commercial company preserve charitable purpose.
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
            </div>

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
                  They also show patient angels that Providence is earning durable
                  support from the people it intends to serve. A one-time gift is a
                  vote of confidence. A monthly contribution makes that vote legible
                  over time and gives the team a dependable base for planning.
                </p>
                <p>
                  This support increases the force of larger investment. Angels can
                  finance product capacity, research, practitioner infrastructure,
                  and community work against demonstrated commitment. A broad base
                  of recurring contributors also reduces dependence on any single
                  funder.
                </p>
                <p className={styles.contributorBoundary}>
                  Charitable gifts to GENII, customer payments to Providence, and
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
                  One partner may support both entities. A charitable gift funds
                  the public-benefit mandate. A separately documented investment
                  funds the commercial company and carries the associated economic
                  rights. The two transactions remain legally and financially distinct.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.venture} id="commercial" aria-labelledby="venture-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Commercial system</p>
            <div className={styles.sectionHeading}>
              <h2 id="venture-title">A private companion with place-based distribution.</h2>
              <p>
                Providence combines a trusted individual product with retreats,
                partner implementations, and practitioner distribution. GENII
                retains stewardship of the public-interest layer.
              </p>
            </div>

            <div className={styles.ventureGrid}>
              {commercialPathways.map((pathway) => (
                <article key={pathway.title}>
                  <p>{pathway.horizon}</p>
                  <h3>{pathway.title}</h3>
                  <span>{pathway.text}</span>
                </article>
              ))}
            </div>

            <div className={styles.retreatStatement}>
              <div>
                <p className={styles.eyebrow}>Physical experience</p>
                <h3>Retreats validate the product and generate revenue.</h3>
              </div>
              <div>
                <p>
                  Retreats provide a bounded setting for consent, skilled guidance,
                  immediate reflection, and disciplined product research. Every
                  Providence-produced retreat must cover its full delivery cost
                  before companion subscriptions or research support receive credit.
                </p>
                <p>
                  Providence will partner with established venues and intentional
                  communities rather than own land. Each partner retains authority
                  over its place, program, and culture while Providence supplies the
                  technical and practice system.
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
                <p className={styles.eyebrow}>Place-based partnership</p>
                <h3 id="powered-title">Powered By Providence</h3>
              </div>
              <p>
                Providence does not merely measure an individual&apos;s regulated
                state. It creates consent-bound experiences in which people can
                perceive, practice, and carry forward the quality of presence
                they build together.
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
                <h4>Providence retreats</h4>
                <p>
                  Providence prices each program to cover full delivery costs and
                  contribute cash to product development.
                </p>
              </article>
              <article>
                <span>Recurring partner revenue</span>
                <h4>Powered retreats and communities</h4>
                <p>
                  Operators pay for implementation, licenses, training,
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
                Providence is raising first from values-aligned angels and family
                offices. Large companion adoption and repeatable partner licensing
                can create substantial enterprise value. Mission stewards retain
                exclusive authority over any sale, merger, or change of control.
              </p>
              <p>
                The software core remains open source. The commercial company earns
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
                before Providence finances the next layer.
              </p>
            </div>

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
                The Foundation protects research, standards, access, and the
                commons. The commercial company builds products, signs customers,
                and provides investors a defined economic instrument.
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
                <p>Mission-aligned commercial company</p>
                <h3>Providence venture</h3>
                <ul>
                  <li>Commercial application</li>
                  <li>Retreat and partner experience systems</li>
                  <li>Subscriptions and partner licenses</li>
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
                between the Foundation and the commercial company.
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
                  referrals, and a professional distribution channel for Providence.
                </p>
              </article>
              <article>
                <h3>Retreat and community partners</h3>
                <p>
                  Partner organizations retain authority over place, program, and
                  culture while licensing Providence technology and practice systems.
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
                  These principles govern every product, partnership, and financing.
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
              <h2 id="invitation-title">Examine the first commercial proof.</h2>
              <div>
                <p>
                  Providence is opening diligence conversations with patient impact
                  angels and values-aligned family offices. GENII is also speaking
                  with scientific partners, philanthropic funders, fiscal sponsors,
                  practitioners, and community operators.
                </p>
                <p>
                  We will share the current product thesis, commercial model,
                  governance commitments, open risks, and evidence required before
                  accepting capital.
                </p>
                <a
                  className={styles.invitationAction}
                  href="mailto:hello@genii.foundation?subject=Providence%20investor%20diligence"
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
