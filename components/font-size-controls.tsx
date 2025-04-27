"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { type FontSizeLevel, useFontSize } from "@/contexts/font-size-context"
import { MinusCircle, PlusCircle, Type } from "lucide-react"

export function FontSizeControls() {
  const { fontSizeLevel, increaseFontSize, decreaseFontSize } = useFontSize()

  // Map font size level to a human-readable label
  const fontSizeLabelMap: Record<FontSizeLevel, string> = {
    small: "S",
    medium: "M",
    large: "L",
    "x-large": "XL",
  }

  return (
    <div className="font-size-controls">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={decreaseFontSize}
              disabled={fontSizeLevel === "small"}
              className="rounded-full h-8 w-8"
              aria-label="Decrease Arabic font size"
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Decrease Arabic font size</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="font-size-indicator flex items-center">
              <Type className="h-4 w-4 mr-1" />
              <span className="text-xs font-medium">{fontSizeLabelMap[fontSizeLevel]}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Current Arabic font size: {fontSizeLabelMap[fontSizeLevel]}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={increaseFontSize}
              disabled={fontSizeLevel === "x-large"}
              className="rounded-full h-8 w-8"
              aria-label="Increase Arabic font size"
            >
              <PlusCircle className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Increase Arabic font size</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
