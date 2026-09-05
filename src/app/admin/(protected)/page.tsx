import Link from "next/link";
import { getAdminDb } from "@/lib/firebase/admin";

export default async function AdminPage() {
  const db = getAdminDb();
  const [posts, projects, overview, messages] = await Promise.all([db.collection("posts").get(), db.collection("projects").get(), db.collection("analytics").doc("overview").get(), db.collection("contactMessages").count().get()]);
  const publishedPosts = posts.docs.filter((doc) => doc.data().published).length;
  const publishedProjects = projects.docs.filter((doc) => doc.data().published).length;
  const visits = Number(overview.data()?.totalVisits ?? 0);
  const metrics = [["Visitas", visits, "Visitas públicas registradas"], ["Posts publicados", publishedPosts, `${posts.size} en total`], ["Proyectos publicados", publishedProjects, `${projects.size} en total`], ["Mensajes", messages.data().count, "Contactos recibidos"]];
  return <><p className="text-sm font-bold uppercase tracking-widest text-lime-700">Dashboard</p><h1 className="mt-2 text-4xl font-bold">Gestiona tu contenido.</h1><div className="mt-8 grid gap-4 md:grid-cols-4">{metrics.map(([label, amount, detail]) => <article className="rounded-3xl bg-white p-6" key={String(label)}><p className="text-sm text-zinc-500">{label}</p><p className="mt-3 text-4xl font-bold">{amount}</p><p className="mt-2 text-sm text-zinc-500">{detail}</p></article>)}</div><div className="mt-8 grid gap-4 md:grid-cols-3"><Link href="/admin/posts" className="rounded-3xl bg-white p-7 transition hover:-translate-y-1"><p className="text-2xl font-bold">Publicaciones</p><p className="mt-2 text-zinc-600">Crear, editar y publicar artículos del blog.</p></Link><Link href="/admin/projects" className="rounded-3xl bg-lime-300 p-7 transition hover:-translate-y-1"><p className="text-2xl font-bold">Proyectos</p><p className="mt-2 text-zinc-700">Añadir trabajos y actualizar tu portfolio.</p></Link><Link href="/admin/messages" className="rounded-3xl bg-zinc-950 p-7 text-white transition hover:-translate-y-1"><p className="text-2xl font-bold">Mensajes</p><p className="mt-2 text-zinc-300">Revisa consultas recibidas desde la web.</p></Link></div></>;
}
