const projects = [
  {
    name: "Atlas Creative",
    role: "Lead Frontend",
    description:
      "Rebuilt the marketing site with a headless CMS and modular design system, cutting launch timelines in half.",
    year: "2024",
  },
  {
    name: "Summit Analytics",
    role: "Product Engineer",
    description:
      "Delivered a dashboard experience with real-time data streaming and custom accessibility tooling.",
    year: "2023",
  },
  {
    name: "Northwind Labs",
    role: "UX Engineer",
    description:
      "Partnered with design to craft interactive prototypes that evolved directly into production-ready components.",
    year: "2022",
  },
] as const;

export default function WorksPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Selected Work</p>
        <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
          Highlights from recent collaborations.
        </h1>
        <p className="text-zinc-600">
          A snapshot of engagements spanning design systems, product launches, and technical
          consulting.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-zinc-200 p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-zinc-400">
              <span>{project.role}</span>
              <span className="h-1 w-1 rounded-full bg-zinc-300" />
              <span>{project.year}</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-900">
              {project.name}
            </h2>
            <p className="mt-3 text-zinc-600">{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
