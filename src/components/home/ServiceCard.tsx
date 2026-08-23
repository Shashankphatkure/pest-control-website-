import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import { pestImageMap } from "@/lib/pest-images";
import type { ServiceSummary } from "@/lib/site-config";

export function ServiceCard({ service }: { service: ServiceSummary }) {
  const href = service.slug ? `/services/${service.slug}` : "/services";
  const image = pestImageMap[service.key];

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--color-ink)]/10 bg-white transition-colors duration-200 hover:border-[var(--color-signal-deep)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <div className="size-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <Photo src={image.src} alt={image.alt} className="size-full" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        </div>
        <span className="absolute left-0 top-0 rounded-br-[8px] border-b border-r border-[var(--color-ink)]/10 bg-white px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)]/60">
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
