import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Constituye tu SL GRATIS | Ecom Solutions",
  description:
    "Constituye tu Sociedad Limitada completamente gratis. Solo pagas notaría y registro (~350€). Honorarios 0€ + 2 meses de gestoría incluidos.",
  icons: {
    icon: "https://ecomsolutions.es/wp-content/uploads/cropped-favicon-270x270.png",
    apple: "https://ecomsolutions.es/wp-content/uploads/cropped-favicon-270x270.png",
  },
  openGraph: {
    title: "Constituye tu SL GRATIS | Ecom Solutions",
    description:
      "Solo pagas notaría y registro. Honorarios 0€ + 2 meses de gestoría incluidos.",
    url: "https://constituye.ecomsolutions.es",
    siteName: "Ecom Solutions",
    images: [
      {
        url: "https://constituye.ecomsolutions.es/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Constituye tu SL GRATIS - 0€ honorarios + 2 meses de gestoría | Ecom Solutions",
      },
    ],
    type: "website",
  },
};

// Google Analytics, quitado el 07/10/2026 (del usuario): cargaba al hidratar la página, sin banner ni modo de
// consentimiento, y ponía `_ga` y `_ga_<id>` (2 años) a cada visitante. Hoy no hay campañas, así que no aportaba nada y
// costaba un incumplimiento que cualquiera puede comprobar desde fuera. Vuelve con su banner de consentimiento el día que
// empiecen los anuncios; tests/sin-rastreadores.test.mjs no deja que vuelva sin él.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
