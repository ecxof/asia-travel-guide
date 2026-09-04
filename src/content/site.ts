import heroImage from "../assets/asia-hero.jpg";

import type { LocalizedText } from "./types";

const rawSiteUrl = (import.meta.env.VITE_SITE_URL as string | undefined) ?? "";
export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const lastVerified = "2026-04-23";

export const brandName: LocalizedText = {
  en: "Asia Travel Explorer",
  zh: "亚洲轻松出行指南",
};

export const homeSeo = {
  title: "Asia Travel Explorer | Easy-Entry Asia Trips",
  description:
    "Bilingual travel inspiration for Chinese passport holders exploring easy-entry destinations across Asia.",
};

export const featuredStats = [
  { value: "5", label: { en: "easy-entry destinations", zh: "个轻松入境目的地" } },
  { value: "30–60", label: { en: "days of stay", zh: "天停留区间" } },
  { value: "Bilingual", label: { en: "English + Chinese", zh: "中英双语体验" } },
];

export { heroImage };
