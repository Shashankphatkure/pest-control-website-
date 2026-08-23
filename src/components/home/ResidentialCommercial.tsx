import { Section, SectionHeading } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ResidentialCommercial() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="Who We Serve"
        title="For your home. For your business."
        description="The same standard of care, tailored to the property."
        align="center"
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal className="flex flex-col border border-[var(--color-ink)]/10 bg-white">
          <div className="aspect-[16/9] w-full">
            <Photo src="/images/site/residential.jpg" alt="Residential apartment buildings" className="size-full" />
          </div>
          <div className="flex flex-col gap-3 p-7">
            <h3 className="font-heading text-xl font-bold text-[var(--color-charcoal)]">Residential Pest Control</h3>
            <p className="text-sm leading-relaxed text-[var(--color-charcoal)]/60">
              For apartments, houses, villas and housing societies — treatment that fits around your family&apos;s routine.
            </p>
            <LinkButton href="/contact" variant="primary" size="md" showArrow className="mt-2 w-fit">
              Protect Your Home
            </LinkButton>
          </div>
        </Reveal>

        <Reveal
          delay={100}
          className="flex flex-col border border-[var(--color-ink)]/10 bg-[var(--color-charcoal)] text-[var(--color-cream)]"
        >
          <div className="aspect-[16/9] w-full">
            <Photo
              src="/images/site/commercial-kitchen.jpg"
              alt="Commercial kitchen where staff prepare food"
              className="size-full"
              variant="dark"
            />
          </div>
          <div className="flex flex-col gap-3 p-7">
            <h3 className="font-heading text-xl font-bold">Commercial Pest Control</h3>
            <p className="text-sm leading-relaxed text-[var(--color-cream)]/65">
              For restaurants, hotels, offices, warehouses, factories, clinics, schools and food businesses.
            </p>
            <LinkButton href="/commercial" variant="secondary" size="md" showArrow className="mt-2 w-fit">
              Request Commercial Service
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
