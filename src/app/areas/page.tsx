import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { business, serviceAreas } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description: `${business.name} provides pest control across ${business.region}, including ${serviceAreas.slice(0, 4).join(", ")} and more.`,
};

export default function AreasPage() {
  return (
    <>
      <Section tone="cream" className="pt-14 sm:pt-16">
        <SectionHeading
          eyebrow="Service Areas"
          title={`Pest control across ${business.region}`}
          description="If your area isn't listed, get in touch — we may still be able to help."
        />
        <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-[var(--color-ink)]/10 border border-[var(--color-ink)]/10 sm:grid-cols-3 lg:grid-cols-5">
          {serviceAreas.map((area, i) => (
            <Reveal
              key={area}
              delay={(i % 5) * 60}
              distance={12}
              className="flex items-center gap-2 bg-white px-4 py-4 text-sm font-medium text-[var(--color-charcoal)]/80"
            >
              <MapPin className="size-3.5 shrink-0 text-[var(--color-accent-dark)]" aria-hidden />
              {area}
            </Reveal>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
