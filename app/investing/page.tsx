import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PrimaryNavigation } from "../PrimaryNavigation";
import { FinancialModel } from "./FinancialModel";
import styles from "./investing.module.css";

export const metadata: Metadata = {
  title: "Capital for a Coherent Future | GENII Foundation",
  description:
    "A working vision for patient investment and philanthropic partnership with GENII Foundation.",
  alternates: { canonical: "/investing" },
  openGraph: {
    title: "Capital for a Coherent Future",
    description:
      "Two forms of capital for the research, technology, and human infrastructure of Providence.",
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
  { href: "#invitation", label: "Conversation" },
] as const;

const commercialPathways = [
  {
    horizon: "Leading first venture",
    title: "Private companion",
    text: "A consent-first, on-device application that helps people reflect on the quality of presence they bring to deliberate encounters.",
  },
  {
    horizon: "Early extension",
    title: "Powered by Providence",
    text: "A shared telemetry and practice system for peak-experience retreat centers and long-term intentional communities.",
  },
  {
    horizon: "Recurring infrastructure",
    title: "Practitioner tools",
    text: "Cohort, curriculum, consent, and integration software for qualified independent guides and aligned retreat operators.",
  },
  {
    horizon: "Licensable infrastructure",
    title: "Consent system",
    text: "Local processing, multi-person consent, participant-controlled records, and supported research tools for intimate group settings.",
  },
];

const developmentSequence = [
  {
    number: "01",
    title: "Gather people",
    text: "Mentor relationships, carefully held conversations, and small gatherings test whether the human architecture creates value before technology claims credit for it.",
  },
  {
    number: "02",
    title: "Test the signal",
    text: "Independent research asks whether interpersonal coherence can be measured reliably, interpreted humbly, and reflected through freely chosen participation.",
  },
  {
    number: "03",
    title: "Build the companion",
    text: "A private product carries reflection into ordinary life and begins the recurring commercial engine.",
  },
  {
    number: "04",
    title: "Support practice",
    text: "Powered by Providence, practitioner software, and year-long cohorts connect the product to skilled human guidance.",
  },
  {
    number: "05",
    title: "Coordinate communities",
    text: "Later systems may support shared projects, bounded trust attestations, and local institutional memory under participant governance.",
  },
  {
    number: "06",
    title: "Earn the frontier",
    text: "Portable relational standing and future currency research remain long-horizon work, pursued only after the near-term products earn the evidence and governance they require.",
  },
];

const principles = [
  "Participants govern their intimate data",
  "Consent remains explicit, renewable, and multi-person",
  "Revenue comes from chosen products and services",
  "Human agency outranks engagement metrics",
  "Coherence remains contextual, plural, and non-ranking",
  "Clinical and spiritual claims remain bounded by evidence and scope",
  "Providence serves personal and community practice, independent of employment evaluation",
  "Mission stewards retain permanent authority over any change of control",
  "Material risks receive independent review",
  "Core software and protocols remain open and auditable",
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
  return <span aria-hidden="true">&#8599;</span>;
}

export default function InvestingPage() {
  return (
    <div className={styles.site} id="top">
      <a className={styles.skipLink} href="#main-content">
        Skip to the investment vision
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
            <p className={styles.eyebrow}>Capital for a coherent future</p>
            <div className={styles.heroGrid}>
              <h1 id="investing-title">Two forms of capital. One long horizon.</h1>
              <div className={styles.heroCopy}>
                <p>
                  GENII is developing the research, technology, and human
                  infrastructure of Providence. We are opening two parallel
                  conversations: patient investment in a bounded commercial
                  venture, and philanthropic partnership in the commons that
                  gives the venture its purpose.
                </p>
                <a href="#paths">See the two paths <Arrow /></a>
              </div>
            </div>

            <aside className={styles.formationNote} aria-label="Formation status">
              <strong>Working architecture</strong>
              <p>
                GENII Foundation is in formation. Fiscal sponsorship, an
                independent public charity, and a separate mission-locked
                commercial company are being designed with counsel. Entity form and
                domicile will follow function, governance, capital needs, and operating
                footprint. This page states our intended architecture as a working
                discussion document. Final entities and any securities offering will
                require definitive formation and offering documents.
              </p>
            </aside>
          </div>
        </section>

        <section className={styles.premise} aria-labelledby="premise-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>The proposition</p>
            <div className={styles.premiseGrid}>
              <h2 id="premise-title">
                Human presence can become a practical capacity, supported by
                careful science and humane technology.
              </h2>
              <div>
                <p>
                  Providence begins with people: mentors, peers, practitioners,
                  gatherings, retreats, and communities capable of holding
                  genuine encounter. Technology enters where it can return
                  perception to the people creating the experience.
                </p>
                <p>
                  The commercial opportunity lives within that wider ecology.
                  The public-benefit work protects the research, access,
                  standards, and shared infrastructure held permanently in
                  mission stewardship.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.capitalPaths} id="paths" aria-labelledby="paths-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Parallel capital</p>
            <div className={styles.sectionHeading}>
              <h2 id="paths-title">Different duties. Shared work.</h2>
              <p>
                Each form of capital receives a clear mandate and remains faithful
                to the duties attached to it.
              </p>
            </div>

            <div className={styles.pathGrid}>
              <article className={`${styles.pathCard} ${styles.investorCard}`}>
                <div className={styles.pathNumber}>01</div>
                <p className={styles.pathType}>For the patient impact investor</p>
                <h3>Build the engine.</h3>
                <p className={styles.pathLead}>
                  Providence&apos;s primary initial financing strategy is patient
                  impact investment into the commercial venture, led by
                  values-aligned angels and family offices. These patient partners
                  define the initial strategy.
                </p>

                <div className={styles.pathDetails}>
                  <section>
                    <h4>Leading venture</h4>
                    <p>
                      The Providence Companion, a private on-device coherence
                      application, is the leading candidate for the first
                      commercial company. Its precise product boundary remains
                      under active discussion.
                    </p>
                  </section>
                  <section>
                    <h4>Revenue under investigation</h4>
                    <ul>
                      <li>Companion subscriptions</li>
                      <li>Revenue-positive Providence retreats</li>
                      <li>Powered by Providence partner systems</li>
                      <li>Practitioner and cohort software</li>
                      <li>Partner licensing and technical support</li>
                      <li>Custom retreat and community implementations</li>
                    </ul>
                  </section>
                  <section>
                    <h4>Intended capital structure</h4>
                    <p>
                      A mission-locked commercial company in the jurisdiction best
                      suited to its governance and financing, with patient,
                      potentially capped return mechanics. Permanent mission
                      governance gives mission stewards exclusive authority over any
                      sale, merger, or change of control. Counsel and definitive
                      documents will establish the final terms.
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
                <h3>Protect the commons.</h3>
                <p className={styles.pathLead}>
                  Charitable capital for measurable public benefit over the same
                  three to ten year horizon, preserving the shared work as durable
                  public-benefit infrastructure.
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
                    <h4>Immediate bridge</h4>
                    <p>
                      A comprehensive fiscal sponsor could receive eligible
                      charitable gifts, employ the initial team, and administer
                      the work while GENII prepares its own exemption application.
                    </p>
                  </section>
                  <section>
                    <h4>Accountability</h4>
                    <p>
                      Restricted budgets, independent governance, published
                      evidence thresholds, participant safeguards, and clear
                      separation from investor-owned product development.
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
              <p className={styles.eyebrow}>One partner may walk both paths</p>
              <div>
                <h3>Two checks. Two duties.</h3>
                <p>
                  A philanthropic gift can support charitable research and public
                  infrastructure. A separate investment can fund the commercial
                  company and seek a return. Investment rights arise solely from
                  that separately documented investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.venture} id="commercial" aria-labelledby="venture-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>A bounded commercial venture</p>
            <div className={styles.sectionHeading}>
              <h2 id="venture-title">An experience system, beginning on device.</h2>
              <p>
                The company can unite the application with a wider experience
                system while GENII stewards the public-benefit ecosystem.
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
                <h3>Retreats are part of the product thesis.</h3>
              </div>
              <div>
                <p>
                  Retreats provide an unusually clear container for consent,
                  skilled guidance, immediate reflection, and careful research.
                  Providence-produced retreats are designed to be revenue positive
                  while revealing what the companion should become.
                </p>
                <p>
                  Partnership replaces land ownership in this model. Retreat venues
                  and intentional communities provide a clearer, more scalable path
                  while each place retains responsibility for its land and culture.
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
                    Consent, wearable pairing, local signal processing, a guide
                    console, gentle shared reflection, and private post-retreat
                    integration can form one coherent system around an existing
                    program and its practitioners.
                  </p>
                  <dl>
                    <div>
                      <dt>Partner value</dt>
                      <dd>Better reflection, program learning, and continuity after participants leave.</dd>
                    </div>
                    <div>
                      <dt>Revenue under study</dt>
                      <dd>Annual venue licenses, instrumentation, training, support, and per-program services.</dd>
                    </div>
                  </dl>
                </article>

                <article>
                  <p className={styles.poweredType}>Long-term intentional communities</p>
                  <h4>Build coherence into the culture.</h4>
                  <p>
                    Voluntary check-ins, group practices, conflict-repair support,
                    community reflection, and institutional memory can help a
                    community perceive the culture it creates over months and years.
                  </p>
                  <dl>
                    <div>
                      <dt>Partner value</dt>
                      <dd>A shared practice layer for governance, belonging, repair, and cultural learning.</dd>
                    </div>
                    <div>
                      <dt>Revenue under study</dt>
                      <dd>Paid discovery, implementation, annual support, and optional research partnerships.</dd>
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
                <strong>Community boundary</strong>
                <p>
                  Housing, employment, leadership, membership, and access to
                  community life remain independent of physiological measures.
                  Individual coherence remains private from community leaders.
                  Participation remains voluntary, contestable, and reversible.
                </p>
              </aside>

              <aside className={styles.sensingBoundary}>
                <strong>Ambient sensing frontier</strong>
                <p>
                  Continuous ambient sensing could deepen the companion over time.
                  Its field includes bystanders as well as active participants. The
                  research path therefore requires multi-person consent, visible
                  session boundaries, bystander protection, redaction, and withdrawal
                  before continuous sensing becomes an ordinary product feature.
                </p>
              </aside>
            </section>

            <section className={styles.returnCase} aria-labelledby="return-title">
              <div className={styles.returnHeading}>
                <div>
                  <p className={styles.eyebrow}>The commercial loop</p>
                  <h3 id="return-title">Retreats establish trust. The companion compounds.</h3>
                </div>
                <p>
                  Venture-scale economics come from a repeatable route between a
                  powerful experience and recurring, voluntary use. Human
                  relationships remain ends in themselves rather than inventory.
                </p>
              </div>

              <div className={styles.returnGrid}>
                <article>
                  <span>Revenue positive</span>
                  <h4>Providence retreats</h4>
                  <p>
                    Programs produced by Providence cover their full costs and
                    contribute surplus to continued development.
                  </p>
                </article>
                <article>
                  <span>Recurring partner revenue</span>
                  <h4>Powered retreats and communities</h4>
                  <p>
                    Operators pay for licenses, training, coaching, guidance,
                    instrumentation, implementation, and ongoing support.
                  </p>
                </article>
                <article>
                  <span>Recurring individual revenue</span>
                  <h4>Providence Companion</h4>
                  <p>
                    Participants can subscribe to additional companion functions
                    they choose to use for weeks, months, or years after a retreat.
                  </p>
                </article>
              </div>

              <div className={styles.returnBoundary}>
                <h4>Patient capital comes first.</h4>
                <p>
                  Providence is raising first from values-aligned angels and family
                  offices. Large companion adoption and repeatable partner licensing
                  may create substantial enterprise value. Permanent mission
                  governance gives mission stewards exclusive authority over any
                  sale, merger, or change of control.
                </p>
                <p>
                  The software core can remain open source. Revenue comes from the
                  official product, trusted marks, supported infrastructure,
                  integrations, training, and the quality of implementation.
                </p>
              </div>
            </section>
          </div>
        </section>

        <section className={styles.sequence} aria-labelledby="sequence-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>A versioned path</p>
            <div className={styles.sectionHeading}>
              <h2 id="sequence-title">Each stage must earn the next.</h2>
              <p>
                Near-term products stand on their own. Later stages remain
                horizons until evidence, governance, and actual use justify them.
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
              <h2 id="architecture-title">Federated by design.</h2>
              <p>
                Valuable things belong in the entity capable of protecting them.
                Communities steward their cultures, participants govern their
                intimate data, and the Foundation protects the commons.
              </p>
            </div>

            <div className={styles.architectureGrid}>
              <article>
                <p>Public charity</p>
                <h3>GENII Foundation</h3>
                <ul>
                  <li>Research and public education</li>
                  <li>Open standards and reference protocols</li>
                  <li>Safety, evidence, and access</li>
                  <li>Scholarships and the commons</li>
                  <li>Mission and trademark stewardship</li>
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
                  <li>Premium experience systems</li>
                  <li>Subscriptions and partner licenses</li>
                  <li>Customer support and implementations</li>
                  <li>Patient, noncontrolling investor return</li>
                </ul>
              </article>
            </div>

            <div className={styles.founderStatement}>
              <div>
                <p className={styles.eyebrow}>Founding intellectual property</p>
                <h3>Aubrey and Robbie are building this together.</h3>
              </div>
              <p>
                Robbie authored the founding manuscripts. Aubrey and Robbie are
                the founding team building Providence and GENII together. Robbie
                and Aubrey control all relevant founding intellectual property.
                Before accepting capital, counsel will document that control,
                founder contributions, open-source and trademark policies, and the
                licenses separating charitable and commercial use.
              </p>
            </div>

            <div className={styles.satelliteGrid}>
              <article>
                <h3>Fiscal sponsor</h3>
                <p>
                  A temporary or continuing charitable home during formation,
                  with control of gifts, payroll, compliance, and project assets.
                </p>
              </article>
              <article>
                <h3>Local operators</h3>
                <p>
                  Retreat centers, independent practitioners, and intentional
                  communities retain their relationships, governance, culture,
                  and responsibility.
                </p>
              </article>
              <article>
                <h3>Place partnerships</h3>
                <p>
                  Retreat centers and intentional communities retain ownership
                  and stewardship of place while licensing the Providence system.
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
                Every product, partnership, and capital agreement must preserve them.
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
            <p className={styles.eyebrow}>Founding conversations</p>
            <div className={styles.invitationGrid}>
              <h2 id="invitation-title">Help us make the first proof honest.</h2>
              <div>
                <p>
                  We are speaking with people who can test the structure as well
                  as fund it: patient angels, scientific partners, philanthropic
                  patrons, fiscal sponsors, practitioners, and community stewards.
                </p>
                <p>
                  The first conversation is exploratory. We will share the current
                  evidence, the open questions, and the work required before any
                  capital moves.
                </p>
                <a
                  className={styles.invitationAction}
                  href="mailto:hello@genii.foundation?subject=Founding%20conversation%20with%20GENII"
                >
                  Begin a conversation <Arrow />
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
