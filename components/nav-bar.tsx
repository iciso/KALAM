"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  Book,
  Home,
  Gamepad2,
  School,
  ListTodo,
  Info,
  BookMarked,
  GraduationCap,
  Heart,
  BookOpen,
  Clock,
  ChevronDown,
  ChevronRight,
  Library,
  Sparkles,
} from "lucide-react"
import { useState } from "react"
import { FontSizeControls } from "./font-size-controls"
import { AuthButtons } from "./auth/auth-buttons"
import { cn } from "@/lib/utils"

type NavCategory = {
  name: string
  icon: React.ReactNode
  links: {
    name: string
    href: string
    icon: React.ReactNode
    isInteractive?: boolean
    shortName?: string
  }[]
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const isHomePage = pathname === "/"

  const navCategories: NavCategory[] = [
    {
      name: "Interactive Learning",
      icon: <Sparkles className="h-5 w-5" />,
      links: [
        { name: "Games", href: "/games", icon: <Gamepad2 className="h-4 w-4" />, isInteractive: true },
        { name: "Quizzes", href: "/quizzes", icon: <School className="h-4 w-4" />, isInteractive: true },
        {
          name: "Hijra Journey",
          shortName: "Hijra",
          href: "/hijra",
          icon: <Clock className="h-4 w-4" />,
          isInteractive: true,
        },
        {
          name: "Isra & Miraj",
          shortName: "Isra",
          href: "/isra-miraj",
          icon: <Clock className="h-4 w-4" />,
          isInteractive: true,
        },
        { name: "Word Lists", href: "/word-lists", icon: <ListTodo className="h-4 w-4" />, isInteractive: true },
      ],
    },
    {
      name: "Reference",
      icon: <Library className="h-5 w-5" />,
      links: [
        { name: "Dictionary", href: "/vocabulary", icon: <Book className="h-4 w-4" /> },
        { name: "Surah Browser", href: "/surah-vocabulary", icon: <BookMarked className="h-4 w-4" /> },
        { name: "Revelation Contexts", href: "/surah-revelation", icon: <BookOpen className="h-4 w-4" /> },
        { name: "Verb Conjugation", href: "/verb-conjugation", icon: <GraduationCap className="h-4 w-4" /> },
        { name: "Divine Names", href: "/divine-names", icon: <Heart className="h-4 w-4" /> },
      ],
    },
    {
      name: "About",
      icon: <Info className="h-5 w-5" />,
      links: [{ name: "About KALAM", href: "/about", icon: <Info className="h-4 w-4" /> }],
    },
  ]

  // Extract only interactive learning links for the main navigation
  const primaryNavLinks = navCategories
    .flatMap((category) => category.links)
    .filter((link) => link.isInteractive)
    .slice(0, 3) // Limit to first 3 interactive links

  return (
    <nav className="bg-emerald-700 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold flex items-center" onClick={closeMenu}>
              <Image src="/logo.png" alt="KALAM Logo" width={32} height={32} className="mr-2" />
              <span>KALAM</span>
            </Link>
          </div>

          {/* Primary Navigation - Always visible, limited to key interactive items */}
          <div className="hidden md:flex items-center space-x-2">
  {/* Only show Home link if not on home page */}
  {!isHomePage && (
    <Link
      href="/"
      className={`flex items-center px-3 py-2 rounded hover:bg-emerald-600 ${
        isActive("/") ? "bg-emerald-800" : ""
      }`}
      onClick={closeMenu}
    >
      <Home className="mr-1 h-4 w-4" />
      <span>Home</span>
    </Link>
  )}

  {primaryNavLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`flex items-center px-3 py-2 rounded hover:bg-emerald-600 ${
        pathname.startsWith(link.href) ? "bg-emerald-800" : ""
      }`}
      onClick={closeMenu}
    >
      {link.icon}
      <span className="ml-1">{link.shortName || link.name}</span>
    </Link>
  ))}

  <FontSizeControls />
  {/* <AuthButtons /> Removed temporarily */}
</div>

          {/* Hamburger Menu Button - Always visible on all screen sizes */}
          <div className="flex items-center space-x-2">
  <div className="md:hidden">
    <FontSizeControls />
    {/* <AuthButtons /> Removed temporarily */}
  </div>
  <button
    onClick={toggleMenu}
    className="p-2 rounded-full hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
    aria-label="Menu"
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>
        {/* Full Navigation Menu - Shown when hamburger is clicked */}
        {isOpen && (
          <div className="py-4 px-2 bg-emerald-800 rounded-lg shadow-xl absolute right-4 left-4 z-50 mt-2 max-h-[80vh] overflow-y-auto">
            <div className="grid gap-2">
              {navCategories.map((category) => (
                <div key={category.name} className="border-b border-emerald-700 pb-2 last:border-0">
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between p-2 rounded hover:bg-emerald-700 transition-colors"
                  >
                    <div className="flex items-center">
                      {category.icon}
                      <span className="ml-2 font-medium">{category.name}</span>
                    </div>
                    {expandedCategory === category.name ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>

                  {expandedCategory === category.name && (
                    <div className="mt-1 ml-4 space-y-1">
                      {category.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            "flex items-center p-2 rounded-md",
                            pathname.startsWith(link.href) ? "bg-emerald-600" : "hover:bg-emerald-700",
                            link.isInteractive && "font-medium",
                          )}
                          onClick={closeMenu}
                        >
                          {link.icon}
                          <span className="ml-2">{link.name}</span>
                          {link.isInteractive && (
                            <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-orange-500 text-white">
                              Interactive
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 pt-2 border-t border-emerald-700">
              <Link
                href="/"
                className={`flex items-center p-2 rounded hover:bg-emerald-700 ${
                  isActive("/") ? "bg-emerald-600" : ""
                }`}
                onClick={closeMenu}
              >
                <Home className="mr-2 h-5 w-5" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
