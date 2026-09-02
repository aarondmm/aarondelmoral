import type { Post, Project } from "@/types/content";
import { posts as demoPosts, projects as demoProjects } from "@/lib/content";
import { getAdminDb } from "@/lib/firebase/admin";

const date = (value: unknown) => value && typeof value === "object" && "toDate" in value ? (value as { toDate(): Date }).toDate().toISOString() : new Date().toISOString();
export async function getPublishedProjects(): Promise<Project[]> { const snapshot = await getAdminDb().collection("projects").where("published", "==", true).get(); if (snapshot.empty) return demoProjects; return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<Project, "id" | "createdAt">), createdAt: date(doc.data().createdAt) })); }
export async function getPublishedPosts(): Promise<Post[]> { const snapshot = await getAdminDb().collection("posts").where("published", "==", true).get(); if (snapshot.empty) return demoPosts; return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<Post, "id" | "publishedAt">), publishedAt: date(doc.data().publishedAt) })); }
