"use client"

import { useEffect, useRef } from "react"

export function SimpleHijraMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mapElement = mapRef.current
    if (!mapElement) return

    mapElement.innerHTML = `
      <div class="relative w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg">
        <img src="/images/hijra/arabia-map.jpg" alt="Map of Arabia" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-lg"></div>
        <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <h3 class="text-xl font-bold mb-2">Interactive Map Coming Soon</h3>
          <p class="text-sm text-center max-w-md px-4">
            This will be an interactive map showing the route of the Hijra from Mecca to Medina, with markers for key locations.
          </p>
        </div>
      </div>
    `
  }, [])

  return (
    <div ref={mapRef} className="w-full">
      {/* Map content will be rendered here */}
    </div>
  )
}
