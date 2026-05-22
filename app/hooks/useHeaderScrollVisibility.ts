import { useEffect, useRef, useState } from "react";

const SCROLL_HIDE_MIN_WIDTH = "(min-width: 768px)";

/**
 * Hides the fixed header when scrolling down on desktop only.
 * Mobile/tablet keeps the header visible — avoids jank from address-bar
 * resize and scrollY jumps that make the bar flicker in/out.
 */
export function useHeaderScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const hideOnScroll = useRef(
    typeof window !== "undefined"
      ? window.matchMedia(SCROLL_HIDE_MIN_WIDTH).matches
      : false,
  );

  useEffect(() => {
    const mq = window.matchMedia(SCROLL_HIDE_MIN_WIDTH);

    const sync = () => {
      hideOnScroll.current = mq.matches;
      if (!mq.matches) {
        setIsVisible(true);
      }
    };

    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!hideOnScroll.current) {
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}
