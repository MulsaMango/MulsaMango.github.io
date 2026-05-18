import { useState, useEffect, useRef } from "react";
import onigiri from "../routes/about-images/onigiri.png";

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
    <div className="fixed inset-0 flex items-center justify-center z-50 px-6">
      <div className="flex flex-col items-center gap-8 max-w-md w-full">
        <div className="text-center space-y-3 w-full">
          <div className="flex justify-center" aria-hidden="true">
            <div className="password-gate-onigiri-float w-12 shrink-0">
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
          <p className="font-display text-xl md:text-2xl font-medium text-gray-800 whitespace-nowrap">
            Hey there!
          </p>
          <div className="space-y-1.5 w-full">
            <p className="font-sans text-sm md:text-base text-gray-500 leading-[1.55]">
              I&apos;m adding the final touches to my design portfolio.
            </p>
            <p className="font-sans text-sm md:text-base text-gray-500 leading-[1.55]">
              Check back here soon — Tulsa
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          style={shake ? { animation: "shake 0.4s ease-out" } : {}}
          className="w-full flex justify-center"
        >
          <div className="flex items-stretch border border-black/15 bg-white/70 backdrop-blur-sm overflow-hidden shadow-sm">
            <input
              ref={inputRef}
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="password"
              autoComplete="current-password"
              className="px-4 py-3 text-sm font-mono bg-transparent outline-none placeholder:text-black/25 w-48 text-black"
            />
            <button
              type="submit"
              className="px-4 py-3 text-sm font-sans font-medium text-black/50 hover:text-black hover:bg-black/5 transition-colors border-l border-black/10 cursor-pointer"
            >
              enter
            </button>
          </div>
        </form>
      </div>

      <style>{`
        /* Soft vertical bob */
        @keyframes password-gate-onigiri-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .password-gate-onigiri-float {
          transform-origin: center center;
          animation: password-gate-onigiri-float 4.1s ease-in-out 0.2s infinite
            both;
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
