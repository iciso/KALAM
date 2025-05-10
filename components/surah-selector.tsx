"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SurahSelector() {
  const pathname = usePathname()

  // Get supported Surahs that have detailed revelation context data
  const supportedSurahs = [
    { id: 2, name: "Al-Baqarah" },
    { id: 3, name: "Ali 'Imran" },
  ]

  // Determine currently selected surah from path
  const currentSurahId = pathname.includes("/surah-revelation/") ? Number(pathname.split("/").pop()) : null

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-3">Select a Surah</h2>
      <div className="flex flex-wrap gap-2">
        {supportedSurahs.map((surah) => (
          <Link key={surah.id} href={`/surah-revelation/${surah.id}`}>
            <Button
              variant={currentSurahId === surah.id ? "default" : "outline"}
              className={currentSurahId === surah.id ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              {surah.id}. {surah.name}
            </Button>
          </Link>
        ))}
        <Link href="/surah-revelation">
          <Button variant="ghost">View All Surahs</Button>
        </Link>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Detailed revelation context explorers are available for {supportedSurahs.length} surahs. More surahs will be
        added in future updates.
      </p>
    </div>
  )
}
