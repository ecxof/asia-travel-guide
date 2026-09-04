import { Globe2, ShieldCheck, Sparkles } from "lucide-react";

import { destinations } from "../../content/destinations";
import { localize } from "../../content/localize";
import { lastVerified } from "../../content/site";
import type { Language } from "../../content/types";
import { uiCopy } from "../../content/ui-copy";
import { DestinationCard } from "../destination/destination-card";
import { TripQuiz } from "../quiz/trip-quiz";
import { SectionHeading } from "../shared/section-heading";

export function HomeBody({ language }: { language: Language }) {
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
