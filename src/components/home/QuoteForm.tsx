"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { services, whatsappHref, type PestKey } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

const pestOptions: { key: PestKey; label: string }[] = [
  ...services
    .filter((s) => s.key !== "ant" && s.key !== "fly")
    .map((s) => ({ key: s.key, label: s.name.replace(" Control", "") })),
  { key: "other", label: "Other" },
];

type Step = 1 | 2 | 3;

export function QuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("pest") as PestKey | null;

  const [step, setStep] = useState<Step>(1);
  const [pest, setPest] = useState<PestKey | null>(preselected);
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const pestLabel = pestOptions.find((p) => p.key === pest)?.label ?? "a pest issue";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hi, I'd like a quote for pest control.\nIssue: ${pestLabel}\nLocation: ${location}\nName: ${name}\nPhone: ${phone}`;
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 border border-[var(--color-charcoal)]/10 bg-white px-8 py-14 text-center">
        <span className="flex size-14 items-center justify-center border border-[var(--color-signal-deep)]/25 bg-[var(--color-accent-soft)] text-[var(--color-accent-dark)]">
          <CheckCircle2 className="size-7" aria-hidden />
        </span>
        <h3 className="font-heading text-xl font-bold text-[var(--color-charcoal)]">Thanks! We&apos;ll contact you shortly.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-[var(--color-charcoal)]/60">
          We&apos;ve opened WhatsApp with your details pre-filled — just hit send and our team will get back to you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[var(--color-charcoal)]/10 bg-white p-6 sm:p-8">
      <StepIndicator step={step} />

      {step === 1 && (
        <fieldset className="flex flex-col gap-5">
          <legend className="font-heading text-lg font-bold text-[var(--color-charcoal)]">
            What do you need help with?
          </legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {pestOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setPest(option.key)}
                className={cn(
                  "border px-4 py-3 text-sm font-medium transition-colors",
                  pest === option.key
                    ? "border-[var(--color-accent-dark)] bg-[var(--color-accent-soft)] text-[var(--color-accent-dark)]"
                    : "border-[var(--color-charcoal)]/15 text-[var(--color-charcoal)]/75 hover:border-[var(--color-charcoal)]/35"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
          <Button type="button" disabled={!pest} onClick={() => setStep(2)} className="mt-2 w-fit" showArrow>
            Continue
          </Button>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="flex flex-col gap-5">
          <legend className="font-heading text-lg font-bold text-[var(--color-charcoal)]">
            Where are you located?
          </legend>
          <label className="flex flex-col gap-2 text-sm font-medium text-[var(--color-charcoal)]/75">
            Area / City
            <input
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Andheri West, Mumbai"
              className="h-12 border border-[var(--color-charcoal)]/20 bg-[var(--color-cream)] px-4 text-base text-[var(--color-charcoal)] outline-none focus:border-[var(--color-accent-dark)]"
            />
          </label>
          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="button" disabled={!location} onClick={() => setStep(3)} showArrow>
              Continue
            </Button>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="flex flex-col gap-5">
          <legend className="font-heading text-lg font-bold text-[var(--color-charcoal)]">
            How can we contact you?
          </legend>
          <label className="flex flex-col gap-2 text-sm font-medium text-[var(--color-charcoal)]/75">
            Name
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="h-12 border border-[var(--color-charcoal)]/20 bg-[var(--color-cream)] px-4 text-base text-[var(--color-charcoal)] outline-none focus:border-[var(--color-accent-dark)]"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-[var(--color-charcoal)]/75">
            Phone / WhatsApp
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
              className="h-12 border border-[var(--color-charcoal)]/20 bg-[var(--color-cream)] px-4 text-base text-[var(--color-charcoal)] outline-none focus:border-[var(--color-accent-dark)]"
            />
          </label>
          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button type="submit" disabled={!name || !phone} showArrow>
              Get My Free Quote
            </Button>
          </div>
        </fieldset>
      )}
    </form>
  );
}

function StepIndicator({ step }: { step: Step }) {
  return (
    <div className="mb-7 flex flex-col gap-2">
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-charcoal)]/45">
        Step {step} of 3
      </span>
      <div className="flex items-center gap-1.5" aria-hidden>
        {[1, 2, 3].map((s) => (
          <span
            key={s}
            className={cn(
              "h-[3px] flex-1 transition-colors",
              s <= step ? "bg-[var(--color-accent)]" : "bg-[var(--color-charcoal)]/10"
            )}
          />
        ))}
      </div>
    </div>
  );
}
