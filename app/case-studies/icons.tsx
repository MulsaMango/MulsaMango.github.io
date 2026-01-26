import type { Project } from "../data/projects";
import { SmallCaseStudyImage } from "./case-study-image";
import itsTheSamePicture from "./icons-images/its-the-same-picture.jpg";

interface IconsCaseStudyProps {
  project: Project;
}

export function IconsCaseStudy({ project }: IconsCaseStudyProps) {
  return (
    <article className="prose max-w-none">
      {/* Overview Section */}
      <section className="mb-12">
        <p>
          I led a successful end to end rebuild of the design system’s icon
          library (200+ icons at the time), spanning three layers:
        </p>
        <ul>
          <li>
            <strong>UI fundamentals:</strong> style, size, pixel grid, stroke
            weight, and alignment.
          </li>
          <li>
            <strong>System layer:</strong> naming conventions, scalability, and
            discoverability.
          </li>
          <li>
            <strong>Operational layer:</strong> contribution, governance, and
            best practice usage guidance.
          </li>
        </ul>
        <h2 id="small-but-mighty" className="font-semibold">
          Small but mighty
        </h2>
        <p>
          When used strategically, icons compress meaning into a consistent
          visual shorthand, speed up scanning, and make actions and concepts
          predictable across screens. But inconsistent icons, frivolous usage,
          and unclear meaning add cognitive load, reduce trust, and slow people
          down.
        </p>
        <p>
          Apple's recent icon change in the Tahoe update is a good reminder that
          iconography is a usability tool, not decoration, and that more icons
          does not equal more clarity. As Niki Tonsky puts it:
        </p>
        <blockquote>
          <p>
            <strong>
              ...adding an icon to everything is exactly the wrong thing to do.”
            </strong>
          </p>
        </blockquote>
        <p>
          <em>Niki Tonsky,</em>
          <a href="https://tonsky.me/blog/tahoe-icons/">
            It&#39;s hard to justify Tahoe icons,
          </a>{" "}
          <em>2026</em>
        </p>

        <SmallCaseStudyImage
          src="https://capacities-files.s3.eu-central-1.amazonaws.com/private/d5e9b613-aae1-4c46-8961-99e8b2d83047/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260126%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20260126T063046Z&amp;X-Amz-Expires=43200&amp;X-Amz-Signature=30b59229d51c72d0ba422b07a11c116d5362292ee2fbdb6092a3b1e0b10ff1ca&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject"
          alt="Comparison between old macOS menus and new macOS menus. The new menus overuse icons."
        />

        <p>
          WiseTech Global builds logistics software for expert users like
          freight forwarders, customs brokers, and warehouse operators. Their
          work is time sensitive and data dense, so efficiency often comes from
          recognition and repetition: scanning tables, spotting statuses, and
          firing frequent actions from predictable places. In that environment,
          icons are a core part of the product’s visual vocabulary
        </p>
        <p>
          <strong>
            ...but the design system’s icon library wasn’t setting teams up for
            success and there were clear opportunities to improve it.
          </strong>
        </p>
        <h2 id="the-cost-of-minimal-governance">
          The cost of minimal governance
        </h2>
        <p>
          In its early form, the icon library had an open contribution model,
          meaning designers could freely add to the library and publish icons as
          needed. This was pragmatic when the team was small and the system was
          still forming. But as both scaled, a lightly governed model wasn’t
          sustainable.
        </p>
        <p>
          Some guardrails existed (like sourcing new icons from a specific{" "}
          <a href="https://www.streamlinehq.com/icons/core-line">Streamline</a>{" "}
          collection and following basic export specs), but the model started
          surfacing some gnarly symptoms:
        </p>
        <ul>
          <li>
            Icons were added without vetting, leading to duplicates,
            inconsistent quality, and inappropriate additions.
          </li>
          <li>
            Stroke weight, sizing, alignment, and naming drifted over time, even
            when sourced from the same set. This can translate poorly when these
            inconsistencies are noticable in the product
          </li>
          <li>
            Design and production could fall out of sync because there was no
            formal workflow tying them together.
          </li>
          <li>
            Teams lacked guidance on semantics, placement, and when text alone
            was the better choice, leading to inconsistent, excessive, and
            sometimes incorrect icon use across the product.
          </li>
        </ul>
        <p>
          <SmallCaseStudyImage
            src={itsTheSamePicture}
            alt="its-the-same-picture"
          />
        </p>
        <h2 id="what-done-meant-for-this-rebuild">
          What “done” meant for this rebuild
        </h2>
        <p>I needed to deliver:</p>
        <ul>
          <li>
            A consistent visual spec across the library, enforced by templates
            and review loops.
          </li>
          <li>
            A naming convention built to scale, but without dogmatic adherence
            to it getting in the way of finding the right icon
          </li>
          <li>
            More ways to search across icons, so designers and engineers can
            find the right icon without eyeballing hundreds of icons or guessing
            the exact search term.
          </li>
          <li>
            A repeatable contribution and review workflow, to maintain quality
            over time.
          </li>
          <li>
            A formalised workflow to keep design and code assets in sync over
            time.
          </li>
          <li>Documented usage guidelines to reduce misuse and overuse</li>
        </ul>
        <hr />
        <h2 id="selected-project-highlights">Selected project highlights</h2>
        <p>
          This was a multi phase project. Each phase went deep, with plenty of
          healthy trade offs along the way. I started by fixing what was already
          broken, then put the conventions and guardrails in place to stop the
          same problems reappearing.
        </p>
        <p>
          The highlights below cover the main beats. If you&#39;re interested in
          more juicy details, I&#39;m happy to chat.
        </p>
        <h3 id="ui-fundamentals-icon-library-first-aid">
          UI fundamentals: icon library first aid
        </h3>
        <ul>
          <li>
            Audited the library with a focus to reduce bloat. Removed
            duplicates, &#39;near-enough&#39; duplicates, and then reviewed
            usage analytics in Figma and the codebase to identify icons with
            zero or minimal usage.
          </li>
          <li>
            Increased the uniformity of the remaining icons by addressing
            inconsistencies in stroke weight, corner treatment, token
            application, or overall visual style.
          </li>
          <li>
            Created a combined grid and key-shapes template in Figma to keep new
            icons consistent in size, proportion, and visual balance.
          </li>
        </ul>
        <p>
          <img
            src="https://capacities-files.s3.eu-central-1.amazonaws.com/private/826b2e4f-fa61-4ddf-aa7f-c4b36df2990a/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260126%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20260126T011719Z&amp;X-Amz-Expires=43200&amp;X-Amz-Signature=e4df0df81078fa316c36781030a59a6fdb9616c27efa7d62337bc3a724d3e1ae&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject"
            alt="CleanShot 2026-01-26 at 12.16.30@2x"
          />
        </p>
        <h3 id="system-layer-a-naming-convention-that-optimizes-for-scale-and-long-term-clarity">
          System layer: a naming convention that optimizes for scale and long
          term clarity
        </h3>
        <p>
          I established an object first naming approach because it keeps names
          stable as variants grow, and avoids baking a single screen specific
          meaning into the name.
        </p>
        <p>
          But I also took a pragmatic approach. Where an icon has a fixed,
          widely understood role in our UI, I named it by function to reduce
          misuse. “Save” is the clearest example: in a strict object-first
          scheme it’d be “floppy disk”, but in practice it should only ever mean
          save.
        </p>
        <ul>
          <li>
            Defaulted to object first naming for most icons, standardising on
            kebab-case for the icon library
          </li>
          <li>
            Used function based naming in a small set of cases where the icon’s
            meaning is single purpose.
          </li>
          <li>
            Used a consistent pattern for variants: primary object first, then
            modifiers as suffixes (for example, truck, truck-check, truck-plus,
            truck-lock).
          </li>
        </ul>
        <p>
          <img
            src="https://capacities-files.s3.eu-central-1.amazonaws.com/private/67b53599-9b69-4a26-8a5f-b826254a4a39/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260126%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20260126T002641Z&amp;X-Amz-Expires=43200&amp;X-Amz-Signature=b435cb1e1f0bbac08ded2d1565759a6afdab756955265d205733882eea61256e&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject"
            alt="truck-example"
          />
        </p>
        <h3 id="system-layer-search-metadata-that-matches-how-people-actually-search">
          System layer: search metadata that matches how people actually search
        </h3>
        <p>
          To help reduce accidental duplicates (or near-enough duplicates) being
          added to the system, it was important to make icons easy to discover.
          I added keywords that improve findability without compromising the
          canonical naming system.
        </p>
        <ul>
          <li>
            Added search keywords in both Figma and development environments so
            results better match how people actually search, not just the
            canonical name.
          </li>
          <li>
            Supported synonyms and alternate mental models through metadata,
            while keeping naming conventions clean and stable.
          </li>
          <li>
            Ran a short workshop with embedded designers to capture the terms
            they would actually search to find certain icons, so keywords
            reflect real behavior and shared mental models.{" "}
          </li>
        </ul>
        <p>
          Even in small ways like this, involving key users in the process can
          cultivate shared ownership, which helps build trust in the system.
        </p>
        <p>
          <img
            src="https://capacities-files.s3.eu-central-1.amazonaws.com/private/83ffc00e-513b-4b87-b224-e0f21cc3cec7/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260125%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20260125T233612Z&amp;X-Amz-Expires=43200&amp;X-Amz-Signature=76816b896783566a7a1ed1cda4c0240607fb0d7fb4d8405a9ac2f947e5d969bd&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject"
            alt="icon-workshop"
          />
        </p>
        <h3 id="operational-layer-a-new-contribution-process">
          Operational layer: a new contribution process
        </h3>
        <p>
          I introduced a contribution process that combined education,
          guardrails, and a clear review loop so the library preserved quality
          as it scaled.
        </p>
        <ul>
          <li>
            Established and documented a standard contribution process for
            requesting for contributing icons
          </li>
          <li>
            Set upfront guardrails with a short icon ethos and a preflight
            checklist: use icons sparingly, confirm an icon is necessary, and
            check the existing library before requesting.
          </li>
          <li>
            Built the workflow in Figma branching making use of its built-in
            review loop. Contributors branch from the main icon library, add the
            proposed icon and supporting context, then request review. This
            automatically notifies and assigns the right design system reviewers
            to validate and support the change.
          </li>
        </ul>
        <p>
          <img
            src="https://capacities-files.s3.eu-central-1.amazonaws.com/private/50e3ef26-9d3e-4221-8c1c-7abb20f24c60/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260126%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20260126T040646Z&amp;X-Amz-Expires=43200&amp;X-Amz-Signature=0cf2922bfb9486b3c066a794fd3e29fa049f95c8512596dc3cd773d670b1bd96&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject"
            alt="icon-contribution"
          />
        </p>
        <h3 id="operational-layer-design-to-production-parity">
          Operational layer: design to production parity
        </h3>
        <p>
          A clean icon library in Figma is only useful if it matches what’s
          available in production. When icons changed, I put a workflow in place
          to keep design and code in sync. Before this, icon update requests
          were relayed through MS Teams, typically to the same developer.
        </p>
        <ul>
          <li>
            Partnered with design system engineers to map how icon changes move
            from design to production, including dependencies and ownership.
          </li>
          <li>
            Created a standardised work item template so icon requests arrived
            with the right technical context, routed to the right engineers, and
            landed in the release queue with a appropriate priority.
          </li>
          <li>
            Established aligned versioning between Figma and code so teams could
            track what changed, when it shipped, and which set they were using.
          </li>
        </ul>
        <hr />
        <h2 id="impact">Impact</h2>
        <p>
          Icons are small, but in dense enterprise workflows they can do some
          serious heavy lifting in the UI. This work drastically raised the
          quality and consistency of the icon set, empowered product teams in
          better icon usage, and set the library up to scale as the system
          grows.
        </p>
        <ul>
          <li>Products got an instant polish with pixel-perfect icons.</li>
          <li>
            Since completion (over 1 year now), the library has seen 90+
            successful, well-vetted contributions through the new process.
          </li>
          <li>
            There’s been a noticeable lift in icon literacy and healthier icon
            usage across product teams.
          </li>
        </ul>
        <h2 id="reflection">Reflection</h2>
        <p>
          This was a genuinely satisfying project to lead. I got to go deep on
          the technical craft of UI iconography, work closely with design system
          engineers, bring system users into decisions, and design the process
          that keeps the improvements intact over time.
        </p>
        <p>
          <strong>Process change is people change:</strong> moving from low
          governance to real guardrails adds healthy friction by design, but
          that friction can be seen by product teams as a blocker. Being
          transparent about the why and involving key users early helped it have
          a smoother landing.
        </p>
        <p>
          <strong>Working with legacy constraints:</strong> even “small” changes
          had real cost. At the time, updating the library for single icon
          wasn’t quick, and renames or removals created breaking changes in
          code. That pushed me to be disciplined about bundling high-impact
          changes into clear releases instead of scattering updates.
        </p>
        <p>
          <strong>Importance of ownership:</strong> new processes and ways of
          working decay fast without a clear owner. I became the single point of
          contact for icons, owned the BAU, enforced the guardrails, and kept
          refining and improving the process as needs shifted and new technology
          emerged (hello, AI 👋). From what I’ve seen, that steady ownership is
          a big part of why the process is still solid over a year later.
        </p>
      </section>
    </article>
  );
}
