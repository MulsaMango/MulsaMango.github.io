import { useState } from "react";
import { Dialog } from "../../components/Dialog";
import App from "./prototype/App";

// Surfaces the Figma Make prototype behind a launcher that opens it in a modal.
// Housing the wide, dense tool in a dialog lets it escape the article column's
// max-width entirely (the dialog portals to the top layer) instead of fighting
// the layout. The .multi-level-grouping-embed wrapper travels into the dialog,
// so the scoped shadcn tokens (see theme.css) keep applying there.
//
// The live tool only ships above `lg` (1024px): its control row alone is five
// segmented controls wide and the table is intrinsically dense, so below that
// width it can't be used as intended. Rather than ship a broken interaction on
// tablet/mobile we swap in a looping walkthrough of the same features (DES-14).
// The breakpoint split is CSS-only so each device class gets the correct first
// paint from the prerendered HTML — no media-query JS, no hydration flash.
export function MultiLevelGroupingCaseStudy() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop (>= lg): the real, interactive prototype behind a launcher. */}
      <div className="hidden lg:block">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white/60 px-5 py-4 text-left transition-colors hover:border-gray-300 hover:bg-white"
        >
          <span>
            <span className="block text-sm font-medium text-gray-900">
              Interactive prototype
            </span>
            <span className="block text-sm text-gray-600">
              Explore the multi-level grouping table in a full-width view.
            </span>
          </span>
          <span className="font-display text-xs uppercase tracking-[0.06em] text-gray-500 transition-colors group-hover:text-gray-900">
            Launch →
          </span>
        </button>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          label="Multi-level grouping prototype"
        >
          <div className="multi-level-grouping-embed">
            {/* Defer mounting the heavy table until the dialog is actually
                opened — the launcher above is hidden below lg, so this subtree
                never mounts on tablet/mobile. */}
            {open && <App />}
          </div>
        </Dialog>
      </div>

      {/* Tablet / mobile (< lg): a looping walkthrough stands in for the tool. */}
      <div className="lg:hidden rounded-lg border border-gray-200 bg-white/60 p-5">
        <span className="block text-sm font-medium text-gray-900">
          Interactive prototype
        </span>
        <span className="mt-0.5 block text-sm text-gray-600">
          This tool is built for a wider screen. Here's a quick tour of grouping
          depth, expand/collapse views, record density, zebra rows, and group
          labels.
        </span>

        {/* Demo asset: record a short screen capture of the prototype and save
            it to public/multi-level-grouping-demo.mp4 (muted, looping). Add a
            <source> with a .webm for smaller files and/or a `poster` frame if
            desired. Until the file exists this renders as the empty gray frame. */}
        <div className="mt-4 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
          <video
            className="block aspect-video w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/multi-level-grouping-demo.mp4" type="video/mp4" />
          </video>
        </div>

        <span className="mt-3 block font-display text-xs uppercase tracking-[0.06em] text-gray-500">
          Demo · best explored on desktop
        </span>
      </div>
    </>
  );
}
