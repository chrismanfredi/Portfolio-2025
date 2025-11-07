"use client";

import Image from "next/image";
import Link from "next/link";

const recentProjects = [
  {
    title: "Track My Time",
    description: "PTO scheduling app simplifies time-off management for modern teams. Employees can easily submit vacation, sick, or personal day requests, while managers approve and track them in real time.",
    href: "/works",
    image: "/trackmytime.png",
  },
  {
    title: "Summit Analytics",
    description: "Real-time data dashboard for enterprise insights.",
    href: "/works",
    image: "/globe.svg",
  },
] as const;

const strategyHighlights = [
  { title: "Product Audits", icon: "/file.svg" },
  { title: "Journey Mapping", icon: "/globe.svg" },
  { title: "Content Playbooks", icon: "/file.svg" },
  { title: "Design Sprints", icon: "/window.svg" },
  { title: "Stakeholder Interviews", icon: "/globe.svg" },
  { title: "Roadmap Prioritization", icon: "/window.svg" },
  { title: "Success Metrics", icon: "/file.svg" },
] as const;

export default function HomePage() {
  return (
    <div className="flex h-full flex-col gap-8">
      <div className="grid w-full flex-1 grid-cols-1 gap-6 content-between md:grid-cols-2 md:grid-rows-2 lg:gap-8 lg:[grid-template-columns:minmax(0,1.35fr)_minmax(0,0.95fr)]">
        <div className="group flex h-full min-h-[300px] flex-col justify-between rounded-3xl border border-transparent bg-white p-8 ring-1 ring-black/5 lg:min-h-[360px] lg:p-10">
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-xl font-semibold text-zinc-900">Expert Area&apos;s</h2>
            </div>

            <div className="relative mt-1 h-56 overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50/60 p-3">
              <div
                className="flex flex-col gap-3 hover:[animation-play-state:paused] group-hover:[animation-play-state:paused]"
                style={{ animation: "strategy-scroll 12s linear infinite" }}
              >
                {[...strategyHighlights, ...strategyHighlights].map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white/60 px-3 py-2"
                  >
                    <span className="relative h-10 w-10 overflow-hidden rounded-xl bg-white">
                      <Image
                        src={item.icon}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-contain p-2"
                      />
                    </span>
                    <span className="text-sm font-medium text-zinc-700">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </div>

        <div className="flex h-full min-h-[560px] flex-col justify-between rounded-3xl border border-transparent bg-white p-8 ring-1 ring-black/5 md:row-span-2 lg:min-h-[640px] lg:p-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-zinc-900">Recent Projects</h2>
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
                    <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
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

        <div className="flex h-full min-h-[260px] flex-col justify-between rounded-3xl border border-transparent bg-white p-8 ring-1 ring-black/5 lg:min-h-[320px] lg:p-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-zinc-900">Title 2</h2>
            <p className="text-sm text-zinc-600">Text Text Text</p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Learn More
          </span>
        </div>
      </div>
    </div>
  );
}
