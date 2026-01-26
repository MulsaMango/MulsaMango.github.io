import { useEffect, useState, useRef } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const initialSetRef = useRef(false);
  const ignoreObserverRef = useRef(false);

  useEffect(() => {
    // Find all headings with IDs in the case study content
    const headingElements = document.querySelectorAll(
      ".case-study-paper-wash h2[id], .case-study-paper-wash h3[id]"
    );

    const tocItems: TocItem[] = Array.from(headingElements).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: parseInt(el.tagName.charAt(1)), // h2 = 2, h3 = 3
    }));

    setHeadings(tocItems);

    // Set up IntersectionObserver to track active section
    // Adjusted rootMargin to be more forgiving and prevent jumping
    const observerOptions = {
      rootMargin: "-15% 0px -70% 0px", // Trigger when heading is in upper portion of viewport, more forgiving
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      // Ignore observer updates immediately after a click to prevent jumping
      if (ignoreObserverRef.current) {
        return;
      }

      // Find the heading that's currently most visible
      const visibleHeadings = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => ({
          id: entry.target.id,
          ratio: entry.intersectionRatio,
        }));

      if (visibleHeadings.length > 0) {
        // Use the heading with highest intersection ratio
        const mostVisible = visibleHeadings.reduce((prev, current) =>
          current.ratio > prev.ratio ? current : prev
        );
        setActiveId(mostVisible.id);
        initialSetRef.current = true;
      }
    }, observerOptions);

    // Observe all headings
    headingElements.forEach((heading) => {
      if (observerRef.current) {
        observerRef.current.observe(heading);
      }
    });

    // Set initial active heading if none is intersecting
    if (headingElements.length > 0 && !initialSetRef.current) {
      const firstHeading = headingElements[0] as HTMLElement;
      const rect = firstHeading.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setActiveId(firstHeading.id);
        initialSetRef.current = true;
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Don't render if no headings found
  if (headings.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Set the clicked heading as active immediately
      setActiveId(id);
      
      // Temporarily ignore observer updates to prevent jumping to next heading
      ignoreObserverRef.current = true;
      
      // Calculate position relative to document
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = rect.top + scrollTop;
      // Reduced offset - page has pt-[88px], using 85px for proper positioning
      const headerOffset = 85;
      const targetPosition = elementTop - headerOffset;
      
      // Calculate scroll distance to determine timeout duration
      const currentScroll = window.scrollY;
      const scrollDistance = Math.abs(targetPosition - currentScroll);
      // For big jumps, use longer timeout (roughly 1ms per 2px of scroll distance, min 800ms)
      const timeoutDuration = Math.max(800, scrollDistance / 2);

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Re-enable observer after scroll completes, with longer timeout for big jumps
      setTimeout(() => {
        ignoreObserverRef.current = false;
      }, timeoutDuration);
    }
  };

  return (
    <nav
      className="hidden 2xl:block fixed top-24 right-8 z-40 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      aria-label="Table of contents"
    >
      <div className="bg-[#fefefe]/95 backdrop-blur-sm border border-gray-200/60 rounded-lg p-4 shadow-sm min-w-[200px] max-w-[240px]">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 font-mono">
          Contents
        </h3>
        <ul className="space-y-1 text-sm">
          {headings.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`block py-1.5 px-2.5 rounded transition-all duration-200 ${
                    item.level === 3 ? "pl-5 text-xs" : "text-sm"
                  } ${
                    isActive
                      ? "text-gray-900 font-medium bg-gray-100/80"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/50"
                  }`}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}