import type { Project } from "../data/projects";
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
            <p>
              <strong>System layer:</strong> naming conventions, scalability,
              and discoverability.
            </p>
          </li>
          <li>
            <p>
              <strong>Operational layer:</strong> contribution, governance, and
              best practice usage guidance.
            </p>
          </li>
        </ul>
        <h2 id="small-but-mighty">Small but mighty</h2>
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
          does not equal more clarity. As Niki Tonsky puts it: ​​
        </p>
        <blockquote>
          <p>
            <strong>
              &quot;...adding an icon to everything is exactly the wrong thing
              to do.”
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
        <p>
          <img
            src="https://capacities-files.s3.eu-central-1.amazonaws.com/private/d5e9b613-aae1-4c46-8961-99e8b2d83047/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260126%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20260126T063046Z&amp;X-Amz-Expires=43200&amp;X-Amz-Signature=30b59229d51c72d0ba422b07a11c116d5362292ee2fbdb6092a3b1e0b10ff1ca&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject"
            alt="image"
          />
          <a href="../Images/image.md">image</a>
        </p>
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
            <p>
              Icons were added without vetting, leading to duplicates,
              inconsistent quality, and inappropriate additions.
            </p>
          </li>
          <li>
            <p>
              Stroke weight, sizing, alignment, and naming drifted over time,
              even when sourced from the same set. This can translate poorly
              when these inconsistencies are noticable in the product
            </p>
          </li>
          <li>
            <p>
              Design and production could fall out of sync because there was no
              formal workflow tying them together.
            </p>
          </li>
          <li>
            <p>
              Teams lacked guidance on semantics, placement, and when text alone
              was the better choice, leading to inconsistent, excessive, and
              sometimes incorrect icon use across the product.
            </p>
          </li>
        </ul>
        <p>
          <img src={itsTheSamePicture} alt="its-the-same-picture" />
        </p>
        <h2 id="what-done-meant-for-this-rebuild">
          What “done” meant for this rebuild
        </h2>
        <p>I needed to deliver:</p>
        <ul>
          <li>
            <p>
              A consistent visual spec across the library, enforced by templates
              and review loops.
            </p>
          </li>
          <li>
            <p>
              A naming convention built to scale, but without dogmatic adherence
              to it getting in the way of finding the right icon
            </p>
          </li>
          <li>
            <p>
              More ways to search across icons, so designers and engineers can
              find the right icon without eyeballing hundreds of icons or
              guessing the exact search term.
            </p>
          </li>
          <li>
            <p>
              A repeatable contribution and review workflow, to maintain quality
              over time.
            </p>
          </li>
          <li>
            <p>
              A formalised workflow to keep design and code assets in sync over
              time.
            </p>
          </li>
          <li>
            <p>Documented usage guidelines to reduce misuse and overuse</p>
          </li>
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
            <p>
              Audited the library with a focus to reduce bloat. Removed
              duplicates, &#39;near-enough&#39; duplicates, and then reviewed
              usage analytics in Figma and the codebase to identify icons with
              zero or minimal usage.
            </p>
          </li>
          <li>
            <p>
              Increased the uniformity of the remaining icons by addressing
              inconsistencies in stroke weight, corner treatment, token
              application, or overall visual style.
            </p>
          </li>
          <li>
            <p>
              Created a combined grid and key-shapes template in Figma to keep
              new icons consistent in size, proportion, and visual balance.
            </p>
          </li>
        </ul>
        <p>
          <img
            src="https://capacities-files.s3.eu-central-1.amazonaws.com/private/826b2e4f-fa61-4ddf-aa7f-c4b36df2990a/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260126%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20260126T011719Z&amp;X-Amz-Expires=43200&amp;X-Amz-Signature=e4df0df81078fa316c36781030a59a6fdb9616c27efa7d62337bc3a724d3e1ae&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject"
            alt="CleanShot 2026-01-26 at 12.16.30@2x"
          />
          <a href="../Images/CleanShot%202026-01-26%20at%20121630@2x.md">
            CleanShot 2026-01-26 at 12.16.30@2x
          </a>
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
            <p>
              Defaulted to object first naming for most icons, standardising on
              kebab-case for the icon library
            </p>
          </li>
          <li>
            <p>
              Used function based naming in a small set of cases where the
              icon’s meaning is single purpose.
            </p>
          </li>
          <li>
            <p>
              Used a consistent pattern for variants: primary object first, then
              modifiers as suffixes (for example, truck, truck-check,
              truck-plus, truck-lock).
            </p>
          </li>
        </ul>
        <p>
          <img
            src="https://capacities-files.s3.eu-central-1.amazonaws.com/private/67b53599-9b69-4a26-8a5f-b826254a4a39/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260126%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20260126T002641Z&amp;X-Amz-Expires=43200&amp;X-Amz-Signature=b435cb1e1f0bbac08ded2d1565759a6afdab756955265d205733882eea61256e&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject"
            alt="truck-example"
          />
          <a href="../Images/truck-example.md">truck-example</a>
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
            <p>
              Added search keywords in both Figma and development environments
              so results better match how people actually search, not just the
              canonical name.
            </p>
          </li>
          <li>
            <p>
              Supported synonyms and alternate mental models through metadata,
              while keeping naming conventions clean and stable.
            </p>
          </li>
          <li>
            <p>
              Ran a short workshop with embedded designers to capture the terms
              they would actually search to find certain icons, so keywords
              reflect real behavior and shared mental models.{" "}
            </p>
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
          <a href="../Images/icon-workshop.md">icon-workshop</a>
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
            <p>
              Established and documented a standard contribution process for
              requesting for contributing icons
            </p>
          </li>
          <li>
            <p>
              Set upfront guardrails with a short icon ethos and a preflight
              checklist: use icons sparingly, confirm an icon is necessary, and
              check the existing library before requesting.
            </p>
          </li>
          <li>
            <p>
              Built the workflow in Figma branching making use of its built-in
              review loop. Contributors branch from the main icon library, add
              the proposed icon and supporting context, then request review.
              This automatically notifies and assigns the right design system
              reviewers to validate and support the change.
            </p>
          </li>
        </ul>
        <p>
          <img
            src="https://capacities-files.s3.eu-central-1.amazonaws.com/private/50e3ef26-9d3e-4221-8c1c-7abb20f24c60/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260126%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20260126T040646Z&amp;X-Amz-Expires=43200&amp;X-Amz-Signature=0cf2922bfb9486b3c066a794fd3e29fa049f95c8512596dc3cd773d670b1bd96&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject"
            alt="icon-contribution"
          />
          <a href="../Images/icon-contribution.md">icon-contribution</a>
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
            <p>
              Partnered with design system engineers to map how icon changes
              move from design to production, including dependencies and
              ownership.
            </p>
          </li>
          <li>
            <p>
              Created a standardised work item template so icon requests arrived
              with the right technical context, routed to the right engineers,
              and landed in the release queue with a appropriate priority.
            </p>
          </li>
          <li>
            <p>
              Established aligned versioning between Figma and code so teams
              could track what changed, when it shipped, and which set they were
              using.
            </p>
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
          <li>
            <p>Products got an instant polish with pixel-perfect icons.</p>
          </li>
          <li>
            <p>
              Since completion (over 1 year now), the library has seen 90+
              successful, well-vetted contributions through the new process.
            </p>
          </li>
          <li>
            <p>
              There’s been a noticeable lift in icon literacy and healthier icon
              usage across product teams.
            </p>
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

      {/* Problem Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
          Problem
        </h2>
        <p
          className="!font-sans text-gray-700 leading-relaxed mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          The existing icon system had several issues: inconsistent stroke
          weights, varying sizes, and lack of a cohesive visual language. This
          led to confusion for designers and developers when selecting
          appropriate icons for different contexts.
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
          <li>Inconsistent visual weight across icon families</li>
          <li>No clear guidelines for icon usage</li>
          <li>Limited icon set that didn't cover all use cases</li>
          <li>Poor accessibility in smaller sizes</li>
        </ul>
      </section>

      {/* Process Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
          Process
        </h2>
        <p
          className="!font-sans text-gray-700 leading-relaxed mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          We started by auditing all existing icons and identifying common
          patterns. Then we established design principles and created a new icon
          system based on a consistent grid and stroke weight.
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Research
            </h3>
            <p
              className="!font-sans text-gray-700 leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Conducted a comprehensive audit of existing icons, analyzed
              competitor icon systems, and gathered feedback from designers and
              developers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Design</h3>
            <p
              className="!font-sans text-gray-700 leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Created a unified design system with consistent stroke weights,
              grid-based layouts, and clear guidelines for sizing and usage.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
          Solution
        </h2>
        <p
          className="!font-sans text-gray-700 leading-relaxed mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          We created a new icon system with the following key improvements:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-6">
          <li>Unified stroke weight of 1.5px for consistency</li>
          <li>24px base grid system for easy scaling</li>
          <li>Comprehensive icon library covering 200+ icons</li>
          <li>Clear documentation and usage guidelines</li>
          <li>Improved accessibility with better contrast and sizing</li>
        </ul>
      </section>

      {/* Results Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
          Results
        </h2>
        <p
          className="!font-sans text-gray-700 leading-relaxed mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          The new icon system has significantly improved consistency across the
          product and reduced design and development time. Designers can now
          easily find and use appropriate icons, while developers have clear
          guidelines for implementation.
        </p>

        {/* Quote */}
        <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-gray-700">
          <p
            className="!font-sans text-lg mb-2"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            "The new icon system has made our design process so much more
            efficient. We spend less time searching for icons and more time
            building great experiences."
          </p>
          <cite className="text-sm text-gray-500 not-italic">
            — Design Team Lead
          </cite>
        </blockquote>
      </section>

      {/* Divider */}
      <hr className="my-12 border-gray-200" />

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
          Conclusion
        </h2>
        <p
          className="!font-sans text-gray-700 leading-relaxed mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          This project demonstrated the importance of systematic thinking in
          design. By establishing clear principles and guidelines, we created a
          scalable icon system that will continue to serve the product as it
          grows.
        </p>
      </section>
    </article>
  );
}
