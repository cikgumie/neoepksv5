"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  CheckCheck,
  ChevronDown,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Menu,
  Monitor,
  Network,
  Plus,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  Users,
  X,
  ZoomIn
} from "lucide-react"

const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
const shots = [
  {
    name: "Dashboard",
    file: "dashboard",
    title: "Satu pandangan. Gambaran menyeluruh.",
    text: "Lihat jumlah murid, unit kokurikulum, program dan statistik penglibatan dalam satu dashboard.",
    icon: LayoutDashboard,
    width: 3091,
    height: 1839
  },
  {
    name: "Perjumpaan",
    file: "perjumpaan",
    title: "Setiap perjumpaan, direkod dengan kemas.",
    text: "Semak tarikh, kehadiran dan status laporan bagi setiap perjumpaan unit kokurikulum.",
    icon: ClipboardCheck,
    width: 868,
    height: 1835
  },
  {
    name: "Laporan A4",
    file: "laporan",
    title: "Daripada aktiviti kepada dokumentasi.",
    text: "Laporan merangkum kehadiran, aktiviti, refleksi dan foto dalam format A4 untuk dicetak.",
    icon: FileText,
    width: 862,
    height: 1829
  },
  {
    name: "Jawatan unit",
    file: "jawatan",
    title: "Kepimpinan murid, lebih tersusun.",
    text: "Lihat lantikan jawatankuasa dalam paparan carta organisasi atau jadual mengikut unit.",
    icon: Network,
    width: 3808,
    height: 1757
  },
  {
    name: "Pencapaian",
    file: "pencapaian",
    title: "Setiap penglibatan ada ceritanya.",
    text: "Semak rumusan kehadiran, jawatan dan pencapaian murid dengan penapis unit, tingkatan dan kelas.",
    icon: Trophy,
    width: 3801,
    height: 1771
  },
  {
    name: "Paparan mobil",
    file: "mobil",
    title: "Maklumat sekolah, dalam genggaman.",
    text: "Paparan ringkas untuk menyemak dashboard dan mengakses modul melalui telefon.",
    icon: Smartphone,
    width: 870,
    height: 1847
  }
]

const features = [
  {
    icon: ClipboardCheck,
    title: "Kehadiran & perjumpaan",
    text: "Rekod kehadiran ahli dan aktiviti mingguan. Kenal pasti laporan yang sudah lengkap atau masih perlu dikemas kini.",
    tag: "Rekod harian",
    color: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30"
  },
  {
    icon: CalendarDays,
    title: "Program & aktiviti",
    text: "Susun rekod program sekolah supaya maklumat pelaksanaan dan aktiviti mudah dirujuk semula.",
    tag: "Pengurusan aktiviti",
    color: "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30"
  },
  {
    icon: Network,
    title: "Jawatan & kepimpinan",
    text: "Urus lantikan jawatankuasa murid dan lihat struktur organisasi bagi setiap unit kokurikulum.",
    tag: "Organisasi unit",
    color: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30"
  },
  {
    icon: Trophy,
    title: "Pencapaian murid",
    text: "Kumpulkan rekod pencapaian, penglibatan dan ekstra kurikulum untuk melihat perkembangan setiap murid.",
    tag: "Potensi murid",
    color: "text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30"
  },
  {
    icon: BarChart3,
    title: "Dashboard & rumusan",
    text: "Fahami taburan ahli dan penglibatan mengikut kategori melalui statistik serta paparan yang mudah dibaca.",
    tag: "Gambaran menyeluruh",
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30"
  },
  {
    icon: FileText,
    title: "Laporan sedia dicetak",
    text: "Dokumentasikan aktiviti bersama foto, kehadiran dan refleksi dalam laporan A4 yang tersusun.",
    tag: "Dokumentasi sekolah",
    color: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30"
  }
]

const roles = [
  {
    title: "Guru penasihat",
    icon: GraduationCap,
    headline: "Lebih masa membimbing. Kurang masa menyusun rekod.",
    text: "Fokus pada aktiviti bersama murid dengan rekod unit yang lebih mudah diurus.",
    items: [
      "Rekod perjumpaan dan kehadiran ahli",
      "Lengkapkan aktiviti, refleksi dan foto",
      "Sediakan laporan perjumpaan A4"
    ]
  },
  {
    title: "Penyelaras kokurikulum",
    icon: Users,
    headline: "Semua unit bergerak. Anda dapat gambaran penuh.",
    text: "Rujuk maklumat unit dan penglibatan murid dalam satu tempat untuk membantu penyelarasan sekolah.",
    items: [
      "Semak statistik penglibatan mengikut kategori",
      "Rujuk jawatankuasa setiap unit",
      "Tapis rumusan pencapaian murid"
    ]
  },
  {
    title: "Pentadbir sekolah",
    icon: ShieldCheck,
    headline: "Maklumat yang jelas untuk semakan yang lebih mudah.",
    text: "Dapatkan gambaran kokurikulum sekolah dan rujuk dokumentasi aktiviti dengan lebih teratur.",
    items: [
      "Lihat ringkasan murid, unit dan program",
      "Semak rumusan kehadiran dan pencapaian",
      "Rujuk laporan untuk dokumentasi sekolah"
    ]
  }
]

