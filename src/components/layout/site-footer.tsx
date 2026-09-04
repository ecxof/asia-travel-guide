import { localize } from "../../content/localize";
import { brandName } from "../../content/site";
import type { Language } from "../../content/types";

export function SiteFooter({ language }: { language: Language }) {
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
