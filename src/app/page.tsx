import { ArrowDownRight, Bike, Code2, Heart, Map } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ProjectsGrid } from "@/components/projects-grid";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/ui/reveal";

const passions = [[Map, "Viajes", "Curiosidad para cambiar de perspectiva.", "viajes"], [Bike, "Skate", "Paciencia, equilibrio y un poco de riesgo.", "skate"], [Code2, "Desarrollo", "Detalles que hacen que todo fluya.", "desarrollo"], [Heart, "Espiritualidad", "Conocerme mejor para vivir con más intención.", "espiritualidad"]] as const;

export default function Home() {
  return <><SiteHeader /><main>
    <section className="mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-28 md:px-8"><Reveal><p className="mb-5 text-sm font-bold uppercase tracking-[.2em] text-lime-700">Developer · Traveler · Skater</p><h1 className="max-w-5xl text-5xl font-bold leading-[.96] tracking-[-.06em] sm:text-7xl md:text-9xl">Construyo sitios con <span className="text-lime-600">energía</span>, propósito y movimiento.</h1><div className="mt-10 flex flex-wrap items-center gap-5"><a href="#proyectos" className="flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-white">Ver proyectos <ArrowDownRight size={18}/></a><p className="max-w-sm text-zinc-600">Soy Aaron Del Moral. Transformo ideas en experiencias web memorables.</p></div></Reveal></section>
    <section id="proyectos" className="bg-zinc-950 px-5 py-24 text-white md:px-8"><div className="mx-auto max-w-7xl"><Reveal><p className="text-lime-300">01 — Trabajo seleccionado</p><h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Proyectos que avanzan.</h2></Reveal><div className="mt-12"><ProjectsGrid /></div></div></section>
    <section id="sobre-mi" className="mx-auto max-w-7xl px-5 py-24 md:px-8"><Reveal><p className="text-lime-700">02 — Fuera de la pantalla</p><h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Las mejores ideas no siempre empiezan en un escritorio.</h2></Reveal><div className="mt-10 grid gap-4 md:grid-cols-2">{passions.map(([Icon, title, text, slug]) => <Reveal key={title}><Link href={`/fuera-de-la-pantalla/${slug}`} className="group block rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><Icon className="text-lime-600"/><h3 className="mt-12 text-2xl font-bold">{title}</h3><p className="mt-2 text-zinc-600">{text}</p><span className="mt-6 inline-block text-sm font-semibold text-lime-700">Explorar →</span></Link></Reveal>)}</div></section>
    <section id="contacto" className="bg-lime-300 px-5 py-24 md:px-8"><div className="mx-auto max-w-3xl"><Reveal><p className="font-medium">03 — Contacto</p><h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">¿Tienes una buena idea? Hagámosla real.</h2><ContactForm /></Reveal></div></section>
  </main></>;
}
