import SurahImranExplorer from "@/components/surah-imran-explorer"
import SurahSelector from "@/components/surah-selector"

export default function SurahImranPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Asbab al-Nuzul: Surah Ali 'Imran</h1>
      <SurahSelector />
      <SurahImranExplorer />
    </div>
  )
}
