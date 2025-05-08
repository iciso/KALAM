import SurahRevelationExplorer from "@/components/surah-revelation-explorer"

export default function SurahRevelationPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Asbab al-Nuzul: Surah Al-Baqarah</h1>
      <SurahRevelationExplorer />
    </div>
  )
}
