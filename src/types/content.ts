export type BlogCategory = "viajes" | "skate" | "desarrollo";
export type Translation = { title?: string; excerpt?: string; content?: string; description?: string };
export type Project = { id: string; title: string; slug: string; description: string; translations?: { en?: Translation }; category: "web" | "app" | "landing" | "ecommerce"; technologies: string[]; demoUrl?: string; coverImage?: string; gallery?: string[]; featured: boolean; published: boolean; createdAt: string; };
export type Post = { id: string; title: string; slug: string; excerpt: string; content: string; translations?: { en?: Translation }; category: BlogCategory; coverImage?: string; tags: string[]; published: boolean; publishedAt: string; };
