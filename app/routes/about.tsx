import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";

import bubbleLrg from "./about-images/bubble-lrg.png";
import bubbleMed from "./about-images/bubble-med.png";
import bubbleSm from "./about-images/bubble-sm.png";
import coffee from "./about-images/coffee.png";
import donut from "./about-images/donut.png";
import doubleDiamond from "./about-images/double-diamond.png";
import figmaCursor from "./about-images/figma-cursor.png";
import figma from "./about-images/figma.png";
import onigiri from "./about-images/onigiri.png";
import plant from "./about-images/plant.png";
import terminal from "./about-images/terminal.png";
import totoro from "./about-images/totoro.png";
import tulsaHeadshot from "./about-images/tulsa-headshot.png";
import pin from "./about-images/pin.png";

// Icon positions and sizes matched to reference image
// Reference: elliptical cluster with figma-cursor as the central focal point
// Rotations added to match the tilted feel in the reference (cursor has no rotation)
// Bubbles have burst parameters: smaller bubbles burst faster and expand more
const ABOUT_ICONS = [
  // Top row
  {
    id: "bubble-sm-1",
    src: bubbleSm,
    alt: "",
    left: "38%",
    top: "32%",
    width: 14,
    rotate: 0,
    duration: 4.0,
    delay: 0.3,
    isBubble: true,
    burstScale: 1.7,
    burstDuration: 150,
  },
  {
    id: "double-diamond",
    src: doubleDiamond,
    alt: "",
    left: "26%",
    top: "10%",
    width: 60,
    rotate: -18,
    duration: 4.2,
    delay: 0,
  },
  {
    id: "figma",
    src: figma,
    alt: "",
    left: "44%",
    top: "8%",
    width: 48,
    rotate: 0,
    duration: 3.8,
    delay: 0.5,
  },
  {
    id: "bubble-lrg",
    src: bubbleLrg,
    alt: "",
    left: "58%",
    top: "14%",
    width: 48,
    rotate: 0,
    duration: 4.5,
    delay: 1,
    isBubble: true,
    burstScale: 1.3,
    burstDuration: 240,
  },
  {
    id: "onigiri",
    src: onigiri,
    alt: "",
    left: "74%",
    top: "6%",
    width: 48,
    rotate: 12,
    duration: 4.1,
    delay: 0.2,
  },
  // Left side
  {
    id: "plant",
    src: plant,
    alt: "",
    left: "22%",
    top: "42%",
    width: 58,
    rotate: 6,
    duration: 3.5,
    delay: 1.1,
  },
  // Left bubble cluster (below plant) - 2 medium + 1 small
  {
    id: "bubble-med-1",
    src: bubbleMed,
    alt: "",
    left: "32%",
    top: "58%",
    width: 34,
    rotate: 0,
    duration: 3.6,
    delay: 1.2,
    isBubble: true,
    burstScale: 1.4,
    burstDuration: 180,
  },
  {
    id: "bubble-med-2",
    src: bubbleMed,
    alt: "",
    left: "28%",
    top: "66%",
    width: 28,
    rotate: 0,
    duration: 4.1,
    delay: 0.9,
    isBubble: true,
    burstScale: 1.5,
    burstDuration: 170,
  },
  {
    id: "bubble-sm-2",
    src: bubbleSm,
    alt: "",
    left: "36%",
    top: "70%",
    width: 16,
    rotate: 0,
    duration: 3.4,
    delay: 0.8,
    isBubble: true,
    burstScale: 1.7,
    burstDuration: 150,
  },
  // Center - cursor is the focal point
  {
    id: "figma-cursor",
    src: figmaCursor,
    alt: "",
    left: "50%",
    top: "44%",
    width: 90,
    rotate: 0,
    duration: 4.2,
    delay: 0.6,
  },
  // Right side
  {
    id: "terminal",
    src: terminal,
    alt: "",
    left: "76%",
    top: "30%",
    width: 68,
    rotate: 10,
    duration: 3.9,
    delay: 0.6,
  },
  {
    id: "bubble-med-3",
    src: bubbleMed,
    alt: "",
    left: "64%",
    top: "50%",
    width: 32,
    rotate: 0,
    duration: 4.3,
    delay: 0.7,
    isBubble: true,
    burstScale: 1.45,
    burstDuration: 175,
  },
  {
    id: "bubble-sm-3",
    src: bubbleSm,
    alt: "",
    left: "70%",
    top: "56%",
    width: 14,
    rotate: 0,
    duration: 4.4,
    delay: 0.4,
    isBubble: true,
    burstScale: 1.7,
    burstDuration: 140,
  },
  {
    id: "coffee",
    src: coffee,
    alt: "",
    left: "78%",
    top: "62%",
    width: 48,
    rotate: 8,
    duration: 4.4,
    delay: 0.9,
  },
  {
    id: "bubble-sm-4",
    src: bubbleSm,
    alt: "",
    left: "80%",
    top: "82%",
    width: 14,
    rotate: 0,
    duration: 4.0,
    delay: 1.0,
    isBubble: true,
    burstScale: 1.7,
    burstDuration: 150,
  },
  // Bottom
  {
    id: "donut",
    src: donut,
    alt: "",
    left: "28%",
    top: "82%",
    width: 52,
    rotate: -12,
    duration: 3.7,
    delay: 0.4,
  },
  {
    id: "totoro",
    src: totoro,
    alt: "",
    left: "56%",
    top: "76%",
    width: 64,
    rotate: 6,
    duration: 4.6,
    delay: 0.1,
  },
] as const;

