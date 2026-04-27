# AI prototyping case study draft

Archived from `app/case-studies/ai-prototyping.tsx` while this project is being re-evaluated as a private snapshot rather than a served case study.

## The experiment

WiseTech's design function ran a deliberate investigation into AI-accelerated design. I was part of a team of designers who dedicated a focused two-week sprint to understand where AI actually makes a meaningful difference in a mature design process, and we wanted to go deep enough to find out.

AI prototyping tools are everywhere now, and increasingly accessible. What they generally lack is the ability to produce anything of real value in mature enterprise products. CargoWise is built for logistics experts like freight forwarders, customs brokers, and warehouse operators. The work is data-dense, the terminology is domain-specific, and the design system and design team behind it have established standards. That's a different challenge from generating a demo screen, and it's the one we set out to test.

We started with two explicit questions.

**Can designers bypass Figma and go straight to code?** What would it take to make that viable in practice? Not as a demonstration, but as a repeatable workflow for a real design squad working on complex enterprise software.

**What's the best possible AI context setup for an entire design squad?** Role types modelled as skilled agents. Domains encoded as structured, versioned knowledge. Research artefacts feeding into every session. The whole architecture considered upfront.

Both questions sit on the prototyping and build phase of the design process. That's where the sprint was focused. This case study describes what the team built, what worked, and what's still unsolved.

Image placeholder: double diamond with prototyping phase highlighted, or playground home screenshot.

## What we built

The team built a code-based prototyping environment where designers write components using WiseTech's design system and see them rendered live in the browser. The design system is the boundary condition: every prototype is built exclusively from its components, and the AI works within that constraint.

The repository is also where the AI's broader working context lives. Domain knowledge, workflow instructions, component references, and quality checks all sit alongside the prototype code in the same file system. Everything the AI needs is in the repo, readable by both the AI and the team, and reviewable like any other file.

The architecture has four parts:

- **The World-View:** a structured knowledge hub where domain research lives as versioned markdown files.
- **Skills:** plain text instruction files that tell the AI how to run each phase of the workflow.
- **Agents:** longer-running task handlers for research consolidation and prototype validation.
- **Design system references:** the component catalogue, pattern library, and icon reference, all as machine-readable files the AI consults during a session.

Image placeholder: repo file structure diagram showing context, skills, agents, and design system references.

## The context architecture

As AI tools have become more capable of navigating file systems and reading context directly, how you structure that context starts to matter. What files the model has access to, how they're organised, and when they get loaded. A well-structured file system with consistent naming and predictable paths becomes something the AI can navigate on its own, rather than something a human has to manually assemble and paste in. The playground is built around that idea.

### Advisory-first: every session starts with research

Every session starts with a research phase, and the designer's prompt drives it. When someone requests a prototype, the advisory skill uses that request to determine which domain files to load, which role definitions apply, and what terminology the session should use. Building only starts once that brief is assembled and written to a context file in the prototype folder. The prototyping skill reads that file when the build begins. That handoff is the concrete link between the research layer and the build.

In enterprise software, terminology and role assumptions are load-bearing. An AI will produce plausible-looking output regardless of whether its domain assumptions are correct. Wrong assumptions mean redesign, not iteration. The advisory phase is how the team kept that from happening by default.

Image placeholder: diagram showing advisory skill pulling in supply context and portfolio context, writing context.md, then handing off to prototyping skill.

### Domain knowledge as structured files

The discovery work a design squad produces, role analysis, org context, and competitive research, typically lives in documents that are useful for humans but hard for an AI to access reliably. The goal was to close that gap.

The answer was a version-controlled file hierarchy called the World-View. It holds two layers:

- **External layer:** industry knowledge like role types, organisation types, competitive analysis, and cross-cutting pattern indexes. Stable, domain-wide, and shared across projects.
- **Internal layer:** product-specific knowledge like product visions and information architecture maps. AI-generated, requires PM sign-off before use, and decays as the product changes.

The advisory skill loads files selectively based on the request. A prototype about a warehouse manager's check-in workflow loads the relevant role definition and org-type context, not the full hierarchy. Consistent naming conventions mean the skill can construct the right file path from the prompt, without needing a separate manifest.

### A workflow the AI can follow

The skill system encodes the design workflow in a form the AI can follow step by step, and a human can read and audit. Advisory, then prototyping, then a quality pipeline covering validation, design critique, copy review, polish, and edge-case hardening. Each skill has one clear job and they compose cleanly.

The goal was a scaffold rather than a gate. Hard rules create workarounds. A well-designed scaffold makes the right path feel natural, and over time designers started following it without needing the system to redirect them.

### Quality in passes, not checkboxes

Post-build quality review runs as a sequence of separate passes:

- **Deterministic checks first:** invalid icon names, layout misuse, WCAG AA failures.
- **Design critique:** visual hierarchy, information architecture, domain alignment.
- **Copy review:** labels, empty states, error messages.

This mirrors how design review actually works. A reviewer checking component props isn't well-placed to evaluate information architecture at the same time. Separating the passes produces more precise feedback at each stage.

Image placeholder: screenshot of a finished prototype.

## Reflections

### What the architecture earned

The experiment proved that a domain-grounded, compounding AI prototyping environment produces better outputs than generic prompting. The research-first rule, the layered knowledge hub, the quality pipeline. Each adds friction upfront that pays off in output quality. Skip any one and the outputs drift toward plausible-but-wrong.

The core value: the AI handles the scaffolding work, component lookup, domain research, terminology grounding, quality checking, so the designer can stay focused on the actual design decisions. That's what the system was built for.

### What it costs to maintain

**The maintenance surface was underestimated.** Every layer requires active curation. Skills drift when the design system updates. The knowledge hub drifts when the product changes. The component catalogue becomes unreliable when new components ship without a catalogue entry. A neglected version of this system is worse than no system, because the AI follows stale context confidently.

The LLM dependency is also hard to plan around. The scaffolding is only as good as the model's ability to follow it. When models improve, the ceiling rises, and it has risen visibly over the course of this experiment. When they hallucinate or fail to respect instruction ordering, the whole pipeline suffers.

### The gap the system doesn't close

Non-developer onboarding is a genuine, unsolved friction point. Git, branches, pull requests, understanding context windows, knowing when the AI has gone off-track versus when your prompt is underspecified. These are real barriers. Designers who'd spent time in a codebase ramped up quickly. Designers without that exposure faced a steeper learning curve than anticipated.

The system works best when the person using it has a working mental model of what's happening. Not a technical model, but a conceptual one: why the research phase matters, what the skills are doing, how to recognise when the AI has produced something valid but design-wrong. That model accumulates through use. It's not something you can document your way into.

Domain knowledge, component rules, workflow patterns, terminology conventions, quality criteria: all encodable. Design judgment is not. The AI still needs the designer to know what a good outcome looks like.

Suggestion: a side-by-side comparison showing a generic AI prototype output versus a domain-grounded one from the playground would powerfully illustrate the thesis.
