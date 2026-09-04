import type { LocalizedText } from "./types";

export type QuizOption = { value: string; label: LocalizedText };
export type QuizQuestion = { id: string; label: LocalizedText; options: QuizOption[] };

export const quizQuestions: QuizQuestion[] = [
  {
    id: "pace",
    label: {
      en: "What kind of trip do you want first?",
      zh: "你现在最想要哪种旅行节奏？",
    },
    options: [
      { value: "beach", label: { en: "Beach calm", zh: "海岛放松" } },
      { value: "city", label: { en: "City energy", zh: "城市活力" } },
      { value: "culture", label: { en: "Culture and history", zh: "文化历史" } },
      { value: "nature", label: { en: "Nature and scenery", zh: "自然风景" } },
    ],
  },
  {
    id: "style",
    label: {
      en: "Which style feels right?",
      zh: "你更偏好哪种旅行风格？",
    },
    options: [
      { value: "luxury", label: { en: "Luxury", zh: "轻奢品质" } },
      { value: "balanced", label: { en: "Balanced", zh: "舒适平衡" } },
      { value: "adventure", label: { en: "Adventure", zh: "探索体验" } },
      { value: "romance", label: { en: "Romantic", zh: "浪漫氛围" } },
    ],
  },
  {
    id: "group",
    label: {
      en: "Who are you likely traveling with?",
      zh: "你更可能和谁一起出发？",
    },
    options: [
      { value: "partner", label: { en: "Partner", zh: "伴侣" } },
      { value: "friends", label: { en: "Friends", zh: "朋友" } },
      { value: "family", label: { en: "Family", zh: "家人" } },
      { value: "solo", label: { en: "Solo", zh: "一个人" } },
    ],
  },
];
