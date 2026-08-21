import { type ReactNode } from "react";

/**
 * Pins a section at the top of the viewport (just below the navbar) until the
 * next stacked section scrolls up and covers it. Pure CSS (position: sticky),
 * no JS.
 *
 * Only use this on sections that comfortably fit within one viewport at every
 * breakpoint — a section taller than the viewport gets visually "trapped"
 * while pinned, since sticky can't reveal overflowing content on its own.
 * Reserve it for short, deliberate beats (an opening or closing moment), not
 * every section, or normal scrolling starts to feel broken.
 */
export function StackSection({ children, index }: { children: ReactNode; index: number }) {
  return (
    // The outer div gives the sticky child its own containing block, sized to
    // this section's natural height. Without it, the containing block would
    // be <main> (the full page), so the section would never release — it'd
    // stay pinned for the entire remaining scroll instead of just its own.
    <div className="relative">
      <div className="sticky top-[72px] lg:top-[108px]" style={{ zIndex: 10 + index }}>
        {children}
      </div>
    </div>
  );
}
