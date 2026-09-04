import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { localize } from "../../content/localize";
import type { Destination, Language } from "../../content/types";
import { MiniFact } from "../shared/mini-fact";

export function DestinationHero({
  destination,
  language,
}: {
  destination: Destination;
  language: Language;
}) {
  return (
    <section className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-end lg:py-16">
      <div className="space-y-5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          {language === "en" ? "Back to homepage" : "返回首页"}
        </Link>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {localize(language, destination.highlight)}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {localize(language, destination.country)}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {localize(language, destination.tagline)}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <MiniFact
            label={language === "en" ? "Visa" : "签证"}
            value={localize(language, destination.visaStay)}
          />
          <MiniFact
            label={language === "en" ? "Flight" : "航程"}
            value={localize(language, destination.flightTime)}
          />
          <MiniFact
            label={language === "en" ? "Budget" : "预算"}
            value={localize(language, destination.budget)}
          />
        </div>
      </div>
      <img
        src={destination.image}
        alt={localize(language, destination.country)}
        className="aspect-[4/3] w-full rounded-lg border border-border object-cover"
        width={1024}
        height={1024}
      />
    </section>
  );
}
