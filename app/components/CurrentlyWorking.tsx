import { CURRENT_WORK } from "../lib/profile";

// The "Previously … → incoming …" line shared by the landing hero and the
// password gate. Colour and size are inherited, so each caller styles it via
// the wrapping element (left-aligned on the landing hero, centred on the gate).
export function CurrentlyWorking({ className = "" }: { className?: string }) {
  return (
    <span className={`text-left leading-[1.8] ${className}`}>
      <span>
        {CURRENT_WORK.lead}{" "}
        <a
          href={CURRENT_WORK.company.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#3CBC42] underline underline-offset-2 transition-colors"
        >
          {CURRENT_WORK.company.name}
        </a>{" "}
        {CURRENT_WORK.companyEmoji}
        <br />
        {CURRENT_WORK.trail}{" "}
        <a
          href={CURRENT_WORK.next.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#3CBC42] underline underline-offset-2 transition-colors"
        >
          {CURRENT_WORK.next.name}
        </a>{" "}
        {CURRENT_WORK.nextEmoji}
      </span>
    </span>
  );
}
