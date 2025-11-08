import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Games - KALAM",
  description: "Fun and educational games to learn Quranic Arabic vocabulary",
}

export default function GamesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Quranic Games</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Spiritual-Model Card */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800">Spiritual Model Game</CardTitle>
            <CardDescription>Move sliders to see how spiritual factors influence your deeds</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Move sliders and see how different spiritual factors influence your deeds based on Surah Al-Qariah, verses 6-9, which describes the fate of those whose deeds are weighed on the Day of Judgment.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="https://v0-kalam.vercel.app/pages/spiritual-model" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* New Make Quranic Ayats Game Card */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">Make Quranic Ayats</CardTitle>
            <CardDescription>Arrange words to form Quranic verses</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Test your knowledge of Quranic verses by arranging Arabic words in the correct order to form complete
              ayats.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/games/quranic-ayats" passHref>
              <Button className="bg-purple-600 hover:bg-purple-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

             {/* Match Verse & Attribute Game */}
         <Card className="border-emerald-200 bg-purple-50">
          <CardHeader>
             <CardTitle className="text-emerald-800">Match Verse & Attribute</CardTitle>
            <CardDescription>Match Allah's Attributes with the Quranic verses</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test your knowledge of Allah's Attributes by finding out the verses where Allah, The Most Wise, placed them in His Noble Quran.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/attributes" passHref>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>


         {/* Word Search Game */}
        <Card className="border-emerald-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">Word Search</CardTitle>
            <CardDescription>Find Arabic words from the Quran in a grid</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test your recognition of Arabic words by finding them in a word search puzzle.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/word-search" passHref>
              <Button className="bg-blue-600 hover:bg-blue-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

         {/* New Dua & Emotions Matching Game Card */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-purple-800">Match Dua and Emotions</CardTitle>
            <CardDescription>Match each emotion with their best fitting dua</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Test your knowledge of Quranic and Hadith Duas by matching them with the diffferent emotions, and moods that we experience.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/games/dua-emotion-match" passHref>
              <Button className="bg-purple-600 hover:bg-purple-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>


         {/* Correct Ayat Order Game Card */}
        <Card className="border-amber-200 bg-cyan-50">
          <CardHeader>
            <CardTitle className="text-cyan-800">Ayat Arranging Game</CardTitle>
            <CardDescription>Rearrange Ayats in correct order</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Drag and drop Ayats to the correct order as in Quranic passages. Fun way to memorize entire Quranic passages!
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/games/arrange-ayats" passHref>
              <Button className="bg-cyan-600 hover:bg-cyan-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hangman</CardTitle>
            <CardDescription>Guess the Arabic word letter by letter</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test your vocabulary knowledge by guessing Arabic words one letter at a time.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/hangman" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Memory Match</CardTitle>
            <CardDescription>Match Arabic words with their meanings</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Improve your memory and vocabulary by flipping tiles and matching Arabic words with their English translations.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/memory" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Word Matching</CardTitle>
            <CardDescription>Connect Arabic words to their meanings</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Draw lines to connect Arabic words with their correct displayed English translations.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/matching" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-emerald-800">Divine Attributes</CardTitle>
            <CardDescription>Learn the beautiful names of Allah</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Match the Arabic names of Allah (Asma-ul-Husna) with their English meanings in this special matching game.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/games/matching/divine-attributes" passHref>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>


           {/* New Make Dua Match Game Card */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800">Match Duas</CardTitle>
            <CardDescription>Match Duas with their Prophets(AS)</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Test your knowledge of the Quranic Duas by matching each supplication with their respective Prophets(AS).
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/games/dua-match" passHref>
              <Button className="bg-orange-600 hover:bg-orange-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        
        {/* New DSD and Quranic Ayats Game Card */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">DSD in Quranic Ayats</CardTitle>
            <CardDescription>Stage the Quranic verses on the Denial, Stigma, Discrimination (DSD) scale of Gordon Allport</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Test your knowledge of DSD in the Quranic verses by selecting the correct stage in DSD scale as reflected in a specific verse from the Noble Quran.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/games/dsd-quran" passHref>
              <Button className="bg-purple-600 hover:bg-purple-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>


          {/* Crossword Game Card */}
        <Card>
          <CardHeader>
            <CardTitle>Crossword</CardTitle>
            <CardDescription>Fill in Arabic words based on clues</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Complete a crossword puzzle using your knowledge of Quranic Arabic vocabulary.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/crossword" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>


         {/* Word Jumble Game Card */}
        <Card>
          <CardHeader>
            <CardTitle>Word Jumble</CardTitle>
            <CardDescription>Unscramble Arabic letters to form Quranic words</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test your vocabulary knowledge by rearranging jumbled Arabic letters to form correct Quranic words.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/jumble" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>


         {/* FITB Game Card */}
        <Card>
          <CardHeader>
            <CardTitle>Fill in the Blanks</CardTitle>
            <CardDescription>Complete Quranic sentences by filling in missing words</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test your understanding of Quranic verses by filling in the missing words.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/fill-blanks" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>


         {/* Mahram Game Card */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">Knowing Your Mahram</CardTitle>
            <CardDescription>Learn about Mahram relationships in Islam</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Drag and drop relatives into Mahram and Non-Mahram categories to learn about Islamic family relationships.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/games/mahram" passHref>
              <Button className="bg-amber-600 hover:bg-amber-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>



         {/* Missing Letters Game Card */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">Missing Letters</CardTitle>
            <CardDescription>Fill in the missing letters in Arabic words</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test your knowledge of Quranic vocabulary by filling in missing letters in Arabic words.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/missing-letters" passHref>
              <Button className="bg-blue-600 hover:bg-blue-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>


         {/* New Barzaq Game Card */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800">Barzaq Game</CardTitle>
            <CardDescription>Learn about the intermediate state after death</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Explore the concept of Barzaq (the intermediate state between death and resurrection) through an
              interactive educational game based on Islamic teachings.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="https://v0-barzaq.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

      </div>
    </div>
  )
}
