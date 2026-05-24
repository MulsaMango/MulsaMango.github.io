import type { ComponentType } from "react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import {
  FrOptionBeforeAfter,
  FrOptionConfigurableNav,
  FrOptionExpertDensity,
  FrOptionFr2bDeepReveal,
  FrOptionFr2cSlowDrag,
  FrOptionFr2dBlurPeel,
  FrOptionFr2eSplitLabels,
  FrOptionFr2fVerticalSweep,
  FrOptionFr2gFullReveal,
  FrOptionResearchSynthesis,
  FrOptionScaffoldReveal,
  FrOptionShellStack,
} from "../components/project-card-previews/FrameworkShellCardPreviews";
import "../components/project-card-previews/framework-shell-card-previews.css";
import {
  DtOptionExpertFocus,
  DtOptionFeatureStack,
  DtOptionFilterSnap,
  DtOptionG2SequentialOpen,
  DtOptionG3Accordion,
  DtOptionG4IndentRails,
  DtOptionG5AggregateReveal,
  DtOptionG6CascadeShut,
  DtOptionGroupPeel,
  DtOptionModeMorph,
  DtOptionRowScatter,
} from "../components/project-card-previews/DataTableCardPreviews";
import "../components/project-card-previews/data-table-card-previews.css";
import {
  OptionA1SequentialFan,
  OptionA2VerticalLift,
  OptionA3HorizontalCascade,
  OptionA4TintedLayers,
  OptionA4bTintedNeutralDs,
  OptionA5ConnectedThreads,
  OptionA6CompressedDeck,
  OptionA7OffsetShadows,
  OptionA8PinnedLayers,
  OptionA9DiagonalStair,
  OptionA10XrayStack,
  OptionALayerStack,
  OptionBPromptSharp,
  OptionCSkillsBelt,
  OptionDSandbox,
  OptionEContextDial,
  OptionFBlueprintBloom,
  OptionGPromptTheater,
  OptionHComponentTuning,
} from "../components/project-card-previews/ProjectCardPreviews";
import "../components/project-card-previews/project-card-previews.css";
import {
  VpOptionAtomicCompose,
  VpOptionButtonWrangle,
  VpOptionComposeActionCard,
  VpOptionComposeInputGroup,
  VpOptionComposeListRow,
  VpOptionComposeSearchBar,
  VpOptionComposeSearchLedger,
  VpOptionComposeSearchQuadrant,
  VpOptionComposeSearchRealAttached,
  VpOptionComposeSearchRealModule,
  VpOptionComposeSearchModulePill,
  VpOptionComposeSearchModuleSoft,
  VpOptionComposeSearchModuleTight,
  VpOptionComposeSearchStack,
  VpOptionComposeTabBar,
  VpOptionComposeToolbar,
  VpOptionComposeUserInline,
  VpOptionComposeUserRealCentered,
  VpOptionComposeUserRealList,
  VpOptionComposeUserRealProfile,
  VpOptionComposeUserSide,
  VpOptionComposeUserStack,
  VpOptionContrastPass,
  VpOptionLibraryPublish,
  VpOptionMoleculeBondChain,
  VpOptionMoleculeFamily,
  VpOptionMoleculeLibraryGate,
  VpOptionMoleculeOrbitButton,
  VpOptionMoleculeRecipeInput,
  VpOptionMoleculeVideoApply,
  VpOptionPinkWrangler,
  VpOptionResumeToVideo,
  VpOptionSharedPatterns,
  VpOptionSingleSource,
  VpOptionSourceCascade,
  VpOptionSourceOfTruth,
  VpOptionSourceRadial,
  VpOptionSourceReattach,
  VpOptionTwelveWeekKit,
  VpOptionTypeSpecimen,
  VpOptionVariantInput,
  VpOptionVariantSegments,
  VpOptionVariantSliders,
  VpOptionVariantSwitches,
  VpOptionTokenScale,
  VpOptionVariantMatrix,
  VpOptionVideoApplication,
} from "../components/project-card-previews/VpplyCardPreviews";
import "../components/project-card-previews/vpply-card-previews.css";
import { SiteHeader } from "../components/SiteHeader";
import { useHeaderScrollVisibility } from "../hooks/useHeaderScrollVisibility";
import { buildMeta } from "../lib/siteMeta";

