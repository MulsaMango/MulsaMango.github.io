import "./framework-shell-card-previews.css";

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

function BeforeAfterPreview() {
  return (
    <div
      className="fr-card-preview fr-card-preview-before-after fr-card-preview-before-after--full fr-card-preview-before-after--no-labels"
      aria-hidden="true"
    >
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

export function FrProjectCardFullReveal() {
  return <BeforeAfterPreview />;
}
