import { createFileRoute, notFound } from "@tanstack/react-router";

import { TravelSite } from "../components/layout/travel-site";
import { getDestination } from "../content/localize";
import { siteUrl } from "../content/site";

type SlugSearch = { lang?: "en" | "zh" };

export const Route = createFileRoute("/destinations/$slug")({
  loaderDeps: ({ search }: { search: SlugSearch }) => ({ lang: search.lang }),
  loader: ({ params, deps }) => {
    const destination = getDestination(params.slug);
    if (!destination) throw notFound();
    return { destination, lang: deps.lang ?? "en" };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Destination | Asia Travel Explorer" }],
      };
    }

    const { destination, lang } = loaderData;
    const country = destination.country[lang];
    const description = destination.overview[lang];
    const title = `${country} | Asia Travel Explorer`;
    const image = `${siteUrl}${destination.image}`;
    const canonical = `${siteUrl}/destinations/${params.slug}${lang === "en" ? "" : `?lang=${lang}`}`;
    const enHref = `${siteUrl}/destinations/${params.slug}`;
    const zhHref = `${siteUrl}/destinations/${params.slug}?lang=zh`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: image },
        { property: "og:locale", content: lang === "zh" ? "zh_CN" : "en_US" },
        { property: "og:locale:alternate", content: lang === "zh" ? "en_US" : "zh_CN" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [
        { rel: "canonical", href: canonical },
        { rel: "alternate", hrefLang: "en", href: enHref },
        { rel: "alternate", hrefLang: "zh", href: zhHref },
        { rel: "alternate", hrefLang: "x-default", href: enHref },
      ],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const { destination } = Route.useLoaderData();

  return <TravelSite destination={destination} />;
}
