import styles from "./InvestingMilestoneArt.module.css";

type MilestoneKind = "thesis" | "publisher" | "providence" | "retreat" | "community" | "practice";

function Thesis() {
  return (
    <div className={styles.thesis}>
      <div className={styles.book}>
        <span className={styles.bookTitle}>The<br />Coherence<br />Thesis</span>
        <svg className={styles.bookMark} viewBox="0 0 100 100" fill="none" focusable="false">
          <circle cx="37" cy="50" r="30" />
          <circle cx="63" cy="50" r="30" />
          <path d="M50 17v66M7 50h86" />
        </svg>
      </div>
    </div>
  );
}

function Publisher() {
  return (
    <div className={styles.publisher}>
      <div className={`${styles.edition} ${styles.editionBack}`}>
        <span className={styles.monogram}>Aa</span>
        <span className={styles.printLines} />
      </div>
      <div className={`${styles.edition} ${styles.editionFront}`}>
        <span className={styles.editionTitle}>A world<br />of ideas.</span>
        <span className={styles.printLines} />
        <svg className={styles.editionMark} viewBox="0 0 40 14" fill="none" focusable="false">
          <path d="M0 7h29m-6-6 6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}

function Providence() {
  return (
    <svg viewBox="0 0 300 180" fill="none" focusable="false">
      <g className={styles.fineGold}>
        <circle cx="108" cy="72" r="47" />
        <circle cx="108" cy="72" r="36" />
      </g>
      <g className={styles.fineSage}>
        <circle cx="192" cy="72" r="47" />
        <circle cx="192" cy="72" r="36" />
      </g>
      <circle className={styles.goldDisc} cx="108" cy="72" r="22" />
      <circle className={styles.sageDisc} cx="192" cy="72" r="22" />
      <path className={styles.goldStroke} d="M22 137h23c10 0 10-10 18-10s8 21 16 21 8-33 16-33 8 28 16 28 9-12 17-12 8 6 16 6h6" />
      <path className={styles.sageStroke} d="M150 137c6 0 6-4 12-4s8 19 16 19 8-30 16-30 8 26 16 26 9-11 17-11 8 4 16 4h35" />
    </svg>
  );
}

function Retreat() {
  return (
    <svg viewBox="0 0 300 180" fill="none" focusable="false">
      <ellipse className={styles.fineGold} cx="150" cy="91" rx="92" ry="59" />
      <ellipse className={styles.fineSage} cx="150" cy="91" rx="66" ry="41" />
      <g className={styles.personGold}>
        <circle cx="150" cy="30" r="8" />
        <path d="M135 52c0-15 30-15 30 0" />
        <circle cx="224" cy="115" r="8" />
        <path d="M209 137c0-15 30-15 30 0" />
        <circle cx="76" cy="115" r="8" />
        <path d="M61 137c0-15 30-15 30 0" />
      </g>
      <g className={styles.personSage}>
        <circle cx="68" cy="62" r="8" />
        <path d="M53 84c0-15 30-15 30 0" />
        <circle cx="232" cy="62" r="8" />
        <path d="M217 84c0-15 30-15 30 0" />
        <circle cx="150" cy="139" r="8" />
        <path d="M135 161c0-15 30-15 30 0" />
      </g>
      <g className={styles.goldStroke}>
        <circle cx="143" cy="88" r="16" />
        <circle cx="157" cy="88" r="16" />
      </g>
    </svg>
  );
}

function Community() {
  return (
    <svg viewBox="0 0 300 180" fill="none" focusable="false">
      <path className={styles.fineSage} d="M41 139c15-40 45-56 75-40s39 44 69 22 48-29 74 18" />
      <path className={styles.fineGold} d="M41 144h218M76 52c27-30 54-34 76-8s41 28 72 4" />
      <g className={styles.sageStroke}>
        <path d="M55 130V86a23 23 0 0 1 46 0v44z" />
        <path d="M67 130v-29a11 11 0 0 1 22 0v29" />
        <path d="M199 130V86a23 23 0 0 1 46 0v44z" />
        <path d="M211 130v-29a11 11 0 0 1 22 0v29" />
      </g>
      <path className={styles.goldStroke} d="M117 130V61a33 33 0 0 1 66 0v69zM134 130V88a16 16 0 0 1 32 0v42" />
      <circle className={styles.goldDisc} cx="150" cy="58" r="7" />
      <circle className={styles.sageDisc} cx="111" cy="142" r="5" />
      <circle className={styles.goldDisc} cx="150" cy="150" r="5" />
      <circle className={styles.sageDisc} cx="189" cy="142" r="5" />
    </svg>
  );
}

function Practice() {
  return (
    <svg viewBox="0 0 300 180" fill="none" focusable="false">
      <path className={styles.fineGold} d="M212 49a76 76 0 1 0 0 82" />
      <path className={styles.fineSage} d="M219 121a66 66 0 1 0 0-62" />
      <path className={styles.goldStroke} d="m202 48 11 1-1-11m-1 84 8-1-1 9" />
      <rect className={styles.device} x="113" y="26" width="74" height="128" rx="13" />
      <path className={styles.fineGold} d="M140 36h20M140 144h20" />
      <circle className={styles.fineGold} cx="142" cy="76" r="17" />
      <circle className={styles.fineSage} cx="158" cy="76" r="17" />
      <path className={styles.goldStroke} d="M122 112h10c6 0 6-10 11-10s5 18 10 18 5-12 10-12 6 4 10 4h5" />
      <circle className={styles.sageDisc} cx="74" cy="92" r="5" />
      <circle className={styles.goldDisc} cx="226" cy="88" r="5" />
    </svg>
  );
}

const artwork = {
  thesis: Thesis,
  publisher: Publisher,
  providence: Providence,
  retreat: Retreat,
  community: Community,
  practice: Practice,
};

/** Editorial illustrations only, never implied screenshots or participant data. */
export function InvestingMilestoneArt({ kind }: { kind: MilestoneKind }) {
  const Artwork = artwork[kind];

  return (
    <div className={styles.art} aria-hidden="true" data-milestone-art={kind}>
      <Artwork />
    </div>
  );
}
