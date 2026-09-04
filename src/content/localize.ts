import { destinations } from "./destinations";
import type { Language, LocalizedText } from "./types";

export function localize(language: Language, text: LocalizedText) {
  return text[language];
}

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}