type CardOption = {
  id: string;
  label: string;
  description: string;
  Preview: ComponentType;
};

const INITIAL_OPTIONS: CardOption[] = [
  {
    id: "a",
    label: "Option A — The three-layer stack",
    description:
      "Three context layers fan apart on hover, revealing a wireframe underneath.",
    Preview: OptionALayerStack,
  },
  {
    id: "b",
    label: "Option B — Empty prompt → something useful",
    description:
      "A vague prompt on the left; generic blurred UI resolves into design-system output on hover.",
    Preview: OptionBPromptSharp,
  },
  {
    id: "c",
    label: "Option C — The skills conveyor belt",
    description:
      "Workflow skill chips scroll and light up in sequence; a UI panel grows in the centre.",
    Preview: OptionCSkillsBelt,
  },
  {
    id: "d",
    label: "Option D — Playground sandbox",
    description:
      "Scattered components inside a sandbox tray snap into a coherent layout on hover.",
    Preview: OptionDSandbox,
  },
  {
    id: "e",
    label: "Option E — Context dial",
    description:
      "A quiet model dial rotates through context inputs and lights the right system notes on hover.",
    Preview: OptionEContextDial,
  },
  {
    id: "f",
    label: "Option F — Blueprint bloom",
    description:
      "A restrained blueprint grid blooms into a working prototype path when the card is engaged.",
    Preview: OptionFBlueprintBloom,
  },
  {
    id: "g",
    label: "Option G — Prompt theatre",
    description:
      "A small stage curtain opens to show the prompt becoming tangible interface pieces.",
    Preview: OptionGPromptTheater,
  },
  {
    id: "h",
    label: "Option H — Component tuning",
    description:
      "Design-system sliders tune a raw AI draft into a sharper component composition.",
    Preview: OptionHComponentTuning,
  },
];

const OPTION_A_VARIATIONS: CardOption[] = [
  {
    id: "a1",
    label: "A1 — Sequential fan",
    description:
      "Same fan as Option A, but the centre layer moves first and the outer layers follow in sequence.",
    Preview: OptionA1SequentialFan,
  },
  {
    id: "a2",
    label: "A2 — Vertical lift",
    description:
      "Layers separate straight up and down with no rotation, for a cleaner editorial read.",
    Preview: OptionA2VerticalLift,
  },
  {
    id: "a3",
    label: "A3 — Horizontal cascade",
    description:
      "Layers slide sideways into a row with minimal vertical movement.",
    Preview: OptionA3HorizontalCascade,
  },
  {
    id: "a4",
    label: "A4 — Tinted layers",
    description:
      "Each layer gets a subtle tint so the three context types read at a glance, even at rest.",
    Preview: OptionA4TintedLayers,
  },
  {
    id: "a4b",
    label: "A4b — Tinted layers (neutral DS)",
    description:
      "Same as A4, but the design system layer stays neutral so the green accent only appears on hover.",
    Preview: OptionA4bTintedNeutralDs,
  },
  {
    id: "a5",
    label: "A5 — Connected threads",
    description:
      "Green connector lines appear between layers on hover, showing how context knits together.",
    Preview: OptionA5ConnectedThreads,
  },
  {
    id: "a6",
    label: "A6 — Compressed deck",
    description:
      "Tighter stacked deck at rest, then a wider fan on hover for more dramatic separation.",
    Preview: OptionA6CompressedDeck,
  },
  {
    id: "a7",
    label: "A7 — Offset shadows",
    description:
      "The stack stays calm at rest, then each layer leaves a soft ghost impression as it fans out.",
    Preview: OptionA7OffsetShadows,
  },
  {
    id: "a8",
    label: "A8 — Pinned layers",
    description:
      "Tiny pin marks make the layers feel like movable notes on a design critique wall.",
    Preview: OptionA8PinnedLayers,
  },
  {
    id: "a9",
    label: "A9 — Diagonal stair",
    description:
      "The three context cards step diagonally across the wireframe, making the reveal feel more kinetic.",
    Preview: OptionA9DiagonalStair,
  },
  {
    id: "a10",
    label: "A10 — X-ray stack",
    description:
      "Translucent layers let the underlying prototype peek through before snapping into a brighter fan.",
    Preview: OptionA10XrayStack,
  },
];

