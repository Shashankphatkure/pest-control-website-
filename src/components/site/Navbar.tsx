"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { business, navLinks, whatsappHref, defaultWhatsappMessage } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled || open
          ? "bg-[var(--color-cream)]/95 backdrop-blur-md border-b border-[var(--color-ink)]/10"
          : "bg-[var(--color-cream)] border-b border-transparent"
      )}
    >
      <div className="hidden border-b border-[var(--color-ink)]/8 bg-[var(--color-ink)] lg:block">
        <Container className="flex h-9 items-center justify-end gap-6 font-mono text-[11px] tracking-[0.05em] text-[var(--color-cream)]/65">
          <a href={business.phoneHref} className="flex items-center gap-1.5 hover:text-[var(--color-cream)]">
            <Phone className="size-3" aria-hidden />
            {business.phone}
          </a>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3" aria-hidden />
            {business.hours}
          </span>
        </Container>
      </div>

      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-signal)]">
            <ShieldMark />
          </span>
          {business.name}
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[var(--color-ink)]/70 underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors hover:text-[var(--color-ink)] hover:decoration-[var(--color-signal)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LinkButton
            href={whatsappHref(defaultWhatsappMessage)}
            variant="outline"
            size="md"
            icon={<MessageCircle className="size-4" aria-hidden />}
          >
            WhatsApp
          </LinkButton>
          <LinkButton href="/contact" variant="primary" size="md">
            Get a Quote
          </LinkButton>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-ink)]/15 text-[var(--color-ink)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-ink)]/10 bg-[var(--color-cream)] lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--color-ink)]/8 py-3 text-base font-medium text-[var(--color-ink)]/85"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <LinkButton href={whatsappHref(defaultWhatsappMessage)} variant="secondary" size="md">
                WhatsApp Us
              </LinkButton>
              <LinkButton href="/contact" variant="primary" size="md">
                Get a Quote
              </LinkButton>
            </div>
          </Container>
        </div>
      )}
    </header>
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
