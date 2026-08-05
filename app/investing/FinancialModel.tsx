import styles from "./investing.module.css";

type Projection = {
  contribution: number;
  driver: string;
  revenue: number;
  year: string;
};

type RevenueSurface = {
  assumptions: string[];
  contributionModel: string;
  description: string;
  id: string;
  index: string;
  keyProof: string;
  projections: Projection[];
  risks: string[];
  title: string;
  type: string;
  unitModel: string;
};

const revenueSurfaces: RevenueSurface[] = [
  {
    id: "companion-model",
    index: "01",
    type: "Recurring individual revenue",
    title: "Providence Companion",
    description:
      "A voluntary subscription for post-retreat integration and daily coherence practice. The open-source core remains available; paid revenue comes from the official product, supported experiences, integrations, and premium functions.",
    unitModel: "$24 blended monthly revenue per paying participant",
    contributionModel:
      "75% after payment, hosting, support, and routine service delivery",
    keyProof: "Six-month and twelve-month paid retention",
    assumptions: [
      "Working price band of $18, $24, or $30 per month, tested before launch",
      "Average paid subscribers of 500 in Year 1, 2,500 in Year 2, and 10,000 in Year 3",
      "Retreats, practitioners, and partners provide the first distribution channels",
      "Surface contribution reflects direct service delivery; acquisition, product development, and central team costs appear at portfolio level",
      "Participant purchases provide the revenue; participants retain authority over every use of intimate data",
    ],
    projections: [
      {
        year: "Year 1",
        driver: "500 average paid subscribers",
        revenue: 144000,
        contribution: 108000,
      },
      {
        year: "Year 2",
        driver: "2,500 average paid subscribers",
        revenue: 720000,
        contribution: 540000,
      },
      {
        year: "Year 3",
        driver: "10,000 average paid subscribers",
        revenue: 2880000,
        contribution: 2160000,
      },
    ],
    risks: [
      "Durable daily use is the governing retention test after retreat enthusiasm fades.",
      "Every $1 of monthly revenue per user changes annual revenue by $120,000 at 10,000 average subscribers.",
      "Lifetime-value claims wait for observed retention and acquisition cohorts.",
    ],
  },
  {
    id: "retreat-model",
    index: "02",
    type: "Revenue-positive experience",
    title: "Providence-produced retreats",
    description:
      "Five-day, four-night experiences produced by Providence at partner venues. Each retreat must cover its complete delivery cost before companion revenue, donations, or research support receive any credit.",
    unitModel: "30 paid-equivalent participants at $3,500 each",
    contributionModel: "$21,000 per retreat on $105,000 of revenue",
    keyProof: "Twenty paid equivalents break even",
    assumptions: [
      "$34,500 for venue, lodging, and meals",
      "$10,500 for participant technology, payments, and support",
      "$15,000 for facilitators and practitioners",
      "$10,000 for production, operations, and founder compensation",
      "$14,000 for technical support, insurance, legal, administration, and contingency",
      "Scholarships are separately funded paid-equivalent seats",
    ],
    projections: [
      {
        year: "Year 1",
        driver: "3 retreats and 90 paid equivalents",
        revenue: 315000,
        contribution: 63000,
      },
      {
        year: "Year 2",
        driver: "6 retreats and 180 paid equivalents",
        revenue: 630000,
        contribution: 126000,
      },
      {
        year: "Year 3",
        driver: "10 retreats and 300 paid equivalents",
        revenue: 1050000,
        contribution: 210000,
      },
    ],
    risks: [
      "Each paid participant above break-even contributes about $2,000 after variable costs.",
      "Every $100 increase in per-participant cost reduces contribution by $3,000 at full occupancy.",
      "Quality, consent, and practitioner capacity govern the pace of retreat growth.",
    ],
  },
  {
    id: "powered-model",
    index: "03",
    type: "Partner implementation and license",
    title: "Powered by Providence",
    description:
      "A licensed technical and ethical system for established retreat operators and intentional communities. Partners pay for discovery, implementation, training, instrumentation, coaching, and supported operation.",
    unitModel: "$55,000 first-year partner value and $30,000 renewal value",
    contributionModel:
      "55% on implementation years and 75% on renewal years",
    keyProof: "Partners renew around a repeatable shared core",
    assumptions: [
      "$25,000 discovery and implementation",
      "$12,000 training and launch support",
      "$18,000 annual system license",
      "$30,000 renewal includes license, coaching, updates, and support",
      "Three new partners in Year 1, seven in Year 2, and twelve in Year 3",
      "Base case models approximately 80% renewal of eligible partners",
    ],
    projections: [
      {
        year: "Year 1",
        driver: "3 new partners",
        revenue: 165000,
        contribution: 91000,
      },
      {
        year: "Year 2",
        driver: "7 new partners and 2 renewals",
        revenue: 445000,
        contribution: 257000,
      },
      {
        year: "Year 3",
        driver: "12 new partners and 8 renewals",
        revenue: 900000,
        contribution: 543000,
      },
    ],
    risks: [
      "Paid discovery must establish partner willingness to pay before Providence publishes a standardized price card.",
      "Custom work can quietly turn a product company into a consulting shop. Reusable implementation must improve with every partner.",
      "Consent violations by a partner threaten the whole network, so licensing requires audit and termination rights.",
    ],
  },
  {
    id: "practitioner-model",
    index: "04",
    type: "Training, certification, and tools",
    title: "Independent practitioner network",
    description:
      "A professional pathway for independent practitioners who can hold Providence experiences, support integration, and refer participants into voluntary continued practice.",
    unitModel: "$5,500 blended first-year value and $1,800 renewal value",
    contributionModel:
      "60% on training years and 80% on software and supervision renewals",
    keyProof: "Practitioners create participant value after certification",
    assumptions: [
      "First-year value combines live training, supervised practice, certification review, software, and network participation",
      "Renewal covers software, continuing supervision, standards, and referral infrastructure",
      "Twenty-five new practitioners in Year 1, seventy-five in Year 2, and 175 in Year 3",
      "Base case models approximately 80% renewal of eligible practitioners",
      "Independent practitioners remain separate from workplace and employer deployment",
    ],
    projections: [
      {
        year: "Year 1",
        driver: "25 new practitioners",
        revenue: 137500,
        contribution: 82500,
      },
      {
        year: "Year 2",
        driver: "75 new practitioners and 20 renewals",
        revenue: 448500,
        contribution: 276300,
      },
      {
        year: "Year 3",
        driver: "175 new practitioners and 80 renewals",
        revenue: 1106500,
        contribution: 692700,
      },
    ],
    risks: [
      "Certification follows demonstrated competence and an independently governed scope of practice.",
      "The $5,500 first-year value only works if live mentorship, practicum, technology, and referrals justify the premium.",
      "Demonstrated practitioner outcomes govern network growth rather than credential volume.",
    ],
  },
];

