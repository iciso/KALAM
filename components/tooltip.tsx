// components/tooltip.tsx
"use client"

import React from "react"

interface TooltipProps {
  children: React.ReactNode
  content: string
  position?: "top" | "bottom" | "left" | "right"
}

export function Tooltip({ children, content, position = "bottom" }: TooltipProps) {
  const positionClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2",
  }

  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`absolute ${positionClasses[position]} hidden group-hover:block px-3 py-2 text-sm text-white bg-gray-800 rounded-md whitespace-nowrap z-50`}
      >
        {content}
        <div
          className={`absolute w-2 h-2 bg-gray-800 transform rotate-45 ${
            position === "top" ? "-bottom-1" :
            position === "bottom" ? "-top-1" :
            position === "left" ? "-right-1" :
            "-left-1"
          }`}
        />
      </div>
    </div>
  )
}
