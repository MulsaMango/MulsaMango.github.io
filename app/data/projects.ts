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
    title: "AI prototyping tool for enterprise",
    tags: ["Design system", "AI", "Tooling"],
    image: null,
    bgColor: "bg-gray-100",
  },
  {
    id: 4,
    title: "Complex data table design and interaction",
    tags: ["UI design", "Interaction design"],
    image: null,
    bgColor: "bg-gray-100",
  },
  {
    id: 5,
    title: "Core framework redesign",
    tags: ["UX research", "Design system", "UI design"],
    image: null,
    bgColor: "bg-gray-100",
  },
  {
    id: 6,
    title: "Vpply design system",
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
