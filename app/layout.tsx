import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Neo ePKS — Urus lebih mudah. Bimbing lebih bermakna.",
  description:
    "Kenali Neo ePKS, sistem pengurusan kokurikulum sekolah untuk rekod kehadiran, perjumpaan, program, jawatan dan pencapaian murid serta laporan A4.",
  openGraph: {
    title: "Neo ePKS — Pengurusan Kokurikulum Sekolah",
    description:
      "Satukan urusan kokurikulum sekolah dalam satu ruang yang tersusun.",
    locale: "ms_MY",
    type: "website"
  }
}
export const viewport: Viewport = { themeColor: "#faf8fc" }

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ms" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
