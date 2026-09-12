import { MosaicGallery } from '@/components/MosaicGallery';
import { ProfileSection } from '@/components/ProfileSection';
import { CursorGlow } from '@/components/CursorGlow';
import galleryManifest from '@/data/galleryManifest.json';

export default function Home() {
  const baseUrl = 'https://cabeto-art.vercel.app';

  // Mapeo dinámico optimizado con licencias y aviso de copyright para Search Console
  const imagesSchema = Array.from({ length: galleryManifest.totalImages }, (_, i) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    'contentUrl': `${baseUrl}/gallery/${i + 1}.webp`,
    'name': `Ilustración CabetoArt #${i + 1}`,
    'creditText': 'CabetoArt',
    'copyrightNotice': '© CabetoArt. Todos los derechos reservados.',
    'license': baseUrl,
    'creator': {
      '@type': 'Person',
      'name': 'CabetoArt',
      'url': baseUrl,
    },
    'acquireLicensePage': baseUrl,
  }));

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imagesSchema) }}
      />
      <CursorGlow />
      <MosaicGallery />
      <ProfileSection />
    </main>
  );
}

