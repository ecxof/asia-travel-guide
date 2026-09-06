import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";

import type { Language } from "../content/types";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ate.language";

function readStoredLanguage(): Language | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "zh" ? stored : null;
}

function detectNavigatorLanguage(): Language {
  if (typeof window === "undefined") return "en";
  return window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const search = useSearch({ strict: false }) as { lang?: Language };
  const navigate = useNavigate();

  const [clientDefault, setClientDefault] = useState<Language>("en");

  useEffect(() => {
    setClientDefault(readStoredLanguage() ?? detectNavigatorLanguage());
  }, []);

  const language: Language = search.lang ?? clientDefault;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = useCallback(
    (next: Language) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, next);
      }
      navigate({
        to: ".",
        search: (prev: Record<string, unknown>) => ({ ...prev, lang: next }),
        replace: true,
      });
    },
    [navigate],
  );

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
