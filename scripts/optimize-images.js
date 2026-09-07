const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Rutas a las carpetas del proyecto
const INPUT_DIR = path.join(__dirname, '../public/drawings');
const OUTPUT_DIR = path.join(__dirname, '../public/gallery');
const MANIFEST_PATH = path.join(__dirname, '../src/data/galleryManifest.json');

if (!fs.existsSync(INPUT_DIR)) {
  console.log(`⚠️ No se encontró la carpeta de origen: ${INPUT_DIR}`);
  process.exit(1);
}

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function processImages() {
  try {
    // 1. Obtener archivos y ordenarlos alfanuméricamente para preservar la secuencia exacta
    const files = fs
      .readdirSync(INPUT_DIR)
      .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    if (files.length === 0) {
      console.log('⚠️ No hay imágenes dentro de public/drawings/');
      return;
    }

    console.log(`🎨 Procesando ${files.length} imágenes manteniendo nombres originales...`);

    // 2. Limpiar la carpeta destino public/gallery
    const oldFiles = fs.readdirSync(OUTPUT_DIR);
    for (const file of oldFiles) {
      fs.unlinkSync(path.join(OUTPUT_DIR, file));
    }

    const processedFiles = [];

    // 3. Convertir y optimizar conservando el nombre de cada archivo
    for (let i = 0; i < files.length; i++) {
      const originalFile = files[i];
      const filenameWithoutExt = path.parse(originalFile).name;
      const outputFilename = `${filenameWithoutExt}.webp`;

      const inputFile = path.join(INPUT_DIR, originalFile);
      const outputFile = path.join(OUTPUT_DIR, outputFilename);

      await sharp(inputFile)
        .resize({
          width: 800, // Dimensión óptima para la grilla (equivalente a w_800 de Cloudinary)
          withoutEnlargement: true,
        })
        .webp({
          quality: 80,          // Balance perfecto entre calidad gráfica y peso reducido
          effort: 6,           // Máximo esfuerzo de compresión en CPU (0-6)
          smartSubsample: true, // Preserva gradientes y tonos en ilustraciones digitales
          chromaSubsampling: '4:2:0',
        })
        .toFile(outputFile);

      processedFiles.push(outputFilename);
      console.log(`✅ [${i + 1}/${files.length}] ${originalFile} -> public/gallery/${outputFilename}`);
    }

    // 4. Guardar manifiesto con el total y el listado ordenado de archivos
    fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
    fs.writeFileSync(
      MANIFEST_PATH,
      JSON.stringify({ totalImages: processedFiles.length }, null, 2)
    );

    console.log(
      `\n🎉 ¡Proceso completado! Se optimizaron ${processedFiles.length} imágenes en public/gallery/`
    );
  } catch (error) {
    console.error('❌ Error optimizando las imágenes:', error);
  }
}

processImages();