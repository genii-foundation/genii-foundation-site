import type { Metadata } from "next";

import {
  ProvidenceArrow,
  ProvidenceFooter,
  ProvidenceHeader,
} from "../ProvidencePageChrome";
import styles from "../providence.module.css";

export const metadata: Metadata = {
  title: "Providence Principles | GENII Foundation",
  description:
    "Ten constitutional commitments governing every Providence product, partnership, and financing.",
  alternates: { canonical: "/principles" },
  openGraph: {
    title: "Providence Principles",
    description:
      "Ten commitments protecting participant authority, human agency, scientific integrity, and mission control.",
    url: "https://genii.foundation/principles",
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

const principleSections = [
  { href: "#role", label: "Constitutional role" },
  { href: "#commitments", label: "Ten commitments" },
  { href: "#application", label: "Application" },
] as const;

const principles = [
  {
    domain: "Participant authority",
    text: "Participants retain authority over every use of their intimate data",
  },
  {
    domain: "Collective consent",
    text: "Consent is explicit, renewable, and governed by every person whose data is involved",
  },
  {
    domain: "Revenue",
    text: "Revenue comes from products and services chosen by participants and partners",
  },
  {
    domain: "Product design",
    text: "Product decisions protect human agency ahead of engagement metrics",
  },
  {
    domain: "Measurement",
    text: "Coherence is contextual, plural, and unsuitable for ranking people",
  },
  {
    domain: "Claims",
    text: "Clinical and spiritual claims remain within the evidence and scope that support them",
  },
  {
    domain: "Workplace boundary",
    text: "Providence remains independent of employment screening and workplace evaluation",
  },
  {
    domain: "Mission control",
    text: "Mission stewards retain exclusive authority over any sale, merger, or change of control",
  },
  {
    domain: "Independent review",
    text: "Independent review governs material scientific, safety, and consent risks",
  },
  {
    domain: "Open infrastructure",
    text: "Core software and reference protocols remain open and auditable",
  },
] as const;

const applications = [
  {
    number: "01",
    title: "Products",
    text: "Participant authority, renewable multi-person consent, agency before engagement, contextual measurement, bounded claims, and an open core constrain product decisions.",
  },
  {
    number: "02",
    title: "Partnerships",
    text: "Partners cannot turn Providence into a mechanism for employment screening or workplace evaluation. Material scientific, safety, and consent risks remain subject to independent review.",
  },
  {
    number: "03",
    title: "Financing",
    text: "Capital cannot purchase authority over a sale, merger, or change of control. Revenue must come from products and services chosen by participants and partners.",
  },
] as const;

export default function PrinciplesPage() {
  return (
    <div className={styles.site} id="top">
      <ProvidenceHeader
        sectionItems={principleSections}
        skipLabel="Skip to the Providence Principles"
      />

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="principles-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Providence constitutional commitments</p>
            <div className={styles.heroGrid}>
              <h1 id="principles-title">The terms Providence will not trade away.</h1>
              <div className={styles.heroCopy}>
                <p>
                  Ten commitments constrain every product, partnership, and
                  financing. They protect participant authority, human agency,
                  scientific integrity, and mission control.
                </p>
                <a href="#commitments">
                  Read the commitments <ProvidenceArrow />
                </a>
              </div>
            </div>

            <aside className={styles.formationNote} aria-label="Legal status">
              <strong>Constitutional status</strong>
              <p>
                These commitments are constitutional in function. They govern
                Providence&apos;s current design and are intended for adoption in the
                relevant governance and operating documents. No legal constitution
                has been ratified, and this page is not itself legally binding.
              </p>
            </aside>
          </div>
        </section>

        <section className={styles.premise} id="role" aria-labelledby="role-title">
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Constitutional role</p>
            <div className={styles.premiseGrid}>
              <h2 id="role-title">A boundary on power before Providence asks for trust.</h2>
              <div>
                <p>
                  Providence will work with intimate data, scientific claims,
                  partner incentives, and investor capital. These principles state
                  which powers it will not exercise and which safeguards cannot be
                  subordinated to growth.
                </p>
                <p>
                  They apply across the system. Product requirements, partnership
                  terms, governance choices, and financing documents must remain
                  consistent with all ten commitments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.guardrails}
          id="commitments"
          aria-labelledby="commitments-title"
        >
          <div className={styles.contentFrame}>
            <div className={styles.guardrailIntro}>
              <p className={styles.eyebrow}>Inviolable principles</p>
              <h2 id="commitments-title">Ten commitments govern the whole system.</h2>
            </div>
            <ol className={styles.principleGrid}>
              {principles.map((principle, index) => (
                <li key={principle.text}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>{principle.domain}</small>
                    {principle.text}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className={styles.principleApplication}
          id="application"
          aria-labelledby="application-title"
        >
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Application</p>
            <div className={styles.sectionHeading}>
              <h2 id="application-title">One standard across products, partners, and capital.</h2>
              <p>
                The commitments apply together. A product, partner, or financing
                cannot satisfy one principle by violating another.
              </p>
            </div>
            <div className={styles.applicationGrid}>
              {applications.map((application) => (
                <article key={application.title}>
                  <span>{application.number}</span>
                  <h3>{application.title}</h3>
                  <p>{application.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ProvidenceFooter />
    </div>
  );
}
