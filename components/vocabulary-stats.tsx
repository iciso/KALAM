"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { enhancedVocabularyService } from "@/services/enhanced-vocabulary-service"
import { Difficulty } from "@/types/vocabulary"
import { BookOpen, Target, TrendingUp, Award } from "lucide-react"

export function VocabularyStats() {
  // Get comprehensive statistics from the enhanced vocabulary service
  const stats = enhancedVocabularyService.getDetailedStats()
  const difficultyStats = enhancedVocabularyService.getWordsCountByDifficulty()
  const totalWords = stats.totalWords
  const surahCount = stats.surahCoverage
  const wordsWithAudio = stats.wordsWithAudio

  // Calculate percentages for difficulty distribution
  const beginnerPercentage = totalWords > 0 ? Math.round((difficultyStats[Difficulty.Beginner] / totalWords) * 100) : 0
  const intermediatePercentage =
    totalWords > 0 ? Math.round((difficultyStats[Difficulty.Intermediate] / totalWords) * 100) : 0
  const advancedPercentage = totalWords > 0 ? Math.round((difficultyStats[Difficulty.Advanced] / totalWords) * 100) : 0

  // Calculate coverage percentage (assuming 100% since we have Surah associations)
  const coveragePercentage = 100

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Words */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Words in Dictionary</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalWords.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            Including {totalWords} Quranic words + {surahCount} Surah names
          </p>
        </CardContent>
      </Card>

      {/* Surah Coverage */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Surah Coverage</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{coveragePercentage}%</div>
          <p className="text-xs text-muted-foreground">Words with Quranic references</p>
          <Progress value={coveragePercentage} className="mt-2" />
        </CardContent>
      </Card>

      {/* Active Surahs */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Surahs</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{surahCount}</div>
          <p className="text-xs text-muted-foreground">Surahs with vocabulary words</p>
        </CardContent>
      </Card>

      {/* Learning Progress */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{beginnerPercentage}%</div>
          <p className="text-xs text-muted-foreground">Beginner-friendly words</p>
          <Progress value={beginnerPercentage} className="mt-2" />
        </CardContent>
      </Card>

      {/* Difficulty Distribution - Full Width */}
      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Difficulty Distribution</CardTitle>
          <CardDescription>
            Difficulty bars below are for {totalWords.toLocaleString()} Quranic words only
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Beginner */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    Beginner
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {difficultyStats[Difficulty.Beginner].toLocaleString()} words
                  </span>
                </div>
                <span className="text-sm font-medium">{beginnerPercentage}%</span>
              </div>
              <Progress value={beginnerPercentage} className="h-2" />
            </div>

            {/* Intermediate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  >
                    Intermediate
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {difficultyStats[Difficulty.Intermediate].toLocaleString()} words
                  </span>
                </div>
                <span className="text-sm font-medium">{intermediatePercentage}%</span>
              </div>
              <Progress value={intermediatePercentage} className="h-2" />
            </div>

            {/* Advanced */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                    Advanced
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {difficultyStats[Difficulty.Advanced].toLocaleString()} words
                  </span>
                </div>
                <span className="text-sm font-medium">{advancedPercentage}%</span>
              </div>
              <Progress value={advancedPercentage} className="h-2" />
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-6 pt-4 border-t">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">{difficultyStats[Difficulty.Beginner]}</div>
                <div className="text-xs text-muted-foreground">Beginner</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">{difficultyStats[Difficulty.Intermediate]}</div>
                <div className="text-xs text-muted-foreground">Intermediate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{difficultyStats[Difficulty.Advanced]}</div>
                <div className="text-xs text-muted-foreground">Advanced</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{wordsWithAudio}</div>
                <div className="text-xs text-muted-foreground">With Audio</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