const DATA_TABLE_OPTIONS: CardOption[] = [
  {
    id: "dt1",
    label: "DT1 — Feature stack",
    description:
      "Filters, grouping, and display mode fan apart over a table wireframe, like the AI context layers.",
    Preview: DtOptionFeatureStack,
  },
  {
    id: "dt2",
    label: "DT2 — Row scatter",
    description:
      "Chaotic row fragments snap into a scannable zebra table with status badges on hover.",
    Preview: DtOptionRowScatter,
  },
  {
    id: "dt3",
    label: "DT3 — Filter snap",
    description:
      "Floating filter chips magnetise into a strip above the table, then the data sharpens below.",
    Preview: DtOptionFilterSnap,
  },
  {
    id: "dt4",
    label: "DT4 — Mode morph",
    description:
      "Display table crossfades into an editable cell grid, making the two macro types legible.",
    Preview: DtOptionModeMorph,
  },
  {
    id: "dt5",
    label: "DT5 — Group peel",
    description:
      "Nested group headers with real labels peel open to reveal indented rows on hover.",
    Preview: DtOptionGroupPeel,
  },
  {
    id: "dt6",
    label: "DT6 — Expert focus",
    description:
      "Dense noise of data lines falls away to a single sharp row, an expert scan in miniature.",
    Preview: DtOptionExpertFocus,
  },
];

const GROUP_PEEL_VARIATIONS: CardOption[] = [
  {
    id: "g1",
    label: "G1 — Group peel",
    description:
      "Sydney open, Melbourne collapsed. Hover expands the shut group.",
    Preview: DtOptionGroupPeel,
  },
  {
    id: "g2",
    label: "G2 — Sequential open",
    description:
      "Both nested groups shut at rest. Sydney opens first, Melbourne follows.",
    Preview: DtOptionG2SequentialOpen,
  },
  {
    id: "g3",
    label: "G3 — Accordion",
    description:
      "Entire tree collapsed to a single root header. Hover expands the full hierarchy.",
    Preview: DtOptionG3Accordion,
  },
  {
    id: "g4",
    label: "G4 — Indent rails",
    description:
      "A green hierarchy rail grows alongside branch connectors as groups open.",
    Preview: DtOptionG4IndentRails,
  },
  {
    id: "g5",
    label: "G5 — Aggregate reveal",
    description:
      "Group totals fade in as rows expand, hinting at numeric aggregates per group.",
    Preview: DtOptionG5AggregateReveal,
  },
  {
    id: "g6",
    label: "G6 — Cascade shut",
    description:
      "Everything closed at rest. Root opens, then nested groups peel down in a wave.",
    Preview: DtOptionG6CascadeShut,
  },
];

