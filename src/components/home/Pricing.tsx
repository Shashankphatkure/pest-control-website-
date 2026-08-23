import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { pricing } from "@/lib/site-config";

export function Pricing() {
  const hasRealPricing = pricing.some((item) => item.startingPrice);

  if (!hasRealPricing) {
    return (
      <Section tone="white">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-[var(--radius)] border border-[var(--color-ink)]/12 bg-[var(--color-cream)] px-8 py-14 text-center">
          <SectionHeading
            eyebrow="Pricing"
            title="Get a personalised quote in minutes."
            description="Final pricing depends on property size, treatment type and infestation level. Share a few details and we'll get back to you with an exact number — no obligation."
            align="center"
          />
          <MagneticButton>
            <LinkButton href="/contact" variant="primary" size="lg" showArrow>
              Get Exact Quote
            </LinkButton>
          </MagneticButton>
        </div>
      </Section>
    );
  }

  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Pricing"
        title="Transparent starting prices"
        description="Final pricing may depend on property size, treatment type and infestation level."
        align="center"
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pricing.map((item, i) => (
          <Reveal key={item.name} delay={i * 80} className="flex flex-col gap-2 rounded-[var(--radius)] border border-[var(--color-ink)]/10 bg-[var(--color-cream)] p-6">
            <h3 className="font-heading text-base font-bold text-[var(--color-charcoal)]">{item.name}</h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-charcoal)]/50">Starting at</p>
            <p className="font-heading text-2xl font-extrabold text-[var(--color-accent-dark)]">{item.startingPrice}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <MagneticButton>
          <LinkButton href="/contact" variant="primary" size="lg" showArrow>
            Get Exact Quote
          </LinkButton>
        </MagneticButton>
      </div>
    </Section>
  );
}
