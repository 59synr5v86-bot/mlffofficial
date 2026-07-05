import Link from "next/link";

const articles = [
  { title: "Liverpool academy stars rise", category: "Liverpool", status: "Published", updated: "2h ago" },
  { title: "Blockbuster transfer race", category: "Transfers", status: "Draft", updated: "1d ago" },
  { title: "World Cup hosts countdown", category: "World Cup", status: "Review", updated: "3d ago" },
];

export default function AdminArticlesPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-500">Articles</p>
            <h1 className="mt-3 text-3xl font-black text-white">Article management</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              Review drafts, update published stories, and keep the newsroom aligned with Liverpool coverage.
            </p>
          </div>
          <Link
            href="/admin/articles/new"
            className="inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700"
          >
            New article
          </Link>
        </div>
      </header>

      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/90 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="grid gap-0 text-sm uppercase tracking-[0.35em] text-zinc-500 sm:grid-cols-[1.8fr_1fr_1fr_1fr] sm:px-8 sm:py-5">
          <span className="px-6 py-4">Title</span>
          <span className="px-6 py-4">Category</span>
          <span className="px-6 py-4">Status</span>
          <span className="px-6 py-4">Updated</span>
        </div>
        <div className="divide-y divide-white/5">
          {articles.map((item) => (
            <div key={item.title} className="grid gap-0 bg-zinc-950 px-6 py-5 sm:grid-cols-[1.8fr_1fr_1fr_1fr]">
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-zinc-400">Strong headline, club context, and page-ready analysis.</p>
              </div>
              <div className="mt-4 sm:mt-0 text-sm text-zinc-300">{item.category}</div>
              <div className="mt-4 sm:mt-0">
                <span className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-zinc-300">
                  {item.status}
                </span>
              </div>
              <div className="mt-4 sm:mt-0 text-sm text-zinc-400">{item.updated}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