const SHELL_OPTIONS: CardOption[] = [
  {
    id: "fr1",
    label: "FR1 — Shell stack",
    description:
      "Side nav, top bar, and content fan apart over a shell wireframe, like the AI context layers.",
    Preview: FrOptionShellStack,
  },
  {
    id: "fr2",
    label: "FR2 — Before / after",
    description:
      "Legacy shell wipes aside to reveal a denser, structured redesign with richer nav and chrome.",
    Preview: FrOptionBeforeAfter,
  },
  {
    id: "fr3",
    label: "FR3 — Configurable nav",
    description:
      "A pinned nav item lifts on hover, hinting at navigation users can configure to their workflow.",
    Preview: FrOptionConfigurableNav,
  },
  {
    id: "fr4",
    label: "FR4 — Scaffold reveal",
    description:
      "Dashed design stimulus crossfades into solid product chrome, from research artifact to shipped shell.",
    Preview: FrOptionScaffoldReveal,
  },
  {
    id: "fr5",
    label: "FR5 — Research synthesis",
    description:
      "Scattered annotation dots from 25+ designers cluster into layout, navigation, and signal themes.",
    Preview: FrOptionResearchSynthesis,
  },
  {
    id: "fr6",
    label: "FR6 — Expert density",
    description:
      "Compact chrome expands on hover: wider nav, more actions, more content rows for expert workflows.",
    Preview: FrOptionExpertDensity,
  },
];

const FR2_VARIATIONS: CardOption[] = [
  {
    id: "fr2",
    label: "FR2 — Before / after",
    description:
      "Slider sweeps in from the right, revealing the redesigned shell underneath.",
    Preview: FrOptionBeforeAfter,
  },
  {
    id: "fr2b",
    label: "FR2b — Deep reveal",
    description:
      "Same motion, but the slider travels further left so more of the after state is visible.",
    Preview: FrOptionFr2bDeepReveal,
  },
  {
    id: "fr2c",
    label: "FR2c — Slow drag",
    description:
      "A slower 1.4s drag for a heavier, more deliberate compare-slider feel.",
    Preview: FrOptionFr2cSlowDrag,
  },
  {
    id: "fr2d",
    label: "FR2d — Blur peel",
    description:
      "The before layer softens and blurs slightly as it peels away to the left.",
    Preview: FrOptionFr2dBlurPeel,
  },
  {
    id: "fr2e",
    label: "FR2e — Split labels",
    description:
      "Before and After labels stay pinned to their sides of the split as the slider moves.",
    Preview: FrOptionFr2eSplitLabels,
  },
  {
    id: "fr2f",
    label: "FR2f — Vertical sweep",
    description:
      "Horizontal handle rises from the bottom, wiping the before state upward.",
    Preview: FrOptionFr2fVerticalSweep,
  },
  {
    id: "fr2g",
    label: "FR2g — Full reveal",
    description:
      "Slider sweeps all the way left until the after state fills the card.",
    Preview: FrOptionFr2gFullReveal,
  },
];

const VP2_VARIATIONS: CardOption[] = [
  {
    id: "vp2",
    label: "VP2 — Atomic compose",
    description:
      "Scattered atoms assemble into a form molecule — the baseline atomic-design motion.",
    Preview: VpOptionAtomicCompose,
  },
  {
    id: "vp2b",
    label: "VP2b — Search bar",
    description:
      "Icon, query line, and filter chip snap into a pill-shaped search bar.",
    Preview: VpOptionComposeSearchBar,
  },
  {
    id: "vp2c",
    label: "VP2c — List row",
    description:
      "Grip, checkbox, title, badge, and chevron fragments form a table row.",
    Preview: VpOptionComposeListRow,
  },
  {
    id: "vp2d",
    label: "VP2d — Action card",
    description:
      "Avatar, title, subtitle, and button pieces compose a profile card.",
    Preview: VpOptionComposeActionCard,
  },
  {
    id: "vp2e",
    label: "VP2e — Tab bar",
    description:
      "Three loose tab labels connect into a bar with an active underline.",
    Preview: VpOptionComposeTabBar,
  },
  {
    id: "vp2f",
    label: "VP2f — Input group",
    description:
      "Label, field, and hint text stack into a labeled form control.",
    Preview: VpOptionComposeInputGroup,
  },
  {
    id: "vp2g",
    label: "VP2g — Toolbar",
    description:
      "Icon, label, divider, and action button merge into a compact toolbar.",
    Preview: VpOptionComposeToolbar,
  },
];

