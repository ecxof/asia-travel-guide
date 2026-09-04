import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPinned, Plane } from "lucide-react";

import { localize } from "../../content/localize";
import type { Destination, Language } from "../../content/types";
import { FactRow } from "../shared/fact-row";

export function DestinationCard({
  destination,
  language,
}: {
  destination: Destination;
  language: Language;
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card">
      <img
        src={destination.image}
        alt={localize(language, destination.country)}
        className="aspect-[4/3] w-full object-cover"
        loading="lazy"
        width={1024}
        height={1024}
      />
      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {localize(language, destination.highlight)}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">
            {localize(language, destination.country)}
          </h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            {localize(language, destination.tagline)}
          </p>
        </div>
        <dl className="grid gap-3 text-sm">
          <FactRow
            icon={Plane}
            label={language === "en" ? "Entry" : "入境"}
            value={localize(language, destination.visaStay)}
          />
          <FactRow
            icon={MapPinned}
            label={language === "en" ? "Best for" : "适合"}
            value={localize(language, destination.bestFor)}
          />
        </dl>
        <Link
          to="/destinations/$slug"
          params={{ slug: destination.slug }}
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          {language === "en" ? "Explore this destination" : "查看这个目的地"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
