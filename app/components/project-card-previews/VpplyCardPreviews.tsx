import type { CSSProperties } from "react";

type ComposeAtom = {
  id: string;
  kind: string;
  restTop: number;
  restLeft: number;
  slotTop: number;
  slotLeft: number;
  delay: number;
};

type ComposeFrame = "none" | "bar" | "card" | "row";

const BASE_ATOMS: ComposeAtom[] = [
  { id: "dot", kind: "dot", restTop: 24, restLeft: 22, slotTop: 30, slotLeft: 50, delay: 0 },
  { id: "line", kind: "line", restTop: 42, restLeft: 74, slotTop: 42, slotLeft: 50, delay: 80 },
  { id: "field", kind: "field", restTop: 58, restLeft: 18, slotTop: 54, slotLeft: 50, delay: 160 },
  { id: "btn", kind: "btn", restTop: 72, restLeft: 68, slotTop: 68, slotLeft: 50, delay: 240 },
];

const SEARCH_ATOMS: ComposeAtom[] = [
  { id: "icon", kind: "search-icon", restTop: 26, restLeft: 16, slotTop: 50, slotLeft: 22, delay: 0 },
  { id: "query", kind: "search-query", restTop: 54, restLeft: 78, slotTop: 50, slotLeft: 48, delay: 90 },
  { id: "filter", kind: "search-filter", restTop: 70, restLeft: 32, slotTop: 50, slotLeft: 80, delay: 180 },
];

const LIST_ROW_ATOMS: ComposeAtom[] = [
  { id: "grip", kind: "row-grip", restTop: 22, restLeft: 68, slotTop: 50, slotLeft: 16, delay: 0 },
  { id: "check", kind: "row-check", restTop: 38, restLeft: 24, slotTop: 50, slotLeft: 28, delay: 70 },
  { id: "title", kind: "row-title", restTop: 52, restLeft: 76, slotTop: 50, slotLeft: 48, delay: 140 },
  { id: "badge", kind: "row-badge", restTop: 66, restLeft: 18, slotTop: 50, slotLeft: 72, delay: 210 },
  { id: "chevron", kind: "row-chevron", restTop: 74, restLeft: 82, slotTop: 50, slotLeft: 88, delay: 280 },
];

const ACTION_CARD_ATOMS: ComposeAtom[] = [
  { id: "avatar", kind: "card-avatar", restTop: 20, restLeft: 72, slotTop: 36, slotLeft: 32, delay: 0 },
  { id: "title", kind: "card-title", restTop: 34, restLeft: 18, slotTop: 36, slotLeft: 52, delay: 80 },
  { id: "subtitle", kind: "card-subtitle", restTop: 58, restLeft: 78, slotTop: 48, slotLeft: 52, delay: 160 },
  { id: "action", kind: "card-action", restTop: 74, restLeft: 28, slotTop: 62, slotLeft: 52, delay: 240 },
];

const TAB_BAR_ATOMS: ComposeAtom[] = [
  { id: "tab-a", kind: "tab", restTop: 28, restLeft: 20, slotTop: 50, slotLeft: 28, delay: 0 },
  { id: "tab-b", kind: "tab-active", restTop: 48, restLeft: 74, slotTop: 50, slotLeft: 50, delay: 90 },
  { id: "tab-c", kind: "tab", restTop: 68, restLeft: 38, slotTop: 50, slotLeft: 72, delay: 180 },
];

const INPUT_GROUP_ATOMS: ComposeAtom[] = [
  { id: "label", kind: "input-label", restTop: 24, restLeft: 76, slotTop: 34, slotLeft: 50, delay: 0 },
  { id: "field", kind: "input-field", restTop: 46, restLeft: 16, slotTop: 48, slotLeft: 50, delay: 100 },
  { id: "hint", kind: "input-hint", restTop: 68, restLeft: 68, slotTop: 62, slotLeft: 50, delay: 200 },
];

