import type { Config } from "@react-router/dev/config";
import { projects } from "./app/data/projects";

export default {
  // SPA build: no server, just static HTML + client JS.
  ssr: false,
  // Enumerate every path explicitly so the dynamic /project/:id pages are
  // prerendered to real HTML too. A non-prerendered route falls back to the
  // client-rendered SPA shell, and Figma's link crawler doesn't run JS — so its
  // per-project meta tags would never be seen without listing the paths here.
  async prerender() {
    return ["/", "/about", ...projects.map((project) => `/project/${project.id}`)];
  },
} satisfies Config;
