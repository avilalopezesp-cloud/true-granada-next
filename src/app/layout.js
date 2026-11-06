import "./globals.css";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageLoader from "@/components/PageLoader";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://betrue.es"),
  title: "TRUE Granada — Granada no se visita, se vive",
  description:
    "TRUE Granada — Cuéntanos cómo quieres descubrir Granada y diseñamos una experiencia para ti. Barranquismo, Vía Ferrata, E-Bike Tours y más, guiados por locales del Albaicín.",
  openGraph: {
    type: "website",
    title: "TRUE Granada — Granada no se visita, se vive",
    description:
      "Cuéntanos cómo quieres descubrir Granada y diseñamos una experiencia para ti. Sin catálogos, sin tours genéricos.",
    // The logo itself is transparent and partly white, so WhatsApp and
    // others (which paint transparency white) lost the goat; this version
    // sits on the brand's dark background.
    images: [{ url: "/images/og-true.jpg", width: 1200, height: 630, alt: "T.R.U.E. Albayzín" }],
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
        <LanguageProvider>
          <PageLoader />
          {children}
          <WhatsAppFloat />
          <ScrollRevealInit />
        </LanguageProvider>
      </body>
    </html>
  );
}
