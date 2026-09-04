import Link from "next/link";
import { notFound } from "next/navigation";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { getPublishedPosts } from "@/lib/public-content";

export default async function EnglishPostPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const post = (await getPublishedPosts()).find((item) => item.category === category && item.slug === slug);
  if (!post) notFound();
  const copy = post.translations?.en;
  const content = copy?.content || post.content;
  const minutes = Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
  return <><ReadingProgress/><article className="mx-auto min-h-screen max-w-3xl px-5 py-28 md:px-8"><Link href="/en/blog" className="text-sm font-semibold text-lime-700">← Back to journal</Link><p className="mt-12 text-sm font-bold uppercase tracking-[.2em] text-lime-700">{post.category}</p><h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">{copy?.title || post.title}</h1><p className="mt-6 text-xl leading-8 text-zinc-600">{copy?.excerpt || post.excerpt}</p><div className="mt-7 flex flex-wrap gap-3 text-sm text-zinc-500"><span>{new Date(post.publishedAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span><span>·</span><span>{minutes} min read</span></div><div className="mt-5 flex flex-wrap gap-2">{post.tags.map((tag) => <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold" key={tag}>#{tag}</span>)}</div><hr className="my-12 border-black/10"/><div className="max-w-2xl text-lg leading-8 text-zinc-800"><p>{content}</p></div></article></>;
}
