import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { business, serviceAreas } from "@/lib/site-config";

export function ServiceAreas() {
  return (
    <Section tone="white" id="areas">
      <SectionHeading
        eyebrow="Service Areas"
        title={`Pest control across ${business.region}`}
        align="center"
      />

      <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-[var(--color-ink)]/10 border border-[var(--color-ink)]/10 sm:grid-cols-3 lg:grid-cols-5">
        {serviceAreas.map((area, i) => (
          <Reveal
            key={area}
            delay={(i % 5) * 60}
            distance={12}
            className="flex items-center gap-2 bg-[var(--color-cream)] px-4 py-4 text-sm font-medium text-[var(--color-charcoal)]/80"
          >
            <MapPin className="size-3.5 shrink-0 text-[var(--color-accent-dark)]" aria-hidden />
            {area}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
