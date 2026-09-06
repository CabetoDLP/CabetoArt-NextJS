import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { DiscordButton } from "@/components/DiscordButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cabeto.art'), // Reemplaza con tu dominio personalizado o tu URL de Vercel
  title: {
    default: 'CabetoArt | Ilustrador & Digital Artist',
    template: '%s | CabetoArt',
  },
  description: 'Portafolio oficial y comisiones de arte digital por CabetoArt. Chibi, Character Design e Ilustración.',
  keywords: ['CabetoArt', 'Digital Art', 'Commissions', 'Illustration', 'VGen', 'Artist'],
  authors: [{ name: 'Carlos Alberto' }],
  openGraph: {
    title: 'CabetoArt | Ilustrador & Digital Artist',
    description: 'Portafolio oficial y comisiones de arte digital por CabetoArt.',
    url: 'https://cabeto.art',
    siteName: 'CabetoArt',
    images: [
      {
        url: '/profile/cabetoart.webp',
        width: 800,
        height: 800,
        alt: 'CabetoArt Logo',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-white relative">
        <LanguageProvider>
          {children}
          <DiscordButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
