---
name: accessibility-audit
description: Audit accessibility (a11y) on this React Router v7 portfolio. Use when the user asks about accessibility, a11y, WCAG, screen readers, keyboard navigation, focus management, ARIA, semantic HTML, color contrast, or reviewing accessibility issues. Covers WCAG 2.2 Level A/AA compliance for React, Tailwind CSS, and SPA patterns. Reports issues only — never auto-fixes.
---

# Accessibility Audit

Audit accessibility issues in this portfolio. Target WCAG 2.2 Level A and AA unless specified otherwise.

## CRITICAL: Report-only mode

**NEVER apply fixes automatically.** This skill is for auditing and reporting only. Follow this protocol:

1. **Report** — Present findings as a structured list of issues.
2. **Explain impact** — For each issue, describe what it means for users and what a fix involves.
3. **Flag visual changes** — Clearly mark whether a fix is:
   - **Invisible**: No visual change (e.g., adding `aria-label`, `aria-current`, `role="status"`, semantic element swaps with identical styling)
   - **Subtle**: Minor visual change that most users won't notice (e.g., focus outlines only visible during keyboard navigation, skip link only visible on focus)
   - **Visible**: Will change the page appearance (e.g., color/contrast adjustments, adding visible text, layout changes for touch targets)
4. **Wait for approval** — Only implement fixes the user explicitly approves. If the user asks to "fix all invisible ones", apply only those. Never bundle visible changes into an invisible fix.
5. **Show before/after** — When a fix involves visible changes, describe or show what will change before applying it.

### Report format

For each issue found, report:

```
**[Severity] Issue title** — WCAG criterion
- File: `path/to/file.tsx` (line or element)
- Problem: What's wrong and who it affects
- Fix: What the fix involves
- Visual impact: Invisible | Subtle | Visible (describe what changes)
```

## Project context

- **Stack**: React Router v7 (SPA mode, prerendered), React 19, Tailwind CSS v4, TypeScript
- **Routing**: File-based routes via React Router — no SSR, client-side navigation
- **Styling**: Tailwind utility classes + custom CSS in `app/app.css`
- **Accent color**: `#47DD4E` (green) — used for selection, nav highlights, logo separator
- **Fonts**: Instrument Sans (display), Inter (body), Inconsolata (mono) via Google Fonts
- **Animations**: Custom keyframes (float, bubble burst, highlight draw, pixel bounce) with partial `prefers-reduced-motion` support
- **Pages**: Landing (`/`), About (`/about`), Project detail (`/project/:id`)

## Workflow

1. **Audit** — Review pages/components against the checklist below.
2. **Report** — Present all findings grouped by severity, with visual impact flagged.
3. **Discuss** — Wait for the user to review and choose which issues to address.
4. **Fix (only when approved)** — Apply only the fixes the user approves, using patterns in the reference.
5. **Verify** — After approved fixes are applied, confirm keyboard flow and screen reader behavior.

## Running audits

Use at least one automated tool; combine with manual review.

- **Lighthouse**: Chrome DevTools Accessibility audit for full-page snapshot.
- **axe DevTools**: Browser extension or `@axe-core/cli` — run on page or component, fix by rule ID.
- **ESLint**: `eslint-plugin-jsx-a11y` for React — add to CI.

## Checklist: common issues and fixes

### Semantics and structure

- [ ] **Page title**: Each route has a descriptive `<title>` via React Router's `meta` export.
- [ ] **Landmarks**: Use `<header>`, `<main>`, `<nav>`, `<footer>`. One `<main>` per page.
- [ ] **Headings**: Logical order (`h1` → `h2` → `h3`), no skips. Each page has exactly one `h1`.
- [ ] **Lists**: Use `<ul>`/`<ol>`/`<li>` for list content, not divs.
- [ ] **Buttons vs links**: `<button>` for actions (copy email, toggle). `<a>`/`<Link>` for navigation. No `<div>` or `<span>` as clickable elements without role and keyboard support.

### Focus and keyboard

- [ ] **Focus visible**: All interactive elements show a visible focus indicator. Never remove outline without a clear custom replacement.
- [ ] **Tab order**: DOM order matches visual/logical order.
- [ ] **Keyboard operable**: Every mouse action has a keyboard equivalent (click → Enter/Space; hover → focus).
- [ ] **Focus trapping**: Modals/dialogs trap focus inside until closed; focus returns to trigger on close.
- [ ] **Skip link**: Provide "Skip to main content" link, visible on focus, that jumps to `<main>`.
- [ ] **Hidden header**: The auto-hiding header (`-translate-y-full`) must not trap or lose focus when it hides during keyboard navigation.

### Forms and labels

- [ ] **Labels**: Every form control has a `<label>`, `aria-label`, or `aria-labelledby`. Placeholder is not a label.
- [ ] **Errors**: Associate error messages with controls via `aria-describedby` and `aria-invalid`.
- [ ] **Copy feedback**: The "Copied!" state on email buttons must be announced to screen readers (use `aria-live` region or `role="status"`).

### Images and media

