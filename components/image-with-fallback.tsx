"use client"

import { useState, useEffect } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackSrc = "/abstract-colorful-swirls.png",
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    setImgSrc(src)
    setIsLoading(true)
    setHasError(false)
  }, [src])

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-pulse">
          <span className="sr-only">Loading...</span>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center p-4">Image could not be loaded</span>
        </div>
      )}

      <img
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
          setImgSrc(fallbackSrc)
        }}
      />
    </div>
  )
}
