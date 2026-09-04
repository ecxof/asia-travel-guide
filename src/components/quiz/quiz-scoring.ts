import { destinations } from "../../content/destinations";
import type { Destination } from "../../content/types";

// Per-destination affinity scores for each (question, answer) pair.
// Higher = better fit. Zero when a destination is a poor match for that answer.
const QUIZ_SCORES: Record<string, Record<string, Record<string, number>>> = {
  maldives: {
    pace: { beach: 5, city: 0, culture: 0, nature: 2 },
    style: { luxury: 3, balanced: 1, adventure: 0, romance: 5 },
    group: { partner: 3, friends: 1, family: 2, solo: 0 },
  },
  uae: {
    pace: { beach: 2, city: 5, culture: 1, nature: 0 },
    style: { luxury: 5, balanced: 2, adventure: 1, romance: 2 },
    group: { partner: 2, friends: 2, family: 3, solo: 2 },
  },
  kazakhstan: {
    pace: { beach: 0, city: 1, culture: 2, nature: 5 },
    style: { luxury: 0, balanced: 2, adventure: 5, romance: 1 },
    group: { partner: 1, friends: 3, family: 1, solo: 3 },
  },
  uzbekistan: {
    pace: { beach: 0, city: 1, culture: 5, nature: 2 },
    style: { luxury: 1, balanced: 3, adventure: 2, romance: 2 },
    group: { partner: 2, friends: 2, family: 2, solo: 3 },
  },
  qatar: {
    pace: { beach: 1, city: 4, culture: 3, nature: 0 },
    style: { luxury: 4, balanced: 3, adventure: 1, romance: 3 },
    group: { partner: 3, friends: 2, family: 2, solo: 3 },
  },
};

export function scoreDestination(slug: string, answers: Record<string, string>) {
  const scores = QUIZ_SCORES[slug];
  if (!scores) return 0;
  let total = 0;
  for (const [question, answer] of Object.entries(answers)) {
    total += scores[question]?.[answer] ?? 0;
  }
  return total;
}

export function pickBestDestination(answers: Record<string, string>): Destination | null {
  let winner: Destination | null = null;
  let best = -Infinity;
  for (const destination of destinations) {
    const score = scoreDestination(destination.slug, answers);
    if (score > best) {
      best = score;
      winner = destination;
    }
  }
  return winner;
}
