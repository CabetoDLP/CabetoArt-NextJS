import { MosaicGallery } from '@/components/MosaicGallery';
import { ProfileSection } from '@/components/ProfileSection';
import { CursorGlow } from '@/components/CursorGlow';
import galleryData from '@/data/galleryManifest.json';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <CursorGlow />
      <MosaicGallery totalImages={galleryData.totalImages} />
      <ProfileSection />
    </main>
  );
}