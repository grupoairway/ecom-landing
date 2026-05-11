"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  actividad: string;
  cuando: string;
}

export default function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    actividad: "",
    cuando: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error del servidor");
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <div className="text-6xl mb-6">🎉</div>
        <h3 className="text-3xl font-bold text-white mb-4">
          ¡Plaza reservada!
        </h3>
        <p className="text-gray-300 text-lg mb-6">
          Te llamamos en menos de 24h para guiarte en todo el proceso.
        </p>
        <div className="bg-[#1A1A18] border border-[#22C55E]/30 rounded-2xl p-6 text-left">
          <p className="text-[#22C55E] font-semibold mb-2">
            ¿Quieres agilizarlo?
          </p>
          <p className="text-gray-300 text-sm">
            Escríbenos directamente por WhatsApp y te atendemos ahora mismo.
          </p>
          <a
            href="https://wa.me/34661959962"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1ebe5d] transition-colors"
          >
            Abrir WhatsApp →
          </a>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#1A1A18] border border-white/10 text-white rounded-xl px-4 py-3.5 text-sm placeholder-gray-500 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-colors";

  const labelClass = "block text-sm font-medium text-gray-300 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
      <div>
        <label htmlFor="nombre" className={labelClass}>
          Nombre completo *
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          placeholder="María García"
          value={form.nombre}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="maria@tuempresa.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="telefono" className={labelClass}>
          Teléfono *
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          placeholder="+34 600 000 000"
          value={form.telefono}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="actividad" className={labelClass}>
          Actividad de tu empresa *
        </label>
        <textarea
          id="actividad"
          name="actividad"
          required
          rows={3}
          placeholder="Ej: Consultoría de marketing digital, venta online de productos, ..."
          value={form.actividad}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label htmlFor="cuando" className={labelClass}>
          ¿Cuándo quieres constituir? *
        </label>
        <select
          id="cuando"
          name="cuando"
          required
          value={form.cuando}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="Lo antes posible">Lo antes posible</option>
          <option value="En 1-2 meses">En 1-2 meses</option>
          <option value="Solo estoy mirando">Solo estoy mirando</option>
        </select>
      </div>

      {state === "error" && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
          Algo fue mal. Por favor inténtalo de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-[#22C55E] hover:bg-[#16a34a] disabled:bg-[#22C55E]/50 text-white font-bold text-lg py-4 rounded-xl transition-colors cursor-pointer disabled:cursor-not-allowed"
      >
        {state === "loading" ? (
          <span className="inline-flex items-center gap-2 justify-center">
            <svg
              className="animate-spin h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Enviando...
          </span>
        ) : (
          "Reservar mi plaza gratis →"
        )}
      </button>

      <p className="text-center text-xs text-gray-500">
        Sin compromiso. Sin permanencia. Te contactamos en menos de 24h.
      </p>
    </form>
  );
}
