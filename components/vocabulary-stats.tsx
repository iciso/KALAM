"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { enhancedVocabularyService } from "@/services/enhanced-vocabulary-service"
import { Difficulty } from "@/types/vocabulary"
import { useMemo } from "react"

export function VocabularyStats() {
  const stats = useMemo(() => {
    const totalWords = enhancedVocabularyService.getTotalWordCount()
    const wordsWithSurah = enhancedVocabularyService.getWordsWithSurahCount()
    const coverage = enhancedVocabularyService.getSurahCoveragePercentage()
    const difficultyCount = enhancedVocabularyService.getWordsCountByDifficulty()
    const totalSurahs = enhancedVocabularyService.getAllSurahs().length

    return {
      totalWords,
      wordsWithSurah,
      coverage,
      difficultyCount,
      totalSurahs,
    }
  }, [])

  const maxDifficultyCount = Math.max(
    stats.difficultyCount[Difficulty.Beginner],
    stats.difficultyCount[Difficulty.Intermediate],
    stats.difficultyCount[Difficulty.Advanced],
  )

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Reference and Study Tools</h2>
        <p className="text-muted-foreground">Comprehensive vocabulary statistics and learning resources</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Words in Dictionary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalWords}</div>
            <p className="text-xs text-muted-foreground">
              Including {stats.wordsWithSurah} Quranic words + {stats.totalSurahs} Surah names
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Surah Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.coverage.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Words with Quranic references</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Surahs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSurahs}</div>
            <p className="text-xs text-muted-foreground">Surahs with vocabulary words</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {((stats.difficultyCount[Difficulty.Beginner] / stats.totalWords) * 100).toFixed(0)}%
            </div>
            <p className="text-xs text-muted-foreground">Beginner-friendly words</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Difficulty Distribution</CardTitle>
          <CardDescription>Difficulty bars below are for {stats.wordsWithSurah} Quranic words only</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Beginner</span>
              <span className="text-sm text-muted-foreground">{stats.difficultyCount[Difficulty.Beginner]}</span>
            </div>
            <Progress value={(stats.difficultyCount[Difficulty.Beginner] / maxDifficultyCount) * 100} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Intermediate</span>
              <span className="text-sm text-muted-foreground">{stats.difficultyCount[Difficulty.Intermediate]}</span>
            </div>
            <Progress
              value={(stats.difficultyCount[Difficulty.Intermediate] / maxDifficultyCount) * 100}
              className="h-2"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Advanced</span>
              <span className="text-sm text-muted-foreground">{stats.difficultyCount[Difficulty.Advanced]}</span>
            </div>
            <Progress value={(stats.difficultyCount[Difficulty.Advanced] / maxDifficultyCount) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
