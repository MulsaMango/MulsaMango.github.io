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

type ComposeFrame =
  | "none"
  | "bar"
  | "card"
  | "row"
  | "search-module"
  | "search-row"
  | "user-card";

type MoleculeAtom = {
  id: string;
  kind?: string;
  restTop: number;
  restLeft: number;
  slotTop: number;
  slotLeft: number;
  delay: number;
};

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

const SEARCH_STACK_ATOMS: ComposeAtom[] = [
  { id: "title", kind: "ph-title", restTop: 16, restLeft: 22, slotTop: 24, slotLeft: 50, delay: 0 },
  { id: "glass", kind: "si-glass", restTop: 72, restLeft: 18, slotTop: 50, slotLeft: 22, delay: 90 },
  { id: "field", kind: "si-field", restTop: 48, restLeft: 82, slotTop: 50, slotLeft: 50, delay: 180 },
  { id: "btn", kind: "si-btn", restTop: 78, restLeft: 68, slotTop: 50, slotLeft: 80, delay: 270 },
];

const SEARCH_LEDGER_ATOMS: ComposeAtom[] = [
  { id: "title", kind: "ph-title", restTop: 20, restLeft: 78, slotTop: 22, slotLeft: 28, delay: 0 },
  { id: "glass", kind: "si-glass", restTop: 65, restLeft: 15, slotTop: 52, slotLeft: 18, delay: 80 },
  { id: "field", kind: "si-field", restTop: 38, restLeft: 55, slotTop: 52, slotLeft: 48, delay: 160 },
  { id: "btn", kind: "si-btn", restTop: 74, restLeft: 85, slotTop: 52, slotLeft: 84, delay: 240 },
];

const SEARCH_QUADRANT_ATOMS: ComposeAtom[] = [
  { id: "title", kind: "ph-title", restTop: 14, restLeft: 12, slotTop: 24, slotLeft: 50, delay: 0 },
  { id: "glass", kind: "si-glass", restTop: 12, restLeft: 88, slotTop: 50, slotLeft: 22, delay: 120 },
  { id: "field", kind: "si-field", restTop: 86, restLeft: 14, slotTop: 50, slotLeft: 50, delay: 240 },
  { id: "btn", kind: "si-btn", restTop: 88, restLeft: 86, slotTop: 50, slotLeft: 80, delay: 360 },
];

const USER_SIDE_ATOMS: ComposeAtom[] = [
  { id: "avatar", kind: "uc-avatar", restTop: 18, restLeft: 78, slotTop: 36, slotLeft: 26, delay: 0 },
  { id: "title", kind: "ph-title", restTop: 22, restLeft: 14, slotTop: 30, slotLeft: 58, delay: 70 },
  { id: "body1", kind: "ph-body", restTop: 48, restLeft: 82, slotTop: 42, slotLeft: 58, delay: 140 },
  { id: "body2", kind: "ph-body-short", restTop: 58, restLeft: 16, slotTop: 50, slotLeft: 58, delay: 210 },
  { id: "btn", kind: "uc-btn", restTop: 76, restLeft: 72, slotTop: 66, slotLeft: 50, delay: 280 },
];

const USER_STACK_ATOMS: ComposeAtom[] = [
  { id: "avatar", kind: "uc-avatar", restTop: 20, restLeft: 18, slotTop: 28, slotLeft: 50, delay: 0 },
  { id: "title", kind: "ph-title", restTop: 34, restLeft: 82, slotTop: 40, slotLeft: 50, delay: 80 },
  { id: "body1", kind: "ph-body", restTop: 52, restLeft: 12, slotTop: 50, slotLeft: 50, delay: 160 },
  { id: "body2", kind: "ph-body-short", restTop: 64, restLeft: 75, slotTop: 58, slotLeft: 50, delay: 240 },
  { id: "btn", kind: "uc-btn", restTop: 78, restLeft: 28, slotTop: 70, slotLeft: 50, delay: 320 },
];

const USER_INLINE_ATOMS: ComposeAtom[] = [
  { id: "avatar", kind: "uc-avatar", restTop: 24, restLeft: 72, slotTop: 34, slotLeft: 28, delay: 0 },
  { id: "title", kind: "ph-title", restTop: 20, restLeft: 16, slotTop: 34, slotLeft: 58, delay: 90 },
  { id: "body1", kind: "ph-body", restTop: 56, restLeft: 84, slotTop: 50, slotLeft: 50, delay: 180 },
  { id: "btn", kind: "uc-btn", restTop: 74, restLeft: 18, slotTop: 66, slotLeft: 50, delay: 270 },
];

