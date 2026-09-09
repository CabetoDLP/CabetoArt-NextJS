'use client';

import { useState, useEffect } from 'react';
import { ImageContainer } from './ImageContainer';
import galleryManifest from '@/data/galleryManifest.json';

export const MosaicGallery = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    const total = galleryManifest.totalImages;
    if (!total) return;

    const allImages = Array.from({ length: total }, (_, i) => `${i + 1}.webp`);
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    setSelectedImages(shuffled.slice(0, 20));
  }, []);

  if (selectedImages.length === 0) return null;

  return (
    // box-border previene que paddings/márgenes sumen ancho extra
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black box-border">
      {/* 
        - Eliminado w-full explícito en flex container.
        - Usamos gap-2 en lugar de px en cada columna para evitar sumas erróneas.
      */}
      <div className="flex flex-row h-full w-full justify-between items-center gap-2 px-2 box-border">
        {[0, 1, 2, 3].map((colIndex) => {
          const columnImages = selectedImages.slice(colIndex * 5, (colIndex + 1) * 5);

          return (
            // Flex 1 distribuye las columnas equitativamente sin sobrepasar el contenedor
            <div 
              key={colIndex} 
              className={`overflow-hidden h-screen flex-1 box-border`}
            >
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