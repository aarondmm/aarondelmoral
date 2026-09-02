export type BlogCategory = "viajes" | "skate" | "desarrollo";
export type Project = { id: string; title: string; slug: string; description: string; category: "web" | "app" | "landing" | "ecommerce"; technologies: string[]; demoUrl?: string; coverImage?: string; featured: boolean; published: boolean; createdAt: string; };
export type Post = { id: string; title: string; slug: string; excerpt: string; content: string; category: BlogCategory; coverImage?: string; tags: string[]; published: boolean; publishedAt: string; };