const ORBIT_MOLECULE_ATOMS: MoleculeAtom[] = [
  { id: "a1", restTop: 20, restLeft: 48, slotTop: 34, slotLeft: 32, delay: 0 },
  { id: "a2", restTop: 31, restLeft: 74, slotTop: 34, slotLeft: 48, delay: 50 },
  { id: "a3", restTop: 56, restLeft: 78, slotTop: 48, slotLeft: 48, delay: 100 },
  { id: "a4", restTop: 76, restLeft: 54, slotTop: 62, slotLeft: 48, delay: 150 },
  { id: "a5", restTop: 64, restLeft: 25, slotTop: 62, slotLeft: 32, delay: 200 },
  { id: "a6", restTop: 36, restLeft: 22, slotTop: 48, slotLeft: 32, delay: 250 },
];

const RECIPE_MOLECULE_ATOMS: MoleculeAtom[] = [
  { id: "type", kind: "type", restTop: 28, restLeft: 22, slotTop: 35, slotLeft: 29, delay: 0 },
  { id: "state", kind: "state", restTop: 24, restLeft: 72, slotTop: 35, slotLeft: 51, delay: 70 },
  { id: "space", kind: "space", restTop: 68, restLeft: 19, slotTop: 58, slotLeft: 29, delay: 140 },
  { id: "pink", kind: "pink", restTop: 72, restLeft: 75, slotTop: 58, slotLeft: 51, delay: 210 },
];

const VIDEO_MOLECULE_ATOMS: MoleculeAtom[] = [
  { id: "play", kind: "video-play", restTop: 25, restLeft: 30, slotTop: 35, slotLeft: 35, delay: 0 },
  { id: "timer", kind: "video-timer", restTop: 25, restLeft: 69, slotTop: 57, slotLeft: 35, delay: 80 },
  { id: "field", kind: "video-field", restTop: 70, restLeft: 25, slotTop: 44, slotLeft: 65, delay: 160 },
  { id: "cta", kind: "video-cta", restTop: 72, restLeft: 71, slotTop: 65, slotLeft: 65, delay: 240 },
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

type UserCardPieceKind = "avatar" | "title" | "body" | "body-short" | "btn";

type UserCardPiece = {
  id: string;
  kind: UserCardPieceKind;
  restTop: number;
  restLeft: number;
  fitTop: number;
  fitLeft: number;
  fitWidth: string;
  fitHeight: string;
  delay: number;
};

// All fit values are % of the square card, so widths and heights share one
// pixel base and alignment holds at any size. avatar fit is kept square.
const USER_REAL_PROFILE: UserCardPiece[] = [
  { id: "avatar", kind: "avatar", restTop: 20, restLeft: 76, fitTop: 20, fitLeft: 13, fitWidth: "16%", fitHeight: "16%", delay: 0 },
  { id: "title", kind: "title", restTop: 16, restLeft: 18, fitTop: 22, fitLeft: 33, fitWidth: "46%", fitHeight: "3.4%", delay: 70 },
  { id: "body1", kind: "body", restTop: 46, restLeft: 84, fitTop: 29, fitLeft: 33, fitWidth: "44%", fitHeight: "2.6%", delay: 140 },
  { id: "body2", kind: "body-short", restTop: 60, restLeft: 14, fitTop: 34, fitLeft: 33, fitWidth: "32%", fitHeight: "2.6%", delay: 210 },
  { id: "btn", kind: "btn", restTop: 78, restLeft: 66, fitTop: 60, fitLeft: 13, fitWidth: "76%", fitHeight: "12%", delay: 280 },
];

const USER_REAL_LIST: UserCardPiece[] = [
  { id: "avatar", kind: "avatar", restTop: 72, restLeft: 20, fitTop: 41, fitLeft: 12, fitWidth: "18%", fitHeight: "18%", delay: 0 },
  { id: "title", kind: "title", restTop: 18, restLeft: 74, fitTop: 43, fitLeft: 33, fitWidth: "36%", fitHeight: "3%", delay: 80 },
  { id: "body1", kind: "body", restTop: 68, restLeft: 82, fitTop: 50.5, fitLeft: 33, fitWidth: "30%", fitHeight: "2.4%", delay: 160 },
  { id: "btn", kind: "btn", restTop: 22, restLeft: 16, fitTop: 43, fitLeft: 74, fitWidth: "15%", fitHeight: "14%", delay: 240 },
];

const USER_REAL_CENTERED: UserCardPiece[] = [
  { id: "avatar", kind: "avatar", restTop: 24, restLeft: 16, fitTop: 19, fitLeft: 41, fitWidth: "18%", fitHeight: "18%", delay: 0 },
  { id: "title", kind: "title", restTop: 38, restLeft: 80, fitTop: 39, fitLeft: 26, fitWidth: "48%", fitHeight: "3.4%", delay: 80 },
  { id: "body1", kind: "body", restTop: 54, restLeft: 12, fitTop: 46, fitLeft: 29, fitWidth: "42%", fitHeight: "2.6%", delay: 160 },
  { id: "body2", kind: "body-short", restTop: 70, restLeft: 78, fitTop: 51, fitLeft: 34, fitWidth: "32%", fitHeight: "2.6%", delay: 230 },
  { id: "btn", kind: "btn", restTop: 82, restLeft: 24, fitTop: 62, fitLeft: 24, fitWidth: "52%", fitHeight: "11%", delay: 300 },
];

function UserCardComposePreview({
  variant,
  pieces,
  caption,
}: {
  variant: string;
  pieces: UserCardPiece[];
  caption: string;
}) {
  return (
    <div
      className={`vp-card-preview vp-user-card-compose vp-user-card-compose--${variant}`.trim()}
      aria-hidden="true"
    >
      <div className="vp-user-card-shell" />
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={`vp-user-card-piece vp-user-card-piece--${piece.kind}`}
          style={
            {
              "--rest-top": `${piece.restTop}%`,
              "--rest-left": `${piece.restLeft}%`,
              "--fit-top": `${piece.fitTop}%`,
              "--fit-left": `${piece.fitLeft}%`,
              "--fit-w": piece.fitWidth,
              "--fit-h": piece.fitHeight,
              "--piece-delay": `${piece.delay}ms`,
            } as CSSProperties
          }
        />
      ))}
      <div className="vp-compose-caption">{caption}</div>
    </div>
  );
}

