import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { localize } from "../../content/localize";
import { quizQuestions } from "../../content/quiz";
import type { Language } from "../../content/types";
import { cn } from "../../lib/utils";
import { SectionHeading } from "../shared/section-heading";
import { pickBestDestination } from "./quiz-scoring";

export function TripQuiz({ language }: { language: Language }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const result = useMemo(() => {
    if (quizQuestions.some((question) => !answers[question.id])) return null;
    return pickBestDestination(answers);
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
