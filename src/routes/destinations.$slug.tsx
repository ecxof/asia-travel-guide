import { createFileRoute, notFound } from "@tanstack/react-router";

import { TravelSite } from "../components/travel-site";
import { getDestination, siteUrl } from "../lib/travel-content";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const destination = getDestination(params.slug);

    if (!destination) {
      throw notFound();
    }

    return { destination };
  },
  head: ({ loaderData }) => {
    const title = `${loaderData.destination.country.en} | Asia Travel Explorer`;
    const description = loaderData.destination.overview.en;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: `${siteUrl}${loaderData.destination.image}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: `${siteUrl}${loaderData.destination.image}` },
      ],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const { destination } = Route.useLoaderData();

  return <TravelSite destination={destination} />;
}