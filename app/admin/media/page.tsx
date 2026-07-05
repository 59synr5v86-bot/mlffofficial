const mediaAssets = [
  { name: "Anfield crowd shot", type: "Image", status: "Ready" },
  { name: "Player training reel", type: "Video", status: "Review" },
  { name: "Press conference photo", type: "Image", status: "Approved" },
];

export default function AdminMediaPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-500">Media Library</p>
            <h1 className="mt-3 text-3xl font-black text-white">Media asset center</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              Centralized visuals, video clips, and editorial media for the MLFF newsroom.
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {mediaAssets.map((asset) => (
          <div key={asset.name} className="rounded-[2rem] border border-white/10 bg-zinc-950/95 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.3)]">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">{asset.type}</p>
            <p className="mt-4 text-xl font-black text-white">{asset.name}</p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{asset.status}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
