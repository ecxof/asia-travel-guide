import { Link } from "@tanstack/react-router";
import { Compass } from "lucide-react";

import { localize } from "../../content/localize";
import { brandName } from "../../content/site";
import type { Language } from "../../content/types";
import { uiCopy } from "../../content/ui-copy";
import { cn } from "../../lib/utils";

const navItems = [
  { label: uiCopy.nav.destinations, hash: "destinations" },
  { label: uiCopy.nav.quiz, hash: "quiz" },
  { label: uiCopy.nav.about, hash: "about" },
];

export function SiteHeader({
  language,
  onLanguageChange,
  onHome,
}: {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onHome: boolean;
}) {
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