type SearchPieceKind = "heading" | "field" | "icon" | "placeholder" | "btn";

type SearchPiece = {
  id: string;
  kind: SearchPieceKind;
  restTop: number;
  restLeft: number;
  restRotate?: number;
  fitTop: number;
  fitLeft: number;
  fitWidth: string;
  fitHeight: string;
  delay: number;
};

// All fit values are % of the square card. Within a field of height H at top T,
// the icon (6%) and placeholder centre on T + H/2; the button matches the field.
const SEARCH_REAL_MODULE: SearchPiece[] = [
  { id: "heading", kind: "heading", restTop: 16, restLeft: 78, fitTop: 21, fitLeft: 13, fitWidth: "42%", fitHeight: "2.8%", delay: 0 },
  { id: "field", kind: "field", restTop: 72, restLeft: 18, fitTop: 26.5, fitLeft: 13, fitWidth: "52%", fitHeight: "13%", delay: 80 },
  { id: "icon", kind: "icon", restTop: 68, restLeft: 82, fitTop: 30, fitLeft: 15.5, fitWidth: "5.5%", fitHeight: "5.5%", delay: 160 },
  { id: "placeholder", kind: "placeholder", restTop: 48, restLeft: 84, fitTop: 31.2, fitLeft: 24, fitWidth: "32%", fitHeight: "2.8%", delay: 220 },
  { id: "btn", kind: "btn", restTop: 26, restLeft: 14, fitTop: 26.5, fitLeft: 68.5, fitWidth: "18.5%", fitHeight: "13%", delay: 300 },
];

const SEARCH_MODULE_SOFT: SearchPiece[] = [
  { id: "heading", kind: "heading", restTop: 14, restLeft: 82, fitTop: 19.5, fitLeft: 14, fitWidth: "38%", fitHeight: "2.6%", delay: 0 },
  { id: "field", kind: "field", restTop: 74, restLeft: 16, fitTop: 24.5, fitLeft: 14, fitWidth: "48%", fitHeight: "14%", delay: 80 },
  { id: "icon", kind: "icon", restTop: 66, restLeft: 84, fitTop: 28.5, fitLeft: 17, fitWidth: "5%", fitHeight: "5%", delay: 160 },
  { id: "placeholder", kind: "placeholder", restTop: 50, restLeft: 86, fitTop: 29.8, fitLeft: 25, fitWidth: "30%", fitHeight: "2.6%", delay: 220 },
  { id: "btn", kind: "btn", restTop: 28, restLeft: 12, fitTop: 24.5, fitLeft: 68, fitWidth: "17%", fitHeight: "14%", delay: 300 },
];

const SEARCH_MODULE_TIGHT: SearchPiece[] = [
  { id: "heading", kind: "heading", restTop: 27, restLeft: 72, restRotate: -4, fitTop: 42, fitLeft: 13, fitWidth: "44%", fitHeight: "2.6%", delay: 0 },
  { id: "field", kind: "field", restTop: 67, restLeft: 28, restRotate: 3, fitTop: 47, fitLeft: 13, fitWidth: "54%", fitHeight: "11.5%", delay: 80 },
  { id: "icon", kind: "icon", restTop: 24, restLeft: 34, restRotate: -7, fitTop: 50.75, fitLeft: 15, fitWidth: "4%", fitHeight: "4%", delay: 160 },
  { id: "placeholder", kind: "placeholder", restTop: 69, restLeft: 71, restRotate: 2, fitTop: 51, fitLeft: 23.5, fitWidth: "34%", fitHeight: "2.6%", delay: 220 },
  { id: "btn", kind: "btn", restTop: 36, restLeft: 48, restRotate: -3, fitTop: 47, fitLeft: 69.5, fitWidth: "18%", fitHeight: "11.5%", delay: 300 },
];

