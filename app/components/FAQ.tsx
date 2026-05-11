"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Tengo que buscar yo el notario?",
    a: "No, nosotros gestionamos todo. Tenemos notarios colaboradores en toda España.",
  },
  {
    q: "¿Cuánto tiempo tarda en estar lista mi empresa?",
    a: "Entre 5 y 7 días hábiles desde la firma ante notario.",
  },
  {
    q: "¿Qué incluyen los 2 meses de gestoría gratis?",
    a: "IVA trimestral, IRPF, contabilidad mensual y presentación de impuestos ante la AEAT. Todo incluido sin coste adicional.",
  },
  {
    q: "¿Qué pasa si no quiero continuar después de los 2 meses?",
    a: "Sin problema. No hay permanencia ni penalización. Cancelas cuando quieras con un simple aviso.",
  },
  {
    q: "¿Funciona en toda España?",
    a: "Sí, somos 100% online y trabajamos con clientes en toda España.",
  },
  {
    q: "¿Cuánto cuesta exactamente la notaría y el registro?",
    a: "Los gastos de notaría y registro son aproximadamente 150€. Los honorarios de constitución son completamente gratuitos.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#0F0F0E] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-400">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden bg-[#1A1A18]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-medium hover:bg-white/5 transition-colors"
              >
                <span className="pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-[#2563EB] flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
