import { type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ProcessStepsSection({
  eyebrow = "How It Works",
  title,
  description,
  steps,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: ProcessStep[];
  id?: string;
}) {
  return (
    <Section tone="cream" id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" />

      <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <div
          className="pointer-events-none absolute top-8 left-0 right-0 hidden border-t border-dashed border-[var(--color-ink)]/20 lg:block"
          aria-hidden
        />
        {steps.map(({ number, icon: Icon, title: stepTitle, description: stepDescription }, i) => (
          <Reveal
            key={number}
            delay={i * 90}
            className={cn(
              "relative flex flex-col items-center text-center lg:items-start lg:border-l lg:border-[var(--color-ink)]/10 lg:px-6 lg:text-left",
              i === 0 && "lg:border-l-0 lg:pl-0"
            )}
          >
            <div className="relative z-10 flex size-14 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-ink)]/15 bg-[var(--color-cream)]">
              <Icon className="size-5 text-[var(--color-signal-deep)]" aria-hidden />
            </div>
            <span className="mt-4 font-mono text-xs font-bold tracking-[0.1em] text-[var(--color-signal-deep)]">
              {number}
            </span>
            <h3 className="mt-1.5 font-heading text-lg font-bold text-[var(--color-charcoal)]">{stepTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-charcoal)]/60">{stepDescription}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
