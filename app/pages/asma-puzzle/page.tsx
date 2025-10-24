"use client"

import AsmaUlHusnaPuzzle from "@/components/AsmaUlHusnaPuzzle"

export default function AsmaPuzzlePage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-purple-900">أسماء الله الحسنى</h1>
        <p className="text-center text-gray-600 mb-8">Asma ul Husna - The Beautiful Names of Allah</p>
        <AsmaUlHusnaPuzzle />
      </div>
    </div>
  )
}
