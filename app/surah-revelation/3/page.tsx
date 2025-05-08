import AdvancedAsbabVisualizer from "@/components/advanced-asbab-visualizer"

export default function SurahImranRevelationPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Asbab al-Nuzul: Surah Al-Imran</h1>
      <AdvancedAsbabVisualizer surahId={3} />
    </div>
  )
}
