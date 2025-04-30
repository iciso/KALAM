"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, Volume2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface AudioPlaceholderProps {
  label?: string
  compact?: boolean
  className?: string
}

export function AudioPlaceholder({ label, compact = false, className }: AudioPlaceholderProps) {
  const [showAlert, setShowAlert] = useState(false)

  const handleClick = () => {
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  if (compact) {
    return (
      <div className={className}>
        <Button variant="ghost" size="icon" onClick={handleClick} aria-label="Audio not available">
          <Volume2 className="h-4 w-4 text-gray-400" />
        </Button>
        {label && <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{label}</span>}
        {showAlert && (
          <div className="absolute z-50 mt-2 w-64 text-xs bg-white dark:bg-gray-800 p-2 rounded shadow-lg border">
            Audio files are placeholders. Add real audio files to enable playback.
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      {showAlert && (
        <Alert variant="destructive" className="mb-2">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Audio Not Available</AlertTitle>
          <AlertDescription>
            The audio files referenced in the app are placeholders. Add real audio files to the project to enable
            playback functionality.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={handleClick} aria-label="Audio not available">
          <Volume2 className="h-4 w-4 text-gray-400" />
        </Button>
        <div className="text-sm text-gray-500">{label || "Audio not available"}</div>
      </div>
    </div>
  )
}
