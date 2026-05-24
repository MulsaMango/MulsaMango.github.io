import { IconProjectPreview } from "./IconProjectPreview";
import { DtOptionG2SequentialOpen } from "./project-card-previews/DataTableCardPreviews";
import { FrProjectCardFullReveal } from "./project-card-previews/FrameworkShellCardPreviews";
import { OptionA1SequentialFan } from "./project-card-previews/ProjectCardPreviews";
import "./project-card-previews/data-table-card-previews.css";
import "./project-card-previews/framework-shell-card-previews.css";
import "./project-card-previews/project-card-previews.css";

const PREVIEW_PROJECT_IDS = new Set([1, 3, 4, 5]);

type ProjectCardPreviewProps = {
  projectId: number;
  compact?: boolean;
};

export function hasProjectCardPreview(projectId: number): boolean {
  return PREVIEW_PROJECT_IDS.has(projectId);
}

export function ProjectCardPreview({
  projectId,
  compact = false,
}: ProjectCardPreviewProps) {
  switch (projectId) {
    case 1:
      return <IconProjectPreview compact={compact} />;
    case 3:
      return <OptionA1SequentialFan />;
    case 4:
      return <DtOptionG2SequentialOpen />;
    case 5:
      return <FrProjectCardFullReveal />;
    default:
      return null;
  }
}
