import { useState } from "react";
import { Dialog } from "../../components/Dialog";
import App from "./prototype/App";

// Surfaces the Figma Make prototype behind a launcher that opens it in a modal.
// Housing the wide, dense tool in a dialog lets it escape the article column's
// max-width entirely (the dialog portals to the top layer) instead of fighting
// the layout. The .multi-level-grouping-embed wrapper travels into the dialog,
// so the scoped shadcn tokens (see theme.css) keep applying there.
export function MultiLevelGroupingCaseStudy() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
          <App />
        </div>
      </Dialog>
    </>
  );
}
