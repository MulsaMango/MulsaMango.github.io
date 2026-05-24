// Single source for the personal copy and contact details that appear in more
// than one place (landing hero, footer, password gate). Centralising it keeps
// the gated entry page in step with the real site instead of drifting as the
// wording is tweaked.

export const HEADLINE = "Ahoy, I'm Tulsa.";

export const TAGLINE =
  "A product designer with a design systems backbone, strong UI craft, and a growing AI-enabled practice that connects design, systems, and code to shape better solutions for complex product problems.";

// "Currently working" line. The company is a link, so it's kept structured
// rather than baked into a sentence the callers would have to re-parse.
export const CURRENT_WORK = {
  lead: "Working on design systems for enterprise software @",
  company: { name: "WiseTech Global", href: "https://www.cargowise.com/" },
} as const;

export const EMAIL = "tulsadaley@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/tulsa-daley/";
export const GITHUB_URL = "https://github.com/tulsa-code";
