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
  metadataBase: new URL('https://cabeto-art.vercel.app/'),
  title: {
    default: 'CabetoArt | Ilustrador & Digital Artist',
    template: '%s | CabetoArt',
  },
  description: 'Portafolio oficial y comisiones de arte digital por CabetoArt. Chibi, Character Design e Ilustración.',
  keywords: ['CabetoArt', 'cabeto.art', 'cabeto art', 'Digital Art', 'Commissions', 'Illustration', 'VGen', 'Artist'],
  authors: [{ name: 'Carlos Alberto' }],
  openGraph: {
    title: 'CabetoArt | Ilustrador & Digital Artist',
    description: 'Portafolio oficial y comisiones de arte digital por CabetoArt.',
    url: 'https://cabeto-art.vercel.app/',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'googlecb2aed368ae1a2a1',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Datos estructurados para definir el Site Name ante Google
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CabetoArt',
    alternateName: ['cabeto.art', 'Cabeto Art'],
    url: 'https://cabeto-art.vercel.app/',
  };

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-neutral-950 text-white relative">
        <LanguageProvider>
          {children}
          <DiscordButton />
        </LanguageProvider>
      </body>
    </html>
  );
}