const VP_COMPOSE_UI_VARIATIONS: CardOption[] = [
  {
    id: "vpc1",
    label: "VPC1 — Search stack",
    description:
      "Title block, magnifier, input field, and button snap into a stacked search module.",
    Preview: VpOptionComposeSearchStack,
  },
  {
    id: "vpc2",
    label: "VPC2 — Search ledger",
    description:
      "Left-aligned title placeholder with a wide search row below — icon, field, and action.",
    Preview: VpOptionComposeSearchLedger,
  },
  {
    id: "vpc3",
    label: "VPC3 — Search quadrant",
    description:
      "Four pieces scattered to the corners converge slowly into one search input.",
    Preview: VpOptionComposeSearchQuadrant,
  },
  {
    id: "vpc4",
    label: "VPC4 — User side",
    description:
      "Avatar, title block, two body placeholders, and button form a horizontal user card.",
    Preview: VpOptionComposeUserSide,
  },
  {
    id: "vpc5",
    label: "VPC5 — User stack",
    description:
      "Centered avatar with title and body blocks stacked above a full-width action.",
    Preview: VpOptionComposeUserStack,
  },
  {
    id: "vpc6",
    label: "VPC6 — User inline",
    description:
      "Compact tile: avatar and title on one row, body block, then button.",
    Preview: VpOptionComposeUserInline,
  },
];

const VP_COMPOSE_USER_REAL: CardOption[] = [
  {
    id: "vpc13",
    label: "VPC13 — Profile card",
    description:
      "Lo-fi profile layout: avatar and title share a row, body lines align beneath, full-width button anchored at the bottom.",
    Preview: VpOptionComposeUserRealProfile,
  },
  {
    id: "vpc14",
    label: "VPC14 — List row",
    description:
      "Applicant-style list item — avatar, two-line meta, and a compact trailing action, all vertically centred in a short bar.",
    Preview: VpOptionComposeUserRealList,
  },
  {
    id: "vpc15",
    label: "VPC15 — Centred card",
    description:
      "Avatar centred above stacked title and body placeholders, with a pill-shaped button below.",
    Preview: VpOptionComposeUserRealCentered,
  },
];

const VP_COMPOSE_SEARCH_REAL: CardOption[] = [
  {
    id: "vpc18",
    label: "VPC18 — Search module",
    description:
      "Balanced lo-fi module: muted stone tones, 6px corners, comfortable gap between field and button.",
    Preview: VpOptionComposeSearchRealModule,
  },
  {
    id: "vpc18a",
    label: "VPC18a — Soft & airy",
    description:
      "Rounder 9px field and 8px button, more padding inside the card shell, wider gaps between pieces.",
    Preview: VpOptionComposeSearchModuleSoft,
  },
  {
    id: "vpc18b",
    label: "VPC18b — Tight & sharp",
    description:
      "Compact vertical rhythm with 3px corners — heading sits closer to the search row, shorter field height.",
    Preview: VpOptionComposeSearchModuleTight,
  },
  {
    id: "vpc18c",
    label: "VPC18c — Pill controls",
    description:
      "Same spacing as the soft variant but the field and button resolve to full pills inside the rounded card.",
    Preview: VpOptionComposeSearchModulePill,
  },
  {
    id: "vpc20",
    label: "VPC20 — Attached search",
    description:
      "Field and button flush together as one split control, with a heading above the joined input group.",
    Preview: VpOptionComposeSearchRealAttached,
  },
];

