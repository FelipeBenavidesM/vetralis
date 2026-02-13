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
  // El título es lo más importante para el SEO local
  title: {
    default: "Vetralis | Centro Médico Veterinario en Puerto Montt",
    template: "%s | Vetralis Puerto Montt",
  },
  description: "Clínica Veterinaria en Puerto Montt especializada en medicina felina y canina. Ofrecemos consultas médicas, cirugías, laboratorio clínico y atención integral para tus mascotas.",
  keywords: [
    "veterinaria puerto montt", 
    "centro medico veterinario", 
    "vetralis", 
    "medico veterinario puerto montt", 
    "cirugia veterinaria", 
    "medicina felina puerto montt",
    "clinica veterinaria chile"
  ],
  authors: [{ name: "Vetralis" }],
  
  // Open Graph para que al compartir por WhatsApp/Instagram se vea profesional
  openGraph: {
    title: "Vetralis Centro Médico Veterinario",
    description: "Cuidado integral para tus mascotas en Puerto Montt. Medicina de calidad con amor.",
    url: "https://vetralis.vercel.app", // Asegúrate de que sea tu URL final
    siteName: "Vetralis",
    images: [
      {
        url: "/og-image.png", // Crea una imagen de 1200x630px y ponla en public
        width: 1200,
        height: 630,
        alt: "Vetralis Puerto Montt",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  
  // Iconos que configuramos antes
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}