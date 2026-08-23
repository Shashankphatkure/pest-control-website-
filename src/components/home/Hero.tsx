import { MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { PestPickerCard } from "@/components/home/PestPickerCard";
import { business, whatsappHref, defaultWhatsappMessage } from "@/lib/site-config";

export function Hero() {
  const hasRating = business.googleRating && business.googleReviewCount;

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-ink)]/10 bg-[var(--color-cream)]">
      <Container className="grid grid-cols-1 gap-14 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-24">
        <Reveal className="flex flex-col gap-7" threshold={0.05}>
          <Eyebrow>Field Service · {business.city}</Eyebrow>

          <h1 className="text-balance font-heading text-[2.75rem] leading-[1.0] font-bold tracking-tight text-[var(--color-ink)] sm:text-6xl lg:text-[4rem]">
            Get rid of pests.
            <br />
            Keep them gone.
          </h1>

          <p className="max-w-lg text-balance text-lg leading-relaxed text-[var(--color-ink)]/65">
            Professional pest control for homes and businesses, delivered by trained technicians with safe and effective treatment solutions.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/contact" variant="primary" size="lg" showArrow>
              Get a Free Quote
            </LinkButton>
            <LinkButton
              href={whatsappHref(defaultWhatsappMessage)}
              variant="outline"
              size="lg"
              icon={<MessageCircle className="size-[18px]" aria-hidden />}
            >
              WhatsApp Us
            </LinkButton>
          </div>

          <dl className="mt-2 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[var(--color-ink)]/10 pt-6 sm:grid-cols-3">
            {hasRating && (
              <div>
                <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-ink)]/45">
                  Google Rating
                </dt>
                <dd className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)]">
                  <Stars />
                  {business.googleRating}/5
                </dd>
              </div>
            )}
            <div>
              <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-ink)]/45">
                Status
              </dt>
              <dd className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)]">
                <ShieldCheck className="size-3.5 text-[var(--color-signal-deep)]" aria-hidden />
                Licensed
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-ink)]/45">
                Treatment
              </dt>
              <dd className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)]">
                <Sparkles className="size-3.5 text-[var(--color-signal-deep)]" aria-hidden />
                Safety-first
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="flex flex-col" delay={100} threshold={0.05}>
          <div className="aspect-[5/4] w-full">
            <Photo
              src="/images/site/technician.jpg"
              alt="Pest control technician in protective gear applying treatment"
              className="size-full"
              frame
              priority
            />
          </div>
          <PestPickerCard className="border-t-0" />
        </Reveal>
      </Container>
    </section>
  );
}

function Stars() {
  return (
    <span className="flex text-[var(--color-signal-deep)]" aria-hidden>
      {"★★★★★"}
    </span>
  );
}
