import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  business,
  footerCompanyLinks,
  footerServiceLinks,
  whatsappHref,
  defaultWhatsappMessage,
} from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5 font-heading text-lg font-bold">
            <span className="flex size-9 items-center justify-center border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-charcoal)]">
              <ShieldMark />
            </span>
            {business.name}
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--color-cream)]/60">
            Professional pest control for homes and businesses across {business.region}, delivered by trained technicians with safe, transparent treatment.
          </p>
        </div>

        <FooterColumn title="Services" links={footerServiceLinks} />
        <FooterColumn title="Company" links={footerCompanyLinks} />

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-cream)]/45">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-[var(--color-cream)]/70">
            <li>
              <a href={business.phoneHref} className="flex items-center gap-2.5 hover:text-[var(--color-cream)]">
                <Phone className="size-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref(defaultWhatsappMessage)}
                className="flex items-center gap-2.5 hover:text-[var(--color-cream)]"
              >
                <MessageCircle className="size-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2.5 hover:text-[var(--color-cream)]">
                <Mail className="size-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
              <span>{business.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col-reverse items-center justify-between gap-4 py-6 text-xs text-[var(--color-cream)]/50 sm:flex-row">
          <p>
            © {year} {business.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--color-cream)]/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-cream)]/80">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-cream)]/45">
        {title}
      </h3>
      <ul className="flex flex-col gap-3 text-sm text-[var(--color-cream)]/70">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-[var(--color-cream)]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShieldMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2.5L20 6v6c0 5-3.4 8.7-8 9.9C7.4 20.7 4 17 4 12V6l8-3.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M8.5 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