const TOOLBAR_ATOMS: ComposeAtom[] = [
  { id: "icon", kind: "toolbar-icon", restTop: 22, restLeft: 74, slotTop: 50, slotLeft: 22, delay: 0 },
  { id: "label", kind: "toolbar-label", restTop: 38, restLeft: 14, slotTop: 50, slotLeft: 38, delay: 80 },
  { id: "divider", kind: "toolbar-divider", restTop: 58, restLeft: 82, slotTop: 50, slotLeft: 58, delay: 160 },
  { id: "action", kind: "toolbar-action", restTop: 72, restLeft: 26, slotTop: 50, slotLeft: 78, delay: 240 },
];

function AtomicComposePreview({
  variant = "base",
  atoms,
  caption,
  frame = "none",
}: {
  variant?: string;
  atoms: ComposeAtom[];
  caption: string;
  frame?: ComposeFrame;
}) {
  return (
    <div
      className={`vp-card-preview vp-card-preview-compose vp-card-preview-compose--${variant}`.trim()}
      aria-hidden="true"
    >
      {frame !== "none" ? (
        <div className={`vp-compose-frame vp-compose-frame--${frame}`} />
      ) : null}
      {atoms.map((atom) => (
        <div
          key={atom.id}
          className={`vp-compose-atom vp-compose-atom--${atom.kind}`}
          style={
            {
              "--atom-rest-top": `${atom.restTop}%`,
              "--atom-rest-left": `${atom.restLeft}%`,
              "--atom-slot-top": `${atom.slotTop}%`,
              "--atom-slot-left": `${atom.slotLeft}%`,
              "--atom-delay": `${atom.delay}ms`,
            } as CSSProperties
          }
        />
      ))}
      <div className="vp-compose-caption">{caption}</div>
    </div>
  );
}

/** VP1 — Screens stop reinventing the same patterns */
export function VpOptionSharedPatterns() {
  return (
    <div className="vp-card-preview vp-card-preview-screens" aria-hidden="true">
      <div className="vp-screen vp-screen--a">
        <div className="vp-screen-nav" />
        <div className="vp-screen-body" />
        <div className="vp-screen-cta vp-screen-cta--wide" />
      </div>
      <div className="vp-screen vp-screen--b">
        <div className="vp-screen-nav vp-screen-nav--tall" />
        <div className="vp-screen-body" />
        <div className="vp-screen-cta vp-screen-cta--small" />
      </div>
      <div className="vp-screen vp-screen--c">
        <div className="vp-screen-nav" />
        <div className="vp-screen-body" />
        <div className="vp-screen-cta vp-screen-cta--outline" />
      </div>
      <div className="vp-screens-caption">Same product, three dialects</div>
    </div>
  );
}

/** VP2 — Atoms compose into a usable molecule */
export function VpOptionAtomicCompose() {
  return (
    <AtomicComposePreview
      atoms={BASE_ATOMS}
      caption="Atoms → molecule"
    />
  );
}

/** VP2b — Search bar from icon, query, and filter chip */
export function VpOptionComposeSearchBar() {
  return (
    <AtomicComposePreview
      variant="search"
      atoms={SEARCH_ATOMS}
      caption="Parts → search bar"
      frame="bar"
    />
  );
}

/** VP2c — Table row from grip, checkbox, title, badge, chevron */
export function VpOptionComposeListRow() {
  return (
    <AtomicComposePreview
      variant="list-row"
      atoms={LIST_ROW_ATOMS}
      caption="Fragments → list row"
      frame="row"
    />
  );
}

/** VP2d — Profile card from avatar, copy, and action */
export function VpOptionComposeActionCard() {
  return (
    <AtomicComposePreview
      variant="action-card"
      atoms={ACTION_CARD_ATOMS}
      caption="Pieces → action card"
      frame="card"
    />
  );
}

/** VP2e — Tab labels snap into a connected tab bar */
export function VpOptionComposeTabBar() {
  return (
    <AtomicComposePreview
      variant="tabs"
      atoms={TAB_BAR_ATOMS}
      caption="Labels → tab bar"
    />
  );
}

/** VP2f — Label, field, and hint form an input group */
export function VpOptionComposeInputGroup() {
  return (
    <AtomicComposePreview
      variant="input-group"
      atoms={INPUT_GROUP_ATOMS}
      caption="Atoms → input group"
      frame="card"
    />
  );
}

