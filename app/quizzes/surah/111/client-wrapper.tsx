"use client"

import dynamic from "next/dynamic"

const SurahMasadQuizClient = dynamic(() => import("./client"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading Surah Al-Masad Quiz...</p>
      </div>
    </div>
  ),
})

export default function SurahMasadQuizWrapper() {
  return <SurahMasadQuizClient />
}
