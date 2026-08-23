import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Search, ClipboardCheck, SprayCan, LifeBuoy } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { LinkButton } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessStepsSection } from "@/components/shared/ProcessStepsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { serviceDetails } from "@/lib/service-details";
import { pestImageMap } from "@/lib/pest-images";
import { services, business } from "@/lib/site-config";

const processSteps = [
  { number: "01", icon: Search, title: "Inspect", description: "We assess the property to understand the extent and source of activity." },
  { number: "02", icon: ClipboardCheck, title: "Identify", description: "We confirm the pest and recommend the right treatment approach." },
  { number: "03", icon: SprayCan, title: "Treat", description: "Our technician carries out treatment safely and professionally." },
  { number: "04", icon: LifeBuoy, title: "Follow-up", description: "Guidance on what to expect next and how to prevent recurrence." },
];

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const detail = serviceDetails[params.slug];
  if (!detail) return {};
  return {
    title: `${detail.name} in ${business.city}`,
    description: detail.metaDescription,
  };
}

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const detail = serviceDetails[slug];
  if (!detail) notFound();

  const summary = services.find((s) => s.slug === slug);
  const image = pestImageMap[summary?.key ?? "other"];

  return (
    <>
      <Section tone="cream" className="pt-14 sm:pt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6" threshold={0.05}>
            <h1 className="text-balance font-heading text-4xl font-extrabold leading-[1.08] text-[var(--color-charcoal)] sm:text-5xl">
              {detail.name} in {business.city}
            </h1>
            <p className="text-balance text-lg leading-relaxed text-[var(--color-charcoal)]/65">{detail.intro}</p>
            <LinkButton href="/contact" variant="primary" size="lg" showArrow className="w-fit">
              Get a Quote
            </LinkButton>
          </Reveal>
          <Reveal className="aspect-[4/3] w-full" delay={100} threshold={0.05}>
            <Photo src={image.src} alt={image.alt} className="size-full" />
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Signs to Watch For" title="Signs of an infestation" />
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {detail.signs.map((sign, i) => (
            <Reveal
              key={sign}
              as="li"
              delay={(i % 2) * 100}
              className="flex items-start gap-3 rounded-[var(--radius)] border border-[var(--color-charcoal)]/10 bg-[var(--color-cream)] p-4"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--color-secondary-deep)]" aria-hidden />
              <span className="text-sm leading-relaxed text-[var(--color-charcoal)]/75">{sign}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="cream">
        <SectionHeading eyebrow="Why It Happens" title={`Why ${detail.shortName.toLowerCase()} become a problem`} />
        <Reveal as="p" className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-[var(--color-charcoal)]/65">
          {detail.whyProblem}
        </Reveal>
      </Section>

      <ProcessStepsSection
        eyebrow="Our Treatment Process"
        title="How we treat it"
        steps={processSteps}
      />

      <Section tone="white">
        <SectionHeading eyebrow="FAQs" title={`${detail.name} — frequently asked questions`} align="center" />
        <Reveal className="mt-10" delay={80}>
          <FAQAccordion items={detail.faqs} />
        </Reveal>
      </Section>

      <FinalCTA />
    </>
  );
}
