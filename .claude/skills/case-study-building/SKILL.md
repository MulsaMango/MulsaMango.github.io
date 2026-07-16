---
name: case-study-building
description: >-
  Use when creating, drafting, editing, or reviewing case study content,
  structure, or components for this portfolio. Covers the case study brief,
  narrative arc, content strategy, visual content, and React implementation.
  Builds on the writing-voice skill for tone and grammar.
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

### Clarifying questions before writing

Before proposing a brief or starting any draft, ask the user clarifying questions. Don't assume intent from the raw content alone. These are worth asking every time:

- **What makes this one interesting?** What's the core differentiator? For WiseTech projects, this is often the enterprise domain and team maturity. Don't let the AI decide what the interesting angle is.
- **What are you attached to in the draft?** Specific structures (like two explicit questions), titles, framings, or phrases the user has already chosen deliberately. Don't flatten these during refinement.
- **What's the domain context?** Product name, user types, why the domain makes the work harder or more interesting than a generic version of the same project.
- **What's still rough vs. intentional?** Some parts of a draft are placeholders; others are carefully worded. Ask before rewriting.
- **Where do you want your voice strongest?** Which sections should carry the most personal perspective? (Often reflections, but not always.)

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
- Reflections are strongest as a structured section with named `Heading3` sub-sections (e.g. "What the architecture earned", "What it costs to maintain"), not a single closing paragraph. This creates scannable, specific reflection topics and natural places for first-person voice.

## Voice and point of view

**Follow the `writing-voice` skill for tone, humour, grammar, dashes, and banned phrases.** It is the canonical voice reference. The notes below are the case-study-specific layer on top of it.

### Point of view across the narrative arc

- Third person for context and problem framing.
- First person for process, decisions, and reflection, where personal voice has the most impact.
- Adapts to role: led end-to-end leans "I"; team work leans "we" and "the team", with "I" reserved for specific individual contributions.
- Third person can carry more than context and problem. Process and architecture sections often read better in third person too (especially for team work), concentrating first person in reflections.

### Bold phrases and references in case studies

- Concentrate bold key-phrase takeaways in reflections and key moments. A whole case study should have a handful at most.
- Citing an expert or external example (a relevant blog post or industry voice) adds credibility. Use when it strengthens the point, not to name-drop.

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

### Don't genericise

- The specific domain, enterprise context, and team maturity are often the most interesting and differentiating parts of a case study. "Mature enterprise software" and "established design team" are substance, not background. Don't dilute them into generic descriptions when refining.
- Preserve the user's original framing structures. If the draft has two explicit questions, a provocative title, or a specific structural choice, that's usually deliberate. Don't flatten it into something cleaner but less distinctive.
- Prefer the user's original title over a "safer" descriptive alternative. A specific, provocative question ("Can AI produce prototypes worth shipping in complex enterprise software?") beats a generic label ("AI-accelerated design prototyping") every time.

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
