import { useLocation, Link } from "react-router";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import { getCaseStudyComponent } from "../case-studies";
import { Footer } from "../components/Footer";
import { IconProjectPreview } from "../components/IconProjectPreview";

export default function Landing() {
  const location = useLocation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsHeaderVisible(true);
      }
      // Hide header when scrolling down (but only after scrolling past a threshold)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: "/", label: "WORK" },
    { href: "/about", label: "ABOUT" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#fefefe] transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 0, 0, 0.12) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <a
            href="/"
            className="font-display text-base font-medium text-gray-600 hover:!text-gray-600"
          >
            TULSA <span className="logo-separator" aria-hidden="true"></span>{" "}
            DALEY
          </a>
          <nav className="flex gap-6">
            {navItems.map((item) => {
              const normPath = location.pathname.replace(/\/+$/, "") || "/";
              const isActive = normPath === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-display text-sm relative inline-block transition-colors ${
                    isActive
                      ? "text-gray-900 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:font-medium"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 h-4 -z-10 highlight-active"
                      style={{
                        left: "-4px",
                        right: "-8px",
                        background: `linear-gradient(120deg, rgba(71, 221, 78, 0.25) 0%, rgba(71, 221, 78, 0.3) 50%, rgba(71, 221, 78, 0.25) 100%)`,
                        transform: "rotate(-0.3deg)",
                        borderRadius: "2px",
                        boxShadow: "0 1px 2px rgba(71, 221, 78, 0.1)",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

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
              Ahoy, I'm Tulsa.
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-500 leading-[1.75]">
              A product designer with a design systems backbone, strong UI
              craft, and a growing AI-enabled practice that connects design,
              systems, and code to shape better solutions for complex product
              problems.
            </p>
            <p className="border-t border-gray-200/80 pt-3 text-sm text-gray-500 font-sans leading-relaxed">
              <span className="grid grid-cols-[16px_1fr] items-start gap-x-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-[3px] h-4 w-4 shrink-0 text-gray-400"
                  aria-hidden
                >
                  <title>Location</title>
                  <path d="M12 2.75c-3.1 0-5.45 2.43-5.45 5.65 0 4.57 4.42 9.92 5.14 10.76a.4.4 0 0 0 .62 0c.72-.84 5.14-6.19 5.14-10.76 0-3.22-2.35-5.65-5.45-5.65zm0 8.35a2.55 2.55 0 1 1 0-5.1 2.55 2.55 0 0 1 0 5.1z" />
                </svg>
                <span>
                  Working on design systems for enterprise software @{" "}
                  <a
                    href="https://www.cargowise.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#3CBC42] underline underline-offset-2 transition-colors"
                  >
                    WiseTech Global
                  </a>
                </span>
              </span>
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
                  {project.id === 1 ? (
                    <IconProjectPreview />
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
                        className="inline-block origin-center text-gray-600 text-sm font-medium motion-safe:transition-transform motion-safe:duration-[640ms] motion-safe:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.08] motion-safe:group-focus-visible:scale-[1.08]"
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
