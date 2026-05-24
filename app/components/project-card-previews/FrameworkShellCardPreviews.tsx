import type { CSSProperties } from "react";

type AnnotationDot = {
  id: string;
  restTop: number;
  restLeft: number;
  slotTop: number;
  slotLeft: number;
  delay: number;
};

const ANNOTATION_DOTS: AnnotationDot[] = [
  { id: "a1", restTop: 16, restLeft: 22, slotTop: 22, slotLeft: 18, delay: 0 },
  { id: "a2", restTop: 28, restLeft: 68, slotTop: 22, slotLeft: 38, delay: 40 },
  { id: "a3", restTop: 44, restLeft: 14, slotTop: 22, slotLeft: 58, delay: 80 },
  { id: "a4", restTop: 52, restLeft: 78, slotTop: 38, slotLeft: 18, delay: 120 },
  { id: "a5", restTop: 68, restLeft: 32, slotTop: 38, slotLeft: 38, delay: 160 },
  { id: "a6", restTop: 74, restLeft: 58, slotTop: 38, slotLeft: 58, delay: 200 },
  { id: "a7", restTop: 36, restLeft: 48, slotTop: 54, slotLeft: 18, delay: 60 },
  { id: "a8", restTop: 62, restLeft: 86, slotTop: 54, slotLeft: 38, delay: 140 },
];

function ShellContentWireframe() {
  return (
    <div className="fr-shell-content-wireframe">
      <span />
      <span />
      <span className="fr-shell-content-wireframe--short" />
    </div>
  );
}

/** FR1 — Shell layers fan apart (nav / top bar / content) */
export function FrOptionShellStack() {
  return (
    <div className="fr-card-preview fr-card-preview-shell-stack" aria-hidden="true">
      <div className="fr-shell-wireframe">
        <div className="fr-shell-wireframe-nav" />
        <div className="fr-shell-wireframe-top" />
        <div className="fr-shell-wireframe-main" />
      </div>
      <div className="fr-shell-layer fr-shell-layer--nav">Side nav</div>
      <div className="fr-shell-layer fr-shell-layer--top">Top bar</div>
      <div className="fr-shell-layer fr-shell-layer--content">Content</div>
    </div>
  );
}

