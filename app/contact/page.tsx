export default function ContactPage() {
  return (
    <div className="flex flex-col gap-6 -mt-6 sm:-mt-10">
      <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
        Let&apos;s collaborate.
      </h1>
      <form className="flex flex-col gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
          Name
          <input
            type="text"
            className="rounded-xl border border-zinc-200 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-400"
            placeholder="Your name"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
          Email
          <input
            type="email"
            className="rounded-xl border border-zinc-200 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-400"
            placeholder="you@email.com"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
          Project details
          <textarea
            rows={4}
            className="rounded-xl border border-zinc-200 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-400"
            placeholder="Share goals, scope, and timelines…"
          />
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-transparent hover:text-black"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
