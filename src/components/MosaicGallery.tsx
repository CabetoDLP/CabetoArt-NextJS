'use client';

import { useState, useEffect } from 'react';
import { ImageContainer } from './ImageContainer';
import galleryManifest from '@/data/galleryManifest.json';

export const MosaicGallery = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    const total = galleryManifest.totalImages; // 154
    if (!total) return;

    // Crear array numérico ["1.webp", "2.webp", ..., "154.webp"]
    const allImages = Array.from({ length: total }, (_, i) => `${i + 1}.webp`);

    // Seleccionar 20 imágenes aleatorias para el fondo del hero
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    setSelectedImages(shuffled.slice(0, 20));
  }, []);

  if (selectedImages.length === 0) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-black">
      <div className="flex flex-row w-full h-full justify-between items-center px-1 sm:px-2">
        {[0, 1, 2, 3].map((colIndex) => {
          const columnImages = selectedImages.slice(colIndex * 5, (colIndex + 1) * 5);

          return (
            <div key={colIndex} className="overflow-hidden h-screen w-1/4 px-1 sm:px-2">
              <div className="animate-scroll-y flex flex-col w-full">
                {[...columnImages, ...columnImages].map((imgName, index) => (
                  <ImageContainer
                    key={`${colIndex}-${index}`}
                    imageName={imgName}
                    totalImages={galleryManifest.totalImages}
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