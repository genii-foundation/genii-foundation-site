/**
 * Copy shared by more than one page.
 *
 * The wording here follows the founders' pitch deck (Round 17, 17 November
 * 2026; the deck has since moved on, so recheck before launch) so the site and the deck tell the same story. Change it in one place.
 */

export const ventures = [
  {
    href: "/bow",
    name: "BOW Media",
    role: "Culture",
    summary:
      "Bold, original mixed-media work: books, film, and conversation that carry wisdom into the culture.",
    detail: "Flagship: The Coherence Thesis",
  },
  {
    href: "/purposeful",
    name: "Purposeful",
    role: "Development",
    summary:
      "Mentorship, curated retreats, and a year-long curriculum that turn potential into capacity.",
    detail: "Grounded in the Seven Initiates",
  },
  {
    href: "/providence",
    name: "Providence",
    role: "Coordination",
    summary:
      "The synchronicity engine: aligning vision, values, and the people who carry them.",
    detail: "Built with Terran Labs",
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
  terranUpdates: "https://terranlabs.com/updates",
  coherenceApp: "https://github.com/genii-foundation/coherence-app",
  aubrey: "https://aubreyfalconer.com",
} as const;

/**
 * The nine volumes of The Coherence Thesis, in order. `grounds` names the
 * venture whose central argument a volume makes: III and IV carry Providence
 * in their titles, V is Purposeful, and VII sets out the Seven Initiates that
 * Purposeful teaches. BOW Media publishes all nine, so it is not listed per
 * volume. The founders have not yet reviewed this mapping line by line.
 */
export const thesisVolumes = [
  { numeral: "I", title: "Humanity's Most Viable Future" },
  { numeral: "II", title: "Wielding Intelligence" },
  { numeral: "III", title: "The Providence Imperative", grounds: "Providence" },
  { numeral: "IV", title: "Architecting Providence", grounds: "Providence" },
  { numeral: "V", title: "Purposeful", grounds: "Purposeful" },
  { numeral: "VI", title: "The Nest" },
  { numeral: "VII", title: "Presencing Genius", grounds: "Purposeful" },
  { numeral: "VIII", title: "A Misanthropic Artifice" },
  { numeral: "IX", title: "The Cardinal Scale" },
] as const;

/** Counted from the published reader's own section list, August 2026 edition. */
export const thesisTotals = [
  { value: "9", label: "volumes" },
  { value: "525", label: "sections" },
  { value: "202,000", label: "words, about" },
] as const;

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
