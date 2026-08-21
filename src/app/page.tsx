import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyUs } from "@/components/home/WhyUs";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { ResidentialCommercial } from "@/components/home/ResidentialCommercial";
import { Pricing } from "@/components/home/Pricing";
import { Reviews } from "@/components/home/Reviews";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { StackSection } from "@/components/home/StackSection";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Pest Control in ${business.city} — ${business.name}`,
  description: `Get rid of pests and keep them gone. Professional pest control for homes and businesses in ${business.region}, with safe treatment and transparent pricing.`,
};

export default function HomePage() {
  return (
    <>
      {/*
        Only short, single-viewport moments get the sticky "next section
        overlaps this one" treatment — Hero receding under the trust bar as
        an opening beat, and the final CTA rising over the page as a closing
        beat. Content-heavy sections (grids, accordions) scroll normally so
        nothing taller than the viewport ever gets trapped mid-pin.
      */}
      <StackSection index={1}>
        <Hero />
      </StackSection>
      <StackSection index={2}>
        <TrustBar />
      </StackSection>

      <ServicesGrid />
      <WhyUs />
      <ProcessSteps />
      <BeforeAfter />
      <ResidentialCommercial />
      <Pricing />
      <Reviews />
      <ServiceAreas />
      <FAQ />

      <StackSection index={3}>
        <FinalCTA />
      </StackSection>
    </>
  );
}