const faqs = [
  [
    "Apakah Neo ePKS?",
    "Neo ePKS ialah sistem pengurusan kokurikulum sekolah yang menyatukan rekod perjumpaan, kehadiran, program, jawatan unit dan pencapaian murid dalam satu platform."
  ],
  [
    "Siapa yang boleh mendapat manfaat daripada sistem ini?",
    "Guru penasihat, penyelaras kokurikulum dan pentadbir sekolah boleh menggunakan maklumat yang tersusun untuk urusan rekod, penyelarasan dan semakan. Akses sebenar bergantung pada peranan yang ditetapkan oleh sekolah."
  ],
  [
    "Adakah paparan sesuai untuk telefon?",
    "Ya. Sistem menyediakan paparan mobil dengan navigasi ringkas. Anda boleh melihat contoh sebenar melalui tab Paparan mobil di bahagian Jelajah sistem."
  ],
  [
    "Bolehkah laporan dicetak?",
    "Paparan laporan perjumpaan menyediakan format A4 yang mengandungi butiran aktiviti, analisis kehadiran, refleksi dan foto. Carta organisasi serta senarai rumusan turut mempunyai pilihan cetakan A4."
  ],
  [
    "Bagaimana hendak mendapatkan akses?",
    "Hubungi pentadbir atau penyelaras sistem di sekolah anda untuk maklumat akses dan akaun. Halaman ini memperkenalkan fungsi Neo ePKS; akses sistem diuruskan secara berasingan oleh sekolah."
  ]
]

