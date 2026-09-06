import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { homeSeo, siteUrl } from "../content/site";
import { LanguageProvider, useLanguage } from "../lib/language-context";
import appCss from "../styles.css?url";

const ogImage = `${siteUrl}/asia-travel-hero.jpg`;

type RootSearch = { lang?: "en" | "zh" };

function validateRootSearch(search: Record<string, unknown>): RootSearch {
  const lang = search.lang;
  return { lang: lang === "en" || lang === "zh" ? lang : undefined };
}

function NotFoundComponent() {
  const { language } = useLanguage();
  const heading = language === "zh" ? "页面未找到" : "Page not found";
  const body =
    language === "zh"
      ? "您访问的页面不存在，或已被移动。"
      : "The page you're looking for doesn't exist or has been moved.";
  const cta = language === "zh" ? "返回首页" : "Go home";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{heading}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{body}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {cta}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  validateSearch: validateRootSearch,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: homeSeo.title },
      { name: "description", content: homeSeo.description },
      { property: "og:title", content: homeSeo.title },
      { property: "og:description", content: homeSeo.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: homeSeo.title },
      { name: "twitter:description", content: homeSeo.description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LanguageProvider>
      <SkipToContent />
      <Outlet />
    </LanguageProvider>
  );
}

function SkipToContent() {
  const { language } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {language === "zh" ? "跳转到主要内容" : "Skip to main content"}
    </a>
  );
}
