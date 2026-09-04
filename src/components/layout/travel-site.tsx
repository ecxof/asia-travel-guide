import { heroImage } from "../../content/site";
import type { Destination } from "../../content/types";
import { useLanguage } from "../../lib/language-context";
import { DestinationBody } from "../destination/destination-body";
import { DestinationHero } from "../destination/destination-hero";
import { HomeBody } from "../home/home-body";
import { HomeHero } from "../home/home-hero";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type TravelSiteProps = {
  destination?: Destination;
};

export function TravelSite({ destination }: TravelSiteProps) {
  const { language, setLanguage } = useLanguage();
  const onHome = !destination;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative isolate overflow-hidden border-b border-border bg-card">
        <img
          src={heroImage}
          alt="A visual collage of easy-entry Asia travel experiences"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SiteHeader language={language} onLanguageChange={setLanguage} onHome={onHome} />
          {destination ? (
            <DestinationHero destination={destination} language={language} />
          ) : (
            <HomeHero language={language} />
          )}
        </div>
      </div>

      {destination ? (
        <DestinationBody destination={destination} language={language} />
      ) : (
        <HomeBody language={language} />
      )}

      <SiteFooter language={language} />
    </div>
  );
}
