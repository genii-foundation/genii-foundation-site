import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PrimaryNavigation } from "../PrimaryNavigation";
import { FinancialModel } from "./FinancialModel";
import styles from "./investing.module.css";

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

const investingSections = [
  { href: "#paths", label: "Capital paths" },
  { href: "#commercial", label: "Commercial model" },
  { href: "#architecture", label: "Architecture" },
  { href: "#invitation", label: "Diligence" },
] as const;

const commercialPathways = [
  {
    horizon: "First product",
    title: "Providence Companion",
    text: "A private, on-device application for individual reflection, post-retreat integration, and sustained coherence practice.",
  },
  {
    horizon: "Partner distribution",
    title: "Powered by Providence",
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
    text: "Powered by Providence packages the shared technical and ethical core for retreat centers and intentional communities.",
  },
  {
    number: "06",
    title: "Pursue frontier research",
    text: "Portable relational standing and future currency systems remain long-horizon research, gated by evidence, governance, and demonstrated demand.",
  },
];

const principles = [
  "Participants retain authority over every use of their intimate data",
  "Consent is explicit, renewable, and governed by every person whose data is involved",
  "Revenue comes from products and services chosen by participants and partners",
  "Product decisions protect human agency ahead of engagement metrics",
  "Coherence is contextual, plural, and unsuitable for ranking people",
  "Clinical and spiritual claims remain within the evidence and scope that support them",
  "Providence remains independent of employment screening and workplace evaluation",
  "Mission stewards retain exclusive authority over any sale, merger, or change of control",
  "Independent review governs material scientific, safety, and consent risks",
  "Core software and reference protocols remain open and auditable",
];

function Wordmark({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      alt="GENII"
      height={238}
      loading={priority ? "eager" : undefined}
      priority={priority}
      src="/brand/genii-wordmark-black.png"
      width={1135}
    />
  );
}

function Arrow() {
  return (
    <span aria-hidden="true" className={styles.actionArrow}>
      <svg focusable="false" viewBox="0 0 16 16">
        <path className={styles.actionArrowStem} d="M4 12 11 5" />
        <path d="M7.25 5H11v3.75" />
      </svg>
    </span>
  );
}

export default function InvestingPage() {
  return (
    <div className={styles.site} id="top">
      <a className={styles.skipLink} href="#main-content">
        Skip to the investment case
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.headerBrand} href="/" aria-label="GENII Foundation, home">
            <Wordmark priority />
            <span>Foundation</span>
          </Link>
          <PrimaryNavigation sectionItems={investingSections} />
        </div>
      </header>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="investing-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Patient capital for Providence</p>
            <div className={styles.heroGrid}>
              <h1 id="investing-title">Back the infrastructure of human coherence.</h1>
              <div className={styles.heroCopy}>
                <p>
                  Providence is building a consent-bound commercial system around
                  a private companion, revenue-positive retreats, partner
                  implementations, and an independent practitioner network. GENII
                  protects the research, standards, and public-interest
                  infrastructure on which that system depends.
                </p>
                <a href="#paths">Review the capital strategy <Arrow /></a>
              </div>
            </div>

            <aside className={styles.formationNote} aria-label="Formation status">
              <strong>Working architecture</strong>
              <p>
                GENII Foundation is in formation. Fiscal sponsorship, an
                independent public charity, and a separate mission-locked
                commercial company are under legal design. Counsel will recommend
                entity form and domicile based on governance, financing, tax, and
                operating requirements. This page describes the intended structure,
                not completed entities or definitive offering terms.
              </p>
            </aside>
          </div>
        </section>

        <section className={styles.premise} aria-labelledby="premise-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Investment premise</p>
            <div className={styles.premiseGrid}>
              <h2 id="premise-title">
                Human presence can become a trainable capacity, supported by
                rigorous science and humane technology.
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
              <h2 id="paths-title">One mission requires distinct capital mandates.</h2>
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
                    <h4>Initial product</h4>
                    <p>
                      The Providence Companion is the leading first product: a
                      private, on-device application for post-retreat integration
                      and sustained coherence practice. Retreats, partner systems,
                      and practitioner tools define the commercial scope.
                    </p>
                  </section>
                  <section>
                    <h4>Initial revenue surfaces</h4>
                    <ul>
                      <li>Companion subscriptions</li>
                      <li>Providence-produced retreats</li>
                      <li>Powered by Providence implementation and licensing</li>
                      <li>Practitioner training, software, and renewals</li>
                    </ul>
                  </section>
                  <section>
                    <h4>Intended capital structure</h4>
                    <p>
                      A mission-locked commercial company in the jurisdiction best
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
                  Discuss patient capital <Arrow />
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
                  Discuss philanthropic support <Arrow />
                </a>
              </article>
            </div>

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

            <section className={styles.poweredSystem} aria-labelledby="powered-title">
              <div className={styles.poweredHeader}>
                <div>
                  <p className={styles.eyebrow}>Place-based partnership</p>
                  <h3 id="powered-title">Powered by Providence</h3>
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
            </section>

            <section className={styles.returnCase} aria-labelledby="return-title">
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
                  <h4>Providence Companion</h4>
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
            </section>
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
                <span>Arm&apos;s-length</span>
                <strong>licenses and services</strong>
              </div>
              <article>
                <p>Mission-locked commercial company</p>
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
              <p className={styles.eyebrow}>Inviolable principles</p>
              <h2 id="guardrails-title">
                These terms govern every product, partnership, and financing.
              </h2>
            </div>
            <ul className={styles.principleGrid}>
              {principles.map((principle, index) => (
                <li key={principle}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {principle}
                </li>
              ))}
            </ul>
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
                  Start a diligence conversation <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link className={styles.footerBrand} href="/" aria-label="GENII Foundation, home">
            <Wordmark />
            <span>Foundation</span>
          </Link>
          <p>For futures worth inhabiting.</p>
          <div className={styles.footerLinks}>
            <Link href="/">Foundation</Link>
            <a href="https://www.coherence-thesis.com/">The Coherence Thesis</a>
            <a href="mailto:hello@genii.foundation">Email</a>
          </div>
          <small>
            This working discussion document is not an offer to sell securities,
            tax advice, legal advice, or a promise of financial or charitable results.
          </small>
        </div>
      </footer>
    </div>
  );
}
