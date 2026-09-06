'use client';

import { useEffect, useState, useRef } from 'react';

interface ImageContainerProps {
  initialIndex: number;
  cachedUrls: string[];
  id: number;
}

export const ImageContainer = ({
  initialIndex,
  cachedUrls,
  id,
}: ImageContainerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [rotation, setRotation] = useState(0);

  const usedIndicesRef = useRef<Set<number>>(new Set([initialIndex]));

  useEffect(() => {
    if (!cachedUrls.length) return;

    let timeoutId: NodeJS.Timeout;
    let flipTimeoutId: NodeJS.Timeout;

    const startFlipCycle = () => {
      const randomDelay = Math.random() * 8000 + 4000;

      timeoutId = setTimeout(() => {
        setRotation(90);

        flipTimeoutId = setTimeout(() => {
          let newIndex: number;
          const total = cachedUrls.length;

          if (usedIndicesRef.current.size >= total) {
            usedIndicesRef.current.clear();
          }

          do {
            newIndex = Math.floor(Math.random() * total);
          } while (
            usedIndicesRef.current.has(newIndex) &&
            usedIndicesRef.current.size < total
          );

          usedIndicesRef.current.add(newIndex);
          setCurrentIndex(newIndex);

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
  }, [cachedUrls.length]);

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
        src={cachedUrls[currentIndex]}
        alt="CabetoArt Drawing"
        className="w-full h-auto rounded-xl sm:rounded-2xl object-cover block"
        style={{ backfaceVisibility: 'hidden' }}
      />
    </div>
  );
};