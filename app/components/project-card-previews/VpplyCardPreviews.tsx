import type { CSSProperties } from "react";
import "./vpply-card-previews.css";

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

const SEARCH_MODULE_TIGHT: SearchPiece[] = [
  { id: "heading", kind: "heading", restTop: 27, restLeft: 72, restRotate: -4, fitTop: 42, fitLeft: 13, fitWidth: "44%", fitHeight: "2.6%", delay: 0 },
  { id: "field", kind: "field", restTop: 67, restLeft: 28, restRotate: 3, fitTop: 47, fitLeft: 13, fitWidth: "54%", fitHeight: "11.5%", delay: 80 },
  { id: "icon", kind: "icon", restTop: 24, restLeft: 34, restRotate: -7, fitTop: 50.75, fitLeft: 15, fitWidth: "4%", fitHeight: "4%", delay: 160 },
  { id: "placeholder", kind: "placeholder", restTop: 69, restLeft: 71, restRotate: 2, fitTop: 51, fitLeft: 23.5, fitWidth: "34%", fitHeight: "2.6%", delay: 220 },
  { id: "btn", kind: "btn", restTop: 36, restLeft: 48, restRotate: -3, fitTop: 47, fitLeft: 69.5, fitWidth: "18%", fitHeight: "11.5%", delay: 300 },
];

function SearchComposePreview() {
  return (
    <div
      className="vp-card-preview vp-search-compose vp-search-compose--module-tight"
      aria-hidden="true"
    >
      <div className="vp-search-shell" />
      {SEARCH_MODULE_TIGHT.map((piece) => (
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
    </div>
  );
}

export function VpProjectCardSearchModule() {
  return <SearchComposePreview />;
}
