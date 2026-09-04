"use server";

import { FieldValue } from "firebase-admin/firestore";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { getAdminDb } from "@/lib/firebase/admin";

const slugify = (value: string) => value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const value = (data: FormData, name: string) => String(data.get(name) ?? "").trim();

export async function createPost(data: FormData) {
  await requireAdmin();
  const title = value(data, "title"); const category = value(data, "category"); const content = value(data, "content");
  if (!title || !content || !["viajes", "skate", "desarrollo"].includes(category)) throw new Error("Completa los campos obligatorios.");
  await getAdminDb().collection("posts").add({ title, slug: slugify(value(data, "slug") || title), excerpt: value(data, "excerpt"), content, translations: { en: { title: value(data, "titleEn"), excerpt: value(data, "excerptEn"), content: value(data, "contentEn") } }, category, coverImage: value(data, "coverImage"), tags: value(data, "tags").split(",").map((tag) => tag.trim()).filter(Boolean), published: data.get("published") === "on", publishedAt: data.get("published") === "on" ? FieldValue.serverTimestamp() : null, createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() });
  revalidatePath("/admin/posts"); revalidatePath("/"); redirect("/admin/posts");
}

export async function createProject(data: FormData) {
  await requireAdmin();
  const title = value(data, "title"); const description = value(data, "description"); const category = value(data, "category");
  if (!title || !description || !["web", "app", "landing", "ecommerce"].includes(category)) throw new Error("Completa los campos obligatorios.");
  await getAdminDb().collection("projects").add({ title, slug: slugify(value(data, "slug") || title), description, translations: { en: { title: value(data, "titleEn"), description: value(data, "descriptionEn") } }, category, technologies: value(data, "technologies").split(",").map((item) => item.trim()).filter(Boolean), demoUrl: value(data, "demoUrl"), coverImage: value(data, "coverImage"), gallery: value(data, "gallery").split("\n").map((item) => item.trim()).filter(Boolean), featured: data.get("featured") === "on", published: data.get("published") === "on", createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() });
  revalidatePath("/admin/projects"); revalidatePath("/"); redirect("/admin/projects");
}

export async function updatePost(data: FormData) {
  await requireAdmin();
  const id = value(data, "id"); const title = value(data, "title"); const category = value(data, "category"); const content = value(data, "content");
  if (!id || !title || !content || !["viajes", "skate", "desarrollo"].includes(category)) throw new Error("Completa los campos obligatorios.");
  const published = data.get("published") === "on";
  await getAdminDb().collection("posts").doc(id).update({ title, slug: slugify(value(data, "slug") || title), excerpt: value(data, "excerpt"), content, category, coverImage: value(data, "coverImage"), tags: value(data, "tags").split(",").map((tag) => tag.trim()).filter(Boolean), published, publishedAt: published ? FieldValue.serverTimestamp() : null, updatedAt: FieldValue.serverTimestamp() });
  revalidatePath("/admin/posts"); revalidatePath("/"); redirect("/admin/posts");
}

export async function deletePost(data: FormData) {
  await requireAdmin(); const id = value(data, "id"); if (!id) throw new Error("Publicación no válida.");
  await getAdminDb().collection("posts").doc(id).delete(); revalidatePath("/admin/posts"); revalidatePath("/"); redirect("/admin/posts");
}

export async function updateProject(data: FormData) {
  await requireAdmin();
  const id = value(data, "id"); const title = value(data, "title"); const description = value(data, "description"); const category = value(data, "category");
  if (!id || !title || !description || !["web", "app", "landing", "ecommerce"].includes(category)) throw new Error("Completa los campos obligatorios.");
  await getAdminDb().collection("projects").doc(id).update({ title, slug: slugify(value(data, "slug") || title), description, category, technologies: value(data, "technologies").split(",").map((item) => item.trim()).filter(Boolean), demoUrl: value(data, "demoUrl"), coverImage: value(data, "coverImage"), gallery: value(data, "gallery").split("\n").map((item) => item.trim()).filter(Boolean), featured: data.get("featured") === "on", published: data.get("published") === "on", updatedAt: FieldValue.serverTimestamp() });
  revalidatePath("/admin/projects"); revalidatePath("/"); redirect("/admin/projects");
}

export async function deleteProject(data: FormData) {
  await requireAdmin(); const id = value(data, "id"); if (!id) throw new Error("Proyecto no válido.");
  await getAdminDb().collection("projects").doc(id).delete(); revalidatePath("/admin/projects"); revalidatePath("/"); redirect("/admin/projects");
}
