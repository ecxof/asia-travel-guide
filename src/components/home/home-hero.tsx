import { ArrowRight, Languages } from "lucide-react";

import { localize } from "../../content/localize";
import { featuredStats } from "../../content/site";
import type { Language } from "../../content/types";
import { uiCopy } from "../../content/ui-copy";

export function HomeHero({ language }: { language: Language }) {
  return (
    <section className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end lg:py-20">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
          <Languages className="h-3.5 w-3.5" />
          {localize(language, uiCopy.hero.kicker)}
        </div>
        <div className="space-y-4">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {localize(language, uiCopy.hero.title)}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {localize(language, uiCopy.hero.description)}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#destinations"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {localize(language, uiCopy.hero.primaryCta)}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/80 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent"
          >
            {localize(language, uiCopy.hero.secondaryCta)}
          </a>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {featuredStats.map((stat) => (
          <div
            key={stat.value}
            className="rounded-lg border border-border bg-background/85 p-5 backdrop-blur-sm"
          >
            <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
            <div className="mt-2 text-sm leading-6 text-muted-foreground">
              {localize(language, stat.label)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
