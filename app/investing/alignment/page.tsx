import type { Metadata } from "next";

import {
  ProvidenceArrow,
  ProvidenceFooter,
} from "../../ProvidencePageChrome";
import { FinancialModel } from "../FinancialModel";
import { InvestingComparison } from "../InvestingComparison";
import base from "../../providence.module.css";
import styles from "./alignment.module.css";

export const metadata: Metadata = {
  title: "Providence Alignment Thesis | GENII Foundation",
  description:
    "An experimental investor narrative for Providence as a human-alignment layer for personal intelligence.",
  robots: { follow: false, index: false },
};

const researchSignals = [
  {
    title: "Personal systems are accumulating memory and context.",
    text: "Persistent memory and connected tools are becoming ordinary parts of personal AI systems. As those systems learn more about a life and act across more services, the quality, ownership, and governance of personal context become product questions rather than distant theory.",
    links: [
      {
        href: "https://openai.com/index/memory-and-new-controls-for-chatgpt/",
        label: "OpenAI memory controls",
      },
      {
        href: "https://www.anthropic.com/research/model-context-protocol",
        label: "Model Context Protocol",
      },
    ],
  },
  {
    title: "Preference is an incomplete alignment target.",
    text: "Current alignment research increasingly distinguishes a person's immediate preferences from the values, social roles, and negotiated standards that should govern consequential systems. Providence proposes a voluntary way to add declared intention and embodied consequence to that discussion.",
    links: [
      {
        href: "https://arxiv.org/abs/2408.16984",
        label: "Beyond Preferences",
      },
      {
        href: "https://aclanthology.org/2025.coling-main.511/",
        label: "Personalized alignment",
      },
    ],
  },
  {
    title: "Interpersonal physiology contains useful signals, with limits.",
    text: "Controlled studies have associated physiological synchrony with group cohesion, performance, and cooperation. The signal depends on task, modality, and social context. It cannot carry a universal meaning, diagnose a relationship, or stand in for participant testimony.",
    links: [
      {
        href: "https://www.nature.com/articles/s41598-020-65670-1",
        label: "Group cohesion study",
      },
      {
        href: "https://www.nature.com/articles/s41598-019-44667-5",
        label: "Context and synchrony",
      },
    ],
  },
  {
    title: "Intimate data requires structural restraint.",
    text: "Physiological data can reveal more when joined with behavioral and contextual data than participants may expect at collection time. Local processing, narrow permissions, revocation, audit, and graceful exit belong in the architecture from the first prototype.",
    links: [
      {
        href: "https://arxiv.org/abs/2405.15272",
        label: "Physiological data ethics",
      },
      {
        href: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10",
        label: "NIST AI RMF",
      },
    ],
  },
];

const revenueWedges = [
  {
    label: "Recurring individual revenue",
    title: "Providence App",
    text: "A private companion for post-retreat integration, daily practice, and user-governed reflection. The app is the first place to test durable use, paid retention, and local processing.",
  },
  {
    label: "Revenue-positive experience",
    title: "Providence retreats",
    text: "Five-day programs create a bounded setting for skilled practice, informed consent, product research, and high-trust customer acquisition. Each retreat must cover its full delivery cost.",
  },
  {
    label: "Partner distribution",
    title: "Powered By Providence",
    text: "Retreat centers and intentional communities pay for implementation, training, instrumentation, licenses, coaching, and support while retaining authority over their own culture and programs.",
  },
  {
    label: "Professional network",
    title: "Practitioner infrastructure",
    text: "Independent practitioners pay for training, supervised practice, software, standards, and referral infrastructure that improves delivery and extends distribution.",
  },
];

const alignmentFunctions = [
  {
    index: "01",
    title: "Declared orientation",
    text: "People record revisable intentions, commitments, and boundaries when they are able to choose clearly. Personal agents can consult those declarations without treating them as permanent commands.",
  },
  {
    index: "02",
    title: "Embodied feedback",
    text: "Local processing helps a person examine whether an activity supported regulation, recovery, clarity, or strain. Raw physiological data stays on the participant's device whenever possible.",
  },
  {
    index: "03",
    title: "Relational context",
    text: "Consent-bound records can preserve commitments, repair, and trusted collaboration without producing a universal reputation score or giving institutions a tool for social ranking.",
  },
  {
    index: "04",
    title: "Governed action",
    text: "Portable permissions, audit trails, contestability, and revocation give personal systems a clearer boundary for what they may know, infer, recommend, and do.",
  },
];

