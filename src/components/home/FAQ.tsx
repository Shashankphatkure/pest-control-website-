import { Section, SectionHeading } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/lib/site-config";

export function FAQ() {
  return (
    <Section tone="cream" id="faq">
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />
      <Reveal className="mt-12" delay={80}>
        <FAQAccordion items={faqs} />
      </Reveal>
    </Section>
  );
}
