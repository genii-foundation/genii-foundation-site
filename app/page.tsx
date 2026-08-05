import { ContactTrigger } from "./ContactDialog";
import { SiteFooter } from "./SiteFooter";

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

      <SiteFooter />
    </div>
  );
}
