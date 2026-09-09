export type Language = "en" | "zh";

export type LocalizedText = Record<Language, string>;

export type Coordinates = {
  lat: number;
  lon: number;
};

export type Destination = {
  slug: string;
  country: LocalizedText;
  mapLabel?: LocalizedText;
  image: string;
  coordinates: Coordinates;
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
