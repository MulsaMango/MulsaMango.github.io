import App from "./prototype/App";

// Single mount point for the Figma Make prototype. The wrapper class scopes the
// shadcn design tokens (see theme.css) so they never touch the portfolio's
// global styles. Props are accepted to satisfy CaseStudyComponent but unused —
// the prototype is self-contained.
export function MultiLevelGroupingCaseStudy() {
  return (
    <div className="multi-level-grouping-embed">
      <App />
    </div>
  );
}
