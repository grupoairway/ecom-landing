"use client";

export default function UrgencyBar() {
  return (
    <div className="bg-[#7F1D1D] text-white text-center py-3 px-4 text-sm font-medium sticky top-0 z-50">
      <span className="inline-flex items-center justify-center gap-2 flex-wrap">
        <span>🔥</span>
        <span>
          Solo{" "}
          <strong className="underline decoration-[#FCA5A5]">
            5 plazas disponibles
          </strong>{" "}
          este mes — Constitución GRATIS + 2 meses de gestoría
        </span>
        <span className="inline-flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`inline-block w-2.5 h-2.5 rounded-full ${
                i < 2 ? "bg-gray-600" : "bg-[#2563EB]"
              }`}
            />
          ))}
        </span>
        <span className="text-xs text-red-200">
          (3 disponibles · 2 ocupadas)
        </span>
      </span>
    </div>
  );
}
