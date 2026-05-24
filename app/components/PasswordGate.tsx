import { useEffect, useRef, useState } from "react";
import { HEADLINE, TAGLINE } from "../lib/profile";
import onigiri from "../routes/about-images/onigiri.png";
import { EmailCopyLink } from "./ContactLinks";
import { CurrentlyWorking } from "./CurrentlyWorking";

const STORAGE_KEY = "portfolio_auth";
const PASSWORD = (import.meta.env.VITE_PASSWORD as string | undefined)?.trim();
const ONIGIRI_CLICK_WINDOW_MS = 1500;
const CONFUSED_STARS_DURATION_MS = 5000;
const CONFUSED_STAR_ORBIT_DELAYS = ["0s", "-0.47s", "-0.94s"];

// pixelarticons "star" (https://pixelarticons.com/icon/star/),
// inlined so it takes its colour from currentColor and scales crisply.
function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 20h3v2H3v-6h2v4Zm16 2h-5v-2h3v-4h2v6Zm-11-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-2-2h-4v-2h4v2Zm-7-2H5v-3h2v3Zm12 0h-2v-3h2v3ZM5 13H3v-2h2v2Zm16 0h-2v-2h2v2ZM9 9H3v2H1V7h8v2Zm14 2h-2V9h-6V7h8v4ZM11 7H9V3h2v4Zm4 0h-2V3h2v4Zm-2-4h-2V1h2v2Z" />
    </svg>
  );
}

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [onigiriSpinning, setOnigiriSpinning] = useState(false);
  const [onigiriClickCount, setOnigiriClickCount] = useState(0);
  const [confusedStars, setConfusedStars] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const onigiriClickResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const confusedStarsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!PASSWORD) {
      setUnlocked(true);
      setMounted(true);
      return;
    }
    if (localStorage.getItem(STORAGE_KEY) === PASSWORD) {
      setUnlocked(true);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !unlocked) {
      inputRef.current?.focus();
    }
  }, [mounted, unlocked]);

  useEffect(() => {
    return () => {
      if (onigiriClickResetRef.current) {
        clearTimeout(onigiriClickResetRef.current);
      }
      if (confusedStarsTimeoutRef.current) {
        clearTimeout(confusedStarsTimeoutRef.current);
      }
    };
  }, []);

  const triggerConfusedStars = () => {
    setConfusedStars(true);
    if (confusedStarsTimeoutRef.current) {
      clearTimeout(confusedStarsTimeoutRef.current);
    }
    confusedStarsTimeoutRef.current = setTimeout(() => {
      setConfusedStars(false);
      confusedStarsTimeoutRef.current = null;
    }, CONFUSED_STARS_DURATION_MS);
  };

  const handleOnigiriClick = () => {
    if (onigiriSpinning) {
      setOnigiriSpinning(false);
      requestAnimationFrame(() => setOnigiriSpinning(true));
    } else {
      setOnigiriSpinning(true);
    }

    if (onigiriClickResetRef.current) {
      clearTimeout(onigiriClickResetRef.current);
    }

    const nextClickCount = onigiriClickCount + 1;
    if (nextClickCount >= 3) {
      setOnigiriClickCount(0);
      triggerConfusedStars();
      return;
    }

    setOnigiriClickCount(nextClickCount);
    onigiriClickResetRef.current = setTimeout(() => {
      setOnigiriClickCount(0);
      onigiriClickResetRef.current = null;
    }, ONIGIRI_CLICK_WINDOW_MS);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, PASSWORD);
      setUnlocked(true);
    } else {
      setShake(true);
      setInput("");
      setTimeout(() => setShake(false), 500);
      inputRef.current?.focus();
    }
  };

  if (!mounted) return null;
  if (unlocked) return <>{children}</>;

  return (
    // Allow vertical scroll: the headline, tagline, and contact together can
    // exceed the viewport on short screens, where a fixed/centered-only layout
    // would clip the password field.
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center px-6 py-12">
      <div className="flex flex-col items-start text-left gap-12 md:gap-16 max-w-lg w-full">
        {/* Headline, tagline, and current work mirrored from the landing hero */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-[clamp(1.375rem,calc((100vw-7rem)/10),2.25rem)] font-semibold leading-tight text-gray-800 whitespace-nowrap">
              {HEADLINE}
            </h1>
            <div className="password-gate-onigiri-float relative w-12 shrink-0">
              {confusedStars && (
                <div
                  className="password-gate-confused-stars pointer-events-none"
                  aria-hidden="true"
                >
                  {CONFUSED_STAR_ORBIT_DELAYS.map((delay) => (
                    <div
                      key={delay}
                      className="password-gate-confused-star"
                      style={{ animationDelay: delay }}
                    >
                      <StarIcon className="password-gate-confused-star-icon block text-slate-600" />
                    </div>
                  ))}
                </div>
              )}
              <button
                type="button"
                onClick={handleOnigiriClick}
                aria-label="Spin the onigiri"
                className="password-gate-onigiri-img-button cursor-pointer border-0 bg-transparent p-0"
              >
                <img
                  src={onigiri}
                  alt=""
                  width={48}
                  height={48}
                  draggable={false}
                  decoding="async"
                  onAnimationEnd={() => setOnigiriSpinning(false)}
                  className={[
                    "password-gate-onigiri-img w-12 h-auto select-none",
                    onigiriSpinning && "password-gate-onigiri-spin",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              </button>
            </div>
          </div>
          <p className="font-sans text-sm md:text-base text-gray-500 leading-[1.75]">
            {TAGLINE}
          </p>
          <p className="font-sans text-sm text-gray-500 leading-relaxed">
            <CurrentlyWorking />
          </p>
        </div>

        <div className="w-full space-y-3">
          <p className="font-sans text-sm text-gray-600">
            Enter the password provided to visit my portfolio.
          </p>
          <form
            onSubmit={handleSubmit}
            style={shake ? { animation: "shake 0.4s ease-out" } : {}}
            className="w-full"
          >
            <div className="flex items-stretch w-full border border-black/15 bg-white/70 backdrop-blur-sm overflow-hidden shadow-sm">
              <input
                ref={inputRef}
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="password"
                autoComplete="current-password"
                className="flex-1 min-w-0 px-4 py-3 text-base md:text-sm font-mono bg-transparent outline-none placeholder:text-black/25 text-black"
              />
              <button
                type="submit"
                className="shrink-0 px-4 py-3 text-base md:text-sm font-sans font-medium text-black/50 hover:text-black hover:bg-black/5 transition-colors border-l border-black/10 cursor-pointer"
              >
                enter
              </button>
            </div>
          </form>
        </div>

        {/* A way out if the password doesn't work — label and links share a
            line when there's room and wrap individually when there isn't */}
        <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-2">
          <p className="font-sans text-sm text-gray-500">
            Having trouble getting in? Shoot me an email:
          </p>
          <EmailCopyLink className="text-sm text-gray-700 hover:underline flex items-center gap-2 font-mono" />
        </div>
      </div>

      <style>{`
        /* Soft vertical bob for the onigiri */
        @keyframes password-gate-onigiri-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .password-gate-onigiri-float {
          transform-origin: center center;
          animation: password-gate-onigiri-float 4.1s ease-in-out 0.2s infinite both;
        }
        .password-gate-onigiri-img-button {
          display: block;
        }
        .password-gate-onigiri-img {
          display: block;
          image-rendering: pixelated;
          filter: drop-shadow(0 6px 10px rgba(17, 24, 39, 0.2));
        }
        @keyframes password-gate-onigiri-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(2520deg); }
        }
        .password-gate-onigiri-spin {
          transform-origin: center center;
          animation: password-gate-onigiri-spin 2s cubic-bezier(0.12, 0.85, 0.15, 1) forwards;
        }
        .password-gate-confused-stars {
          position: absolute;
          left: 50%;
          bottom: 100%;
          margin-bottom: 4px;
          width: 0;
          height: 0;
        }
        .password-gate-confused-star {
          position: absolute;
          left: 0;
          top: 0;
          width: 18px;
          height: 18px;
          margin-left: -9px;
          margin-top: -9px;
          animation: password-gate-confused-star-orbit 1.4s linear infinite;
        }
        .password-gate-confused-star-icon {
          image-rendering: pixelated;
        }
        @keyframes password-gate-confused-star-orbit {
          0% {
            transform: translate(32px, -10px) scale(0.85);
            opacity: 0.8;
          }
          25% {
            transform: translate(0, -18px) scale(0.5);
            opacity: 0.35;
          }
          50% {
            transform: translate(-32px, -10px) scale(0.85);
            opacity: 0.8;
          }
          75% {
            transform: translate(0, -4px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translate(32px, -10px) scale(0.85);
            opacity: 0.8;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .password-gate-onigiri-float {
            animation: none;
            transform: none;
          }
          .password-gate-onigiri-spin {
            animation: none;
          }
          .password-gate-confused-star {
            animation: none;
            transform: translate(0, -10px) scale(0.85);
            opacity: 0.7;
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
