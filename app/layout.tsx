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
  openGraph: {
    title: "Constituye tu SL GRATIS | Ecom Solutions",
    description:
      "Solo pagas notaría y registro. Honorarios 0€ + 2 meses de gestoría incluidos.",
    url: "https://constituye.ecomsolutions.es",
    siteName: "Ecom Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
