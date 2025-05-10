"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { enhancedVocabularyService } from "@/services/enhanced-vocabulary-service"
import { Difficulty } from "@/types/vocabulary"
import { Progress } from "@/components/ui/progress"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

export function VocabularyExpansionStats() {
  const [totalWords, setTotalWords] = useState(0)
  const [difficultyStats, setDifficultyStats] = useState<{ name: string; value: number; color: string }[]>([])
  const [tagStats, setTagStats] = useState<{ name: string; value: number; color: string }[]>([])
  const [surahCoverage, setSurahCoverage] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get total word count
    const total = enhancedVocabularyService.getTotalWordCount()
    setTotalWords(total)

    // Get difficulty stats
    const diffCounts = enhancedVocabularyService.getWordsCountByDifficulty()
    const diffData = [
      { name: "Beginner", value: diffCounts[Difficulty.Beginner], color: "#10b981" },
      { name: "Intermediate", value: diffCounts[Difficulty.Intermediate], color: "#f59e0b" },
      { name: "Advanced", value: diffCounts[Difficulty.Advanced], color: "#ef4444" },
    ]
    setDifficultyStats(diffData)

    // Get tag stats
    const allTags = enhancedVocabularyService.getAllTags()
    const colors = ["#10b981", "#f59e0b", "#ef4444", "#3b82f6", "#8b5cf6", "#ec4899", "#6366f1", "#14b8a6"]
    const tagData = allTags
      .slice(0, 8)
      .map((tag, index) => ({
        name: tag,
        value: enhancedVocabularyService.getWordsByTag(tag).length,
        color: colors[index % colors.length],
      }))
      .sort((a, b) => b.value - a.value)
    setTagStats(tagData)

    // Get Surah coverage
    const coverage = enhancedVocabularyService.getSurahCoveragePercentage()
    setSurahCoverage(coverage)

    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="p-8 text-center">
        <p>Loading vocabulary statistics...</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Vocabulary Expansion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <p className="text-4xl font-bold text-emerald-600">{totalWords}</p>
            <p className="text-sm text-gray-500">Total Quranic Words</p>
          </div>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Surah Coverage</span>
              <span className="text-sm font-medium">{surahCoverage.toFixed(1)}%</span>
            </div>
            <Progress value={surahCoverage} className="h-2" />
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={difficultyStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {difficultyStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} words`, "Count"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Word Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tagStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {tagStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} words`, "Count"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Top Categories</h3>
            <ul className="space-y-2">
              {tagStats.slice(0, 5).map((tag, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-sm">{tag.name}</span>
                  <span className="text-sm font-medium">{tag.value} words</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
