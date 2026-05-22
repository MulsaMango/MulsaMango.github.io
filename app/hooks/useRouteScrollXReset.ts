import { useEffect } from "react";
import { useLocation } from "react-router";

/** Clears stray horizontal scroll when changing routes (e.g. About layout at ≤520px). */
export function useRouteScrollXReset() {
  const { pathname } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
}
