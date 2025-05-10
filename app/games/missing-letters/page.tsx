import { MissingLettersGame } from "@/components/missing-letters-game"

export const metadata = {
  title: "Missing Letters Game | KALAM",
  description: "Fill in the missing letters in Arabic words from the Quran",
}

export default function MissingLettersPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Missing Letters Game</h1>
      <MissingLettersGame />
    </div>
  )
}
