# Neo ePKS — landing page

Landing page Bahasa Melayu untuk memperkenalkan fungsi pengurusan kokurikulum kepada warga sekolah.

## Jalankan secara lokal

```sh
npm ci
npm run dev
```

Buka http://localhost:3000. Semakan projek:

```sh
npm run lint
npm run typecheck
npm run build
```

## Kandungan dan interaksi

- Hero menggunakan screenshot dashboard sebenar.
- Enam penerangan fungsi, galeri enam paparan, aliran kerja dan penerangan tiga peranan.
- Galeri menyokong papan kekunci (anak panah, Home, End), pembesaran gambar melalui dialog, dan tutup dengan Escape.
- Menu telefon, FAQ boleh dibuka, fokus papan kekunci dan reduced motion.
- Tiada borang pendaftaran atau pautan akses rekaan. CTA membuka penerangan sistem; akses dirujuk kepada pentadbir sekolah.

## Fail utama

- `app/page.tsx`: kandungan dan interaksi.
- `app/globals.css`: reka bentuk dan breakpoint responsif.
- `app/layout.tsx`: bahasa dan metadata.
- `public/screenshots/`: salinan screenshot untuk laman. Fail asal dalam `Gambar NeoEPKS/` dikekalkan.

Konfigurasi sedia ada mengeksport laman statik ke `out/` dengan base path `/neoepksv5` bagi production/GitHub Pages. `NEXT_PUBLIC_BASE_PATH` ditetapkan oleh `next.config.ts` supaya screenshot mengikuti base path yang sama. Untuk hosting pada domain root, kemas kini kedua-dua tetapan bersama.
