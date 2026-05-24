import { Link } from "react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Footer } from "../components/Footer";
import {
  type PokeOffset,
  canUsePixelArtPoke,
  getPokeOffset,
} from "../lib/pixelArtPoke";

import bubbleLrg from "./about-images/bubble-lrg.png";
import bubbleMed from "./about-images/bubble-med.png";
import bubbleSm from "./about-images/bubble-sm.png";
import coffee from "./about-images/coffee.png";
import donut from "./about-images/donut.png";
import doubleDiamond from "./about-images/double-diamond.png";
import aboutTulsa from "./about-images/about-tulsa.png";
import figma from "./about-images/figma.png";
import onigiri from "./about-images/onigiri.png";
import robot from "./about-images/robot.png";
import terminal from "./about-images/terminal.png";
import totoro from "./about-images/totoro.png";
import tulsaHeadshot from "./about-images/tulsa-headshot.png";
import pin from "./about-images/pin.png";
import { buildMeta } from "../lib/siteMeta";
import { SiteHeader } from "../components/SiteHeader";
import { useHeaderScrollVisibility } from "../hooks/useHeaderScrollVisibility";

export function meta() {
  return buildMeta({
    title: "About — Tulsa Daley",
    description:
      "Get to know Tulsa Daley — a product designer working on design systems for enterprise software, blending design, systems, and code.",
    path: "/about",
  });
}

