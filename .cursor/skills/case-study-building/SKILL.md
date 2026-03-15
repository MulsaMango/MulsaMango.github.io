---
name: case-study-building
description: >-
  Build and write case studies for this portfolio. Use when creating,
  drafting, editing, or reviewing case study content, structure, or
  components. Covers voice, tone, grammar, content strategy, visual
  content, and technical implementation in React.
---

# Case study building

The source of truth for how case studies are written and built in this portfolio. The Icons case study (`app/case-studies/icons.tsx`) is a living reference example of these principles in action.

This skill is designed to evolve. Append new preferences and anti-patterns to the relevant sections as more case studies are written.

## Case study brief

Before drafting anything, define a brief. This frames the entire case study.

- **2-3 key angles** the case study is trying to convey. Pick from: process/methodology, visual craft, complexity/problem-solving, design system thinking, AI/emerging tech, collaboration/stakeholder work, or define your own.
- **Visual vs. written balance** — does this lean more on images or prose?
- **Role** — led end-to-end, or contributed as part of a team? This shapes pronouns throughout.
- **Audience hook** — what should a hiring manager take away in a 2-minute skim?

Everything in the case study should serve one of the key angles. If a detail is interesting but doesn't support them, cut it.

**"Trailer, not the full movie."** Enough to hook people and leave them wanting more.

### Example brief (Icons)

- Angles: process/methodology, design system thinking
- Balance: roughly equal written and visual
- Role: led end-to-end
- Audience hook: "She can lead end-to-end system-level work, not just push pixels"

## Narrative arc

Consistent shape, flexible headings: **Context → Problem → Process → Outcome**

| Beat | Purpose | POV |
|------|---------|-----|
| **Context** | Set the scene. Who, what environment, why it matters. | Third person |
| **Problem** | What was broken, costly, or unsustainable. Make the reader feel the friction. | Third person / transitional |
| **Process** | How it was approached. Trade-offs, decisions, the angles from the brief. | First person, or "we" for team work |
| **Outcome** | Impact, results, reflection. Specific where possible, honest where not. | First person |

- The arc is a guide, not a template. Headings should be descriptive and specific to the project, not generic labels like "Process" or "Phase 2".
- Not every beat needs equal weight. The brief determines emphasis.
- Transitions between beats should feel natural, not like switching sections of a form.
- A short reflection at the end is encouraged but not mandatory.

## Voice, tone, and point of view

### Tone: conversational with substance

- Sound like a smart colleague explaining their work over coffee
- Credible first, personable second, but both present
- Confident without being boastful. "I did this" is fine; "I single-handedly transformed" is not
- Anti-LinkedIn-influencer. No dramatic rhetorical pivots, no thought-leader posturing

### Point of view

- Third person for context and problem framing
- First person for process, decisions, and reflection
- Adapts to role in the project:
  - **Led end-to-end:** predominantly "I"
  - **Part of a team:** "we" and "the team" for shared work, "I" only for specific individual contributions
- The shift between third and first person should feel natural, not mechanical

### Humor

- Sparingly and through specifics, not forced jokes
- Visual humor (memes, GIFs) is welcome alongside design artifacts
- Playful captions are good ("pencil multiverse", "hello AI 👋")
- If it needs a setup, it's probably too much

### Bold key phrases

- Use to anchor takeaways within paragraphs ("Process change is people change")
- Must feel organic to surrounding text, not like standalone pull quotes
- If it reads like a LinkedIn post on its own, cut it or rewrite it
- Use sparingly and intentionally

### External references

- Citing experts or external examples adds credibility (like a relevant blog post or industry voice)
- Use when it genuinely strengthens the point, not to name-drop

## Grammar and style rules

