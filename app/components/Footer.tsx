import { useState } from "react";

export function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer className="max-w-7xl mx-auto px-6 py-8 mt-20 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          Website made by me and Cursor 🤖
        </p>
        <div className="flex gap-6 items-center">
          <a
            href="#resume"
            className="text-sm text-gray-700 hover:underline flex items-center gap-2 font-mono"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="inline"
            >
              <title>Resume</title>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/tulsa-daley/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 hover:underline flex items-center gap-2 font-mono"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline"
            >
              <title>LinkedIn</title>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <div className="relative">
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText("tulsadaley@gmail.com");
                  setEmailCopied(true);
                  setTimeout(() => {
                    setEmailCopied(false);
                  }, 2000);
                } catch (err) {
                  console.error("Failed to copy email:", err);
                }
              }}
              type="button"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="text-sm text-gray-700 hover:underline flex items-center gap-2 cursor-pointer relative font-mono"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="inline transition-all duration-200"
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
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </>
                )}
              </svg>
              tulsadaley@gmail.com
            </button>
            {showTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap pointer-events-none z-10">
                {emailCopied ? "Copied!" : "Click to copy email"}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                  <div className="border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
