import SurahRevelationExplorer from "@/components/surah-revelation-explorer"
import SurahSelector from "@/components/surah-selector"

export default function SurahBaqarahPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Asbab al-Nuzul: Surah Al-Baqarah</h1>
      <SurahSelector />
      <SurahRevelationExplorer />
    </div>
  )
}
