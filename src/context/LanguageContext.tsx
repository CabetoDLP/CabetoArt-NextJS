'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';
import { translations, Language } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations['es'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // useMemo asegura que 't' y el objeto del contexto se reevalúen y fuercen el re-render de los componentes suscritos
  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}

      {/* BOTÓN FLOTANTE DE CAMBIO DE IDIOMA */}
      <button
        onClick={toggleLanguage}
        type="button"
        className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-neutral-900/90 hover:bg-neutral-800 backdrop-blur-md border border-neutral-700 hover:border-[#ff4757] text-white px-3.5 py-2 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Toggle Language"
      >
        <img
          src="/icons/translate.svg"
          alt="Translate Icon"
          className="w-5 h-5 filter invert"
          onError={(e) => {
            // Fallback visual si el icono SVG no existe en /public/icons/
            e.currentTarget.style.display = 'none';
          }}
        />
        <span className="text-xs font-bold uppercase tracking-wider">
          {language === 'es' ? 'EN' : 'ES'}
        </span>
      </button>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};