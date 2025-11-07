import Image from "next/image";
import Link from "next/link";

const recentProjects = [
  {
    title: "Atlas Creative",
    description: "Brand overhaul and interactive marketing microsite.",
    href: "/works",
    image: "/window.svg",
  },
  {
    title: "Summit Analytics",
    description: "Real-time data dashboard for enterprise insights.",
    href: "/works",
    image: "/globe.svg",
  },
] as const;

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2">
        <div className="flex min-h-[220px] flex-col justify-between rounded-3xl border-2 border-zinc-200 bg-white p-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-zinc-900">Strategy</h2>
            <p className="text-sm text-zinc-600">
              Collaborative discovery sessions to align on goals, scope, and measurable success
              metrics.
            </p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Explore
          </span>
        </div>

        <div className="flex min-h-[460px] flex-col justify-between rounded-3xl border-2 border-zinc-200 bg-white p-6 md:row-span-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-zinc-900">
              Recent Projects
            </h2>
            <div className="grid gap-4">
              {recentProjects.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  className="group rounded-2xl border border-zinc-200 p-3 transition hover:-translate-y-0.5 hover:border-zinc-300"
                >
                  <div className="relative h-44 w-full overflow-hidden rounded-xl bg-zinc-50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain p-6 transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-600">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              View All Work
            </span>
          </div>
        </div>

        <div className="flex min-h-[220px] flex-col justify-between rounded-3xl border-2 border-zinc-200 bg-white p-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-zinc-900">Partnership</h2>
            <p className="text-sm text-zinc-600">
              Ongoing collaboration with product teams to iterate, refine, and support new launches
              with velocity.
            </p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Learn More
          </span>
        </div>
      </div>
    </div>
  );
}
