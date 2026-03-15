# Case study building skill design

## Overview

A Cursor agent skill that codifies preferences for writing and building case studies in this portfolio. Lives at `.cursor/skills/case-study-building/SKILL.md`. Single-file approach (Approach A) with room to split into SKILL.md + reference.md if the file outgrows ~500 lines.

The Icons case study (`app/case-studies/icons.tsx`) serves as a living reference example, but the skill is the source of truth.

## Scope

The skill covers five areas:

1. **Voice, tone, and point of view**
2. **Grammar and style rules**
3. **Content strategy**
4. **Visual content**
5. **Technical implementation**

It does NOT prescribe a rigid writing process (e.g., "outline first, then draft"). The skill is a reference for how case studies should read and be built, not a step-by-step authoring workflow.

## Frontmatter

```yaml
name: case-study-building
description: >-
  Build and write case studies for this portfolio. Use when creating,
  drafting, editing, or reviewing case study content, structure, or
  components. Covers voice, tone, grammar, content strategy, visual
  content, and technical implementation in React.
```

## Section 1: Case study brief

Before drafting, define a brief with:

- **2-3 key angles** the case study is trying to convey. Examples: process/methodology, visual craft, complexity/problem-solving, design system thinking, AI/emerging tech, collaboration/stakeholder work.
- **Visual vs. written balance** — does this case study lean more on images or prose?
- **Role** — did I lead this end-to-end, or contribute as part of a team? This shapes pronouns throughout.
- **Audience hook** — what should a hiring manager take away in a 2-minute skim?

Everything in the case study should serve one of the key angles. If a detail is interesting but doesn't support the angles, cut it. The goal is "trailer, not the full movie" — enough to hook people and leave them wanting more.

### Example brief (Icons)

- Angles: process/methodology, design system thinking
- Balance: roughly equal written and visual
- Role: led end-to-end
- Audience hook: "She can lead end-to-end system-level work, not just push pixels"

## Section 2: Narrative arc

Consistent shape, flexible headings: **Context → Problem → Process → Outcome**

| Beat | Purpose | POV |
|------|---------|-----|
| **Context** | Set the scene. Who, what environment, why it matters. | Third person |
| **Problem** | What was broken, costly, or unsustainable. Make the reader feel the friction. | Third person / transitional |
| **Process** | How I approached it. Trade-offs, decisions, the 2-3 angles from the brief. | First person (or "we" for team work) |
| **Outcome** | Impact, results, reflection. Specific where possible, honest where not. | First person |

Principles:
- The arc is a guide, not a template. Headings should be descriptive and specific to the project.
- Not every beat needs equal weight. The brief determines emphasis.
- Transitions between beats should feel natural.
- A short reflection at the end is encouraged but not mandatory.

## Section 3: Voice, tone, and point of view

### Tone: conversational with substance

- Sound like a smart colleague explaining their work over coffee
- Credible first, personable second, but both present
- Confident without being boastful. "I did this" is fine; "I single-handedly transformed" is not
- Anti-LinkedIn-influencer. No dramatic rhetorical pivots, no thought-leader posturing

### Point of view

- Third person for context/problem framing
- First person for process, decisions, and reflection
- Adapts to role: "I" when you led, "we"/"the team" when you contributed as part of a group, "I" only for your specific contributions in team contexts
- The shift should feel natural, not mechanical

### Humor

- Sparingly and through specifics, not forced jokes
- Visual humor (memes, GIFs) is welcome
- Playful captions are good
- If it needs a setup, it's probably too much

### Bold key phrases

- Use to anchor takeaways within paragraphs
- Must feel organic to surrounding text, not standalone pull quotes
- If it reads like a LinkedIn post on its own, cut it or rewrite it

### External references

- Citing experts or external examples adds credibility
- Use when it genuinely strengthens the point, not to name-drop

## Section 4: Grammar and style rules

