# 🚀 Neo ePKS v5 — Sistem Pengurusan Kokurikulum Sekolah

> Laman web rasmi & sistem pendaratan (*landing page*) untuk **Neo ePKS v5**, sistem pengurusan dan pentaksiran kokurikulum sekolah (PAJSK) moden berasaskan Google Cloud & Sheets.

🔗 **Laman Web Rasmi (Live):** [https://cikgumie.github.io/neoepksv5/](https://cikgumie.github.io/neoepksv5/)

---

## 🏷️ Tawaran & Pakej Tempahan Rasmi

| Perkara | Butiran |
| :--- | :--- |
| **Harga Sebenar** | ~~RM 150~~ |
| **Harga Promosi Semasa** | **RM 100** *(Jimat RM 50 — Sekali bayar, tiada yuran bulanan tersembunyi)* |
| **Borang Tempahan** | 📝 [Klik Di Sini Untuk Borang Tempahan](https://forms.gle/wBc9N9BYVN5FZf3f9) |
| **Support Group Telegram** | 💬 [Sertai Komuniti Guru (t.me/AppSekolahMalaysia)](https://t.me/AppSekolahMalaysia) |

---

## ✨ Ciri-Ciri Utama Sistem Neo ePKS v5

- **Pengurusan 3 Unit Utama**: Kelab & Persatuan, Pasukan Badan Beruniform, serta Sukan & Permainan.
- **Kehadiran Mingguan Pantas**: Rekod perjumpaan dan kehadiran ahli dengan carian pantas tanpa lag.
- **Pengiraan Markah PAJSK & Ekstrakurikulum**: Penggredan dan pengiraan automatik selaras format Kementerian Pendidikan Malaysia (KPM).
- **Laporan & Sijil Format A4**: Penjanaan laporan perjumpaan, aktiviti, foto serta rumusan sekolah sedia untuk dicetak.
- **Paparan Responsif**: Dioptimumkan sepenuhnya untuk paparan desktop komputer mahupun telefon pintar guru.
- **Sokongan Komuniti**: Akses bimbingan berterusan melalui komuniti Telegram App Sekolah Malaysia.

---

## 🛠️ Pembangunan & Ujian Tempatan (Local Development)

### 1. Pasang Keperluan:
```sh
npm ci
```

### 2. Jalankan Server Pembangunan:
```sh
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) pada pelayar web anda.

### 3. Semakan Kod & Build:
```sh
npm run lint
npm run typecheck
npm run build
```

---

## 📁 Struktur Fail Utama

- `app/page.tsx`: Halaman utama landing page, showcase interaktif, modul tempahan dan CTA.
- `app/globals.css`: Reka bentuk tema (*Dark/Light mode*) & gaya visual.
- `app/layout.tsx`: Konfigurasi metadata SEO dan skrip sokongan.
- `public/screenshots/`: Tangkapan skrin sebenar antaramuka sistem Neo ePKS v5.

---

## 🌐 Deployment (GitHub Pages)

Projek ini dikonfigurasikan untuk dieksport secara statik (`output: 'export'`) dengan base path `/neoepksv5`. Setiap kali branch `main` menerima kemas kini (*push*), GitHub Actions akan secara automatik membina dan menerbitkan laman web terkini ke:
👉 **[https://cikgumie.github.io/neoepksv5/](https://cikgumie.github.io/neoepksv5/)**
