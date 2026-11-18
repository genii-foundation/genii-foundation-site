import type { Metadata } from "next";

import { Keystone, PageHero, PageShell } from "../../parts";
import styles from "../../v2.module.css";

/*
 * Temporary. Three candidate designs for the Providence hero pictures, shown
 * in place so the owner can compare them. Delete this route, and the two
 * losing designs in v2.module.css, once one is chosen.
 */
export const metadata: Metadata = {
  title: "Keystone design samples | GENII Foundation",
  robots: { index: false, follow: false },
};

const samples = [
  { design: "night", label: "A · Night", note: "Dark tiles with a gold hairline." },
  { design: "leaf", label: "B · Gold leaf", note: "Paper tiles in a double gold rule, pictures warmed." },
  { design: "orbit", label: "C · Orbit", note: "Round pictures on one ring around Providence." },
] as const;

export default async function KeystoneSamplesPage({
  searchParams,
}: {
  searchParams: Promise<{ only?: string }>;
}) {
  // ?only=night (or leaf, orbit) shows one design by itself.
  const { only } = await searchParams;
  const shown = samples.filter((sample) => !only || sample.design === only);

  return (
    <PageShell>
      {shown.map((sample) => (
        <div id={sample.design} key={sample.design}>
          <div className={styles.frame}>
            <p className={styles.sampleLabel}>
              {sample.label}: {sample.note}
            </p>
          </div>
          <PageHero
            eyebrow="Venture three · Coordination"
            title="Providence."
            subtitle="Intelligence that increases agency."
            lead="A synchronicity engine, built with Terran Labs."
            body="Standalone tools are proven first, then converge into one operating system for personal and social life, where people's intentions can find one another."
            figure={<Keystone design={sample.design} />}
          />
        </div>
      ))}
    </PageShell>
  );
}
