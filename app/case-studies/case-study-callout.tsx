// Shown once at the top of every case study (rendered from project.$id.tsx, not
// from inside an individual study) so the "this is a condensed snapshot" framing
// stays identical across studies instead of each one wording it differently.

// pixelarticons "lightbulb-off" (https://pixelarticons.com/icon/lightbulb-off/),
// inlined so it takes its colour from currentColor and scales crisply.
// Decorative: the adjacent copy carries the meaning, so it's hidden from AT.
function LightbulbIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M9 3h6v2H9zM7 5h2v2H7zm8 0h2v2h-2zm-8 8h2v2H7zm8 0h2v2h-2zM5 7h2v6H5zm12 0h2v6h-2zm-8 8h6v2H9zm0 4h6v2H9zm0-2h2v2H9zm4 0h2v2h-2z" />
    </svg>
  );
}

export function CaseStudySnapshotCallout() {
  return (
    <aside className="not-prose mb-10 flex items-start gap-4 rounded-lg border border-gray-200 bg-white/70 px-5 py-4 shadow-sm">
      <span className="mt-0.5 text-blue-600">
        <LightbulbIcon />
      </span>
      <div>
        <p className="font-display text-xs uppercase tracking-[0.06em] text-gray-500">
          Snapshot
        </p>
        <p className="mt-1 text-sm leading-relaxed text-gray-700">
          What you&rsquo;re reading is a snapshot &mdash; the highlights of a
          much larger project, trimmed down for a quick read. There&rsquo;s
          plenty more depth and decision-making behind the scenes, so if
          you&rsquo;d like the full walkthrough, I&rsquo;d love to talk you
          through it.
        </p>
      </div>
    </aside>
  );
}
