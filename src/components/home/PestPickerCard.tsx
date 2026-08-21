"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { services } from "@/lib/site-config";

const quickPests = services.slice(0, 6);

export function PestPickerCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border border-[var(--color-ink)]/12 bg-white p-5",
        className
      )}
    >
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-ink)]/50">
        Intake — What are you dealing with?
      </p>
      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {quickPests.map((pest) => (
          <Link
            key={pest.key}
            href={`/contact?pest=${pest.key}`}
            className="border border-[var(--color-ink)]/15 px-3 py-1.5 text-xs font-medium text-[var(--color-ink)]/80 transition-colors hover:border-[var(--color-signal-deep)] hover:text-[var(--color-signal-deep)]"
          >
            {pest.name.replace(" Control", "")}
          </Link>
        ))}
        <Link
          href="/contact?pest=other"
          className="border border-[var(--color-ink)]/15 px-3 py-1.5 text-xs font-medium text-[var(--color-ink)]/80 transition-colors hover:border-[var(--color-signal-deep)] hover:text-[var(--color-signal-deep)]"
        >
          Other
        </Link>
      </div>
      <Link
        href="/contact"
        className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-signal-deep)]"
      >
        Get a quote in minutes
        <ArrowRight className="size-3.5" aria-hidden />
      </Link>
    </div>
  );
}
