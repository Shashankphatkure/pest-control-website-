import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/home/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { services, business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pest Control Services",
  description: `Full range of pest control services for homes and businesses in ${business.region} — cockroaches, termites, bed bugs, rodents, mosquitoes and more.`,
};

export default function ServicesPage() {
  return (
    <>
      <Section tone="cream" className="pt-14 sm:pt-16">
        <SectionHeading
          eyebrow="Services"
          title="Whatever the pest, we've got a plan for it."
          description="Every treatment starts with understanding the problem, not a one-size-fits-all spray. Pick what you're dealing with to learn more."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.key} delay={(i % 3) * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
