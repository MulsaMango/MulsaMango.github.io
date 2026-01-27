import { useLocation, Link } from "react-router";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import iconProjectCard from "../case-studies/icons-images/icon-project-card.png";

export default function Landing() {
  const location = useLocation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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
          <a href="/" className="text-base font-medium text-gray-600">
            Tulsa <span className="logo-separator">⟡</span> Designer
          </a>
          <nav className="flex gap-6">
            {navItems.map((item) => {
              const isActive =
                (item.href === "/" && location.pathname === "/") ||
                (item.href === "/about" && location.pathname === "/about");
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
              A UX and UI Designer living in Sydney. Currently doing all things
              Design Systems at WiseTech Global.
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
                      {project.title}
                    </div>
                  </div>
                )}
              </div>
              {/* Project Text */}
              <div className="text-sm" style={{ cursor: "pointer" }}>
                <div className="font-medium group-hover:font-bold mb-2 transition-all">{project.title}</div>
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

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 mt-20 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            <span className="logo-separator">⟡</span> Website made by me and my
            mate Cursor 🤖
          </p>
          <div className="flex gap-6 items-center">
            <a
              href="#resume"
              className="text-sm text-gray-700 hover:underline flex items-center gap-2 font-mono"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="inline"
              >
                <title>Resume</title>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/tulsa-daley/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:underline flex items-center gap-2 font-mono"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline"
              >
                <title>LinkedIn</title>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <div className="relative">
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText("tulsadaley@gmail.com");
                    setEmailCopied(true);
                    setTimeout(() => {
                      setEmailCopied(false);
                    }, 2000);
                  } catch (err) {
                    console.error("Failed to copy email:", err);
                  }
                }}
                type="button"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="text-sm text-gray-700 hover:underline flex items-center gap-2 cursor-pointer relative font-mono"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="inline transition-all duration-200"
                  aria-label="Copy email"
                >
                  <title>Copy email</title>
                  {emailCopied ? (
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <>
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </>
                  )}
                </svg>
                tulsadaley@gmail.com
              </button>
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap pointer-events-none z-10">
                  {emailCopied ? "Copied!" : "Click to copy email"}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className="border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
