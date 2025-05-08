"use client"

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
} from "lucide-react"
import { useState } from "react"
import { FontSizeControls } from "./font-size-controls"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
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
            <Link
              href="/vocabulary"
              className={`flex items-center px-3 py-2 rounded hover:bg-emerald-600 ${
                isActive("/vocabulary") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <Book className="mr-1 h-4 w-4" />
              <span>Dictionary</span>
            </Link>
            <Link
              href="/surah-vocabulary"
              className={`flex items-center px-3 py-2 rounded hover:bg-emerald-600 ${
                isActive("/surah-vocabulary") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <BookMarked className="mr-1 h-4 w-4" />
              <span>Surah Browser</span>
            </Link>
            <Link
              href="/surah-revelation"
              className={`flex items-center px-3 py-2 rounded hover:bg-emerald-600 ${
                pathname.startsWith("/surah-revelation") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <BookOpen className="mr-1 h-4 w-4" />
              <span>Revelation Contexts</span>
            </Link>
            <Link
              href="/games"
              className={`flex items-center px-3 py-2 rounded hover:bg-emerald-600 ${
                pathname.startsWith("/games") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <Gamepad2 className="mr-1 h-4 w-4" />
              <span>Games</span>
            </Link>
            <Link
              href="/quizzes"
              className={`flex items-center px-3 py-2 rounded hover:bg-emerald-600 ${
                isActive("/quizzes") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <School className="mr-1 h-4 w-4" />
              <span>Quizzes</span>
            </Link>
            <Link
              href="/word-lists"
              className={`flex items-center px-3 py-2 rounded hover:bg-emerald-600 ${
                pathname.startsWith("/word-lists") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <ListTodo className="mr-1 h-4 w-4" />
              <span>Word Lists</span>
            </Link>
            <Link
              href="/verb-conjugation"
              className={`flex items-center px-3 py-2 rounded hover:bg-emerald-600 ${
                pathname.startsWith("/verb-conjugation") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <GraduationCap className="mr-1 h-4 w-4" />
              <span>Verb Conjugation</span>
            </Link>
            <Link
              href="/about"
              className={`flex items-center px-3 py-2 rounded hover:bg-emerald-600 ${
                isActive("/about") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <Info className="mr-1 h-4 w-4" />
              <span>About</span>
            </Link>
            <Link
              href="/divine-names"
              className={`flex items-center px-3 py-2 rounded hover:bg-emerald-600 ${
                isActive("/divine-names") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <Heart className="mr-1 h-4 w-4" />
              <span>Divine Names</span>
            </Link>
            <FontSizeControls />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <FontSizeControls />
            <button onClick={toggleMenu} className="p-2 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className={`block px-4 py-2 rounded hover:bg-emerald-600 ${isActive("/") ? "bg-emerald-800" : ""}`}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                <span>Home</span>
              </div>
            </Link>
            <Link
              href="/vocabulary"
              className={`block px-4 py-2 rounded hover:bg-emerald-600 ${
                isActive("/vocabulary") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <Book className="mr-2 h-5 w-5" />
                <span>Dictionary</span>
              </div>
            </Link>
            <Link
              href="/surah-vocabulary"
              className={`block px-4 py-2 rounded hover:bg-emerald-600 ${
                isActive("/surah-vocabulary") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <BookMarked className="mr-2 h-5 w-5" />
                <span>Surah Browser</span>
              </div>
            </Link>
            <Link
              href="/surah-revelation"
              className={`block px-4 py-2 rounded hover:bg-emerald-600 ${
                pathname.startsWith("/surah-revelation") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                <span>Revelation Contexts</span>
              </div>
            </Link>
            <Link
              href="/games"
              className={`block px-4 py-2 rounded hover:bg-emerald-600 ${
                pathname.startsWith("/games") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <Gamepad2 className="mr-2 h-5 w-5" />
                <span>Games</span>
              </div>
            </Link>
            <Link
              href="/quizzes"
              className={`block px-4 py-2 rounded hover:bg-emerald-600 ${isActive("/quizzes") ? "bg-emerald-800" : ""}`}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <School className="mr-2 h-5 w-5" />
                <span>Quizzes</span>
              </div>
            </Link>
            <Link
              href="/word-lists"
              className={`block px-4 py-2 rounded hover:bg-emerald-600 ${
                pathname.startsWith("/word-lists") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <ListTodo className="mr-2 h-5 w-5" />
                <span>Word Lists</span>
              </div>
            </Link>
            <Link
              href="/verb-conjugation"
              className={`block px-4 py-2 rounded hover:bg-emerald-600 ${
                pathname.startsWith("/verb-conjugation") ? "bg-emerald-800" : ""
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                <span>Verb Conjugation</span>
              </div>
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-2 rounded hover:bg-emerald-600 ${isActive("/about") ? "bg-emerald-800" : ""}`}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <Info className="mr-2 h-5 w-5" />
                <span>About</span>
              </div>
            </Link>
            <Link
              href="/divine-names"
              className={`block px-4 py-2 rounded hover:bg-emerald-600 ${isActive("/divine-names") ? "bg-emerald-800" : ""}`}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <Heart className="mr-2 h-5 w-5" />
                <span>Divine Names</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
