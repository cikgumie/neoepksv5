/**
 * ============================================================================
 * PANDUAN PENGURUSAN VIDEO TUTORIAL NEO ePKS v5
 * ============================================================================
 * Fail ini mengandungi data 10 video tutorial untuk sistem Neo ePKS v5.
 * 
 * CARA MENGEMASKINI KEPADA VIDEO YOUTUBE SEBENAR:
 * 1. Dapatkan ID video YouTube anda:
 *    Contoh URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
 *    ID video adalah: dQw4w9WgXcQ
 * 
 * 2. Gantikan nilai `youtubeId: "..."` pada senarai tutorial di bawah.
 * 3. Anda juga boleh mengubah `title`, `duration`, `description`, atau `topics` mengikut keperluan.
 * ============================================================================
 */

export type TutorialCategory =
  | "Semua"
  | "Persediaan & Setup"
  | "Pengurusan Unit"
  | "Kehadiran & Aktiviti"
  | "Laporan & Cetakan"
  | "PAJSK & Analitik"

export interface TutorialVideo {
  id: string
  order: number
  title: string
  description: string
  youtubeId: string // ID video YouTube (boleh ditukar kepada video sebenar nanti)
  duration: string
  category: Exclude<TutorialCategory, "Semua">
  targetAudience: "Semua Guru" | "Guru Penasihat" | "Penyelaras Kokurikulum" | "Pentadbir Sekolah"
  topics: string[]
  isFeatured?: boolean
}

export const TUTORIAL_CATEGORIES: TutorialCategory[] = [
  "Semua",
  "Persediaan & Setup",
  "Pengurusan Unit",
  "Kehadiran & Aktiviti",
  "Laporan & Cetakan",
  "PAJSK & Analitik"
]