const SEARCH_MODULE_PILL: SearchPiece[] = [
  { id: "heading", kind: "heading", restTop: 16, restLeft: 80, fitTop: 20, fitLeft: 14, fitWidth: "40%", fitHeight: "2.6%", delay: 0 },
  { id: "field", kind: "field", restTop: 72, restLeft: 18, fitTop: 25, fitLeft: 14, fitWidth: "50%", fitHeight: "13.5%", delay: 80 },
  { id: "icon", kind: "icon", restTop: 68, restLeft: 84, fitTop: 29.2, fitLeft: 16.5, fitWidth: "5%", fitHeight: "5%", delay: 160 },
  { id: "placeholder", kind: "placeholder", restTop: 48, restLeft: 86, fitTop: 30.4, fitLeft: 24.5, fitWidth: "31%", fitHeight: "2.6%", delay: 220 },
  { id: "btn", kind: "btn", restTop: 26, restLeft: 14, fitTop: 25, fitLeft: 69, fitWidth: "17.5%", fitHeight: "13.5%", delay: 300 },
];

// Field and button joined as one control
const SEARCH_REAL_ATTACHED: SearchPiece[] = [
  { id: "heading", kind: "heading", restTop: 18, restLeft: 16, fitTop: 25, fitLeft: 11, fitWidth: "40%", fitHeight: "3.4%", delay: 0 },
  { id: "field", kind: "field", restTop: 76, restLeft: 22, fitTop: 39, fitLeft: 11, fitWidth: "58%", fitHeight: "14%", delay: 80 },
  { id: "icon", kind: "icon", restTop: 62, restLeft: 80, fitTop: 43, fitLeft: 13.5, fitWidth: "6%", fitHeight: "6%", delay: 160 },
  { id: "placeholder", kind: "placeholder", restTop: 44, restLeft: 12, fitTop: 44.5, fitLeft: 22, fitWidth: "42%", fitHeight: "3%", delay: 230 },
  { id: "btn", kind: "btn", restTop: 28, restLeft: 84, fitTop: 39, fitLeft: 69, fitWidth: "20%", fitHeight: "14%", delay: 310 },
];

function SearchComposePreview({
  variant,
  pieces,
  caption,
  showCaption = true,
}: {
  variant: string;
  pieces: SearchPiece[];
  caption?: string;
  showCaption?: boolean;
}) {
  return (
    <div
      className={`vp-card-preview vp-search-compose vp-search-compose--${variant}`.trim()}
      aria-hidden="true"
    >
      <div className="vp-search-shell" />
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={`vp-search-piece vp-search-piece--${piece.kind}`}
          style={
            {
              "--rest-top": `${piece.restTop}%`,
              "--rest-left": `${piece.restLeft}%`,
              "--rest-rotate": `${piece.restRotate ?? 0}deg`,
              "--fit-top": `${piece.fitTop}%`,
              "--fit-left": `${piece.fitLeft}%`,
              "--fit-w": piece.fitWidth,
              "--fit-h": piece.fitHeight,
              "--piece-delay": `${piece.delay}ms`,
            } as CSSProperties
          }
        />
      ))}
      {showCaption && caption ? (
        <div className="vp-compose-caption">{caption}</div>
      ) : null}
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

/** VPC1 — Title block + search row snap into a search module */
export function VpOptionComposeSearchStack() {
  return (
    <AtomicComposePreview
      variant="search-stack"
      atoms={SEARCH_STACK_ATOMS}
      caption="Parts → search module"
      frame="search-module"
    />
  );
}

/** VPC2 — Left-aligned title with a wide search row below */
export function VpOptionComposeSearchLedger() {
  return (
    <AtomicComposePreview
      variant="search-ledger"
      atoms={SEARCH_LEDGER_ATOMS}
      caption="Blocks → search panel"
      frame="search-row"
    />
  );
}

/** VPC3 — Corner-scattered pieces converge on one search input */
export function VpOptionComposeSearchQuadrant() {
  return (
    <AtomicComposePreview
      variant="search-quadrant"
      atoms={SEARCH_QUADRANT_ATOMS}
      caption="Corners → search input"
      frame="search-module"
    />
  );
}

/** VPC4 — Avatar beside title, body blocks, and action button */
export function VpOptionComposeUserSide() {
  return (
    <AtomicComposePreview
      variant="user-side"
      atoms={USER_SIDE_ATOMS}
      caption="Fragments → user card"
      frame="user-card"
    />
  );
}

/** VPC5 — Centered avatar with stacked placeholder copy */
export function VpOptionComposeUserStack() {
  return (
    <AtomicComposePreview
      variant="user-stack"
      atoms={USER_STACK_ATOMS}
      caption="Pieces → profile card"
      frame="user-card"
    />
  );
}

