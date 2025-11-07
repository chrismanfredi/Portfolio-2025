"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
] as const;

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
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
    href: "https://www.linkedin.com/",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.55v-5.56c0-1.33 0-3.05-1.86-3.05s-2.14 1.45-2.14 2.95v5.66h-3.55V9h3.41v1.56h.05c.48-.9 1.66-1.86 3.42-1.86 3.65 0 4.32 2.4 4.32 5.52v6.23ZM6.55 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM8.33 20.45H4.77V9h3.56v11.45Z"
        />
      </svg>
    ),
  },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMobileMenuOpen((open) => !open);
  const closeMenu = () => setMobileMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
      <header className="flex justify-center bg-transparent px-6 py-8 sm:px-8">
        <div className="flex w-full max-w-6xl flex-col gap-4 rounded-2xl border border-black bg-white px-8 py-5 shadow-sm sm:px-12">
          <div className="flex w-full items-center gap-5">
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              Chris Manfredi
            </span>

            <nav
              className="hidden flex-1 justify-center md:flex"
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

            <button
              type="button"
              onClick={toggleMenu}
              className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 md:hidden"
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
              className="md:hidden"
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

      <main className="flex flex-1 justify-center bg-zinc-50 px-6 pb-16 sm:px-8">
        <div className="flex w-full max-w-6xl flex-col gap-10 lg:flex-row">
          <aside className="flex flex-1 flex-col items-center gap-6 rounded-2xl border border-zinc-200 bg-white px-8 py-10 text-center shadow-sm sm:px-10 lg:max-w-xs lg:text-left">
            <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-zinc-200">
              <Image
                src="/profile.jpg"
                alt="Chris Manfredi"
                fill
                className="object-cover"
                sizes="144px"
                priority
              />
            </div>
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h2 className="text-xl font-semibold text-zinc-900">
                Chris Manfredi
              </h2>
              <p className="text-sm text-zinc-600">
                Web developer crafting thoughtful digital experiences focused on
                performance, accessibility, and clean design.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
                  aria-label={label}
                >
                  {icon}
                </Link>
              ))}
            </div>

            <div className="w-full text-left">
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Services Offered
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-1">
                {[
                  { label: "Product Strategy", icon: "/file.svg" },
                  { label: "UI Engineering", icon: "/window.svg" },
                  { label: "Launch Support", icon: "/globe.svg" },
                  { label: "Launch Support 2", icon: "/globe.svg" },
                  { label: "Launch Support 3", icon: "/globe.svg" },
                  { label: "Launch Support 4", icon: "/globe.svg" },
                ].map((service) => (
                  <div
                    key={service.label}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:flex-row sm:justify-between sm:text-left sm:text-sm sm:normal-case sm:tracking-normal sm:text-zinc-700"
                  >
                    <span className="order-2 w-full sm:order-1 sm:w-auto">
                      {service.label}
                    </span>
                    <span className="order-1 relative h-8 w-8 overflow-hidden rounded-xl bg-zinc-50 sm:order-2">
                      <Image
                        src={service.icon}
                        alt=""
                        fill
                        sizes="32px"
                        className="object-contain p-2"
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-10 py-16 text-center text-zinc-800 shadow-sm sm:px-16 sm:py-24 lg:items-start lg:text-left">
            {children}
          </section>
        </div>
      </main>
    </div>
  );
}
