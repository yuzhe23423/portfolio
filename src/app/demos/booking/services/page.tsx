import { Clock, DollarSign, Eye, Pencil, Plus } from "lucide-react";

const services = [
  {
    name: "Consultation",
    duration: 30,
    price: 80,
    color: "bg-sky-500",
    description: "Quick intro call to scope the work and answer questions.",
    bookings: 32,
  },
  {
    name: "Deep work session",
    duration: 90,
    price: 220,
    color: "bg-violet-500",
    description: "Focused working session with screen-share and pair debugging.",
    bookings: 18,
  },
  {
    name: "Review call",
    duration: 60,
    price: 140,
    color: "bg-emerald-500",
    description: "Code review or design review with a written summary after.",
    bookings: 24,
  },
  {
    name: "Strategy planning",
    duration: 120,
    price: 320,
    color: "bg-rose-500",
    description: "Roadmap and prioritisation workshop for founders and product leads.",
    bookings: 9,
  },
];

export default function ServicesPage() {
  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-700 tracking-tight md:text-4xl">
              Services
            </h1>
            <p className="mt-1 text-muted-foreground">
              The things people can book with you. Tweak duration and price any time.
            </p>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
            <Plus className="h-3.5 w-3.5" /> Add service
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.name}
              className="group rounded-xl border border-border bg-card p-5"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className={`h-3 w-3 rounded-full ${s.color}`} />
                  <h3 className="font-display text-lg font-700">{s.name}</h3>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                  <button
                    aria-label="View"
                    className="rounded-md border border-border bg-background p-1.5 text-muted-foreground hover:text-foreground"
                  >
                    <Eye className="h-3.5 w-3.5" />
                  </button>
                  <button
                    aria-label="Edit"
                    className="rounded-md border border-border bg-background p-1.5 text-muted-foreground hover:text-foreground"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{s.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-3 text-sm">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {s.duration} min
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <DollarSign className="h-3.5 w-3.5" />
                  RM {s.price}
                </span>
                <span className="ml-auto text-xs text-muted-foreground">
                  {s.bookings} booked
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
