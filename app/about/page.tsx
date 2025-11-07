const educationTimeline = [
  {
    institution: "University Name",
    program: "Bachelor of Science, Design & Development",
    years: "2016 – 2020",
    image: "/file.svg",
  },
  {
    institution: "Design Academy",
    program: "Certificate, Product Strategy",
    years: "2021",
    image: "/window.svg",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">


      <div className="grid gap-8 lg:grid-cols-2">
        <section className="order-2 flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-6 lg:order-1">
 
          <div className="relative pl-6">
            <span className="absolute left-[10px] top-0 h-full w-px bg-zinc-200" />

            <ul className="flex flex-col gap-8">
              {educationTimeline.map((item, index) => (
                <li key={item.institution} className="relative flex gap-4">
                  <span className="absolute left-0 top-2 h-3 w-3 -translate-x-[7px] rounded-full border-2 border-white bg-zinc-900 shadow" />
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50">
                    <img
                      src={item.image}
                      alt={`${item.institution} logo`}
                      className="h-full w-full object-contain p-3"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-zinc-900">{item.institution}</h3>
                    <p className="text-sm font-medium text-zinc-600">{item.program}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                      {item.years}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="order-1 flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 lg:order-2">
    
        </section>
      </div>
    </div>
  );
}