/** VPC6 — Compact card: avatar + title row, body block, button */
export function VpOptionComposeUserInline() {
  return (
    <AtomicComposePreview
      variant="user-inline"
      atoms={USER_INLINE_ATOMS}
      caption="Bits → user tile"
      frame="user-card"
    />
  );
}

/** VPC13 — Profile card with aligned lo-fi layout */
export function VpOptionComposeUserRealProfile() {
  return (
    <UserCardComposePreview
      variant="profile"
      pieces={USER_REAL_PROFILE}
      caption="Parts → profile card"
    />
  );
}

/** VPC14 — Applicant list row, vertically centred */
export function VpOptionComposeUserRealList() {
  return (
    <UserCardComposePreview
      variant="list-row"
      pieces={USER_REAL_LIST}
      caption="Bits → list row"
    />
  );
}

/** VPC15 — Centred avatar with stacked copy */
export function VpOptionComposeUserRealCentered() {
  return (
    <UserCardComposePreview
      variant="centered"
      pieces={USER_REAL_CENTERED}
      caption="Pieces → centred card"
    />
  );
}

/** VPC18 — Search module with heading, field, and side button */
export function VpOptionComposeSearchRealModule() {
  return (
    <SearchComposePreview
      variant="module"
      pieces={SEARCH_REAL_MODULE}
      caption="Parts → search module"
    />
  );
}

/** VPC18a — Softer corners, looser spacing */
export function VpOptionComposeSearchModuleSoft() {
  return (
    <SearchComposePreview
      variant="module-soft"
      pieces={SEARCH_MODULE_SOFT}
      caption="Soft radius · airy"
    />
  );
}

/** VPC18b — Sharper corners, compact spacing */
export function VpOptionComposeSearchModuleTight() {
  return (
    <SearchComposePreview
      variant="module-tight"
      pieces={SEARCH_MODULE_TIGHT}
      caption="Tight radius · compact"
    />
  );
}

/** Landing card — VPC18b search module */
export function VpProjectCardSearchModule() {
  return (
    <SearchComposePreview
      variant="module-tight"
      pieces={SEARCH_MODULE_TIGHT}
      showCaption={false}
    />
  );
}

/** VPC18c — Pill field and button */
export function VpOptionComposeSearchModulePill() {
  return (
    <SearchComposePreview
      variant="module-pill"
      pieces={SEARCH_MODULE_PILL}
      caption="Pill controls"
    />
  );
}

/** VPC20 — Input and button joined as one control */
export function VpOptionComposeSearchRealAttached() {
  return (
    <SearchComposePreview
      variant="attached"
      pieces={SEARCH_REAL_ATTACHED}
      caption="Pieces → attached search"
    />
  );
}

/** VPM1 — Neutral atoms orbit into a button molecule */
export function VpOptionMoleculeOrbitButton() {
  return (
    <div className="vp-card-preview vp-card-preview-molecule vp-card-preview-molecule-orbit" aria-hidden="true">
      <div className="vp-molecule-orbit-ring" />
      <div className="vp-molecule-button-shell">
        <span className="vp-molecule-button-dot" />
        <span className="vp-molecule-button-line" />
      </div>
      {ORBIT_MOLECULE_ATOMS.map((atom) => (
        <span
          key={atom.id}
          className="vp-molecule-atom vp-molecule-orbit-atom"
          style={
            {
              "--mol-rest-top": `${atom.restTop}%`,
              "--mol-rest-left": `${atom.restLeft}%`,
              "--mol-slot-top": `${atom.slotTop}%`,
              "--mol-slot-left": `${atom.slotLeft}%`,
              "--mol-delay": `${atom.delay}ms`,
            } as CSSProperties
          }
        />
      ))}
      <div className="vp-molecule-caption">atoms bond into button</div>
    </div>
  );
}

/** VPM2 — Atoms form a visible molecular bond chain */
export function VpOptionMoleculeBondChain() {
  return (
    <div className="vp-card-preview vp-card-preview-molecule vp-card-preview-molecule-chain" aria-hidden="true">
      <svg className="vp-molecule-chain-bonds" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M18 58 L33 42 L50 58 L67 42 L82 58" />
      </svg>
      {["type", "state", "tone", "space", "motion"].map((atom, index) => (
        <span key={atom} className={`vp-molecule-chain-atom vp-molecule-chain-atom--${index + 1}`}>
          {atom}
        </span>
      ))}
      <div className="vp-molecule-chain-result">
        <span />
        <span />
        <span />
      </div>
      <div className="vp-molecule-caption">properties form variants</div>
    </div>
  );
}

