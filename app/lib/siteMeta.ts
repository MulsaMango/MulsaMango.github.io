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

// Absolute URL is required: a crawler fetching the page off-site can't resolve a
// root-relative path, so og:image must carry the full origin.
export const OG_IMAGE = `${SITE_URL}/hero-image.png`;

export function buildMeta({
  title,
  description,
  path = "/",
  image = OG_IMAGE,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
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
    { property: "og:image", content: image },
    { property: "og:image:alt", content: title },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}
