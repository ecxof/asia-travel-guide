export type Language = "en" | "zh";

export type LocalizedText = Record<Language, string>;

export type Destination = {
  slug: string;
  country: LocalizedText;
  image: string;
  visaStay: LocalizedText;
  flightTime: LocalizedText;
  budget: LocalizedText;
  bestFor: LocalizedText;
  tagline: LocalizedText;
  overview: LocalizedText;
  highlight: LocalizedText;
  interestingFact: LocalizedText;
  whyChineseTravelers: LocalizedText[];
  topPlaces: LocalizedText[];
  bestTime: LocalizedText[];
  practicalTips: LocalizedText[];
};
