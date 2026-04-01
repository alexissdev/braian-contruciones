import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braian Construcciones | Construcción y Remodelaciones",
  description:
    "Empresa de construcción en Argentina. Realizamos obras, remodelaciones, plateas y reformas con calidad y compromiso.",


  keywords: [
    "construcción",
    "remodelaciones",
    "obra",
    "platea",
    "albañilería",
    "Braian Construcciones",
    "constructor en Argentina"
  ],

  openGraph: {
    title: "Braian Construcciones",
    description:
      "Construcción, remodelaciones y soluciones integrales para tu hogar.",
    url: "https://braianconstrucciones.com",
    siteName: "Braian Construcciones",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Braian Construcciones",
    description:
      "Construcción, remodelaciones y soluciones integrales.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}