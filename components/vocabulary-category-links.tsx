"use client"

import { useState } from "react"
import Link from "next/link"
import { enhancedVocabularyService } from "@/services/enhanced-vocabulary-service"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface VocabularyCategoryLinksProps {
  title?: string
  description?: string
  showSearch?: boolean
  maxInitialCategories?: number
  compact?: boolean
}

export function VocabularyCategoryLinks({
  title = "Browse by Category",
  description = "Explore Quranic vocabulary organized by categories",
  showSearch = true,
  maxInitialCategories = 8,
  compact = false,
}: VocabularyCategoryLinksProps) {
  const categories = enhancedVocabularyService.getAllCategories()
  const [searchQuery, setSearchQuery] = useState("")
  const [showAll, setShowAll] = useState(false)

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Determine which categories to display based on showAll state
  const displayedCategories = showAll ? filteredCategories : filteredCategories.slice(0, maxInitialCategories)

  return (
    <Card className={compact ? "shadow-sm" : "shadow-md"}>
      <CardHeader className={compact ? "pb-2" : ""}>
        <CardTitle className={compact ? "text-lg" : "text-xl"}>{title}</CardTitle>
        {!compact && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className={compact ? "pt-0" : ""}>
        {showSearch && (
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search categories..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {displayedCategories.map((category) => (
            <Link key={category.id} href={`/vocabulary?category=${category.id}`} className="no-underline">
              <Button
                variant="outline"
                className="w-full justify-between hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors"
              >
                <span className="truncate">{category.name}</span>
                {category.wordIds && (
                  <Badge variant="secondary" className="ml-2">
                    {category.wordIds.length}
                  </Badge>
                )}
              </Button>
            </Link>
          ))}
        </div>

        {filteredCategories.length > maxInitialCategories && (
          <Button
            variant="ghost"
            className="mt-4 w-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" /> Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" /> Show All Categories ({filteredCategories.length})
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
