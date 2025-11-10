"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { useState } from "react";

const recentProjects = [
  {
    title: "Track My Time",
    description: "PTO scheduling app simplifies time-off management for modern teams. Employees can easily submit vacation, sick, or personal day requests, while managers approve and track them in real time.",
    href: "/portfolio",
    image: "/trackmytime.png",
  },
  {
    title: "Paradise Park FD",
    description: "The Paradise Park Fire Department is a dedicated volunteer team serving the community with safety, emergency response, and local outreach events.",
    href: "/portfolio",
    image: "/ParadiseParkFD.png",
  },
] as const;

const vaseline = localFont({
  src: "../public/Vaseline.ttf",
});

const strategyHighlights = [
  { title: "VS Code", icon: "/vscode.jpeg" },
  { title: "Terminal", icon: "/terminal.png" },
  { title: "Bootstrap", icon: "/github.png" },
  { title: "Next.JS", icon: "/nextjs.png" },
  { title: "Supabase", icon: "/supabase.png" },
  { title: "Tailwind CSS", icon: "/tailwind.png" },
  { title: "Github", icon: "/github.png" },
  { title: "Vercel", icon: "/vercel.png" },
  { title: "Slack", icon: "/slack.png" },
  { title: "Adobe Photoshop", icon: "/photoshop.png" },
  { title: "Adobe Illustrator", icon: "/illustrator.png" },
] as const;

export default function HomePage() {
  const [isStrategyPaused, setIsStrategyPaused] = useState(false);

  return (
    <div className="flex h-full flex-col gap-8">
      <div className="grid w-full flex-1 grid-cols-1 gap-6 content-between md:grid-cols-2 md:grid-rows-2 lg:gap-8 lg:[grid-template-columns:minmax(0,1.35fr)_minmax(0,0.95fr)]">
        <div className="group flex flex-col justify-between rounded-3xl border border-transparent bg-white p-5 ring-1 ring-black/5 lg:p-7">
          <div className="flex flex-col gap-3">
            <div>
              <h2 className={`${vaseline.className} text-3xl`}>Tools</h2>
            </div>

            <div
              className="relative mt-4 h-[26rem] overflow-hidden rounded-2xl border border-zinc-100 bg-white/80 p-3 shadow-inner"
              onMouseEnter={() => setIsStrategyPaused(true)}
              onMouseLeave={() => setIsStrategyPaused(false)}
            >
              <div
                className="flex flex-col gap-3 pt-3"
                style={{
                  animation: "strategy-scroll 20s linear infinite",
                  animationPlayState: isStrategyPaused ? "paused" : "running",
                }}
              >
                {[...strategyHighlights, ...strategyHighlights].map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="flex items-center gap-3 rounded-2xl bg-white/60 px-3 py-2"
                  >
                    <span className="relative h-12 w-12 overflow-hidden rounded-xl bg-white">
                      <Image
                        src={item.icon}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-contain p-2"
                      />
                    </span>
                    <span className="text-base font-medium text-zinc-700">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </div>

        <div className="flex h-full min-h-[320px] flex-col justify-between rounded-3xl border border-transparent bg-white p-8 ring-1 ring-black/5 md:row-span-2 lg:min-h-[380px] lg:p-10">
          <div className="flex flex-col gap-4">
            <h2 className={`${vaseline.className} text-3xl`}>Recent Projects</h2>
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

          <div className="hidden md:block mt-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              View Portfolio
            </span>
          </div>
        </div>

        <div className="flex h-full min-h-[140px] flex-col gap-5 rounded-3xl border-2 border-zinc-200 bg-white p-6 lg:min-h-[180px] lg:p-8">
          <div className="flex flex-col gap-2">
            <h2 className={`${vaseline.className} text-3xl`}>Skills</h2>
          </div>
          <div className="flex flex-col gap-6 lg:mx-auto lg:mt-4 lg:w-4/5 lg:justify-center">
            {[
              { label: "HTML", value: 90, color: "bg-indigo-500" },
              { label: "CSS | Tailwind CSS", value: 85, color: "bg-indigo-500" },
              { label: "React | Next.js", value: 80, color: "bg-indigo-500" },
              { label: "GitHib", value: 85, color: "bg-indigo-500" },
              { label: "Responsive Design", value: 90, color: "bg-indigo-500" },
              { label: "Graphic Design", value: 85, color: "bg-indigo-500" },
            ].map((bar) => (
              <div key={bar.label} className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-lg font-semibold text-zinc-800">
                  <span>{bar.label}</span>
                  <span>{bar.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-100">
                  <div
                    className={`h-full rounded-full ${bar.color}`}
                    style={{ width: `${bar.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
