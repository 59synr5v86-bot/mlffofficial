export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-500">Settings</p>
            <h1 className="mt-3 text-3xl font-black text-white">Platform settings</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              Configure admin access, editorial preferences, and Firebase integration settings.
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/95 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">Authentication</p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Prepare the project for Firebase Authentication by creating a `lib/firebase.ts` file and adding your Firebase config.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">Firestore</p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Configure Firestore collections for articles, categories, media, and admin users once your project is ready.
              </p>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-zinc-950/95 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <p className="text-sm uppercase tracking-[0.35em] text-red-500">Integration notes</p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-400">
            <p>Firebase Auth: use email/password sign-in to control admin access.</p>
            <p>Firestore: store articles under `/articles`, categories under `/categories`, and assets under `/media`.</p>
            <p>Next step: add `NEXT_PUBLIC_FIREBASE_API_KEY` and related env vars for secure deployment.</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
