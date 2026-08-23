import Image from "next/image";
import { type CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * Real photography, framed to match the site's documentary "Field Report"
 * language (hairline border, optional scan-frame corner brackets). Stock
 * photography used as a stand-in until real company photography exists —
 * see /credits for attribution.
 */
export function Photo({
  src,
  alt,
  className,
  variant = "light",
  frame = false,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  variant?: "light" | "dark";
  frame?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border",
        frame && "scan-frame",
        variant === "light" ? "border-[var(--color-ink)]/12" : "border-white/10",
        className
      )}
      style={{ "--scan-color": variant === "light" ? "var(--color-signal-deep)" : "var(--color-signal)" } as CSSProperties}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}
