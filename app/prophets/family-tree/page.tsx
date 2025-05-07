import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BookOpen, Users, Clock } from "lucide-react"
import ProphetFamilyTree from "@/components/prophet-family-tree"

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
        Many prophets mentioned in the Quran were related to each other. This interactive family tree visualization
        shows the relationships between prophets, particularly the lineage from Ibrahim (Abraham) to Muhammad.
      </p>

      <div className="mb-8">
        <ProphetFamilyTree />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 mr-2 text-blue-500" />
            <h2 className="text-xl font-bold">Key Family Relationships</h2>
          </div>
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
          <div className="flex items-center mb-4">
            <BookOpen className="h-6 w-6 mr-2 text-green-500" />
            <h2 className="text-xl font-bold">Quranic References</h2>
          </div>
          <p className="mb-4">
            The Quran mentions that Allah chose certain families and granted them prophethood through their lineage:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic">
            "Allah chose Adam and Nuh (Noah), the family of Ibrahim (Abraham), and the family of Imran above all people
            of their time." (Quran 3:33)
          </blockquote>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Clock className="h-6 w-6 mr-2 text-amber-500" />
            <h2 className="text-xl font-bold">Timeline Context</h2>
          </div>
          <p className="mb-2">
            The prophets mentioned in the Quran lived across different time periods spanning thousands of years:
          </p>
          <ul className="space-y-1 text-sm">
            <li>
              <strong>Adam:</strong> Beginning of humanity
            </li>
            <li>
              <strong>Nuh (Noah):</strong> ~3000-4000 BCE
            </li>
            <li>
              <strong>Ibrahim (Abraham):</strong> ~1800-2000 BCE
            </li>
            <li>
              <strong>Musa (Moses):</strong> ~1300-1400 BCE
            </li>
            <li>
              <strong>Dawud (David):</strong> ~1000 BCE
            </li>
            <li>
              <strong>Isa (Jesus):</strong> ~0-30 CE
            </li>
            <li>
              <strong>Muhammad:</strong> 570-632 CE
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-8">
        <h2 className="text-xl font-bold mb-4">Understanding the Prophetic Lineage</h2>
        <p className="mb-4">
          The lineage of prophets in Islam is significant as it demonstrates how Allah chose certain families to carry
          His message. The most notable lineage is that of Ibrahim (Abraham), from whom came many prophets.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">The Line of Isma'il (Ishmael)</h3>
            <p>
              From Isma'il's descendants came the Arabs, and after many generations, Prophet Muhammad. This fulfills the
              prayer of Ibrahim that a messenger would be raised from among Isma'il's descendants.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">The Line of Ishaq (Isaac)</h3>
            <p>
              From Ishaq came Ya'qub (Jacob), also known as Isra'il (Israel), from whom the Israelites descended. Many
              prophets came from this lineage, including Yusuf (Joseph), Musa (Moses), Dawud (David), Sulayman
              (Solomon), and Isa (Jesus).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800 mb-8">
        <h2 className="text-xl font-bold mb-4">Interactive Features</h2>
        <p className="mb-4">
          This family tree visualization includes several interactive features to help you explore the relationships
          between prophets:
        </p>
        <ul className="space-y-2 ml-6 list-disc">
          <li>
            <strong>Click on any prophet</strong> to view detailed information about them
          </li>
          <li>
            <strong>Use the tabs</strong> to switch between different views (Family Tree, Lineage View, Prophet Info)
          </li>
          <li>
            <strong>Click on legend items</strong> to highlight specific lineages
          </li>
          <li>
            <strong>Use zoom controls</strong> to adjust the view size
          </li>
        </ul>
      </div>

      <div className="text-center">
        <Link href="/prophets">
          <Button>Back to Prophets Hub</Button>
        </Link>
      </div>
    </div>
  )
}
