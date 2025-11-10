const services = [
  {
    title: "Design‑to‑Code Systems",
    description:
      "Translate polished Figma concepts into resilient, component-driven interfaces built with accessibility top of mind.",
  },
  {
    title: "Full-Stack Product Builds",
    description:
      "Deliver end-to-end features encompassing API design, data modeling, and performant front-ends powered by Next.js and TypeScript.",
  },
  {
    title: "Performance & Accessibility Audits",
    description:
      "Review existing products to uncover bottlenecks, ship actionable improvements, and establish sustainable quality benchmarks.",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Services</p>
        <h1 className="text-3xl text-zinc-900 sm:text-4xl">
          Support across the entire product lifecycle.
        </h1>
        <p className="text-zinc-600">
          From rapid experiments to production launches, I partner with teams to provide the
          right blend of strategy, design polish, and engineering rigor.
        </p>
      </div>

      <ul className="flex flex-col gap-6">
        {services.map((service) => (
          <li key={service.title} className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="text-xl text-zinc-900">{service.title}</h2>
            <p className="mt-3 text-zinc-600">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
