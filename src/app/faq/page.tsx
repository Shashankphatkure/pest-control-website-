import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { faqs, business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Common questions about pest control treatment, safety and pricing from ${business.name}.`,
};

export default function FAQPage() {
  return (
    <>
      <Section tone="cream" className="pt-14 sm:pt-16">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />
        <Reveal className="mt-12" delay={80}>
          <FAQAccordion items={faqs} />
        </Reveal>
      </Section>
      <FinalCTA />
    </>
  );
}
