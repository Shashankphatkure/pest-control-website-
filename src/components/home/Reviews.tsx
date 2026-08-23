import { Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { business, reviews } from "@/lib/site-config";

export function Reviews() {
  const hasReviews = reviews.length > 0;
  const hasRating = business.googleRating && business.googleReviewCount;

  return (
    <Section tone="cream" id="reviews">
      <SectionHeading
        eyebrow="Reviews"
        title="Trusted by homeowners & businesses"
        description={
          hasRating
            ? `${business.googleRating}/5 average from ${business.googleReviewCount}+ Google reviews.`
            : undefined
        }
        align="center"
      />

      {hasReviews ? (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 90} className="flex flex-col gap-4 rounded-[var(--radius)] border border-[var(--color-ink)]/10 bg-white p-6">
              <div className="flex gap-0.5 text-[var(--color-accent-dark)]" aria-hidden>
                {Array.from({ length: review.rating }).map((_, i2) => (
                  <Star key={i2} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-charcoal)]/75">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-auto text-sm font-semibold text-[var(--color-charcoal)]">
                {review.name} <span className="font-normal text-[var(--color-charcoal)]/50">· {review.locality}</span>
              </p>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-12 flex max-w-lg flex-col items-center gap-4 rounded-[var(--radius)] border border-dashed border-[var(--color-charcoal)]/20 bg-white/60 px-8 py-12 text-center">
          <p className="text-sm leading-relaxed text-[var(--color-charcoal)]/60">
            Customer reviews will appear here once published. In the meantime, reach out and we&apos;ll be glad to share references directly.
          </p>
          {business.googleReviewsUrl && (
            <LinkButton href={business.googleReviewsUrl} variant="outline" size="md">
              View us on Google
            </LinkButton>
          )}
        </div>
      )}
    </Section>
  );
}
