"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

/**
 * Fades (and lifts) its children in when they scroll into view, and back out
 * when they scroll past — in either direction, not a one-shot reveal. Pass
 * `delay` (ms) to stagger items in a grid/list. Pass `as` to render a
 * semantic tag (e.g. "li" inside a <ul>) instead of the default <div>.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 22,
  threshold = 0.12,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  threshold?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(prefersReducedMotion ? true : entry.isIntersecting);
        setReady(true);
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
    transition: ready
      ? `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
      : "none",
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
