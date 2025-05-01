import type React from "react"

interface RibbonProps {
  text: string
  color: string
  textColor: string
  position: "top-left" | "top-right"
}

export const Ribbon: React.FC<RibbonProps> = ({ text, color, textColor, position }) => {
  const positionStyles = {
    "top-left": "left-0",
    "top-right": "right-0",
  }

  return (
    <div className={`absolute top-0 ${positionStyles[position]} z-10 overflow-hidden`}>
      <div className={`${color} ${textColor} py-1 px-10 font-bold text-xs md:text-sm uppercase shadow-md`}>{text}</div>
    </div>
  )
}
