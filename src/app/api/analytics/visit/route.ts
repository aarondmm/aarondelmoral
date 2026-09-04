import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase/admin";
export async function POST(request: Request) { const today = new Date().toISOString().slice(0, 10); const cookies = request.headers.get("cookie") ?? ""; if (cookies.includes(`last_public_visit=${today}`)) return NextResponse.json({ ok: true }); await getAdminDb().collection("analytics").doc("overview").set({ totalVisits: FieldValue.increment(1), [`daily.${today}`]: FieldValue.increment(1), updatedAt: FieldValue.serverTimestamp() }, { merge: true }); const response = NextResponse.json({ ok: true }); response.cookies.set("last_public_visit", today, { maxAge: 60 * 60 * 24, sameSite: "lax", path: "/" }); return response; }
