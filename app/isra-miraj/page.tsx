import { InteractiveIsraMiraj } from "@/components/interactive-isra-miraj"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export const metadata = {
  title: "Isra and Miraj - The Night Journey",
  description: "Explore the miraculous night journey of Prophet Muhammad ﷺ through the seven heavens",
}

export default function IsraMirajPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-2 text-amber-700 dark:text-amber-300">
        Isra and Miraj: The Night Journey
      </h1>
      <p className="text-center mb-4 text-amber-600 dark:text-amber-400">
        Explore the miraculous journey of Prophet Muhammad ﷺ from Mecca to Jerusalem and through the seven heavens
      </p>

      <div className="flex justify-center mb-8">
        <Link href="/isra-miraj/timeline-comparison">
          <Button variant="outline" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            View in Prophetic Timeline
          </Button>
        </Link>
      </div>

      <InteractiveIsraMiraj />

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          Note: The visual representations are artistic interpretations and not meant to be literal depictions of the
          prophets or divine realms, in accordance with Islamic principles.
        </p>
      </div>
    </div>
  )
}
