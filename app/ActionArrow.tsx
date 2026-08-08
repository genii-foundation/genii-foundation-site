/**
 * The one arrow used by every call to action on the site.
 *
 * Pair it with the `action-link` class for an underlined text action, or drop
 * it inside any anchor or button for the arrow alone. Both behaviours are
 * defined once in globals.css, so a new call to action needs no styling of its
 * own to move correctly.
 */
export function ActionArrow() {
  return (
    <span aria-hidden="true" className="action-arrow">
      <svg focusable="false" viewBox="0 0 16 16">
        <path className="action-arrow-stem" d="M4 12 11 5" />
        <path className="action-arrow-head" d="M7.25 5H11v3.75" />
      </svg>
    </span>
  );
}
