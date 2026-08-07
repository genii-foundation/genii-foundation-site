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
  "Revenue comes from products and services chosen by participants and partners",
  "Product decisions protect human agency ahead of engagement metrics",
  "Coherence is contextual, plural, and unsuitable for ranking people",
  "Clinical and spiritual claims remain within the evidence and scope that support them",
  "Providence remains independent of employment screening and workplace evaluation",
  "Mission stewards retain exclusive authority over any sale, merger, or change of control",
  "Independent review governs material scientific, safety, and consent risks",
  "Core software and reference protocols remain open and auditable",
] as const;

export default function PrinciplesPage() {
  return (
    <div className={styles.site} id="top">
      <div className={styles.headerSpacer} aria-hidden="true" />

      <main id="main-content">
        <section
          className={`${styles.hero} ${styles.principlesHero}`}
          aria-labelledby="principles-title"
        >
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Providence constitutional commitments</p>
            <div className={styles.heroGrid}>
              <h1 id="principles-title">Ten commitments govern Providence.</h1>
              <div className={styles.heroCopy}>
                <p>
                  Every product, partnership, and financing must remain consistent
                  with all ten.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.guardrails} ${styles.principlesGuardrails}`}
          id="commitments"
          aria-label="The ten commitments"
        >
          <div className={styles.contentFrame}>
            <p className={styles.eyebrow}>Inviolable principles</p>
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
