import type { Metadata } from "next";
import { GraduationCap, ShieldCheck, ReceiptText, LifeBuoy } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us / Why Choose Us",
  description: `Learn how ${business.name} approaches pest control — trained technicians, safe treatment, transparent pricing and follow-up support.`,
};

const reasons = [
  {
    icon: GraduationCap,
    title: "Experienced Technicians",
    description: "Professionally trained personnel who understand the treatment process end to end.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Treatment",
    description: "Responsible treatment procedures with appropriate safety considerations for your home or business.",
  },
  {
    icon: ReceiptText,
    title: "Transparent Pricing",
    description: "You know what you're paying for before treatment begins — no surprises after the visit.",
  },
  {
    icon: LifeBuoy,
    title: "Follow-up Support",
    description: "Appropriate guidance after treatment, so you know what to expect next.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section tone="cream" className="pt-14 sm:pt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6" threshold={0.05}>
            <h1 className="text-balance font-heading text-4xl font-extrabold leading-[1.08] text-[var(--color-charcoal)] sm:text-5xl">
              We protect your home, business and peace of mind.
            </h1>
            <p className="text-balance text-lg leading-relaxed text-[var(--color-charcoal)]/65">
              {business.name} exists to solve pest problems properly — not just spray and leave. Every visit starts with understanding what&apos;s actually happening on your property.
            </p>
            <LinkButton href="/contact" variant="primary" size="lg" showArrow className="w-fit">
              Talk to an Expert
            </LinkButton>
          </Reveal>
          <Reveal className="aspect-[4/3] w-full" delay={100} threshold={0.05}>
            <PhotoPlaceholder label="Technician on-site" className="size-full" />
          </Reveal>
        </div>
      </Section>

      <Section tone="white" id="why-us">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Pest control isn't just about killing pests. It's about stopping them from coming back."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 2) * 100} className="flex flex-col gap-3 border-l-2 border-[var(--color-ink)]/10 pl-4">
              <Icon className="size-5 text-[var(--color-signal-deep)]" aria-hidden />
              <h3 className="font-heading text-base font-bold text-[var(--color-charcoal)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-charcoal)]/60">{description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
