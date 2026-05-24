import type { ComponentType } from "react";
import { IconProjectPreview } from "../components/IconProjectPreview";
import { DtOptionG2SequentialOpen } from "../components/project-card-previews/DataTableCardPreviews";
import { FrProjectCardFullReveal } from "../components/project-card-previews/FrameworkShellCardPreviews";
import { OptionA1SequentialFan } from "../components/project-card-previews/ProjectCardPreviews";
import { VpProjectCardSearchModule } from "../components/project-card-previews/VpplyCardPreviews";

export type ProjectCardPreviewProps = {
  compact?: boolean;
};

export type Project = {
  id: number;
  title: string;
  tags: string[];
  image: string | null;
  bgColor: string;
  CardPreview?: ComponentType<ProjectCardPreviewProps>;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Building a scalable icon system",
    tags: ["Process improvement", "UI design", "Design system", "Iconography"],
    image: null,
    bgColor: "bg-gray-100",
    CardPreview: IconProjectPreview,
  },
  {
    id: 3,
    title: "Building an AI prototyping environment for designers",
    tags: ["Design system", "AI", "Tooling"],
    image: null,
    bgColor: "bg-gray-100",
    CardPreview: OptionA1SequentialFan,
  },
  {
    id: 4,
    title: "Designing for complex data tables",
    tags: ["UI design", "Interaction design", "AI"],
    image: null,
    bgColor: "bg-gray-100",
    CardPreview: DtOptionG2SequentialOpen,
  },
  {
    id: 5,
    title: "Rebuilding the product shell",
    tags: ["UX research", "Design system", "UI design", "AI"],
    image: null,
    bgColor: "bg-gray-100",
    CardPreview: FrProjectCardFullReveal,
  },
  {
    id: 6,
    title: "Building a startup's first design system",
    tags: ["Design system", "UI design", "Process improvement"],
    image: null,
    bgColor: "bg-gray-100",
    CardPreview: VpProjectCardSearchModule,
  },
  {
    id: 7,
    title: "Coming soon",
    tags: ["Product design"],
    image: null,
    bgColor: "bg-gray-100",
  },
];
