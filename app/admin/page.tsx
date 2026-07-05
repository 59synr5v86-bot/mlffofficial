import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full rounded-[2rem] border border-white/10 bg-zinc-900/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.5)] sm:p-10">
          <div className="mb-10 flex items-center justify-between gap-6 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500">Admin Sign In</p>
              <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                MLFF Dashboard Access
              </h1>
            </div>
            <div className="rounded-3xl bg-red-600/10 px-4 py-3 text-xs uppercase tracking-[0.35em] text-red-300 shadow-inner shadow-red-900/20">
              Professional admin hub
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-[0_16px_50px_rgba(0,0,0,0.3)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Secure admin experience</p>
              <p className="text-sm leading-7 text-zinc-300">
                Built for Liverpool reporting teams, transfers editors, and content managers.
                Firebase Authentication and Firestore are ready to connect when you add your credentials.
              </p>
              <div className="grid gap-4 rounded-3xl bg-zinc-900/90 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Fast authoring</p>
                  <p className="mt-2 text-sm text-zinc-300">Draft news, create categories, and manage media without friction.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Fireproof workflows</p>
                  <p className="mt-2 text-sm text-zinc-300">A dark, broadcast-style admin surface tuned for Liverpool editorial teams.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.4)]">
              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="admin@mlff.com"
                    className="w-full rounded-3xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-3xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-3xl bg-red-600 px-5 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700"
                >
                  Sign in
                </button>
              </form>

              <div className="mt-8 border-t border-zinc-800 pt-6 text-sm text-zinc-400">
                <p>
                  Need a live admin console? Connect the form to Firebase Auth using `lib/firebase.ts` and your environment variables.
                </p>
                <p className="mt-3">
                  <Link href="/admin/dashboard" className="font-semibold text-red-400 transition hover:text-red-300">
                    Visit dashboard demo
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
