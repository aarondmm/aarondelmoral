import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteProject, updateProject } from "@/lib/admin-actions";
import { getAdminDb } from "@/lib/firebase/admin";
import { DeleteButton } from "@/components/admin/delete-button";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const snapshot = await getAdminDb().collection("projects").doc(id).get();
  if (!snapshot.exists) notFound();
  const project = snapshot.data()!;
  const english = project.translations?.en;

  return <main><Link href="/admin/projects" className="text-sm font-semibold text-lime-700">← Proyectos</Link><h1 className="mt-5 text-3xl font-bold">Editar proyecto</h1><form action={updateProject} className="mt-8 grid max-w-2xl gap-4 rounded-3xl bg-white p-6"><p className="text-sm font-bold text-lime-700">Español</p><input name="id" value={id} readOnly hidden/><input required name="title" defaultValue={project.title} className="rounded-xl border p-3"/><input name="slug" defaultValue={project.slug} className="rounded-xl border p-3"/><textarea required name="description" defaultValue={project.description} className="min-h-28 rounded-xl border p-3"/><p className="mt-3 text-sm font-bold text-lime-700">English</p><input name="titleEn" defaultValue={english?.title} placeholder="Title" className="rounded-xl border p-3"/><textarea name="descriptionEn" defaultValue={english?.description} placeholder="Description" className="min-h-28 rounded-xl border p-3"/><select name="category" defaultValue={project.category} className="rounded-xl border p-3"><option value="web">Web</option><option value="app">App</option><option value="landing">Landing</option><option value="ecommerce">Ecommerce</option></select><input name="technologies" defaultValue={(project.technologies ?? []).join(", ")} className="rounded-xl border p-3"/><input name="demoUrl" type="url" defaultValue={project.demoUrl} className="rounded-xl border p-3"/><input name="coverImage" type="url" defaultValue={project.coverImage} className="rounded-xl border p-3"/><textarea name="gallery" defaultValue={(project.gallery ?? []).join("\n")} className="min-h-24 rounded-xl border p-3"/><label className="flex gap-2"><input name="featured" type="checkbox" defaultChecked={project.featured}/> Destacar</label><label className="flex gap-2"><input name="published" type="checkbox" defaultChecked={project.published}/> Publicar</label><button className="rounded-xl bg-zinc-950 p-3 font-semibold text-white">Guardar cambios</button></form><form action={deleteProject} className="mt-5"><input name="id" value={id} readOnly hidden/><DeleteButton label="proyecto" /></form></main>;
}
