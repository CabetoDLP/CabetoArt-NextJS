'use client';

import { useEffect, useState, useRef } from 'react';

interface ImageContainerProps {
  imageName: string;
  totalImages: number;
  id: number;
}

export const ImageContainer = ({
  imageName,
  totalImages,
  id,
}: ImageContainerProps) => {
  const [currentImage, setCurrentImage] = useState(imageName);
  const [rotation, setRotation] = useState(0);

  const usedNamesRef = useRef<Set<string>>(new Set([imageName]));

  useEffect(() => {
    if (!totalImages) return;

    let timeoutId: NodeJS.Timeout;
    let flipTimeoutId: NodeJS.Timeout;

    const startFlipCycle = () => {
      const randomDelay = Math.random() * 8000 + 6000;

      timeoutId = setTimeout(() => {
        setRotation(90);

        flipTimeoutId = setTimeout(() => {
          let newName: string;

          if (usedNamesRef.current.size >= totalImages) {
            usedNamesRef.current.clear();
          }

          do {
            const randomNum = Math.floor(Math.random() * totalImages) + 1;
            newName = `${randomNum}.webp`;
          } while (
            usedNamesRef.current.has(newName) &&
            usedNamesRef.current.size < totalImages
          );

          usedNamesRef.current.add(newName);
          setCurrentImage(newName);

          setRotation(0);
          startFlipCycle();
        }, 300);
      }, randomDelay);
    };

    startFlipCycle();

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(flipTimeoutId);
    };
  }, [totalImages]);

  return (
    <div
      id={`img-container-${id}`}
      className="relative overflow-hidden w-full my-2 sm:my-3"
      style={{
        transform: `rotateY(${rotation}deg)`,
        transition: 'transform 0.3s ease-in-out',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <img
        src={`/gallery/${currentImage}`}
        alt="CabetoArt Drawing"
        loading="lazy"
        decoding="async"
        className="w-full h-auto rounded-xl sm:rounded-2xl object-cover block"
        style={{ backfaceVisibility: 'hidden' }}
      />
    </div>
  );
};