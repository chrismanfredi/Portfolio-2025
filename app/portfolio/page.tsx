import Image from "next/image";

const portfolioItems = [
  {
    title: "Track My Time",
    description:
      "PTO and vacation scheduling experience that lets teams plan time off collaboratively with real-time approvals.",
    href: "https://track-my-time-v2.vercel.app/",
    image: "/trackmytime.png",
  },
  {
    title: "Slice Station",
    description:
      "Responsive microsite for a neighborhood pizza spot featuring interactive menus, deals, and online ordering states.",
    href: "https://slice-station.vercel.app/",
    image: "/slice-station.png",
  },
  {
    title: "Paradise Park Fire Department",
    description:
      "The Paradise Park Fire Department is a dedicated volunteer team serving the community with safety, emergency response, and local outreach events.",
    href: "https://paradise-park-fd.vercel.app/",
    image: "/ParadiseParkFD.png",
  },
] as const;

export default function PortfolioPage() {
  return (
    <div className="flex flex-col gap-10 -mt-6 sm:-mt-10">
      <header className="flex flex-col gap-3 text-center lg:text-left">
        <h1 className="text-3xl text-zinc-900 sm:text-4xl">
          Portfolio
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
              <h2 className="text-xl text-zinc-900">{item.title}</h2>
              <p className="text-sm text-zinc-600">{item.description}</p>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900">
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
