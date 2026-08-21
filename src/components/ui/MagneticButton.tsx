"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const PULL_RADIUS = 46; // px beyond the button's own bounds where the pull kicks in
const STRENGTH = 0.18; // fraction of cursor offset the button travels at full strength
const MAX_OFFSET = 9; // px — hard cap so it never drifts into a neighboring element

/**
 * Wraps a button/link so it drifts toward the cursor as it enters a radius
 * around it, and eases back to rest when the cursor moves away. Tracks the
 * cursor globally (not just on :hover) so the pull feels magnetic rather
 * than reactive only once the pointer lands on top of it.
 */
export function MagneticButton({ children, className }: { children: ReactNode; className?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    function handlePointerMove(e: MouseEvent) {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const el = wrapperRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const edgeDist = Math.hypot(dx, dy) - Math.hypot(rect.width, rect.height) / 2;
        if (edgeDist < PULL_RADIUS) {
          const pull = 1 - Math.max(edgeDist, 0) / PULL_RADIUS;
          let x = dx * STRENGTH * pull;
          let y = dy * STRENGTH * pull;
          const magnitude = Math.hypot(x, y);
          if (magnitude > MAX_OFFSET) {
            const scale = MAX_OFFSET / magnitude;
            x *= scale;
            y *= scale;
          }
          setOffset({ x, y });
        } else {
          setOffset({ x: 0, y: 0 });
        }
      });
    }

    window.addEventListener("mousemove", handlePointerMove);
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        display: "inline-block",
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
