import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { business, whatsappHref, defaultWhatsappMessage } from "@/lib/site-config";

export function MobileActionBar() {
  const items = [
    { href: business.phoneHref, label: "Call Now", icon: Phone },
    { href: whatsappHref(defaultWhatsappMessage), label: "WhatsApp", icon: MessageCircle },
    { href: "/contact", label: "Book", icon: CalendarCheck },
  ];

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 divide-x divide-[var(--color-charcoal)]/10 border-t border-[var(--color-charcoal)]/10 bg-[var(--color-cream)]/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] lg:hidden"
      aria-label="Quick actions"
    >
      {items.map(({ href, label, icon: Icon }, i) => (
        <a
          key={label}
          href={href}
          className={`flex flex-col items-center justify-center gap-1 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.03em] ${
            i === 1
              ? "bg-[var(--color-secondary)] text-white"
              : "text-[var(--color-charcoal)]/80"
          }`}
        >
          <Icon className="size-5" aria-hidden />
          {label}
        </a>
      ))}
    </nav>
  );
}
