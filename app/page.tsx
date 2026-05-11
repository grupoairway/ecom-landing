import Image from "next/image";
import UrgencyBar from "./components/UrgencyBar";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";
import WhatsAppButton from "./components/WhatsAppButton";

const checkIcon = (
  <svg
    className="w-4 h-4 text-[#2563EB] flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const starPath =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

export default function Page() {
  return (
    <main>
      {/* 1. BARRA DE URGENCIA */}
      <UrgencyBar />

      {/* 2. HEADER NAV */}
      <nav className="bg-[#0A0A09] border-b border-white/5 py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src="/Logo Ecomsolutions 2.png"
              width={40}
              height={40}
              alt="EcomSolutions"
              className="rounded-lg"
              style={{ mixBlendMode: "screen" }}
            />
            <span className="text-white text-sm" style={{ fontWeight: 600 }}>
              <span style={{ color: "#FFFFFF" }}>E</span>com<span style={{ color: "#FFFFFF" }}>S</span>olutions
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+34661959962"
              className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +34 661 959 962
            </a>
            <a
              href="#formulario"
              className="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Empezar gratis
            </a>
          </div>
        </div>
      </nav>

      {/* 3. HERO */}
      <section className="bg-[#0F0F0E] text-white pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-10 flex items-center justify-center gap-3">
            <Image
              src="/Logo Ecomsolutions 2.png"
              width={40}
              height={40}
              alt="EcomSolutions"
              className="rounded-lg"
              style={{ mixBlendMode: "screen" }}
            />
            <span className="text-xl tracking-wide text-gray-100" style={{ fontWeight: 600 }}>
              <span style={{ color: "#FFFFFF" }}>E</span>com<span style={{ color: "#FFFFFF" }}>S</span>olutions
            </span>
          </div>

          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-full px-4 py-1.5 text-[#2563EB] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse inline-block" />
            Oferta limitada — Solo 5 plazas este mes
          </div>

          {/* Titular */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Constituye tu SL{" "}
            <span className="text-[#2563EB]">completamente GRATIS</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Solo pagas{" "}
            <strong className="text-white">~150€ de notaría y registro</strong>.
            Honorarios de constitución:{" "}
            <strong className="text-white">0€</strong>. Incluye{" "}
            <strong className="text-white">2 meses de gestoría gratis</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#formulario"
              className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-xl text-lg font-bold transition-colors shadow-lg shadow-blue-900/30"
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
            {["Sin permanencia", "Sin letra pequeña", "Respuesta en 24h"].map((label) => (
              <span key={label} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {label}
              </span>
            ))}
          </p>

          {/* Cobertura geográfica */}
          <p className="text-gray-500 text-xs mt-4">
            📍 Servicio 100% online · Trabajamos en toda España
          </p>
        </div>

        {/* Stats row */}
        <div className="max-w-3xl mx-auto mt-20 grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
          {[
            { number: "+200", label: "clientes satisfechos" },
            { number: "0€", label: "honorarios de constitución" },
            { number: "5-7", label: "días hábiles hasta tu SL" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-[#2563EB]">
                {stat.number}
              </p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ¿QUÉ INCLUYE? */}
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
                <p className="text-[#2563EB] font-bold text-xl mb-3">
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
              <strong className="text-gray-900">60€/mes (plan Starter)</strong>{" "}
              sin permanencia. Cancela cuando quieras.
            </p>
          </div>
        </div>
      </section>

      {/* 5. ¿PARA QUIÉN ES ESTE SERVICIO? */}
      <section className="bg-[#0F0F0E] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Para quién es este servicio?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Si encajas en alguno de estos perfiles, la constitución gratuita
              es para ti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "El emprendedor que quiere facturar",
                desc: "Tienes un proyecto en marcha o una idea clara y necesitas una empresa para emitir facturas y trabajar con clientes.",
              },
              {
                icon: "📈",
                title: "El autónomo que quiere pagar menos",
                desc: "Ya eres autónomo pero tu facturación crece y sabes que una SL te permite tributar menos por el Impuesto de Sociedades.",
              },
              {
                icon: "🤝",
                title: "El socio que monta empresa con otro",
                desc: "Vas a emprender con un socio y necesitáis una estructura legal que proteja a ambos y reparta responsabilidades.",
              },
            ].map((profile) => (
              <div
                key={profile.title}
                className="bg-[#1A1A18] border border-white/10 rounded-2xl p-8 text-center hover:border-[#2563EB]/30 transition-colors"
              >
                <div className="text-5xl mb-5">{profile.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {profile.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {profile.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#formulario"
              className="inline-block bg-[#2563EB] hover:bg-[#1E40AF] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Sí, quiero mi SL gratis →
            </a>
          </div>
        </div>
      </section>

      {/* 6. COMPARATIVA DE PRECIO */}
      <section id="comparativa" className="bg-[#0A0A09] py-20 px-4">
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
                  { label: "Constitución + honorarios", value: "800€ – 1.500€", cross: true },
                  { label: "Gestoría mensual", value: "desde 80€/mes", cross: true },
                  { label: "Permanencia", value: "12 meses mínimo", cross: true },
                  { label: "Total 1er año", value: "~1.760€ – 2.460€", total: true },
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
            <div className="bg-[#0c1b3a] border border-[#2563EB]/40 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full">
                MEJOR OPCIÓN
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#2563EB]/20 flex items-center justify-center text-[#2563EB] font-bold text-sm">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Ecom Solutions
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Honorarios constitución", value: "0€", green: true },
                  { label: "Notaría + registro", value: "~150€", green: false },
                  { label: "2 meses gestoría", value: "GRATIS", green: true },
                  { label: "Permanencia", value: "Sin compromiso", green: false },
                  {
                    label: "Total 1er año",
                    value: "~750€",
                    sub: "(notaría 150€ + gestoría mes 3-12)",
                    total: true,
                    green: false,
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center py-3 border-b border-[#2563EB]/10 last:border-none"
                  >
                    <div>
                      <span className="text-gray-300 text-sm">{row.label}</span>
                      {row.sub && (
                        <p className="text-gray-500 text-xs mt-0.5">{row.sub}</p>
                      )}
                    </div>
                    <span
                      className={`font-bold text-sm ${
                        row.total
                          ? "text-[#2563EB] text-base"
                          : row.green
                          ? "text-[#2563EB]"
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
            <p className="text-[#2563EB] font-semibold text-lg">
              Ahorro estimado en el primer año:{" "}
              <span className="text-white font-extrabold text-2xl">
                hasta 1.700€
              </span>
            </p>
            <a
              href="#formulario"
              className="inline-block bg-[#2563EB] hover:bg-[#1E40AF] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Quiero ahorrarme hasta 1.700€ →
            </a>
          </div>
        </div>
      </section>

      {/* 7. PROCESO EN 4 PASOS */}
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
                  time: "5-7 días hábiles",
                },
              ].map((step) => (
                <div key={step.num} className="text-center relative">
                  <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-extrabold text-xl shadow-lg shadow-blue-200/50 relative z-10">
                    {step.num}
                  </div>
                  <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
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
              className="inline-block bg-[#2563EB] hover:bg-[#1E40AF] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Empezar ahora →
            </a>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIOS */}
      <section id="testimonios" className="bg-[#0F0F0E] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <div className="flex justify-center items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d={starPath} />
                </svg>
              ))}
              <span className="text-gray-400 text-sm ml-2">5/5 en Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Alma T.",
                city: "Barcelona",
                role: "Tienda online de ropa",
                initials: "AT",
                color: "bg-purple-500",
                quote:
                  "Creé mi empresa con ellos y llevan toda la contabilidad. Responden súper rápido y siempre están disponibles cuando los necesito.",
              },
              {
                name: "José Ramón C.",
                city: "Madrid",
                role: "Consultor de RRHH",
                initials: "JR",
                color: "bg-blue-500",
                quote:
                  "Desde que estoy con Ecomsolutions me olvido completamente de los impuestos. Sé que están presentados a tiempo y bien hechos.",
              },
              {
                name: "Paula R.",
                city: "Valencia",
                role: "Terapeuta y coach",
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
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d={starPath} />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">
                      {t.city} · {t.role}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 border-t border-white/5 pt-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d={starPath} />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    Verificado en Google
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQ />

      {/* 10. PLANES DE GESTORÍA */}
      <section id="precios" className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planes de gestoría a partir del mes 3
            </h2>
            <p className="text-gray-500">
              Sin permanencia. Cambia o cancela cuando quieras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Starter */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Starter</h3>
              <p className="text-gray-500 text-xs mb-4">Hasta 20 facturas/mes</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-gray-900">60€</span>
                <span className="text-gray-500 text-sm">/mes</span>
              </div>
              <p className="text-gray-400 text-xs mb-6">+ IVA</p>
              <ul className="space-y-3">
                {[
                  "Contabilidad mensual",
                  "IVA y retenciones",
                  "Impuesto de Sociedades",
                  "Cuentas Anuales",
                  "Asesor personal",
                  "Respuesta en 24h",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    {checkIcon}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro — MÁS CONTRATADO */}
            <div className="bg-[#0c1b3a] border-2 border-[#2563EB] p-8 rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                Más contratado
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
              <p className="text-gray-400 text-xs mb-4">Hasta 200 facturas/mes</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-white">100€</span>
                <span className="text-gray-400 text-sm">/mes</span>
              </div>
              <p className="text-gray-500 text-xs mb-6">+ IVA</p>
              <ul className="space-y-3">
                {[
                  "Todo lo del plan Starter",
                  "Hasta 200 facturas/mes",
                  "Software facturación incluido",
                  "Legalización de Libros",
                  "Cambio de gestoría gratis",
                  "Consultas ilimitadas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    {checkIcon}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Business</h3>
              <p className="text-gray-500 text-xs mb-4">Facturas ilimitadas</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-gray-900">180€</span>
                <span className="text-gray-500 text-sm">/mes</span>
              </div>
              <p className="text-gray-400 text-xs mb-6">+ IVA</p>
              <ul className="space-y-3">
                {[
                  "Todo lo del plan Pro",
                  "Facturas ilimitadas",
                  "Gestoría laboral incluida",
                  "Nóminas y Seguros Sociales",
                  "Revisión fiscal trimestral",
                  "Atención telefónica prioritaria",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    {checkIcon}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            Sin permanencia. Cancela cuando quieras. Precios sin IVA.
          </p>
        </div>
      </section>

      {/* 11. GARANTÍAS */}
      <section className="bg-[#0A0A09] py-12 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🔒", text: "Datos protegidos RGPD" },
              { icon: "✅", text: "Colaborador AEAT certificado" },
              { icon: "⭐", text: "+200 clientes satisfechos" },
              { icon: "📞", text: "Respuesta garantizada en 24h" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex flex-col items-center text-center gap-2 py-4 px-3 rounded-xl bg-white/5 border border-white/5"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-gray-400 text-xs leading-snug">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FORMULARIO */}
      <section
        id="formulario"
        className="bg-[#0A0A09] py-20 px-4 border-t border-[#2563EB]/20"
      >
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-full px-4 py-1.5 text-[#2563EB] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse inline-block" />
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
            <a href="tel:+34661959962" className="hover:text-gray-300 transition-colors">
              📞 +34 661 959 962
            </a>
            <a href="mailto:info@ecomsolutions.es" className="hover:text-gray-300 transition-colors">
              ✉️ info@ecomsolutions.es
            </a>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-[#080807] border-t border-white/5 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Image
                src="/Logo Ecomsolutions 2.png"
                width={40}
                height={40}
                alt="EcomSolutions"
                className="rounded-lg"
              />
              <span className="text-white" style={{ fontWeight: 600 }}><span style={{ color: "#FFFFFF" }}>E</span>com<span style={{ color: "#FFFFFF" }}>S</span>olutions</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <a href="tel:+34661959962" className="hover:text-white transition-colors">
                📞 +34 661 959 962
              </a>
              <a href="mailto:info@ecomsolutions.es" className="hover:text-white transition-colors">
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
              una SL. Los gastos de notaría y Registro Mercantil (aprox. 150€)
              corren a cargo del cliente. Los 2 meses de gestoría gratuita se
              aplican desde la constitución. Sin permanencia a partir del mes 3.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÓN WHATSAPP FLOTANTE — mantiene verde #25D366 */}
      <WhatsAppButton />
    </main>
  );
}
