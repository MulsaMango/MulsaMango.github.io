# Accessibility Reference

Detailed WCAG criteria, ARIA patterns, and testing tools. Consult when you need specifics beyond the main skill checklist.

## WCAG 2.2 Level A & AA summary

- **Perceivable**: Text alternatives for non-text content; captions for media; content presentable in different ways (structure, contrast); distinguishable (contrast ratios, not color-only, resize text).
- **Operable**: Keyboard access; enough time; no seizure-inducing content; navigable (skip links, titles, focus order, link purpose); input modalities (pointer gestures have keyboard alternative).
- **Understandable**: Readable (language of page); predictable (no unexpected context change on focus/input); input assistance (labels, error identification, help).
- **Robust**: Valid markup; name, role, value for all UI components; compatibility with assistive tech.

## Contrast ratios

| Element type | AA minimum | AAA minimum |
|---|---|---|
| Normal text (<18pt) | 4.5:1 | 7:1 |
| Large text (≥18pt or ≥14pt bold) | 3:1 | 4.5:1 |
| UI components and graphics | 3:1 | — |

### This project's palette

| Token / Value | Hex | On `#fefefe` | Passes AA text? |
|---|---|---|---|
| `text-gray-400` | `#9ca3af` | ~3.0:1 | No (use for decorative only) |
| `text-gray-500` | `#6b7280` | ~4.6:1 | Yes |
| `text-gray-600` | `#4b5563` | ~5.7:1 | Yes |
| `text-gray-700` | `#374151` | ~8.6:1 | Yes |
| `text-gray-800` | `#1f2937` | ~12.6:1 | Yes |
| `text-gray-900` | `#111827` | ~16.0:1 | Yes |
| Accent `#47DD4E` | `#47DD4E` | ~1.9:1 | No (never use as text) |

## ARIA patterns

### Dialog / Modal

```html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Title</h2>
  <!-- content -->
  <button>Close</button>
</div>
```

Trap focus inside. Escape closes. Return focus to trigger on close.

### Tabs

```html
<div role="tablist" aria-label="Section tabs">
  <button role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2">Tab 2</button>
</div>
<div role="tabpanel" id="panel-1">Content 1</div>
<div role="tabpanel" id="panel-2" hidden>Content 2</div>
```

Arrow keys switch tabs. Enter/Space activates.

### Expand / Collapse

```html
<button aria-expanded="false" aria-controls="content-id">Toggle</button>
<div id="content-id" hidden>Collapsible content</div>
```

Toggle `aria-expanded` and `hidden` on Enter/Space.

### Live region (announcements)

```html
<div aria-live="polite" aria-atomic="true">
  <!-- dynamically update text here -->
</div>
```

Use `polite` unless urgent. Place in DOM before updating content.

### Navigation with current page

```html
<nav aria-label="Main">
  <a href="/" aria-current="page">Work</a>
  <a href="/about">About</a>
</nav>
```

## Screen-reader-only utility

Tailwind v4 includes `sr-only`. For custom CSS:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## Skip link pattern

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-gray-900"
>
  Skip to main content
</a>
```

Place as first child inside `<body>`. Target element needs `id="main-content"` and `tabIndex={-1}`.

## Route change focus management (React Router v7)

```tsx
import { useLocation } from "react-router";
import { useEffect, useRef } from "react";

function useRouteAnnouncement() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    mainRef.current?.focus();
  }, [location.pathname]);

  return mainRef;
}
```

Alternatively, use a live region that announces the new page title on navigation.

## Copy-to-clipboard accessible feedback

```tsx
const [copied, setCopied] = useState(false);

return (
  <>
    <button onClick={handleCopy}>Copy email</button>
    <span role="status" aria-live="polite" className="sr-only">
      {copied ? "Email copied to clipboard" : ""}
    </span>
  </>
);
```

## Reduced motion — comprehensive approach

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Or target specific animations individually for finer control, preserving opacity transitions while removing movement.

## Testing tools

| Tool | Usage |
|---|---|
| **Lighthouse** | Chrome DevTools → Lighthouse → Accessibility |
| **axe DevTools** | Browser extension or `npx @axe-core/cli <url>` |
| **eslint-plugin-jsx-a11y** | Add to ESLint config for React |
| **VoiceOver** | macOS: Cmd+F5 to toggle |
| **Contrast checker** | Chrome DevTools Inspect → Accessibility pane, or WebAIM |

## Full ARIA reference

[WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
