"use client"

import { useState } from "react"
import type { VocabularyWord } from "../types/vocabulary"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bookmark, ListPlus } from "lucide-react"
import { AudioPlayer } from "./audio-player"
import { AddToListDialog } from "./add-to-list-dialog"

interface VocabularyDetailProps {
  word: VocabularyWord
  onSave?: (word: VocabularyWord) => void
  isSaved?: boolean
}

export function VocabularyDetail({ word, onSave, isSaved = false }: VocabularyDetailProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [playingExampleId, setPlayingExampleId] = useState<string | null>(null)

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-3xl font-arabic mb-2">{word.arabic}</CardTitle>
              {word.hasAudio && word.audioUrl && (
                <AudioPlayer audioUrl={word.audioUrl} compact label="Listen" onPlay={() => setPlayingExampleId(null)} />
              )}
            </div>
            <CardDescription className="text-lg">{word.transliteration}</CardDescription>
          </div>
          <div className="flex gap-2">
            <AddToListDialog
              word={word}
              trigger={
                <Button variant="outline" size="icon" title="Add to list">
                  <ListPlus className="h-4 w-4" />
                  <span className="sr-only">Add to list</span>
                </Button>
              }
            />
            {onSave && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => onSave(word)}
                title={isSaved ? "Remove from saved" : "Save word"}
              >
                <Bookmark className={`h-4 w-4 ${isSaved ? "fill-emerald-600" : ""}`} />
                <span className="sr-only">{isSaved ? "Unsave" : "Save"} word</span>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Meanings</h3>
              <p className="text-lg">{word.meanings.join(", ")}</p>
            </div>

            {word.rootLetters && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Root Letters</h3>
                <p className="font-arabic text-lg">{word.rootLetters}</p>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Part of Speech</h3>
              <p className="capitalize">{word.partOfSpeech}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Tags</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {word.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="capitalize">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-4">
            {word.examples.map((example, index) => (
              <div key={example.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">
                      Surah {example.surahName} ({example.surahNumber}:{example.ayahNumber})
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {example.hasAudio && example.wordAudioUrl && (
                      <AudioPlayer
                        audioUrl={example.wordAudioUrl}
                        compact
                        label="Word"
                        onPlay={() => setPlayingExampleId(example.id + "-word")}
                        onEnded={() => setPlayingExampleId(null)}
                      />
                    )}
                    {example.hasAudio && example.audioUrl && (
                      <AudioPlayer
                        audioUrl={example.audioUrl}
                        compact
                        label="Ayah"
                        onPlay={() => setPlayingExampleId(example.id + "-ayah")}
                        onEnded={() => setPlayingExampleId(null)}
                      />
                    )}
                  </div>
                </div>

                <p className="font-arabic text-xl text-right mb-2 leading-loose">{example.arabicText}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{example.translationText}</p>

                {playingExampleId === example.id + "-ayah" && example.hasAudio && example.audioUrl && (
                  <div className="mt-4">
                    <AudioPlayer
                      audioUrl={example.audioUrl}
                      label="Full Ayah"
                      onEnded={() => setPlayingExampleId(null)}
                    />
                  </div>
                )}

                {playingExampleId === example.id + "-word" && example.hasAudio && example.wordAudioUrl && (
                  <div className="mt-4">
                    <AudioPlayer
                      audioUrl={example.wordAudioUrl}
                      label="Word Only"
                      onEnded={() => setPlayingExampleId(null)}
                    />
                  </div>
                )}
              </div>
            ))}
          </TabsContent>

          <TabsContent value="details" className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Frequency in Quran</h3>
              <p>{word.frequency} occurrences</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Difficulty Level</h3>
              <p className="capitalize">{word.difficulty}</p>
            </div>

            {word.notes && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Notes</h3>
                <p>{word.notes}</p>
              </div>
            )}

            {word.hasAudio && word.audioUrl && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Pronunciation</h3>
                <AudioPlayer audioUrl={word.audioUrl} label="Listen to pronunciation" />
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
