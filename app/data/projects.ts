export type Project = {
  id: number;
  title: string;
  tags: string[];
  image: string | null;
  bgColor: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Icons",
    tags: ["Process improvement", "UI Design", "Design System", "Iconography"],
    image: "icon-project-card", // Special marker for imported image
    bgColor: "bg-gray-100",
  },
  {
    id: 2,
    title: "Framework",
    tags: ["UX Research", "Process improvement"],
    image: null,
    bgColor: "bg-gray-100",
  },
  {
    id: 3,
    title: "Multi-level grouping",
    tags: ["UI Design", "Data Table"],
    image: null,
    bgColor: "bg-gray-100",
  },
  {
    id: 4,
    title: "Toolbar",
    tags: ["Design System", "Process improvement"],
    image: null,
    bgColor: "bg-gray-100",
  },
  {
    id: 5,
    title: "Tables",
    tags: ["AI", "UX Research"],
    image: null,
    bgColor: "bg-gray-100",
  },
  {
    id: 6,
    title: "Vpply design system",
    tags: ["UI Design", "Data Table", "Process improvement"],
    image: null,
    bgColor: "bg-gray-100",
  },
];
