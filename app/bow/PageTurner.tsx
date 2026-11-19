"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

import styles from "../v2.module.css";

/**
 * A few sample pages of one book, turned one at a time.
 *
 * The pages sit in a row that scrolls and snaps natively, so swiping works on
 * a phone with no script at all. The buttons scroll the same row, and the
 * counter is read back from its scroll position, so touch, keyboard and
 * buttons can never disagree about which page is showing.
 */
export function PageTurner({
  pages,
  slug,
  title,
}: {
  /** How many sample pages exist as /bow/inside/{slug}-{n}.jpg. The first is the cover. */
  pages: number;
  slug: string;
  title: string;
}) {
  const track = useRef<HTMLOListElement>(null);
  const [page, setPage] = useState(0);

  const readPage = useCallback(() => {
    const element = track.current;
    if (!element || element.clientWidth === 0) return;
    setPage(Math.round(element.scrollLeft / element.clientWidth));
  }, []);

  const turn = (step: -1 | 1) => {
    const element = track.current;
    if (!element) return;
    element.scrollBy({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      left: step * element.clientWidth,
    });
  };

  return (
    <figure className={styles.turner}>
      <ol className={styles.turnerTrack} onScroll={readPage} ref={track}>
        {Array.from({ length: pages }, (_, index) => (
          <li key={index}>
            <Image
              alt={
                index === 0
                  ? `Cover of ${title}`
                  : `${title}, sample page ${index + 1} of ${pages}`
              }
              height={1000}
              sizes="(max-width: 700px) 90vw, 22rem"
              src={`/bow/inside/${slug}-${index + 1}.jpg`}
              width={800}
            />
          </li>
        ))}
      </ol>
      <figcaption>
        <span className={styles.turnerTitle}>{title}</span>
        <span className={styles.turnerControls}>
          <button
            aria-label={`Previous page of ${title}`}
            disabled={page === 0}
            onClick={() => turn(-1)}
            type="button"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16">
              <path d="M10.5 3.5 6 8l4.5 4.5" />
            </svg>
          </button>
          <span aria-live="polite">
            {page + 1} / {pages}
          </span>
          <button
            aria-label={`Next page of ${title}`}
            disabled={page === pages - 1}
            onClick={() => turn(1)}
            type="button"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16">
              <path d="m5.5 3.5 4.5 4.5-4.5 4.5" />
            </svg>
          </button>
        </span>
      </figcaption>
    </figure>
  );
}
