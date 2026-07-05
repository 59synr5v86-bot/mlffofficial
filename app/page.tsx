export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="border-b border-red-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-3xl font-bold text-red-600">
            MLFF
          </h1>

          <nav className="hidden md:flex gap-8 uppercase text-sm">
            <a href="#">Home</a>
            <a href="#">Liverpool</a>
            <a href="#">Transfers</a>
            <a href="#">World Cup</a>
            <a href="#">Legends</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto py-16 px-6 text-center">
        <p className="text-red-500 uppercase tracking-[6px]">
          Myanmar Liverpool Fan Family
        </p>

        <h2 className="text-6xl font-bold mt-4">
          MLFF OFFICIAL
        </h2>

        <p className="text-gray-400 mt-6 text-xl">
          The Home of Liverpool Fans in Myanmar
        </p>

        <button className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg">
          Latest News
        </button>
      </section>

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">
          Latest News
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <img
              src="https://picsum.photos/600/400?1"
              className="w-full"
            />
            <div className="p-5">
              <h3 className="font-bold text-xl">
                Liverpool Ready For New Season
              </h3>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <img
              src="https://picsum.photos/600/400?2"
              className="w-full"
            />
            <div className="p-5">
              <h3 className="font-bold text-xl">
                World Cup Latest Updates
              </h3>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <img
              src="https://picsum.photos/600/400?3"
              className="w-full"
            />
            <div className="p-5">
              <h3 className="font-bold text-xl">
                Transfer Window News
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-gray-500">
        © 2026 MLFF Official
      </footer>

    </main>
  );
