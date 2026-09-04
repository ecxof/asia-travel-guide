import { createFileRoute } from "@tanstack/react-router";

import { TravelSite } from "../components/layout/travel-site";
import { homeSeo } from "../content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: homeSeo.title },
      { name: "description", content: homeSeo.description },
      { property: "og:title", content: homeSeo.title },
      { property: "og:description", content: homeSeo.description },
      { name: "twitter:title", content: homeSeo.title },
      { name: "twitter:description", content: homeSeo.description },
    ],
  }),
  component: Index,
});

function Index() {
  return <TravelSite />;
}