const portfolioProjection = [
  {
    year: "Year 1",
    revenue: 761500,
    contribution: 344500,
    centralCosts: 1400000,
    operatingResult: -1055500,
  },
  {
    year: "Year 2",
    revenue: 2243500,
    contribution: 1199300,
    centralCosts: 2200000,
    operatingResult: -1000700,
  },
  {
    year: "Year 3",
    revenue: 5936500,
    contribution: 3605700,
    centralCosts: 3400000,
    operatingResult: 205700,
  },
];

const currency = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

function money(value: number) {
  const formatted = currency.format(Math.abs(value));
  return value < 0 ? `(${formatted})` : formatted;
}

function ProjectionTable({
  caption,
  projections,
}: {
  caption: string;
  projections: Projection[];
}) {
  return (
    <div
      aria-label={caption}
      className={styles.projectionTable}
      role="region"
      tabIndex={0}
    >
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Period</th>
            <th scope="col">Operating driver</th>
            <th scope="col">Revenue</th>
            <th scope="col">Contribution</th>
          </tr>
        </thead>
        <tbody>
          {projections.map((projection) => (
            <tr key={projection.year}>
              <th scope="row">{projection.year}</th>
              <td>{projection.driver}</td>
              <td>{money(projection.revenue)}</td>
              <td>{money(projection.contribution)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PortfolioProjection() {
  return (
    <details className={`${styles.financialSurface} ${styles.portfolioSurface}`}>
      <summary>
        <span className={styles.surfaceIndex}>00</span>
        <span className={styles.surfaceIdentity}>
          <small>Combined base case</small>
          <strong>Portfolio and capital requirement</strong>
        </span>
        <span className={styles.surfaceMetric}>
          <small>Illustrative commercial round</small>
          <strong>$2.5 million</strong>
        </span>
        <span className={styles.surfaceToggle} aria-hidden="true" />
      </summary>

      <div className={styles.surfaceBody}>
        <div className={styles.surfaceIntro}>
          <p>
            The four surfaces share distribution but retain separate unit
            economics. This base case reaches a modest positive operating result
            in Year 3 after a central product, research, legal, consent, and company
            operating envelope.
          </p>
          <dl>
            <div>
              <dt>Modeled deficit through Year 2</dt>
              <dd>$2,056,200</dd>
            </div>
            <div>
              <dt>Planning reserve</dt>
              <dd>Approximately 20%</dd>
            </div>
            <div>
              <dt>Commercial round implication</dt>
              <dd>Approximately $2.5 million</dd>
            </div>
          </dl>
        </div>

        <div
          aria-label="Combined illustrative commercial model"
          className={styles.projectionTable}
          role="region"
          tabIndex={0}
        >
          <table>
            <caption>Combined illustrative commercial model</caption>
            <thead>
              <tr>
                <th scope="col">Period</th>
                <th scope="col">Revenue</th>
                <th scope="col">Surface contribution</th>
                <th scope="col">Central costs</th>
                <th scope="col">Operating result</th>
              </tr>
            </thead>
            <tbody>
              {portfolioProjection.map((projection) => (
                <tr key={projection.year}>
                  <th scope="row">{projection.year}</th>
                  <td>{money(projection.revenue)}</td>
                  <td>{money(projection.contribution)}</td>
                  <td>{money(projection.centralCosts)}</td>
                  <td>{money(projection.operatingResult)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.modelBoundary}>
          <strong>Boundary of the model</strong>
          <p>
            The commercial model contains earned revenue from the four named
            surfaces. Charitable gifts and research grants receive separate budgets
            and governance. The return case relies on products and services rather
            than participant data, workplace deployment, or acquisition proceeds.
            Taxes and financing costs follow definitive terms. Surface contribution
            remains distinct from profit. Observed cohorts, signed partner terms,
            venue quotes, and actual team costs replace these assumptions as soon
            as they exist.
          </p>
        </div>
      </div>
    </details>
  );
}

export function FinancialModel() {
  return (
    <section className={styles.financialModel} aria-labelledby="financial-model-title">
      <div className={styles.financialModelHeading}>
        <div>
          <p className={styles.eyebrow}>Illustrative commercial model</p>
          <h3 id="financial-model-title">Four surfaces. One commercial system.</h3>
        </div>
        <p>
          Each surface begins as a testable economic hypothesis. Expand any row
          to inspect its price, operating driver, contribution model, three-year
          path, and the evidence that must replace these assumptions.
        </p>
      </div>

      <div className={styles.financialSurfaceList}>
        <PortfolioProjection />

        {revenueSurfaces.map((surface) => (
          <details className={styles.financialSurface} key={surface.id}>
            <summary>
              <span className={styles.surfaceIndex}>{surface.index}</span>
              <span className={styles.surfaceIdentity}>
                <small>{surface.type}</small>
                <strong>{surface.title}</strong>
              </span>
              <span className={styles.surfaceMetric}>
                <small>Year 3 illustrative revenue</small>
                <strong>{money(surface.projections[2].revenue)}</strong>
              </span>
              <span className={styles.surfaceToggle} aria-hidden="true" />
            </summary>

            <div className={styles.surfaceBody}>
              <div className={styles.surfaceIntro}>
                <p>{surface.description}</p>
                <dl>
                  <div>
                    <dt>Unit model</dt>
                    <dd>{surface.unitModel}</dd>
                  </div>
                  <div>
                    <dt>Contribution model</dt>
                    <dd>{surface.contributionModel}</dd>
                  </div>
                  <div>
                    <dt>Evidence gate</dt>
                    <dd>{surface.keyProof}</dd>
                  </div>
                </dl>
              </div>

              <div className={styles.modelDetailsGrid}>
                <section>
                  <h4>Working assumptions</h4>
                  <ul>
                    {surface.assumptions.map((assumption) => (
                      <li key={assumption}>{assumption}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h4>Sensitivities and failure conditions</h4>
                  <ul>
                    {surface.risks.map((risk) => (
                      <li key={risk}>{risk}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <ProjectionTable
                caption={`${surface.title} illustrative three-year model`}
                projections={surface.projections}
              />
            </div>
          </details>
        ))}
      </div>

      <p className={styles.financialDisclaimer}>
        Planning model only. These figures are hypotheses. They provide neither
        a forecast nor an offering or promise of investor return. Definitive
        budgets and terms require observed demand, vendor quotes, counsel, and
        approved financial controls.
      </p>
    </section>
  );
}