// Icon positions and sizes matched to reference image
// Reference: elliptical cluster with about-tulsa as the central focal point
// Rotations added to match the tilted feel in the reference (cursor has no rotation)
// Bubbles have burst parameters: smaller bubbles burst faster and expand more
// enterDelay (ms) groups icons into waves that pop in a couple at a time:
//   0ms   – focal (about-tulsa)
//   110ms – top anchor icons (figma, robot, terminal)
//   220ms – edge anchor icons (totoro, double-diamond, onigiri, donut, coffee)
//   360ms – medium bubbles + large bubble
//   480ms – small bubbles
// Total entrance settles ~820ms — still before the cursor intro pops bubble-sm-1 at 1280ms.
const ABOUT_ICONS = [
  // Top row
  {
    id: "bubble-sm-1",
    src: bubbleSm,
    alt: "",
    left: "37%",
    mobileLeft: "30%",
    top: "32%",
    width: 14,
    rotate: 0,
    duration: 4.0,
    delay: 0.3,
    enterDelay: 480,
    isBubble: true,
    burstScale: 1.7,
    burstDuration: 150,
  },
  {
    id: "double-diamond",
    src: doubleDiamond,
    alt: "",
    left: "23%",
    mobileLeft: "16%",
    top: "10%",
    width: 60,
    rotate: -18,
    duration: 4.2,
    delay: 0,
    enterDelay: 220,
  },
  {
    id: "figma",
    src: figma,
    alt: "",
    left: "43%",
    mobileLeft: "39%",
    top: "8%",
    width: 48,
    rotate: 0,
    duration: 3.8,
    delay: 0.5,
    enterDelay: 110,
  },
  {
    id: "bubble-lrg",
    src: bubbleLrg,
    alt: "",
    left: "59%",
    mobileLeft: "64%",
    top: "14%",
    width: 48,
    rotate: 0,
    duration: 4.5,
    delay: 1,
    enterDelay: 360,
    isBubble: true,
    burstScale: 1.3,
    burstDuration: 240,
  },
  {
    id: "onigiri",
    src: onigiri,
    alt: "",
    left: "77%",
    mobileLeft: "84%",
    top: "6%",
    width: 48,
    rotate: 12,
    duration: 4.1,
    delay: 0.2,
    enterDelay: 220,
  },
  // Left side
  {
    id: "robot",
    src: robot,
    alt: "",
    left: "19%",
    mobileLeft: "14%",
    top: "42%",
    width: 58,
    rotate: 6,
    duration: 3.5,
    delay: 1.1,
    enterDelay: 110,
  },
  // Left bubble cluster (below robot) - 2 medium + 1 small
  {
    id: "bubble-med-1",
    src: bubbleMed,
    alt: "",
    left: "30%",
    mobileLeft: "24%",
    top: "58%",
    width: 34,
    rotate: 0,
    duration: 3.6,
    delay: 1.2,
    enterDelay: 360,
    isBubble: true,
    burstScale: 1.4,
    burstDuration: 180,
  },
  {
    id: "bubble-med-2",
    src: bubbleMed,
    alt: "",
    left: "25%",
    mobileLeft: "18%",
    top: "66%",
    width: 28,
    rotate: 0,
    duration: 4.1,
    delay: 0.9,
    enterDelay: 360,
    isBubble: true,
    burstScale: 1.5,
    burstDuration: 170,
  },
  {
    id: "bubble-sm-2",
    src: bubbleSm,
    alt: "",
    left: "34%",
    mobileLeft: "28%",
    top: "70%",
    width: 16,
    rotate: 0,
    duration: 3.4,
    delay: 0.8,
    enterDelay: 480,
    isBubble: true,
    burstScale: 1.7,
    burstDuration: 150,
  },
  // Center - about title is the focal point
  {
    id: "about-tulsa",
    src: aboutTulsa,
    alt: "",
    left: "50%",
    mobileLeft: "50%",
    top: "44%",
    width: 150,
    rotate: 0,
    duration: 4.2,
    delay: 0.6,
    enterDelay: 0,
  },
  // Right side
  {
    id: "terminal",
    src: terminal,
    alt: "",
    left: "79%",
    mobileLeft: "86%",
    top: "30%",
    width: 68,
    rotate: 10,
    duration: 3.9,
    delay: 0.6,
    enterDelay: 110,
  },
  {
    id: "bubble-med-3",
    src: bubbleMed,
    alt: "",
    left: "66%",
    mobileLeft: "76%",
    top: "50%",
    width: 32,
    rotate: 0,
    duration: 4.3,
    delay: 0.7,
    enterDelay: 360,
    isBubble: true,
    burstScale: 1.45,
    burstDuration: 175,
  },
  {
    id: "bubble-sm-3",
    src: bubbleSm,
    alt: "",
    left: "72%",
    mobileLeft: "78%",
    top: "56%",
    width: 14,
    rotate: 0,
    duration: 4.4,
    delay: 0.4,
    enterDelay: 480,
    isBubble: true,
    burstScale: 1.7,
    burstDuration: 140,
  },
  {
    id: "coffee",
    src: coffee,
    alt: "",
    left: "81%",
    mobileLeft: "86%",
    top: "62%",
    width: 48,
    rotate: 8,
    duration: 4.4,
    delay: 0.9,
    enterDelay: 220,
  },
  {
    id: "bubble-sm-4",
    src: bubbleSm,
    alt: "",
    left: "83%",
    mobileLeft: "86%",
    top: "82%",
    width: 14,
    rotate: 0,
    duration: 4.0,
    delay: 1.0,
    enterDelay: 480,
    isBubble: true,
    burstScale: 1.7,
    burstDuration: 150,
  },
  // Bottom
  {
    id: "donut",
    src: donut,
    alt: "",
    left: "25%",
    mobileLeft: "18%",
    top: "82%",
    width: 52,
    rotate: -12,
    duration: 3.7,
    delay: 0.4,
    enterDelay: 220,
  },
  {
    id: "totoro",
    src: totoro,
    alt: "",
    left: "57%",
    mobileLeft: "68%",
    top: "76%",
    width: 64,
    rotate: 6,
    duration: 4.6,
    delay: 0.1,
    enterDelay: 220,
  },
] as const;

const BUBBLE_POP_FRAGMENTS = [
  { id: "top-left", dx: "-18px", dy: "-18px", delay: "0ms", size: 5 },
  { id: "top-right", dx: "18px", dy: "-16px", delay: "18ms", size: 4 },
  { id: "right", dx: "24px", dy: "4px", delay: "32ms", size: 5 },
  { id: "bottom", dx: "2px", dy: "22px", delay: "42ms", size: 4 },
  { id: "left", dx: "-22px", dy: "6px", delay: "26ms", size: 4 },
] as const;

