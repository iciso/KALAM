"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Brain, Star, Lightbulb, Puzzle, Smile } from "lucide-react"
import { cn } from "@/lib/utils"

interface KalamAcronymProps {
  className?: string
  interactive?: boolean
  size?: "sm" | "md" | "lg"
}

export function KalamAcronym({ className, interactive = true, size = "md" }: KalamAcronymProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const acronymItems = [
    {
      letter: "K",
      word: "Know",
      description: "Discover the meanings and context of Quranic vocabulary",
      icon: Brain,
      color: "bg-emerald-100 text-emerald-700",
      hoverColor: "group-hover:bg-emerald-200",
    },
    {
      letter: "A",
      word: "Allah",
      description: "Connect with the divine through understanding His words",
      icon: Star,
      color: "bg-amber-100 text-amber-700",
      hoverColor: "group-hover:bg-amber-200",
    },
    {
      letter: "L",
      word: "Lighting up",
      description: "Illuminate your understanding of the Quran",
      icon: Lightbulb,
      color: "bg-yellow-100 text-yellow-700",
      hoverColor: "group-hover:bg-yellow-200",
    },
    {
      letter: "A",
      word: "Activities",
      description: "Engage with interactive learning experiences",
      icon: Puzzle,
      color: "bg-sky-100 text-sky-700",
      hoverColor: "group-hover:bg-sky-200",
    },
    {
      letter: "M",
      word: "Mirth",
      description: "Enjoy the journey of learning with joy and happiness",
      icon: Smile,
      color: "bg-purple-100 text-purple-700",
      hoverColor: "group-hover:bg-purple-200",
    },
  ]

  const sizeClasses = {
    sm: {
      container: "gap-2",
      item: "h-12 w-12",
      letter: "text-lg",
      word: "text-xs",
      icon: 16,
    },
    md: {
      container: "gap-3",
      item: "h-16 w-16",
      letter: "text-xl",
      word: "text-sm",
      icon: 20,
    },
    lg: {
      container: "gap-4",
      item: "h-20 w-20",
      letter: "text-2xl",
      word: "text-base",
      icon: 24,
    },
  }

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("flex justify-center", sizeClasses[size].container)}>
        {acronymItems.map((item, index) => (
          <div
            key={index}
            className={cn(
              "group relative flex flex-col items-center transition-all duration-300",
              interactive && "cursor-pointer",
            )}
            onMouseEnter={() => interactive && setHoveredIndex(index)}
            onMouseLeave={() => interactive && setHoveredIndex(null)}
          >
            <motion.div
              className={cn(
                "flex flex-col items-center justify-center rounded-lg shadow-md transition-all duration-300",
                item.color,
                interactive && item.hoverColor,
                sizeClasses[size].item,
              )}
              whileHover={interactive ? { scale: 1.1, y: -5 } : {}}
              animate={
                hoveredIndex === index
                  ? { scale: 1.1, y: -5 }
                  : hoveredIndex !== null
                    ? { scale: 0.95, y: 0 }
                    : { scale: 1, y: 0 }
              }
            >
              <span className={cn("font-bold", sizeClasses[size].letter)}>{item.letter}</span>
              <item.icon size={sizeClasses[size].icon} className="mt-1" />
            </motion.div>
            <div
              className={cn(
                "mt-2 text-center font-medium transition-opacity duration-300",
                sizeClasses[size].word,
                hoveredIndex === index ? "opacity-100" : "opacity-70",
              )}
            >
              {item.word}
            </div>
            {interactive && (
              <div
                className={cn(
                  "absolute -bottom-12 left-1/2 w-48 -translate-x-1/2 rounded bg-white p-2 text-center text-xs shadow-lg transition-all duration-300",
                  hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
                )}
              >
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
