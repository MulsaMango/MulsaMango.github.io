import { Link, useLocation } from "react-router";

const NAV_ITEMS = [
  { href: "/", label: "WORK" },
  { href: "/about", label: "ABOUT" },
] as const;

type SiteHeaderProps = {
  isVisible: boolean;
};

export function SiteHeader({ isVisible }: SiteHeaderProps) {
  const location = useLocation();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-x-clip bg-[#fefefe] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0, 0, 0, 0.12) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-3 px-6 py-4 sm:gap-4 sm:py-6">
        <Link
          to="/"
          className="min-w-0 shrink font-display text-sm font-medium whitespace-nowrap text-gray-600 hover:!text-gray-600 sm:text-base"
        >
          TULSA <span className="logo-separator" aria-hidden="true"></span> DALEY
        </Link>
        <nav
          className="grid w-[8.25rem] shrink-0 grid-cols-2 gap-x-4 sm:w-[9.75rem] sm:gap-x-6"
          aria-label="Main"
        >
          {NAV_ITEMS.map((item) => {
            const normPath = location.pathname.replace(/\/+$/, "") || "/";
            const isActive = normPath === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative inline-block text-center font-display text-sm transition-colors ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute -bottom-0.5 inset-x-0 -z-10 h-4 highlight-active"
                    style={{
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
  );
}
