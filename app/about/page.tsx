import Image from "next/image";

type EducationEntry = {
  title: string;
  years: string;
  description: string;
  photo: string;
  major?: string;
};

const educationTimeline: readonly EducationEntry[] = [
  {
    title: "Stonington High School",
    years: "2009 – 2012",
    description:
      "Stonington High School is a public high school that serves the town of Stonington and surrounding communities.",
    photo: "/shs.jpeg",
  },
  {
    title: "Full Sail University",
    major: "Web Design & Development | Bachelors",
    years: "2012 - 2016",
    description:
      "Hands-on residency focused on shaping product narratives, rapid prototyping, and testing high-impact ideas with real users.",
    photo: "/fullsail.jpeg",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">


      <div className="grid gap-8">
        <section className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Learning Journey
            </p>
            <h2 className="text-2xl font-semibold text-zinc-900">Education Timeline</h2>
            <p className="text-sm text-zinc-600">
              A quick snapshot of the programs, majors, and experiences that continue to shape my
              craft.
            </p>
          </div>

          <ol className="relative mt-4 space-y-12 border-l-2 border-zinc-100 pl-8">
            {educationTimeline.map((item) => (
              <li
                key={item.title}
                className="relative flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-8"
              >
                <span className="absolute -left-3.5 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-zinc-900">
                  <span className="h-2 w-2 rounded-full bg-zinc-900" />
                </span>

                <article className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-5 shadow-sm">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                      {item.years}
                    </span>
                  </div>
                  {item.major ? (
                    <p className="mt-2 text-sm font-semibold text-indigo-600">{item.major}</p>
                  ) : null}
                  <p className="mt-3 text-sm text-zinc-600">{item.description}</p>
                </article>

                <figure className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-100 shadow-sm lg:col-start-2">
                  <Image
                    src={item.photo}
                    alt={`${item.title} campus`}
                    width={640}
                    height={420}
                    className="h-full w-full object-cover transition duration-500 lg:hover:scale-105"
                  />
                </figure>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
