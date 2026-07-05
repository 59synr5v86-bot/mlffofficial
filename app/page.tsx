export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-red-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <h1 className="text-3xl font-bold text-red-600">
            MLFF
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase">
            <a href="#">Home</a>
            <a href="#">Liverpool</a>
            <a href="#">Transfers</a>
            <a href="#">World Cup</a>
            <a href="#">Legends</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <p className="text-red-500 uppercase tracking-[6px] mb-4">
          Myanmar Liverpool Fan Family
        </p>

        <h2 className="text-6xl font-extrabold">
          MLFF OFFICIAL
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          The Home of Liverpool Fans in Myanmar
        </p>

        <button className="mt-10 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-bold">
          Latest News
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-gray-500">
        © 2026 MLFF Official
      </footer>
    </main>
  );
}