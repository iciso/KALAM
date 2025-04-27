"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { AudioPlaceholder } from "./audio-placeholder"

interface AudioPlayerProps {
  audioUrl: string
  label?: string
  compact?: boolean
  onPlay?: () => void
  onPause?: () => void
  onEnded?: () => void
  className?: string
}

export function AudioPlayer({
  audioUrl,
  label,
  compact = false,
  onPlay,
  onPause,
  onEnded,
  className,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Check if we're in a development environment with placeholder audio
  const isPlaceholderAudio = audioUrl.startsWith("/audio/") && typeof window !== "undefined"

  // If we're using placeholder audio, return the placeholder component
  if (isPlaceholderAudio) {
    return <AudioPlaceholder label={label} compact={compact} className={className} />
  }

  useEffect(() => {
    let audio: HTMLAudioElement | null = null
    let intervalId: NodeJS.Timeout | null = null

    const initializeAudio = () => {
      audio = new Audio(audioUrl)
      audioRef.current = audio

      const handleLoadedMetadata = () => {
        setDuration(audio!.duration)
        setIsLoading(false)
      }

      const handleEnded = () => {
        setIsPlaying(false)
        setCurrentTime(0)
        if (onEnded) onEnded()
      }

      const handleError = () => {
        setError("Failed to load audio")
        setIsLoading(false)
      }

      audio.addEventListener("loadedmetadata", handleLoadedMetadata)
      audio.addEventListener("ended", handleEnded)
      audio.addEventListener("error", handleError)

      intervalId = setInterval(() => {
        if (audio) {
          setCurrentTime(audio.currentTime)
        }
      }, 100)

      return () => {
        if (intervalId) {
          clearInterval(intervalId)
        }

        audio.pause()
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
        audio.removeEventListener("ended", handleEnded)
        audio.removeEventListener("error", handleError)
      }
    }

    const cleanup = initializeAudio()

    return () => {
      if (cleanup) {
        cleanup()
      }
    }
  }, [audioUrl, onEnded])

  const togglePlayPause = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      setIsPlaying(false)
      if (onPause) onPause()
    } else {
      audioRef.current.play()
      intervalRef.current = setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime)
        }
      }, 100)
      setIsPlaying(true)
      if (onPlay) onPlay()
    }
  }

  const handleTimeChange = (value: number[]) => {
    if (!audioRef.current) return

    const newTime = value[0]
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (value: number[]) => {
    if (!audioRef.current) return

    const newVolume = value[0]
    audioRef.current.volume = newVolume
    setVolume(newVolume)

    if (newVolume === 0) {
      setIsMuted(true)
    } else if (isMuted) {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return

    if (isMuted) {
      audioRef.current.volume = volume || 1
      setIsMuted(false)
    } else {
      audioRef.current.volume = 0
      setIsMuted(true)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  if (compact) {
    return (
      <div className={cn("flex items-center", className)}>
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlayPause}
          disabled={isLoading || !!error}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
          ) : error ? (
            <VolumeX className="h-4 w-4 text-red-500" />
          ) : isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        {label && <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{label}</span>}
      </div>
    )
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlayPause}
          disabled={isLoading || !!error}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
          ) : error ? (
            <VolumeX className="h-4 w-4 text-red-500" />
          ) : isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>

        <div className="flex-1">
          <Slider
            value={[currentTime]}
            min={0}
            max={duration || 100}
            step={0.1}
            onValueChange={handleTimeChange}
            disabled={isLoading || !!error}
            aria-label="Audio progress"
          />
        </div>

        <div className="text-xs text-gray-500 w-16 text-right">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          disabled={isLoading || !!error}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>

        <div className="w-24">
          <Slider
            value={[isMuted ? 0 : volume]}
            min={0}
            max={1}
            step={0.01}
            onValueChange={handleVolumeChange}
            disabled={isLoading || !!error}
            aria-label="Volume"
          />
        </div>

        {label && <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{label}</span>}

        {error && <span className="text-xs text-red-500 ml-auto">{error}</span>}
      </div>
    </div>
  )
}
