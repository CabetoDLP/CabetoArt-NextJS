'use client';

import { useState, useEffect } from 'react';

export const usePrecachedGallery = (totalImages: number) => {
  const [cachedUrls, setCachedUrls] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!totalImages) return;

    let isMounted = true;

    const preloadAllImages = async () => {
      try {
        const promises = Array.from({ length: totalImages }, async (_, i) => {
          const response = await fetch(`/gallery/${i}.webp`);
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        });

        const urls = await Promise.all(promises);

        if (isMounted) {
          setCachedUrls(urls);
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Error precargando la galería:', error);
      }
    };

    preloadAllImages();

    return () => {
      isMounted = false;
      // Limpiar memoria si el componente se desmonta
      cachedUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [totalImages]);

  return { cachedUrls, isLoaded };
};