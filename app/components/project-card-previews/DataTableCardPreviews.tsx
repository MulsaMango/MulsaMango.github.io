import type { CSSProperties } from "react";

type ScatterRow = {
  id: string;
  restTop: number;
  restLeft: number;
  slotTop: number;
  slotLeft: number;
  restRotate: number;
  delay: number;
  zebra: boolean;
  badge?: "critical" | "warn" | "info";
};

const SCATTER_ROWS: ScatterRow[] = [
  { id: "r1", restTop: 24, restLeft: 28, slotTop: 28, slotLeft: 50, restRotate: -8, delay: 0, zebra: true },
  { id: "r2", restTop: 38, restLeft: 72, slotTop: 38, slotLeft: 50, restRotate: 6, delay: 40, zebra: false, badge: "info" },
  { id: "r3", restTop: 52, restLeft: 22, slotTop: 48, slotLeft: 50, restRotate: -5, delay: 80, zebra: true },
  { id: "r4", restTop: 66, restLeft: 68, slotTop: 58, slotLeft: 50, restRotate: 9, delay: 120, zebra: false, badge: "warn" },
  { id: "r5", restTop: 78, restLeft: 38, slotTop: 68, slotLeft: 50, restRotate: -7, delay: 160, zebra: true, badge: "critical" },
];

type FloatingChip = {
  id: string;
  label: string;
  restTop: number;
  restLeft: number;
  restRotate: number;
  slot: number;
  delay: number;
};

const FLOATING_CHIPS: FloatingChip[] = [
  { id: "c1", label: "Status", restTop: 18, restLeft: 18, restRotate: -12, slot: 8, delay: 0 },
  { id: "c2", label: "Date range", restTop: 28, restLeft: 62, restRotate: 8, slot: 34, delay: 60 },
  { id: "c3", label: "Region", restTop: 12, restLeft: 44, restRotate: -4, slot: 58, delay: 120 },
  { id: "c4", label: "Saved set", restTop: 22, restLeft: 82, restRotate: 14, slot: 78, delay: 180 },
];

