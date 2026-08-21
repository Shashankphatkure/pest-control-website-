import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { pestIconMap } from "@/lib/pest-icons";
import type { ServiceSummary } from "@/lib/site-config";

export function ServiceCard({ service }: { service: ServiceSummary }) {
  const href = service.slug ? `/services/${service.slug}` : "/services";
  const Icon = pestIconMap[service.key];

  return (
    <Link
      href={href}
      className="group flex flex-col border border-[var(--color-ink)]/10 bg-white transition-colors duration-200 hover:border-[var(--color-signal-deep)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <div className="size-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <PhotoPlaceholder label={`${service.name} — treatment in progress`} icon={Icon} className="size-full" />
        </div>
        <span className="absolute left-0 top-0 border-b border-r border-[var(--color-ink)]/10 bg-white px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)]/60">
          {service.slug ? "Service" : "Add-on"}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-[var(--color-ink)]/10 p-6">
        <h3 className="font-heading text-lg font-bold text-[var(--color-ink)]">{service.name}</h3>
        <p className="text-sm leading-relaxed text-[var(--color-ink)]/60">{service.problem}</p>
        <span className="mt-auto flex items-center gap-1.5 pt-2 font-mono text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-signal-deep)]">
          Learn more
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
