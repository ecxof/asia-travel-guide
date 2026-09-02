import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Globe2,
  Languages,
  MapPinned,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../lib/language-context";
import {
  brandName,
  destinations,
  featuredStats,
  heroImage,
  lastVerified,
  localize,
  quizQuestions,
  type Destination,
  type Language,
  uiCopy,
} from "../lib/travel-content";
import { cn } from "../lib/utils";

type TravelSiteProps = {
  destination?: Destination;
};

export function TravelSite({ destination }: TravelSiteProps) {
  const { language, setLanguage } = useLanguage();
  const onHome = !destination;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative isolate overflow-hidden border-b border-border bg-card">
        <img
          src={heroImage}
          alt="A visual collage of easy-entry Asia travel experiences"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SiteHeader language={language} onLanguageChange={setLanguage} onHome={onHome} />
          {destination ? (
            <DestinationHero destination={destination} language={language} />
          ) : (
            <HomeHero language={language} />
          )}
        </div>
      </div>

      {destination ? (
        <DestinationBody destination={destination} language={language} />
      ) : (
        <HomeBody language={language} />
      )}

      <SiteFooter language={language} />
    </div>
  );
}

function SiteHeader({
  language,
  onLanguageChange,
  onHome,
}: {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onHome: boolean;
}) {
  const navItems = [
    { label: uiCopy.nav.destinations, hash: "destinations" },
    { label: uiCopy.nav.quiz, hash: "quiz" },
    { label: uiCopy.nav.about, hash: "about" },
  ];

  return (
    <header className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/80 backdrop-blur-sm">
          <Compass className="h-5 w-5 text-primary" />
        </div>
        <div>
          <Link
            to="/"
            className="text-sm font-semibold tracking-[0.08em] text-foreground uppercase"
          >
            {localize(language, brandName)}
          </Link>
          <p className="text-xs text-muted-foreground">
            {language === "en"
              ? "Easy-entry Asia for Chinese travelers"
              : "为中国旅客准备的亚洲轻松出行指南"}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
        <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">
            {localize(language, uiCopy.nav.home)}
          </Link>
          {navItems.map((item) =>
            onHome ? (
              <a
                key={item.hash}
                href={`#${item.hash}`}
                className="transition-colors hover:text-foreground"
              >
                {localize(language, item.label)}
              </a>
            ) : (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                className="transition-colors hover:text-foreground"
              >
                {localize(language, item.label)}
              </Link>
            ),
          )}
        </nav>
        <div className="inline-flex items-center rounded-lg border border-border bg-background/90 p-1 backdrop-blur-sm">
          <button
            type="button"
            aria-pressed={language === "en"}
            onClick={() => onLanguageChange("en")}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm transition-colors",
              language === "en"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            EN
          </button>
          <button
            type="button"
            aria-pressed={language === "zh"}
            onClick={() => onLanguageChange("zh")}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm transition-colors",
              language === "zh"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            中文
          </button>
        </div>
      </div>
    </header>
  );
}

