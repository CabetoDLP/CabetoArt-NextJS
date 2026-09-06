'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/context/LanguageContext';

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryItem[];
  initialIndex?: number;
}

export const GalleryModal = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
}: GalleryModalProps) => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0 || !mounted) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const activeImage = images[currentIndex];

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-opacity duration-300">
      {/* Botón de cierre */}
      <button
        onClick={onClose}
        aria-label={language === 'es' ? 'Cerrar galería' : 'Close gallery'}
        className="absolute top-5 right-5 text-neutral-400 hover:text-white bg-neutral-900/90 p-3 rounded-full border border-neutral-700 transition-colors z-[100000]"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Botón Anterior */}
      {images.length > 1 && (
        <button
          onClick={handlePrev}
          aria-label={language === 'es' ? 'Imagen anterior' : 'Previous image'}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-900/80 hover:bg-[#ff4757] text-white p-3 rounded-full border border-neutral-700 transition-colors z-[100000]"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Contenido Modal HD */}
      <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center gap-3">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 flex items-center justify-center max-h-[75vh]">
          <img
            src={activeImage.src}
            alt={activeImage.title}
            className="w-auto h-auto max-w-full max-h-[75vh] object-contain shadow-2xl transition-all duration-300"
          />
        </div>

        {/* Información de la ilustración */}
        <div className="text-center text-white">
          <span className="text-xs uppercase tracking-widest text-[#ff4757] font-semibold">
            {t.gallery?.category || activeImage.category}
          </span>
          <h3 className="text-lg font-bold">
            {t.gallery?.itemTitle ? `${t.gallery.itemTitle} ${currentIndex + 1}` : activeImage.title}
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>

      {/* Botón Siguiente */}
      {images.length > 1 && (
        <button
          onClick={handleNext}
          aria-label={language === 'es' ? 'Siguiente imagen' : 'Next image'}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-900/80 hover:bg-[#ff4757] text-white p-3 rounded-full border border-neutral-700 transition-colors z-[100000]"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>,
    document.body
  );
};