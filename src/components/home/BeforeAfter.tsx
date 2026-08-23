import { Section, SectionHeading } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

const stages = [
  { label: "Inspect", src: "/images/pests/cockroach.jpg", alt: "Close-up of a cockroach, the kind of activity an inspection looks for" },
  { label: "Treat", src: "/images/site/technician.jpg", alt: "Pest control technician in protective gear applying treatment" },
  { label: "Protect", src: "/images/site/residential.jpg", alt: "Residential apartment buildings" },
];

export function BeforeAfter() {
  return (
    <Section tone="white" id="real-work">
      <SectionHeading
        eyebrow="How It Works"
        title="How a treatment plays out"
        description="From spotting the signs to a treated, protected property. Real project photography to be added here as jobs are completed."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stages.map((stage, i) => (
          <Reveal key={stage.label} delay={i * 100} className="flex flex-col gap-3">
            <div className="aspect-[4/3] w-full">
              <Photo src={stage.src} alt={stage.alt} className="size-full" frame />
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
