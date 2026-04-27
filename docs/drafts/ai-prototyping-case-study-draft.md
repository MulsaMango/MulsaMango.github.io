# Designing context for AI-assisted prototyping

Archived from `app/case-studies/ai-prototyping.tsx` while this project is being re-evaluated as a private snapshot rather than a served case study.

## Snapshot

This is a short snapshot of a two-week enterprise design experiment I was part of, exploring how AI could support coded prototyping when given the right context, constraints, and workflow structure.

The public version is intentionally high level. The full project involved internal tooling, product context, and implementation detail that I would be happy to talk through in a hiring process.

## The effort

A small design team explored whether designers could use AI to produce useful interactive prototypes inside a mature enterprise software environment. The goal was not to generate impressive demo screens. It was to understand whether AI could help with real design work where the product is complex, the design system is established, and the output needs to be useful beyond the first prompt.

The central question became:

**What context does AI need before its output becomes genuinely useful?**

## Why context mattered

AI can produce polished-looking UI quickly. That is both useful and risky. In enterprise software, a screen can look convincing while still using the wrong component, missing a domain assumption, flattening important terminology, or ignoring a pattern the team relies on.

The experiment treated context as a design material, not a prompt accessory. Instead of relying on one-off instructions, the team explored how to surround the AI with structured information it could use consistently.

That included:

- **Design system context:** component rules, usage guidance, layout patterns, and known misuse cases.
- **Product and domain context:** curated artefacts that helped the AI understand the problem space before generating UI.
- **Workflow context:** skills that guided the AI through research, prototyping, critique, polish, and validation.
- **Quality context:** review passes that checked whether outputs were not only functional, but appropriate, consistent, and usable.

The point was not to give the AI more context for its own sake. The work was in deciding which context mattered, how it should be structured, and when it should be used.

## What made it interesting

This project sat at the intersection of design systems, enterprise product knowledge, and emerging AI workflow design.

The team experimented with a code-based prototyping environment where designers could work closer to implementation, using real design system components rather than static mockups. The AI was guided by layered context and reusable workflow instructions, so each session had a stronger starting point than an empty chat window.

Some of the most interesting lessons came from the limits:

- More context was not always better. Targeted, structured context often produced stronger outputs than large, noisy inputs.
- Polished AI output could create false confidence. Design and subject matter review became more important, not less.
- Design system knowledge needed to be machine-readable before AI could reliably work inside it.
- Designers still needed to make the important judgement calls: what was appropriate, what was misleading, and what only looked right on the surface.

## My role

I was involved across the experiment, with a particular lens on the overlap between design system constraints, context structure, and output quality.

My contribution centred on how design knowledge could be made usable by AI: component guidance, workflow instructions, quality checks, and the patterns that help an AI produce something closer to a real design system output rather than a visual approximation.

It was collaborative by nature. The value came from combining design system thinking, embedded product knowledge, and rapid experimentation with AI tooling.

## What I took from it

The project sharpened my view that AI-assisted design is not just about prompting. In complex environments, the real work is shaping the conditions around the model: the context it can access, the constraints it needs to respect, the workflow it follows, and the review loops that catch plausible-but-wrong output.

The designer's role changes in that model, but it does not disappear. It becomes more strategic in some places and more exacting in others. Designers need to understand the problem space, structure the right inputs, set the right guardrails, and stay alert to when a polished output is masking a weak decision.

**Context raises the floor. Design judgement sets the ceiling.**

## Conversation starter

This snapshot only covers the public-facing shape of the work. There is much more I can discuss in person around context architecture, design systems, coded prototyping, skills-based AI workflows, and what this kind of tooling changes about design practice inside enterprise teams.
