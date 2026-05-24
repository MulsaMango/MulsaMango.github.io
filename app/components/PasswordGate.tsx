import { useEffect, useRef, useState } from "react";
import { HEADLINE, TAGLINE } from "../lib/profile";
import onigiri from "../routes/about-images/onigiri.png";
import { EmailCopyLink } from "./ContactLinks";
import { CurrentlyWorking } from "./CurrentlyWorking";

const STORAGE_KEY = "portfolio_auth";
const PASSWORD = (import.meta.env.VITE_PASSWORD as string | undefined)?.trim();

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
            <div
              className="password-gate-onigiri-float w-12 shrink-0"
              aria-hidden="true"
            >
              <img
                src={onigiri}
                alt=""
                width={48}
                height={48}
                draggable={false}
                decoding="async"
                className="password-gate-onigiri-img w-12 h-auto select-none"
              />
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
        .password-gate-onigiri-img {
          display: block;
          image-rendering: pixelated;
          filter: drop-shadow(0 6px 10px rgba(17, 24, 39, 0.2));
        }
        @media (prefers-reduced-motion: reduce) {
          .password-gate-onigiri-float {
            animation: none;
            transform: none;
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
