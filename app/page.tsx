"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const designs = [
  { id: "monolith", number: "01", name: "Monolith", note: "Severe, monumental, institutional" },
  { id: "atlas", number: "02", name: "Atlas", note: "Diagrammatic, precise, illuminated" },
  { id: "signal", number: "03", name: "Signal", note: "Cultural, direct, high contrast" },
  { id: "archive", number: "04", name: "Archive", note: "Editorial, scholarly, enduring" },
  { id: "nocturne", number: "05", name: "Nocturne", note: "Luminous, cinematic, spacious" },
] as const;

type DesignId = (typeof designs)[number]["id"];

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
    text: "Long-horizon inquiry across consciousness, culture, technology, and regeneration.",
  },
  {
    index: "II",
    title: "Culture",
    text: "Ideas and media that give difficult questions a clear, public, and beautiful form.",
  },
  {
    index: "III",
    title: "Infrastructure",
    text: "Practical tools and institutions that help coherent ways of living become durable.",
  },
];

function Wordmark({ tone = "ivory", priority = false }: { tone?: "ivory" | "black" | "gold"; priority?: boolean }) {
  return (
    <Image
      alt="GENII"
      height={238}
      loading={priority ? "eager" : undefined}
      priority={priority}
      src={`/brand/genii-wordmark-${tone}.png`}
      width={1135}
    />
  );
}

function Hero({ design }: { design: DesignId }) {
  if (design === "atlas") {
    return (
      <section className="hero hero-atlas" aria-labelledby="hero-title">
        <div className="atlas-coordinate atlas-coordinate-top">40.7128° N / 74.0060° W</div>
        <div className="atlas-wordmark"><Wordmark tone="black" priority /></div>
        <div className="atlas-hero-grid">
          <p className="hero-kicker">Independent research foundation</p>
          <h1 id="hero-title">A framework for futures worth inhabiting.</h1>
          <p className="hero-summary">
            Research, culture, and public infrastructure for a more coherent world.
          </p>
          <a className="hero-action" href="#work">Explore the work <span aria-hidden="true">↘</span></a>
        </div>
        <div className="atlas-axis" aria-hidden="true"><span /><i /><b /></div>
      </section>
    );
  }

  if (design === "signal") {
    return (
      <section className="hero hero-signal" aria-labelledby="hero-title">
        <div className="signal-wordmark"><Wordmark priority /></div>
        <div className="signal-copy">
          <p className="hero-kicker">GENII Foundation</p>
          <h1 id="hero-title">Make the future<br />worth inheriting.</h1>
        </div>
        <div className="signal-footer">
          <p>Research</p><p>Culture</p><p>Infrastructure</p>
          <a href="#work">Current work <span aria-hidden="true">↓</span></a>
        </div>
      </section>
    );
  }

  if (design === "archive") {
    return (
      <section className="hero hero-archive" aria-labelledby="hero-title">
        <div className="archive-masthead">
          <Wordmark tone="black" priority />
          <span>Foundation</span>
        </div>
        <div className="archive-rule"><span>Independent institution</span><span>Established 2026</span></div>
        <div className="archive-lead">
          <p className="hero-kicker">Our purpose</p>
          <h1 id="hero-title">Build the capacity for a coherent civilization.</h1>
          <p className="hero-summary">
            GENII is an independent home for long-horizon inquiry, consequential media, and public-interest technology.
          </p>
        </div>
        <a className="archive-index" href="#mission"><span>Begin</span><span aria-hidden="true">↓</span></a>
      </section>
    );
  }

  if (design === "nocturne") {
    return (
      <section className="hero hero-nocturne" aria-labelledby="hero-title">
        <div className="nocturne-aura" aria-hidden="true" />
        <div className="nocturne-content">
          <div className="nocturne-wordmark"><Wordmark tone="gold" priority /></div>
          <p className="hero-kicker">GENII Foundation</p>
          <h1 id="hero-title">For futures<br />worth inhabiting.</h1>
          <p className="hero-summary">Research, culture, and infrastructure for a more coherent world.</p>
          <a className="hero-action" href="#mission">Enter <span aria-hidden="true">↓</span></a>
        </div>
      </section>
    );
  }

  return (
    <section className="hero hero-monolith" aria-labelledby="hero-title">
      <div className="monolith-topline"><span>Independent research foundation</span><span>GENII / 2026</span></div>
      <div className="monolith-wordmark"><Wordmark priority /></div>
      <div className="monolith-lower">
        <h1 id="hero-title">Research, culture, and infrastructure for a more coherent world.</h1>
        <div>
          <p className="hero-summary">An independent home for long-horizon inquiry, consequential media, and public-interest technology.</p>
          <a className="hero-action" href="#work">Explore current work <span aria-hidden="true">↘</span></a>
        </div>
      </div>
    </section>
  );
}

