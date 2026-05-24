import "./data-table-card-previews.css";

function GroupPeelPreview() {
  return (
    <div
      className="dt-card-preview dt-card-preview-peel dt-card-preview-peel--sequential"
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

export function DtOptionG2SequentialOpen() {
  return <GroupPeelPreview />;
}
