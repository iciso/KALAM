import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Prophet Family Tree - KALAM",
  description: "Family relationships between prophets mentioned in the Quran",
}

export default function ProphetFamilyTreePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Prophet Family Tree</h1>
        <Link href="/prophets">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Prophets
          </Button>
        </Link>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Many prophets mentioned in the Quran were related to each other. This family tree visualization shows the
        relationships between prophets, particularly the lineage from Ibrahim (Abraham) to Muhammad.
      </p>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
            <h2 className="text-xl font-bold mb-4">Prophet Family Tree Visualization</h2>
            <p className="mb-4">
              This interactive family tree shows the relationships between prophets mentioned in the Quran, with a focus
              on the lineage from Ibrahim (Abraham).
            </p>
            <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">Family tree visualization coming soon!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Key Family Relationships</h2>
          <ul className="space-y-2">
            <li>
              <strong>Ibrahim (Abraham):</strong> Father of Isma'il (Ishmael) and Ishaq (Isaac)
            </li>
            <li>
              <strong>Ishaq (Isaac):</strong> Son of Ibrahim, father of Ya'qub (Jacob)
            </li>
            <li>
              <strong>Ya'qub (Jacob):</strong> Son of Ishaq, father of Yusuf (Joseph) and 11 other sons
            </li>
            <li>
              <strong>Imran:</strong> Father of Maryam (Mary), the mother of Isa (Jesus)
            </li>
            <li>
              <strong>Zakariyya (Zechariah):</strong> Father of Yahya (John the Baptist), guardian of Maryam
            </li>
            <li>
              <strong>Muhammad:</strong> Descendant of Isma'il (Ishmael), son of Ibrahim
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Lineage of Prophets</h2>
          <p className="mb-4">
            The Quran mentions that Allah chose certain families and granted them prophethood through their lineage:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic">
            "Allah chose Adam and Nuh (Noah), the family of Ibrahim (Abraham), and the family of Imran above all people
            of their time." (Quran 3:33)
          </blockquote>
        </div>
      </div>

      <div className="text-center">
        <Link href="/prophets">
          <Button>Back to Prophets Hub</Button>
        </Link>
      </div>
    </div>
  )
}
