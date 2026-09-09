// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import galleryManifest from '@/data/galleryManifest.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cabeto-art.vercel.app';
  const totalImages = galleryManifest.totalImages; // 154

  // Generar lista de URLs de imágenes
  const imageUrls = Array.from({ length: totalImages }, (_, i) => ({
    url: `${baseUrl}/gallery/${i + 1}`, // Si tienes rutas individuales, o la URL principal
    lastModified: new Date(),
    // Extensión de imágenes en Next.js Metadata
    images: [`${baseUrl}/gallery/${i + 1}.webp`], 
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...imageUrls,
  ];
}