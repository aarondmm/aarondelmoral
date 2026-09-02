import Link from "next/link";
import { notFound } from "next/navigation";
import { passions, type PassionSlug } from "@/lib/passions";

export default async function PassionPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  if (!(topic in passions)) notFound();
  const passion = passions[topic as PassionSlug];
  return <main className="mx-auto min-h-screen max-w-4xl px-5 py-28 md:px-8"><Link href="/#sobre-mi" className="text-sm font-semibold text-lime-700">← Volver a Fuera de la pantalla</Link><p className="mt-14 text-sm font-bold uppercase tracking-[.2em] text-lime-700">{passion.eyebrow}</p><h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">{passion.title}</h1><p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-600">{passion.intro}</p><div className="mt-14 grid gap-3">{passion.points.map((point, index) => <div key={point} className="flex gap-5 rounded-2xl bg-white p-6"><span className="font-bold text-lime-700">0{index + 1}</span><p className="text-lg font-medium">{point}</p></div>)}</div></main>;
}
