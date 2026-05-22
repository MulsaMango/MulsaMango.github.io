import type { MetaDescriptor } from "react-router";

// Figma and FigJam build a rich link preview by parsing a page's `og` / `twitter`
// meta tags for a title, description, thumbnail, and favicon. Without them a pasted
// link only shows the URL and favicon, which is the bare state we're fixing here.
// https://developers.figma.com/docs/plugins/api/properties/figma-createlinkpreviewasync/

// Canonical custom domain — not the default *.github.io host the site also
// answers on. Using the canonical origin keeps the preview tags stable across a
// hosting move (e.g. GitHub Pages -> Cloudflare), since only the domain matters.
export const SITE_URL = "https://tulsadaley.com";
export const SITE_NAME = "Tulsa Daley";

export function buildMeta({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): MetaDescriptor[] {
  const url = `${SITE_URL}${path}`;

  return [
    { title },
    { name: "description", content: description },

    // Point search/social crawlers at the custom domain so the site answering on
    // both tulsadaley.com and *.github.io isn't treated as duplicate content.
    { tagName: "link", rel: "canonical", href: url },

    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },

    // No og:image / twitter:image by choice — previews stay text-only. That makes
    // "summary" (not "summary_large_image") the right card; the large variant is
    // specifically the image card and degrades without one.
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}
