"use client"

import { useState, useEffect } from "react"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, RefreshCw, Award, HelpCircle, Info } from "lucide-react"

interface AyatWord {
  id: string
  text: string
}

interface QuranicAyat {
  surah: string
  ayat: string
  words: AyatWord[]
  translation: string
}

// Default data in case import fails
const defaultAyats: Record<string, QuranicAyat[]> = {
easy: [
    // 1st Ayah (Bismillah)
    [
      { id: '1-1', text: 'بسم' },
      { id: '1-2', text: 'الله' },
      { id: '1-3', text: 'الرحمن' },
      { id: '1-4', text: 'الرحيم' }
    ],
    // 2nd Ayah (Al-Fatiha 1:2)
    [
      { id: '2-1', text: 'الحمد' },
      { id: '2-2', text: 'لله' },
      { id: '2-3', text: 'رب' },
      { id: '2-4', text: 'العالمين' }
    ],
    // 3rd Ayah (Al-Fatiha 1:3)
    [
      { id: '3-1', text: 'الرحمن' },
      { id: '3-2', text: 'الرحيم' }
    ],
    // 4th Ayah (Al-Fatiha 1:4)
    [
      { id: '4-1', text: 'مالك' },
      { id: '4-2', text: 'يوم' },
      { id: '4-3', text: 'الدين' }
    ],
    // 5th Ayah (Al-Fatiha 1:5)
    [
      { id: '5-1', text: 'إياك' },
      { id: '5-2', text: 'نعبد' },
      { id: '5-3', text: 'وإياك' },
      { id: '5-4', text: 'نستعين' }
    ]
  ],
  medium: [
    // 1st Ayah (Al-Baqarah 2:255 - Ayatul Kursi part 1)
    [
      { id: 'm1-1', text: 'الله' },
      { id: 'm1-2', text: 'لا' },
      { id: 'm1-3', text: 'إله' },
      { id: 'm1-4', text: 'إلا' },
      { id: 'm1-5', text: 'هو' }
    ],
    // 2nd Ayah (Ayatul Kursi part 2)
    [
      { id: 'm2-1', text: 'الحي' },
      { id: 'm2-2', text: 'القيوم' }
    ],
    // 3rd Ayah (Ayatul Kursi part 3)
    [
      { id: 'm3-1', text: 'لا' },
      { id: 'm3-2', text: 'تأخذه' },
      { id: 'm3-3', text: 'سنة' },
      { id: 'm3-4', text: 'ولا' },
      { id: 'm3-5', text: 'نوم' }
    ],
    // 4th Ayah (Al-Ikhlas 112:1)
    [
      { id: 'm4-1', text: 'قل' },
      { id: 'm4-2', text: 'هو' },
      { id: 'm4-3', text: 'الله' },
      { id: 'm4-4', text: 'أحد' }
    ],
    // 5th Ayah (Al-Ikhlas 112:2)
    [
      { id: 'm5-1', text: 'الله' },
      { id: 'm5-2', text: 'الصمد' }
    ]
  ],
  hard: [
    // 1st Ayah (Al-Baqarah 2:186)
    [
      { id: 'h1-1', text: 'وإذا' },
      { id: 'h1-2', text: 'سألك' },
      { id: 'h1-3', text: 'عبادي' },
      { id: 'h1-4', text: 'عني' }
    ],
    // 2nd Ayah (continued)
    [
      { id: 'h2-1', text: 'فإني' },
      { id: 'h2-2', text: 'قريب' }
    ],
    // 3rd Ayah (continued)
    [
      { id: 'h3-1', text: 'أجيب' },
      { id: 'h3-2', text: 'دعوة' },
      { id: 'h3-3', text: 'الداع' }
    ],
    // 4th Ayah (Al-Muzzammil 73:1)
    [
      { id: 'h4-1', text: 'يا' },
      { id: 'h4-2', text: 'أيها' },
      { id: 'h4-3', text: 'المزمل' }
    ],
    // 5th Ayah (Al-Muzzammil 73:2)
    [
      { id: 'h5-1', text: 'قم' },
      { id: 'h5-2', text: 'الليل' },
      { id: 'h5-3', text: 'إلا' },
      { id: 'h5-4', text: 'قليلا' }
    ]
  ],
  correctOrders: {
    easy: [
      ['1-1', '1-2', '1-3', '1-4'], // Bismillah
      ['2-1', '2-2', '2-3', '2-4'], // Alhamdulillah
      ['3-1', '3-2'],                // Ar-Rahmanir-Raheem
      ['4-1', '4-2', '4-3'],         // Maaliki yawmid-deen
      ['5-1', '5-2', '5-3', '5-4']   // Iyyaka na'budu
    ],
    medium: [
      ['m1-1', 'm1-2', 'm1-3', 'm1-4', 'm1-5'], // Allahu la ilaha illa huwa
      ['m2-1', 'm2-2'],                          // Al-Hayyul Qayyum
      ['m3-1', 'm3-2', 'm3-3', 'm3-4', 'm3-5'],  // La ta'khudhuhu sinatun wa la nawm
      ['m4-1', 'm4-2', 'm4-3', 'm4-4'],          // Qul huwa Allahu ahad
      ['m5-1', 'm5-2']                           // Allahus-Samad
    ],
    hard: [
      ['h1-1', 'h1-2', 'h1-3', 'h1-4'], // Wa idha sa'alaka
      ['h2-1', 'h2-2'],                  // Fa inni qareeb
      ['h3-1', 'h3-2', 'h3-3'],          // Ujeebu da'watad-da'i
      ['h4-1', 'h4-2', 'h4-3'],          // Ya ayyuhal-muzzammil
      ['h5-1', 'h5-2', 'h5-3', 'h5-4']   // Qumil-layla illa qaleela
    ]
    ],
  translations: {
  easy: [
    "In the name of Allah, the Entirely Merciful, the Especially Merciful",
    "[All] praise is [due] to Allah, Lord of the worlds",
    "The Entirely Merciful, the Especially Merciful",
    "Sovereign of the Day of Recompense",
    "It is You we worship and You we ask for help"
  ],
  medium: [
    "Allah - there is no deity except Him",
    "the Ever-Living, the Sustainer of existence",
    "Neither drowsiness overtakes Him nor sleep",
    "Say, 'He is Allah, [who is] One'",
    "Allah, the Eternal Refuge"
  ],
  hard: [
    "And when My servants ask you concerning Me",
    "then indeed I am near",
    "I respond to the invocation of the supplicant",
    "O you who wraps himself [in clothing]",
    "Stand [in prayer] by night, except for a little"
  ]
  }
}

