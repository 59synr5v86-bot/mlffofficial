import type { Metadata } from "next";
import Sidebar from "./Sidebar";
import "../globals.css";

export const metadata: Metadata = {
  title: "MLFF Admin Dashboard",
  description: "Professional admin dashboard for MLFF with a responsive dark interface.",
};

export default function AdminShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <Sidebar />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="space-y-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
