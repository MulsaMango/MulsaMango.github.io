import type { Project } from "../data/projects";
import { Image } from "./case-study-image";
import { Heading2 } from "./case-study-typography";
import buttonInconsistencyAudit from "./vpply-design-system/images/button-inconsistency-audit-before-design-system.png";
import colourPalette from "./vpply-design-system/images/colour-palette-primary-neutral-system.png";
import typographyScale from "./vpply-design-system/images/typography-scale-montserrat-desktop-mobile.png";
import buttonStates from "./vpply-design-system/images/button-primary-secondary-states.png";
import fieldStates from "./vpply-design-system/images/text-input-field-states.png";
import modalSpacingAnnotation from "./vpply-design-system/images/modal-spacing-annotation-spec.png";

interface VpplyDesignSystemCaseStudyProps {
  project: Project;
}

export function VpplyDesignSystemCaseStudy({
  project,
}: VpplyDesignSystemCaseStudyProps) {
  return (
    <article className="prose max-w-none">
      <section className="mb-12">
        <Heading2 id="the-problem-and-the-context">
          The problem and the context
        </Heading2>
        <p>
          Vpply is an early-stage HR startup running a video-first job board,
          where applicants record a 10-90 second video instead of submitting a
          cover letter and resume.
        </p>
        <p>
          By the time I joined as the first UX/UI
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
        <Image
          src={buttonInconsistencyAudit}
          alt="Side-by-side showing the button inconsistency problem before the design system: a card on the left displays every button variant in use across the product - mismatched styles, colours, shapes, and sizes with no clear pattern. On the right, an iMessage-style conversation reads: 'How many button styles do you want? 😏' / 'Yes.'"
          caption="The state of buttons across the product before the design system."
          lightbox
          noBorder
        />

        <Heading2 id="my-role">My role</Heading2>
        <p>
          I worked closely with one other designer and checked in weekly with
          the Technical Lead. The scope was pragmatically tight, so the system
          could actually ship.
        </p>
        <ul>
          <li>
            <strong>Core components only:</strong> buttons, text inputs,
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
            the brand pink to a slightly darker, less saturated variation,
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
            buttons, toggles, all wired with variant properties. Some had
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

      </section>

      <section className="not-prose mb-12 flex flex-col gap-4">
        <Image
          src={colourPalette}
          alt="Vpply colour palette showing primary colours (Vpply Pink old and accessible variants), neutral scale from darkest to white, and system colours for success, warning, and error states. Each swatch includes hex, RGB, HSL values and usage notes."
          caption="Colour palette - excerpt from the Figma component library."
          lightbox
        />
        <Image
          src={typographyScale}
          alt="Vpply typography scale using Montserrat, showing headline styles from Header 1 to Header 4 and body copy styles for desktop and mobile, with size and weight specifications for each."
          caption="Typography scale - excerpt from the Figma component library."
          lightbox
        />
        <Image
          src={buttonStates}
          alt="Button component states for primary and secondary variants, showing default, hover, focus, pressed, and disabled states. Primary buttons use filled Vpply pink; secondary buttons use an outlined treatment."
          caption="Button states - excerpt from the Figma component library."
          lightbox
        />
        <Image
          src={fieldStates}
          alt="Text input field states showing unfilled, hover, focused, filled, error, success, and disabled variants. Error state uses a red border with an error icon; success uses green with a checkmark icon."
          caption="Text input states - excerpt from the Figma component library."
          lightbox
        />
        <Image
          src={modalSpacingAnnotation}
          alt="Modal component with red spacing annotation guides showing 24px horizontal padding, 32px vertical rhythm, and 8px gap between header and secondary text. The modal contains a header, secondary text, an email invite field with a send button, and an editors list with avatar, name, role, and remove action."
          caption="Modal spacing spec - excerpt from the Figma component library."
          lightbox
        />
      </section>

      <section className="mb-12 prose max-w-none">
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
          language to build the platform on, the foundation the team needed.
        </p>
      </section>
    </article>
  );
}
