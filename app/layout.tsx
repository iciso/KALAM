import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/nav-bar"
import { FontSizeProvider } from "@/contexts/font-size-context"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "KALAM: Know Allah by Lighting up Activities of Mirth",
  description:
    "Experience the joy of learning Quranic Arabic naturally through games, interactive flashcards, and themed quizzes. KALAM transforms memorization into discovery, helping you connect with the words of Allah, namely the Quran through fun activities rather than rote learning.",
  keywords:
    "Quran vocabulary, Arabic learning, interactive games, Islamic education, Quranic words, language learning, Arabic flashcards, Surah vocabulary",
  openGraph: {
    title: "KALAM: Know Allah by Lighting up Activities of Mirth",
    description:
      "Discover Quranic Arabic through games, quizzes, and interactive activities. Learn naturally and joyfully rather than through memorization.",
    images: [{ url: "/favicon.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KALAM: Know Allah by Lighting up Activities of Mirth",
    description:
      "Discover Quranic Arabic through games, quizzes, and interactive activities. Learn naturally and joyfully rather than through memorization.",
    images: [{ url: "/favicon.png" }],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <FontSizeProvider>
              <NavBar />
              <div className="pt-16">{children}</div>
            </FontSizeProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
