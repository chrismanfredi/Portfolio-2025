"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/chrismanfredi",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34A2.65 2.65 0 0 0 5 15.9c-.91-.62.07-.6.07-.6a2.09 2.09 0 0 1 1.52 1 2.13 2.13 0 0 0 2.92.83 2.11 2.11 0 0 1 .63-1.33c-2.22-.25-4.55-1.11-4.55-4.93a3.86 3.86 0 0 1 1-2.68 3.59 3.59 0 0 1 .1-2.64s.84-.27 2.75 1a9.5 9.5 0 0 1 5 0c1.91-1.24 2.75-1 2.75-1a3.59 3.59 0 0 1 .1 2.64 3.86 3.86 0 0 1 1 2.68c0 3.83-2.33 4.68-4.55 4.93a2.36 2.36 0 0 1 .67 1.84v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christopher-manfredi-3a381b205/",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.55v-5.56c0-1.33 0-3.05-1.86-3.05s-2.14 1.45-2.14 2.95v5.66h-3.55V9h3.41v1.56h.05c.48-.9 1.66-1.86 3.42-1.86 3.65 0 4.32 2.4 4.32 5.52v6.23ZM6.55 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM8.33 20.45H4.77V9h3.56v11.45Z"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/chris.manfredi1",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.77c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"
        />
      </svg>
    ),
  },
] as const;

const servicesOffered = [
  { label: "UI/UX Design", icon: "/UIUXDesign.png" },
  { label: "Web Development", icon: "/window.svg" },
  { label: "Mobile App Development", icon: "/globe.svg" },
  { label: "SEO-Friendly Code", icon: "/window.svg" },
  { label: "Resume Design", icon: "/globe.svg" },
  { label: "Social Media Management", icon: "/file.svg" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleMenu = () => setMobileMenuOpen((open) => !open);
  const closeMenu = () => setMobileMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="flex min-h-screen flex-col bg-transparent font-sans">
      <header className="flex justify-center bg-transparent px-6 py-8 sm:px-8">
        <div className="flex w-full max-w-7xl flex-col gap-4 rounded-3xl border-2 border-zinc-200 bg-white px-8 py-5 sm:px-12">
          <div className="flex w-full items-center gap-5">
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              Chris Manfredi
            </span>

            <nav
              className="hidden flex-1 justify-center lg:flex"
              aria-label="Primary navigation"
            >
              <ul className="flex items-center gap-8 text-sm font-medium text-zinc-600">
                {navItems.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      className={`transition-colors hover:text-zinc-900 ${
                        isActive(href) ? "text-zinc-900" : ""
                      }`}
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/contact"
              className="ml-auto hidden items-center rounded-xl bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 md:inline-flex"
            >
              Let's Connect
            </Link>

            <button
              type="button"
              onClick={toggleMenu}
              className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 lg:hidden"
              aria-controls="primary-navigation-mobile"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="flex flex-col items-center justify-between gap-1.5">
                <span className="block h-0.5 w-6 rounded bg-current" />
                <span className="block h-0.5 w-6 rounded bg-current" />
                <span className="block h-0.5 w-6 rounded bg-current" />
              </span>
            </button>
          </div>

          {mobileMenuOpen ? (
            <nav
              id="primary-navigation-mobile"
              className="lg:hidden"
              aria-label="Primary navigation"
            >
              <ul className="flex flex-col gap-3 text-sm font-medium text-zinc-600">
                {navItems.map(({ label, href }) => (
                  <li key={`mobile-${label}`}>
                    <Link
                      className={`block rounded-lg px-3 py-2 transition-colors hover:bg-zinc-100 hover:text-zinc-900 ${
                        isActive(href) ? "text-zinc-900" : ""
                      }`}
                      href={href}
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </header>

      <main className="flex flex-1 justify-center bg-transparent px-6 pb-16 sm:px-8">
        <div className="flex w-full max-w-7xl flex-col gap-10 lg:flex-row">
          {isHome ? (
            <aside className="flex flex-1 flex-col gap-6 rounded-2xl border-2 border-zinc-200 bg-white px-6 py-6 text-left lg:max-w-xs">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl">
                  <Image
                    src="/pic.jpg"
                    alt="Chris Manfredi"
                    fill
                    className="object-cover object-[50%_20%]"
                    sizes="256px"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg text-zinc-900">Chris Manfredi</h2>
                  <p className="text-sm text-zinc-600">
                    Web developer crafting thoughtful digital experiences focused on performance,
                    accessibility, and clean design.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ label, href, icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
                      aria-label={label}
                    >
                      {icon}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  Services Offered
                </p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {servicesOffered.map((service) => (
                    <div
                      key={service.label}
                      className="flex items-center justify-center rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 shadow-sm ring-1 ring-black/5 lg:text-sm lg:normal-case lg:tracking-normal"
                    >
                      {service.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-14 rounded-2xl border-2 border-zinc-100 bg-zinc-50/80 p-5">
                <p className="text-sm text-zinc-900">Sign up for my newsletter</p>
                <p className="mt-1 text-sm text-zinc-600">
                  Get occasional updates on new projects, resources, and behind-the-scenes notes.
                </p>
                <form
                  className="mt-4 flex flex-col gap-3"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-indigo-100 focus:border-zinc-900 focus:ring-2"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          ) : (
            <aside className="flex w-full flex-col items-center gap-5 self-start rounded-2xl border-2 border-zinc-200 bg-white px-8 py-8 text-center sm:px-10 lg:w-72">
              <div className="relative h-32 w-32 overflow-hidden rounded-2xl">
                <Image
                  src="/pic.jpg"
                  alt="Chris Manfredi"
                  fill
                  className="object-cover object-[50%_20%]"
                  sizes="256px"
                  priority
                />
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="text-lg text-zinc-900">
                  Chris Manfredi
                </h2>
                <p className="text-sm text-zinc-600">
                  Web developer crafting thoughtful digital experiences focused on
                  performance, accessibility, and clean design.
                </p>
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
                    aria-label={label}
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </aside>
          )}

          <section
            className={`flex flex-1 flex-col text-zinc-800 ${
              isHome
                ? "items-stretch justify-start gap-8 bg-transparent px-0 py-0 text-left"
                : "items-center justify-center rounded-2xl border-2 border-zinc-200 bg-white px-10 py-16 text-center sm:px-16 sm:py-24 lg:items-start lg:text-left"
            }`}
          >
            {children}
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Chris Manfredi. Crafted with Next.js.
      </footer>
    </div>
  );
}
