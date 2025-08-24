import { readdir, mkdir, stat } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const INPUT = 'src/assets/raw';
const OUTPUT = 'src/assets/optimized';
const TARGETS = [
  { label: 'lg', width:800 },
  { label: 'sm', width:350 },
];

await mkdir(OUTPUT, { recursive: true });

for (const file of await readdir(INPUT)) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg','.jpeg','.png','.webp','.avif'].includes(ext)) continue;

  const base = path.basename(file, ext);
  const inputPath = path.join(INPUT, file);

  const meta = await sharp(inputPath).metadata();
  for (const t of TARGETS) {
    if (meta.width && meta.width < t.width) continue;
    const pipeline = sharp(inputPath)
      .resize({ width: t.width, withoutEnlargement: true })
      .rotate()
      .withMetadata({ orientation: undefined }); // odstráni EXIF orientáciu

    // AVIF
    await pipeline
      .avif({ quality: 45, effort: 4 })
      .toFile(path.join(OUTPUT, `${base}-${t.label}.avif`));
  }
}
console.log('Hotovo.');