| Rule | Preference |
|------|-----------|
| Spelling | Australian English (formalised, recognised, colour) |
| Commas | Oxford comma |
| Contractions | Yes, sounds more human (don't, wasn't, it's) |
| Headings | Sentence case |
| Dashes | No en dashes or em dashes. Use commas, full stops, or restructure |
| Paragraphs | Short. More than 3-4 sentences should be broken up or turned into bullets |
| Bullet points | Preferred over long flowing prose for listing deliverables, outcomes, or steps |
| Exclamation marks | Very rare |

### Banned AI-isms (grows over time)

- "It's not X, it's Y" rhetorical pivots
- "In today's fast-paced..." or any dramatic scene-setting
- "Dive deep", "leverage", "holistic", "synergy"
- "This is where the magic happens"
- "Let's unpack this"
- "But here's the thing..."
- Overly dramatic transitions

## Section 5: Content strategy

### Audience: hiring managers and design leads

- They skim. Strongest signals visible in a 2-minute scan.
- Headings, bold phrases, and image captions do the heavy lifting for skimmers.
- Deeper process detail is there for anyone who digs in, but the case study shouldn't depend on it.

### Scannability

- Descriptive, specific headings (not "Phase 1", "Phase 2")
- Bullet points for deliverables, outcomes, and lists
- Images break up text and give visual thinkers something to anchor on
- No section should be a wall of unbroken prose

### Strategic restraint

"Trailer, not the full movie." Show enough depth to be interesting and credible, but don't give a full play-by-play. The 2-3 key points from the brief focus the narrative and limit scope. Everything should serve one of those points.

The goal is to leave a hiring manager thinking "I want to hear more about this", not feeling like they've already got the full picture.

### Process vs. outcome balance

- Determined by the case study brief
- Process is the interesting part, but outcomes validate it. Neither works alone.
- Be specific about impact where possible, honest where you can't quantify
- Don't inflate. If impact was modest, frame it honestly and lean on process instead.

### Don't over-explain

- Trust the reader's intelligence. These are design leaders, not newcomers.
- Don't define standard design practice.
- Explain specialist context only when it's specific to the company or domain.

## Section 6: Visual content

### Role of images

- Support the narrative, don't decorate
- Break up prose and give visual thinkers something to anchor on
- Opportunity for personality: memes, GIFs, and playful visuals alongside serious design artifacts

### Types

- Design artifacts: screenshots, component examples, Figma exports
- Process artifacts: FigJam boards, workshop outputs, diagrams
- Humor: memes, GIFs, used sparingly
- Before/after comparisons where relevant

### Captions

- Every image should have a descriptive caption
- Captions can be playful or add context the image doesn't show on its own
- Alt text is a separate concern: genuinely descriptive for accessibility

### Sizing

- `Image` (full-width) for key artifacts that deserve attention
- `SmallCaseStudyImage` for supplementary visuals, memes, or comparisons

This section will evolve as more case studies are built.

## Section 7: Technical implementation

### Component pattern

- Each case study is a React component in `app/case-studies/`
- Named by project (e.g., `icons.tsx`), exported as a named function
- Receives `Project` as a prop
- Wrapped in `<article className="prose max-w-none">` with a single `<section>` inside

### Shared components

- `Heading2`, `Heading3` from `case-study-typography.tsx` with `id` prop for ToC
- `Image`, `SmallCaseStudyImage` from `case-study-image.tsx` with `src`, `alt`, `caption`
- Heading IDs: kebab-case, descriptive

### Images

- Stored in `app/case-studies/{project}-images/`
- Imported at top of component file
- Formats: PNG, JPG, SVG, GIF

### Registration

- Add project to `app/data/projects.ts` (id, title, tags, image, bgColor)
- Map component in `app/case-studies/index.tsx` via `caseStudyComponents`
- `project.$id.tsx` handles rendering via `getCaseStudyComponent()`

### Styling

- Body text: default prose styles, `text-gray-600` / `text-gray-700`
- Fonts: `font-sans` for body, `font-mono` for tags
- External links: standard `<a>` tags within prose

## Evolution

This skill is designed to grow. As more case studies are written:

- New anti-patterns get added to the banned list
- Visual content guidance expands with new patterns
- Technical patterns update as the codebase evolves
- New preferences are appended to relevant sections

## Implementation approach

Single file: `.cursor/skills/case-study-building/SKILL.md`

If the file exceeds ~500 lines, split the technical implementation section into a `reference.md` alongside it.