const getRandomAyats = (count: number, difficulty: string): QuranicAyat[] => {
  const ayats = defaultAyats[difficulty] || defaultAyats.easy
  return [...ayats].slice(0, count)
}


export default function QuranicAyatsClient() {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy")
  const [ayatCount, setAyatCount] = useState(3)
  const [showTranslation, setShowTranslation] = useState(false)

  const handleDifficultyChange = (value: string) => {
    setDifficulty(value as "easy" | "medium" | "hard")
    toast.info(`Difficulty set to ${value}`, {
      description: "Starting new game with selected difficulty",
      duration: 1500
    })
  }

  const handleAyatCountChange = (count: number) => {
    setAyatCount(count)
    toast.info(`Set to ${count} ayahs per game`, {
      duration: 1500
    })
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-700 dark:text-green-500">Quranic Ayats Game</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Info className="h-4 w-4 mr-2" /> How to Play
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How to Play the Quranic Ayats Game</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm">
                Arrange the Arabic words to form the correct Quranic verse. The game helps you learn Quranic verses 
                while practicing Arabic reading from right to left.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Drag and drop words to rearrange them</li>
                <li>Double-click on a word to select it</li>
                <li>Check your answer when you think it's correct</li>
                <li>Higher difficulties give more points</li>
                <li>Complete all ayahs to finish the game</li>
              </ul>
              <p className="text-xs text-muted-foreground">
                Note: The game uses actual Quranic verses from the Mushaf.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Game Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Difficulty Level</h3>
              <Tabs 
                value={difficulty} 
                onValueChange={handleDifficultyChange}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="easy">Easy</TabsTrigger>
                  <TabsTrigger value="medium">Medium</TabsTrigger>
                  <TabsTrigger value="hard">Hard</TabsTrigger>
                </TabsList>
              </Tabs>
              <p className="text-sm text-muted-foreground mt-2">
                {difficulty === "easy" 
                  ? "Short verses with common words" 
                  : difficulty === "medium" 
                  ? "Medium length verses" 
                  : "Longer verses with complex arrangements"}
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Number of Ayahs</h3>
              <div className="flex gap-2">
                {[3, 5, 7].map((count) => (
                  <Button
                    key={count}
                    variant={ayatCount === count ? "default" : "outline"}
                    onClick={() => handleAyatCountChange(count)}
                    className="flex-1"
                  >
                    {count}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Number of verses to complete in one game session
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button
              variant="secondary"
              onClick={() => setShowTranslation(!showTranslation)}
              className="flex-1"
            >
              {showTranslation ? (
                <>
                  <EyeOff className="mr-2 h-4 w-4" />
                  Hide Translation
                </>
              ) : (
                <>
                  <Eye className="mr-2 h-4 w-4" />
                  Show Translation
                </>
              )}
            </Button>
            <Button variant="ghost" className="flex-1">
              <ChevronRight className="mr-2 h-4 w-4" />
              Skip Ayah
            </Button>
          </div>
        </CardContent>
      </Card>

      <MakeQuranicAyatsGame 
        difficulty={difficulty} 
        initialAyatCount={ayatCount} 
      />
    </div>
  )
}
