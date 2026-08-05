import Image from "next/image";

import { ContactTrigger } from "./ContactDialog";

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
      "A consent-first ecosystem for interpersonal biometric measurement and reflection.",
    href: "https://github.com/genii-foundation/coherence-app",
    action: "Follow the work",
  },
];

const fields = [
  {
    title: "Research",
    text: "Long-horizon inquiry into consciousness, culture, technology, and regeneration.",
  },
  {
    title: "Culture",
    text: "Clear public forms for consequential ideas.",
  },
  {
    title: "Infrastructure",
    text: "Practical tools and institutions that support human agency.",
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

function GitHubMark() {
  return (
    <svg
      aria-hidden="true"
      className="footer-link-icon"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.04.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        fill="currentColor"
      />
    </svg>
  );
}

function ProjectTitle({ title }: { title: string }) {
  if (title !== "The Coherence Thesis") {
    return title;
  }

  return (
    <>
      T<span className="project-title-h">h</span>e Coherence T
      <span className="project-title-h">h</span>esis
    </>
  );
}

export default function Home() {
  return (
    <div className="atlas-site" id="top">
      <div className="header-spacer" aria-hidden="true" />

      <main className="content-frame" id="main-content">
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
              >
                <span className="project-type">{project.type}</span>
                <h2>
                  <ProjectTitle title={project.title} />
                </h2>
                <p>{project.description}</p>
                <span className="project-action">{project.action}</span>
              </a>
            ))}
          </div>
        </section>

        <section
          className="mission-fields section-panel"
          id="mission"
          aria-labelledby="mission-title"
        >
          <div className="mission-fields-intro">
            <div className="section-heading">
              <p className="eyebrow">Mission</p>
              <h2 id="mission-title">
                Study what makes coherent lives and societies possible.
              </h2>
            </div>
            <p className="mission-statement">
              We turn that inquiry into research, culture, and practical tools
              that support human agency.
            </p>
          </div>

          <section className="fields-block" id="fields" aria-labelledby="fields-title">
            <h2 className="eyebrow" id="fields-title">Fields of work</h2>
            <div className="fields-grid">
              {fields.map((field) => (
                <article
                  className="field-card"
                  data-title-scale={field.title.length > 10 ? "compact" : undefined}
                  key={field.title}
                >
                  <h3>{field.title}</h3>
                  <p>{field.text}</p>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section className="contact section-panel" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Contact</p>
          <div className="contact-grid">
            <h2 id="contact-title">Work with GENII Foundation.</h2>
            <div>
              <p>
                We welcome inquiries from researchers, builders, funders,
                artists, and civic stewards whose work intersects with our
                current projects.
              </p>
              <ContactTrigger className="text-link">
                Contact GENII Foundation
              </ContactTrigger>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="footer-brand" href="#top" aria-label="GENII Foundation, home">
            <Wordmark />
            <span>Foundation</span>
          </a>
          <p>For futures worth inhabiting.</p>
          <div className="footer-links">
            <a
              className="footer-github-link"
              href="https://github.com/genii-foundation"
            >
              <GitHubMark />
              <span>GitHub</span>
            </a>
            <a href="https://www.coherence-thesis.com/">The Coherence Thesis</a>
          </div>
          <small>© 2026 GENII Foundation</small>
        </div>
      </footer>
    </div>
  );
}
