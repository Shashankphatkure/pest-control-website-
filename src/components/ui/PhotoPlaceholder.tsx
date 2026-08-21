import { type CSSProperties } from "react";
import { Camera, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Stand-in for real company photography. The brief calls for documentary-style
 * technician photos, not stock imagery — until those are shot, this renders an
 * intentional, on-brand placeholder rather than a fake or generic photo.
 * Swap for a real <Image> once photography is available.
 *
 * Carries the site's signature "scan frame" motif — corner brackets and a
 * monospace field-note caption, evoking inspection/detection.
 */
export function PhotoPlaceholder({
  label,
  icon: Icon = Camera,
  className,
  variant = "light",
  frame = false,
}: {
  label: string;
  icon?: LucideIcon;
  className?: string;
  variant?: "light" | "dark";
  /** Show the corner-bracket "scan frame" — reserve for a handful of signature moments, not every image. */
  frame?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden border text-center",
        frame && "scan-frame",
        variant === "light"
          ? "border-[var(--color-ink)]/12 bg-[linear-gradient(160deg,#e2e6d4_0%,#c3d1ac_45%,#193b2a_150%)]"
          : "border-white/10 bg-[linear-gradient(160deg,#1a1f18_0%,#193b2a_60%,#0c1710_150%)]",
        className
      )}
      style={{ "--scan-color": variant === "light" ? "var(--color-signal-deep)" : "var(--color-signal)" } as CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />
      <div
        className={cn(
          "flex size-10 items-center justify-center border",
          variant === "light"
            ? "border-[var(--color-signal-deep)]/25 bg-white/60 text-[var(--color-signal-deep)]"
            : "border-white/20 bg-white/5 text-[var(--color-signal)]"
        )}
      >
        <Icon className="size-[18px]" aria-hidden />
      </div>
      <p
        className={cn(
          "max-w-[75%] font-mono text-[10px] font-medium uppercase leading-relaxed tracking-[0.06em]",
          variant === "light" ? "text-[var(--color-signal-deep)]/75" : "text-white/55"
        )}
      >
        {label}
      </p>
    </div>
  );
}
