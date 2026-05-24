import { Link } from "react-router";
import { projects } from "../data/projects";
import { getCaseStudyComponent } from "../case-studies";
import { Footer } from "../components/Footer";
import { SiteHeader } from "../components/SiteHeader";
import {
  hasProjectCardPreview,
  ProjectCardPreview,
} from "../components/ProjectCardPreview";
import { CurrentlyWorking } from "../components/CurrentlyWorking";
import { useHeaderScrollVisibility } from "../hooks/useHeaderScrollVisibility";
import { HEADLINE, TAGLINE } from "../lib/profile";
import { buildMeta } from "../lib/siteMeta";

export function meta() {
  return buildMeta({
    title: "Tulsa Daley — Product Designer",
    description:
      "Product designer with a design systems backbone, strong UI craft, and a growing AI-enabled practice connecting design, systems, and code.",
    path: "/",
  });
}

export default function Landing() {
  const isHeaderVisible = useHeaderScrollVisibility();

  return (
    <div className="min-h-screen">
      <SiteHeader isVisible={isHeaderVisible} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Hero Image */}
          <div className="w-full aspect-square flex items-center justify-center">
            <img
              src="/hero-image-portfolio.gif"
              alt="Tulsa - Designer"
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Hero Text */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-800">
              {HEADLINE}
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-500 leading-[1.75]">
              {TAGLINE}
            </p>
            <p className="border-t border-gray-200/80 pt-3 text-sm text-gray-500 font-sans leading-relaxed">
              <CurrentlyWorking />
            </p>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section id="work" className="max-w-7xl mx-auto px-6 pt-0 pb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Selected work
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const hasCaseStudy = Boolean(getCaseStudyComponent(project.id));
            const cardInner = (
              <>
                {/* Project Image Placeholder */}
                <div className="w-full aspect-square bg-gray-100 rounded-md mb-3 flex items-center justify-center overflow-hidden border border-gray-300 group-hover:shadow-sm transition-all">
                  {hasProjectCardPreview(project.id) ? (
                    <ProjectCardPreview projectId={project.id} />
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className={`w-full h-full ${project.bgColor || "bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200"} flex items-center justify-center`}
                    >
                      <div
                        className="inline-block origin-center px-4 text-center text-gray-600 text-sm font-medium motion-safe:transition-transform motion-safe:duration-[640ms] motion-safe:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.08] motion-safe:group-focus-visible:scale-[1.08]"
                      >
                        {getCaseStudyComponent(project.id)
                          ? project.title
                          : "Coming soon"}
                      </div>
                    </div>
                  )}
                </div>
                {/* Project Text */}
                <div className="text-sm">
                  <div className="font-medium mb-2 text-gray-900">
                    {project.title}
                  </div>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-1.5 py-0.5 text-[0.625rem] font-display uppercase tracking-[0.06em] bg-gray-100 border border-gray-200 text-gray-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </>
            );

            return hasCaseStudy ? (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group cursor-pointer block"
              >
                {cardInner}
              </Link>
            ) : (
              <div key={project.id} className="group block cursor-default">
                {cardInner}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
