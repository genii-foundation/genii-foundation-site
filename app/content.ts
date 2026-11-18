/**
 * Copy shared by more than one page.
 *
 * The wording here follows the founders' pitch deck (Round 17, 17 November
 * 2026) so the site and the deck tell the same story. Change it in one place.
 */

export const ventures = [
  {
    href: "/bow",
    name: "BOW",
    role: "Culture",
    summary: "Awakens curiosity and transmits wisdom through original cultural work.",
    detail: "Flagship: The Coherence Thesis",
  },
  {
    href: "/purposeful",
    name: "Purposeful",
    role: "Development",
    summary:
      "Cultivates human capacities through practice, teachers, relationship, and contribution.",
    detail: "Mentorship, gatherings, curriculum",
  },
  {
    href: "/providence",
    name: "Providence",
    role: "Coordination",
    summary:
      "A synchronicity engine that aligns vision, values, and the people who carry them, toward an operating system for personal and social life.",
    detail: "In collaboration with Terran Labs",
  },
] as const;

/** One line each. Fuller treatment lives on /purposeful/seven-initiates. */
export const sevenInitiates = [
  { name: "Listening", line: "Attention, receptivity, and encounter." },
  { name: "Intimacy", line: "Relational honesty, trust, and presence." },
  { name: "Balance", line: "Discernment and dynamically integrated capacities." },
  { name: "Art & Alchemy", line: "Creativity, expression, and transformation." },
  { name: "Embodiment", line: "Living intelligence expressed through the body." },
  { name: "Worship", line: "Reverence, devotion, and the value of life." },
  { name: "Providence", line: "Conscious contribution and coordinated flourishing." },
] as const;

export const links = {
  thesis: "https://www.coherence-thesis.com/",
  freed: "https://freed.wtf",
  vorton: "https://terranlabs.com/vorton",
  vorteo: "https://terranlabs.com/vorteo",
  terranLabs: "https://terranlabs.com",
  coherenceApp: "https://github.com/genii-foundation/coherence-app",
  aubrey: "https://aubreyfalconer.com",
} as const;

/** The pages behind the main story, listed wherever a reader may want more. */
export const deeperPages = [
  {
    href: "/research",
    title: "The Coherence Thesis",
    text: "Nine volumes, read as a research program with questions that can be tested.",
  },
  {
    href: "/purposeful/seven-initiates",
    title: "The Seven Initiates",
    text: "The seven capacities at the heart of Purposeful's curriculum.",
  },
  {
    href: "/sovereignty",
    title: "Human sovereignty",
    text: "The design commitments any intelligence we build has to meet.",
  },
  {
    href: "/coherence-economy",
    title: "The Coherence Economy",
    text: "A research proposition about what an economy could reward.",
  },
  {
    href: "/principles",
    title: "The ten principles",
    text: "The commitments that govern every Providence product, partnership, and financing.",
  },
  {
    href: "/investing",
    title: "Funding the work",
    text: "Two paths: support the foundation, or invest in a venture.",
  },
] as const;
