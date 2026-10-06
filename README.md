# GENII Foundation

The public website for [GENII Foundation](https://genii.foundation), an independent home for long horizon research, practical tools, and institutions that help life flourish.

## Development

```bash
npm install
npm run dev
```

Run `npm run build` before publishing.

## iOS Home Screen

The Home Screen app uses the default status bar and an invisible fixed color extension to suppress WebKit's native top blur without adding toolbar padding. The extension follows the header color and does not intercept taps.

If an older shortcut retains the blur, open the site in Safari and use Share → Add to Home Screen with Open as Web App enabled. Keep the old shortcut until the replacement works. Do not clear Safari data.

## Visual conventions

Use horizontal rules to separate content rows inside bordered cards and panels. Do not add a closing rule beneath the final row: the outer border already closes the region. Preserve outer borders, link underlines, and keyboard focus indicators.

## Projects

GENII Foundation is the parent organization for [The Coherence Thesis](https://www.coherence-thesis.com/) and [Coherence](https://github.com/genii-foundation/coherence-app).