function HomeHero({ language }: { language: Language }) {
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

function HomeBody({ language }: { language: Language }) {
  return (
    <main>
      <section id="destinations" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={language === "en" ? "Top 5 picks" : "5 个精选目的地"}
          title={language === "en" ? "Start with the easiest yes." : "先从最容易决定的下一站开始。"}
          description={
            language === "en"
              ? "These five destinations combine easier entry rules with distinct moods, from overwater calm to Silk Road depth."
              : "这五个目的地同时兼顾较轻松的入境条件与鲜明旅行气质，从海岛放空到丝路文化都有。"
          }
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} language={language} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={
              language === "en" ? "Why this guide feels different" : "为什么这份指南更贴近真实需求"
            }
            title={localize(language, uiCopy.travelers.title)}
            description={
              language === "en"
                ? "We filtered the inspiration through the details Chinese outbound travelers ask about first."
                : "我们把旅行灵感先过一遍中国出境旅客最常问的实际问题。"
            }
          />
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {uiCopy.travelers.points.map((point, index) => {
              const icons = [Globe2, ShieldCheck, Sparkles];
              const Icon = icons[index] ?? Globe2;
              return (
                <div key={index} className="rounded-lg border border-border bg-background p-5">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {localize(language, point)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="quiz" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <TripQuiz language={language} />
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              {localize(language, uiCopy.disclaimer.title)}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {localize(language, uiCopy.disclaimer.body)}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>
                {language === "en" ? `Last verified: ${lastVerified}` : `最近核验：${lastVerified}`}
              </span>
            </div>
            <p className="mt-4 text-base leading-7 text-foreground">
              {language === "en"
                ? "This first edition is built as an inspiration-led planning layer: enough clarity to shortlist your next trip, with official-source verification still encouraged before booking."
                : "这个首版网站更像是“带方向的旅行筛选器”：先帮你缩小范围、激发灵感，再建议你在预订前回到官方渠道确认最新政策。"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function DestinationCard({
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

// Per-destination affinity scores for each (question, answer) pair.
// Higher = better fit. Zero when a destination is a poor match for that answer.
const QUIZ_SCORES: Record<string, Record<string, Record<string, number>>> = {
  maldives: {
    pace: { beach: 5, city: 0, culture: 0, nature: 2 },
    style: { luxury: 3, balanced: 1, adventure: 0, romance: 5 },
    group: { partner: 3, friends: 1, family: 2, solo: 0 },
  },
  uae: {
    pace: { beach: 2, city: 5, culture: 1, nature: 0 },
    style: { luxury: 5, balanced: 2, adventure: 1, romance: 2 },
    group: { partner: 2, friends: 2, family: 3, solo: 2 },
  },
  kazakhstan: {
    pace: { beach: 0, city: 1, culture: 2, nature: 5 },
    style: { luxury: 0, balanced: 2, adventure: 5, romance: 1 },
    group: { partner: 1, friends: 3, family: 1, solo: 3 },
  },
  uzbekistan: {
    pace: { beach: 0, city: 1, culture: 5, nature: 2 },
    style: { luxury: 1, balanced: 3, adventure: 2, romance: 2 },
    group: { partner: 2, friends: 2, family: 2, solo: 3 },
  },
  qatar: {
    pace: { beach: 1, city: 4, culture: 3, nature: 0 },
    style: { luxury: 4, balanced: 3, adventure: 1, romance: 3 },
    group: { partner: 3, friends: 2, family: 2, solo: 3 },
  },
};

function scoreDestination(slug: string, answers: Record<string, string>) {
  const scores = QUIZ_SCORES[slug];
  if (!scores) return 0;
  let total = 0;
  for (const [question, answer] of Object.entries(answers)) {
    total += scores[question]?.[answer] ?? 0;
  }
  return total;
}

function TripQuiz({ language }: { language: Language }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const result = useMemo(() => {
    if (quizQuestions.some((question) => !answers[question.id])) return null;

    let winner: Destination | null = null;
    let best = -Infinity;
    for (const destination of destinations) {
      const score = scoreDestination(destination.slug, answers);
      if (score > best) {
        best = score;
        winner = destination;
      }
    }
    return winner;
  }, [answers]);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <SectionHeading
        eyebrow={language === "en" ? "Find your fit" : "找到更适合你的目的地"}
        title={
          language === "en" ? "A quick editorial-style trip quiz" : "一个轻量、好懂的旅行测一测"
        }
        description={
          language === "en"
            ? "Answer three fast questions and get the destination most aligned with your mood right now."
            : "回答三个简单问题，看看哪一个目的地最适合你现在的旅行状态。"
        }
      />

      <div className="grid gap-6 rounded-lg border border-border bg-card p-6">
        {quizQuestions.map((question) => (
          <div key={question.id} className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">
              {localize(language, question.label)}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {question.options.map((option) => {
                const active = answers[question.id] === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={active}
                    onClick={() =>
                      setAnswers((current) => ({ ...current, [question.id]: option.value }))
                    }
                    className={cn(
                      "rounded-lg border px-4 py-3 text-left text-sm transition-colors",
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {localize(language, option.label)}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="rounded-lg border border-border bg-background p-5">
          {result ? (
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {language === "en" ? "Recommended now" : "当前推荐"}
              </p>
              <h3 className="text-2xl font-semibold text-foreground">
                {localize(language, result.country)}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {localize(language, result.overview)}
              </p>
              <Link
                to="/destinations/$slug"
                params={{ slug: result.slug }}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {language === "en" ? "Open destination page" : "打开目的地页面"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <p className="text-sm leading-7 text-muted-foreground">
              {language === "en"
                ? "Choose one answer in each section to reveal your best-fit destination."
                : "每一题都选一个答案后，就会显示最适合你的目的地。"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function DestinationHero({
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

function DestinationBody({
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

function SectionHeading({
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

function FactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Plane;
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

function MiniFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/85 p-4 backdrop-blur-sm">
      <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-sm leading-6 text-foreground">{value}</div>
    </div>
  );
}

function ListPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SiteFooter({ language }: { language: Language }) {
  return (
    <footer className="border-t border-border bg-card/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>{localize(language, brandName)}</p>
        <p>
          {language === "en"
            ? "For planning inspiration only. Always confirm official entry requirements before departure."
            : "仅供行程规划参考。出发前请务必再次确认官方入境要求。"}
        </p>
      </div>
    </footer>
  );
}
