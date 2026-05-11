import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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

// Replace G-XXXXXXXXXX with your actual Google Analytics measurement ID
const GA_MEASUREMENT_ID = "G-ET7W60CCWV";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