/** VPM3 — Component ingredients resolve into an input molecule */
export function VpOptionMoleculeRecipeInput() {
  return (
    <div className="vp-card-preview vp-card-preview-molecule vp-card-preview-molecule-recipe" aria-hidden="true">
      <div className="vp-molecule-recipe-stage" />
      {RECIPE_MOLECULE_ATOMS.map((atom) => (
        <span
          key={atom.id}
          className={`vp-molecule-atom vp-molecule-recipe-atom vp-molecule-recipe-atom--${atom.kind}`}
          style={
            {
              "--mol-rest-top": `${atom.restTop}%`,
              "--mol-rest-left": `${atom.restLeft}%`,
              "--mol-slot-top": `${atom.slotTop}%`,
              "--mol-slot-left": `${atom.slotLeft}%`,
              "--mol-delay": `${atom.delay}ms`,
            } as CSSProperties
          }
        />
      ))}
      <div className="vp-molecule-input-result">
        <span className="vp-molecule-input-label" />
        <span className="vp-molecule-input-field" />
        <span className="vp-molecule-input-hint" />
      </div>
      <div className="vp-molecule-caption">recipe becomes input</div>
    </div>
  );
}

/** VPM4 — Same atoms recombine into three related molecules */
export function VpOptionMoleculeFamily() {
  return (
    <div className="vp-card-preview vp-card-preview-molecule vp-card-preview-molecule-family" aria-hidden="true">
      <div className="vp-molecule-family-cloud">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} className={`vp-molecule-family-atom vp-molecule-family-atom--${index + 1}`} />
        ))}
      </div>
      <div className="vp-molecule-family-grid">
        <div className="vp-molecule-family-card vp-molecule-family-card--button">Button</div>
        <div className="vp-molecule-family-card vp-molecule-family-card--input">Input</div>
        <div className="vp-molecule-family-card vp-molecule-family-card--nav">Nav</div>
      </div>
      <div className="vp-molecule-caption">one kit, three molecules</div>
    </div>
  );
}

/** VPM5 — Video-application parts snap into one product molecule */
export function VpOptionMoleculeVideoApply() {
  return (
    <div className="vp-card-preview vp-card-preview-molecule vp-card-preview-molecule-video" aria-hidden="true">
      <div className="vp-molecule-video-shell">
        <div className="vp-molecule-video-screen" />
        <div className="vp-molecule-video-copy">
          <span />
          <span />
        </div>
        <div className="vp-molecule-video-button">Apply</div>
      </div>
      {VIDEO_MOLECULE_ATOMS.map((atom) => (
        <span
          key={atom.id}
          className={`vp-molecule-atom vp-molecule-video-atom vp-molecule-video-atom--${atom.kind}`}
          style={
            {
              "--mol-rest-top": `${atom.restTop}%`,
              "--mol-rest-left": `${atom.restLeft}%`,
              "--mol-slot-top": `${atom.slotTop}%`,
              "--mol-slot-left": `${atom.slotLeft}%`,
              "--mol-delay": `${atom.delay}ms`,
            } as CSSProperties
          }
        />
      ))}
      <div className="vp-molecule-caption">video flow molecule</div>
    </div>
  );
}

