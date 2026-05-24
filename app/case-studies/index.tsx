import type { Project } from "../data/projects";
import type { ReactElement } from "react";
import { FrameworkRedesignCaseStudy } from "./framework-redesign";
import { IconsCaseStudy } from "./icons";
import { MultiLevelGroupingCaseStudy } from "./multi-level-grouping";

export type CaseStudyComponent = (props: { project: Project }) => ReactElement;

// A "full" study stands on its own. A "snapshot" is a condensed highlight reel,
// so it gets the snapshot call-out inviting the reader to reach out for the full
// walkthrough (see CaseStudySnapshotCallout). The icon system is the one full
// write-up; everything else is a snapshot.
type CaseStudy = {
  component: CaseStudyComponent;
  format: "full" | "snapshot";
};

// Map of project IDs to their case studies
export const caseStudies: Record<number, CaseStudy> = {
  1: { component: IconsCaseStudy, format: "full" },
  4: { component: MultiLevelGroupingCaseStudy, format: "snapshot" },
  5: { component: FrameworkRedesignCaseStudy, format: "snapshot" },
  // etc.
};

export function getCaseStudyComponent(projectId: number): CaseStudyComponent | undefined {
  return caseStudies[projectId]?.component;
}

export function isCaseStudySnapshot(projectId: number): boolean {
  return caseStudies[projectId]?.format === "snapshot";
}
