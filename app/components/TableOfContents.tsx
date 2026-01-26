import { useEffect, useState, useRef } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPinTooltip, setShowPinTooltip] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    // Load collapsed state from localStorage, default to false (expanded)
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("tocCollapsed");
        return saved === "true";
      } catch (e) {
        return false;
      }
    }
    return false;
  });
  const [isPinning, setIsPinning] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const initialSetRef = useRef(false);
  const ignoreObserverRef = useRef(false);
  const hasMountedRef = useRef(false);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pinTooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const justPinnedRef = useRef(false);

  useEffect(() => {
    hasMountedRef.current = true;
  }, []);

  // Save collapsed state to localStorage
  useEffect(() => {
    if (hasMountedRef.current && typeof window !== "undefined") {
      try {
        localStorage.setItem("tocCollapsed", isCollapsed.toString());
      } catch (e) {
        // localStorage might not be available
      }
    }
  }, [isCollapsed]);

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

  const handleClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
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
      className="hidden 2xl:block fixed top-24 right-8 z-40 max-h-[calc(100vh-8rem)] overflow-visible"
      aria-label="Table of contents"
      onMouseEnter={() => isCollapsed && setIsHovering(true)}
      onMouseLeave={() => isCollapsed && setIsHovering(false)}
    >
      <div 
        className={`bg-[#fefefe]/95 backdrop-blur-sm border border-gray-200/60 rounded-lg shadow-sm relative ${
          isPinning ? "" : "transition-all duration-300"
        } ${
          isCollapsed ? "py-4 pl-4 pr-0 min-w-[48px] max-w-[48px] cursor-pointer overflow-hidden" : "p-4 min-w-[200px] max-w-[240px]"
        }`}
        onClick={() => isCollapsed && !isHovering && setIsCollapsed(false)}
      >
        {!isCollapsed && (
          <>
            <div className="mb-3">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-mono">
                Contents
              </h3>
            </div>
            {/* Collapse button with tooltip in top right */}
            <div className="absolute top-2 right-2 z-10">
              <button
                onClick={() => setIsCollapsed(true)}
                onMouseEnter={() => {
                  // Don't show tooltip if we just pinned (cooldown period)
                  if (justPinnedRef.current) {
                    if (tooltipTimeoutRef.current) {
                      clearTimeout(tooltipTimeoutRef.current);
                      tooltipTimeoutRef.current = null;
                    }
                    setShowTooltip(false);
                    return;
                  }
                  tooltipTimeoutRef.current = setTimeout(() => {
                    // Double-check cooldown before showing
                    if (!justPinnedRef.current) {
                      setShowTooltip(true);
                    }
                  }, 400);
                }}
                onMouseLeave={() => {
                  if (tooltipTimeoutRef.current) {
                    clearTimeout(tooltipTimeoutRef.current);
                    tooltipTimeoutRef.current = null;
                  }
                  setShowTooltip(false);
                }}
                className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
                aria-label="Unpin table of contents"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 17v5" />
                  <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4.76Z" />
                </svg>
              </button>
              {showTooltip && (
                <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap pointer-events-none z-50">
                  Unpin table of contents
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 -ml-1">
                    <div className="border-4 border-transparent border-l-gray-900"></div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        
        {isCollapsed ? (
          // Collapsed view: Capacities-style progress indicator with horizontal lines
          // Visual indicator only - no click functionality (hover ToC is the interaction)
          <div className="flex flex-col space-y-3 w-full">
            {headings.map((item) => {
              const isActive = item.id === activeId;
              // Longer lines for h2 (main sections), shorter for h3 (subsections)
              const lineWidth = item.level === 2 ? "w-10" : "w-6";
              return (
                <div
                  key={item.id}
                  className={`${lineWidth} h-0.5 transition-all duration-200 ml-auto ${
                    isActive
                      ? "bg-gray-900"
                      : "bg-gray-300"
                  }`}
                  aria-hidden="true"
                />
              );
            })}
          </div>
        ) : (
          // Expanded view: Full table of contents with text
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
        )}
      </div>
      
      {/* Hover overlay: Expanded TOC that appears on hover when collapsed */}
      {isCollapsed && isHovering && (
        <div 
          className="absolute top-0 right-0 bg-[#fefefe]/95 backdrop-blur-sm border border-gray-200/60 rounded-lg shadow-sm p-4 w-[240px] z-50"
        >
          <div className="mb-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-mono">
              Contents
            </h3>
          </div>
          {/* Pin button to fix the TOC */}
          <div className="absolute top-2 right-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Set cooldown FIRST to prevent tooltip from appearing immediately
                justPinnedRef.current = true;
                // Clear any existing tooltips
                setShowTooltip(false);
                setShowPinTooltip(false);
                if (tooltipTimeoutRef.current) {
                  clearTimeout(tooltipTimeoutRef.current);
                  tooltipTimeoutRef.current = null;
                }
                if (pinTooltipTimeoutRef.current) {
                  clearTimeout(pinTooltipTimeoutRef.current);
                  pinTooltipTimeoutRef.current = null;
                }
                // Disable transition for seamless pinning
                setIsPinning(true);
                setIsCollapsed(false);
                setIsHovering(false);
                // Re-enable transition after a brief moment
                setTimeout(() => {
                  setIsPinning(false);
                }, 50);
                // Clear cooldown after a longer delay to prevent jarring tooltip
                setTimeout(() => {
                  justPinnedRef.current = false;
                }, 1000);
              }}
              onMouseEnter={() => {
                pinTooltipTimeoutRef.current = setTimeout(() => {
                  setShowPinTooltip(true);
                }, 400);
              }}
              onMouseLeave={() => {
                if (pinTooltipTimeoutRef.current) {
                  clearTimeout(pinTooltipTimeoutRef.current);
                  pinTooltipTimeoutRef.current = null;
                }
                setShowPinTooltip(false);
              }}
              className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
              aria-label="Pin table of contents"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 17v5" />
                <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4.76Z" />
              </svg>
            </button>
            {showPinTooltip && (
              <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap pointer-events-none z-50">
                Pin table of contents
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 -ml-1">
                  <div className="border-4 border-transparent border-l-gray-900"></div>
                </div>
              </div>
            )}
          </div>
          {/* Expanded TOC content */}
          <ul className="space-y-1 text-sm">
            {headings.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick(e, item.id);
                    }}
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
      )}
    </nav>
  );
}