import { Section, SectionHeading } from "@/components/ui/Section";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

const stages = [
  { label: "Before", caption: "Documented pest activity at inspection" },
  { label: "Treatment", caption: "Technician performing the treatment" },
  { label: "After", caption: "Verified result after treatment" },
];

export function BeforeAfter() {
  return (
    <Section tone="white" id="real-work">
      <SectionHeading
        eyebrow="Real Work"
        title="We've actually done this work"
        description="A look at how a treatment plays out from first inspection to verified result. Real project photography to be added here."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stages.map((stage, i) => (
          <Reveal key={stage.label} delay={i * 100} className="flex flex-col gap-3">
            <div className="aspect-[4/3] w-full">
              <PhotoPlaceholder label={stage.caption} className="size-full" frame />
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-signal-deep)]">
              {stage.label}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