function DesignSwitcher({ design, onChange }: { design: DesignId; onChange: (design: DesignId) => void }) {
  const current = designs.find((item) => item.id === design) ?? designs[0];

  return (
    <aside className="design-switcher" aria-label="Design directions">
      <div className="switcher-current" aria-live="polite">
        <span>{current.number} / 05</span>
        <strong>{current.name}</strong>
        <small>{current.note}</small>
      </div>
      <div className="switcher-options" role="group" aria-label="Choose a design direction">
        {designs.map((item) => (
          <button
            aria-label={`View ${item.name}: ${item.note}`}
            aria-pressed={item.id === design}
            key={item.id}
            onClick={() => onChange(item.id)}
            type="button"
          >
            <span>{item.number}</span>
            <b>{item.name}</b>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default function Home() {
  const [design, setDesign] = useState<DesignId>("monolith");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const query = new URLSearchParams(window.location.search).get("design") as DesignId | null;
      const saved = window.localStorage.getItem("genii-design") as DesignId | null;
      const next = designs.some((item) => item.id === query)
        ? query
        : designs.some((item) => item.id === saved)
          ? saved
          : "monolith";
      setDesign(next ?? "monolith");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function changeDesign(next: DesignId) {
    setDesign(next);
    window.localStorage.setItem("genii-design", next);
    const url = new URL(window.location.href);
    url.searchParams.set("design", next);
    window.history.replaceState({}, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const darkWordmark = design === "atlas" || design === "archive";

  return (
    <main id="top" data-design={design}>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <a className="header-brand" href="#top" aria-label="GENII Foundation, home">
          <Wordmark tone={darkWordmark ? "black" : "ivory"} priority />
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
        <Hero design={design} />

        <section className="mission section" id="mission" aria-labelledby="mission-title">
          <div className="section-label"><span>01</span><span>Purpose</span></div>
          <div className="mission-content">
            <h2 id="mission-title">The future is not a destination. It is a capacity we build together.</h2>
            <div className="body-copy">
              <p>We investigate how inner life, social systems, technology, and ecology shape one another. We turn that inquiry into work people can read, use, test, and improve.</p>
              <p>Our aim is rigorous and practical: wiser relationships, more capable institutions, and forms of progress that remain worth inheriting.</p>
            </div>
          </div>
        </section>

        <section className="fields section" id="fields" aria-labelledby="fields-title">
          <div className="section-label"><span>02</span><span id="fields-title">Fields of action</span></div>
          <div className="fields-intro">
            <p>One system.</p><p>Three expressions.</p>
          </div>
          <div className="fields-grid">
            {fields.map((field) => (
              <article className="field-card" key={field.index}>
                <span>{field.index}</span>
                <h3>{field.title}</h3>
                <p>{field.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work section" id="work" aria-labelledby="work-title">
          <div className="section-label"><span>03</span><span>Current work</span></div>
          <div className="work-intro">
            <h2 id="work-title">Ideas need somewhere real to go.</h2>
            <p>Our first projects approach coherence from complementary directions: shared knowledge and lived experience.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-card" href={project.href} key={project.index} rel="noopener noreferrer" target="_blank">
                <span className="project-index">{project.index}</span>
                <span className="project-type">{project.type}</span>
                <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p></div>
                <span className="project-action">{project.action} <i aria-hidden="true">↗</i></span>
              </a>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact" aria-labelledby="contact-title">
          <div className="section-label"><span>04</span><span>Open channel</span></div>
          <div className="contact-content">
            <p className="hero-kicker">The next work begins in conversation</p>
            <h2 id="contact-title">Bring a question with consequence.</h2>
            <p>We welcome researchers, builders, funders, artists, and civic stewards working toward more coherent forms of life.</p>
            <a href="https://aubreyfalconer.com/#contact">Contact the foundation <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="GENII Foundation, home"><Wordmark tone="ivory" /><span>Foundation</span></a>
        <p>For futures worth inhabiting.</p>
        <div><a href="https://github.com/genii-foundation" rel="noopener noreferrer" target="_blank">GitHub</a><a href="https://www.coherence-thesis.com/" rel="noopener noreferrer" target="_blank">The Coherence Thesis</a></div>
        <small>© 2026 GENII Foundation</small>
      </footer>

      <DesignSwitcher design={design} onChange={changeDesign} />
    </main>
  );
}
