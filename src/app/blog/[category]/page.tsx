import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabels, posts } from "@/lib/content";
import type { BlogCategory } from "@/types/content";

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!(category in categoryLabels)) notFound();
  const selected = posts.filter((post) => post.category === category);
  return <main className="mx-auto min-h-screen max-w-4xl px-5 py-28 md:px-8"><Link href="/" className="text-sm font-semibold text-lime-700">← Volver a inicio</Link><p className="mt-12 text-sm font-bold uppercase tracking-[.2em] text-lime-700">Diario</p><h1 className="mt-3 text-5xl font-bold tracking-tight">{categoryLabels[category as BlogCategory]}</h1><div className="mt-12 grid gap-4">{selected.map((post) => <Link href={`/blog/${post.category}/${post.slug}`} key={post.id} className="rounded-3xl bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"><p className="text-sm text-zinc-500">{new Date(post.publishedAt).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</p><h2 className="mt-3 text-2xl font-bold">{post.title}</h2><p className="mt-2 text-zinc-600">{post.excerpt}</p><div className="mt-5 flex gap-2">{post.tags.map((tag) => <span className="rounded-full bg-lime-100 px-2 py-1 text-xs" key={tag}>#{tag}</span>)}</div></Link>)}</div></main>;
}
