import Image from "next/image";

type EducationEntry = {
  title: string;
  location: string;
  years: string;
  description: string;
  photo: string;
  major?: string;
};

const educationTimeline: readonly EducationEntry[] = [
  {
    title: "Stonington High School",
    location: "Pawcatuck, CT",
    years: "2009 – 2012",
    description:
      "Stonington High School is a public high school that serves the town of Stonington and surrounding communities.",
    photo: "/shs.jpeg",
  },
  {
    title: "Full Sail University",
    major: "Web Design & Development | Bachelors",
    location: "Winter Park, FL",
    years: "2012 - 2016",
    description:
      "The Bachelors of Science program at Full Sail University gives students the knowledge and skills needed to build, deploy and maintain modern websites and web applications.",
    photo: "/fullsail.jpeg",
  },
] as const;

export default function EducationPage() {
  return (
    <div className="flex w-full flex-col -mt-10 gap-6 sm:-mt-12">


      <div className="grid gap-6">
        <section className="flex flex-col gap-4 p-0">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl font-semibold text-zinc-900">Education Timeline</h2>
          </div>

          <ol className="relative mt-2 space-y-12 border-l-2 border-zinc-100 pl-4">
            {educationTimeline.map((item) => (
              <li
                key={item.title}
                className="relative flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-8"
              >
                <span className="absolute -left-3.5 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-zinc-900">
                  <span className="h-2 w-2 rounded-full bg-zinc-900" />
                </span>

                <article className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4 shadow-sm sm:p-5">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                    <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 sm:gap-3 sm:tracking-[0.3em] lg:justify-start">
                      {item.location ? (
                        <>
                          <span>{item.location}</span>
                          <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:inline-flex" />
                        </>
                      ) : null}
                      <span>{item.years}</span>
                    </div>
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
