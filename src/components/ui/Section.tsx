import { type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  containerClassName,
  id,
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tone?: "cream" | "white" | "charcoal";
}) {
  const toneClasses = {
    cream: "bg-[var(--color-cream)]",
    white: "bg-[var(--color-white)]",
    charcoal: "bg-[var(--color-charcoal)] text-[var(--color-cream)]",
  } as const;

  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-32", toneClasses[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 border-b pb-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase font-mono",
        dark ? "border-white/20 text-[var(--color-cream)]/70" : "border-[var(--color-accent-dark)]/25 text-[var(--color-accent-dark)]"
      )}
    >
      <span className="size-[5px] bg-[var(--color-accent)]" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center max-w-2xl mx-auto",
        className
      )}
    >
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "text-balance font-heading text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] font-bold",
          dark ? "text-[var(--color-cream)]" : "text-[var(--color-charcoal)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-balance text-base sm:text-lg leading-relaxed",
            dark ? "text-[var(--color-cream)]/70" : "text-[var(--color-charcoal)]/65"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
