'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GalleryModal } from '@/components/GalleryModal';
import galleryManifest from '@/data/galleryManifest.json';
import { ProcessCarousel } from '@/components/ProcessCarousel';

export const ProfileSection = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Mapeo dinámico usando las traducciones del contexto
  const catalogItems = Array.from({ length: galleryManifest.totalImages }, (_, index) => ({
    id: String(index),
    src: `/gallery/${index}.webp`,
    title: `${t.gallery.itemTitle} ${index + 1}`,
    category: t.gallery.category,
  }));

  const openModal = (index = 0) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="relative z-10 w-full min-h-screen px-4 py-12 flex flex-col items-center justify-start text-white gap-12">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-2xl flex flex-col items-center text-center gap-4">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#ff4757] shadow-[0_0_25px_rgba(255,71,87,0.5)]">
          <img
            src="/profile/cabetoart.webp"
            alt="CabetoArt Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-wider drop-shadow-lg">
          CABETO.ART
        </h1>

        <p className="text-gray-200 text-sm sm:text-base max-w-md font-medium">
          {t.hero.tagline}
        </p>

        <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {t.hero.status}
        </span>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <a
            href="https://vgen.co/cabeto_art"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#ff4757] to-[#ff6b81] hover:scale-105 active:scale-95 transition-transform duration-200 text-white font-bold px-7 py-3 rounded-full shadow-[0_4px_20px_rgba(255,71,87,0.4)] text-sm"
          >
            {t.hero.cta}
          </a>

          <button
            onClick={() => openModal(0)}
            className="bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-[#ff4757] transition-all duration-200 text-white font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95"
          >
            <span>🎨</span> {t.hero.viewCatalog} ({catalogItems.length})
          </button>
        </div>

        {/* REDES SOCIALES */}
        <div className="flex gap-4 mt-2">
          <a
            href="https://www.tiktok.com/@cabeto.art/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-[#ff4757] transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/cabeto.art/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-xl hover:border-[#ff4757] transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
          </a>
        </div>
      </section>
      {/* SECCIÓN PRECIOS */}
      <section className="w-full max-w-5xl flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold border-b border-neutral-800 pb-2">
          {t.pricing.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* ICON / HEADSHOT */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between group">
            <div>
              <div
                onClick={() => openModal(12)}
                className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-neutral-800 bg-neutral-950 cursor-pointer relative group/img"
              >
                <img
                  src="/commissions/headshot.webp"
                  alt="Icon / Headshot Commission"
                  className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-xs font-semibold tracking-wider uppercase text-white">
                  {t.gallery.viewInCatalog}
                </div>
              </div>
              <h3 className="text-lg font-bold">{t.pricing.icon.title}</h3>
              <p className="text-3xl font-black text-[#ff4757] my-2">$30 <span className="text-sm font-normal text-gray-400">USD</span></p>
              <p className="text-xs text-gray-400 mb-4">{t.pricing.icon.description}</p>
              <ul className="text-xs text-gray-300 space-y-2 mb-6">
                <li>{t.pricing.icon.feat1}</li>
                <li>{t.pricing.icon.feat2}</li>
                <li>{t.pricing.icon.feat3}</li>
              </ul>
            </div>
            <a
              href="https://vgen.co/cabeto_art"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-neutral-800 hover:bg-[#ff4757] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              {t.pricing.orderBtn} Icon
            </a>
          </div>

          {/* HALF BODY */}
          <div className="bg-neutral-900/90 border-2 border-[#ff4757] rounded-2xl p-5 flex flex-col justify-between relative group shadow-[0_0_20px_rgba(255,71,87,0.2)]">
            <span className="absolute -top-3 right-4 bg-[#ff4757] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10 shadow-md">
              {t.pricing.mostRequested}
            </span>
            <div>
              <div
                onClick={() => openModal(55)}
                className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-neutral-800 bg-neutral-950 cursor-pointer relative group/img"
              >
                <img
                  src="/commissions/halfbody.webp"
                  alt="Half Body Commission"
                  className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-xs font-semibold tracking-wider uppercase text-white">
                  {t.gallery.viewInCatalog}
                </div>
              </div>
              <h3 className="text-lg font-bold">{t.pricing.halfBody.title}</h3>
              <p className="text-3xl font-black text-[#ff4757] my-2">$60 <span className="text-sm font-normal text-gray-400">USD</span></p>
              <p className="text-xs text-gray-400 mb-4">{t.pricing.halfBody.description}</p>
              <ul className="text-xs text-gray-300 space-y-2 mb-6">
                <li>{t.pricing.halfBody.feat1}</li>
                <li>{t.pricing.halfBody.feat2}</li>
                <li>{t.pricing.halfBody.feat3}</li>
              </ul>
            </div>
            <a
              href="https://vgen.co/cabeto_art"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#ff4757] hover:bg-[#ff6b81] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-lg"
            >
              {t.pricing.orderBtn} Half Body
            </a>
          </div>

          {/* FULL BODY */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between group">
            <div>
              <div
                onClick={() => openModal(27)}
                className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-neutral-800 bg-neutral-950 cursor-pointer relative group/img"
              >
                <img
                  src="/commissions/fullbody.webp"
                  alt="Full Body Commission"
                  className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-xs font-semibold tracking-wider uppercase text-white">
                  {t.gallery.viewInCatalog}
                </div>
              </div>
              <h3 className="text-lg font-bold">{t.pricing.fullBody.title}</h3>
              <p className="text-3xl font-black text-[#ff4757] my-2">$90 <span className="text-sm font-normal text-gray-400">USD</span></p>
              <p className="text-xs text-gray-400 mb-4">{t.pricing.fullBody.description}</p>
              <ul className="text-xs text-gray-300 space-y-2 mb-6">
                <li>{t.pricing.fullBody.feat1}</li>
                <li>{t.pricing.fullBody.feat2}</li>
                <li>{t.pricing.fullBody.feat3}</li>
              </ul>
            </div>
            <a
              href="https://vgen.co/cabeto_art"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-neutral-800 hover:bg-[#ff4757] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              {t.pricing.orderBtn} Full Body
            </a>
          </div>
        </div>
      </section>
      <ProcessCarousel />
      {/* TÉRMINOS Y CONDICIONES (ToS) */}
      <section className="w-full max-w-3xl bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 text-center">
        <h3 className="font-bold text-base mb-4">{t.tos.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-400">
          <div>
            <p className="font-semibold text-white mb-1">{t.tos.deliveryTitle}</p>
            <p>{t.tos.deliveryDesc}</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">{t.tos.revisionsTitle}</p>
            <p>{t.tos.revisionsDesc}</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">{t.tos.paymentsTitle}</p>
            <p>{t.tos.paymentsDesc}</p>
          </div>
        </div>
      </section>
      {/* MODAL DE GALERÍA */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={catalogItems}
        initialIndex={selectedIndex}
      />
    </div>
  );
};