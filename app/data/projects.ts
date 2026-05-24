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
    title: "Building a scalable icon system",
    tags: ["Process improvement", "UI design", "Design system", "Iconography"],
    image: "icon-project-card", // Special marker for imported image
    bgColor: "bg-gray-100",
  },
  {
    id: 3,
    title: "Building an AI prototyping environment for designers",
    tags: ["Design system", "AI", "Tooling"],
    image: null,
    bgColor: "bg-gray-100",
  },
  {
    id: 4,
    title: "Designing for complex data tables",
    tags: ["UI design", "Interaction design", "AI"],
    image: null,
    bgColor: "bg-gray-100",
  },
  {
    id: 5,
    title: "Rebuilding the product shell",
    tags: ["UX research", "Design system", "UI design", "AI"],
    image: null,
    bgColor: "bg-gray-100",
  },
  {
    id: 6,
    title: "Building a startup's first design system",
    tags: ["Design system", "UI design", "Process improvement"],
    image: null,
    bgColor: "bg-gray-100",
  },
  {
    id: 7,
    title: "Coming soon",
    tags: ["Product design"],
    image: null,
    bgColor: "bg-gray-100",
  },
];
