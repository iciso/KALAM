import { InteractiveHijraMap } from "@/components/interactive-hijra-map"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export const metadata = {
  title: "Hijra Journey | KALAM",
  description: "Interactive map and timeline of the Prophet Muhammad's migration from Mecca to Medina",
}

export default function HijraPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">The Hijra Journey</h1>
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        Explore the historic migration of Prophet Muhammad ﷺ from Mecca to Medina in 622 CE, a pivotal event that marks
        the beginning of the Islamic calendar.
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Interactive Map</CardTitle>
          <CardDescription>
            Visualize the route and key locations of the Hijra journey. Click on locations to see details and Quranic
            references.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InteractiveHijraMap />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Events Leading to Hijra</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Persecution of Muslims in Mecca intensifies</li>
              <li>The Pledge of Aqaba with the people of Yathrib (Medina)</li>
              <li>Muslims begin migrating to Medina in small groups</li>
              <li>Plot to assassinate Prophet Muhammad ﷺ</li>
              <li>Divine permission for the Prophet to migrate</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>The Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Prophet Muhammad ﷺ and Abu Bakr leave Mecca</li>
              <li>Hiding in the Cave of Thawr for three days</li>
              <li>Taking the coastal route to avoid pursuers</li>
              <li>Stop at Umm Mabad's tent</li>
              <li>Arrival at Quba on the outskirts of Medina</li>
              <li>Building of Quba Mosque</li>
              <li>Final arrival in Medina</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center gap-2">
          <BookOpen className="h-5 w-5 text-red-600" />
          <CardTitle>Quranic References</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Hijra journey is referenced in several places in the Quran, highlighting its spiritual and historical
            significance. These verses provide divine context for the events of the migration and emphasize its
            importance in Islamic history.
          </p>
          <p className="mb-4">
            Key Quranic references include Surah At-Tawbah (9:40), which directly mentions the Prophet and Abu Bakr in
            the Cave of Thawr, and Surah Al-Anfal (8:30), which refers to the plot against the Prophet that precipitated
            the Hijra.
          </p>
          <p>
            Click on each location in the interactive map above and select the "Quranic References" tab to explore
            relevant verses, their context, and their specific relevance to each stage of the journey.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Historical Significance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Hijra represents not just a physical journey but a pivotal moment in Islamic history that:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Marks the beginning of the Islamic calendar (1 AH)</li>
            <li>Established the first Islamic community and state</li>
            <li>Transformed Islam from a personal faith to a complete social system</li>
            <li>Demonstrated the Prophet's trust in Allah during extreme adversity</li>
            <li>Set the foundation for the spread of Islam throughout Arabia and beyond</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
