const SKILLS = ["Research", "Draft", "Critique", "Refine", "Ship"] as const;

function LayerStackWireframe() {
  return (
    <div className="ai-card-a-wireframe">
      <div className="ai-card-a-wireframe-nav" />
      <div className="ai-card-a-wireframe-body">
        <div className="ai-card-a-wireframe-sidebar" />
        <div className="ai-card-a-wireframe-main" />
      </div>
    </div>
  );
}

function LayerStackThreads() {
  return (
    <svg
      className="ai-card-a-threads"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line className="ai-card-a-thread ai-card-a-thread--ds" x1="38" y1="42" x2="50" y2="58" />
      <line className="ai-card-a-thread ai-card-a-thread--domain" x1="50" y1="58" x2="62" y2="42" />
      <line className="ai-card-a-thread ai-card-a-thread--product" x1="38" y1="42" x2="62" y2="42" />
    </svg>
  );
}

type LayerStackVariantProps = {
  variant?: string;
  showThreads?: boolean;
};

function LayerStackPreview({ variant, showThreads = false }: LayerStackVariantProps) {
  const variantClass = variant ? `ai-card-preview-a--${variant}` : "";

  return (
    <div
      className={`ai-card-preview ai-card-preview-a ${variantClass}`.trim()}
      aria-hidden="true"
    >
      <LayerStackWireframe />
      {showThreads ? <LayerStackThreads /> : null}
      <div className="ai-card-a-layer ai-card-a-layer--ds">Design system</div>
      <div className="ai-card-a-layer ai-card-a-layer--domain">Domain context</div>
      <div className="ai-card-a-layer ai-card-a-layer--product">Product layer</div>
    </div>
  );
}

export function OptionALayerStack() {
  return <LayerStackPreview />;
}

export function OptionA1SequentialFan() {
  return <LayerStackPreview variant="sequential" />;
}

export function OptionA2VerticalLift() {
  return <LayerStackPreview variant="vertical" />;
}

export function OptionA3HorizontalCascade() {
  return <LayerStackPreview variant="cascade" />;
}

export function OptionA4TintedLayers() {
  return <LayerStackPreview variant="tinted" />;
}

export function OptionA4bTintedNeutralDs() {
  return <LayerStackPreview variant="tinted-neutral-ds" />;
}

export function OptionA5ConnectedThreads() {
  return <LayerStackPreview variant="connected" showThreads />;
}

export function OptionA6CompressedDeck() {
  return <LayerStackPreview variant="deck" />;
}

export function OptionA7OffsetShadows() {
  return <LayerStackPreview variant="offset-shadows" />;
}

export function OptionA8PinnedLayers() {
  return <LayerStackPreview variant="pinned" />;
}

export function OptionA9DiagonalStair() {
  return <LayerStackPreview variant="stair" />;
}

export function OptionA10XrayStack() {
  return <LayerStackPreview variant="xray" />;
}