export const TUTORIAL_VIDEOS: TutorialVideo[] = [
  {
    id: "tutorial-01",
    order: 1,
    title: "Tutorial 1: Panduan Persediaan Awal & Kebenaran Google Drive",
    description:
      "Langkah pertama selepas mendapatkan sistem — cara membuat salinan pangkalan data Google Sheets, menetapkan kebenaran Google Apps Script dan memasukkan maklumat rasmi sekolah.",
    youtubeId: "M7lc1UVf-VE", // Dummy ID: YouTube Player API demo
    duration: "05:30",
    category: "Persediaan & Setup",
    targetAudience: "Pentadbir Sekolah",
    topics: [
      "Membuat 'Make a Copy' pangkalan data",
      "Kebenaran keselamatan akaun Google (Authorization)",
      "Tetapan nama sekolah, kod sekolah dan sesi persekolahan"
    ],
    isFeatured: true
  },
  {
    id: "tutorial-02",
    order: 2,
    title: "Tutorial 2: Konfigurasi Data Induk Guru & Import Senarai Murid APDM",
    description:
      "Cara mengimport data murid daripada sistem APDM KPM ke dalam jadual induk dan menyelaraskan senarai guru penasihat mengikut tingkatan dan kelas.",
    youtubeId: "dQw4w9WgXcQ", // Dummy ID
    duration: "07:15",
    category: "Persediaan & Setup",
    targetAudience: "Penyelaras Kokurikulum",
    topics: [
      "Salin & tampal data murid dari format APDM",
      "Validasi nombor kad pengenalan dan jantina",
      "Penyelarasan kelas dan guru tingkatan"
    ]
  },
  {
    id: "tutorial-03",
    order: 3,
    title: "Tutorial 3: Pendaftaran Ahli & Penetapan Jawatan Unit Kokurikulum",
    description:
      "Panduan memasukkan murid ke dalam 3 unit utama (Kelab/Persatuan, Badan Beruniform, Sukan/Permainan) serta lantikan jawatankuasa murid seperti Pengerusi dan Setiausaha.",
    youtubeId: "L_LUpnjgPso", // Dummy ID
    duration: "06:40",
    category: "Pengurusan Unit",
    targetAudience: "Guru Penasihat",
    topics: [
      "Pendaftaran automatik 3 unit setiap murid",
      "Pemilihan jawatan (Pengerusi, Naib, AJK)",
      "Pemarkahan automatik jawatan untuk markah PAJSK"
    ]
  },
  {
    id: "tutorial-04",
    order: 4,
    title: "Tutorial 4: Menjana Carta Organisasi Unit & Senarai Keahlian",
    description:
      "Cara memaparkan carta organisasi hierarki murid secara automatik untuk setiap unit dan mengeksport format visual untuk papan kenyataan kokurikulum.",
    youtubeId: "9bZkp7q19f0", // Dummy ID
    duration: "04:50",
    category: "Pengurusan Unit",
    targetAudience: "Guru Penasihat",
    topics: [
      "Paparan carta organisasi interaktif",
      "Penapisan senarai ahli mengikut tingkatan",
      "Fungsi cetak senarai ahli & fail unit"
    ]
  },
  {
    id: "tutorial-05",
    order: 5,
    title: "Tutorial 5: Merekod Kehadiran Mingguan Menggunakan Telefon & Komputer",
    description:
      "Cara pantas guru penasihat menanda kehadiran perjumpaan mingguan ahli di padang atau kelas dengan carian nama pintar tanpa perlu menaip berulang kali.",
    youtubeId: "jNQXAC9IVRw", // Dummy ID
    duration: "08:10",
    category: "Kehadiran & Aktiviti",
    targetAudience: "Guru Penasihat",
    topics: [
      "Navigasi mod mobil telefon pintar",
      "Carian pantas nama atau no. kad pengenalan",
      "Simpan kehadiran dan semakan peratusan serta-merta"
    ]
  },
  {
    id: "tutorial-06",
    order: 6,
    title: "Tutorial 6: Catatan Laporan Aktiviti Mingguan & Muat Naik Foto ke Drive",
    description:
      "Panduan memasukkan ringkasan tajuk aktiviti, kemahiran dipelajari, refleksi guru dan lampiran gambar aktiviti yang dimampatkan secara automatik ke Google Drive.",
    youtubeId: "fJ9rUzIMcZQ", // Dummy ID
    duration: "06:20",
    category: "Kehadiran & Aktiviti",
    targetAudience: "Guru Penasihat",
    topics: [
      "Perekodan ringkasan aktiviti mingguan",
      "Muat naik gambar tanpa membebankan storan",
      "Penetapan status laporan (Lengkap / Perlu Kemas Kini)"
    ]
  },
  {
    id: "tutorial-07",
    order: 7,
    title: "Tutorial 7: Menjana & Mencetak Laporan Perjumpaan Format A4 Rasmi",
    description:
      "Cara satu klik untuk menjana lembaran laporan perjumpaan mingguan standard A4 lengkap dengan analisis kehadiran, foto berwarna, dan ruang tandatangan pengesahan.",
    youtubeId: "kXYiU_JCYtU", // Dummy ID
    duration: "05:45",
    category: "Laporan & Cetakan",
    targetAudience: "Guru Penasihat",
    topics: [
      "Penjanaan templat rasmi A4 KPM",
      "Susun atur foto aktiviti automatik",
      "Cetak terus atau muat turun fail PDF"
    ]
  },
  {
    id: "tutorial-08",
    order: 8,
    title: "Tutorial 8: Pengurusan Program Sekolah & Buku Rekod Peristiwa",
    description:
      "Pengurusan acara peringkat sekolah seperti Kejohanan Merentas Desa, Hari Sukan Tahunan, dan Perkhemahan Bersepadu untuk kompilasi laporan menyeluruh.",
    youtubeId: "kJQP7kiw5Fk", // Dummy ID
    duration: "07:00",
    category: "Laporan & Cetakan",
    targetAudience: "Penyelaras Kokurikulum",
    topics: [
      "Daftar program sekolah & tarikh pelaksanaan",
      "Rekod penglibatan dan pemenang",
      "Kompilasi laporan peristiwa tahunan"
    ]
  },
  {
    id: "tutorial-09",
    order: 9,
    title: "Tutorial 9: Formula Pentaksiran PAJSK & Markah Ekstrakurikulum",
    description:
      "Memahami pengiraan markah PAJSK secara automatik berdasarkan formula rasmi (Kehadiran 50%, Jawatan 10%, Penglibatan 20%, Prestasi 20%) serta bonus ekstrakurikulum.",
    youtubeId: "OPf0YbXqDm0", // Dummy ID
    duration: "09:15",
    category: "PAJSK & Analitik",
    targetAudience: "Semua Guru",
    topics: [
      "Skema pemarkahan PAJSK terkini KPM",
      "Pengiraan automatik gred A, B, C, D, E",
      "Pengesanan murid yang berisiko markah rendah"
    ]
  },
  {
    id: "tutorial-10",
    order: 10,
    title: "Tutorial 10: Pemantauan Dashboard Penyelaras & Eksport Audit Sekolah",
    description:
      "Panduan untuk Penyelaras Kokurikulum dan Pentadbir menyemak statistik peratus penglibatan, kelengkapan fail setiap unit, dan eksport data untuk semakan JPN/PPD.",
    youtubeId: "3JZ_D3ELwOQ", // Dummy ID
    duration: "06:30",
    category: "PAJSK & Analitik",
    targetAudience: "Pentadbir Sekolah",
    topics: [
      "Analitik dashboard masa nyata",
      "Audit kelengkapan fail dan laporan mingguan",
      "Eksport data rumusan sekolah ke format Excel/Sheets"
    ]
  }
]

export function getYoutubeEmbedUrl(youtubeId: string, autoplay = false): string {
  const cleanId = youtubeId.trim()
  return `https://www.youtube-nocookie.com/embed/${cleanId}?rel=0&modestbranding=1${autoplay ? "&autoplay=1" : ""}`
}

export function getYoutubeThumbnailUrl(youtubeId: string): string {
  const cleanId = youtubeId.trim()
  return `https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`
}
