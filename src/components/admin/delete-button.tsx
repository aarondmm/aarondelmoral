"use client";
export function DeleteButton({ label }: { label: string }) { return <button className="text-sm font-semibold text-red-600" type="submit" onClick={(event) => { if (!window.confirm(`¿Seguro que quieres eliminar ${label}? Esta acción no se puede deshacer.`)) event.preventDefault(); }}>Eliminar {label}</button>; }
