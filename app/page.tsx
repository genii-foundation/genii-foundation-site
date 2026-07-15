const projects = [
  {
    number: "01",
    status: "Read now",
    title: "The Coherence Thesis",
    description:
      "A living body of work on interpersonal coherence, social architecture, humane technology, and thriving future societies.",
    href: "https://www.coherence-thesis.com/",
    linkLabel: "Enter the thesis",
  },
  {
    number: "02",
    status: "In development",
    title: "Coherence",
    description:
      "A consent first ecosystem for interpersonal biometric measurement and reflection, beginning with native iPhone and Apple Watch experiences.",
    href: "https://github.com/genii-foundation/coherence-app",
    linkLabel: "Follow the work",
  },
];

const principles = [
  {
    number: "I",
    title: "Begin with the whole",
    text: "We study people, technology, culture, and ecology as one living field. Fragmented problems rarely yield to fragmented answers.",
  },
  {
    number: "II",
    title: "Make knowledge livable",
    text: "Ideas matter when they change how we relate, decide, build, and care. Our work moves from theory toward practice.",
  },
  {
    number: "III",
    title: "Build for inheritance",
    text: "We favor patient work, open inquiry, and tools that can outlast their makers without becoming monuments to them.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="GENII Foundation, home">
          <span className="brand-mark" aria-hidden="true">
            G
          </span>
          <span className="brand-name">
            GENII
            <small>Foundation</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#mission">Mission</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-field" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="field-axis field-axis-x" />
          <div className="field-axis field-axis-y" />
          <div className="field-core">
            <span>G</span>
          </div>
          <div className="field-point point-one" />
          <div className="field-point point-two" />
          <div className="field-point point-three" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">For coherent futures</p>
          <h1>For futures worth inhabiting.</h1>
          <p className="hero-deck">
            GENII Foundation is an independent home for long horizon research,
            practical tools, and institutions that help life flourish.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore our work
              <span aria-hidden="true">↘</span>
            </a>
            <a
              className="button button-quiet"
              href="https://aubreyfalconer.com/#contact"
            >
              Begin a conversation
            </a>
          </div>
        </div>

        <div className="hero-note">
          <span>Research</span>
          <span>Practice</span>
          <span>Stewardship</span>
        </div>
      </section>

      <section className="mission section-shell" id="mission">
        <div className="section-label">
          <span>Our mission</span>
          <span>01</span>
        </div>
        <div className="mission-grid">
          <h2>
            Human possibility grows when our inner lives, shared systems, and
            technologies learn to move together.
          </h2>
          <div className="mission-copy">
            <p>
              We advance inquiry and build public work at the meeting place of
              consciousness, culture, technology, and regeneration.
            </p>
            <p>
              Our aim is not a single answer. It is a growing ecology of ideas,
              practices, and tools that make wiser forms of relationship and
              collective life possible.
            </p>
          </div>
        </div>
      </section>

      <section className="principles section-shell" aria-labelledby="principles-heading">
        <div className="section-label">
          <span id="principles-heading">How we work</span>
          <span>02</span>
        </div>
        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-label section-label-light">
          <span>Current work</span>
          <span>03</span>
        </div>
        <div className="work-intro">
          <h2>One foundation. Many expressions.</h2>
          <p>
            Our first projects approach coherence from complementary directions,
            one through shared knowledge, the other through personal experience.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.href}
              key={project.number}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.status}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-link">
                <span>{project.linkLabel}</span>
                <span aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-orbit" aria-hidden="true" />
        <p className="eyebrow">The next work begins in conversation</p>
        <h2>Bring a question worth living into.</h2>
        <p>
          We welcome conversations with researchers, builders, funders, artists,
          and stewards working toward more coherent forms of life.
        </p>
        <a className="button button-primary" href="https://aubreyfalconer.com/#contact">
          Contact the foundation
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top" aria-label="GENII Foundation, home">
          <span className="brand-mark" aria-hidden="true">
            G
          </span>
          <span className="brand-name">
            GENII
            <small>Foundation</small>
          </span>
        </a>
        <p>Ideas for a world learning to become whole.</p>
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
