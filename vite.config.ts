import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    // These deps live only in deeply-nested route modules (the Figma Make
    // prototype + its UI kit). In SPA mode React Router loads routes through a
    // virtual manifest, so Vite's cold-start scanner doesn't reach them and
    // discovers them mid-request instead — which re-bundles, bumps the dep
    // hash, and triggers a reload. In-flight imports then 504 with "Outdated
    // Optimize Dep", leaving a blank page on the very first load. Pre-listing
    // them puts everything in the first optimize pass, so no mid-load reload.
    include: [
      "clsx",
      "tailwind-merge",
      "class-variance-authority",
      "lucide-react",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
      "@radix-ui/react-switch",
    ],
  },
});
