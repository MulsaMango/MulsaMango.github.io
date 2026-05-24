import type { Project } from "../data/projects";
import type { ReactElement } from "react";
import { AiPrototypingCaseStudy } from "./ai-prototyping";
import { FrameworkRedesignCaseStudy } from "./framework-redesign";
import { IconsCaseStudy } from "./icons";
import { MultiLevelGroupingCaseStudy } from "./multi-level-grouping";
import { VpplyDesignSystemCaseStudy } from "./vpply-design-system";

export type CaseStudyComponent = (props: { project: Project }) => ReactElement;

// Map of project IDs to their case study components
export const caseStudyComponents: Record<number, CaseStudyComponent> = {
  1: IconsCaseStudy,
  3: AiPrototypingCaseStudy,
  4: MultiLevelGroupingCaseStudy,
  5: FrameworkRedesignCaseStudy,
  6: VpplyDesignSystemCaseStudy,
  // etc.
};

export function getCaseStudyComponent(projectId: number): CaseStudyComponent | undefined {
  return caseStudyComponents[projectId];
}
