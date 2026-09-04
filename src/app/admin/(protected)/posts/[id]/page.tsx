import Link from "next/link";
import { notFound } from "next/navigation";
import { deletePost, updatePost } from "@/lib/admin-actions";
import { getAdminDb } from "@/lib/firebase/admin";
import { DeleteButton } from "@/components/admin/delete-button";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const snapshot = await getAdminDb().collection("posts").doc(id).get();
  if (!snapshot.exists) notFound();
  const post = snapshot.data()!;
  const english = post.translations?.en;

  return <main><Link href="/admin/posts" className="text-sm font-semibold text-lime-700">← Publicaciones</Link><h1 className="mt-5 text-3xl font-bold">Editar publicación</h1><form action={updatePost} className="mt-8 grid max-w-2xl gap-4 rounded-3xl bg-white p-6"><p className="text-sm font-bold text-lime-700">Español</p><input name="id" value={id} readOnly hidden/><input required name="title" defaultValue={post.title} className="rounded-xl border p-3"/><input name="slug" defaultValue={post.slug} className="rounded-xl border p-3"/><select name="category" defaultValue={post.category} className="rounded-xl border p-3"><option value="desarrollo">Desarrollo</option><option value="viajes">Viajes</option><option value="skate">Skate</option></select><textarea name="excerpt" defaultValue={post.excerpt} className="min-h-24 rounded-xl border p-3"/><textarea required name="content" defaultValue={post.content} className="min-h-56 rounded-xl border p-3"/><p className="mt-3 text-sm font-bold text-lime-700">English</p><input name="titleEn" defaultValue={english?.title} placeholder="Title" className="rounded-xl border p-3"/><textarea name="excerptEn" defaultValue={english?.excerpt} placeholder="Excerpt" className="min-h-24 rounded-xl border p-3"/><textarea name="contentEn" defaultValue={english?.content} placeholder="Content" className="min-h-56 rounded-xl border p-3"/><input name="coverImage" type="url" defaultValue={post.coverImage} className="rounded-xl border p-3"/><input name="tags" defaultValue={(post.tags ?? []).join(", ")} className="rounded-xl border p-3"/><label className="flex gap-2"><input name="published" type="checkbox" defaultChecked={post.published}/> Publicada</label><button className="rounded-xl bg-zinc-950 p-3 font-semibold text-white">Guardar cambios</button></form><form action={deletePost} className="mt-5"><input name="id" value={id} readOnly hidden/><DeleteButton label="publicación" /></form></main>;
}