export default function AlignmentInvestingPage() {
  return (
    <div className={base.site} id="top">
      <div className={base.headerSpacer} aria-hidden="true" />

      <InvestingComparison active="alignment" />

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="alignment-investing-title">
          <div className={styles.frame}>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>Experimental investor thesis</p>
                <h1 id="alignment-investing-title">
                  Personal intelligence will need a human-alignment layer.
                </h1>
              </div>
              <div className={styles.heroCopy}>
                <p className={styles.heroLead}>
                  Providence is building consent, embodied feedback, and relational
                  context for increasingly capable personal systems.
                </p>
                <p>
                  The first commercial proof is deliberately narrower: a private
                  coherence companion, revenue-positive retreats, licensed partner
                  systems, and a practitioner network. Those businesses can generate
                  revenue while testing the human signals and governance required for
                  a larger platform.
                </p>
                <a className={`${styles.heroAction} action-link`} href="#paths">
                  Examine the investment case <ProvidenceArrow />
                </a>
              </div>
            </div>

            <aside className={styles.status} aria-label="Thesis and formation status">
              <strong>Working thesis</strong>
              <p>
                This page distinguishes present products, testable extensions, and a
                long-range platform hypothesis. GENII Foundation and Providence&apos;s
                separate mission-aligned company remain under legal design. No claim
                on this page constitutes completed technology, validated science, or
                offering terms.
              </p>
            </aside>
          </div>
        </section>

        <section className={styles.horizons} aria-labelledby="horizons-title">
          <div className={styles.frame}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}>The investable sequence</p>
                <h2 id="horizons-title">One company. Three evidence horizons.</h2>
              </div>
              <p>
                Angels can finance the near-term business without pricing the
                civilizational thesis as fact. Each horizon earns the right to pursue
                the next.
              </p>
            </div>

            <div className={styles.horizonGrid}>
              <article>
                <span>Now · 0 to 18 months</span>
                <h3>Prove a paid coherence practice.</h3>
                <p>
                  Launch the companion, produce the first retreats, support
                  independent practitioners, and secure initial partner pilots.
                </p>
                <strong>Governing proof</strong>
                <p>Paid retention, retreat contribution, partner renewal, and participant safety.</p>
              </article>
              <article>
                <span>Next · 18 to 36 months</span>
                <h3>Make personal context useful and governable.</h3>
                <p>
                  Connect voluntary intentions, local embodied feedback, and
                  relational practice to user-controlled personal systems.
                </p>
                <strong>Governing proof</strong>
                <p>Repeated user benefit, model portability, revocation, audit, and independent validation.</p>
              </article>
              <article>
                <span>Option · 3 to 10 years</span>
                <h3>Become an open alignment layer.</h3>
                <p>
                  If personal agents approach what the vision paper calls
                  individualized superintelligence, offer interoperable protocols
                  through which they can consult human intention and embodied
                  consequence without enclosing either inside one vendor.
                </p>
                <strong>Governing proof</strong>
                <p>Adoption beyond Providence products, credible governance, and demonstrated demand from agent builders.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.research} aria-labelledby="research-title">
          <div className={styles.frame}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}>Research probe</p>
                <h2 id="research-title">The direction is credible. The synthesis remains unproven.</h2>
              </div>
              <p>
                Several adjacent fields support parts of the thesis. None yet proves
                that physiological coherence can align an agent, or that a single
                representation of human flourishing should do so.
              </p>
            </div>

            <div className={styles.researchGrid}>
              {researchSignals.map((signal) => (
                <article key={signal.title}>
                  <h3>{signal.title}</h3>
                  <p>{signal.text}</p>
                  <div className={styles.sourceLinks}>
                    {signal.links.map((link) => (
                      <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p className={styles.researchNote}>
              Providence should treat coherence as a participant-facing reflection,
              never as an objective verdict about a person, relationship, community,
              or moral worth. Product claims advance only as independent evidence
              supports them.
            </p>
          </div>
        </section>

        <section className={styles.commercial} id="commercial" aria-labelledby="commercial-title">
          <div className={styles.frame}>
            <div className={styles.commercialIntro}>
              <div>
                <p className={styles.eyebrow}>Bounded commercial system</p>
                <h2 id="commercial-title">Revenue begins with experiences people already choose.</h2>
              </div>
              <div>
                <p>
                  Providence does not require broad adoption of personal agents to
                  become a viable company. Retreats, practitioners, communities, and
                  individuals can pay for immediate value. The alignment thesis adds
                  long-range platform value if the initial product earns trust.
                </p>
              </div>
            </div>

            <div className={styles.wedgeGrid}>
              {revenueWedges.map((wedge) => (
                <article key={wedge.title}>
                  <span>{wedge.label}</span>
                  <h3>{wedge.title}</h3>
                  <p>{wedge.text}</p>
                </article>
              ))}
            </div>

            <FinancialModel />
          </div>
        </section>

        <section className={styles.alignmentLayer} aria-labelledby="layer-title">
          <div className={styles.frame}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}>Product expansion</p>
                <h2 id="layer-title">What Providence could add to a personal agent.</h2>
              </div>
              <p>
                Memory helps a system recall a life. Tools help it act. Providence
                would give the person a governed interface for declaring what the
                system should serve and examining what its help produces over time.
              </p>
            </div>

            <div className={styles.stackGrid}>
              {alignmentFunctions.map((item) => (
                <article key={item.index}>
                  <span>{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.evidence} aria-labelledby="evidence-title">
          <div className={styles.frame}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}>Diligence boundary</p>
                <h2 id="evidence-title">Separate evidence from option value.</h2>
              </div>
              <p>
                The pitch becomes stronger when every claim states its burden of
                proof. Providence can be ambitious without laundering conjecture
                through polished design.
              </p>
            </div>

            <div className={styles.evidenceGrid}>
              <article>
                <span className={styles.evidenceLabel}>Supported now</span>
                <h3>Personalization, context, and synchrony matter.</h3>
                <p>
                  Personal AI systems benefit from memory and user context.
                  Interpersonal physiology can correlate with aspects of cohesion and
                  cooperation in bounded settings. Privacy and agency require active
                  protection.
                </p>
              </article>
              <article>
                <span className={styles.evidenceLabel}>Ready to test</span>
                <h3>Participants will pay for a consent-bound practice.</h3>
                <p>
                  Providence can test demand, paid retention, retreat economics,
                  partner renewal, practitioner distribution, signal reliability,
                  and whether reflection improves a participant&apos;s own practice.
                </p>
              </article>
              <article>
                <span className={styles.evidenceLabel}>Long-range hypothesis</span>
                <h3>Providence can guide personal agent behavior.</h3>
                <p>
                  The company must still prove that its signals improve agent
                  recommendations, preserve autonomy, transfer across systems, and
                  produce value that users and developers will pay to adopt.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.capital} id="paths" aria-labelledby="paths-title">
          <div className={styles.frame}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}>Capital strategy</p>
                <h2 id="paths-title">Patient return capital builds the company.</h2>
              </div>
              <p>
                Philanthropy funds public-interest research and standards whose value
                cannot be captured by one company. The instruments, budgets, and
                rights remain separate.
              </p>
            </div>

            <div className={styles.capitalGrid}>
              <article>
                <p className={styles.eyebrow}>For patient impact angels</p>
                <h3>Finance commercial proof and platform option value.</h3>
                <p>
                  Providence is seeking values-aligned angels and family offices with
                  a three to ten year horizon. Capital funds the product team,
                  revenue-positive retreats, partner implementations, practitioner
                  distribution, and the technical work required for private personal
                  context.
                </p>
                <ul>
                  <li>Return comes from subscriptions, programs, licenses, training, and services.</li>
                  <li>Founder and mission stewards retain exclusive authority over any sale, merger, or change of control.</li>
                  <li>The open core remains available while the official product, trusted marks, integrations, and accountable implementation earn revenue.</li>
                  <li>Long-range alignment infrastructure is option value, not a forecast booked into the base case.</li>
                </ul>
                <a
                  className={styles.textAction}
                  href="mailto:hello@genii.foundation?subject=Providence%20alignment%20investment%20thesis"
                >
                  Discuss patient capital <ProvidenceArrow />
                </a>
              </article>

              <article>
                <p className={styles.eyebrow}>For philanthropic partners</p>
                <h3>Fund the parts that must remain public-interest work.</h3>
                <p>
                  GENII Foundation stewards independent research, constitutional
                  commitments, public education, open standards, safety work,
                  scholarships, and community pilots. A comprehensive fiscal sponsor
                  can provide a charitable operating home during formation.
                </p>
                <ul>
                  <li>Independent validation of interpersonal signals and participant outcomes.</li>
                  <li>Privacy, consent, portability, audit, appeal, and exit standards.</li>
                  <li>Open reference protocols and documentation of failures.</li>
                  <li>Reasonable charitable-team compensation, restricted budgets, and independent oversight.</li>
                </ul>
                <a
                  className={styles.textAction}
                  href="mailto:hello@genii.foundation?subject=GENII%20alignment%20research%20and%20philanthropy"
                >
                  Discuss philanthropic support <ProvidenceArrow />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.architecture} id="architecture" aria-labelledby="architecture-title">
          <div className={styles.frame}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}>Institutional architecture</p>
                <h2 id="architecture-title">Open infrastructure needs commercial discipline.</h2>
              </div>
              <p>
                The intended structure protects public-interest research and open
                protocols while giving investors a clear commercial instrument.
                Counsel must complete the final jurisdictions, charters, licenses,
                and financing documents before capital moves.
              </p>
            </div>

            <div className={styles.architectureGrid}>
              <article>
                <h3>GENII Foundation</h3>
                <p>
                  A public-benefit institution responsible for open research,
                  constitutional commitments, safety standards, access, education,
                  and stewardship of the commons.
                </p>
                <ul>
                  <li>Independent scientific validation</li>
                  <li>Open specifications and reference implementations</li>
                  <li>Participant rights and evidence standards</li>
                  <li>Philanthropic and public-interest programs</li>
                </ul>
              </article>
              <article>
                <h3>Providence venture</h3>
                <p>
                  A separate mission-aligned company responsible for products,
                  customers, retreats, partner contracts, practitioner services,
                  integrations, and investor returns.
                </p>
                <ul>
                  <li>Subscriptions and hosted services</li>
                  <li>Retreat and partner revenue</li>
                  <li>Training, implementation, and support</li>
                  <li>Patient, noncontrolling return capital</li>
                </ul>
              </article>
            </div>

            <aside className={styles.architectureBoundary}>
              <strong>Permanent sale protection</strong>
              <p>
                Investors cannot compel an acquisition, merger, or change of control.
                Founder and mission-steward authority, open-source commitments,
                participant rights, and arm&apos;s-length agreements must survive every
                financing round. Aubrey and Robbie control the relevant founding
                intellectual property, which counsel will document before financing.
              </p>
            </aside>
          </div>
        </section>

        <section className={styles.roadmap} aria-labelledby="roadmap-title">
          <div className={styles.frame}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}>Use of capital</p>
                <h2 id="roadmap-title">Build only what the preceding proof earns.</h2>
              </div>
              <p>
                Capital follows explicit gates. Failed assumptions narrow the product
                rather than disappearing into a more grandiose story.
              </p>
            </div>

            <div className={styles.roadmapGrid}>
              <article>
                <span className={styles.evidenceLabel}>0 to 18 months</span>
                <h3>Commercial validation</h3>
                <p>
                  Ship the private companion, produce the first retreats, establish
                  baseline consent and safety operations, and recruit the first
                  practitioner and venue partners.
                </p>
              </article>
              <article>
                <span className={styles.evidenceLabel}>18 to 36 months</span>
                <h3>Interoperable context</h3>
                <p>
                  Test voluntary intention records, portable permissions, local
                  physiological processing, participant-controlled history, and a
                  reference integration with a personal agent system.
                </p>
              </article>
              <article>
                <span className={styles.evidenceLabel}>3 to 10 years</span>
                <h3>Open alignment protocol</h3>
                <p>
                  Expand only if independent evidence, user demand, agent-builder
                  adoption, and governance practice support a wider protocol and
                  standards ecosystem.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.invitation} id="invitation" aria-labelledby="invitation-title">
          <div className={styles.frame}>
            <div className={styles.invitationGrid}>
              <div>
                <p className={styles.eyebrow}>Investor diligence</p>
                <h2 id="invitation-title">Underwrite the first proof. Examine the larger option.</h2>
              </div>
              <div className={styles.invitationCopy}>
                <p>
                  Providence is opening conversations with patient impact angels and
                  values-aligned family offices. Diligence will cover the present
                  product, financial model, formation architecture, open risks,
                  research plan, and evidence required before each expansion.
                </p>
                <a
                  className={styles.primaryAction}
                  href="mailto:hello@genii.foundation?subject=Providence%20alignment%20thesis%20diligence"
                >
                  Start a diligence conversation <ProvidenceArrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <aside className={styles.disclaimer} aria-label="Investment document disclaimer">
          <div className={styles.frame}>
            <small>
              This experimental working document is not an offer to sell securities,
              tax advice, legal advice, scientific consensus, or a promise of
              financial, technical, or charitable results.
            </small>
          </div>
        </aside>
      </main>

      <ProvidenceFooter />
    </div>
  );
}