const VP_MOLECULE_RIFFS: CardOption[] = [
  {
    id: "vpm1",
    label: "VPM1 — Orbit button",
    description:
      "Quiet atoms orbit at rest, then bond into a compact button molecule with a pink active core.",
    Preview: VpOptionMoleculeOrbitButton,
  },
  {
    id: "vpm2",
    label: "VPM2 — Bond chain",
    description:
      "Type, state, tone, space, and motion click into a molecular chain of variant properties.",
    Preview: VpOptionMoleculeBondChain,
  },
  {
    id: "vpm3",
    label: "VPM3 — Input recipe",
    description:
      "Tiny ingredient atoms settle into a labeled input molecule with field, label, and hint.",
    Preview: VpOptionMoleculeRecipeInput,
  },
  {
    id: "vpm4",
    label: "VPM4 — Molecule family",
    description:
      "One loose atom cloud recombines into the practical MVP family: button, input, and nav.",
    Preview: VpOptionMoleculeFamily,
  },
  {
    id: "vpm5",
    label: "VPM5 — Video molecule",
    description:
      "Play, timer, field, and CTA atoms resolve into the video-first application component.",
    Preview: VpOptionMoleculeVideoApply,
  },
  {
    id: "vpm6",
    label: "VPM6 — Library gate",
    description:
      "Loose atoms pass through a Figma-like library frame and leave as published molecules.",
    Preview: VpOptionMoleculeLibraryGate,
  },
];

const VPPLY_OPTIONS: CardOption[] = [
  {
    id: "vp1",
    label: "VP1 — Shared patterns",
    description:
      "Three screens with different button and nav treatments unify to the same component language on hover.",
    Preview: VpOptionSharedPatterns,
  },
  {
    id: "vp2",
    label: "VP2 — Atomic compose",
    description:
      "Scattered atoms assemble into a form molecule, Atomic Design in one glance.",
    Preview: VpOptionAtomicCompose,
  },
  {
    id: "vp3",
    label: "VP3 — Single source",
    description:
      "Duplicate one-off buttons merge into one canonical component with named variants.",
    Preview: VpOptionSingleSource,
  },
  {
    id: "vp4",
    label: "VP4 — Variant matrix",
    description:
      "Misaligned state tiles snap into a wired variant grid: default, hover, focus, disabled.",
    Preview: VpOptionVariantMatrix,
  },
  {
    id: "vp5",
    label: "VP5 — Token scale",
    description:
      "Ad hoc spacing bars resolve into a stepped 4/8/16/24 system with mono labels.",
    Preview: VpOptionTokenScale,
  },
  {
    id: "vp6",
    label: "VP6 — Library publish",
    description:
      "Loose components get framed and aligned inside a published team library.",
    Preview: VpOptionLibraryPublish,
  },
  {
    id: "vp7",
    label: "VP7 — Pink wrangler",
    description:
      "A mess of Vpply pinks gets politely herded into one accessible AA-ready brand token.",
    Preview: VpOptionPinkWrangler,
  },
  {
    id: "vp8",
    label: "VP8 — Video application",
    description:
      "The video-first job application becomes a tight little UI loop: record, add details, apply.",
    Preview: VpOptionVideoApplication,
  },
  {
    id: "vp9",
    label: "VP9 — Button wrangle",
    description:
      "Duplicate one-off buttons get lassoed into a single primary component. Slightly cheeky, still tidy.",
    Preview: VpOptionButtonWrangle,
  },
  {
    id: "vp10",
    label: "VP10 — 12-week kit",
    description:
      "A constrained contract timeline snaps into the practical MVP kit: buttons, inputs, and nav.",
    Preview: VpOptionTwelveWeekKit,
  },
];

const VP_FRESH_TAKES: CardOption[] = [
  {
    id: "vpf1",
    label: "VPF1 — Pink that passes",
    description:
      "A washed-out Vpply pink with barely-legible text deepens to the accessible AA pink on hover, the ratio badge flipping from fail to pass.",
    Preview: VpOptionContrastPass,
  },
  {
    id: "vpf2",
    label: "VPF2 — Source of truth",
    description:
      "Edit the main component and the change ripples down the links to every instance, so they all match. One source, no drift.",
    Preview: VpOptionSourceOfTruth,
  },
  {
    id: "vpf3",
    label: "VPF3 — Variant switches",
    description:
      "Flip the property toggles and the button restyles in response, focus ring and all. Components wired with variant properties.",
    Preview: VpOptionVariantSwitches,
  },
  {
    id: "vpf4",
    label: "VPF4 — Type specimen",
    description:
      "Haphazard, rotated type bars settle into a clean stepped scale and the specimen sharpens. Montserrat, finally in order.",
    Preview: VpOptionTypeSpecimen,
  },
  {
    id: "vpf5",
    label: "VPF5 — Press record",
    description:
      "A fanned paper resume and cover letter slide away to reveal the video-first application card. 90 seconds, not 9 pages.",
    Preview: VpOptionResumeToVideo,
  },
];

