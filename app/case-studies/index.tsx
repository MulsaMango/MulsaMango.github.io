import type { Project } from "../data/projects";
import type { ReactElement } from "react";
import { FrameworkRedesignCaseStudy } from "./framework-redesign";
import { IconsCaseStudy } from "./icons";
import { MultiLevelGroupingCaseStudy } from "./multi-level-grouping";

export type CaseStudyComponent = (props: { project: Project }) => ReactElement;

// Map of project IDs to their case study components
export const caseStudyComponents: Record<number, CaseStudyComponent> = {
  1: IconsCaseStudy,
  4: MultiLevelGroupingCaseStudy,
  5: FrameworkRedesignCaseStudy,
  // etc.
};

export function getCaseStudyComponent(projectId: number): CaseStudyComponent | undefined {
  return caseStudyComponents[projectId];
}
