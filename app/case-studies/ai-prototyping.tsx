import type { Project } from "../data/projects";
import { Image } from "./case-study-image";
import { Heading2 } from "./case-study-typography";
import uiQualityChart from "./ai-prototyping/images/ui-quality-vs-prompts-context-comparison.png";

interface AiPrototypingCaseStudyProps {
  project: Project;
}

export function AiPrototypingCaseStudy({
  project,
}: AiPrototypingCaseStudyProps) {
  return (
    <article className="prose max-w-none">
      <section className="mb-12">
        <Heading2 id="the-problem-and-the-context">
          The problem and the context
        </Heading2>
        <p>
          Off-the-shelf AI prototyping tools are good at producing UI. They're
          less good at producing UI that aligns with a specific design system, a
          specific domain, or the way a specific product is built. For a design
          team working in mature enterprise software, those gaps are the whole
          game.
        </p>
        <p>
          I was part of a structured AI experiment run by the design team at
          WiseTech Global, set up around two hypotheses: that giving the AI
          better context up front would lead to better UI outcomes, and that
          prototyping in code would improve handover and collaboration with
          developers.
        </p>

        <Heading2 id="the-outcome">The outcome</Heading2>
        <p>
          We built a repo we called the 'Prototyping Playground', where
          designers (or other non-engineering roles) can go from a prompt of any
          kind to a working, interactive UI prototype.
          What sets the Playground apart is what it knows before it starts
          building.
        </p>
        <p>Three layers of context feed in:</p>
        <ul>
          <li>
            <strong>The design system layer:</strong> The components designers
            should use, the layout patterns we've validated, and the misuse cases
            to avoid. Together, they guard-rail what the AI builds with.
          </li>
          <li>
            <strong>The design context layer:</strong> Portfolio-specific
            knowledge built up from user research: role types, organisation
            types, user journeys, and learnings from interviews. This grounds the
            AI in the domain the product is for.
          </li>
          <li>
            <strong>The internal product layer:</strong> A live connection
            through MCP servers to internal product knowledge and systems, so the
            AI can build on what's already shipping.
          </li>
        </ul>
        <p>
          A set of{" "}
          <a href="https://agentskills.io/home">Claude skills</a> threads
         those layers. Each one guides the AI through a specific task:
          when to pull in domain context, how to draft, how to critique its own
          output, when and how to refine. The context layers are what the AI
          knows. The skills are what knit it all together into an experience a
          designer can actually use.
        </p>
        <p>
          By the end of the experiment, both hypotheses held. Better context led
          to better UI outcomes, prototyping in code proved viable alongside
          Figma. The gain was clearest with developers: hand-offs arriving as
          working code they could pick up and build on directly.
        </p>
        <Image
          src={uiQualityChart}
          alt="Line chart plotting achieved UI quality against number of prompts over time. Three curves are shown: 'No rich context' (grey) climbs slowly, the 'Prototyping Playground' (solid blue) climbs faster, and 'Improvements' (dashed blue) climbs fastest - reaching high UI quality in fewer prompts as context increases."
          caption="Richer context reaches a usable outcome in fewer prompts."
          lightbox
        />
        <div className="not-prose">
          <aside className="rounded border border-gray-200 bg-gray-50 px-5 py-4 shadow-[0_1px_3px_0_rgb(0,0,0,0.04)]">
            <p className="text-base leading-relaxed text-gray-700 text-center"><strong className="font-semibold">Context</strong> is the difference between a generic output and a useful one.</p>
          </aside>
        </div>

        <Heading2 id="my-role">My role</Heading2>
        <p>
          My focus was the design system layer, alongside the design system
          lead. The work was making sure the system components and patterns could be
          ingested accurately, and that the AI had the usage guidance and
          documentation it needed to compose them well. Beyond that layer, I
          helped knit the pieces together so they worked as one tool. I engaged
          directly with the design system's tech lead and principal architect,
          presented the tool to stakeholders and embedded designers, and ran
          targeted tests of the tool, changing variables to identify gaps,
          redundancies, or bugs.
        </p>
        <p>
          The rest of the team was focused on the design context layer, where
          three embedded designers from a single portfolio team structured their
          portfolio's research into context the AI could draw from.
        </p>

        <Heading2 id="impact">Impact</Heading2>
        <p>
          The Playground is now an official tool in a product designer's toolkit
          at WiseTech Global. Because its outputs are closer to
          production-ready, it gives designers and developers something concrete
          to collaborate around. It's currently rolling out across teams,
          alongside broader work on AI fluency and familiarity with dev
          environments like VS Code and GitHub.
        </p>
        <p>
          The Playground is still finding its shape. Mature enterprise software
          comes with legacy and technical constraints, so there have been plenty of bumps to
          iron out. And with AI changing week to week, it'll keep evolving with
          the work.
        </p>

        <Heading2 id="reflections">Reflections</Heading2>
        <p>
          This project gave me a practical understanding of how having structured
          context and skills available to frontier AI models can reduce the time
          taken to go from idea to prototype to delivery, while maintaining a
          high quality bar, even at speed.
        </p>
        <p>
          There's a <strong>big</strong> shift happening in design, and it can
          be overwhelming.
        </p>
        <p>
          If anything, this project reinforced the value of design itself.
          Design is a process, not a deliverable, and not any specific tool.
          It's the work of figuring out what should exist, why it should exist,
          who it exists for, and what 'good' looks like. <strong>AI speeds up building. It doesn't decide what's worth building.</strong>
        </p>
       
      </section>
    </article>
  );
}
