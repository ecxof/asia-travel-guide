import type { LucideIcon } from "lucide-react";

export function FactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 text-primary" />
      <div>
        <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</dt>
        <dd className="mt-1 text-sm leading-6 text-foreground">{value}</dd>
      </div>
    </div>
  );
}
