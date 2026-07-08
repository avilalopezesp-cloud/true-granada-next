import "./globals.css";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://betrue.es"),
  title: "TRUE Granada — Granada no se visita, se vive",
  description:
    "TRUE Granada — Cuéntanos cómo quieres descubrir Granada y diseñamos una experiencia para ti. Barranquismo, Vía Ferrata, E-Bike Tours y más, guiados por locales del Albaicín.",
  icons: {
    icon: "/images/logo-arc.png",
  },
  openGraph: {
    type: "website",
    title: "TRUE Granada — Granada no se visita, se vive",
    description:
      "Cuéntanos cómo quieres descubrir Granada y diseñamos una experiencia para ti. Sin catálogos, sin tours genéricos.",
    images: ["/images/logo-true.png"],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  themeColor: "#1E1A14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppFloat />
        <ScrollRevealInit />
      </body>
    </html>
  );
}
