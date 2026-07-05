export default function NewArticlePage() {
  return (
    <div className="space-y-8">
      <header className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-500">Create New Article</p>
            <h1 className="mt-3 text-3xl font-black text-white">Draft the next Liverpool story</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              A modern editor screen with fields prepared for Firestore-powered article publishing.
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="space-y-6">
            <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Headline
            </label>
            <input className="w-full rounded-3xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20" placeholder="Match preview: Anfield advantage" />
          </div>
          <div className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Excerpt
              </label>
              <textarea className="min-h-[160px] w-full rounded-3xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20" placeholder="Lead with crisp transfer insight, club news, or match reaction." />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Category
                </label>
                <select className="mt-3 w-full rounded-3xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20">
                  <option>Liverpool</option>
                  <option>Transfers</option>
                  <option>World Cup</option>
                  <option>Legends</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Status
                </label>
                <select className="mt-3 w-full rounded-3xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20">
                  <option>Draft</option>
                  <option>Review</option>
                  <option>Published</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <p className="text-sm uppercase tracking-[0.35em] text-red-500">Publishing reference</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-5">
              <p className="font-semibold text-white">Audience focus</p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">Target Liverpool fans, transfer insiders, and matchday readers with a clear opening hook.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-5">
              <p className="font-semibold text-white">Style</p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">Professional editorial tone, sharp copy, and structured storytelling aligned with live sports coverage.</p>
            </div>
          </div>
          <button className="mt-8 w-full rounded-3xl bg-red-600 px-5 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700">
            Save draft
          </button>
        </aside>
      </section>
    </div>
  );
}
