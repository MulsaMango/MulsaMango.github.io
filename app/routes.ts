import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/landing.tsx"),
  route("about", "routes/about.tsx"),
  route("project/:id", "routes/project.$id.tsx"),
  route("project-card-options", "routes/project-card-options.tsx"),
] satisfies RouteConfig;
