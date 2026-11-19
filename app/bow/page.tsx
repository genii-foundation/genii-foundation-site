import type { Metadata } from "next";
import Image from "next/image";

import { links, thesisVolumes } from "../content";
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
import { PageTurner } from "./PageTurner";

export const metadata: Metadata = {
  title: "BOW Media | GENII Foundation",
  description:
    "BOW Media is GENII's culture venture: original books and media, led by The Coherence Thesis.",
  alternates: { canonical: "/bow" },
};

/*
 * The nine covers the founders selected for the deck, in the same three rows.
 * Only The Coherence Thesis has a public home to link to. Each cover carries
 * a status label. The thesis is published and Purposeful is its fifth volume;
 * no source gives a publication status for the other seven, so they say only
 * "In development". Covers beyond these nine wait on Robbie confirming each
 * title's status and author.
 */
const published = "Published";
const developing = "In development";

const shelves = [
  {
    label: "Adult",
    books: [
      {
        title: "The Coherence Thesis",
        file: "01-adult-the-coherence-thesis",
        href: links.thesis,
        status: published,
      },
      {
        title: "Purposeful",
        file: "02-adult-purposeful",
        href: links.thesis,
        status: published,
      },
      {
        title: "Non-Duality and the Law",
        file: "03-adult-non-duality-and-the-law",
        status: developing,
      },
    ],
  },
  {
    label: "Teen",
    books: [
      {
        title: "Yo, But What's Really Up With Money?",
        file: "04-teen-yo-but-what-s-really-up-with-money",
        status: developing,
      },
      {
        title: "Yo, But What About Birth?",
        file: "05-teen-yo-but-what-about-birth",
        status: developing,
      },
      {
        title: "Yo, Where Did All the Elders Go?",
        file: "06-teen-yo-where-did-all-the-elders-go",
        status: developing,
      },
    ],
  },
  {
    label: "Kids",
    books: [
      {
        title: "Falling Towards Each Other Continuously",
        file: "07-kids-falling-towards-each-other-continuously",
        status: developing,
      },
      { title: "108", file: "08-kids-108", status: developing },
      {
        title: "We Breathe Plankton Farts!",
        file: "09-kids-we-breathe-plankton-farts",
        status: developing,
      },
    ],
  },
] as const;

/*
 * Sample pages from three children's books, taken from the review editions in
 * the founders' handoff archive: each book's cover and three inside pages.
 * The title pages are left out. The Rainbow cover itself carries its authors'
 * names, which the founders have not yet confirmed for publication.
 */
const insideBooks = [
  { title: "The Longest Eight Minutes", slug: "eight", pages: 4 },
  { title: "The Secret Inside a Rainbow", slug: "rainbow", pages: 4 },
  { title: "The World of Color", slug: "color", pages: 4 },
] as const;

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
            See the library
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
        title="The library."
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
                      <span className={styles.coverStatus} data-published={book.status === published}>
                        {book.status}
                      </span>
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
        id="inside"
        eyebrow="Look inside"
        title="Three books for children."
        intro={
          <p>
            Turn a few pages of each: where sunlight comes from, why a rainbow has
            its colors, and how light and matter make everything glow.
          </p>
        }
      >
        <div className={styles.turners}>
          {insideBooks.map((book) => (
            <PageTurner key={book.slug} {...book} />
          ))}
        </div>
        <Status>
          Sample pages from review editions. These three titles are in development and
          are not yet among the nine in the library above.
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
        <figure className={styles.listen}>
          <figcaption>
            <strong>Listen</strong>
            <span>Orientation, the opening of Volume I. About a minute.</span>
          </figcaption>
          {/* preload="none": nobody downloads the recording unless they press play. */}
          <audio controls preload="none" src="/bow/listen/thesis-orientation.m4a">
            <a href="/bow/listen/thesis-orientation.m4a">Download the recording</a>
          </audio>
          <p>Machine-narrated, from the audio edition in the thesis reader.</p>
        </figure>
        <ol className={styles.volumes}>
          {thesisVolumes.map((volume) => (
            <li key={volume.numeral}>
              <span>{volume.numeral}</span>
              {volume.title}
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
