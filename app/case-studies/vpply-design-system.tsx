import type { Project } from "../data/projects";
import { Heading2 } from "./case-study-typography";

interface VpplyDesignSystemCaseStudyProps {
  project: Project;
}

export function VpplyDesignSystemCaseStudy({
  project,
}: VpplyDesignSystemCaseStudyProps) {
  return (
    <article className="prose max-w-none">
      <section className="mb-12">
        <p>
          <em>
            An older project from before joining WiseTech, at a different scale
            and under very different constraints to the work I do now.
          </em>
        </p>

        <Heading2 id="the-problem-and-the-context">
          The problem and the context
        </Heading2>
        <p>
          Vpply is an early-stage HR startup running a video-first job board,
          where applicants record a 10–90 second video instead of submitting a
          cover letter and resume. By the time I joined as the first UX/UI
          designer on a 12-week contract in early 2023, the product had been
          built piece by piece by different developers, with no shared design
          language across it. Many shades of "Vpply pink", haphazard typography,
          no agreed pattern for buttons, inputs, or navigation. Designers
          couldn't trust anything as a source of truth, developers were
          rebuilding duplicate components, and users were relearning the UI
          screen by screen.
        </p>
        <p>
          I scoped an MVP design system to run alongside my main project: a
          redesign of the job-seeker application flow.
        </p>

        <Heading2 id="my-role">My role</Heading2>
        <p>
          I worked closely with one other designer and checked in weekly with
          the Technical Lead. The scope was pragmatically tight, so the system
          could actually ship.
        </p>
        <ul>
          <li>
            <strong>Core components only</strong> — buttons, text inputs,
            navigation
          </li>
          <li>
            <strong>Accessible to WCAG 2.1 AA</strong>
          </li>
          <li>
            <strong>Scalable</strong> through reusable components and variants
          </li>
          <li>
            <strong>Consistent</strong> with the Vpply brand
          </li>
        </ul>
        <p>
          Brad Frost's Atomic Design framework underpinned the approach. I also
          referenced public design systems like Atlassian, GEM, and Material to
          see how others had solved the same problems.
        </p>

        <Heading2 id="what-the-system-covered">
          What the system covered
        </Heading2>
        <p>
          The library was built in Figma, using team libraries, global styles,
          and variant properties so designers and developers could pull from a
          single source.
        </p>
        <ul>
          <li>
            <strong>Colour palette:</strong> I consolidated the many shades of
            "Vpply pink" into a tighter palette, alongside neutral and system
            colours. I set them up as Figma styles so designers and developers
            were pulling from the same source.
          </li>
          <li>
            <strong>An accessibility win:</strong> The original Vpply pink
            couldn't meet WCAG 2.1 AA against white text. I proposed shifting
            the brand pink to a slightly darker, less saturated variation —
            accessible without losing recognisability. Leadership agreed.
          </li>
          <li>
            <strong>Typography, spacing, and grids:</strong> Montserrat was
            already the brand typeface, but used haphazardly. I set up a type
            scale and hierarchy, plus spacing guidelines and a grid for desktop
            and mobile.
          </li>
          <li>
            <strong>Core components:</strong> Buttons with all their states,
            text inputs, navigation and menus, tooltips, checkboxes, radio
            buttons, toggles — all wired with variant properties. Some had
            interactive states wired in so developers could see intended
            behaviour directly in Figma prototype mode.
          </li>
          <li>
            <strong>Light documentation:</strong> High-level guidelines, a video
            walkthrough of the Figma file, and links to resources. I kept docs
            minimal so most of my time went into shipping the components
            themselves and configuring them intuitively so that they didn't need
            lengthy instructions.
          </li>
        </ul>

        <Heading2 id="impact">Impact</Heading2>
        <p>
          The system was used to ship the job-seeker redesign running alongside
          it, and was set up for future designers and developers at Vpply to
          build on. Developers checked in less often for clarification on
          components and interaction behaviour. The redesign moved faster because
          most UI decisions were already made. And the brand walked away with a
          more coherent visual identity and a more accessible primary colour.
        </p>

        <Heading2 id="reflections">Reflections</Heading2>
        <p>
          What I built at Vpply was a component library, not a comprehensive
          design system. At the company's stage, on a 12-week contract, that's
          what made sense. It gave design and engineering a shared visual
          language to build the platform on — the foundation the team needed.
        </p>
        <p>
          The project ran in early 2023, before much of what Figma and AI have
          since made possible. The same work today would take a different shape.
        </p>
        <p>
          If anything here catches your interest, I'd be happy to walk through
          more.
        </p>
      </section>
    </article>
  );
}
