import type { Project } from "../data/projects";

interface IconsCaseStudyProps {
  project: Project;
}

export function IconsCaseStudy({ project }: IconsCaseStudyProps) {
  return (
    <article className="prose max-w-none">
      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This project involved redesigning the icon system for a design system, focusing on
          consistency, scalability, and improved visual communication. The goal was to create
          a comprehensive icon library that could support the growing needs of the product
          while maintaining clarity and accessibility.
        </p>
      </section>

      {/* Image Section */}
      <figure className="w-full mb-12 -mx-6 md:-mx-12">
        <img
          src="/images/icons-overview.jpg"
          alt="Icons overview"
          className="w-full rounded-lg"
        />
        <figcaption className="text-sm text-gray-500 mt-2 text-center">
          Overview of the icon redesign process
        </figcaption>
      </figure>

      {/* Problem Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
          Problem
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The existing icon system had several issues: inconsistent stroke weights, varying
          sizes, and lack of a cohesive visual language. This led to confusion for designers
          and developers when selecting appropriate icons for different contexts.
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
        <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
          Process
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We started by auditing all existing icons and identifying common patterns. Then we
          established design principles and created a new icon system based on a consistent
          grid and stroke weight.
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Research</h3>
            <p className="text-gray-700 leading-relaxed">
              Conducted a comprehensive audit of existing icons, analyzed competitor
              icon systems, and gathered feedback from designers and developers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Design</h3>
            <p className="text-gray-700 leading-relaxed">
              Created a unified design system with consistent stroke weights, grid-based
              layouts, and clear guidelines for sizing and usage.
            </p>
          </div>
        </div>

        {/* Image showing process */}
        <figure className="w-full mb-8">
          <img
            src="/images/icons-process.jpg"
            alt="Icon design process"
            className="w-full rounded-lg"
          />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Design process and iterations
          </figcaption>
        </figure>
      </section>

      {/* Solution Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
          Solution
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We created a new icon system with the following key improvements:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-6">
          <li>Unified stroke weight of 1.5px for consistency</li>
          <li>24px base grid system for easy scaling</li>
          <li>Comprehensive icon library covering 200+ icons</li>
          <li>Clear documentation and usage guidelines</li>
          <li>Improved accessibility with better contrast and sizing</li>
        </ul>

        {/* Video placeholder - you can add actual video later */}
        <div className="w-full aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center">
          <p className="text-gray-500">Video demo of icon system</p>
        </div>
      </section>

      {/* Results Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
          Results
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The new icon system has significantly improved consistency across the product and
          reduced design and development time. Designers can now easily find and use appropriate
          icons, while developers have clear guidelines for implementation.
        </p>
        
        {/* Quote */}
        <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-gray-700">
          <p className="text-lg mb-2">
            "The new icon system has made our design process so much more efficient. We spend
            less time searching for icons and more time building great experiences."
          </p>
          <cite className="text-sm text-gray-500 not-italic">— Design Team Lead</cite>
        </blockquote>
      </section>

      {/* Divider */}
      <hr className="my-12 border-gray-200" />

      {/* Conclusion */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
          Conclusion
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This project demonstrated the importance of systematic thinking in design. By
          establishing clear principles and guidelines, we created a scalable icon system
          that will continue to serve the product as it grows.
        </p>
      </section>
    </article>
  );
}
