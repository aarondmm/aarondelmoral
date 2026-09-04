import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/public-content";
import { SITE_URL } from "@/lib/site";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> { const posts = await getPublishedPosts(); return [{ url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }, { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: .8 }, ...["viajes", "skate", "desarrollo"].map((category) => ({ url: `${SITE_URL}/blog/${category}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: .7 })), ...posts.map((post) => ({ url: `${SITE_URL}/blog/${post.category}/${post.slug}`, lastModified: post.publishedAt, changeFrequency: "monthly" as const, priority: .6 }))]; }
