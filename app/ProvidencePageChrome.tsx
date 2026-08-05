import Image from "next/image";
import Link from "next/link";

import styles from "./providence.module.css";

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

export function ProvidenceArrow() {
  return (
    <span aria-hidden="true" className={styles.actionArrow}>
      <svg focusable="false" viewBox="0 0 16 16">
        <path className={styles.actionArrowStem} d="M4 12 11 5" />
        <path d="M7.25 5H11v3.75" />
      </svg>
    </span>
  );
}

export function ProvidenceFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Link className={styles.footerBrand} href="/" aria-label="GENII Foundation, home">
          <Wordmark />
          <span>Foundation</span>
        </Link>
        <p>For futures worth inhabiting.</p>
        <div className={styles.footerLinks}>
          <Link href="/">Foundation</Link>
          <Link href="/principles">Principles</Link>
          <a href="https://www.coherence-thesis.com/">The Coherence Thesis</a>
          <a href="mailto:hello@genii.foundation">Email</a>
        </div>
      </div>
    </footer>
  );
}