function TableWireframe() {
  return (
    <div className="dt-stack-table" aria-hidden="true">
      <div className="dt-stack-table-head">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="dt-stack-table-body">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

/** DT1 — Feature stack (Filters / Grouping / Display mode fan over table) */
export function DtOptionFeatureStack() {
  return (
    <div className="dt-card-preview dt-card-preview-stack" aria-hidden="true">
      <TableWireframe />
      <div className="dt-stack-layer dt-stack-layer--filters">Filters</div>
      <div className="dt-stack-layer dt-stack-layer--grouping">Grouping</div>
      <div className="dt-stack-layer dt-stack-layer--display">Display mode</div>
    </div>
  );
}

/** DT2 — Scattered rows snap into a scannable table */
export function DtOptionRowScatter() {
  return (
    <div className="dt-card-preview dt-card-preview-scatter" aria-hidden="true">
      <div className="dt-scatter-head">
        <span />
        <span />
        <span />
        <span />
      </div>
      {SCATTER_ROWS.map((row) => (
        <div
          key={row.id}
          className={`dt-scatter-row${row.zebra ? " dt-scatter-row--zebra" : ""}`}
          style={
            {
              "--row-rest-top": `${row.restTop}%`,
              "--row-rest-left": `${row.restLeft}%`,
              "--row-slot-top": `${row.slotTop}%`,
              "--row-slot-left": `${row.slotLeft}%`,
              "--row-rest-rotate": `${row.restRotate}deg`,
              "--row-delay": `${row.delay}ms`,
            } as CSSProperties
          }
        >
          <span />
          <span />
          {row.badge ? (
            <span className={`dt-scatter-badge dt-scatter-badge--${row.badge}`} />
          ) : (
            <span />
          )}
        </div>
      ))}
    </div>
  );
}

/** DT3 — Filter chips float, then snap into a strip */
export function DtOptionFilterSnap() {
  return (
    <div className="dt-card-preview dt-card-preview-filter-snap" aria-hidden="true">
      <div className="dt-snap-rail" />
      {FLOATING_CHIPS.map((chip) => (
        <span
          key={chip.id}
          className="dt-snap-chip"
          style={
            {
              "--chip-rest-top": `${chip.restTop}%`,
              "--chip-rest-left": `${chip.restLeft}%`,
              "--chip-rest-rotate": `${chip.restRotate}deg`,
              "--chip-slot-left": `${chip.slot}%`,
              "--chip-delay": `${chip.delay}ms`,
            } as CSSProperties
          }
        >
          {chip.label}
        </span>
      ))}
      <div className="dt-snap-table">
        <div className="dt-snap-table-row dt-snap-table-row--zebra">
          <span />
          <span />
          <span className="dt-scatter-badge dt-scatter-badge--critical" />
        </div>
        <div className="dt-snap-table-row">
          <span />
          <span />
          <span className="dt-scatter-badge dt-scatter-badge--warn" />
        </div>
        <div className="dt-snap-table-row dt-snap-table-row--zebra">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

/** DT4 — Display table morphs into editable grid */
export function DtOptionModeMorph() {
  return (
    <div className="dt-card-preview dt-card-preview-morph" aria-hidden="true">
      <div className="dt-morph-display">
        <div className="dt-morph-label">Display</div>
        <div className="dt-morph-rows">
          <div className="dt-morph-row dt-morph-row--zebra"><span /><span /><span /></div>
          <div className="dt-morph-row"><span /><span /><span /></div>
          <div className="dt-morph-row dt-morph-row--zebra dt-morph-row--hot"><span /><span /><span /></div>
          <div className="dt-morph-row"><span /><span /><span /></div>
        </div>
      </div>
      <div className="dt-morph-editable">
        <div className="dt-morph-label">Editable</div>
        <div className="dt-morph-grid">
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              className={`dt-morph-cell${index === 6 ? " dt-morph-cell--active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** DT5 — Group headers peel open with nested rows */
function GroupPeelPreview({ variant }: { variant?: string }) {
  const variantClass = variant ? `dt-card-preview-peel--${variant}` : "";

  return (
    <div
      className={`dt-card-preview dt-card-preview-peel ${variantClass}`.trim()}
      aria-hidden="true"
    >
      <div className="dt-peel-rail" />
      <div className="dt-peel-group dt-peel-group--root">
        <div className="dt-peel-header">
          <span className="dt-peel-chevron" />
          <span className="dt-peel-title">Region · APAC</span>
          <span className="dt-peel-meta">24</span>
          <span className="dt-peel-aggregate">Σ 18.2k</span>
        </div>
        <div className="dt-peel-body">
          <div className="dt-peel-group dt-peel-group--nested">
            <div className="dt-peel-header">
              <span className="dt-peel-chevron" />
              <span className="dt-peel-title">Sydney</span>
              <span className="dt-peel-meta">11</span>
              <span className="dt-peel-aggregate">Σ 9.1k</span>
            </div>
            <div className="dt-peel-rows">
              <div className="dt-peel-row dt-peel-row--zebra">
                <span />
                <span />
              </div>
              <div className="dt-peel-row">
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="dt-peel-group dt-peel-group--nested dt-peel-group--shut">
            <div className="dt-peel-header">
              <span className="dt-peel-chevron" />
              <span className="dt-peel-title">Melbourne</span>
              <span className="dt-peel-meta">13</span>
              <span className="dt-peel-aggregate">Σ 9.1k</span>
            </div>
            <div className="dt-peel-rows dt-peel-rows--hidden">
              <div className="dt-peel-row dt-peel-row--zebra">
                <span />
                <span />
              </div>
              <div className="dt-peel-row">
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DtOptionGroupPeel() {
  return <GroupPeelPreview />;
}

export function DtOptionG2SequentialOpen() {
  return <GroupPeelPreview variant="sequential" />;
}

export function DtOptionG3Accordion() {
  return <GroupPeelPreview variant="accordion" />;
}

export function DtOptionG4IndentRails() {
  return <GroupPeelPreview variant="rails" />;
}

export function DtOptionG5AggregateReveal() {
  return <GroupPeelPreview variant="aggregate" />;
}

export function DtOptionG6CascadeShut() {
  return <GroupPeelPreview variant="cascade" />;
}

/** DT6 — Dense noise resolves into one expert-sharp row */
export function DtOptionExpertFocus() {
  return (
    <div className="dt-card-preview dt-card-preview-focus" aria-hidden="true">
      <div className="dt-focus-noise">
        {Array.from({ length: 14 }, (_, index) => (
          <div
            key={index}
            className="dt-focus-line"
            style={{ "--line-delay": `${index * 20}ms` } as CSSProperties}
          />
        ))}
      </div>
      <div className="dt-focus-row">
        <span />
        <span />
        <span />
        <span className="dt-scatter-badge dt-scatter-badge--critical" />
      </div>
      <div className="dt-focus-caption">Expert scan</div>
    </div>
  );
}