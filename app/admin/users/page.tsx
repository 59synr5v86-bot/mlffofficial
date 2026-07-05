export default function AdminUsersPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-500">Users</p>
            <h1 className="mt-3 text-3xl font-black text-white">Admin user management</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              Review admin access, manage editorial accounts, and prepare authentication workflows for Firebase.
            </p>
          </div>
        </div>
      </header>

      <section className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {[
            { label: "Admin users", value: "8" },
            { label: "Pending invites", value: "2" },
            { label: "Active sessions", value: "4" },
          ].map((item) => (
            <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-zinc-900/90 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">{item.label}</p>
              <p className="mt-4 text-3xl font-black text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6">
            <p className="font-semibold text-white">Role control</p>
            <p className="mt-2 text-sm leading-7 text-zinc-400">Assign editor, publisher, or admin roles when Firebase auth is connected.</p>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6">
            <p className="font-semibold text-white">Security</p>
            <p className="mt-2 text-sm leading-7 text-zinc-400">Review account safety and session management in a secure dashboard layout.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