function Brand() {
  return (
    <a className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight" href="#utama">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
        <GraduationCap size={24} />
      </span>
      <span>
        neo<span className="font-medium">ePKS</span>
        <span className="text-primary">.</span>
      </span>
    </a>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [role, setRole] = useState(0)
  const [preview, setPreview] = useState<number | null>(null)
  const current = shots[active]
  const selectedRole = roles[role]
  
  // Custom cursor position for 3D effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 20 // -10 to 10
    const y = (clientY / innerHeight - 0.5) * -20 // 10 to -10
    setMousePos({ x, y })
  }

  // Prevent scroll when dialog is open
  useEffect(() => {
    if (preview !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [preview])

  const nav = [
    ["Fungsi", "fungsi"],
    ["Jelajah sistem", "jelajah"],
    ["Cara kerja", "cara-kerja"],
    ["Soalan lazim", "soalan"]
  ]

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/20">
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 dark:bg-purple-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-600/10 dark:bg-blue-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary/5 dark:bg-primary/10 blur-[150px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6">
          <Brand />
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="hover:text-primary transition-colors">
                {label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="#jelajah" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:-translate-y-0.5">
              Kenali Neo ePKS <ArrowUpRight size={16} />
            </a>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-background border-t border-border px-6"
            >
              <div className="flex flex-col py-4 gap-4">
                {nav.map(([label, id]) => (
                  <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="flex justify-between items-center py-2 text-foreground font-medium">
                    {label}
                    <ArrowUpRight size={16} className="text-muted-foreground" />
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main onMouseMove={handleMouseMove}>
        {/* Hero Section */}
        <section id="utama" className="relative pt-24 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Pengurusan Kokurikulum Dipermudahkan
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 text-5xl md:text-7xl font-bold tracking-tight text-foreground"
            >
              Urus lebih mudah.<br />
              Bimbing <span className="text-primary relative inline-block">lebih bermakna.
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Daripada kehadiran hingga pencapaian murid, satukan urusan kokurikulum sekolah dalam satu ruang yang tersusun dan profesional.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#jelajah" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 hover:-translate-y-1">
                Jelajah sistem <ArrowRight size={18} />
              </a>
              <a href="#fungsi" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-card border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:-translate-y-1">
                Lihat fungsi utama <ChevronDown size={18} />
              </a>
            </motion.div>

            {/* 3D Showcase */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                perspective: 1000,
                rotateX: mousePos.y,
                rotateY: mousePos.x,
              }}
              className="relative mt-20 max-w-5xl mx-auto cursor-pointer group"
              onClick={() => setPreview(0)}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background to-transparent" />
              <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
                <div className="flex h-10 items-center gap-2 border-b border-border bg-muted/50 px-4">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-auto flex items-center gap-2 text-xs font-medium text-muted-foreground bg-background px-3 py-1 rounded-md border border-border">
                    <ShieldCheck size={12} /> Neo ePKS / Carta Organisasi
                  </div>
                </div>
                <Image
                  src={`${base}/screenshots/jawatan.jpg`}
                  alt="Carta Organisasi Neo ePKS"
                  width={1500}
                  height={900}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 text-foreground px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg backdrop-blur-sm">
                    <ZoomIn size={16} /> Klik untuk besarkan
                  </div>
                </div>
              </div>
              
              {/* Phone Mockup Overlapping */}
              <motion.div 
                initial={{ opacity: 0, y: 100, x: 50, rotateY: -15, rotateX: 10, rotateZ: -5 }}
                animate={{ opacity: 1, y: 0, x: 0, rotateY: -15, rotateX: 10, rotateZ: -5 }}
                whileHover={{ y: -20, rotateY: -5, rotateX: 5, rotateZ: 0, scale: 1.05 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="absolute -bottom-6 -right-2 md:-bottom-12 md:-right-12 w-32 md:w-64 rounded-[1.5rem] md:rounded-[2.5rem] border-[6px] md:border-[10px] border-zinc-950 dark:border-black bg-zinc-950 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden z-20 cursor-pointer"
                onClick={(e) => { e.stopPropagation(); setPreview(5); }}
                title="Lihat paparan mobil"
              >
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 md:w-20 h-4 md:h-6 bg-zinc-950 dark:bg-black rounded-b-xl md:rounded-b-2xl z-30 flex justify-center items-center">
                  <div className="w-6 md:w-10 h-1 md:h-1.5 rounded-full bg-zinc-800" />
                </div>
                <Image
                  src={`${base}/screenshots/mobil.jpg`}
                  alt="Paparan Telefon Pintar Neo ePKS"
                  width={400}
                  height={850}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="fungsi" className="py-24 bg-muted/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Dari Rekod ke Rumusan</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Kerja lebih tersusun.
              </h2>
              <p className="text-lg text-muted-foreground">
                Urus rutin kokurikulum dengan lebih jelas, supaya lebih banyak perhatian dapat diberikan kepada perkembangan murid.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${f.color}`}>
                    <f.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.text}</p>
                  <div className="mt-6 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {f.tag}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section id="jelajah" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Jelajah Sistem</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Bukan sekadar cerita.<br />Lihat sendiri caranya.
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {shots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${active === i ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'}`}
                >
                  <s.icon size={16} /> {s.name}
                </button>
              ))}
            </div>

            {/* Content Panel */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              <div className="p-10 lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border bg-muted/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-primary font-mono text-sm font-bold tracking-widest mb-4 block">
                      0{active + 1} / 0{shots.length}
                    </span>
                    <h3 className="text-3xl font-bold text-foreground mb-4">{current.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">{current.text}</p>
                    <button
                      onClick={() => setPreview(active)}
                      className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                    >
                      Besarkan paparan <ArrowUpRight size={18} />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="lg:w-2/3 bg-muted/30 p-6 md:p-12 flex items-center justify-center relative group cursor-pointer overflow-hidden" onClick={() => setPreview(active)}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-border"
                  >
                    <Image
                      src={`${base}/screenshots/${current.file}.jpg`}
                      alt={current.name}
                      width={1200}
                      height={800}
                      className={`w-full h-auto object-cover ${current.width < 1000 ? 'max-h-[500px] w-auto mx-auto' : ''}`}
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20 flex items-center justify-center">
                       <div className="w-16 h-16 rounded-full bg-background/90 text-foreground flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                         <ZoomIn size={24} />
                       </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-32 relative overflow-hidden bg-zinc-950 text-zinc-50 border-t border-zinc-900">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Pengalaman Mudah Alih</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                  Pengurusan dalam poket anda.
                </h2>
                <p className="text-lg text-zinc-400">
                  Neo ePKS direka khusus dengan paparan responsif. Urus kehadiran, semak perjumpaan dan lihat laporan terus melalui telefon pintar.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              {/* App 1: Dashboard */}
              <div className="flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="w-64 rounded-[2.5rem] border-[10px] border-zinc-900 bg-zinc-900 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden mb-8 relative cursor-pointer"
                  onClick={() => setPreview(5)}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-zinc-900 rounded-b-2xl z-30 flex justify-center items-center">
                    <div className="w-10 h-1.5 rounded-full bg-zinc-800" />
                  </div>
                  <Image src={`${base}/screenshots/mobil.jpg`} alt="Dashboard Mobile" width={400} height={850} className="w-full h-auto object-cover" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white">Dashboard Ringkas</h3>
                <p className="text-zinc-400 text-center text-sm leading-relaxed max-w-[260px]">Rujuk statistik penglibatan murid dan status unit secara langsung melalui paparan utama yang mesra telefon.</p>
              </div>

              {/* App 2: Perjumpaan */}
              <div className="flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-64 rounded-[2.5rem] border-[10px] border-zinc-900 bg-zinc-900 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden mb-8 relative cursor-pointer"
                  onClick={() => setPreview(1)}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-zinc-900 rounded-b-2xl z-30 flex justify-center items-center">
                    <div className="w-10 h-1.5 rounded-full bg-zinc-800" />
                  </div>
                  <Image src={`${base}/screenshots/perjumpaan.jpg`} alt="Perjumpaan Mobile" width={400} height={850} className="w-full h-auto object-cover" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white">Rekod Perjumpaan</h3>
                <p className="text-zinc-400 text-center text-sm leading-relaxed max-w-[260px]">Kemas kini kehadiran ahli dan status aktiviti mingguan di mana-mana sahaja anda berada.</p>
              </div>

              {/* App 3: Laporan */}
              <div className="flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-64 rounded-[2.5rem] border-[10px] border-zinc-900 bg-zinc-900 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden mb-8 relative cursor-pointer"
                  onClick={() => setPreview(2)}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-zinc-900 rounded-b-2xl z-30 flex justify-center items-center">
                    <div className="w-10 h-1.5 rounded-full bg-zinc-800" />
                  </div>
                  <Image src={`${base}/screenshots/laporan.jpg`} alt="Laporan Mobile" width={400} height={850} className="w-full h-auto object-cover" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white">Semakan Laporan</h3>
                <p className="text-zinc-400 text-center text-sm leading-relaxed max-w-[260px]">Teliti refleksi, foto dan pengesahan laporan secara langsung dari peranti pintar dengan mudah.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section id="untuk-siapa" className="py-24 bg-muted/20 border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Dibina untuk warga pendidik</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                  Peranan berbeza.<br />Matlamat yang sama.
                </h2>
                <p className="text-lg text-muted-foreground mb-10">
                  Kokurikulum yang terurus bermula dengan maklumat yang mudah dicapai.
                </p>
                
                <div className="flex flex-col gap-3">
                  {roles.map((r, i) => (
                    <button
                      key={i}
                      onClick={() => setRole(i)}
                      className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${role === i ? 'bg-background border-primary shadow-lg ring-1 ring-primary' : 'bg-transparent border-transparent hover:bg-muted/50'}`}
                    >
                      <div className="flex items-center gap-4">
                        <r.icon size={24} className={role === i ? "text-primary" : "text-muted-foreground"} />
                        <span className={`font-semibold ${role === i ? 'text-foreground' : 'text-muted-foreground'}`}>{r.title}</span>
                      </div>
                      <ArrowRight size={20} className={role === i ? "text-primary" : "opacity-0"} />
                    </button>
                  ))}
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                    <selectedRole.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{selectedRole.headline}</h3>
                  <p className="text-muted-foreground mb-8 text-lg">{selectedRole.text}</p>
                  <ul className="space-y-4">
                    {selectedRole.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground font-medium">
                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                          <Check size={12} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="soalan" className="py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Soalan Lazim</h2>
              <p className="text-lg text-muted-foreground">Jawapan ringkas sebelum anda bermula.</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map(([q, a], i) => (
                <details key={i} className="group rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-lg text-foreground marker:content-none">
                    {q}
                    <Plus size={20} className="text-primary transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary dark:bg-primary/90" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Beri ruang untuk potensi murid.<br />Biar rekod lebih mudah diurus.
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Kenali bagaimana Neo ePKS membantu perjalanan kokurikulum sekolah anda hari ini.
            </p>
            <a href="#jelajah" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-2xl transition-transform hover:scale-105">
              Terokai Neo ePKS <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Brand />
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Pengurusan kokurikulum yang lebih teratur.<br />Untuk pendidik. Untuk masa depan murid.
            </p>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Neo ePKS.<br />Dibina dengan tujuan. Untuk pendidikan.
          </div>
        </div>
      </footer>

      {/* Fullscreen Image Preview Dialog */}
      <AnimatePresence>
        {preview !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setPreview(null)}
          >
            <button className="absolute top-6 right-6 p-2 rounded-full bg-card border border-border shadow-lg text-foreground hover:bg-muted z-50">
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-7xl w-full max-h-full overflow-auto rounded-xl border border-border shadow-2xl bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-border bg-muted/50 sticky top-0 z-10 flex justify-between items-center">
                <div className="font-bold text-foreground">{shots[preview].name}</div>
              </div>
              <Image
                src={`${base}/screenshots/${shots[preview].file}.jpg`}
                alt={shots[preview].name}
                width={shots[preview].width}
                height={shots[preview].height}
                className="w-full h-auto"
                unoptimized // So it doesn't try to shrink it too much
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
