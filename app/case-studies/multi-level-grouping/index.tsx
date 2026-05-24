import { useState } from "react";
import { Dialog } from "../../components/Dialog";
import { Heading2 } from "../case-study-typography";
import App from "./prototype/App";

export function MultiLevelGroupingCaseStudy() {
  const [open, setOpen] = useState(false);

  return (
    <article className="prose max-w-none">
      <section className="mb-12">
        <p>
          For expert users in WiseTech Global's flagship logistics product, data
          tables are the engine. They sit at the core of nearly every workflow,
          and the logistics professionals using them spend their day inside them.
        </p>
        <p>
          These tables are more than a way to display data in rows and columns.
          They organize and shape data; they can also be a jumping-off point.
          They need to be customizable, flexible, and unapologetically dense. A
          common instinct for designers is to try to simplify the complex — but
          in this domain, complexity is power in the hands of an expert.
        </p>

        <Heading2 id="my-role">My role</Heading2>
        <p>
          What follows is a snapshot of some of the data table projects I've
          been part of and led at WiseTech:
        </p>
        <ul>
          <li>Editable vs display tables</li>
          <li>Filters</li>
          <li>Multi-level grouping</li>
          <li>Color schemes</li>
        </ul>
        <p>
          I led the UI interaction and end-to-end experience design across these
          projects. The role covered visual exploration, interaction design,
          rapid AI prototyping, edge case mapping, design system contributions,
          and ongoing design reviews with UX designers, developers, and product
          managers.
        </p>
        <p>
          Much of the work meant navigating between research insight, the
          realities of legacy code, and where the design needed to push for
          expert users.
        </p>

        <Heading2 id="editable-vs-display-tables">
          Editable vs display tables
        </Heading2>
        <p>
          Research surfaced a distinction in how users were actually using tables
          across the product. There were two macro types: display tables, which
          surfaced data and acted as a jumping-off point into detail views, and
          editable tables, where data was directly modified inline. Visually they
          were essentially identical. It was unclear to users what the behaviour
          of a table was until they clicked on rows and entered either the
          'working surface' or 'jumping off' experience.
        </p>
        <p>
          The design needed to make that distinction clear{" "}
          <em>before</em> any interaction.
        </p>
        <p>
          <strong>Display tables</strong> cater to exploratory scanning and
          review workflows where the user needs to navigate larger volumes of
          data. A zebra pattern aids in scannability, rows can be double clicked
          to open a more detailed view of the entity represented in the row.
        </p>
        <p>
          <strong>Editable tables</strong> took on a more grid-like
          presentation, similar to a spreadsheet. A deliberate hover treatment
          marks the cell under the cursor, a row-level hover supports navigation,
          and the cells themselves mirror the design system's standard field
          patterns. It's immediately clear that cells can be edited inline. A
          date cell opens a calendar popover, and a select cell expands into its
          options.
        </p>

        <Heading2 id="filters">Filters</Heading2>
        <p>
          Filtering is how expert users navigate dense data sets. Quick filters
          and a search bar don't go far enough — expert users need more granular
          control.
        </p>
        <p>
          My work here was a UI uplift across the existing filter model. That
          included the filter-building experience, creating filter groups,
          reordering filter strips, and a full rework of saved filter management
          — the task flows around saving filters and resurfacing them when
          needed, for both individual users and organization-wide publishing.
        </p>
        <p>
          Throughout the work I drew on the broader data table research effort,
          ran multiple design critiques with embedded designers across the
          organization, and had a regular touch point with the e-learning
          specialist responsible for data table material for end-users.
        </p>
        <p>
          This work was closely linked with the design of the filter chip
          pattern — a compact way to present applied filters on top of the table.
          In an earlier version of the product, filters appeared alongside the
          data so users could see both at once. The web version moved filters
          into a dedicated modal, which degraded that visibility. Chips restored
          visibility on the table without the vertical weight of inline filters.
        </p>

        <Heading2 id="multi-level-grouping">Multi-level grouping</Heading2>
        <p>
          Grouping lets users bundle rows that share a common value. The table
          organizes data into collapsible sections that make large datasets
          easier to scan.
        </p>
        <p>
          I worked on this experience and extended the pattern to support
          multi-level grouping. Grouping also encompasses aggregates that can be
          turned on for numeric columns to summarize each group.
        </p>
        <p>
          Nested grouping introduces visual complexity, especially on large data
          sets. There's a tension here — the product is built around density,
          but hierarchical views need to use space to effectively communicate
          that hierarchy. Balancing indentation, padding, and font weight while
          maintaining adequate density was key.
        </p>
        <p>
          The design covered the configuration modal as well as the in-table
          experience. The solution had to hold up across the full range of table
          states and account for how grouping interacts with filtering, sorting,
          and the difference between display and editable tables.
        </p>
        <p>
          This is where I leaned heavily into AI rapid prototyping. Using the
          then-new Figma Make I built interactive prototypes, turning static
          designs into stateful, working interfaces. Meta-controls let me
          stress-test the pattern across a wide range of table conditions and
          find gaps that static frames couldn't surface.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white/60 px-5 py-4 text-left transition-colors hover:border-gray-300 hover:bg-white"
        >
          <span>
            <span className="block text-sm font-medium text-gray-900">
              Interactive prototype
            </span>
            <span className="block text-sm text-gray-600">
              Explore the multi-level grouping table in a full-width view.
            </span>
          </span>
          <span className="font-display text-xs uppercase tracking-[0.06em] text-gray-500 transition-colors group-hover:text-gray-900">
            Launch →
          </span>
        </button>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          label="Multi-level grouping prototype"
        >
          <div className="multi-level-grouping-embed">
            <App />
          </div>
        </Dialog>

        <Heading2 id="colour-schemes">Colour schemes</Heading2>
        <p>
          Colour schemes let users apply color to rows based on conditions,
          similar to filter rules. When a row meets a rule, it picks up the
          background and text colors defined for that rule.
        </p>
        <p>
          My work covered the rule-building configuration modal and color picking
          mechanics, with accessibility nudges built in.
        </p>
        <p>
          The configuration surface follows the filter rule-builder shape —
          conditions chained with AND/OR, nested into groups for compound Boolean
          logic. Reusing the filter pattern was deliberate: a second rule-builder
          for essentially the same decision wouldn't have earned anything. The
          harder design calls sat around priority. Multiple rules can match the
          same row, and the design exposes which one wins rather than leaving it
          implicit — a 'Stop if true' control on each rule halts evaluation once
          it matches. Density was the other ongoing call: expert users build many
          rules, so each collapses to a one-line summary by default and expands
          on demand.
        </p>
        <p>
          We deliberately reused the UI of filters for colour schemes because
          they share an underlying logic — users would be immediately capable
          with colour schemes if they were familiar with filters, and vice-versa.
        </p>
        <p>
          Expert users want full control over what colors mean in their tables,
          and the product needs to give it to them. The flip side is that full
          control includes the freedom to choose combinations that have poor
          contrast and certainly don't meet accessibility contrast minimums.
          Striking the right balance meant introducing guardrails in the UI
          itself: sensible defaults that meet AA contrast at minimum,
          non-blocking nudges that make it easy to pick more accessible pairings,
          and subtle warnings when a combination falls short. Users can still
          override and ship inaccessible combinations. The design acknowledges
          that floor without pretending it isn't there.
        </p>

        <Heading2 id="reflections">Reflections</Heading2>
        <p>
          The above projects are just a few snapshots from my time working on
          the data table. I also spent time improving sorting, column reordering,
          drag-and-drop row reordering, bulk actions, and row actions.
        </p>
        <p>If anything here catches your interest, I'd be happy to walk through more.</p>
      </section>
    </article>
  );
}
