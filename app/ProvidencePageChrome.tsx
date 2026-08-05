import { SiteFooter } from "./SiteFooter";
import styles from "./providence.module.css";

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
  return <SiteFooter />;
}
