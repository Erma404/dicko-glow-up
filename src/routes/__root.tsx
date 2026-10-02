import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteModal } from "@/components/QuoteModal";
import { QuoteModalProvider } from "@/lib/quote-modal-context";
import { DEFAULT_OG_IMAGE, SITE_NAME, jsonLdScriptProps, organizationJsonLd } from "@/lib/seo";
import { CookieConsentHead } from "@/components/CookieConsent";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "wvBc1d2r8JjvW61AbZ57dV3t3Q0SsPY_WxdhiE9cYUs",
      },
      { title: "DICKO — Plombier Chauffagiste Paris & Île-de-France" },
      {
        name: "description",
        content:
          "DICKO BTP : plombier chauffagiste 100% B2B à Paris et en Île-de-France. Plomberie, chauffage collectif, VMC, gaz. Devis gratuit sous 24h ouvrées.",
      },
      { name: "author", content: "DICKO" },
      { property: "og:title", content: "DICKO — Plombier Chauffagiste Paris & Île-de-France" },
      {
        property: "og:description",
        content:
          "Installation CVC pour bâtiments tertiaires, logements collectifs et infrastructures publiques en Île-de-France.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
      { name: "geo.region", content: "FR-IDF" },
      { name: "geo.placename", content: "Paris" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon.png" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
        <CookieConsentHead />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <QuoteModalProvider>
        {/* Fiche d'établissement (LocalBusiness/Plumber), présente sur
            chaque page — sert aux moteurs de recherche locaux comme aux
            moteurs génératifs (ChatGPT, Perplexity...) pour citer DICKO
            avec les bonnes coordonnées et la bonne zone de service. */}
        <script {...jsonLdScriptProps(organizationJsonLd())} />
        <div className="min-h-screen bg-background text-foreground">
          <SiteHeader />
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
          <SiteFooter />
        </div>
        <QuoteModal />
      </QuoteModalProvider>
    </QueryClientProvider>
  );
}

