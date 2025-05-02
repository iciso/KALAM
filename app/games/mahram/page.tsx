import MahramGame from "@/components/mahram-game"

export const metadata = {
  title: "Knowing Your Mahram - KALAM",
  description: "Learn about Mahram relationships in Islam through an interactive game with Quranic references",
}

export default function MahramGamePage() {
  return (
    <div className="container mx-auto py-8">
      <MahramGame />
    </div>
  )
}
