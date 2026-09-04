import { localize } from "../../content/localize";
import type { Destination, Language } from "../../content/types";
import { ListPanel } from "../shared/list-panel";
import { SectionHeading } from "../shared/section-heading";

export function DestinationBody({
  destination,
  language,
}: {
  destination: Destination;
  language: Language;
}) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="rounded-lg border border-border bg-card p-6">
          <SectionHeading
            eyebrow={language === "en" ? "Overview" : "目的地概览"}
            title={localize(language, destination.bestFor)}
            description={localize(language, destination.overview)}
          />
          <div className="mt-6 rounded-lg border border-border bg-background p-5">
            <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {language === "en" ? "Interesting fact" : "有趣的一点"}
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground">
              {localize(language, destination.interestingFact)}
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <ListPanel
            title={language === "en" ? "Why it works for Chinese travelers" : "为什么适合中国旅客"}
            items={destination.whyChineseTravelers.map((item) => localize(language, item))}
          />
          <ListPanel
            title={language === "en" ? "Top places to include" : "推荐纳入行程的地点"}
            items={destination.topPlaces.map((item) => localize(language, item))}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ListPanel
          title={language === "en" ? "Best time to go" : "最佳出行时间"}
          items={destination.bestTime.map((item) => localize(language, item))}
        />
        <ListPanel
          title={language === "en" ? "Practical tips" : "实用建议"}
          items={destination.practicalTips.map((item) => localize(language, item))}
        />
      </div>
    </main>
  );
}
