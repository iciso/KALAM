import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/nav-bar"
import { FontSizeProvider } from "@/contexts/font-size-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "KALAM - Quran Vocabulary Learning App",
  description: "Learn Quranic Arabic vocabulary through interactive quizzes, games, and challenges",
    generator: 'v0.dev'
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
          <FontSizeProvider>
            <NavBar />
            <div className="pt-16">{children}</div>
          </FontSizeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
