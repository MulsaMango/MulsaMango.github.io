import { useState } from "react";
import { Dialog } from "../../components/Dialog";
import { Image } from "../case-study-image";
import { Heading2 } from "../case-study-typography";
import colourSchemesAutoTextColourSelection from "./images/colour-schemes-accessibility-auto-text-colour-selection.png";
import colourSchemesNonBlockingContrastWarning from "./images/colour-schemes-accessibility-non-blocking-contrast-warning.png";
import colourSchemesRecommendedTextColours from "./images/colour-schemes-accessibility-recommended-text-colours.png";
import colourSchemesModalAnatomy from "./images/colour-schemes-modal-anatomy.png";
import displayTableZebraPatternWithStatusBadges from "./images/display-table-zebra-pattern-with-status-badges.png";
import editableTableInlineEditingWithSelectDropdown from "./images/editable-table-inline-editing-with-select-dropdown.png";
import filterChipStatesAndBehavioursSpec from "./images/filter-chip-states-and-behaviours-spec.png";
import filterChipsAppliedToDisplayTable from "./images/filter-chips-applied-to-display-table.png";
import filterConfigModalAnatomy from "./images/filter-config-modal-anatomy.png";
import App from "./prototype/App";

export function DataTablesCaseStudy() {
  const [open, setOpen] = useState(false);

  return (
    <article className="prose max-w-none">
      <section className="mb-12">
        <p>
          For expert users in WiseTech Global's flagship logistics product, data
          tables are the engine. They sit at the core of nearly every workflow,
          and the logistics professionals using them spend their day inside
          them.
        </p>
        <p>
          These tables are more than a way to display data in rows and columns.
          They organise and shape data; they can also be a jumping-off point.
          They need to be customisable, flexible, and unapologetically dense. A
          common instinct for designers is to try to simplify the complex - but
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
          <li>Colour schemes</li>
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
          Research surfaced a distinction in how users were actually using
          tables across the product. There were two macro types: display tables,
          which surfaced data and acted as a jumping-off point into detail
          views, and editable tables, where data was directly modified inline.
          Visually they were essentially identical. It was unclear to users what
          the behaviour of a table was until they clicked on rows and entered
          either the 'working surface' or 'jumping off' experience.
        </p>
        <p>
          The design needed to make that distinction clear <em>before</em> any
          interaction.
        </p>
        <p>
          <strong>Display tables</strong> cater to exploratory scanning and
          review workflows where the user needs to navigate larger volumes of
          data. A zebra pattern aids in scannability, rows can be double clicked
          to open a more detailed view of the entity represented in the row.
        </p>
        <Image
          src={displayTableZebraPatternWithStatusBadges}
          alt="A display table showing logistics data with alternating row shading for scannability. Columns include company, contact, description, address, status, date, and distance. Status column uses colour-coded badge labels including Critical, Status, Warning, and Information. One row is highlighted in blue indicating selection."
          caption="Display table - a jumping off point."
          lightbox
        />
        <p>
          <strong>Editable tables</strong> took on a more grid-like
          presentation, similar to a spreadsheet. A deliberate hover treatment
          marks the cell under the cursor, a row-level hover supports
          navigation, and the cells themselves mirror the design system's
          standard field patterns. It's immediately clear that cells can be
          edited inline. A date cell opens a calendar popover, and a select cell
          expands into its options.
        </p>
        <Image
          src={editableTableInlineEditingWithSelectDropdown}
          alt="An editable table in grid layout showing logistics company data with inline editing active. A contact cell in the UKco row is being edited, with a dropdown showing options including Troy McClure, Jean Parker, Nathan Palmer, and Jodie Mitchell. The active cell has a distinct cursor and border treatment to signal editability."
          caption="Editable table - a working surface."
          lightbox
        />

        <Heading2 id="filters">Filters</Heading2>
        <p>
          Filtering is how expert users navigate dense data sets. Quick filters
          and a search bar don't go far enough - expert users need more granular
          control.
        </p>
        <p>
          My work here was a UI uplift across the existing filter model. That
          included the filter-building experience, creating filter groups,
          reordering filter strips, and a full rework of saved filter management
          - the task flows around saving filters and resurfacing them when
          needed, for both individual users and organisation-wide publishing.
        </p>
        <p>
          Throughout the work I drew on the broader data table research effort,
          ran multiple design critiques with embedded designers across the
          organisation, and had a regular touch point with the e-learning
          specialist responsible for data table material for end-users.
        </p>
        <Image
          src={filterConfigModalAnatomy}
          alt="Annotated anatomy diagram of the filter configuration modal, with callouts labeling each UI component: drag handle, sequence indicator, and/or operator, filter group name with expand/collapse, filter group, and action buttons including Apply, Reset, and Clear values. A filter strip anatomy is shown to the right."
          caption="Filter configuration technical spec  - excerpt from Figma."
          lightbox
        />
        <p>
          This work was closely linked with the design of the filter chip
          pattern - a compact way to present applied filters on top of the
          table. In an earlier version of the product, filters appeared
          alongside the data so users could see both at once. The web version
          moved filters into a dedicated modal, which degraded that visibility.
          Chips restored visibility on the table without the vertical weight of
          inline filters.
        </p>
        <Image
          src={filterChipsAppliedToDisplayTable}
          alt="A display table with six active filter chips shown in a strip above the data. The chips summarise each applied rule — including text exclusion, numeric threshold, date range, recency, status, and a saved filter set — and each has an individual remove control. The table beneath shows filtered logistics delivery records with columns for company, delivery date, description, dangerous goods, and code."
          caption="Filter chips in situ."
          lightbox
        />
        <Image
          src={filterChipStatesAndBehavioursSpec}
          alt="Design specification sheet for filter chips, showing four scenarios: AND vs OR operator behaviour in the chip strip, quick-add filter popover triggered from the strip's plus button, wrap behaviour when chips overflow to a second line, and mixed applied-plus-default versus all-default chip strip states."
          caption="Filter chip states and behaviours  - excerpt from Figma."
          lightbox
        />

        <Heading2 id="multi-level-grouping">Multi-level grouping</Heading2>
        <p>
          Grouping lets users bundle rows that share a common value. The table
          organises data into collapsible sections that make large datasets
          easier to scan.
        </p>
        <p>
          I worked on this experience and extended the pattern to support
          multi-level grouping. Grouping also encompasses aggregates that can be
          turned on for numeric columns to summarise each group.
        </p>
        <p>
          Nested grouping introduces visual complexity, especially on large data
          sets. There's a tension here - the product is built around density,
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

        <div className="border border-gray-200 bg-white/60 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="block text-sm font-medium text-gray-900">
                Interactive prototype
              </span>
              <span className="mt-0.5 block text-sm text-gray-600 lg:hidden">
                This tool is built for a wider screen. Here's a quick tour of
                grouping depth, expand/collapse views, record density, zebra
                rows, and group labels.
              </span>
              <span className="mt-0.5 hidden text-sm text-gray-600 lg:block">
                Explore the multi-level grouping table in a full-width view.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="hidden shrink-0 cursor-pointer rounded border border-gray-200 bg-white px-3 py-1.5 font-display text-xs uppercase tracking-[0.06em] text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-900 lg:block"
            >
              Try it out →
            </button>
          </div>

          <div className="not-prose mt-4 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
            <video
              className="block w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/multi-level-grouping-demo.mp4" type="video/mp4" />
            </video>
          </div>

          <span className="mt-3 block font-display text-xs uppercase tracking-[0.06em] text-gray-500 lg:hidden">
            Demo · best explored on desktop
          </span>

          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            label="Multi-level grouping prototype"
          >
            <div className="not-prose data-tables-embed">{open && <App />}</div>
          </Dialog>
        </div>

        <Heading2 id="colour-schemes">Colour schemes</Heading2>
        <p>
          Colour schemes let users apply colour to rows based on conditions,
          similar to filter rules. When a row meets a rule, it picks up the
          background and text colours defined for that rule.
        </p>
        <p>
          My work covered the rule-building configuration modal and colour
          picking mechanics, with accessibility nudges built in.
        </p>
        <p>
          The configuration surface follows the filter rule-builder shape -
          conditions chained with AND/OR, nested into groups for compound
          Boolean logic. Reusing the filter pattern was deliberate: a second
          rule-builder for essentially the same decision wouldn't have earned
          anything. The harder design calls sat around priority. Multiple rules
          can match the same row, and the design exposes which one wins rather
          than leaving it implicit - a 'Stop if true' control on each rule halts
          evaluation once it matches. Density was the other ongoing call: expert
          users build many rules, so each collapses to a one-line summary by
          default and expands on demand.
        </p>
        <p>
          We deliberately reused the UI of filters for colour schemes because
          they share an underlying logic - users would be immediately capable
          with colour schemes if they were familiar with filters, and
          vice-versa.
        </p>
        <Image
          src={colourSchemesModalAnatomy}
          alt="Annotated anatomy diagram of the colour schemes configuration modal, with callouts labeling each UI component: drag handle, color rule name with expand/collapse, color pairing preview, sequence indicator, and/or operator, add condition strip, add nested group within color rule, add new color rule, closes modal, stop if true toggle, and action buttons including Apply, Reset, and Clear values. A collapsed color rule summary view is shown to the right."
          caption="Colour schemes modal technical spec - excerpt from Figma."
          lightbox
        />
        <p>
          Expert users want full control over what colours mean in their tables,
          and the product needs to give it to them. The flip side is that full
          control includes the freedom to choose combinations that have poor
          contrast and certainly don't meet accessibility contrast minimums.
          Striking the right balance meant introducing guardrails in the UI
          itself: sensible defaults that meet AA contrast at minimum,
          non-blocking nudges that make it easy to pick more accessible
          pairings, and subtle warnings when a combination falls short. Users
          can still override and ship inaccessible combinations. The design
          acknowledges that floor without pretending it isn't there.
        </p>
        <div className="not-prose mb-10">
          <aside className="mb-3 w-full md:w-3/4 mx-auto rounded border border-gray-200 bg-gray-50 px-5 py-4 shadow-[0_1px_3px_0_rgb(0,0,0,0.04)]">
            <p className="text-sm leading-relaxed text-gray-700">
              Picking a background fills the text colour in automatically,
              defaulting to a high-contrast (min AA) pairing, usually black or
              white. Accessibility becomes the path of least effort: text colour
              stops being a required step and turns into an optional override.
            </p>
          </aside>
          <Image
            src={colourSchemesAutoTextColourSelection}
            alt="Colour schemes modal with the background colour picker open showing a palette of default colours. The text colour field has been automatically filled with black to ensure contrast."
            className="w-full md:w-3/4 h-auto mx-auto"
            lightbox
            noBorder
          />
        </div>
        <div className="not-prose mb-10">
          <aside className="mb-3 w-full md:w-3/4 mx-auto rounded border border-gray-200 bg-gray-50 px-5 py-4 shadow-[0_1px_3px_0_rgb(0,0,0,0.04)]">
            <p className="text-sm leading-relaxed text-gray-700">
              If users attempt to override the automatic text colour, they're
              steered toward recommended and quick to apply text colours. The
              recommended set is based on the colour selection and typically
              includes true black or white, plus one or two variants for range
              and variety.
            </p>
          </aside>
          <Image
            src={colourSchemesRecommendedTextColours}
            alt="Colour schemes modal with the text colour picker open, showing a Recommended text colors section with black and purple swatches. A tooltip reads: Recommended text colors are easy to read on your chosen background color."
            className="w-full md:w-3/4 h-auto mx-auto"
            lightbox
            noBorder
          />
        </div>
        <div className="not-prose">
          <aside className="mb-3 w-full md:w-3/4 mx-auto rounded border border-gray-200 bg-gray-50 px-5 py-4 shadow-[0_1px_3px_0_rgb(0,0,0,0.04)]">
            <p className="text-sm leading-relaxed text-gray-700">
              If the user proceeds with a pairing below AA contrast, an inline
              warning appears within the modal. A tooltip on hover provides
              additional information and a path forward. The pairing remains
              available to apply, the system informs rather than blocks.
            </p>
          </aside>
          <Image
            src={colourSchemesNonBlockingContrastWarning}
            alt="Colour schemes modal showing a low contrast pairing of light purple background and grey text. A tooltip warns: This combination has low contrast making it harder to read. An inline warning reads: This color combination may be hard to read."
            className="w-full md:w-3/4 h-auto mx-auto"
            lightbox
            noBorder
          />
        </div>

        <Heading2 id="reflections">Reflections</Heading2>
        <p>
          The above projects are just a few snapshots from my time working on
          the data table. I also spent time improving sorting, column
          reordering, drag-and-drop row reordering, bulk actions, and row
          actions.
        </p>
      </section>
    </article>
  );
}
