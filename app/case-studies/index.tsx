import type { Project } from "../data/projects";
import type { ReactElement } from "react";
import { IconsCaseStudy } from "./icons";

export type CaseStudyComponent = (props: { project: Project }) => ReactElement;

// Map of project IDs to their case study components
export const caseStudyComponents: Record<number, CaseStudyComponent> = {
  1: IconsCaseStudy,
  // Add more projects here as you create their case study components:
  // 2: FrameworkCaseStudy,
  // 3: MultiLevelGroupingCaseStudy,
  // etc.
};

export function getCaseStudyComponent(projectId: number): CaseStudyComponent | undefined {
  return caseStudyComponents[projectId];
}
