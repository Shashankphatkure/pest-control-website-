import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/home/QuoteForm";
import { business, whatsappHref, defaultWhatsappMessage } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us / Get a Quote",
  description: `Get a free pest control quote in minutes. Call, WhatsApp or fill in a short form and ${business.name} will get back to you.`,
};

export default function ContactPage() {
  const rows = [
    { icon: Phone, label: "Call", value: business.phone, href: business.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: business.whatsapp, href: whatsappHref(defaultWhatsappMessage) },
    { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
    { icon: MapPin, label: "Address", value: business.address },
    { icon: Clock, label: "Hours", value: business.hours },
  ];

  return (
    <Section tone="cream" className="pt-14 sm:pt-16">
      <SectionHeading
        eyebrow="Get a Quote"
        title="Let's figure out the right next step."
        description="Answer three quick questions and we'll get back to you — usually the same day."
      />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-6">
          {rows.map((row, i) => (
            <ContactRow key={row.label} {...row} delay={i * 70} />
          ))}
        </div>

        <Reveal delay={120}>
          <Suspense fallback={<div className="h-[420px] rounded-[var(--radius)] border border-[var(--color-charcoal)]/10 bg-white" />}>
            <QuoteForm />
          </Suspense>
        </Reveal>
      </div>
    </Section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  delay = 0,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  delay?: number;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-[var(--radius)] border border-[var(--color-charcoal)]/10 bg-white p-5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-signal-deep)]/25 bg-[var(--color-accent-soft)] text-[var(--color-accent-dark)]">
        <Icon className="size-5" aria-hidden />
      </span>
      <div>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-charcoal)]/45">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-[var(--color-charcoal)]">{value}</p>
      </div>
    </div>
  );

  return (
    <Reveal delay={delay} distance={14}>
      {href ? (
        <a href={href} className="block transition-opacity hover:opacity-80">
          {content}
        </a>
      ) : (
        content
      )}
    </Reveal>
  );
}
