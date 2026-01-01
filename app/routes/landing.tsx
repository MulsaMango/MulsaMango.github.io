function Avatar() {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-400"
      >
        <path
          d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 20c0-3.866 3.582-7 8-7s8 3.134 8 7v1H4v-1z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Landing() {
  return (
    <main className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar />
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold">Grace Tulsa</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Product & UI designer</p>
            </div>
          </div>

          <h2 className="text-2xl leading-tight">
            Crafting simple, useful interfaces that make people's lives easier.
          </h2>

          <p className="text-gray-700 dark:text-gray-300 max-w-xl">
            I design thoughtful digital products — from rapid prototypes to production-ready
            interfaces. I focus on clarity, accessibility, and delightful micro-interactions.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-block bg-black text-white px-5 py-3 rounded-lg hover:opacity-90"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-block border border-gray-300 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:underline"
            >
              Contact
            </a>
          </div>
        </section>

        <aside className="space-y-8">
          <div id="projects" className="space-y-4">
            <h3 className="text-lg font-semibold">Featured projects</h3>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li
                  key={p.title}
                  className="rounded-xl border p-4 flex items-start gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-tr from-indigo-300 to-pink-300 rounded-lg flex-shrink-0" />
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="contact" className="rounded-xl border p-4">
            <h4 className="font-semibold">Let's work together</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Available for freelance and full-time roles.</p>
            <div className="mt-4">
              <a
                href="mailto:hello@example.com"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Say hello
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

const projects = [
  { title: "Design System", desc: "A scalable component system for multi-product use." },
  { title: "Onboarding Flow", desc: "Reduced time-to-first-success by 35%." },
  { title: "Mobile Commerce", desc: "Improved conversion across checkout flows." },
];
