import type { Metadata } from "next";
import Image from "next/image";

import { links } from "../content";
import {
  CoverFan,
  DeeperLinks,
  LinkButton,
  PageHero,
  PageShell,
  Section,
  Status,
  Tag,
} from "../parts";
import styles from "../v2.module.css";

export const metadata: Metadata = {
  title: "BOW Media | GENII Foundation",
  description:
    "BOW Media is GENII's culture venture: original books and media, led by The Coherence Thesis.",
  alternates: { canonical: "/bow" },
};

/*
 * The nine covers the founders selected for the deck, in the same three rows.
 * Only The Coherence Thesis has a public home to link to. No source gives a
 * publication status for the other titles, so the page claims none.
 */
const shelves = [
  {
    label: "Adult",
    books: [
      {
        title: "The Coherence Thesis",
        file: "01-adult-the-coherence-thesis",
        href: links.thesis,
      },
      { title: "Purposeful", file: "02-adult-purposeful", href: links.thesis },
      { title: "Non-Duality and the Law", file: "03-adult-non-duality-and-the-law" },
    ],
  },
  {
    label: "Teen",
    books: [
      {
        title: "Yo, But What's Really Up With Money?",
        file: "04-teen-yo-but-what-s-really-up-with-money",
      },
      { title: "Yo, But What About Birth?", file: "05-teen-yo-but-what-about-birth" },
      {
        title: "Yo, Where Did All the Elders Go?",
        file: "06-teen-yo-where-did-all-the-elders-go",
      },
    ],
  },
  {
    label: "Kids",
    books: [
      {
        title: "Falling Towards Each Other Continuously",
        file: "07-kids-falling-towards-each-other-continuously",
      },
      { title: "108", file: "08-kids-108" },
      { title: "We Breathe Plankton Farts!", file: "09-kids-we-breathe-plankton-farts" },
    ],
  },
] as const;

const volumes = [
  "Humanity's Most Viable Future",
  "Wielding Intelligence",
  "The Providence Imperative",
  "Architecting Providence",
  "Purposeful",
  "The Nest",
  "Presencing Genius",
  "A Misanthropic Artifice",
  "The Cardinal Scale",
] as const;

const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"] as const;

export default function BowMediaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Venture one · Culture"
        title="BOW Media."
        subtitle="Culture is the doorway."
        lead="Bold, original, mixed-media cultural touchstones, led by The Coherence Thesis, with dozens of further works already in production."
        body="Democratizing long-form publishing and lengthening humanity's attention span."
        figure={<CoverFan />}
      >
        <div className={styles.actions}>
          <LinkButton href="#catalog" quiet>
            See the catalog
          </LinkButton>
          <LinkButton href={links.thesis}>Read The Coherence Thesis</LinkButton>
        </div>
      </PageHero>

      <Section
        id="studio"
        eyebrow="What it is building"
        title="A growing body of work, pointing toward a studio."
        intro={
          <>
            <p>
              A growing body of manuscripts, books, and original cultural work points
              toward a larger media studio: publications, films, conversations,
              educational experiences, and the preservation of wisdom across generations.
            </p>
            <p>
              Culture is part of the developmental environment. BOW Media&apos;s titles
              are written for children, teenagers, and adults.
            </p>
          </>
        }
      />

      <Section
        id="catalog"
        eyebrow="Selected works"
        title="The catalog."
        panel
        intro={
          <p>
            Nine titles across three shelves, from the growing body of BOW Media
            manuscripts.
          </p>
        }
      >
        {shelves.map((shelf) => (
          <div className={styles.shelf} key={shelf.label}>
            <p className={styles.shelfLabel}>{shelf.label}</p>
            <ul className={styles.covers}>
              {shelf.books.map((book) => (
                <li key={book.title}>
                  <figure>
                    <Image
                      alt={`Cover of ${book.title}`}
                      height={960}
                      sizes="(max-width: 700px) 30vw, 18rem"
                      src={`/bow/${book.file}.jpg`}
                      width={640}
                    />
                    <figcaption>
                      {"href" in book ? <a href={book.href}>{book.title}</a> : book.title}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Status>
          Selected works shown. The Coherence Thesis is published, and Purposeful is its
          fifth volume. The other titles shown, and further
          titles and media programs, remain in development.
        </Status>
      </Section>

      <Section
        id="flagship"
        eyebrow="The flagship"
        title="The Coherence Thesis."
        intro={
          <>
            <p>
              Nine published volumes on coherence, consciousness, and the conditions for
              human flourishing. It is the research and conceptual foundation for
              everything GENII does.
            </p>
            <div className={styles.actions}>
              <LinkButton href={links.thesis}>Read the thesis</LinkButton>
              <LinkButton href="/research" quiet>
                The thesis as research
              </LinkButton>
            </div>
          </>
        }
      >
        <ol className={styles.volumes}>
          {volumes.map((volume, index) => (
            <li key={volume}>
              <span>{numerals[index]}</span>
              {volume}
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="publisher"
        eyebrow="Democratizing long-form publishing"
        title="The reader behind the thesis, for other authors."
        intro={
          <>
            <Tag>Building now</Tag>
            <p>
              GENII Publisher aims to give any author or institution a thesis-caliber
              e-reader, tailored to their ideas, identity, and audience.
            </p>
            <p>
              The model is the reading experience built for The Coherence Thesis.
            </p>
          </>
        }
      />

      <DeeperLinks />
    </PageShell>
  );
}
