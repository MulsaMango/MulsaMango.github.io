import type { Project } from "../data/projects";
import { Heading2 } from "./case-study-typography";

interface CoreFrameworkRedesignCaseStudyProps {
  project: Project;
}

export function CoreFrameworkRedesignCaseStudy({
  project,
}: CoreFrameworkRedesignCaseStudyProps) {
  return (
    <article className="prose max-w-none">
      <section className="mb-12">
        <p>
          This is a snapshot of one slice of a larger design system effort at
          WiseTech. The broader project ran several parallel threads: an identity
          refresh, a system-wide rethink, and a deeper investment in expert
          workflows. This snapshot focuses on the shell, the slice I led.
        </p>
        <p>
          The shell is the scaffolding around the flagship logistics product: the
          side navigation, the top bar, the page chrome, and the content layout.
          It's where the system asserts itself before the user even reaches the
          screen they came for.
        </p>
        <p>
          Done well, the shell disappears into the work. Done poorly, every
          expert workflow pays the cost.
        </p>

        <Heading2 id="where-the-shell-wasnt-holding-up">
          Where the shell wasn't holding up
        </Heading2>
        <p>
          The shell had been built around standard web patterns: lightweight,
          familiar, the kind of chrome shaped for casual users in shorter
          sessions.
        </p>
        <p>
          WiseTech's users are different. They're logistics experts running
          enterprise workflows, moving through dense data across many contexts
          every day. The shell wasn't built for that kind of work, and the
          friction compounded across every workflow. We needed to know exactly
          where, and what it was costing.
        </p>

        <Heading2 id="leading-user-research">
          Leading user research with embedded product designers
        </Heading2>
        <p>
          I led a participatory design research study with{" "}
          <strong>
            25+ product designers from across our global organisation
          </strong>{" "}
          as expert participants. The study was async and distributed over two
          weeks, with each designer working in their own team's product context.
        </p>
        <p>
          Each participant was given a stripped-back version of the shell as a{" "}
          <strong>design stimulus</strong> and asked to apply it to real
          scenarios from their day-to-day work. They could rework it, push back,
          redesign, and document their thinking as they went.
        </p>
        <p>
          Embedded product designers carry deep domain knowledge, work with real
          product data, and have an existing relationship with our team that
          supports honest pushback. They were voice-of-user proxies with the
          craft to articulate where the shell was breaking, and why.
        </p>

        <Heading2 id="from-findings-to-direction">
          From findings to direction
        </Heading2>
        <p>
          I led the synthesis of the raw material: hundreds of annotated
          screens, written critique, and competing solutions, triangulated with
          earlier feedback and smaller research efforts in the same space.
          Through <strong>thematic analysis</strong> I clustered observations
          into a structured set of themes, each evaluated for strength of
          consensus, unresolved questions, technical dependencies, and the
          confidence needed to commit to a direction.
        </p>
        <p>
          A few of the themes that emerged: layouts that flex with the work,
          navigation users can configure to their own needs, color reserved for
          signal and meaning, and scalable, adaptive placement for critical
          actions.
        </p>
        <p>
          The output was a synthesis asset that became load-bearing for
          downstream direction. It shaped the shell work directly, and fed into
          the broader system rethink running in parallel.
        </p>

        <Heading2 id="the-redesigned-shell">The redesigned shell</Heading2>
        <p>
          The redesigned shell brings together a configurable side navigation, a
          clearer hierarchy in the page chrome, a more deliberate use of color,
          and content layouts that flex with the work. It doesn't shy away from
          density where expert workflows demand it. Controls stay within reach,
          and the system optimizes for speed over visual restraint.
        </p>

        <Heading2 id="reflections">Reflections</Heading2>
        <p>
          This was one of the most structured and larger-scale research efforts
          the design system team had run. Participation was enthusiastic, the
          working relationships across the design org strengthened through it,
          and the synthesis itself became a reference point teams returned to
          throughout the redesign.
        </p>
        <p>
          For the UI work, I adopted an AI-enabled workflow that balanced the
          Figma canvas with a coded prototyping environment. I set up a dedicated
          playground repo where decisions could move in and out of Figma as the
          design progressed: sketching on the canvas, prototyping in code,
          bringing learnings back as patterns took shape. The balance meant I
          could explore visual direction and interaction behavior at the same
          time. There's more to say about that workflow, but I'll save it for its
          own snapshot.
        </p>
        <hr />
        <p>
          I'd love to walk through more of this in person. If anything here
          speaks to work you're doing or thinking about, get in touch.
        </p>
      </section>
    </article>
  );
}
