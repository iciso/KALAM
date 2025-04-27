"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Home, Sun, Moon } from "lucide-react"

export function NavBar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4">
      {/* Home button on the left */}
      <Link href="/">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Home className="h-5 w-5" />
          <span className="sr-only">Home</span>
        </Button>
      </Link>

      {/* Theme toggle on the right */}
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </nav>
  )
}
