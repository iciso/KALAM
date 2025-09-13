"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { enhancedVocabularyService } from "@/services/enhanced-vocabulary-service"
import { BookOpen, Target, TrendingUp, Users } from "lucide-react"

export function VocabularyStats() {
  const stats = enhancedVocabularyService.getDetailedStats()
  const difficultyStats = enhancedVocabularyService.getWordsCountByDifficulty()
  const allSurahs = enhancedVocabularyService.getAllSurahs()
  const surahCoveragePercentage = enhancedVocabularyService.getSurahCoveragePercentage()

  // Calculate learning progress (percentage of beginner words)
  const learningProgress = stats.totalWords > 0 ? (difficultyStats.Beginner / stats.totalWords) * 100 : 0

  // Get top categories
  const topCategories = Object.entries(stats.categoryCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Total Words */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Words in Dictionary</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalWords.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            Including {stats.totalWords} Quranic words + {allSurahs.length} Surah names
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
          <div className="text-2xl font-bold">{surahCoveragePercentage.toFixed(1)}%</div>
          <p className="text-xs text-muted-foreground">Words with Quranic references</p>
        </CardContent>
      </Card>

      {/* Active Surahs */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Surahs</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{allSurahs.length}</div>
          <p className="text-xs text-muted-foreground">Surahs with vocabulary words</p>
        </CardContent>
      </Card>

      {/* Learning Progress */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Math.round(learningProgress)}%</div>
          <p className="text-xs text-muted-foreground">Beginner-friendly words</p>
        </CardContent>
      </Card>

      {/* Difficulty Distribution */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Difficulty Distribution</CardTitle>
          <CardDescription>Difficulty bars below are for {stats.totalWords} Quranic words only</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Beginner
                </Badge>
                <span className="text-sm font-medium">{difficultyStats.Beginner}</span>
              </div>
              <div className="flex-1 mx-4">
                <Progress value={(difficultyStats.Beginner / stats.totalWords) * 100} className="h-2" />
              </div>
              <span className="text-xs text-muted-foreground">
                {((difficultyStats.Beginner / stats.totalWords) * 100).toFixed(1)}%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Intermediate
                </Badge>
                <span className="text-sm font-medium">{difficultyStats.Intermediate}</span>
              </div>
              <div className="flex-1 mx-4">
                <Progress value={(difficultyStats.Intermediate / stats.totalWords) * 100} className="h-2" />
              </div>
              <span className="text-xs text-muted-foreground">
                {((difficultyStats.Intermediate / stats.totalWords) * 100).toFixed(1)}%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Advanced
                </Badge>
                <span className="text-sm font-medium">{difficultyStats.Advanced}</span>
              </div>
              <div className="flex-1 mx-4">
                <Progress value={(difficultyStats.Advanced / stats.totalWords) * 100} className="h-2" />
              </div>
              <span className="text-xs text-muted-foreground">
                {((difficultyStats.Advanced / stats.totalWords) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Categories */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Top Categories</CardTitle>
          <CardDescription>Most populated vocabulary categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topCategories.map(([category, count], index) => (
              <div key={category} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    #{index + 1}
                  </Badge>
                  <span className="text-sm font-medium truncate">{category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold">{count}</span>
                  <span className="text-xs text-muted-foreground">
                    ({((count / stats.totalWords) * 100).toFixed(1)}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
