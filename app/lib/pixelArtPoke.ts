import type { PointerEvent } from "react";

export type PokeOffset = {
  x: string;
  y: string;
  rotate: string;
};

export function getPokeOffset(
  event: PointerEvent<HTMLElement>,
): PokeOffset {
  const rect = event.currentTarget.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const relativeX = (event.clientX - centerX) / Math.max(rect.width / 2, 1);
  const relativeY = (event.clientY - centerY) / Math.max(rect.height / 2, 1);
  const clamp = (value: number) => Math.max(-1, Math.min(1, value));
  const nudgeX = clamp(-relativeX) * 5;
  const nudgeY = clamp(-relativeY) * 5;
  const nudgeRotate = clamp(-relativeX) * 1.6;

  return {
    x: `${nudgeX.toFixed(2)}px`,
    y: `${nudgeY.toFixed(2)}px`,
    rotate: `${nudgeRotate.toFixed(2)}deg`,
  };
}

export function canUsePixelArtPoke(
  event: PointerEvent<HTMLElement>,
): boolean {
  return (
    event.pointerType === "mouse" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