- [ ] **Alt text**: Meaningful images have descriptive `alt`. Decorative images use `alt=""`.
- [ ] **Decorative containers**: The floating icon cluster on `/about` is already `aria-hidden` — verify this stays true.
- [ ] **SVG icons**: SVGs that convey meaning need `<title>` or `aria-label`. Decorative SVGs need `aria-hidden="true"`.

### ARIA

- [ ] **Roles**: Use native elements first. Add ARIA roles only for custom widgets.
- [ ] **Names**: Interactive elements and landmark regions have accessible names. `<nav>` elements should use `aria-label` when there are multiple on a page.
- [ ] **Live regions**: Use `aria-live="polite"` for dynamic content (copy confirmations, loading states).
- [ ] **State**: Expose state with `aria-expanded`, `aria-selected`, `aria-current="page"` for active nav items.

### Color and contrast

- [ ] **Text contrast**: Normal text ≥ 4.5:1 (AA). Large text (≥18pt or ≥14pt bold) ≥ 3:1 (AA).
- [ ] **UI component contrast**: Interactive elements and meaningful graphics ≥ 3:1 against adjacent colors.
- [ ] **Not color alone**: Don't convey information by color only. Add icons, text, or pattern.

#### Project-specific contrast checks

The green accent `#47DD4E` on white `#fefefe` has a contrast ratio of approximately **1.9:1** — this fails all WCAG levels for text. It's currently used only as a background highlight behind dark text (which is fine), but verify it's never used as text color or as the sole indicator of state.

Other areas to check:
- `text-gray-400` on white for icon colors (~3.0:1, borderline)
- `text-gray-500` on white for secondary text (~4.6:1, passes AA)
- `text-gray-600` on white for body text (~5.7:1, passes AA)
- Dot grid background (`rgba(0,0,0,0.12)`) against `#fefefe` — purely decorative, no issue

### Motion and animation

- [ ] **`prefers-reduced-motion`**: Respect this media query for ALL non-essential motion. Currently only bubble animations are covered — extend to floating icons, highlight-draw, pixel-bounce, and icon-project-image hover scale.
- [ ] **No auto-play**: No content should auto-play in a way that's disorienting.

### Responsive and zoom

- [ ] **200% zoom**: Layout works at 200% browser zoom with no horizontal scrolling.
- [ ] **Touch targets**: Interactive elements at least 44×44 CSS px where possible.
- [ ] **Bento grid**: Verify the grid collapses correctly and cards remain tappable at all sizes.

## SPA and React Router patterns

These are often missed by automated tools.

### Route change announcements

React Router v7 client-side navigations don't trigger screen reader page announcements by default. Options:

1. **Focus management**: Move focus to `<main>` or the `<h1>` on route change.
2. **Live region**: Add an `aria-live="polite"` region that announces the new page title.
3. **Title update**: Ensure `document.title` updates on every route (React Router `meta` export).

### Navigation patterns

- Use `<Link>` from React Router (not raw `<a>`) for internal routes so the SPA router handles them.
- Mark the current page in navigation with `aria-current="page"`.
- The active nav highlight (green underline) is visual-only — add `aria-current="page"` for screen readers.

### Dynamic content

- When content loads asynchronously, use `aria-busy="true"` during loading.
- Announce completion with a live region, not just a visual change.
- Hidden content (`display: none`, `hidden`, inactive panels) must not contain focusable elements.

## Fix patterns (apply only when approved)

These are reference patterns for when the user approves a fix. Always confirm visual impact before applying.

| Fix | Visual impact | What changes |
|---|---|---|
| Add `aria-current="page"` to active nav link | Invisible | Attribute only, no visual change |
| Add `aria-live` region for copy feedback | Invisible | Hidden `<span>` added to DOM, nothing visible |
| Add `aria-label` to `<nav>` elements | Invisible | Attribute only |
| Wrap content in `<main>` landmark | Invisible | Semantic wrapper, no visual change |
| Add `<h1>` or fix heading hierarchy | Depends | May change text size/weight if heading level changes |
| Add skip link | Subtle | Only visible when focused via keyboard |
| Extend `prefers-reduced-motion` | Subtle | Only affects users with motion preference enabled |
| Adjust color contrast | Visible | Text/icon colors will change |
| Increase touch target sizes | Visible | Element sizing/spacing may change |
| Add visible focus indicators | Subtle | Only visible during keyboard navigation |

## Severity levels

When reporting issues:

- **Critical**: Blocks access (no focus, missing labels, no keyboard path). Fix first.
- **Serious**: Major barrier (poor contrast, wrong semantics, missing landmarks). Fix soon.
- **Minor**: Improves experience (redundant ARIA, heading order, motion preferences). Fix when practical.

Include: file/component, element or selector, WCAG criterion, proposed fix, and visual impact.

## After fixing (when approved)

- Re-run Lighthouse/axe and confirm violations are resolved.
- Tab through every page with keyboard only — verify all interactive elements are reachable and operable.
- Test with VoiceOver (Cmd+F5 on macOS) for changed components.
- Verify at 200% browser zoom.

## Reference

For detailed WCAG criteria, ARIA widget patterns, and testing tools, see [reference.md](reference.md).
