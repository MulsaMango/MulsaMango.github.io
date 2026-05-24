import { useEffect, useRef } from "react";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  /** Accessible name for the modal. */
  label: string;
  /** Appended to the panel's classes so callers can tweak sizing per use. */
  className?: string;
  children: React.ReactNode;
};

export function Dialog({ open, onClose, label, className, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  // Drive the native element from the `open` prop. showModal() is the whole
  // reason to build on <dialog>: it gives us the top layer, the ::backdrop, the
  // focus trap, and focus restoration for free, so this stays a thin wrapper.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Esc dispatches the native `cancel` event; route it back through onClose so
  // the parent remains the single source of truth for open state.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const handleCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  // showModal() doesn't lock background scroll, so pin both body and html while open.
  useEffect(() => {
    if (!open) return;
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, [open]);

  // A click landing on the dialog element itself can only be the backdrop — the
  // panel content lives in descendant nodes, so this never fires for content.
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === ref.current) onClose();
  };

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClick={handleBackdropClick}
      className={`m-auto h-[90vh] w-[95vw] max-w-[1400px] overflow-hidden rounded-xl bg-white p-0 shadow-2xl backdrop:bg-gray-900/40 ${className ?? ""}`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-3 top-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/80 text-gray-500 shadow-sm transition-colors hover:bg-white hover:text-gray-900"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <title>Close</title>
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
      {/* scrollbar-gutter:stable reserves the scrollbar's space at all times so
          content doesn't shift when it appears as the panel content grows. */}
      <div className="h-full overflow-y-auto [scrollbar-gutter:stable]">{children}</div>
    </dialog>
  );
}
