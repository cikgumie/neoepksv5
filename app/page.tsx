import type { ReactNode } from "react"

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarCheck,
  CalendarDays,
  Check,
  ClipboardList,
  Clock,
  Download,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* ============================================================================
   ePKS — Landing Page Promosi (Pengurusan Kokurikulum Sekolah)
   Fokus: fungsi & manfaat kepada pengguna akhir (bukan teknikal).
   Imej: dummy images (Unsplash).
   ========================================================================== */

const NAV_LINKS = [
  { label: "Fungsi", href: "#fungsi" },
  { label: "Aliran Kerja", href: "#aliran" },
  { label: "Untuk Siapa", href: "#untuk-siapa" },
  { label: "Testimoni", href: "#testimoni" },
]

const HERO_STATS = [
  { value: "8", label: "Modul Utama" },
  { value: "100%", label: "Digital, Tanpa Kertas" },
  { value: "2-dalam-1", label: "Web + Desktop App" },
]

const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Utama",
    desc: "Lihat keseluruhan status kokurikulum sekolah dalam satu pandangan — bilangan murid, unit, kelab, sukan dan kehadiran terkini.",
  },
  {
    icon: ClipboardList,
    title: "Laporan Perjumpaan",
    desc: "Rekod setiap perjumpaan unit, kelab dan pasukan sukan dengan kemas. Semak semula dan analisis aktiviti mingguan dengan mudah.",
  },
  {
    icon: CalendarCheck,
    title: "Kehadiran Perjumpaan",
    desc: "Tandakan kehadiran murid dalam beberapa saat sahaja. Pantau corak kehadiran dan kenal pasti murid yang memerlukan perhatian.",
  },
  {
    icon: CalendarDays,
    title: "Program & Aktiviti",
    desc: "Rancang program, jejaki pelaksanaan dan lengkapkan laporan aktiviti dari mula sehingga selesai.",
  },
  {
    icon: Sparkles,
    title: "Ekstra Kurikulum",
    desc: "Kelola semua unit beruniform, kelab & persatuan, sukan & permainan serta rumah sukan dalam satu tempat.",
  },
  {
    icon: BadgeCheck,
    title: "Jawatan Unit",
    desc: "Urus jawatan kepimpinan murid — dari pengerusi hingga ahli jawatankuasa — dengan rekod yang tersusun.",
  },
  {
    icon: Trophy,
    title: "Pencapaian Murid",
    desc: "Rekod setiap pencapaian murid dan jana rumusan serta profil pencapaian secara automatik.",
  },
  {
    icon: BarChart3,
    title: "Laporan & Analisis",
    desc: "Jana laporan dan analisis kehadiran serta pencapaian untuk memudahkan penilaian dan dokumentasi rasmi.",
  },
]

const ROLES = [
  {
    icon: Users,
    title: "Guru Penyelaras Kokurikulum",
    desc: "Pantau keseluruhan aktiviti, selaraskan unit dan jana laporan untuk pihak pentadbir tanpa kerja manual.",
  },
  {
    icon: ClipboardList,
    title: "Guru Penasihat Unit / Kelab",
    desc: "Rekod kehadiran dan perjumpaan unit anda sendiri, terus dari web atau desktop di bilik guru.",
  },
  {
    icon: ShieldCheck,
    title: "Pentadbir Sekolah",
    desc: "Dapatkan gambaran penuh kokurikulum dan laporan rasmi dengan cepat untuk semakan dan audit.",
  },
  {
    icon: GraduationCap,
    title: "Murid & Ibu Bapa",
    desc: "Semak aktiviti dan pencapaian kokurikulum melalui mod paparan yang ringkas dan mudah difahami.",
  },
]

const STEPS = [
  {
    no: "01",
    title: "Log Masuk",
    desc: "Guru log masuk dengan akaun Google atau kata laluan sedia ada. Tiada pemasangan yang rumit.",
  },
  {
    no: "02",
    title: "Rekod & Urus",
    desc: "Rekod kehadiran, perjumpaan, program, jawatan dan pencapaian murid dalam satu platform.",
  },
  {
    no: "03",
    title: "Jana Laporan",
    desc: "Dapatkan laporan, analisis dan rumusan yang siap untuk semakan serta dokumentasi sekolah.",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "Selepas menggunakan ePKS, kerja merekod kehadiran dan perjumpaan jadi jauh lebih pantas. Laporan juga terhasil dengan sendirinya.",
    name: "Puan Aisyah",
    role: "Guru Penyelaras Kokurikulum",
  },
  {
    quote:
      "Saya boleh semak laporan unit saya dari desktop di bilik guru tanpa perlu buku rekod fizikal lagi.",
    name: "Cikgu Farid",
    role: "Guru Penasihat Kelab",
  },
  {
    quote:
      "Semua data kokurikulum murid ada dalam satu tempat. Sangat memudahkan semakan dan dokumentasi sekolah.",
    name: "En. Rahman",
    role: "Penolong Kanan Kokurikulum",
  },
]