const VPF2_VARIATIONS: CardOption[] = [
  {
    id: "vpf2",
    label: "VPF2 — Source of truth",
    description:
      "Edit the main component and the change ripples down the links to three instances. Neutral darks, a blue link, a green source mark.",
    Preview: VpOptionSourceOfTruth,
  },
  {
    id: "vpf2b",
    label: "VPF2b — Radial hub",
    description:
      "The source sits at the centre with instances ringing it; the edit radiates outward to each one in turn.",
    Preview: VpOptionSourceRadial,
  },
  {
    id: "vpf2c",
    label: "VPF2c — Cascade",
    description:
      "A blue rail fills top to bottom as a vertical stack of instances syncs in sequence behind it.",
    Preview: VpOptionSourceCascade,
  },
  {
    id: "vpf2d",
    label: "VPF2d — Reattach",
    description:
      "One drifted, tilted duplicate with a broken link snaps back into the row and re-adopts the source on hover.",
    Preview: VpOptionSourceReattach,
  },
];

const VPF3_VARIATIONS: CardOption[] = [
  {
    id: "vpf3",
    label: "VPF3 — Variant switches",
    description:
      "Flip the Type / State / Size toggles and the button restyles to a blue solid with a green focus ring.",
    Preview: VpOptionVariantSwitches,
  },
  {
    id: "vpf3b",
    label: "VPF3b — Segmented control",
    description:
      "A Ghost / Solid / Soft selector slides from ghost to solid, and the button morphs from outline to filled to match.",
    Preview: VpOptionVariantSegments,
  },
  {
    id: "vpf3c",
    label: "VPF3c — Input variants",
    description:
      "The component is a text input: empty resolves to focused (blue ring) and valid (green check) as the state advances.",
    Preview: VpOptionVariantInput,
  },
  {
    id: "vpf3d",
    label: "VPF3d — Token sliders",
    description:
      "Size and radius sliders drive the button: as the knobs travel right it grows and rounds, blue fill and all.",
    Preview: VpOptionVariantSliders,
  },
];

