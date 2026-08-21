import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/home/ServiceCard";
import { services } from "@/lib/site-config";

export function ServicesGrid() {
  return (
    <Section tone="cream" id="services">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Our Services"
          title="What are you dealing with?"
          description="Tell us what's bothering you. We'll match it with the right treatment — no guesswork, no upsells."
        />
        <LinkButton href="/services" variant="outline" size="md" showArrow className="shrink-0">
          View all services
        </LinkButton>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.key} delay={(i % 3) * 90}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
