"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ImanOMeterProps {
  score: number
  maxScore: number
  className?: string
}

export function ImanOMeter({ score, maxScore, className }: ImanOMeterProps) {
  // Calculate percentage of score
  const percentage = Math.max(0, Math.min(100, (score / maxScore) * 100))

  // Determine color based on percentage
  const getColor = (percent: number) => {
    if (percent >= 80) return "bg-emerald-500"
    if (percent >= 60) return "bg-green-500"
    if (percent >= 40) return "bg-yellow-500"
    if (percent >= 20) return "bg-orange-500"
    return "bg-red-500"
  }

  // Get text color based on percentage
  const getTextColor = (percent: number) => {
    if (percent >= 40) return "text-emerald-800"
    return "text-red-800"
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">Iman-o-meter</span>
        <span className={cn("text-sm font-medium", getTextColor(percentage))}>
          {score} / {maxScore}
        </span>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", getColor(percentage))}
          initial={{ width: "100%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="flex justify-between text-xs mt-1">
        <span>Low Faith</span>
        <span>High Faith</span>
      </div>
    </div>
  )
}
