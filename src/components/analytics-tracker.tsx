"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export function AnalyticsTracker() { const pathname = usePathname(); useEffect(() => { if (!pathname.startsWith("/admin")) fetch("/api/analytics/visit", { method: "POST", keepalive: true }).catch(() => undefined); }, [pathname]); return null; }