const CURSOR_INTRO_TARGET_BUBBLE_ID = "bubble-sm-1";
const CURSOR_INTRO_POP_DELAY_MS = 1280;
const CURSOR_INTRO_DURATION_MS = 2200;
const CURSOR_TIP_POSITION = {
  x: 0.14,
  y: 0.27,
} as const;

const EXPERIENCE_ITEMS = [
  {
    role: "UI Designer (Design Systems)",
    organization: "WiseTech Global",
    period: "2023 - Present",
    isCurrent: true,
    description:
      "Designing across both the design system itself (primitives, tokens, components, patterns) and the operational layer that holds it together (governance, documentation, contribution flows, designer tooling). I've designed complex product surfaces like data tables, led strategic research that informs the future direction of the core product framework, and co-led AI-enabled prototyping tooling designers use day to day.",
  },
  {
    role: "UX/UI Designer",
    organization: "Vpply",
    period: "2023",
    isCurrent: false,
    description:
      "Designed across product, system, and cross-functional processes at a video-first hiring startup. Built out core flows for job seekers and employers, established the first component library, closed the design-to-dev gap on a previously siloed team, and audited the platform against WCAG 2.1 AA.",
  },
  {
    role: "Workplace Experience",
    organization: "Atlassian",
    period: "2021 - 2022",
    isCurrent: false,
    description:
      "Curated digital and physical workplace experiences for 10,000+ employees globally during the shift to work-from-anywhere, across full-remote, hybrid, and in-office contexts. Helped shape recognition and care programs for remote employees, led a global dogs-in-the-office initiative across 12 locations, and coordinated facilities, events, and digital experiences that helped employees feel connected wherever they chose to work.",
  },
] as const;

type CursorIntroOffset = {
  x: string;
  y: string;
};

const triggerBubbleHaptic = () => {
  window.navigator.vibrate?.(12);
};

