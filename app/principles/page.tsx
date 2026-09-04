import type { Metadata } from "next";

import { ProvidenceFooter } from "../ProvidencePageChrome";
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

const principles = [
  "Participants retain authority over every use of their intimate data",
  "Consent is explicit, renewable, and governed by every person whose data is involved",
  "Human flourishing governs every product and business decision. Providence will not pursue growth by capturing attention, exploiting intimate data, creating dependency, or weakening human agency.",
  "Coherence is a unique experience for every human. No single measurement provides the full story. No collection of metrics will ever rank one person above another.",
  "Clinical and spiritual claims remain within the evidence and scope that support them",
  "Providence remains independent of employment screening and workplace evaluation",
  "Mission stewards retain exclusive authority over any sale, merger, or change of control",
  "Independent review governs material scientific, safety, and consent risks",
  "Core software and reference protocols remain open and auditable",
  "No investor, customer, partner, or transaction may override these commitments",
] as const;

export default function PrinciplesPage() {
  return (
    <div className={styles.site} id="top">
      <div className="unified-header-spacer" aria-hidden="true" />

      <main id="main-content">
        <section
          className={`${styles.hero} ${styles.principlesHero}`}
          aria-labelledby="principles-title"
        >
          <div className={styles.contentFrame}>
            <h1 id="principles-title">Ten commitments govern Providence.</h1>
          </div>
        </section>

        <section
          className={`${styles.guardrails} ${styles.principlesGuardrails}`}
          id="commitments"
          aria-label="The ten commitments"
        >
          <div className={styles.contentFrame}>
            <ol className={styles.principleGrid}>
              {principles.map((principle, index) => (
                <li key={principle}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {principle}
                </li>
              ))}
            </ol>
          </div>
        </section>

      </main>

      <ProvidenceFooter />
    </div>
  );
}
