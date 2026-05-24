import { Footer } from "../components/Footer";
import { NotFoundContent } from "../components/NotFoundContent";
import { SiteHeader } from "../components/SiteHeader";
import { useHeaderScrollVisibility } from "../hooks/useHeaderScrollVisibility";
import { buildMeta } from "../lib/siteMeta";

export function meta() {
  return [
    ...buildMeta({
      title: "Page not found — Tulsa Daley",
      description:
        "The page you're looking for doesn't exist or may have moved.",
    }),
    { name: "robots", content: "noindex" },
  ];
}

export default function NotFound() {
  const isHeaderVisible = useHeaderScrollVisibility();

  return (
    <div className="min-h-screen pt-[88px]">
      <SiteHeader isVisible={isHeaderVisible} />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <NotFoundContent />
      </main>
      <Footer />
    </div>
  );
}
