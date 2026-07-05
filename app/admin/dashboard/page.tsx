import Link from "next/link";

const metrics = [
  { label: "Live stories", value: "18", delta: "+5%" },
  { label: "Content published", value: "452", delta: "+12%" },
  { label: "Drafts waiting", value: "14", delta: "-4%" },
  { label: "Media assets", value: "1.2k", delta: "+18%" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-500">Dashboard Home</p>
            <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Editorial command center</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              View live publishing activity, manage articles and media, and keep the operation aligned with Liverpool’s club rhythm.
            </p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-3xl border border-zinc-800 bg-zinc-900/90 px-5 py-4">
            <span className="rounded-full bg-red-600/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-red-300">
              Live mode
            </span>
            <p className="text-sm text-zinc-300">Ready for editorial updates</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[2rem] border border-white/10 bg-zinc-950/95 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.3)]"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">{metric.label}</p>
              <p className="mt-4 text-4xl font-black text-white">{metric.value}</p>
              <p className="mt-2 text-sm text-red-400">{metric.delta} vs last week</p>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/95 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-red-500">Publishing cadence</p>
              <h2 className="mt-3 text-2xl font-black text-white">Latest content pulse</h2>
            </div>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-zinc-300">
              Updated 5m ago
            </span>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-5">
              <p className="text-sm font-semibold text-white">Liverpool academy review</p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">Schedule the next feature on the youth stars ahead of the weekend fixture.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-5">
              <p className="text-sm font-semibold text-white">Transfer pipeline</p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">Prepare a market update for the afternoon editorial meeting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/95 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-red-500">Article pipeline</p>
              <h2 className="mt-3 text-2xl font-black text-white">Ready to publish</h2>
            </div>
            <Link href="/admin/articles/new" className="inline-flex rounded-full bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700">
              Add new article
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {[
              { title: "European preview: title clash", status: "Draft" },
              { title: "Transfer window rundown", status: "Review" },
              { title: "Inside the Anfield tactics room", status: "Scheduled" },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold text-white">{item.title}</p>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-zinc-300">
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-400">Refine headlines and publish windows for the next campaign touchpoint.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/95 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.3)]">
          <p className="text-sm uppercase tracking-[0.35em] text-red-500">Quick links</p>
          <div className="mt-6 grid gap-4">
            {[
              { label: "Manage categories", href: "/admin/categories" },
              { label: "Browse media", href: "/admin/media" },
              { label: "Open settings", href: "/admin/settings" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/90 px-5 py-4 text-sm font-semibold text-white transition hover:border-red-600 hover:text-red-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