export default function About() {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState(location.hash || "");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [burstBubbles, setBurstBubbles] = useState<Set<string>>(new Set());
  const [emailCopied, setEmailCopied] = useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);

  const handleBubbleBurst = (id: string) => {
    setBurstBubbles((prev) => new Set(prev).add(id));
  };

  useEffect(() => {
    setActiveHash(location.hash);

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [location.hash]);

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
          <a
            href="/"
            className="text-base font-medium text-gray-600 hover:!text-gray-600"
          >
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

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-12 md:pb-20 font-sans">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
            About me (and how I work){" "}
          </h1>

          {/* Floating pixel art cluster */}
          <div
            className="relative w-full h-[340px] md:h-[400px] mb-12"
            aria-hidden
          >
            {ABOUT_ICONS.map((icon) => {
              const isBubble = "isBubble" in icon && icon.isBubble;
              const hasBurst = burstBubbles.has(icon.id);

              return (
                <img
                  key={icon.id}
                  src={icon.src}
                  alt={icon.alt}
                  className={`about-float-icon absolute select-none ${
                    isBubble
                      ? `about-bubble ${hasBurst ? "bubble-burst" : ""}`
                      : "pointer-events-none"
                  }`}
                  style={
                    {
                      left: icon.left,
                      top: icon.top,
                      width: icon.width,
                      height: "auto",
                      animationDuration: `${icon.duration}s`,
                      animationDelay: `${icon.delay}s`,
                      "--rotate": `${icon.rotate}deg`,
                      ...(isBubble && "burstScale" in icon
                        ? {
                            "--burst-scale": icon.burstScale,
                            "--burst-duration": `${icon.burstDuration}ms`,
                          }
                        : {}),
                    } as React.CSSProperties
                  }
                  draggable={false}
                  loading="eager"
                  decoding="sync"
                  onMouseEnter={
                    isBubble && !hasBurst
                      ? () => handleBubbleBurst(icon.id)
                      : undefined
                  }
                />
              );
            })}
          </div>

          {/* Bio paragraph */}
          <p className="text-gray-600 leading-7 mb-8 max-w-2xl mx-auto font-sans text-base">
            I'm a designer with a love for systems thinking, visual craft, and
            refining ways of working.
          </p>
          <p className="text-gray-600 leading-7 mb-8 max-w-2xl mx-auto font-sans text-base">
            I currently work on the design systems team at WiseTech Global, a
            provider of enterprise B2B logistics software. It’s a mature product
            in a complex domain with expert workflows and a lot of breadth, so
            clarity and compatibility matter as much as innovation.
          </p>

          <p className="text-gray-600 leading-7 mb-8 max-w-2xl mx-auto font-sans text-base">
            Design systems pulled me toward what I’m naturally wired for:
            pragmatic problem solving, attention to process, and craft. I care
            about the way work gets done. I’ll sweat the details when they
            matter, but I always take a strategic approach to my work factoring
            in business goals, product goals, and technical or legacy
            constraints.
          </p>

          <p className="text-gray-600 leading-7 mb-8 max-w-2xl mx-auto font-sans text-base">
            I love injecting my playful personality into everything that I do.
            Creating an environment where{" "}
            <span className="line-through">memes</span> humour and playfulness
            thrive doesn’t just make work more enjoyable, it helps teams think
            more openly, collaborate better, and stay creative when things get
            sticky.
          </p>

          <p className="text-gray-600 leading-7 mb-8 max-w-2xl mx-auto font-sans text-base">
            Lately I've been experimenting with how AI tools can augment our
            design workflows. I’ve been using tools like Figma Make, AI agents,
            and Copilot to prototype and explore interactions, enrich developer
            handoffs, and produce more consistent documentation faster. I'm also
            starting to contribute directly to our production codebase - adding
            variants, fixing bugs, and making small enhancements to components.
          </p>

          <p className="text-gray-600 leading-7 mb-8 max-w-2xl mx-auto font-sans text-base">
            Looking forward, I'm open to product design, UX/UI, or design
            systems roles at companies that value design, encourage curiosity
            and experimentation in how we work, and foster collaborative,
            supportive teams. If that sounds like you, I'd love to chat!
          </p>

          {/* Contact section */}
          <div className="max-w-2xl mx-auto mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-12">
              Let's chat!
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Headshot */}
              <div className="w-[200px] mx-auto md:mx-0 md:w-[280px] shrink-0">
                <div className="relative inline-block">
                  <img
                    src={pin}
                    alt=""
                    className="absolute z-10 w-[38px] h-auto"
                    style={{
                      top: "-14px",
                      left: "12px",
                      transform: "rotate(-20deg)",
                      imageRendering: "pixelated",
                    }}
                    draggable={false}
                  />
                  <div
                    className="bg-white p-2 rounded shadow-md"
                    style={{ transform: "rotate(3.5deg)" }}
                  >
                    <img
                      src={tulsaHeadshot}
                      alt="Tulsa Daley"
                      className="aspect-square w-full rounded object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Contact links */}
              <div className="space-y-4 flex-1 w-full">
                <div className="relative">
                  <button
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(
                          "tulsadaley@gmail.com",
                        );
                        setEmailCopied(true);
                        setTimeout(() => {
                          setEmailCopied(false);
                        }, 2000);
                      } catch (err) {
                        console.error("Failed to copy email:", err);
                      }
                    }}
                    type="button"
                    onMouseEnter={() => setShowEmailTooltip(true)}
                    onMouseLeave={() => setShowEmailTooltip(false)}
                    className="flex items-center justify-between w-full py-3 border-b border-gray-200 text-gray-700 hover:text-gray-900 transition-colors group cursor-pointer"
                  >
                    <span className="font-sans text-base">
                      tulsadaley@gmail.com
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-400 group-hover:text-gray-600 transition-all duration-200"
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
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </>
                      )}
                    </svg>
                  </button>
                  {showEmailTooltip && (
                    <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap pointer-events-none z-10">
                      {emailCopied ? "Copied!" : "Click to copy email"}
                      <div className="absolute top-full right-2 transform -mt-1">
                        <div className="border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  )}
                </div>
                <a
                  href="https://www.linkedin.com/in/tulsa-daley/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-b border-gray-200 text-gray-700 hover:text-gray-900 transition-colors group"
                >
                  <span className="font-sans text-base">LinkedIn</span>
                  <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                    ↗
                  </span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-b border-gray-200 text-gray-700 hover:text-gray-900 transition-colors group"
                >
                  <span className="font-sans text-base">Resume</span>
                  <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
