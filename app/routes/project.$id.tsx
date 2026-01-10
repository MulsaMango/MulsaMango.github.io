import { useParams, Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import { getCaseStudyComponent } from "../case-studies";

export default function Project() {
  const { id } = useParams();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const project = projects.find((p) => p.id === Number(id));
  const CaseStudyComponent = project ? getCaseStudyComponent(project.id) : undefined;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
  ];

  const location = useLocation();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(location.pathname);
  }, [location]);

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
          <Link to="/" className="text-base font-medium text-gray-600">
            Tulsa <span className="logo-separator">⟡</span> Designer
          </Link>
          <nav className="flex gap-6">
            {navItems.map((item) => {
              const isActive =
                (item.href === "/" && location.pathname === "/") ||
                (item.href === "/about" && location.pathname === "/about");
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm relative inline-block transition-colors ${
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
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

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
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block px-2.5 py-1 text-xs font-mono bg-gray-100 text-gray-700 rounded"
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

        {/* Project Image/Placeholder */}
        <div className="w-full aspect-video bg-gray-100 rounded-lg mb-12 flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className={`w-full h-full ${project.bgColor} flex items-center justify-center`}
            >
              <div className="text-gray-600 text-lg font-medium">{project.title}</div>
            </div>
          )}
        </div>

        {/* Case Study Content */}
        {CaseStudyComponent ? (
          <div className="case-study-paper-wash">
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
      </div>
    </div>
  );
}