export default function About() {
  const isHeaderVisible = useHeaderScrollVisibility();
  const [burstBubbles, setBurstBubbles] = useState<Set<string>>(new Set());
  const [returningBubbles, setReturningBubbles] = useState<Set<string>>(
    new Set(),
  );
  const [pokedIcons, setPokedIcons] = useState<Record<string, PokeOffset>>({});
  const [hasEntered, setHasEntered] = useState(false);
  const [isCursorIntroActive, setIsCursorIntroActive] = useState(true);
  const [cursorIntroOffset, setCursorIntroOffset] = useState<CursorIntroOffset>(
    {
      x: "-62px",
      y: "-33px",
    },
  );
  const [emailCopied, setEmailCopied] = useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const lastTouchBurstAt = useRef(0);
  const cursorIntroAnchorRef = useRef<HTMLDivElement | null>(null);
  const cursorIntroImageRef = useRef<HTMLImageElement | null>(null);
  const cursorIntroTargetRef = useRef<HTMLImageElement | null>(null);

  const handleBubbleBurst = useCallback((id: string) => {
    setBurstBubbles((prev) => new Set(prev).add(id));
    window.setTimeout(() => {
      setBurstBubbles((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      setReturningBubbles((prev) => new Set(prev).add(id));

      window.setTimeout(() => {
        setReturningBubbles((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }, 900);
    }, 10000);
  }, []);

  const handleBubbleTouchBurst = (id: string) => {
    lastTouchBurstAt.current = Date.now();
    triggerBubbleHaptic();
    handleBubbleBurst(id);
  };

  const handleBubbleHoverBurst = (id: string) => {
    if (Date.now() - lastTouchBurstAt.current < 700) {
      return;
    }

    handleBubbleBurst(id);
  };

  const handlePixelArtPointerEnter = (
    id: string,
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!canUsePixelArtPoke(event) || pokedIcons[id]) {
      return;
    }

    const nextOffset = getPokeOffset(event);

    setPokedIcons((prev) => {
      const currentOffset = prev[id];

      if (
        currentOffset?.x === nextOffset.x &&
        currentOffset.y === nextOffset.y &&
        currentOffset.rotate === nextOffset.rotate
      ) {
        return prev;
      }

      return {
        ...prev,
        [id]: nextOffset,
      };
    });
  };

  const clearPixelArtPoke = (id: string) => {
    setPokedIcons((prev) => {
      if (!(id in prev)) {
        return prev;
      }

      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const updateCursorIntroOffset = useCallback(() => {
    const cursorAnchor = cursorIntroAnchorRef.current;
    const cursorImage = cursorIntroImageRef.current;
    const targetBubble = cursorIntroTargetRef.current;

    if (!cursorAnchor || !cursorImage || !targetBubble) {
      return;
    }

    const imageRect = cursorImage.getBoundingClientRect();
    const targetRect = targetBubble.getBoundingClientRect();
    const cursorTip = {
      x: imageRect.left + imageRect.width * CURSOR_TIP_POSITION.x,
      y: imageRect.top + imageRect.height * CURSOR_TIP_POSITION.y,
    };
    const targetCenter = {
      x: targetRect.left + targetRect.width / 2,
      y: targetRect.top + targetRect.height / 2,
    };

    setCursorIntroOffset({
      x: `${(targetCenter.x - cursorTip.x).toFixed(2)}px`,
      y: `${(targetCenter.y - cursorTip.y).toFixed(2)}px`,
    });
  }, []);

  useEffect(() => {
    updateCursorIntroOffset();
    window.addEventListener("resize", updateCursorIntroOffset);

    return () => window.removeEventListener("resize", updateCursorIntroOffset);
  }, [updateCursorIntroOffset]);

  useEffect(() => {
    // Two RAFs ensure the initial opacity-0 / blur state is committed before
    // we flip to entered, so the CSS transition runs (rather than the icons
    // snapping straight to their final state on hydration).
    const pendingFrames = { first: 0, second: 0 };

    pendingFrames.first = window.requestAnimationFrame(() => {
      pendingFrames.second = window.requestAnimationFrame(() => {
        setHasEntered(true);
      });
    });

    return () => {
      window.cancelAnimationFrame(pendingFrames.first);
      window.cancelAnimationFrame(pendingFrames.second);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsCursorIntroActive(false);
      return;
    }

    const popTimeout = window.setTimeout(() => {
      handleBubbleBurst(CURSOR_INTRO_TARGET_BUBBLE_ID);
    }, CURSOR_INTRO_POP_DELAY_MS);
    const introTimeout = window.setTimeout(() => {
      setIsCursorIntroActive(false);
    }, CURSOR_INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(popTimeout);
      window.clearTimeout(introTimeout);
    };
  }, [handleBubbleBurst]);

  return (
    <div className="min-h-screen overflow-x-clip">
      <SiteHeader isVisible={isHeaderVisible} />

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-12 md:pb-20 font-sans">
        <div className="max-w-4xl mx-auto">
          <h1 className="sr-only">About Tulsa Daley</h1>

          <div className="max-w-2xl mx-auto mb-8">
            {/* Back Link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Work
            </Link>
          </div>

          {/* Floating pixel art cluster */}
          <div
            className="relative mb-12 h-[340px] w-full overflow-x-clip md:h-[400px]"
            aria-hidden
          >
            {ABOUT_ICONS.map((icon) => {
              const isBubble = "isBubble" in icon && icon.isBubble;
              const hasBurst = burstBubbles.has(icon.id);
              const isReturning = returningBubbles.has(icon.id);
              const pokeOffset = pokedIcons[icon.id];
              const isCursorIntroIcon =
                isCursorIntroActive && icon.id === "about-tulsa";
              const isCursorIntroTarget =
                isCursorIntroActive &&
                icon.id === CURSOR_INTRO_TARGET_BUBBLE_ID &&
                !hasBurst;
              const iconStyle = {
                "--about-left": icon.left,
                "--about-mobile-left": icon.mobileLeft,
                top: icon.top,
                width: icon.width,
                height: "auto",
                "--float-duration": `${icon.duration}s`,
                "--float-delay": `${icon.delay}s`,
                "--enter-delay": `${icon.enterDelay}ms`,
                "--rotate": `${icon.rotate}deg`,
                "--poke-x": pokeOffset?.x ?? "0px",
                "--poke-y": pokeOffset?.y ?? "0px",
                "--poke-rotate": pokeOffset?.rotate ?? "0deg",
                "--cursor-pop-x": cursorIntroOffset.x,
                "--cursor-pop-y": cursorIntroOffset.y,
                ...(isBubble && "burstScale" in icon
                  ? {
                      "--burst-scale": icon.burstScale,
                      "--burst-duration": `${icon.burstDuration}ms`,
                    }
                  : {}),
              } as React.CSSProperties;

              if (!isBubble) {
                return (
                  <div
                    ref={
                      icon.id === "about-tulsa" ? cursorIntroAnchorRef : null
                    }
                    key={icon.id}
                    className={`about-cluster-item about-pixel-art-shell absolute select-none ${
                      hasEntered ? "about-has-entered" : ""
                    }`}
                    style={iconStyle}
                    onPointerEnter={(event) =>
                      handlePixelArtPointerEnter(icon.id, event)
                    }
                    onPointerLeave={() => clearPixelArtPoke(icon.id)}
                  >
                    <span
                      className={`about-float-drift ${
                        isCursorIntroIcon ? "about-intro-anchor" : ""
                      }`}
                    >
                      <span className="about-icon-settle-wobble">
                        {icon.id === "about-tulsa" ? (
                          <span className="about-cursor-intro">
                            <img
                              ref={
                                icon.id === "about-tulsa"
                                  ? cursorIntroImageRef
                                  : null
                              }
                              src={icon.src}
                              alt={icon.alt}
                              className={`about-pixel-art ${
                                pokeOffset ? "about-pixel-art-poked" : ""
                              }`}
                              draggable={false}
                              loading="eager"
                              decoding="sync"
                              // On an uncached load the img has no intrinsic
                              // height at mount, so the cursor-tip geometry (and
                              // thus the cursor-to-bubble offset) is measured
                              // wrong until the real dimensions arrive.
                              onLoad={updateCursorIntroOffset}
                            />
                          </span>
                        ) : (
                          <img
                            src={icon.src}
                            alt={icon.alt}
                            className={`about-pixel-art ${
                              pokeOffset ? "about-pixel-art-poked" : ""
                            }`}
                            draggable={false}
                            loading="eager"
                            decoding="sync"
                          />
                        )}
                      </span>
                    </span>
                  </div>
                );
              }

              return (
                <div key={icon.id}>
                  <div
                    className={`about-cluster-item absolute select-none ${
                      hasEntered ? "about-has-entered" : ""
                    }`}
                    style={iconStyle}
                  >
                    <span
                      className={`about-float-drift ${
                        isCursorIntroTarget ? "about-intro-anchor" : ""
                      }`}
                    >
                      <span
                        className={`about-icon-settle-wobble ${
                          hasBurst ? "bubble-burst" : ""
                        } ${isReturning ? "bubble-return" : ""}`}
                      >
                        <img
                          ref={
                            icon.id === CURSOR_INTRO_TARGET_BUBBLE_ID
                              ? cursorIntroTargetRef
                              : null
                          }
                          src={icon.src}
                          alt={icon.alt}
                          className="about-bubble select-none"
                          draggable={false}
                          loading="eager"
                          decoding="sync"
                          // The target bubble is the other half of the offset
                          // geometry; re-measure once it has real dimensions.
                          onLoad={
                            icon.id === CURSOR_INTRO_TARGET_BUBBLE_ID
                              ? updateCursorIntroOffset
                              : undefined
                          }
                          onMouseEnter={
                            !hasBurst
                              ? () => handleBubbleHoverBurst(icon.id)
                              : undefined
                          }
                          onPointerUp={
                            !hasBurst
                              ? (event) => {
                                  if (event.pointerType === "touch") {
                                    handleBubbleTouchBurst(icon.id);
                                  }
                                }
                              : undefined
                          }
                        />
                      </span>
                    </span>
                  </div>
                  {isBubble &&
                    hasBurst &&
                    BUBBLE_POP_FRAGMENTS.map((fragment) => (
                      <span
                        key={`${icon.id}-${fragment.id}`}
                        className="bubble-pop-fragment absolute pointer-events-none"
                        style={
                          {
                            "--about-left": icon.left,
                            "--about-mobile-left": icon.mobileLeft,
                            top: icon.top,
                            width: fragment.size,
                            height: fragment.size,
                            "--pop-dx": fragment.dx,
                            "--pop-dy": fragment.dy,
                            "--pop-delay": fragment.delay,
                          } as React.CSSProperties
                        }
                      />
                    ))}
                </div>
              );
            })}
          </div>

          {/* Bio paragraph */}
          <p className="text-gray-600 leading-7 mb-8 max-w-2xl mx-auto font-sans text-base">
            I'm a product designer with a systems mindset, drawn to the work
            that makes everything else hold together: the systems that scale a
            product, the craft that makes it feel considered, and the ways of
            working that help teams shape better solutions.
          </p>
          <p className="text-gray-600 leading-7 mb-8 max-w-2xl mx-auto font-sans text-base">
            I currently work on the design systems team at WiseTech Global, a
            provider of enterprise B2B logistics software. It’s a mature product
            in a complex domain, with expert workflows, legacy constraints, and
            a lot of breadth - so consistency and compatibility matter as much
            as innovation.
          </p>

          <p className="text-gray-600 leading-7 mb-8 max-w-2xl mx-auto font-sans text-base">
            Design systems pulled me toward what I’m naturally wired for:
            pragmatic problem solving paired with process and craft. I’ll sweat
            the details when they matter, but I always take a strategic approach
            to my work, factoring in business goals, product goals, and
            technical constraints.
          </p>

          <p className="text-gray-600 leading-7 mb-8 max-w-2xl mx-auto font-sans text-base">
            Lately, I’ve been deeply exploring what it means to be an AI-enabled
            designer across design and code environments. I’m especially
            interested in the layer beneath the prompt: structured skills,
            reusable instructions, MCP servers, and design-system context that
            help AI work with clearer intent and stronger guardrails.
          </p>

          <p className="text-gray-600 leading-7 mb-8 max-w-2xl mx-auto font-sans text-base">
            I do my best work alongside people who show up as themselves and
            try to bring that out in others. That kind of openness is where
            collaboration and creativity really thrive, and where a perfectly
            timed gif counts as a genuine contribution. ;)
          </p>

          {/* Experience section */}
          <section
            className="max-w-2xl mx-auto mt-16 pt-16 border-t border-gray-200/80 text-left"
            aria-labelledby="experience-heading"
          >
            <h2
              id="experience-heading"
              className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 md:mb-12"
            >
              Experience
            </h2>
            <ol className="space-y-10">
              {EXPERIENCE_ITEMS.map((item) => (
                <li
                  key={`${item.role}-${item.period}`}
                  className="grid grid-cols-[14px_1fr] gap-x-5"
                >
                  <span
                    className="mt-2 h-2.5 w-2.5 bg-[#47DD4E] shadow-[2px_2px_0_rgba(0,0,0,0.08)]"
                    aria-hidden
                  />
                  <div>
                    <div className="mb-1.5 flex flex-wrap items-center gap-2.5">
                      <h3 className="!font-sans text-xl font-medium text-gray-900">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <span className="inline-block px-2 py-0.5 text-sm font-sans bg-gray-100 border border-gray-200 text-gray-600 rounded">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-base text-gray-500 mb-2.5">
                      {item.organization} · {item.period}
                    </p>
                    <p className="font-sans text-base leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Contact section */}
          <div className="max-w-2xl mx-auto mt-16 pt-16 border-t border-gray-200/80">
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
                      left: "50%",
                      marginLeft: "-19px",
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
                  href="https://github.com/tulsa-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-b border-gray-200 text-gray-700 hover:text-gray-900 transition-colors group"
                >
                  <span className="font-sans text-base">GitHub</span>
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
