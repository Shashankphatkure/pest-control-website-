import Link from "next/link";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "outline-inverse" | "whatsapp" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-[var(--radius)] font-sans font-semibold uppercase tracking-[0.04em] transition-all duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-signal-deep)] disabled:pointer-events-none disabled:opacity-40";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-ink-soft)]",
  secondary:
    "bg-[var(--color-signal-deep)] text-white hover:bg-[color-mix(in_oklab,var(--color-signal-deep)_85%,black)]",
  outline:
    "border border-[var(--color-ink)]/25 text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)]/[0.04]",
  "outline-inverse": "border border-white/25 text-[var(--color-paper)] hover:border-white/50 hover:bg-white/[0.06]",
  whatsapp:
    "bg-[var(--color-secondary-deep)] text-white hover:bg-[color-mix(in_oklab,var(--color-secondary-deep)_85%,black)]",
  ghost: "text-[var(--color-ink)] hover:bg-[var(--color-ink)]/[0.04]",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-5 text-[13px]",
  lg: "h-[54px] px-7 text-[13px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  showArrow?: boolean;
  icon?: ReactNode;
}

function ButtonContent({
  children,
  showArrow,
  icon,
  variant,
}: Pick<CommonProps, "children" | "showArrow" | "icon"> & { variant: Variant }) {
  return (
    <>
      {variant === "primary" && (
        <span className="size-1.5 shrink-0 bg-[var(--color-signal)]" aria-hidden />
      )}
      {icon}
      {children}
      {showArrow && (
        <ArrowRight
          className="size-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );
}

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow,
  icon,
  href,
  ...rest
}: LinkButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = cn(base, variants[variant], sizes[size], className);

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        <ButtonContent showArrow={showArrow} icon={icon} variant={variant}>
          {children}
        </ButtonContent>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      <ButtonContent showArrow={showArrow} icon={icon} variant={variant}>
        {children}
      </ButtonContent>
    </Link>
  );
}

type ButtonElProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow,
  icon,
  ...rest
}: ButtonElProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  return (
    <button className={classes} {...rest}>
      <ButtonContent showArrow={showArrow} icon={icon} variant={variant}>
        {children}
      </ButtonContent>
    </button>
  );
}
