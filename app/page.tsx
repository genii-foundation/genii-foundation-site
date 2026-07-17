import Image from "next/image";

const projects = [
  {
    type: "Living publication",
    title: "The Coherence Thesis",
    description:
      "An evolving body of research on interpersonal coherence, social architecture, humane technology, and the conditions for thriving societies.",
    href: "https://www.coherence-thesis.com/",
    action: "Read the thesis",
  },
  {
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
    title: "Research",
    text: "Long-horizon inquiry across consciousness, culture, technology, and regeneration.",
  },
  {
    title: "Culture",
    text: "Ideas and media that give difficult questions a clear, public, and beautiful form.",
  },
  {
    title: "Infrastructure",
    text: "Practical tools and institutions that help coherent ways of living become durable.",
  },
];

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

export default function Home() {
  return (
    <main className="atlas-site" id="top">
      <header className="site-header">
        <div className="header-inner">
          <a className="header-brand" href="#top" aria-label="GENII Foundation, home">
            <Wordmark priority />
            <span>Foundation</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#mission">Mission</a>
            <a href="#fields">Fields</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <div className="header-spacer" aria-hidden="true" />

      <div className="content-frame" id="main-content">
        <section className="introduction" aria-labelledby="hero-title">
          <p className="eyebrow">Independent research foundation</p>
          <div className="introduction-grid">
            <h1 id="hero-title">A framework for futures worth inhabiting.</h1>
            <div className="introduction-copy">
              <p>
                GENII Foundation is an independent home for long-horizon inquiry,
                consequential media, and public-interest technology.
              </p>
              <p>Research, culture, and infrastructure for a more coherent world.</p>
            </div>
          </div>
        </section>

        <section className="featured-work" id="work" aria-label="Current work">
          <p className="eyebrow">Current work</p>
          <div className="project-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                href={project.href}
                key={project.title}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-action">
                  {project.action} <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mission section-panel" id="mission" aria-labelledby="mission-title">
          <div className="section-heading">
            <p className="eyebrow">Mission</p>
            <h2 id="mission-title">
              The future is not a destination. It is a capacity we build together.
            </h2>
          </div>
          <div className="reading-column">
            <p>
              We investigate how inner life, social systems, technology, and
              ecology shape one another. We turn that inquiry into work people
              can read, use, test, and improve.
            </p>
            <p>
              Our aim is rigorous and practical: wiser relationships, more
              capable institutions, and forms of progress that remain worth
              inheriting.
            </p>
          </div>
        </section>

        <section className="fields section-panel" id="fields" aria-labelledby="fields-title">
          <div className="section-heading fields-heading">
            <p className="eyebrow">Fields of action</p>
            <h2 id="fields-title">One system. Three expressions.</h2>
          </div>
          <div className="fields-grid">
            {fields.map((field) => (
              <article className="field-card" key={field.title}>
                <h3>{field.title}</h3>
                <p>{field.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-panel" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Open channel</p>
          <div className="contact-grid">
            <h2 id="contact-title">Bring a question with consequence.</h2>
            <div>
              <p>
                We welcome researchers, builders, funders, artists, and civic
                stewards working toward more coherent forms of life.
              </p>
              <a className="text-link" href="https://aubreyfalconer.com/#contact">
                Contact the foundation <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
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
          </div>
          <small>© 2026 GENII Foundation</small>
        </div>
      </footer>
    </main>
  );
}
