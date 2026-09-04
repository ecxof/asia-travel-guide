export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  );
}
