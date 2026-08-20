"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./InvestingComparison.module.css";

export function InvestingComparison({
  active,
  reviewGate = false,
}: {
  active: "alignment" | "current";
  reviewGate?: boolean;
}) {
  const [reviewVisible, setReviewVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setReviewVisible(window.location.hash === "#compare");
    updateVisibility();
    window.addEventListener("hashchange", updateVisibility);
    return () => window.removeEventListener("hashchange", updateVisibility);
  }, []);

  const content = (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <p className={styles.label}>
          <span>Working comparison</span>
          Choose an investor narrative
        </p>
        <nav aria-label="Investor narrative versions" className={styles.choices}>
          <Link
            aria-current={active === "current" ? "page" : undefined}
            href="/investing#compare"
          >
            Current case
          </Link>
          <Link
            aria-current={active === "alignment" ? "page" : undefined}
            href="/investing/alignment"
          >
            Alignment thesis
          </Link>
        </nav>
      </div>
    </div>
  );

  if (!reviewGate) return content;

  return (
    <aside
      className={`${styles.gate} ${reviewVisible ? styles.gateVisible : ""}`}
      id="compare"
      aria-label="Investor narrative comparison"
    >
      {content}
    </aside>
  );
}
