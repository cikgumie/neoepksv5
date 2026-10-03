"use client"

import * as React from "react"
import { useState, useMemo, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  TUTORIAL_VIDEOS,
  TUTORIAL_CATEGORIES,
  type TutorialVideo,
  type TutorialCategory,
  getYoutubeEmbedUrl,
  getYoutubeThumbnailUrl
} from "@/lib/tutorials"
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Film,
  GraduationCap,
  Info,
  Play,
  Search,
  Send,
  Share2,
  Sparkles,
  Users,
  Video,
  X
} from "lucide-react"

const base = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function TutorialPage() {
  const [selectedCategory, setSelectedCategory] = useState<TutorialCategory>("Semua")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeVideoId, setActiveVideoId] = useState<string>(TUTORIAL_VIDEOS[0].id)
  const [isPlaying, setIsPlaying] = useState(false)
  const [copied, setCopied] = useState(false)
  const [modalVideo, setModalVideo] = useState<TutorialVideo | null>(null)

  const playerRef = useRef<HTMLDivElement>(null)

  // Find active video
  const activeVideo = useMemo(() => {
    return TUTORIAL_VIDEOS.find((v) => v.id === activeVideoId) || TUTORIAL_VIDEOS[0]
  }, [activeVideoId])

  // Filter videos based on category and search query
  const filteredVideos = useMemo(() => {
    return TUTORIAL_VIDEOS.filter((v) => {
      const matchCategory =
        selectedCategory === "Semua" || v.category === selectedCategory
      const query = searchQuery.trim().toLowerCase()
      const matchSearch =
        !query ||
        v.title.toLowerCase().includes(query) ||
        v.description.toLowerCase().includes(query) ||
        v.category.toLowerCase().includes(query) ||
        v.targetAudience.toLowerCase().includes(query) ||
        v.topics.some((t) => t.toLowerCase().includes(query))
      return matchCategory && matchSearch
    })
  }, [selectedCategory, searchQuery])

  // Navigation between videos in player
  const currentIndex = TUTORIAL_VIDEOS.findIndex((v) => v.id === activeVideo.id)
  const prevVideo = currentIndex > 0 ? TUTORIAL_VIDEOS[currentIndex - 1] : null
  const nextVideo =
    currentIndex < TUTORIAL_VIDEOS.length - 1 ? TUTORIAL_VIDEOS[currentIndex + 1] : null

  const handleSelectVideo = (video: TutorialVideo, scrollToStage = true) => {
    setActiveVideoId(video.id)
    setIsPlaying(true)
    if (scrollToStage && playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}${base}/tutorial#${activeVideo.id}`
      navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20">
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-purple-600/10 dark:bg-purple-900/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-[25%] right-[-10%] w-[35%] h-[35%] rounded-full bg-blue-600/10 dark:bg-blue-900/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[25%] w-[45%] h-[45%] rounded-full bg-primary/5 dark:bg-primary/15 blur-[150px] pointer-events-none" />

      {/* Header Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight hover:opacity-90 transition-opacity"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                <GraduationCap size={24} />
              </span>
              <span>
                neo<span className="font-medium">ePKS</span>
                <span className="text-primary">.</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-muted-foreground border-l border-border pl-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Laman Utama
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold flex items-center gap-1">
                <Video size={13} className="text-primary" /> Pusat Tutorial
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft size={16} /> Ke Halaman Utama
            </Link>
            <Link href="/#fungsi" className="hover:text-primary transition-colors">
              Fungsi
            </Link>
            <Link href="/#jelajah" className="hover:text-primary transition-colors">
              Jelajah Sistem
            </Link>
            <Link href="/#tempahan" className="hover:text-primary transition-colors">
              Harga
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://forms.gle/wBc9N9BYVN5FZf3f9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:-translate-y-0.5"
            >
              Tempah Sistem <span className="hidden sm:inline bg-primary-foreground/20 px-2 py-0.5 rounded-full text-xs font-bold">RM100</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase shadow-sm mb-6"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            10 Video Panduan Lengkap • Langkah Demi Langkah
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]"
          >
            Pusat Tutorial & Panduan{" "}
            <span className="text-primary relative inline-block">
              Neo ePKS v5
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Kuasai setiap modul kokurikulum sekolah dengan mudah. Tonton panduan video berstruktur kami daripada
            persediaan awal pangkalan data sehingga semakan markah PAJSK dan penjanaan laporan A4.
          </motion.p>

          {/* Quick Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-muted-foreground"
          >
            <div className="flex items-center gap-2 rounded-full bg-card border border-border px-3.5 py-1.5 shadow-xs">
              <Film size={15} className="text-primary" />
              <span>
                <strong className="text-foreground">10</strong> Video Panduan
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-card border border-border px-3.5 py-1.5 shadow-xs">
              <Clock size={15} className="text-primary" />
              <span>
                Anggaran <strong className="text-foreground">~65 Minit</strong> Kandungan
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-card border border-border px-3.5 py-1.5 shadow-xs">
              <CheckCircle2 size={15} className="text-emerald-500" />
              <span>
                Format Terkini <strong className="text-foreground">KPM PAJSK</strong>
              </span>
            </div>
          </motion.div>
        </section>

        {/* Featured / Active Video Cinema Stage */}
        <section ref={playerRef} className="scroll-mt-24 mb-16">
          <div className="rounded-3xl border border-border bg-card/90 shadow-2xl backdrop-blur-xl overflow-hidden p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left / Top: Responsive Video Player Frame */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-950 border border-border/60 shadow-xl group">
                  {isPlaying ? (
                    <iframe
                      src={getYoutubeEmbedUrl(activeVideo.youtubeId, true)}
                      title={activeVideo.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={getYoutubeThumbnailUrl(activeVideo.youtubeId)}
                        alt={activeVideo.title}
                        fill
                        className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                        priority
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                      {/* Play Button Overlay */}
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white group cursor-pointer focus:outline-none"
                        aria-label={`Mainkan ${activeVideo.title}`}
                      >
                        <span className="relative grid h-20 w-20 sm:h-24 sm:w-24 place-items-center rounded-full bg-primary text-white shadow-2xl shadow-primary/60 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/95">
                          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                          <Play size={36} className="translate-x-0.5 fill-current" />
                        </span>
                        <span className="rounded-full bg-black/60 backdrop-blur-md px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide border border-white/20 shadow-lg">
                          Klik Untuk Tonton Video #{activeVideo.order}
                        </span>
                      </button>

                      {/* Corner Badges */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="rounded-lg bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/10">
                          Video #{activeVideo.order}
                        </span>
                        <span className="rounded-lg bg-primary/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                          {activeVideo.category}
                        </span>
                      </div>

                      <div className="absolute bottom-4 right-4 flex items-center gap-2">
                        <span className="rounded-lg bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-mono font-medium text-white flex items-center gap-1.5 border border-white/10">
                          <Clock size={12} className="text-primary" /> {activeVideo.duration} min
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Player Toolbar / Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => prevVideo && handleSelectVideo(prevVideo, false)}
                      disabled={!prevVideo}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft size={16} /> Video Sebelumnya
                    </button>
                    <button
                      onClick={() => nextVideo && handleSelectVideo(nextVideo, false)}
                      disabled={!nextVideo}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      Seterusnya <ChevronRight size={16} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyLink}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                      title="Salin pautan video ini"
                    >
                      {copied ? <Check size={14} className="text-emerald-500" /> : <Share2 size={14} />}
                      {copied ? "Pautan Disalin!" : "Kongsi Pautan"}
                    </button>
                    <a
                      href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                    >
                      <ExternalLink size={14} /> Buka di YouTube
                    </a>
                  </div>
                </div>
              </div>

              {/* Right / Bottom: Video Information & Topics */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="rounded-full bg-primary/15 text-primary text-xs font-bold px-3 py-1">
                      {activeVideo.category}
                    </span>
                    <span className="rounded-full bg-muted text-muted-foreground text-xs font-medium px-3 py-1 flex items-center gap-1">
                      <Users size={12} /> {activeVideo.targetAudience}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                    {activeVideo.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activeVideo.description}
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <BookOpen size={14} className="text-primary" /> Apa yang anda pelajari dalam video ini:
                  </h3>
                  <ul className="space-y-2.5">
                    {activeVideo.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Help Card */}
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary">
                    <Sparkles size={14} /> Memerlukan Bantuan Lanjut?
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Sertai komuniti pengguna kami di Telegram untuk bertanyakan soalan teknikal secara terus kepada pembangun sistem.
                  </p>
                  <a
                    href="https://t.me/AppSekolahMalaysia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold py-2 px-3 transition-colors"
                  >
                    <Send size={13} /> Telegram App Sekolah Malaysia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {TUTORIAL_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat
                const count =
                  cat === "Semua"
                    ? TUTORIAL_VIDEOS.length
                    : TUTORIAL_VIDEOS.filter((v) => v.category === cat).length

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {cat}
                    <span
                      className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                        isSelected ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] md:w-72">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                type="text"
                placeholder="Cari tajuk atau topik..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card pl-10 pr-9 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
                  aria-label="Kosongkan carian"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 10 Video Directory Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Film size={22} className="text-primary" />
              Koleksi Video ({filteredVideos.length})
            </h2>
            {searchQuery && (
              <p className="text-xs text-muted-foreground">
                Menunjukkan hasil carian untuk &quot;<span className="text-foreground font-medium">{searchQuery}</span>&quot;
              </p>
            )}
          </div>

          {filteredVideos.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-muted text-muted-foreground mx-auto mb-4">
                <Search size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Tiada Video Dijumpai</h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                Tiada tutorial yang sepadan dengan carian &quot;{searchQuery}&quot; dalam kategori &quot;{selectedCategory}&quot;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Semua")
                  setSearchQuery("")
                }}
                className="rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                Tetapkan Semula Penapis
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => {
                const isActive = activeVideo.id === video.id
                return (
                  <motion.div
                    key={video.id}
                    id={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className={`group relative flex flex-col rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
                      isActive
                        ? "border-primary shadow-lg shadow-primary/10 ring-2 ring-primary/30"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    {/* Thumbnail Container */}
                    <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                      <Image
                        src={getYoutubeThumbnailUrl(video.youtubeId)}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Video Number Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="rounded-lg bg-black/75 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-white border border-white/10">
                          #{String(video.order).padStart(2, "0")}
                        </span>
                        {isActive && (
                          <span className="rounded-lg bg-primary px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider animate-pulse">
                            Sedang Dipilih
                          </span>
                        )}
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3">
                        <span className="rounded-lg bg-black/80 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-mono font-medium text-white flex items-center gap-1 border border-white/10">
                          <Clock size={11} className="text-primary" /> {video.duration}
                        </span>
                      </div>

                      {/* Hover Play Button */}
                      <button
                        onClick={() => handleSelectVideo(video, true)}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-xs cursor-pointer focus:outline-none"
                        aria-label={`Mainkan ${video.title}`}
                      >
                        <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-white shadow-xl shadow-primary/50 transform scale-75 group-hover:scale-100 transition-transform">
                          <Play size={22} className="translate-x-0.5 fill-current" />
                        </span>
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-md bg-primary/10 text-primary px-2.5 py-0.5 text-[11px] font-bold">
                            {video.category}
                          </span>
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                            <Users size={11} /> {video.targetAudience}
                          </span>
                        </div>

                        <h3 className="font-bold text-foreground text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>

                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                          {video.description}
                        </p>
                      </div>

                      {/* Key Topics Tag list */}
                      <div className="space-y-3 pt-2 border-t border-border">
                        <div className="flex flex-wrap gap-1.5">
                          {video.topics.slice(0, 2).map((topic, i) => (
                            <span
                              key={i}
                              className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-md truncate max-w-[200px]"
                            >
                              • {topic}
                            </span>
                          ))}
                          {video.topics.length > 2 && (
                            <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded-md">
                              +{video.topics.length - 2} lagi
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => handleSelectVideo(video, true)}
                            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground py-2 px-3 text-xs font-bold transition-all"
                          >
                            <Play size={13} className="fill-current" />
                            {isActive ? "Sedang Dipaparkan" : "Tonton Video"}
                          </button>
                          <button
                            onClick={() => setModalVideo(video)}
                            className="p-2 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            title="Tonton dalam tetingkap pop-up"
                            aria-label="Tonton dalam tetingkap pop-up"
                          >
                            <Film size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </section>

        {/* Developer / Admin Guide Note (How to replace dummy videos) */}
        <section className="mb-20">
          <div className="rounded-3xl border border-dashed border-primary/30 bg-primary/5 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-white shadow-md">
                <Info size={24} />
              </span>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Nota Pengurusan: Cara Mengemaskini Video Sebenar
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Semua 10 video di atas kini dipaparkan dengan video dummy YouTube. Apabila video tutorial sebenar
                  sekolah atau modul anda sudah siap dimuat naik ke YouTube, anda hanya perlu membuka fail:
                </p>
                <div className="bg-card border border-border rounded-xl px-4 py-2 font-mono text-xs text-primary font-semibold inline-block">
                  lib/tutorials.ts
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Gantikan nilai <code className="text-primary font-mono font-semibold">youtubeId: &quot;...&quot;</code> pada item yang berkaitan dengan ID video YouTube anda (contohnya daripada pautan <code className="font-mono text-xs">youtube.com/watch?v=XXXXX</code>). Tajuk dan penerangan juga boleh disunting pada bila-bila masa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-purple-800 p-8 sm:p-12 text-white shadow-2xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white mb-4">
              <Sparkles size={14} /> Tawaran Istimewa
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Belum Memiliki Sistem Neo ePKS v5?
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-8">
              Permudahkan pengurusan rekod kehadiran, perjumpaan, lantikan jawatan, markah PAJSK dan laporan A4 sekolah anda hari ini. Dapatkan akses penuh sekali bayar dengan harga promosi RM 100.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://forms.gle/wBc9N9BYVN5FZf3f9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-primary font-bold px-6 py-3 text-sm shadow-xl transition-transform hover:scale-105"
              >
                Borang Tempahan (RM100) <ArrowUpRight size={16} />
              </a>
              <a
                href="https://t.me/AppSekolahMalaysia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white font-bold px-6 py-3 text-sm backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Send size={15} /> Komuniti Telegram Guru
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Pop-up Video Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setModalVideo(null)}
          >
            <button
              onClick={() => setModalVideo(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Tutup"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-card border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full bg-zinc-950">
                <iframe
                  src={getYoutubeEmbedUrl(modalVideo.youtubeId, true)}
                  title={modalVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-5 flex flex-col gap-2 bg-card">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-primary/10 text-primary text-xs font-bold px-2.5 py-0.5">
                    {modalVideo.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Video #{modalVideo.order} • {modalVideo.duration} min
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {modalVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {modalVideo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                <GraduationCap size={24} />
              </span>
              <span>
                neo<span className="font-medium">ePKS</span>
                <span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Pusat tutorial video dan panduan pelaksanaan sistem pengurusan kokurikulum sekolah.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <Link href="/" className="text-primary hover:underline inline-flex items-center gap-1.5">
                <ArrowLeft size={14} /> Laman Utama
              </Link>
              <span className="text-muted-foreground">•</span>
              <a
                href="https://forms.gle/wBc9N9BYVN5FZf3f9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1.5"
              >
                Borang Tempahan (RM100)
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="https://t.me/AppSekolahMalaysia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1.5"
              >
                <Send size={14} /> Komuniti Telegram
              </a>
            </div>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Neo ePKS.<br />Dibina dengan tujuan. Untuk pendidikan.
          </div>
        </div>
      </footer>
    </div>
  )
}
