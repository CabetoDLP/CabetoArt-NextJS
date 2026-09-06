'use client';

import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlowCard = ({
  children,
  className = '',
  glowColor = 'from-[#ff4757] via-[#ff6b81] to-[#ff4757]',
}: GlowCardProps) => {
  return (
    <div className={`relative p-[1.5px] rounded-2xl overflow-hidden group ${className}`}>
      {/* Luz animada de fondo que gira detrás del borde */}
      <div className="absolute inset-[-100%] animate-glow-border pointer-events-none">
        <div
          className={`w-full h-full bg-conic ${glowColor} opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500`}
          style={{
            backgroundImage: `conic-gradient(from 0deg, #ff4757, #ff6b81, #ffa502, #ff4757)`,
          }}
        />
      </div>

      {/* Capa de borde fino con el mismo gradiente para mantener nitidez */}
      <div className="absolute inset-0 rounded-2xl p-[1.5px] pointer-events-none">
        <div
          className="w-full h-full rounded-2xl"
          style={{
            background: `conic-gradient(from 0deg, #ff4757, #ff6b81, #ffa502, #ff4757)`,
          }}
        />
      </div>

      {/* Contenido interno con fondo opaco que cubre el centro */}
      <div className="relative h-full w-full bg-neutral-900/95 backdrop-blur-md rounded-2xl z-10">
        {children}
      </div>
    </div>
  );
};