import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing the use of ${business.name}'s website and services.`,
};

export default function TermsPage() {
  return (
    <Section tone="cream" className="pt-14 sm:pt-16">
      <SectionHeading eyebrow="Legal" title="Terms" />
      <div className="prose mt-10 max-w-2xl text-sm leading-relaxed text-[var(--color-charcoal)]/70">
        <p>
          This page is a placeholder. Replace it with terms of service reviewed for {business.name}&apos;s actual
          service agreements, cancellation policy, and liability terms before launch.
        </p>
        <p className="mt-4">Contact {business.email} with any questions once this page is finalised.</p>
      </div>
    </Section>
  );
}