/** VP2g — Two fragment pairs merge into one toolbar */
export function VpOptionComposeToolbar() {
  return (
    <AtomicComposePreview
      variant="toolbar"
      atoms={TOOLBAR_ATOMS}
      caption="Pairs → toolbar"
      frame="bar"
    />
  );
}

/** VP3 — Duplicate one-offs become one sourced component */
export function VpOptionSingleSource() {
  return (
    <div className="vp-card-preview vp-card-preview-source" aria-hidden="true">
      <div className="vp-source-duo">
        <div className="vp-source-btn vp-source-btn--a">Apply</div>
        <div className="vp-source-btn vp-source-btn--b">Apply</div>
      </div>
      <div className="vp-source-canonical">
        <div className="vp-source-btn vp-source-btn--canonical">Apply</div>
        <div className="vp-source-variants">
          <span>Primary</span>
          <span>Secondary</span>
          <span>Ghost</span>
        </div>
      </div>
    </div>
  );
}

/** VP4 — Variant properties wired for every state */
export function VpOptionVariantMatrix() {
  return (
    <div className="vp-card-preview vp-card-preview-matrix" aria-hidden="true">
      <div className="vp-matrix-label">Button · variants</div>
      <div className="vp-matrix-grid">
        <div className="vp-matrix-cell vp-matrix-cell--default">
          <span className="vp-matrix-chip">Apply</span>
          <span className="vp-matrix-name">Default</span>
        </div>
        <div className="vp-matrix-cell vp-matrix-cell--hover">
          <span className="vp-matrix-chip">Apply</span>
          <span className="vp-matrix-name">Hover</span>
        </div>
        <div className="vp-matrix-cell vp-matrix-cell--focus">
          <span className="vp-matrix-chip">Apply</span>
          <span className="vp-matrix-name">Focus</span>
        </div>
        <div className="vp-matrix-cell vp-matrix-cell--disabled">
          <span className="vp-matrix-chip">Apply</span>
          <span className="vp-matrix-name">Disabled</span>
        </div>
      </div>
    </div>
  );
}

/** VP5 — Spacing and type snap to a shared scale */
export function VpOptionTokenScale() {
  return (
    <div className="vp-card-preview vp-card-preview-tokens" aria-hidden="true">
      <div className="vp-token-chaos">
        <span className="vp-token-bar vp-token-bar--a" />
        <span className="vp-token-bar vp-token-bar--b" />
        <span className="vp-token-bar vp-token-bar--c" />
        <span className="vp-token-bar vp-token-bar--d" />
      </div>
      <div className="vp-token-scale">
        <div className="vp-token-step">
          <span className="vp-token-num">4</span>
          <span className="vp-token-bar vp-token-bar--s" />
        </div>
        <div className="vp-token-step">
          <span className="vp-token-num">8</span>
          <span className="vp-token-bar vp-token-bar--m" />
        </div>
        <div className="vp-token-step">
          <span className="vp-token-num">16</span>
          <span className="vp-token-bar vp-token-bar--l" />
        </div>
        <div className="vp-token-step">
          <span className="vp-token-num">24</span>
          <span className="vp-token-bar vp-token-bar--xl" />
        </div>
      </div>
    </div>
  );
}

/** VP6 — Core components published to a team library */
export function VpOptionLibraryPublish() {
  return (
    <div className="vp-card-preview vp-card-preview-publish" aria-hidden="true">
      <div className="vp-publish-loose">
        <div className="vp-publish-piece vp-publish-piece--btn">Button</div>
        <div className="vp-publish-piece vp-publish-piece--input">Input</div>
        <div className="vp-publish-piece vp-publish-piece--nav">Nav</div>
      </div>
      <div className="vp-publish-frame">
        <span className="vp-publish-title">Team library</span>
        <div className="vp-publish-shelf">
          <div className="vp-publish-piece vp-publish-piece--btn">Button</div>
          <div className="vp-publish-piece vp-publish-piece--input">Input</div>
          <div className="vp-publish-piece vp-publish-piece--nav">Nav</div>
        </div>
      </div>
    </div>
  );
}
