export function MiniFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/85 p-4 backdrop-blur-sm">
      <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-sm leading-6 text-foreground">{value}</div>
    </div>
  );
}
