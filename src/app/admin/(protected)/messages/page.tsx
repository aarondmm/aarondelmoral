import Link from "next/link";
import { getAdminDb } from "@/lib/firebase/admin";

const formatDate = (value: unknown) => value && typeof value === "object" && "toDate" in value ? (value as { toDate(): Date }).toDate().toLocaleString("es-ES", { dateStyle: "medium", timeStyle: "short" }) : "Reciente";

export default async function MessagesPage() {
  const snapshot = await getAdminDb().collection("contactMessages").orderBy("createdAt", "desc").limit(100).get();
  return <main><Link href="/admin" className="text-sm font-semibold text-lime-700">← Dashboard</Link><p className="mt-10 text-sm font-bold uppercase tracking-widest text-lime-700">Contacto</p><h1 className="mt-2 text-4xl font-bold">Mensajes recibidos</h1><p className="mt-3 text-zinc-600">También llegan directamente a tu correo.</p><div className="mt-8 grid gap-4">{snapshot.empty ? <div className="rounded-3xl bg-white p-7 text-zinc-600">Aún no hay mensajes guardados.</div> : snapshot.docs.map((doc) => { const item = doc.data(); return <article key={doc.id} className="rounded-3xl bg-white p-6"><div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="text-xl font-bold">{item.name}</h2><a href={`mailto:${item.email}`} className="text-lime-700 underline">{item.email}</a></div><time className="text-sm text-zinc-500">{formatDate(item.createdAt)}</time></div><p className="mt-5 whitespace-pre-wrap leading-7 text-zinc-700">{item.message}</p></article>; })}</div></main>;
}
