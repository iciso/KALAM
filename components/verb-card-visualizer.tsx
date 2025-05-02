"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface VerbPartProps {
  text: string
  type: "prefix" | "root" | "suffix"
  showLabel?: boolean
}

const VerbPart = ({ text, type, showLabel = true }: VerbPartProps) => {
  const getColorClass = () => {
    switch (type) {
      case "prefix":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "root":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "suffix":
        return "bg-amber-100 text-amber-800 border-amber-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getLabel = () => {
    switch (type) {
      case "prefix":
        return "سابقة"
      case "root":
        return "جذر"
      case "suffix":
        return "لاحقة"
      default:
        return ""
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className={`px-3 py-2 rounded-md border ${getColorClass()} font-arabic text-2xl min-w-[40px] text-center`}>
        {text}
      </div>
      {showLabel && <div className="text-xs mt-1 font-arabic">{getLabel()}</div>}
    </div>
  )
}

interface VerbCardVisualizerProps {
  prefix?: string
  root: string
  suffix?: string
  translation: string
  person: string
  gender?: string
  number: string
}

export function VerbCardVisualizer({
  prefix,
  root,
  suffix,
  translation,
  person,
  gender,
  number,
}: VerbCardVisualizerProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  const startAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1500)
  }

  return (
    <Card className="p-4 relative overflow-hidden">
      <div className="mb-3">
        <h4 className="font-medium text-center">{translation}</h4>
        <p className="text-sm text-center text-muted-foreground">
          {person} {gender ? `(${gender})` : ""} {number}
        </p>
      </div>

      <div className="flex justify-center mb-4">
        <Button size="sm" onClick={startAnimation} disabled={isAnimating}>
          {isAnimating ? "Animating..." : "Show Formation"}
        </Button>
      </div>

      <div className="flex justify-center items-center gap-0 dir-rtl">
        {/* In RTL, the prefix appears on the right, root in the middle, suffix on the left */}
        {prefix && (
          <motion.div
            initial={isAnimating ? { x: -50, opacity: 0 } : { x: 0, opacity: 1 }}
            animate={isAnimating ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <VerbPart text={prefix} type="prefix" />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 1 }}
          animate={isAnimating ? { scale: [1, 1.1, 1] } : { scale: 1 }}
          transition={{ duration: 0.5 }}
          className="z-10"
        >
          <VerbPart text={root} type="root" />
        </motion.div>

        {suffix && (
          <motion.div
            initial={isAnimating ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
            animate={isAnimating ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <VerbPart text={suffix} type="suffix" />
          </motion.div>
        )}
      </div>

      <div className="mt-6 text-center">
        <div className="text-sm font-medium">Complete Form:</div>
        <div className="font-arabic text-2xl mt-1 dir-rtl">
          {prefix || ""}
          {root}
          {suffix || ""}
        </div>
      </div>
    </Card>
  )
}