/* --------------------------------- Helper UI -------------------------------- */

function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-300">
      <Sparkles className="size-3.5" />
      {children}
    </span>
  )
}

function DummyImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn("h-full w-full object-cover", className)}
    />
  )
}

/* ------------------------------- Hero Mockup -------------------------------- */

function DashboardMockup() {
  const bars = [42, 68, 55, 80, 64, 90, 74, 58, 82, 70, 88, 62]
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-emerald-500/10 backdrop-blur">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-3 rounded-full bg-rose-400" />
        <span className="size-3 rounded-full bg-amber-400" />
        <span className="size-3 rounded-full bg-emerald-400" />
        <div className="ml-3 flex flex-1 items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs text-slate-400">
          <Search className="size-3.5" />
          app.epks.edu.my
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr]">
        {/* Mini sidebar */}
        <div className="hidden w-40 flex-col gap-1 border-r border-white/10 p-3 sm:flex">
          <div className="mb-2 flex items-center gap-2 rounded-lg bg-emerald-400/10 px-2 py-2">
            <ShieldCheck className="size-4 text-emerald-400" />
            <span className="text-xs font-bold text-white">ePKS</span>
          </div>
          {[
            LayoutDashboard,
            ClipboardList,
            CalendarCheck,
            CalendarDays,
            Trophy,
          ].map((Icon, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px]",
                i === 0
                  ? "bg-emerald-400/15 font-semibold text-emerald-300"
                  : "text-slate-400"
              )}
            >
              <Icon className="size-3.5" />
              <span>
                {["Utama", "Perjumpaan", "Kehadiran", "Program", "Pencapaian"][i]}
              </span>
            </div>
          ))}
        </div>

        {/* Main area */}
        <div className="space-y-4 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] text-slate-400">Selamat Datang</p>
              <p className="text-sm font-bold text-white">Dashboard Kokurikulum</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
              Sesi 2027
            </span>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: "Murid", value: "1,240", icon: Users },
              { label: "Unit & Kelab", value: "28", icon: Sparkles },
              { label: "Sukan", value: "14", icon: Trophy },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <s.icon className="size-4 text-emerald-400" />
                <p className="mt-2 text-lg font-bold text-white">{s.value}</p>
                <p className="text-[10px] text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[11px] font-semibold text-slate-300">
                Kehadiran Mingguan
              </p>
              <TrendingUp className="size-3.5 text-emerald-400" />
            </div>
            <div className="flex h-16 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/60 to-emerald-300"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -right-3 top-1/3 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/95 px-3 py-2 shadow-xl">
          <Check className="size-4 text-emerald-400" />
          <span className="text-[11px] font-semibold text-white">Kehadiran direkod</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/95 px-3 py-2 shadow-xl">
          <Trophy className="size-4 text-amber-400" />
          <span className="text-[11px] font-semibold text-white">Pencapaian +12</span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------- Landing Page ------------------------------- */

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070b14] text-slate-100">
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[140px]" />
        <div className="absolute right-[-10%] top-1/3 h-[400px] w-[400px] rounded-full bg-teal-500/15 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      {/* ============================ NAVBAR ============================ */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070b14]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/30">
              <ShieldCheck className="size-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight text-white">ePKS</span>
              <span className="text-[10px] font-medium text-emerald-300/80">
                Kokurikulum Sekolah
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#fungsi"
              className="hidden text-sm font-medium text-slate-300 transition-colors hover:text-emerald-300 sm:block"
            >
              Log Masuk
            </a>
            <a href="#cta">
              <Button size="lg" className="rounded-xl bg-emerald-400 font-semibold text-slate-950 hover:bg-emerald-300">
                Cuba Sekarang
                <ArrowRight className="size-4" />
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* ============================ HERO ============================ */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-2 lg:px-8 lg:pt-24">
        <div className="max-w-xl">
          <SectionBadge>
            Web App + Desktop App — Satu Sistem Lengkap
          </SectionBadge>

          <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Urus Kokurikulum Sekolah,{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Lebih Mudah & Teratur
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            ePKS membantu guru merekod kehadiran, perjumpaan, program, jawatan dan
            pencapaian murid — semuanya dalam satu platform yang boleh diakses di
            web dan desktop, di mana jua anda berada.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#cta">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-emerald-400 px-6 font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Mula Secara Percuma
                <ArrowRight className="size-4" />
              </Button>
            </a>
            <a
              href="#fungsi"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
            >
              <ClipboardList className="size-4" />
              Lihat Fungsi Utama
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="border-l-2 border-emerald-400/40 pl-3">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs leading-snug text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <DashboardMockup />
        </div>
      </section>

      {/* ============================ FEATURES ============================ */}
      <section id="fungsi" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionBadge>Fungsi Utama</SectionBadge>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Semua yang anda perlukan untuk kokurikulum, dalam satu sistem
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Daripada merekod kehadiran hinggalah menjana laporan rasmi, ePKS
            memudahkan kerja harian guru tanpa membebankan.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/5"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-emerald-300 transition-colors group-hover:from-emerald-400 group-hover:to-teal-500 group-hover:text-slate-950">
                <feature.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-base font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== IMAGE SHOWCASE BAND ===================== */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 lg:col-span-2">
            <DummyImage
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
              alt="Pelajar di majlis graduasi"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <p className="text-sm font-semibold text-emerald-300">Pencapaian Murid</p>
              <p className="mt-1 max-w-md text-xl font-bold text-white sm:text-2xl">
                Raikan setiap kejayaan murid dengan rekod yang tersusun
              </p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10">
            <DummyImage
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80"
              alt="Aktiviti sukan pelajar"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <p className="text-sm font-semibold text-emerald-300">Sukan & Permainan</p>
              <p className="mt-1 text-xl font-bold text-white">Kelola sukan dan rumah sukan</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ ROLES ============================ */}
      <section
        id="untuk-siapa"
        className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 lg:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 h-[420px] overflow-hidden rounded-3xl border border-white/10 lg:order-1">
            <DummyImage
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="Guru dan pelajar bekerjasama"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#070b14]/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur">
                <MonitorSmartphone className="size-5 text-emerald-400" />
                <span className="text-sm font-semibold text-white">
                  Akses di web & desktop, serentak
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionBadge>Untuk Siapa</SectionBadge>
            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Dibina untuk setiap warga sekolah
            </h2>
            <p className="mt-4 text-base text-slate-400">
              ePKS direka supaya setiap peranan dapat bekerja dengan lebih pantas,
              dari guru penyelaras sehinggalah pihak pentadbir.
            </p>

            <div className="mt-8 space-y-4">
              {ROLES.map((role) => (
                <div
                  key={role.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-emerald-400/40"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                    <role.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{role.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ WORKFLOW ============================ */}
      <section id="aliran" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionBadge>Aliran Kerja</SectionBadge>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Tiga langkah mudah untuk bermula
          </h2>
        </div>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent md:block" />
          {STEPS.map((step) => (
            <div key={step.no} className="relative text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-emerald-400/30 bg-[#070b14] text-2xl font-black text-emerald-300 shadow-lg shadow-emerald-500/10">
                {step.no}
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ TESTIMONIALS ============================ */}
      <section id="testimoni" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionBadge>Testimoni</SectionBadge>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Dipercayai warga pendidik
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-500/30 font-bold text-emerald-200">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section id="cta" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-teal-500/10 to-sky-500/10 px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[100px]" />
          <h2 className="relative text-3xl font-black tracking-tight text-white sm:text-4xl">
            Sedia untuk digitalkan kokurikulum sekolah anda?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-slate-300">
            Sertai sekolah-sekolah yang kini mengurus kokurikulum dengan lebih
            pantas, kemas dan tanpa kertas.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-emerald-400 px-8 font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Mula Sekarang
                <ArrowRight className="size-4" />
              </Button>
            </a>
            <a
              href="#fungsi"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
            >
              <Download className="size-4" />
              Muat Turun Desktop App
            </a>
          </div>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-emerald-400" /> Tiada pemasangan rumit
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-emerald-400" /> Data tersusun & selamat
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-emerald-400" /> Sokongan berterusan
            </span>
          </div>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
            <div className="max-w-sm">
              <a href="#" className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950">
                  <ShieldCheck className="size-5" />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="text-lg font-black text-white">ePKS</span>
                  <span className="text-[10px] font-medium text-emerald-300/80">
                    Pengurusan Kokurikulum Sekolah
                  </span>
                </span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Sistem pengurusan kokurikulum sekolah yang memudahkan guru merekod,
                mengurus dan melaporkan aktiviti murid dalam satu platform.
              </p>
            </div>

            <div className="flex gap-16">
              <div>
                <p className="text-sm font-bold text-white">Pautan</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="transition-colors hover:text-emerald-300">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Fungsi</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  <li>Kehadiran Perjumpaan</li>
                  <li>Laporan Perjumpaan</li>
                  <li>Program & Aktiviti</li>
                  <li>Pencapaian Murid</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 ePKS — Pengurusan Kokurikulum Sekolah. Hak cipta terpelihara.</p>
            <p className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" /> Web App & Desktop App
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
