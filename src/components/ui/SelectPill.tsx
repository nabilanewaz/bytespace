"use client";

import { ChevronDown, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export type SelectOption = { value: string; label: string };

type SelectPillProps = {
  /** Accessible name, e.g. "Level". */
  label: string;
  icon: LucideIcon;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  /** Always show the selected option (e.g. a sort order) instead of the label. */
  showValue?: boolean;
  className?: string;
};

/**
 * Pill-shaped dropdown. A transparent native <select> sits on top of the
 * styled pill, so keyboard, screen reader and mobile pickers all work as usual.
 */
export function SelectPill({
  label,
  icon: Icon,
  value,
  options,
  onChange,
  showValue = false,
  className,
}: SelectPillProps) {
  const current = options.find((o) => o.value === value) ?? options[0];
  // Highlight filters that narrow the results; a sort order is never "active".
  const active = !showValue && value !== options[0].value;

  return (
    <div
      className={cn(
        "relative flex h-12 items-center gap-2 rounded-full border px-4 text-lg transition focus-within:ring-2 focus-within:ring-brand/30",
        active ? "border-lime bg-lime text-ink" : "border-line-strong bg-white text-ink-soft hover:bg-surface",
        className,
      )}
    >
      <Icon className="size-5 shrink-0" aria-hidden="true" />
      <span className="whitespace-nowrap">{active || showValue ? current.label : label}</span>
      <ChevronDown className="size-4 shrink-0 opacity-60" aria-hidden="true" />
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 cursor-pointer appearance-none opacity-0"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
