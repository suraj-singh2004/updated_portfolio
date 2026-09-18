#!/usr/bin/env node
/**
 * Resize + compress your hero photograph for the web, then place it where
 * the site picks it up automatically.
 *
 *   node scripts/optimize-photo.mjs ~/Downloads/my-photo.jpg
 *
 * Output: src/assets/portrait/suraj.jpg  (≈1000 px wide, JPEG q80, EXIF
 * orientation applied, metadata stripped — typically 120–250 KB).
 *
 * Requires the `sharp` package once:  npm i -D sharp
 */
import { existsSync, mkdirSync, readdirSync, statSync, unlinkSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "src", "assets", "portrait");
const outFile = join(outDir, "suraj.jpg");
const input = process.argv[2];

if (!input) {
  console.error("Usage: node scripts/optimize-photo.mjs <path-to-your-photo>");
  process.exit(1);
}
if (!existsSync(input)) {
  console.error(`File not found: ${input}`);
  process.exit(1);
}

let sharp;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  console.error("`sharp` is not installed. Run:  npm i -D sharp   then try again.");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

// Remove any previous image so only one file is picked up by the site.
for (const f of readdirSync(outDir)) {
  if (/\.(jpe?g|png|webp|avif)$/i.test(f)) unlinkSync(join(outDir, f));
}

const before = statSync(input).size;

await sharp(input)
  .rotate() // apply EXIF orientation from phone cameras
  .resize({ width: 1000, withoutEnlargement: true })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(outFile);

const after = statSync(outFile).size;
const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

console.log(`✓ ${basename(input)}  ${kb(before)}  →  src/assets/portrait/suraj.jpg  ${kb(after)}`);
console.log("  Now run `npm run build` (or `npm run dev`) — the hero picks it up automatically.");
