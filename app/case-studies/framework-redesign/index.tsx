import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import type { Project } from "../../data/projects";
import { Heading2 } from "../case-study-typography";
import frameworkAfter from "./images/framework-after.png";
import frameworkBefore from "./images/framework-before.png";

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
        className={`pointer-events-none absolute top-3 ${side === "left" ? "left-3" : "right-3"} rounded bg-black/55 px-1.5 py-0.5 font-display text-[0.625rem] uppercase tracking-[0.06em] text-white`}
      >
        {label}
      </span>
    </div>
  );
}

function BeforeAfterSlider() {
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
      <Heading2 id="before-and-after">Before and after</Heading2>
      <p>
        Drag the handle to compare the framework before and after the redesign.
      </p>
      <BeforeAfterSlider />
      <p className="mt-2 text-center text-neutral-400">
        Drag to reveal the redesigned framework.
      </p>
    </article>
  );
}
