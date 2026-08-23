"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col divide-y divide-[var(--color-charcoal)]/10 overflow-hidden rounded-[var(--radius)] border border-[var(--color-charcoal)]/10 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-6 py-5 text-left"
            >
              <span className="font-mono text-xs font-semibold text-[var(--color-signal-deep)]/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-heading text-base font-semibold text-[var(--color-charcoal)]">
                {item.question}
              </span>
              <Plus
                className={cn(
                  "size-5 shrink-0 text-[var(--color-accent-dark)] transition-transform duration-200",
                  isOpen && "rotate-45"
                )}
                aria-hidden
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pl-[3.25rem]">
                <p className="text-sm leading-relaxed text-[var(--color-charcoal)]/65">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
