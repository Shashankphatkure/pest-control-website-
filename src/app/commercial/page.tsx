import type { Metadata } from "next";
import { Building2, ShieldCheck, ClipboardList, Clock } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Commercial Pest Control",
  description: `Commercial pest control for restaurants, hotels, offices, warehouses and food businesses across ${business.region}.`,
};

const industries = [
  "Restaurants & Cafes",
  "Hotels & Hospitality",
  "Offices",
  "Warehouses & Factories",
  "Clinics & Healthcare",
  "Schools",
  "Housing Societies",
  "Food Businesses",
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Compliance-minded treatment",
    description: "Treatment scheduled and documented in a way that supports your hygiene and audit requirements.",
  },
  {
    icon: Clock,
    title: "Minimal disruption",
    description: "Visits planned around your operating hours to avoid interrupting service or production.",
  },
  {
    icon: ClipboardList,
    title: "Clear reporting",
    description: "You know what was found, what was treated, and what to expect next.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <Section tone="cream" className="pt-14 sm:pt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6" threshold={0.05}>
            <h1 className="text-balance font-heading text-4xl font-extrabold leading-[1.08] text-[var(--color-charcoal)] sm:text-5xl">
              Commercial pest control that respects your business.
            </h1>
            <p className="text-balance text-lg leading-relaxed text-[var(--color-charcoal)]/65">
              For restaurants, hotels, offices, warehouses, factories, clinics, schools, housing societies and food businesses across {business.region}.
            </p>
            <LinkButton href="/contact" variant="primary" size="lg" showArrow className="w-fit">
              Request Commercial Service
            </LinkButton>
          </Reveal>
          <Reveal className="aspect-[4/3] w-full" delay={100} threshold={0.05}>
            <PhotoPlaceholder label="Technician inspecting a commercial kitchen" icon={Building2} className="size-full" />
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Who We Work With" title="Built for commercial premises" align="center" />
        <div className="mt-10 grid grid-cols-2 divide-x divide-y divide-[var(--color-ink)]/10 border border-[var(--color-ink)]/10 sm:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal
              key={industry}
              delay={(i % 4) * 60}
              distance={12}
              className="flex items-center justify-center bg-[var(--color-cream)] px-4 py-4 text-center text-sm font-medium text-[var(--color-charcoal)]/80"
            >
              {industry}
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading eyebrow="Why Businesses Choose Us" title="What commercial clients can expect" align="center" />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 100} className="flex flex-col items-center gap-3 text-center">
              <span className="flex size-12 items-center justify-center border border-[var(--color-signal-deep)]/25 bg-[var(--color-accent-soft)] text-[var(--color-accent-dark)]">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-base font-bold text-[var(--color-charcoal)]">{title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-[var(--color-charcoal)]/60">{description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
