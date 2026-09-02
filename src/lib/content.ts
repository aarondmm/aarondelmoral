import type { Post, Project } from "@/types/content";
export const projects: Project[] = [
  { id: "1", title: "Rutas sin mapa", slug: "rutas-sin-mapa", description: "Plataforma editorial para descubrir rutas y aventuras.", category: "web", technologies: ["Next.js", "TypeScript", "Tailwind"], featured: true, published: true, createdAt: "2026-08-20" },
  { id: "2", title: "Concrete Lines", slug: "concrete-lines", description: "Universo digital para la cultura skate local.", category: "ecommerce", technologies: ["Next.js", "Firebase", "Stripe"], featured: true, published: true, createdAt: "2026-07-02" },
  { id: "3", title: "Nomad Journal", slug: "nomad-journal", description: "Diario de viaje minimalista y colaborativo.", category: "app", technologies: ["React", "Supabase", "Motion"], featured: false, published: true, createdAt: "2026-06-14" },
];
export const posts: Post[] = [
  { id: "1", title: "Trabajar desde cualquier lugar", slug: "trabajar-desde-cualquier-lugar", excerpt: "Notas sobre construir una rutina creativa mientras viajas.", content: "El mejor equipaje es el que deja espacio para la curiosidad. Viajar y desarrollar productos comparten una cosa: ambas cosas mejoran cuando dejas margen para equivocarte.", category: "viajes", tags: ["remoto", "viajes"], published: true, publishedAt: "2026-08-14" },
  { id: "2", title: "La ciudad también se programa", slug: "la-ciudad-tambien-se-programa", excerpt: "Lo que el skate me enseñó sobre observar, iterar y volver a intentarlo.", content: "Cada spot tiene sus propias reglas. El skate te enseña a leer el contexto antes de moverte y a celebrar cada pequeña mejora.", category: "skate", tags: ["skate", "proceso"], published: true, publishedAt: "2026-07-28" },
  { id: "3", title: "Interfaces con intención", slug: "interfaces-con-intencion", excerpt: "Menos ruido, más dirección: cómo decido qué animar y qué dejar quieto.", content: "Una buena interfaz no pide atención: la dirige. El movimiento debe explicar jerarquía, cambio o respuesta, nunca decorar por decorar.", category: "desarrollo", tags: ["ux", "frontend"], published: true, publishedAt: "2026-07-09" },
];
export const categoryLabels = { viajes: "Viajes", skate: "Skate", desarrollo: "Desarrollo" };
