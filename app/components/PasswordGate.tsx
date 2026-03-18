import { useState, useEffect, useRef } from "react";

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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        style={shake ? { animation: "shake 0.4s ease-out" } : {}}
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
