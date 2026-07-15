import Image from "next/image";

const projects = [
  {
    index: "01",
    type: "Living publication",
    title: "The Coherence Thesis",
    description:
      "An evolving body of research on interpersonal coherence, social architecture, humane technology, and the conditions for thriving societies.",
    href: "https://www.coherence-thesis.com/",
    action: "Read the thesis",
  },
  {
    index: "02",
    type: "Technology in development",
    title: "Coherence",
    description:
      "A consent-first ecosystem for interpersonal biometric measurement and reflection, beginning with native iPhone and Apple Watch experiences.",
    href: "https://github.com/genii-foundation/coherence-app",
    action: "Follow the work",
  },
];

const fields = [
  {
    index: "I",
    title: "Research",
    text: "Develop long-horizon inquiry across consciousness, culture, technology, and regeneration.",
  },
  {
    index: "II",
    title: "Culture",
    text: "Publish ideas and media that give difficult questions a clear, public, and beautiful form.",
  },
  {
    index: "III",
    title: "Infrastructure",
    text: "Build practical tools and institutions that help coherent ways of living become durable.",
  },
];

function Wordmark({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      alt="GENII"
      className={className}
      height={238}
      priority={priority}
      src="/brand/genii-wordmark-ivory.png"
      width={1135}
    />
  );
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <a className="header-brand" href="#top" aria-label="GENII Foundation, home">
          <Wordmark priority />
          <span>Foundation</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#mission">Mission</a>
          <a href="#fields">Fields</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-register" aria-hidden="true">
            <span>Independent research foundation</span>
            <span>Field note 001</span>
          </div>

          <div className="hero-wordmark">
            <Wordmark priority />
            <p>Foundation</p>
          </div>

          <div className="hero-lower">
            <div className="hero-statement">
              <p className="kicker">For futures worth inhabiting</p>
              <h1 id="hero-title">
                Research, culture, and infrastructure for a more coherent world.
              </h1>
              <p className="hero-summary">
                GENII Foundation is an independent home for long-horizon inquiry,
                consequential media, and public-interest technology.
              </p>
              <a className="text-link" href="#work">
                Explore current work <span aria-hidden="true">↘</span>
              </a>
            </div>

            <div className="hero-instrument" aria-hidden="true">
              <div className="instrument-ring ring-outer" />
              <div className="instrument-ring ring-inner" />
              <div className="instrument-axis axis-horizontal" />
              <div className="instrument-axis axis-vertical" />
              <span className="instrument-point point-a" />
              <span className="instrument-point point-b" />
              <span className="instrument-point point-c" />
              <span className="instrument-label label-a">Research</span>
              <span className="instrument-label label-b">Culture</span>
              <span className="instrument-label label-c">Infrastructure</span>
              <span className="instrument-center">
                <Image alt="" height={512} src="/icon.png" width={512} />
              </span>
            </div>
          </div>
        </section>

        <section className="mission atlas-section" id="mission" aria-labelledby="mission-title">
          <div className="section-register">
            <span>01</span>
            <span>Purpose</span>
            <span>Present and long horizon</span>
          </div>
          <div className="mission-grid">
            <h2 id="mission-title">
              The future is not a destination. It is a capacity we build together.
            </h2>
            <div className="mission-copy">
              <p>
                We investigate how inner life, social systems, technology, and
                ecology shape one another. We turn that inquiry into work people
                can read, use, test, and improve.
              </p>
              <p>
                Our aim is rigorous and practical: expand the conditions for
                wiser relationships, more capable institutions, and forms of
                progress that remain worth inheriting.
              </p>
            </div>
          </div>
          <div className="mission-note">
            <span>Method</span>
            <p>Study the whole. Make knowledge public. Build what the evidence requires.</p>
          </div>
        </section>

        <section className="fields atlas-section" id="fields" aria-labelledby="fields-title">
          <div className="section-register">
            <span>02</span>
            <span id="fields-title">Fields of action</span>
            <span>One system, three expressions</span>
          </div>
          <div className="fields-grid">
            {fields.map((field) => (
              <article className="field-card" key={field.index}>
                <span className="field-index">{field.index}</span>
                <h3>{field.title}</h3>
                <p>{field.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work atlas-section" id="work" aria-labelledby="work-title">
          <div className="section-register">
            <span>03</span>
            <span>Current work</span>
            <span>Initial project constellation</span>
          </div>
          <div className="work-heading">
            <h2 id="work-title">A parent institution for ideas that need somewhere real to go.</h2>
            <p>
              Our first projects approach coherence from complementary directions:
              shared knowledge and lived experience.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a
                className="project-card"
                href={project.href}
                key={project.index}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="project-index">{project.index}</div>
                <div className="project-type">{project.type}</div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-action">
                  <span>{project.action}</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-register">
            <span>04</span>
            <span>Open channel</span>
          </div>
          <div className="contact-copy">
            <p className="kicker">The next work begins in conversation</p>
            <h2 id="contact-title">Bring a question with consequence.</h2>
            <p>
              We welcome researchers, builders, funders, artists, and civic
              stewards working toward more coherent forms of life.
            </p>
            <a className="contact-link" href="https://aubreyfalconer.com/#contact">
              Contact the foundation <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-seal" aria-hidden="true">
            <span>
              <Image alt="" height={512} src="/icon.png" width={512} />
            </span>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="GENII Foundation, home">
          <Wordmark />
          <span>Foundation</span>
        </a>
        <p>For futures worth inhabiting.</p>
        <div className="footer-links">
          <a href="https://github.com/genii-foundation" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
          <a href="https://www.coherence-thesis.com/" rel="noopener noreferrer" target="_blank">
            The Coherence Thesis
          </a>
          <a href="#top">Back to top</a>
        </div>
        <small>© 2026 GENII Foundation</small>
      </footer>
    </main>
  );
}
