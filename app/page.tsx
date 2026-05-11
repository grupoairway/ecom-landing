import UrgencyBar from "./components/UrgencyBar";
import LeadForm from "./components/LeadForm";

export default function Page() {
  return (
    <main>
      {/* 1. BARRA DE URGENCIA */}
      <UrgencyBar />

      {/* 2. HERO */}
      <section className="bg-[#0F0F0E] text-white pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-10 flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-[#22C55E] rounded-lg flex items-center justify-center font-bold text-black text-sm">
              ES
            </div>
            <span className="text-xl font-semibold tracking-wide text-gray-100">
              Ecom Solutions
            </span>
          </div>

          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full px-4 py-1.5 text-[#22C55E] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse inline-block" />
            Oferta limitada — Solo 5 plazas este mes
          </div>

          {/* Titular */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Constituye tu SL{" "}
            <span className="text-[#22C55E]">completamente GRATIS</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Solo pagas notaría y registro{" "}
            <strong className="text-white">~350€</strong>. Nosotros ponemos
            todo lo demás: honorarios, trámites y{" "}
            <strong className="text-white">
              2 meses de gestoría incluidos
            </strong>
            .
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#formulario"
              className="bg-[#22C55E] hover:bg-[#16a34a] text-white px-8 py-4 rounded-xl text-lg font-bold transition-colors shadow-lg shadow-green-900/30"
            >
              Quiero mi SL gratis →
            </a>
            <a
              href="https://wa.me/34661959962"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-white/60 hover:bg-white/5 text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors"
            >
              💬 Hablar por WhatsApp
            </a>
          </div>

          {/* Badge de confianza */}
          <p className="text-gray-400 text-sm flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#22C55E]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Sin permanencia
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#22C55E]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Sin letra pequeña
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#22C55E]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Respuesta en 24h
            </span>
          </p>
        </div>

        {/* Stats row */}
        <div className="max-w-3xl mx-auto mt-20 grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
          {[
            { number: "+200", label: "empresas constituidas" },
            { number: "0€", label: "honorarios de constitución" },
            { number: "7-10", label: "días hasta tu SL lista" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-[#22C55E]">
                {stat.number}
              </p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ¿QUÉ INCLUYE? */}
      <section id="incluye" className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué incluye el servicio?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Todo lo que necesitas para arrancar tu empresa, sin costes ocultos
              ni sorpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "📝",
                title: "Constitución completa",
                price: "0€ honorarios",
                desc: "Escritura notarial, estatutos sociales, obtención del NIF provisional y registro en el Registro Mercantil.",
              },
              {
                emoji: "📊",
                title: "2 meses gestoría gratis",
                price: "Incluido",
                desc: "Gestión de IVA trimestral, IRPF, contabilidad mensual y presentación de impuestos ante la AEAT.",
              },
              {
                emoji: "🤝",
                title: "Acompañamiento total",
                price: "Respuesta 24h",
                desc: "Asesor personal asignado desde el primer día. Disponible para todas tus consultas empresariales.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-5">{card.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-[#22C55E] font-bold text-xl mb-3">
                  {card.price}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              A partir del mes 3: desde{" "}
              <strong className="text-gray-900">60€/mes</strong> sin
              permanencia. Cancela cuando quieras.
            </p>
          </div>
        </div>
      </section>

      {/* 4. COMPARATIVA DE PRECIO */}
      <section id="comparativa" className="bg-[#0F0F0E] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Cuánto te ahorras?
            </h2>
            <p className="text-gray-400">
              Compara lo que pagarías en otro sitio vs. con Ecom Solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Competencia */}
            <div className="bg-[#1A1A18] border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm">
                  ✕
                </div>
                <h3 className="text-lg font-semibold text-gray-300">
                  Otras gestorías
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Constitución", value: "800€ – 1.500€", cross: true },
                  {
                    label: "Gestoría mensual",
                    value: "desde 80€/mes",
                    cross: true,
                  },
                  {
                    label: "Permanencia",
                    value: "12 meses mínimo",
                    cross: true,
                  },
                  {
                    label: "Total 1er año",
                    value: "~1.760€ – 2.460€",
                    total: true,
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center py-3 border-b border-white/5 last:border-none"
                  >
                    <span className="text-gray-400 text-sm">{row.label}</span>
                    <span
                      className={`font-semibold text-sm ${
                        row.total
                          ? "text-red-400 text-base"
                          : "text-gray-300 line-through decoration-red-400 decoration-2"
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecom Solutions */}
            <div className="bg-[#0D2818] border border-[#22C55E]/40 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#22C55E] text-black text-xs font-bold px-3 py-1 rounded-full">
                MEJOR OPCIÓN
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E] font-bold text-sm">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Ecom Solutions
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Constitución", value: "0€ GRATIS", green: true },
                  {
                    label: "2 meses gestoría",
                    value: "GRATIS",
                    green: true,
                  },
                  { label: "Permanencia", value: "Sin compromiso" },
                  {
                    label: "Total 1er año",
                    value: "~950€",
                    sub: "(notaría + gestoría mes 3-12)",
                    total: true,
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center py-3 border-b border-[#22C55E]/10 last:border-none"
                  >
                    <div>
                      <span className="text-gray-300 text-sm">{row.label}</span>
                      {"sub" in row && row.sub && (
                        <p className="text-gray-500 text-xs mt-0.5">{row.sub}</p>
                      )}
                    </div>
                    <span
                      className={`font-bold text-sm ${"total" in row && row.total
                          ? "text-[#22C55E] text-base"
                          : "green" in row && row.green
                          ? "text-[#22C55E]"
                          : "text-gray-200"
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center space-y-6">
            <p className="text-[#22C55E] font-semibold text-lg">
              Ahorro estimado en el primer año:{" "}
              <span className="text-white font-extrabold text-2xl">
                +1.000€
              </span>
            </p>
            <a
              href="#formulario"
              className="inline-block bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Quiero ahorrarme esos 1.000€ →
            </a>
          </div>
        </div>
      </section>

      {/* 5. PROCESO EN 4 PASOS */}
      <section id="proceso" className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tu empresa lista en 4 pasos
            </h2>
            <p className="text-gray-500">
              Proceso sencillo, rápido y con nosotros de la mano en todo
              momento.
            </p>
          </div>

          <div className="relative">
            {/* Línea conectora desktop */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  num: "1",
                  title: "Rellena el formulario",
                  desc: "2 minutos. Sin compromiso. Solo necesitamos tus datos básicos.",
                  time: "2 min",
                },
                {
                  num: "2",
                  title: "Te llamamos",
                  desc: "Un asesor te contacta en menos de 24 horas para resolver todas tus dudas.",
                  time: "< 24h",
                },
                {
                  num: "3",
                  title: "Firma ante notario",
                  desc: "Te acompañamos en la firma. Gestionamos toda la documentación previa.",
                  time: "1 día",
                },
                {
                  num: "4",
                  title: "Empresa lista",
                  desc: "NIF definitivo, alta en Hacienda y cuenta bancaria. Tu SL operativa.",
                  time: "7-10 días",
                },
              ].map((step) => (
                <div key={step.num} className="text-center relative">
                  <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-extrabold text-xl shadow-lg shadow-green-200/50 relative z-10">
                    {step.num}
                  </div>
                  <div className="inline-block bg-[#22C55E]/10 text-[#16a34a] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    {step.time}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#formulario"
              className="inline-block bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Empezar ahora →
            </a>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIOS */}
      <section id="testimonios" className="bg-[#0F0F0E] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <div className="flex justify-center items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-400 text-sm ml-2">5/5 en Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Alma T.",
                role: "Diseñadora freelance",
                initials: "AT",
                color: "bg-purple-500",
                quote:
                  "Creé mi empresa con ellos y llevan toda la contabilidad. Responden súper rápido y siempre están disponibles cuando los necesito.",
              },
              {
                name: "José Ramón C.",
                role: "Consultor de RRHH",
                initials: "JR",
                color: "bg-blue-500",
                quote:
                  "Desde que estoy con Ecomsolutions me olvido completamente de los impuestos. Sé que están presentados a tiempo y bien hechos.",
              },
              {
                name: "Paula R.",
                role: "Terapeuta",
                initials: "PR",
                color: "bg-rose-500",
                quote:
                  "Me dieron de alta como autónomo en un día. Por 30€ al mes no hay nada comparable. La atención es increíble.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-[#1A1A18] border border-white/10 rounded-2xl p-6 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-semibold text-sm`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FORMULARIO */}
      <section
        id="formulario"
        className="bg-[#0A0A09] py-20 px-4 border-t border-[#22C55E]/20"
      >
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full px-4 py-1.5 text-[#22C55E] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse inline-block" />
              Plazas limitadas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Reserva tu plaza ahora
            </h2>
            <p className="text-gray-400">
              Gratis, sin compromiso. Te contactamos en menos de 24h.
            </p>
          </div>

          <LeadForm />

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <span>🔒 Datos protegidos (RGPD)</span>
            <a
              href="tel:+34661959962"
              className="hover:text-gray-300 transition-colors"
            >
              📞 +34 661 959 962
            </a>
            <a
              href="mailto:info@ecomsolutions.es"
              className="hover:text-gray-300 transition-colors"
            >
              ✉️ info@ecomsolutions.es
            </a>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#080807] border-t border-white/5 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#22C55E] rounded-lg flex items-center justify-center font-bold text-black text-xs">
                ES
              </div>
              <span className="text-white font-semibold">Ecom Solutions</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <a
                href="tel:+34661959962"
                className="hover:text-white transition-colors"
              >
                📞 +34 661 959 962
              </a>
              <a
                href="mailto:info@ecomsolutions.es"
                className="hover:text-white transition-colors"
              >
                ✉️ info@ecomsolutions.es
              </a>
              <a
                href="https://ecomsolutions.es"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                🌐 ecomsolutions.es
              </a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 text-center text-xs text-gray-600 leading-relaxed">
            <p>
              © {new Date().getFullYear()} Ecom Solutions · Todos los derechos
              reservados
            </p>
            <p className="mt-2 max-w-2xl mx-auto">
              La oferta de honorarios 0€ aplica a la constitución estándar de
              una SL. Los gastos de notaría y Registro Mercantil (~300-400€)
              corren a cargo del cliente y varían según la provincia. Los 2
              meses de gestoría gratuita se aplican desde la constitución. Sin
              permanencia a partir del mes 3.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
