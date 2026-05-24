import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import type { Project } from "../../data/projects";
import { Image } from "../case-study-image";
import { Heading2 } from "../case-study-typography";
import frameworkAfter from "./images/framework-after.png";
import frameworkBefore from "./images/framework-before.png";
import productShellHero from "./images/product-shell-redesigned-default-navigation-state.png";
import visualDirectionExplorations from "./images/product-shell-visual-direction-explorations.png";
import sidebarNavigationExploration from "./images/sidebar-navigation-user-customisation-feature-exploration.png";

// Custom drag handle so the slider reads like the rest of the site (thin neutral
// line + a circular grip) rather than the library's default chrome. It spans the
// full height; react-compare-slider only positions it horizontally.
function SliderHandle() {
  return (
    // `pointer-events-auto` re-enables hits on the handle: react-compare-slider's
    // HandleRoot sets `pointer-events: none`, and on touch devices (pointer:
    // coarse) it only listens for drags on the handle — so without this, nothing
    // is grabbable and the slider is dead on mobile.
    <div className="pointer-events-auto flex h-full cursor-ew-resize flex-col items-center">
      <div className="w-0.5 flex-1 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-md">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 7l-5 5 5 5M15 7l5 5-5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="w-0.5 flex-1 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

// A slider image with its corner label nested *inside* the item. react-compare-slider
// wraps each item in a clip-path'd container, so the label is revealed and hidden in
// lockstep with its own image as the divider moves — "Before" only shows while the
// before side is showing, and likewise for "After". The relative wrapper keeps the
// label's containing block inside that clip.
function SliderItem({
  src,
  alt,
  label,
  side,
}: {
  src: string;
  alt: string;
  label: string;
  side: "left" | "right";
}) {
  return (
    <div className="relative">
      <ReactCompareSliderImage src={src} alt={alt} />
      <span
        className={`pointer-events-none absolute bottom-3 ${side === "left" ? "left-3" : "right-3"} rounded bg-black/55 px-1.5 py-0.5 font-display text-[0.625rem] uppercase tracking-[0.06em] text-white`}
      >
        {label}
      </span>
    </div>
  );
}

export function BeforeAfterSlider() {
  return (
    <div className="not-prose relative overflow-hidden rounded-lg border border-gray-200">
      <ReactCompareSlider
        handle={<SliderHandle />}
        // Start a touch off-centre so the affordance — two overlaid states — is
        // obvious before the viewer interacts.
        defaultPosition={45}
        itemOne={
          <SliderItem
            src={frameworkBefore}
            alt="The framework before the redesign"
            label="Before"
            side="left"
          />
        }
        itemTwo={
          <SliderItem
            src={frameworkAfter}
            alt="The framework after the redesign"
            label="After"
            side="right"
          />
        }
      />
    </div>
  );
}

interface FrameworkRedesignCaseStudyProps {
  project: Project;
}

export function FrameworkRedesignCaseStudy(
  _props: FrameworkRedesignCaseStudyProps,
) {
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
          The shell is the scaffolding around the flagship logistics product:
        </p>
        <ul>
          <li>Side navigation</li>
          <li>Top bar</li>
          <li>Page chrome</li>
          <li>Content layout</li>
        </ul>
        <p>
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
          navigation users can configure to their own needs, colour reserved for
          signal and meaning, and scalable, adaptive placement for critical
          actions.
        </p>
        <p>
          The output was a synthesis asset that became load-bearing for
          downstream direction. It shaped the shell work directly, and fed into
          the broader system rethink running in parallel.
        </p>
        <Image
          src={visualDirectionExplorations}
          alt="Multiple overlapping browser windows showing iterative explorations of the CargoWise product shell, including variations of the side navigation, top bar, and page chrome across different product contexts."
          caption="A number of visual directions were explored in a healthy discovery phase."
          lightbox
          noBorder
        />
        <Image
          src={sidebarNavigationExploration}
          alt="Figma exploration of the sidebar navigation feature set, showing designs for reorderable sections, collapsible sections, dynamic search, and drag and drop favourite reordering - all in service of a user-configurable navigation experience."
          caption="Sidebar navigation feature set exploration - user configurability was a central focus - excerpt from Figma."
          lightbox
        />

        <Heading2 id="the-redesigned-shell">The redesigned shell</Heading2>
        <p>
          The redesigned shell brings together a configurable side navigation, a
          clearer hierarchy in the page chrome, a more deliberate use of colour,
          and content layouts that flex with the work. It doesn't shy away from
          density where expert workflows demand it. Controls stay within reach,
          and the system optimises for speed over visual restraint.
        </p>
        <Image
          src={productShellHero}
          alt="The redesigned CargoWise product shell showing the default navigation state - a configurable side navigation with collapsible sections, favourites, and recents, alongside the top bar and page chrome."
          className="w-full h-auto rounded-sm shadow-sm"
          lightbox
        />

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
          could explore visual direction and interaction behaviour at the same
          time. There's more to say about that workflow, but I'll save it for its
          own snapshot.
        </p>
      </section>
    </article>
  );
}
