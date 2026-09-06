'use client';

import { useState, useEffect } from 'react';
import { usePrecachedGallery } from '@/hooks/usePrecachedGallery';
import { ImageContainer } from './ImageContainer';

interface MosaicGalleryProps {
  totalImages: number;
}

export const MosaicGallery = ({ totalImages }: MosaicGalleryProps) => {
  const { cachedUrls, isLoaded } = usePrecachedGallery(totalImages);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  useEffect(() => {
    if (!isLoaded || !cachedUrls.length) return;

    const indices: number[] = [];
    const count = Math.min(20, cachedUrls.length);

    while (indices.length < count) {
      const random = Math.floor(Math.random() * cachedUrls.length);
      if (!indices.includes(random)) indices.push(random);
    }

    setSelectedIndices(indices);
  }, [isLoaded, cachedUrls.length]);

  if (!isLoaded || selectedIndices.length === 0) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-black">
      <div className="flex flex-row w-full h-full justify-between items-center px-1 sm:px-2">
        {[0, 1, 2, 3].map((colIndex) => {
          const columnImages = selectedIndices.slice(colIndex * 5, (colIndex + 1) * 5);

          return (
            <div key={colIndex} className="overflow-hidden h-screen w-1/4 px-1 sm:px-2">
              <div className="animate-scroll-y flex flex-col w-full">
                {[...columnImages, ...columnImages].map((imgIdx, index) => (
                  <ImageContainer
                    key={`${colIndex}-${index}`}
                    initialIndex={imgIdx}
                    cachedUrls={cachedUrls}
                    id={colIndex * 100 + index}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90 pointer-events-none" />
    </div>
  );
};