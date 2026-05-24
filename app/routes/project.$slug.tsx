import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import { getCaseStudyComponent, isCaseStudySnapshot } from "../case-studies";
import { CaseStudySnapshotCallout } from "../case-studies/case-study-callout";
import { Image } from "../case-studies/case-study-image";
import { TableOfContents } from "../components/TableOfContents";
import { InteractiveBanner } from "../components/InteractiveBanner";
import { Footer } from "../components/Footer";
import { SiteHeader } from "../components/SiteHeader";
import { useHeaderScrollVisibility } from "../hooks/useHeaderScrollVisibility";
import { buildMeta } from "../lib/siteMeta";
import type { Route } from "./+types/project.$slug";
import aiPrototypingHero from "../case-studies/ai-prototyping/images/prototyping-playground-claude-code-session-warehouse-dashboard.png";
import { BeforeAfterSlider } from "../case-studies/framework-redesign/index";

export function meta({ params }: Route.MetaArgs) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return buildMeta({
      title: "Project not found — Tulsa Daley",
      description: "This project could not be found.",
      path: `/project/${params.slug}`,
    });
  }

  return buildMeta({
    title: `${project.title} — Tulsa Daley`,
    description: `${project.title}. A case study by product designer Tulsa Daley.`,
    path: `/project/${project.slug}`,
  });
}

export default function Project() {
  const { slug } = useParams();
  const isHeaderVisible = useHeaderScrollVisibility();

  const project = projects.find((p) => p.slug === slug);
  const CaseStudyComponent = project ? getCaseStudyComponent(project.id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen pt-[88px]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[88px]">
      <SiteHeader isVisible={isHeaderVisible} />

      {/* Table of Contents - only show for case studies */}
      {CaseStudyComponent && <TableOfContents />}

      {/* Project Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <title>Back</title>
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            {project.title}
          </h1>
        </div>

        {project.id === 1 && (
          <div className="mb-12">
            <InteractiveBanner />
          </div>
        )}

        {/* Case Study Content */}
        {CaseStudyComponent ? (
          <div className="case-study-paper-wash">
            {project.id === 3 && (
              <div className="mb-6">
                <Image
                  src={aiPrototypingHero}
                  alt="The Prototyping Playground in use - Claude Code running the design-advisory skill on the left, with the resulting warehouse management dashboard prototype in a browser on the right"
                  caption="The 'Prototyping Playground' - Claude Code on the left, the generated prototype on the right."
                  className="w-full h-auto rounded-sm shadow-sm"
                  lightbox
                />
              </div>
            )}
            {project.id === 5 && (
              <div className="mb-6">
                <BeforeAfterSlider />
              </div>
            )}
            {isCaseStudySnapshot(project.id) && (
              <CaseStudySnapshotCallout
                body={project.id === 6
                  ? "This project was completed in early 2023, before many of the advances in Figma and AI that have since changed how this kind of work gets done!"
                  : undefined}
              />
            )}
            <CaseStudyComponent project={project} />
          </div>
        ) : (
          <div className="case-study-paper-wash">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Project content will go here. This is a placeholder for the project details,
                case study, or any other content you'd like to display.
              </p>
            </div>
          </div>
        )}

        {/* More Projects Section */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">See more of my work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject) => {
                const hasOtherCaseStudy = Boolean(getCaseStudyComponent(otherProject.id));
                const OtherCardPreview = otherProject.CardPreview;
                const cardInner = (
                  <>
                    <div className="w-full aspect-square bg-gray-100 rounded-md mb-2 flex items-center justify-center overflow-hidden border border-gray-300 group-hover:shadow-sm transition-all">
                      {OtherCardPreview ? (
                        <OtherCardPreview compact />
                      ) : otherProject.image ? (
                        <img
                          src={otherProject.image}
                          alt={otherProject.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full ${otherProject.bgColor} flex items-center justify-center`}>
                          <div className="px-4 text-center text-gray-600 text-sm font-medium">
                            {getCaseStudyComponent(otherProject.id)
                              ? otherProject.title
                              : "Coming soon"}
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className={`text-sm font-medium text-gray-900${hasOtherCaseStudy ? " group-hover:text-gray-700" : ""}`}
                    >
                      {otherProject.title}
                    </div>
                  </>
                );

                return hasOtherCaseStudy ? (
                  <Link
                    key={otherProject.id}
                    to={`/project/${otherProject.slug}`}
                    className="group block cursor-pointer"
                  >
                    {cardInner}
                  </Link>
                ) : (
                  <div key={otherProject.id} className="group block cursor-default">
                    {cardInner}
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
