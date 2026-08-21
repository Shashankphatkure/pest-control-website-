import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${business.name} collects, uses and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <Section tone="cream" className="pt-14 sm:pt-16">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" />
      <div className="prose mt-10 max-w-2xl text-sm leading-relaxed text-[var(--color-charcoal)]/70">
        <p>
          This page is a placeholder. Replace it with a privacy policy reviewed for {business.name}&apos;s actual
          data practices — what information is collected through the quote form and WhatsApp/call contact,
          how it is stored, who it is shared with, and how customers can request its deletion.
        </p>
        <p className="mt-4">Contact {business.email} with any privacy-related questions once this page is finalised.</p>
      </div>
    </Section>
  );
}
