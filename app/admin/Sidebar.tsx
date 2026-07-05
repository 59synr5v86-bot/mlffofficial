"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Articles", href: "/admin/articles" },
  { label: "New Article", href: "/admin/articles/new" },
  { label: "Categories", href: "/admin/categories" },
  { label: "Media Library", href: "/admin/media" },
  { label: "Users", href: "/admin/users" },
  { label: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-80 shrink-0 border-r border-white/5 bg-zinc-950/95 p-6 backdrop-blur-xl lg:block">
      <div className="flex items-center gap-3 rounded-3xl border border-white/5 bg-zinc-900/90 p-5 shadow-[0_25px_90px_rgba(0,0,0,0.35)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-red-600/10 text-red-300 ring-1 ring-red-600/15">
          ML
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">Admin</p>
          <p className="text-base font-semibold text-white">MLFF Control</p>
        </div>
      </div>

      <div className="mt-10 space-y-2">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-zinc-500">Navigation</p>
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-3xl px-4 py-4 text-sm font-semibold transition ${
                isActive
                  ? "bg-red-600/15 text-red-300 shadow-[0_10px_35px_rgba(200,16,46,0.18)]"
                  : "text-zinc-300 hover:bg-white/5 hover:text-red-400"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-white/5 bg-zinc-900/90 p-5 text-sm leading-6 text-zinc-400">
        <p className="font-semibold text-white">Liverpool style</p>
        <p className="mt-3 text-sm text-zinc-400">
          Dark theme interface with red accents ready for editorial teams and production workflows.
        </p>
      </div>
    </aside>
  );
}