| Rule | Preference |
|------|-----------|
| Spelling | Australian English (formalised, recognised, colour) |
| Commas | Oxford comma |
| Contractions | Yes, they sound more human (don't, wasn't, it's) |
| Headings | Sentence case ("Selected project highlights") |
| Dashes | No en dashes or em dashes. Restructure with commas, full stops, or separate sentences |
| Paragraphs | Short. More than 3-4 sentences should be broken up or turned into bullets |
| Bullet points | Preferred over long flowing prose when listing deliverables, outcomes, or steps |
| Exclamation marks | Very rare |

### Banned phrases and patterns (grows over time)

- "It's not X, it's Y" rhetorical pivots
- "In today's fast-paced..." or any flavour of dramatic scene-setting
- "Dive deep", "leverage", "holistic", "synergy"
- "This is where the magic happens"
- "Let's unpack this"
- "But here's the thing..."
- Overly dramatic transitions of any kind
- Any phrase that sounds like AI-generated filler

## Content strategy

### Audience: hiring managers and design leads

- They skim. The strongest signals need to be visible in a 2-minute scan.
- Headings, bold phrases, and image captions do the heavy lifting for skimmers.
- Deeper process detail is there for anyone who digs in, but the case study shouldn't depend on it to make its point.

### Scannability

- Descriptive, specific headings
- Bullet points for deliverables, outcomes, and lists of any kind
- Images break up text and give visual thinkers something to anchor on
- No section should be a wall of unbroken prose

### Strategic restraint

Show enough depth to be interesting and credible, but don't give a full play-by-play. The 2-3 key points from the brief focus the narrative and limit scope. Everything should serve one of those points.

The goal is to leave a hiring manager thinking "I want to hear more about this", not feeling like they've already got the full picture.

### Process vs. outcome balance

- Determined by the case study brief
- Process is the interesting part, but outcomes validate it. Neither works alone.
- Be specific about impact where possible ("90+ vetted contributions"), honest where you can't quantify ("noticeable lift in icon literacy")
- Don't inflate. If impact was modest, frame it honestly and lean on process instead.

### Don't over-explain

- Trust the reader's intelligence. These are design leaders, not newcomers.
- Don't define standard design practice.
- Explain specialist context only when it's specific to the company or domain (like what freight forwarders do, or why a legacy pipeline was slow).

## Visual content

### Role of images

- Support the narrative, don't decorate. Every image should illustrate a point being made in the text.
- Break up prose and give visual thinkers something to anchor on.
- Opportunity for personality: memes, GIFs, and playful visuals alongside serious design artifacts.

### Types of visual content

- Design artifacts: screenshots, component examples, Figma exports
- Process artifacts: FigJam boards, workshop outputs, diagrams
- Humor: memes, GIFs, used sparingly to add personality
- Before/after comparisons where relevant

### Captions

- Most images should have a descriptive caption
- Captions can be playful or add context the image doesn't show on its own
- Alt text is a separate concern: genuinely descriptive for accessibility, not a copy of the caption

### Sizing

- `Image` component (full-width) for key artifacts that deserve attention
- `SmallCaseStudyImage` component for supplementary visuals, memes, or comparisons

This section will evolve as more case studies are built.

## Technical implementation

### Component pattern

Each case study is a React component in `app/case-studies/`:

```tsx
import type { Project } from "../data/projects";
import { Image, SmallCaseStudyImage } from "./case-study-image";
import { Heading2, Heading3 } from "./case-study-typography";

interface Props {
  project: Project;
}

export function ProjectNameCaseStudy({ project }: Props) {
  return (
    <article className="prose max-w-none">
      <section className="mb-12">
        {/* Case study content */}
      </section>
    </article>
  );
}
```

### Shared components

| Component | Source | Props | Purpose |
|-----------|--------|-------|---------|
| `Heading2` | `case-study-typography.tsx` | `id` (kebab-case, for ToC) | Section headings |
| `Heading3` | `case-study-typography.tsx` | `id` (kebab-case, for ToC) | Sub-section headings |
| `Heading4` | `case-study-typography.tsx` | `id` | Minor headings |
| `Image` | `case-study-image.tsx` | `src`, `alt`, `caption` | Full-width images |
| `SmallCaseStudyImage` | `case-study-image.tsx` | `src`, `alt`, `caption` | Smaller inline images |

Heading `id` values must be kebab-case and descriptive. They power the `TableOfContents` component and URL anchors.

### Images

- Store in `app/case-studies/{project}-images/`
- Import at top of component file
- Supported formats: PNG, JPG, SVG, GIF

### Registering a new case study

1. Add or update the project in `app/data/projects.ts`:

```ts
{
  id: 2,
  title: "Project title",
  tags: ["Tag one", "Tag two"],
  image: null,
  bgColor: "bg-gray-100",
}
```

2. Map the component in `app/case-studies/index.tsx`:

```ts
import { ProjectNameCaseStudy } from "./project-name";

export const caseStudyComponents: Record<number, CaseStudyComponent> = {
  1: IconsCaseStudy,
  2: ProjectNameCaseStudy,
};
```

3. The `project.$id.tsx` route handles rendering automatically via `getCaseStudyComponent()`.

### Styling conventions

- Body text: default prose styles with `text-gray-600` / `text-gray-700`
- Fonts: `font-sans` for body, `font-mono` for tags and UI elements
- External links: standard `<a>` tags within prose
- Green accent `#47DD4E` for highlights and selection
