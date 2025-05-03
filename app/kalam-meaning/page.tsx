import { KalamAcronym } from "@/components/kalam-acronym"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function KalamMeaningPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-center text-3xl font-bold">The Meaning of KALAM</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">KALAM: Know Allah by Lighting up Activities of Mirth</CardTitle>
            <CardDescription className="text-center">
              Our acronym represents our mission to make learning Quranic Arabic enjoyable and meaningful
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <KalamAcronym size="lg" withLinks={true} />
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At KALAM, we believe that learning should be joyful. By combining educational content with engaging
                activities, we help you connect with the language of the Quran in a meaningful way.
              </p>
              <p className="mt-4">
                Each letter in our name represents a core aspect of our philosophy toward Quranic Arabic learning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why It Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Understanding the Quran in its original language creates a deeper connection with its message. Our
                approach makes this journey accessible and enjoyable for everyone, regardless of their current Arabic
                proficiency.
              </p>
              <p className="mt-4">
                By lighting up the path to knowledge with activities full of mirth, we hope to inspire a lifelong love
                for the language of the Quran.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Click on any letter to explore the corresponding learning experience!
          </p>
        </div>
      </div>
    </div>
  )
}
