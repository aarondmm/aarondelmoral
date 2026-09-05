import Link from "next/link";
import { requireAdmin } from "@/lib/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return <main className="min-h-screen bg-zinc-100"><header className="border-b bg-white"><nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5"><Link href="/admin" className="font-bold">AARON. / ADMIN</Link><div className="flex items-center gap-4 text-sm"><Link href="/admin/messages">Mensajes</Link><Link href="/">Ver web ↗</Link></div></nav></header><div className="mx-auto max-w-6xl px-5 py-10">{children}</div></main>;
}