function BeforeAfterChrome({ side }: { side: "before" | "after" }) {
  if (side === "before") {
    return (
      <div className="fr-ba-chrome fr-ba-chrome--legacy">
        <div className="fr-ba-sidebar fr-ba-sidebar--thin" />
        <div className="fr-ba-main">
          <div className="fr-ba-top fr-ba-top--flat" />
          <div className="fr-ba-body fr-ba-body--sparse" />
        </div>
      </div>
    );
  }

  return (
    <div className="fr-ba-chrome fr-ba-chrome--new">
      <div className="fr-ba-sidebar fr-ba-sidebar--rich">
        <span />
        <span />
        <span />
        <span className="fr-ba-nav-active" />
      </div>
      <div className="fr-ba-main">
        <div className="fr-ba-top fr-ba-top--structured">
          <span />
          <span />
          <span className="fr-ba-action" />
        </div>
        <div className="fr-ba-body fr-ba-body--dense">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function BeforeAfterPreview({ variant }: { variant?: string }) {
  const variantClass = variant ? `fr-card-preview-before-after--${variant}` : "";

  return (
    <div
      className={`fr-card-preview fr-card-preview-before-after ${variantClass}`.trim()}
      aria-hidden="true"
    >
      <div className="fr-ba-labels">
        <span className="fr-ba-label fr-ba-label--before">Before</span>
        <span className="fr-ba-label fr-ba-label--after">After</span>
      </div>
      <div className="fr-ba-before">
        <BeforeAfterChrome side="before" />
      </div>
      <div className="fr-ba-after">
        <BeforeAfterChrome side="after" />
      </div>
      <div className="fr-ba-handle" />
    </div>
  );
}

/** FR2 — Before / after shell wipe */
export function FrOptionBeforeAfter() {
  return <BeforeAfterPreview />;
}

export function FrOptionFr2bDeepReveal() {
  return <BeforeAfterPreview variant="deep" />;
}

export function FrOptionFr2cSlowDrag() {
  return <BeforeAfterPreview variant="slow" />;
}

export function FrOptionFr2dBlurPeel() {
  return <BeforeAfterPreview variant="blur" />;
}

export function FrOptionFr2eSplitLabels() {
  return <BeforeAfterPreview variant="split-labels" />;
}

export function FrOptionFr2fVerticalSweep() {
  return <BeforeAfterPreview variant="vertical" />;
}

export function FrOptionFr2gFullReveal() {
  return <BeforeAfterPreview variant="full" />;
}

/** FR3 — Configurable nav pins and expands */
export function FrOptionConfigurableNav() {
  return (
    <div className="fr-card-preview fr-card-preview-config-nav" aria-hidden="true">
      <div className="fr-config-chrome">
        <div className="fr-config-sidebar">
          <div className="fr-config-nav-item">Overview</div>
          <div className="fr-config-nav-item fr-config-nav-item--pinned">Shipments</div>
          <div className="fr-config-nav-item">Documents</div>
          <div className="fr-config-nav-item">Reports</div>
        </div>
        <div className="fr-config-main">
          <div className="fr-config-top" />
          <ShellContentWireframe />
        </div>
      </div>
    </div>
  );
}

/** FR4 — Dashed scaffold fills into solid chrome */
export function FrOptionScaffoldReveal() {
  return (
    <div className="fr-card-preview fr-card-preview-scaffold" aria-hidden="true">
      <div className="fr-scaffold-ghost">
        <div className="fr-scaffold-sidebar" />
        <div className="fr-scaffold-stack">
          <div className="fr-scaffold-top" />
          <div className="fr-scaffold-main" />
        </div>
      </div>
      <div className="fr-scaffold-solid">
        <div className="fr-scaffold-sidebar fr-scaffold-sidebar--solid">
          <span />
          <span />
          <span />
        </div>
        <div className="fr-scaffold-stack">
          <div className="fr-scaffold-top fr-scaffold-top--solid">
            <span />
            <span />
          </div>
          <div className="fr-scaffold-main fr-scaffold-main--solid">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

/** FR5 — Research annotations cluster into themes */
export function FrOptionResearchSynthesis() {
  return (
    <div className="fr-card-preview fr-card-preview-research" aria-hidden="true">
      <div className="fr-research-themes">
        <div className="fr-research-theme">
          <span className="fr-research-theme-label">Layout</span>
        </div>
        <div className="fr-research-theme">
          <span className="fr-research-theme-label">Navigation</span>
        </div>
        <div className="fr-research-theme">
          <span className="fr-research-theme-label">Signal</span>
        </div>
      </div>
      {ANNOTATION_DOTS.map((dot) => (
        <span
          key={dot.id}
          className="fr-research-dot"
          style={
            {
              "--dot-rest-top": `${dot.restTop}%`,
              "--dot-rest-left": `${dot.restLeft}%`,
              "--dot-slot-top": `${dot.slotTop}%`,
              "--dot-slot-left": `${dot.slotLeft}%`,
              "--dot-delay": `${dot.delay}ms`,
            } as CSSProperties
          }
        />
      ))}
      <div className="fr-research-caption">25+ designers</div>
    </div>
  );
}

/** FR6 — Expert density: chrome expands on hover */
export function FrOptionExpertDensity() {
  return (
    <div className="fr-card-preview fr-card-preview-density" aria-hidden="true">
      <div className="fr-density-chrome">
        <div className="fr-density-sidebar">
          <span />
          <span className="fr-density-nav-extra" />
          <span className="fr-density-nav-extra" />
          <span className="fr-density-nav-extra" />
        </div>
        <div className="fr-density-main">
          <div className="fr-density-top">
            <span />
            <span className="fr-density-action" />
            <span className="fr-density-action fr-density-action--ghost" />
          </div>
          <div className="fr-density-body">
            <span />
            <span />
            <span className="fr-density-row-extra" />
            <span className="fr-density-row-extra" />
          </div>
        </div>
      </div>
    </div>
  );
}
