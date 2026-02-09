import { useLocation, Link } from "react-router";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import { getCaseStudyComponent } from "../case-studies";
import iconProjectCard from "../case-studies/icons-images/icon-project-card.png";
import { Footer } from "../components/Footer";

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
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
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
          <a href="/" className="text-base font-medium text-gray-600 hover:!text-gray-600">
            Tulsa <span className="logo-separator" aria-hidden="true"></span> Daley
          </a>
          <nav className="flex gap-6">
            {navItems.map((item) => {
              const normPath = location.pathname.replace(/\/+$/, "") || "/";
              const isActive = normPath === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
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
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            <p className="font-mono text-base md:text-lg text-gray-600 leading-relaxed">
              An experienced designer who thinks in systems, loves visual craft,
              and is getting comfy in code.
            </p>
            <p className="text-sm text-gray-500 font-mono leading-relaxed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 inline-block align-text-bottom mr-1.5 shrink-0"
                aria-hidden
              >
                <title>Location</title>
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              Currently doing Design Systems at{" "}
              <a
                href="https://www.cargowise.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 underline underline-offset-2"
              >
                WiseTech Global
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Selected work
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id || project.title}
              to={`/project/${project.id}`}
              className="group cursor-pointer block"
              style={{ cursor: "pointer" }}
            >
              {/* Project Image Placeholder */}
              <div
                className="w-full aspect-square bg-gray-100 rounded-md mb-3 flex items-center justify-center overflow-hidden border border-gray-300 group-hover:shadow-sm transition-all"
                style={{ cursor: "pointer" }}
              >
                {project.image ? (
                  <img
                    src={project.id === 1 ? iconProjectCard : project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover ${project.id === 1 ? "icon-project-image" : ""}`}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <div
                    className={`w-full h-full ${project.bgColor || "bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200"} flex items-center justify-center`}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="text-gray-600 text-sm font-medium">
                      {getCaseStudyComponent(project.id)
                        ? project.title
                        : "Coming soon"}
                    </div>
                  </div>
                )}
              </div>
              {/* Project Text */}
              <div className="text-sm" style={{ cursor: "pointer" }}>
                <div className="font-medium mb-2 text-gray-900">{project.title}</div>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-0.5 text-xs font-mono bg-gray-100 text-gray-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
