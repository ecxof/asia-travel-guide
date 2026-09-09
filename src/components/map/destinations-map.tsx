import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { destinations } from "../../content/destinations";
import { localize } from "../../content/localize";
import type { Destination, Language } from "../../content/types";
import { uiCopy } from "../../content/ui-copy";
import { cn } from "../../lib/utils";
import { SectionHeading } from "../shared/section-heading";

// Viewport: 40°–90° longitude, 0°–55° latitude
const LON_MIN = 40;
const LON_MAX = 90;
const LAT_MIN = 0;
const LAT_MAX = 55;

function pinPosition({ lat, lon }: { lat: number; lon: number }) {
  const left = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * 100;
  const top = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * 100;
  return { left, top };
}

const LONGITUDE_TICKS = [50, 60, 70, 80];
const LATITUDE_TICKS = [10, 20, 30, 40, 50];

export function DestinationsMap({ language }: { language: Language }) {
  return (
    <section id="map" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow={localize(language, uiCopy.map.eyebrow)}
        title={localize(language, uiCopy.map.title)}
        description={localize(language, uiCopy.map.description)}
      />

      <div className="mt-8 rounded-lg border border-border bg-card">
        <div className="relative aspect-[8/5] w-full">
          <div className="absolute inset-0 overflow-hidden rounded-t-lg">
            <MapBackground />
          </div>
          {destinations.map((destination) => (
            <Pin key={destination.slug} destination={destination} language={language} />
          ))}
        </div>
        <p className="border-t border-border bg-background/60 px-5 py-3 text-xs text-muted-foreground">
          {localize(language, uiCopy.map.interactionHint)}
        </p>
      </div>
    </section>
  );
}

function MapBackground() {
  const longitudeLines = LONGITUDE_TICKS.map((lon) => ({
    lon,
    x: ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * 100,
  }));
  const latitudeLines = LATITUDE_TICKS.map((lat) => ({
    lat,
    y: ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * 100,
  }));

  return (
    <svg
      className="absolute inset-0 h-full w-full text-border"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="mapDots" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.4" fill="currentColor" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#mapDots)" />
      {longitudeLines.map(({ lon, x }) => (
        <g key={`lon-${lon}`}>
          <line
            x1={x}
            x2={x}
            y1={0}
            y2={100}
            stroke="currentColor"
            strokeWidth={0.15}
            strokeDasharray="0.6,0.8"
            opacity={0.6}
          />
        </g>
      ))}
      {latitudeLines.map(({ lat, y }) => (
        <g key={`lat-${lat}`}>
          <line
            x1={0}
            x2={100}
            y1={y}
            y2={y}
            stroke="currentColor"
            strokeWidth={0.15}
            strokeDasharray="0.6,0.8"
            opacity={0.6}
          />
        </g>
      ))}
    </svg>
  );
}

function Pin({ destination, language }: { destination: Destination; language: Language }) {
  const { left, top } = pinPosition(destination.coordinates);
  const country = localize(language, destination.country);
  const visa = localize(language, destination.visaStay);
  const budget = localize(language, destination.budget);
  const cardAbove = top > 55; // near the bottom edge — flip callout above

  return (
    <Link
      to="/destinations/$slug"
      params={{ slug: destination.slug }}
      className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
      style={{ left: `${left}%`, top: `${top}%` }}
      aria-label={`${country} — ${visa}`}
    >
      <span
        className={cn(
          "block h-3 w-3 rounded-full border-2 border-primary bg-background transition-all",
          "group-hover:scale-125 group-hover:bg-primary group-focus-visible:scale-125 group-focus-visible:bg-primary",
          "group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-card",
        )}
      />
      <span className="pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded bg-background/90 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-foreground shadow-sm backdrop-blur-sm sm:text-xs">
        {localize(language, destination.mapLabel ?? destination.country)}
      </span>
      <div
        role="tooltip"
        className={cn(
          "pointer-events-none absolute left-1/2 z-10 w-56 -translate-x-1/2 rounded-lg border border-border bg-background p-3 opacity-0 shadow-lg transition-opacity duration-150",
          "group-hover:opacity-100 group-focus-visible:opacity-100",
          cardAbove ? "bottom-full mb-4" : "top-full mt-6",
        )}
      >
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {localize(language, destination.highlight)}
        </p>
        <p className="mt-1 text-sm font-semibold text-foreground">{country}</p>
        <dl className="mt-2 space-y-1 text-xs text-muted-foreground">
          <div className="flex justify-between gap-3">
            <dt>{language === "en" ? "Visa" : "签证"}</dt>
            <dd className="text-right text-foreground">{visa}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt>{language === "en" ? "Budget" : "预算"}</dt>
            <dd className="text-right text-foreground">{budget}</dd>
          </div>
        </dl>
        <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
          {language === "en" ? "Open page" : "打开页面"}
          <ArrowRight className="h-3 w-3" />
        </p>
      </div>
    </Link>
  );
}
