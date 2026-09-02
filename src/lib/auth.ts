import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminAuth } from "@/lib/firebase/admin";
export async function requireAdmin() { try { const session = (await cookies()).get("session")?.value; if (!session) redirect("/admin/login"); const token = await getAdminAuth().verifySessionCookie(session, true); if (token.admin !== true) redirect("/admin/login"); return token; } catch { redirect("/admin/login"); } }
