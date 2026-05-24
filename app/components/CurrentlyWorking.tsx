import { CURRENT_WORK } from "../lib/profile";

// The "Working on … @ Company" line shared by the landing hero and the password
// gate. Rendered as an inline-flex row so it sits left-aligned inside a text
// block (landing) yet centres when its parent is text-centered (gate). Colour
// and size are inherited, so each caller styles it via the wrapping element.
export function CurrentlyWorking({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-start gap-x-1.5 text-left ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mt-[3px] h-4 w-4 shrink-0 text-gray-400"
        aria-hidden
      >
        <title>Location</title>
        <path d="M12 2.75c-3.1 0-5.45 2.43-5.45 5.65 0 4.57 4.42 9.92 5.14 10.76a.4.4 0 0 0 .62 0c.72-.84 5.14-6.19 5.14-10.76 0-3.22-2.35-5.65-5.45-5.65zm0 8.35a2.55 2.55 0 1 1 0-5.1 2.55 2.55 0 0 1 0 5.1z" />
      </svg>
      <span>
        {CURRENT_WORK.lead}{" "}
        <a
          href={CURRENT_WORK.company.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#3CBC42] underline underline-offset-2 transition-colors"
        >
          {CURRENT_WORK.company.name}
        </a>
      </span>
    </span>
  );
}
