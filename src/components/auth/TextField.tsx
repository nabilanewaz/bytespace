import { useId } from "react";
import { cn } from "@/lib/cn";

type TextFieldProps = React.ComponentProps<"input"> & { label: string };

export function TextField({ label, className, id, ...props }: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <div className={className}>
      <label htmlFor={inputId} className="text-sm text-ink">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "mt-2 h-[52px] w-full rounded-xl border border-line px-6 text-lg text-ink outline-none transition",
          "placeholder:text-subtle focus:border-brand focus:ring-2 focus:ring-brand/15",
        )}
        {...props}
      />
    </div>
  );
}
