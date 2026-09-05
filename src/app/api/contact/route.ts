import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase/admin";

const clean = (value: unknown) => typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  const { name, email, message, company } = await request.json();
  if (company) return NextResponse.json({ ok: true });
  const sender = clean(name);
  const replyTo = clean(email);
  const content = clean(message);
  if (!sender || !replyTo || !content || !/^\S+@\S+\.\S+$/.test(replyTo)) return NextResponse.json({ error: "Completa correctamente todos los campos." }, { status: 400 });
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) return NextResponse.json({ error: "El formulario de contacto aún no está configurado." }, { status: 503 });
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.RESEND_FROM_EMAIL, to: [process.env.CONTACT_TO_EMAIL], reply_to: replyTo, subject: `Nuevo contacto — ${sender}`, text: `Nombre: ${sender}\nEmail: ${replyTo}\n\n${content}` }) });
  if (!response.ok) return NextResponse.json({ error: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde." }, { status: 502 });
  await getAdminDb().collection("contactMessages").add({ name: sender, email: replyTo, message: content, createdAt: FieldValue.serverTimestamp() });
  return NextResponse.json({ ok: true });
}
