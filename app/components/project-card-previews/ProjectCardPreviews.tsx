import "./project-card-previews.css";

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

function LayerStackPreview() {
  return (
    <div
      className="ai-card-preview ai-card-preview-a ai-card-preview-a--sequential"
      aria-hidden="true"
    >
      <LayerStackWireframe />
      <div className="ai-card-a-layer ai-card-a-layer--ds">Design system</div>
      <div className="ai-card-a-layer ai-card-a-layer--domain">Domain context</div>
      <div className="ai-card-a-layer ai-card-a-layer--product">Product layer</div>
    </div>
  );
}

export function OptionA1SequentialFan() {
  return <LayerStackPreview />;
}
