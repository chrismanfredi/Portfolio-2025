import Image from "next/image";

const portfolioItems = [
  {
    title: "Track My Time",
    description:
      "PTO and vacation scheduling experience that lets teams plan time off collaboratively with real-time approvals.",
    image: "/trackmytime.png",
  },
  {
    title: "Slice Station",
    description:
      "Responsive microsite for a neighborhood pizza spot featuring interactive menus, deals, and online ordering states.",
    image: "/slice-station.png",
  },
  {
    title: "Atlas Creative",
    description:
      "Brand refresh and marketing site built on a modular content system so campaigns can launch in hours, not weeks.",
    image: "/nextjs.png",
  },
  {
    title: "Northwind Labs",
    description:
      "Interactive prototype library that evolved into a production design system for a data tooling startup.",
    image: "/tailwind.png",
  },
  {
    title: "Summit Analytics",
    description:
      "Executive dashboard with live telemetry, custom alerts, and a fully accessible component toolkit.",
    image: "/supabase.png",
  },
  {
    title: "Vercel Launchpad",
    description:
      "High-performance landing page optimized for conversions, complete with a/b tested hero blocks and pricing cards.",
    image: "/vercel.png",
  },
] as const;

export default function PortfolioPage() {
  return (
    <div className="flex flex-col gap-10 -mt-6 sm:-mt-10">
      <header className="flex flex-col gap-3 text-center lg:text-left">
        <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
          Modern builds for ambitious teams.
        </h1>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.map((item) => (
          <article
            key={item.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-48 w-full overflow-hidden bg-zinc-50">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-contain p-6 transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
              <h2 className="text-xl font-semibold text-zinc-900">{item.title}</h2>
              <p className="text-sm text-zinc-600">{item.description}</p>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900">
                  View Case Study
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4 transition group-hover:translate-x-1"
                  >
                    <path
                      d="M6 12h12m0 0-4-4m4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
