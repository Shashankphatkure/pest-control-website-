import { GraduationCap, ShieldCheck, ReceiptText, LifeBuoy } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const reasons = [
  {
    icon: GraduationCap,
    title: "Experienced Technicians",
    description: "Professionally trained personnel who understand the treatment process end to end.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Treatment",
    description: "Responsible treatment procedures with appropriate safety considerations for your home.",
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

export function WhyUs() {
  return (
    <Section tone="white" id="why-us">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Pest control isn't just about killing pests. It's about stopping them from coming back."
          />
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={(i % 2) * 100}>
                <div className="flex flex-col gap-3 border-l-2 border-[var(--color-ink)]/10 pl-4">
                  <Icon
                    className={cn(
                      "size-5",
                      title === "Safe Treatment" ? "text-[var(--color-secondary-deep)]" : "text-[var(--color-signal-deep)]"
                    )}
                    aria-hidden
                  />
                  <h3 className="font-heading text-base font-bold text-[var(--color-charcoal)]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-charcoal)]/60">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <LinkButton href="/about" variant="secondary" size="md" showArrow className="w-fit">
            Talk to an Expert
          </LinkButton>
        </div>

        <Reveal className="aspect-[4/5] w-full" delay={120}>
          <Photo
            src="/images/site/technician.jpg"
            alt="Pest control technician in protective gear applying treatment"
            className="size-full"
            variant="dark"
          />
        </Reveal>
      </div>
    </Section>
  );
}
