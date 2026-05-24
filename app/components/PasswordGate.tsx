import { useEffect, useRef, useState } from "react";
import { HEADLINE, TAGLINE } from "../lib/profile";
import { EmailCopyLink, LinkedInLink } from "./ContactLinks";
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
      <div className="flex flex-col items-center text-center gap-12 md:gap-16 max-w-lg w-full">
        {/* Headline, tagline, and current work mirrored from the landing hero */}
        <div className="space-y-4">
          <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-gray-800">
            {HEADLINE}
          </h1>
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

        {/* A way out if the password doesn't work */}
        <div className="space-y-2">
          <p className="font-sans text-sm text-gray-500">
            Having trouble getting in? Reach out:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <EmailCopyLink className="text-sm text-gray-700 hover:underline flex items-center gap-2 font-mono" />
            <LinkedInLink className="text-sm text-gray-700 hover:underline flex items-center gap-2 font-mono" />
          </div>
        </div>
      </div>

      <style>{`
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
