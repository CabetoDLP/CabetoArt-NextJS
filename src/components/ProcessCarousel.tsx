'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const ProcessCarousel = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      id: 'sketch',
      image: '/process/sketch.webp',
      data: t.process?.steps.sketch,
    },
    {
      id: 'drawing',
      image: '/process/drawing.webp',
      data: t.process?.steps.drawing,
    },
    {
      id: 'flatcolor',
      image: '/process/flatcolor.webp',
      data: t.process?.steps.flatcolor,
    },
    {
      id: 'fullcolor',
      image: '/process/fullcolor.webp',
      data: t.process?.steps.fullcolor,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full max-w-5xl flex flex-col items-center gap-8 py-8 my-4">
      {/* Encabezado */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-black tracking-wider border-b border-neutral-800 pb-2">
          {t.process?.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">
          {t.process?.subtitle}
        </p>
      </div>

      {/* Contenedor del Carrusel 3D */}
      <div className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center perspective-[1000px]">
        {steps.map((step, index) => {
          const offset = index - activeIndex;
          const isActive = index === activeIndex;

          let transform = '';
          let opacity = 0;
          let zIndex = 0;
          let filter = '';

          if (isActive) {
            transform = 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)';
            opacity = 1;
            zIndex = 30;
            filter = 'brightness(1) contrast(1)';
          } else if (offset === 1 || offset === -(steps.length - 1)) {
            transform = 'translateX(65%) translateZ(-150px) rotateY(-25deg) scale(0.85)';
            opacity = 0.45;
            zIndex = 20;
            filter = 'brightness(0.7) blur(0.5px)';
          } else if (offset === -1 || offset === steps.length - 1) {
            transform = 'translateX(-65%) translateZ(-150px) rotateY(25deg) scale(0.85)';
            opacity = 0.45;
            zIndex = 20;
            filter = 'brightness(0.7) blur(0.5px)';
          } else {
            transform = 'translateX(0%) translateZ(-300px) scale(0.7)';
            opacity = 0;
            zIndex = 10;
            filter = 'brightness(0)';
          }

          return (
            <div
              key={step.id}
              onClick={() => setActiveIndex(index)}
              style={{
                transform,
                opacity,
                zIndex,
                filter,
              }}
              className={`absolute w-[240px] sm:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden border-2 bg-neutral-950 transition-all duration-500 ease-out cursor-pointer group select-none ${
                isActive
                  ? 'border-[#ff4757] shadow-[0_0_30px_rgba(255,71,87,0.4)]'
                  : 'border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
              }`}
            >
              <img
                src={step.image}
                alt={step.data?.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />

              {/* Información overlay: solo sombreado mínimo en la parte inferior para legibilidad del texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff4757] bg-[#ff4757]/10 border border-[#ff4757]/30 px-2 py-0.5 rounded-full w-fit mb-1 backdrop-blur-sm">
                  {step.data?.tag}
                </span>
                <h3 className="text-base font-bold text-white drop-shadow-md">{step.data?.title}</h3>
                <p className="text-xs text-gray-200 mt-1 line-clamp-2 drop-shadow-sm font-medium">
                  {step.data?.description}
                </p>
              </div>
            </div>
          );
        })}

        {/* Controles de Navegación */}
        <button
          onClick={handlePrev}
          aria-label="Previous step"
          className="absolute left-2 sm:left-6 z-40 bg-neutral-900/90 hover:bg-[#ff4757] text-white p-3 rounded-full border border-neutral-700 transition-colors shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          aria-label="Next step"
          className="absolute right-2 sm:right-6 z-40 bg-neutral-900/90 hover:bg-[#ff4757] text-white p-3 rounded-full border border-neutral-700 transition-colors shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicadores en Puntos (Dots) */}
      <div className="flex gap-2">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'w-8 bg-[#ff4757]' : 'w-2.5 bg-neutral-700 hover:bg-neutral-500'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};