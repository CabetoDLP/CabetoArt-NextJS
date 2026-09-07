import { MosaicGallery } from '@/components/MosaicGallery';
import { ProfileSection } from '@/components/ProfileSection';
import { CursorGlow } from '@/components/CursorGlow';

export default function Home() {
  return (
    <main className="...">
      <CursorGlow />
      <MosaicGallery />
      <ProfileSection />
    </main>
  );
}