/** VPM6 — Atoms pass through a Figma-like library gate */
export function VpOptionMoleculeLibraryGate() {
  return (
    <div className="vp-card-preview vp-card-preview-molecule vp-card-preview-molecule-gate" aria-hidden="true">
      <div className="vp-molecule-gate-rail">
        <span />
        <span />
        <span />
      </div>
      <div className="vp-molecule-gate-frame">
        <span>Library</span>
      </div>
      <div className="vp-molecule-gate-atoms">
        <span className="vp-molecule-gate-atom vp-molecule-gate-atom--one" />
        <span className="vp-molecule-gate-atom vp-molecule-gate-atom--two" />
        <span className="vp-molecule-gate-atom vp-molecule-gate-atom--three" />
      </div>
      <div className="vp-molecule-gate-output">
        <span />
        <span />
        <span />
      </div>
      <div className="vp-molecule-caption">published molecules</div>
    </div>
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

/** VP7 — Many brand pinks become one accessible token */
export function VpOptionPinkWrangler() {
  return (
    <div className="vp-card-preview vp-card-preview-pink" aria-hidden="true">
      <div className="vp-pink-swatch vp-pink-swatch--one" />
      <div className="vp-pink-swatch vp-pink-swatch--two" />
      <div className="vp-pink-swatch vp-pink-swatch--three" />
      <div className="vp-pink-swatch vp-pink-swatch--four" />
      <div className="vp-pink-token">
        <span>Vpply pink</span>
        <strong>AA</strong>
      </div>
      <div className="vp-pink-caption">pink, but behaving</div>
    </div>
  );
}

/** VP8 — Video-first job application flow */
export function VpOptionVideoApplication() {
  return (
    <div className="vp-card-preview vp-card-preview-video" aria-hidden="true">
      <div className="vp-video-card">
        <div className="vp-video-screen">
          <div className="vp-video-play" />
        </div>
        <div className="vp-video-timer">00:10-01:30</div>
      </div>
      <div className="vp-video-form">
        <div />
        <div />
        <div />
      </div>
      <div className="vp-video-cta">Apply</div>
    </div>
  );
}

/** VP9 — Duplicate components get politely rounded up */
export function VpOptionButtonWrangle() {
  return (
    <div className="vp-card-preview vp-card-preview-wrangle" aria-hidden="true">
      <div className="vp-wrangle-lasso" />
      <div className="vp-wrangle-button vp-wrangle-button--one">Apply</div>
      <div className="vp-wrangle-button vp-wrangle-button--two">Apply</div>
      <div className="vp-wrangle-button vp-wrangle-button--three">Apply</div>
      <div className="vp-wrangle-canonical">Button / primary</div>
      <div className="vp-wrangle-caption">button chaos, sorted</div>
    </div>
  );
}

/** VPF1 — The accessible-pink win: a failing swatch passes WCAG AA on hover */
export function VpOptionContrastPass() {
  return (
    <div className="vp-card-preview vp-card-preview-contrast" aria-hidden="true">
      <div className="vp-contrast-swatch">
        <span className="vp-contrast-sample">Apply</span>
        <div className="vp-contrast-meter">
          <span className="vp-contrast-meter-fill" />
        </div>
        <div className="vp-contrast-badge">
          <span className="vp-contrast-ratio vp-contrast-ratio--fail">2.1 : 1</span>
          <span className="vp-contrast-ratio vp-contrast-ratio--pass">AA ✓</span>
        </div>
      </div>
      <div className="vp-contrast-caption">pink that passes</div>
    </div>
  );
}

/** VPF2 — One main component; edits ripple out to every linked instance */
export function VpOptionSourceOfTruth() {
  return (
    <div className="vp-card-preview vp-card-preview-truth" aria-hidden="true">
      <svg className="vp-truth-links" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M50 22 L22 56" />
        <path d="M50 22 L50 56" />
        <path d="M50 22 L78 56" />
      </svg>
      <div className="vp-truth-main">
        <span className="vp-truth-diamond" />
        Button
      </div>
      <div className="vp-truth-instances">
        <div className="vp-truth-instance vp-truth-instance--1">Button</div>
        <div className="vp-truth-instance vp-truth-instance--2">Button</div>
        <div className="vp-truth-instance vp-truth-instance--3">Button</div>
      </div>
      <div className="vp-truth-caption">change one, change all</div>
    </div>
  );
}

/** VPF2b — Source of truth, radial: the main sits centre, instances ring it */
export function VpOptionSourceRadial() {
  return (
    <div className="vp-card-preview vp-card-preview-radial" aria-hidden="true">
      <svg className="vp-radial-links" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M50 50 L50 14" />
        <path d="M50 50 L79 50" />
        <path d="M50 50 L50 78" />
        <path d="M50 50 L21 50" />
      </svg>
      <div className="vp-radial-instance vp-radial-instance--n">Button</div>
      <div className="vp-radial-instance vp-radial-instance--e">Button</div>
      <div className="vp-radial-instance vp-radial-instance--s">Button</div>
      <div className="vp-radial-instance vp-radial-instance--w">Button</div>
      <div className="vp-radial-main">
        <span className="vp-radial-diamond" />
      </div>
      <div className="vp-radial-caption">one source, everywhere</div>
    </div>
  );
}

/** VPF2c — Source of truth, cascade: a rail fills as instances sync downward */
export function VpOptionSourceCascade() {
  return (
    <div className="vp-card-preview vp-card-preview-cascade" aria-hidden="true">
      <div className="vp-cascade-rail">
        <span className="vp-cascade-rail-fill" />
      </div>
      <div className="vp-cascade-main">
        <span className="vp-cascade-diamond" />
        Button
      </div>
      <div className="vp-cascade-instance vp-cascade-instance--1">Button</div>
      <div className="vp-cascade-instance vp-cascade-instance--2">Button</div>
      <div className="vp-cascade-instance vp-cascade-instance--3">Button</div>
      <div className="vp-cascade-caption">push once, sync all</div>
    </div>
  );
}

/** VPF2d — Source of truth, reattach: a drifted duplicate snaps back to source */
export function VpOptionSourceReattach() {
  return (
    <div className="vp-card-preview vp-card-preview-reattach" aria-hidden="true">
      <svg className="vp-reattach-links" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M50 22 L24 54" />
        <path d="M50 22 L51 54" />
        <path className="vp-reattach-broken" d="M50 22 L78 54" />
      </svg>
      <div className="vp-reattach-main">
        <span className="vp-reattach-diamond" />
        Button
      </div>
      <div className="vp-reattach-instance vp-reattach-instance--1">Button</div>
      <div className="vp-reattach-instance vp-reattach-instance--2">Button</div>
      <div className="vp-reattach-instance vp-reattach-instance--3">Button</div>
      <div className="vp-reattach-caption">no more drift</div>
    </div>
  );
}

/** VPF3 — Variant props panel: flip the switches, the component reacts */
export function VpOptionVariantSwitches() {
  return (
    <div className="vp-card-preview vp-card-preview-props" aria-hidden="true">
      <div className="vp-props-stage">
        <span className="vp-props-button">Apply</span>
      </div>
      <div className="vp-props-panel">
        {["Type", "State", "Size"].map((row) => (
          <div key={row} className="vp-props-row">
            <span className="vp-props-label">{row}</span>
            <span className="vp-props-toggle">
              <span className="vp-props-knob" />
            </span>
          </div>
        ))}
      </div>
      <div className="vp-props-caption">props, all wired</div>
    </div>
  );
}

/** VPF3b — Variants, segmented: slide the selector, the button restyles */
export function VpOptionVariantSegments() {
  return (
    <div className="vp-card-preview vp-card-preview-segments" aria-hidden="true">
      <div className="vp-segments-stage">
        <span className="vp-segments-button">Apply</span>
      </div>
      <div className="vp-segments-control">
        <span className="vp-segments-thumb" />
        <span className="vp-segments-seg">Ghost</span>
        <span className="vp-segments-seg">Solid</span>
        <span className="vp-segments-seg">Soft</span>
      </div>
      <div className="vp-segments-caption">pick a variant</div>
    </div>
  );
}

/** VPF3c — Variants, input: an empty field resolves to focused-and-valid */
export function VpOptionVariantInput() {
  return (
    <div className="vp-card-preview vp-card-preview-vinput" aria-hidden="true">
      <div className="vp-vinput-field">
        <span className="vp-vinput-value" />
        <span className="vp-vinput-check" />
      </div>
      <div className="vp-vinput-states">
        <span className="vp-vinput-state">Empty</span>
        <span className="vp-vinput-state">Focus</span>
        <span className="vp-vinput-state">Valid</span>
      </div>
      <div className="vp-vinput-caption">states, all wired</div>
    </div>
  );
}

/** VPF3d — Variants, sliders: token values drive the component's size and radius */
export function VpOptionVariantSliders() {
  return (
    <div className="vp-card-preview vp-card-preview-sliders" aria-hidden="true">
      <div className="vp-sliders-stage">
        <span className="vp-sliders-button">Apply</span>
      </div>
      <div className="vp-sliders-panel">
        {["Size", "Radius"].map((row) => (
          <div key={row} className="vp-sliders-row">
            <span className="vp-sliders-label">{row}</span>
            <span className="vp-sliders-track">
              <span className="vp-sliders-fill" />
              <span className="vp-sliders-knob" />
            </span>
          </div>
        ))}
      </div>
      <div className="vp-sliders-caption">tune the tokens</div>
    </div>
  );
}

/** VPF4 — Haphazard type settles into a Montserrat-style scale */
export function VpOptionTypeSpecimen() {
  return (
    <div className="vp-card-preview vp-card-preview-type" aria-hidden="true">
      <div className="vp-type-specimen">Aa</div>
      <div className="vp-type-lines">
        <span className="vp-type-line vp-type-line--h1" />
        <span className="vp-type-line vp-type-line--h2" />
        <span className="vp-type-line vp-type-line--body" />
        <span className="vp-type-line vp-type-line--caption" />
      </div>
      <div className="vp-type-caption">type, in order</div>
    </div>
  );
}

/** VPF5 — The video-first pitch: ditch the paper, press record */
export function VpOptionResumeToVideo() {
  return (
    <div className="vp-card-preview vp-card-preview-reel" aria-hidden="true">
      <div className="vp-reel-paper vp-reel-paper--back">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="vp-reel-paper vp-reel-paper--front">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="vp-reel-video">
        <div className="vp-reel-play" />
        <div className="vp-reel-timer">0:42</div>
      </div>
      <div className="vp-reel-caption">90 seconds, not 9 pages</div>
    </div>
  );
}

/** VP10 — Tight MVP scope, useful system foundation */
export function VpOptionTwelveWeekKit() {
  return (
    <div className="vp-card-preview vp-card-preview-kit" aria-hidden="true">
      <div className="vp-kit-calendar">
        <span>12 weeks</span>
        <div />
        <div />
        <div />
      </div>
      <div className="vp-kit-stack">
        <div className="vp-kit-piece vp-kit-piece--button">Button</div>
        <div className="vp-kit-piece vp-kit-piece--input">Input</div>
        <div className="vp-kit-piece vp-kit-piece--nav">Nav</div>
      </div>
      <div className="vp-kit-foundation">MVP system</div>
    </div>
  );
}
