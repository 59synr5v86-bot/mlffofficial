const categories = [
  { title: "Liverpool", count: 28 },
  { title: "Transfers", count: 17 },
  { title: "World Cup", count: 12 },
  { title: "Legends", count: 9 },
];

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-500">Categories</p>
            <h1 className="mt-3 text-3xl font-black text-white">Editorial categories</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              Manage topic sections, publish filters, and content categories for Liverpool coverage.
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <div key={category.title} className="rounded-[2rem] border border-white/10 bg-zinc-950/95 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.3)]">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">{category.title}</p>
            <p className="mt-4 text-4xl font-black text-white">{category.count}</p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">Active stories in this category</p>
          </div>
        ))}
      </section>
    </div>
  );
}
