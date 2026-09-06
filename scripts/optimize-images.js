const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Rutas actualizadas a tu estructura del proyecto
const INPUT_DIR = path.join(__dirname, '../public/drawings');
const OUTPUT_DIR = path.join(__dirname, '../public/gallery');
const MANIFEST_PATH = path.join(__dirname, '../src/data/galleryManifest.json');

if (!fs.existsSync(INPUT_DIR)) {
  console.log(`⚠️ No se encontró la carpeta: ${INPUT_DIR}`);
  process.exit(1);
}

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function processImages() {
  try {
    const files = fs.readdirSync(INPUT_DIR).filter(file => 
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    );

    if (files.length === 0) {
      console.log('⚠️ No hay imágenes dentro de public/drawings/');
      return;
    }

    console.log(`🎨 Procesando ${files.length} imágenes desde public/drawings a .webp...`);

    // Limpiar carpeta destino public/gallery
    const oldFiles = fs.readdirSync(OUTPUT_DIR);
    for (const file of oldFiles) {
      fs.unlinkSync(path.join(OUTPUT_DIR, file));
    }

    // Convertir y numerar secuencialmente: 0.webp, 1.webp...
    for (let i = 0; i < files.length; i++) {
      const inputFile = path.join(INPUT_DIR, files[i]);
      const outputFile = path.join(OUTPUT_DIR, `${i}.webp`);

      await sharp(inputFile)
        .webp({ quality: 85 })
        .toFile(outputFile);

      console.log(`✅ [${i + 1}/${files.length}] ${files[i]} -> public/gallery/${i}.webp`);
    }

    // Guardar manifiesto
    fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
    fs.writeFileSync(
      MANIFEST_PATH, 
      JSON.stringify({ totalImages: files.length }, null, 2)
    );

    console.log(`\n🎉 Processed successfully! Manifiesto generado con ${files.length} imágenes en src/data/galleryManifest.json`);

  } catch (error) {
    console.error('❌ Error optimizando las imágenes:', error);
  }
}

processImages();