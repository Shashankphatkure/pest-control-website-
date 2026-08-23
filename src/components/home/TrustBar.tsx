import { ShieldCheck, Sparkles, ReceiptText, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const points = [
  { icon: ShieldCheck, label: "Licensed Professionals" },
  { icon: Sparkles, label: "Safe Treatment" },
  { icon: ReceiptText, label: "Transparent Pricing" },
  { icon: Zap, label: "Fast Response" },
];

export function TrustBar() {
  return (
    <div className="border-b border-[var(--color-ink)]/10 bg-[var(--color-white)]">
      <Container className="grid grid-cols-2 divide-x divide-y divide-[var(--color-ink)]/10 border-x border-[var(--color-ink)]/10 sm:grid-cols-4 sm:divide-y-0">
        {points.map(({ icon: Icon, label }, i) => (
          <Reveal key={label} delay={i * 70} distance={12}>
            <div className="flex items-center gap-3 px-5 py-6">
              <Icon
                className={cn(
                  "size-[18px] shrink-0",
                  label === "Safe Treatment" ? "text-[var(--color-secondary-deep)]" : "text-[var(--color-signal-deep)]"
                )}
                aria-hidden
              />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-ink)]">
                {label}
              </span>
            </div>
          </Reveal>
        ))}
      </Container>
    </div>
  );
}
