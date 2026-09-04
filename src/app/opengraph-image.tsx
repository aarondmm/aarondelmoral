import { ImageResponse } from "next/og";
export const alt = "Aaron Del Moral — Developer & Explorer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() { return new ImageResponse(<div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px", background: "#f7f7f4", color: "#101113" }}><div style={{ display: "flex", fontSize: 28, letterSpacing: 5, color: "#4d7c0f" }}>DEVELOPER · TRAVELER · SKATER</div><div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", fontSize: 84, fontWeight: 800, letterSpacing: -4 }}>Aaron Del Moral<span style={{ color: "#65a30d" }}>.</span></div><div style={{ display: "flex", marginTop: 18, fontSize: 38 }}>Desarrollo web con energía, propósito y movimiento.</div></div><div style={{ display: "flex", fontSize: 24 }}>aarondelmoral.com</div></div>, size); }
