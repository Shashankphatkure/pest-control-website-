import { MessageCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { whatsappHref, defaultWhatsappMessage } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <Section tone="charcoal">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <SectionHeading
          title="Let's get your home pest-free."
          description="Tell us what you're dealing with and we'll help you figure out the right next step."
          align="center"
          dark
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <MagneticButton>
            <LinkButton href="/contact" variant="secondary" size="lg" showArrow>
              Get a Free Quote
            </LinkButton>
          </MagneticButton>
          <LinkButton
            href={whatsappHref(defaultWhatsappMessage)}
            variant="outline-inverse"
            size="lg"
            icon={<MessageCircle className="size-[18px]" aria-hidden />}
          >
            WhatsApp Us
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