function OptionCardGrid({ options }: { options: CardOption[] }) {
  return (
    <div className="grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {options.map(({ id, label, description, Preview }) => (
        <div key={id} className="group block cursor-default">
          <div className="mb-2 aspect-square w-full overflow-hidden rounded-md border border-gray-300 bg-gray-100 transition-all group-hover:shadow-sm sm:mb-3">
            <Preview />
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <div className="font-medium text-gray-900">{label}</div>
            <p className="font-sans leading-relaxed text-gray-500">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function meta() {
  return buildMeta({
    title: "Project card options — Tulsa Daley",
    description: "Test page for AI prototyping project card visual options.",
    path: "/project-card-options",
  });
}

export default function ProjectCardOptions() {
  const isHeaderVisible = useHeaderScrollVisibility();

  return (
    <div className="min-h-screen">
      <SiteHeader isVisible={isHeaderVisible} />

      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12 md:pt-20">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-gray-500">
            Dev test page
          </p>
          <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            AI prototyping project card options
          </h1>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Hover each card to preview the interaction. These are concepts for
            the &lsquo;Building an AI prototyping environment for
            designers&rsquo; card on the landing page.
          </p>
          <Link
            to="/"
            className="inline-block font-sans text-sm text-gray-600 underline decoration-gray-300 underline-offset-2 hover:text-gray-900"
          >
            ← Back to landing
          </Link>
        </div>

        <OptionCardGrid options={INITIAL_OPTIONS} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Option A variations
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Building on the three-layer stack. Same core idea, different
            emphasis on motion, colour, and how the layers relate to each other.
          </p>
        </div>

        <OptionCardGrid options={OPTION_A_VARIATIONS} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Complex data tables
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Concepts for &lsquo;Designing for complex data
            tables&rsquo;. Hover each card to preview the interaction.
          </p>
        </div>

        <OptionCardGrid options={DATA_TABLE_OPTIONS} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Group peel variations
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Building on DT5. Different ways nested groups can open, show
            hierarchy, and reveal aggregates.
          </p>
        </div>

        <OptionCardGrid options={GROUP_PEEL_VARIATIONS} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Rebuilding the product shell
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Concepts for the shell redesign snapshot: scaffolding, research
            synthesis, before/after, and expert-density chrome.
          </p>
        </div>

        <OptionCardGrid options={SHELL_OPTIONS} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            FR2 variations
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Building on the before/after compare slider. Different speed, depth,
            blur, label placement, and sweep direction.
          </p>
        </div>

        <OptionCardGrid options={FR2_VARIATIONS} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Building a startup&apos;s first design system
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Concepts for the Vpply MVP design system: consistency across a
            fragmented product, atomic structure, variants, tokens, and a shared
            Figma library.
          </p>
        </div>

        <OptionCardGrid options={VPPLY_OPTIONS} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            VP2 variations
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Atoms → molecules: small UI fragments that snap together into
            recognizable components on hover.
          </p>
        </div>

        <OptionCardGrid options={VP2_VARIATIONS} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            UI compose — search &amp; user card
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Loose UI fragments — block placeholders, icons, fields, and buttons
            — that snap together into composed search inputs and user cards.
          </p>
        </div>

        <OptionCardGrid options={VP_COMPOSE_UI_VARIATIONS} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            User card — refined
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Same atoms-to-molecule idea, but pieces snap to top-left slots inside
            a card shell so the composed state reads like real lo-fi UI — aligned
            rows, sensible proportions, and believable spacing.
          </p>
        </div>

        <OptionCardGrid options={VP_COMPOSE_USER_REAL} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Search — refined
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Composed-first search modules: each starts as a believable lo-fi
            card with heading, leading icon, placeholder bar, and button label —
            then the pieces scatter at rest and snap back on hover.
          </p>
        </div>

        <OptionCardGrid options={VP_COMPOSE_SEARCH_REAL} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Molecule riffs
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            More literal atomic-design concepts: particles bonding,
            recombining, and passing through a shared library into usable UI
            molecules.
          </p>
        </div>

        <OptionCardGrid options={VP_MOLECULE_RIFFS} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Fresh takes
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Five more angles on the Vpply story: the accessible-pink win, a
            single source of truth, variant properties, the type scale, and the
            video-first pitch. Quiet at rest, bold on hover.
          </p>
        </div>

        <OptionCardGrid options={VP_FRESH_TAKES} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            VPF2 variations — source of truth
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            One main component, edits propagating to its instances. Same idea,
            different layouts and motion. Neutrals and a blue link, with a green
            source highlight.
          </p>
        </div>

        <OptionCardGrid options={VPF2_VARIATIONS} />

        <div
          className="my-12 border-t border-gray-200/80"
          role="separator"
          aria-hidden="true"
        />

        <div className="mb-8 max-w-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            VPF3 variations — variant properties
          </h2>
          <p className="font-sans text-sm leading-relaxed text-gray-500">
            Adjust the controls, the component reacts. Toggles, a segmented
            control, input states, and token sliders — blue component, green
            highlight.
          </p>
        </div>

        <OptionCardGrid options={VPF3_VARIATIONS} />
      </section>

      <Footer />
    </div>
  );
}