export function OptionBPromptSharp() {
  return (
    <div className="ai-card-preview ai-card-b" aria-hidden="true">
      <div className="ai-card-b-prompt">
        <div className="ai-card-b-bubble">
          make a dashboard
          <span className="ai-card-b-cursor" />
        </div>
      </div>
      <div className="ai-card-b-output">
        <div className="ai-card-b-generic">
          <div className="ai-card-b-generic-bar" />
          <div className="ai-card-b-generic-row" />
          <div className="ai-card-b-generic-row" />
          <div className="ai-card-b-generic-grid">
            <div className="ai-card-b-generic-cell" />
            <div className="ai-card-b-generic-cell" />
            <div className="ai-card-b-generic-cell" />
          </div>
        </div>
        <div className="ai-card-b-sharp">
          <div className="ai-card-b-sharp-nav">
            <div className="ai-card-b-sharp-nav-dot" />
            <div className="ai-card-b-sharp-nav-line" />
            <div className="ai-card-b-sharp-nav-line" />
          </div>
          <div className="ai-card-b-sharp-table">
            <div className="ai-card-b-sharp-table-head">
              <div className="ai-card-b-sharp-cell" />
              <div className="ai-card-b-sharp-cell" />
              <div className="ai-card-b-sharp-cell" />
            </div>
            <div className="ai-card-b-sharp-table-row">
              <div className="ai-card-b-sharp-cell" />
              <div className="ai-card-b-sharp-cell" />
              <div className="ai-card-b-sharp-cell" />
            </div>
            <div className="ai-card-b-sharp-table-row">
              <div className="ai-card-b-sharp-cell" />
              <div className="ai-card-b-sharp-cell" />
              <div className="ai-card-b-sharp-cell" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OptionCSkillsBelt() {
  return (
    <div className="ai-card-preview ai-card-preview-c" aria-hidden="true">
      <div className="ai-card-c-belt-wrap">
        <div className="ai-card-c-belt">
          {SKILLS.map((skill, index) => (
            <span
              key={skill}
              className={`ai-card-c-chip ai-card-c-chip--${index + 1}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="ai-card-c-track" />
      <div className="ai-card-c-ui">
        <div className="ai-card-c-ui-panel">
          <div className="ai-card-c-ui-toolbar">
            <div className="ai-card-c-ui-btn" />
            <div className="ai-card-c-ui-btn ai-card-c-ui-btn--ghost" />
          </div>
          <div className="ai-card-c-ui-lines">
            <div className="ai-card-c-ui-line" />
            <div className="ai-card-c-ui-line ai-card-c-ui-line--short" />
            <div className="ai-card-c-ui-line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function OptionDSandbox() {
  return (
    <div className="ai-card-preview ai-card-preview-d" aria-hidden="true">
      <div className="ai-card-d-tray">
        <span className="ai-card-d-tray-label">Playground</span>
        <div className="ai-card-d-piece ai-card-d-piece--btn ai-card-d-btn" />
        <div className="ai-card-d-piece ai-card-d-piece--input ai-card-d-input" />
        <div className="ai-card-d-piece ai-card-d-piece--tag ai-card-d-tag" />
        <div className="ai-card-d-piece ai-card-d-piece--table ai-card-d-table" />
        <div className="ai-card-d-piece ai-card-d-piece--tooltip ai-card-d-tooltip" />
        <div className="ai-card-d-piece ai-card-d-piece--cursor ai-card-d-cursor" />
      </div>
    </div>
  );
}

export function OptionEContextDial() {
  return (
    <div className="ai-card-preview ai-card-preview-e" aria-hidden="true">
      <div className="ai-card-e-orbit">
        <span className="ai-card-e-node ai-card-e-node--system">Tokens</span>
        <span className="ai-card-e-node ai-card-e-node--domain">Rules</span>
        <span className="ai-card-e-node ai-card-e-node--users">Users</span>
      </div>
      <div className="ai-card-e-dial">
        <div className="ai-card-e-dial-core">AI</div>
        <div className="ai-card-e-needle" />
      </div>
      <div className="ai-card-e-output">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export function OptionFBlueprintBloom() {
  return (
    <div className="ai-card-preview ai-card-preview-f" aria-hidden="true">
      <div className="ai-card-f-grid" />
      <div className="ai-card-f-path" />
      <div className="ai-card-f-window">
        <div className="ai-card-f-titlebar">
          <span />
          <span />
          <span />
        </div>
        <div className="ai-card-f-canvas">
          <div className="ai-card-f-panel ai-card-f-panel--one" />
          <div className="ai-card-f-panel ai-card-f-panel--two" />
          <div className="ai-card-f-panel ai-card-f-panel--three" />
        </div>
      </div>
      <div className="ai-card-f-badge">Prototype</div>
    </div>
  );
}

export function OptionGPromptTheater() {
  return (
    <div className="ai-card-preview ai-card-preview-g" aria-hidden="true">
      <div className="ai-card-g-stage">
        <div className="ai-card-g-curtain ai-card-g-curtain--left" />
        <div className="ai-card-g-curtain ai-card-g-curtain--right" />
        <div className="ai-card-g-prompt">try this flow</div>
        <div className="ai-card-g-ui">
          <div className="ai-card-g-toolbar" />
          <div className="ai-card-g-card ai-card-g-card--one" />
          <div className="ai-card-g-card ai-card-g-card--two" />
          <div className="ai-card-g-pill" />
        </div>
      </div>
    </div>
  );
}

export function OptionHComponentTuning() {
  return (
    <div className="ai-card-preview ai-card-preview-h" aria-hidden="true">
      <div className="ai-card-h-draft">
        <div className="ai-card-h-draft-block" />
        <div className="ai-card-h-draft-line" />
        <div className="ai-card-h-draft-line ai-card-h-draft-line--short" />
      </div>
      <div className="ai-card-h-controls">
        <div className="ai-card-h-slider ai-card-h-slider--one">
          <span />
        </div>
        <div className="ai-card-h-slider ai-card-h-slider--two">
          <span />
        </div>
        <div className="ai-card-h-slider ai-card-h-slider--three">
          <span />
        </div>
      </div>
      <div className="ai-card-h-result">
        <div className="ai-card-h-result-chip" />
        <div className="ai-card-h-result-title" />
        <div className="ai-card-h-result-row" />
        <div className="ai-card-h-result-row ai-card-h-result-row--short" />
      </div>
    </div>
  );
}
