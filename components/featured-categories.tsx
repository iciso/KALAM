import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Heart, Star, Users, Bookmark, PenTool } from "lucide-react"

export function FeaturedCategories() {
  // Featured categories with custom icons
  const featuredCategories = [
    {
      id: "category-001",
      name: "Divine Names and Attributes",
      description: "Names and attributes of Allah mentioned in the Quran",
      icon: <Heart className="h-6 w-6 text-rose-500" />,
    },
    {
      id: "prophets",
      name: "Prophets",
      description: "Names of the 25 prophets mentioned in the Quran",
      icon: <Users className="h-6 w-6 text-blue-500" />,
    },
    {
      id: "category-006",
      name: "Guidance and Scripture",
      description: "Terms related to divine guidance and revelation",
      icon: <BookOpen className="h-6 w-6 text-emerald-500" />,
    },
    {
      id: "category-002",
      name: "Faith and Belief",
      description: "Words related to faith, belief, and religious concepts",
      icon: <Star className="h-6 w-6 text-amber-500" />,
    },
    {
      id: "category-003",
      name: "Worship and Devotion",
      description: "Terms related to worship, prayer, and devotional acts",
      icon: <Bookmark className="h-6 w-6 text-indigo-500" />,
    },
    {
      id: "category-010",
      name: "Knowledge and Wisdom",
      description: "Terms related to intellect, knowledge, and wisdom",
      icon: <PenTool className="h-6 w-6 text-purple-500" />,
    },
  ]

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Categories</h2>
        <Link href="/vocabulary-categories">
          <Button variant="outline" className="text-emerald-600 hover:text-emerald-700">
            View All Categories <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredCategories.map((category) => (
          <Card key={category.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                {category.icon}
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">{category.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={`/vocabulary?category=${category.id}`} className="w-full">
                <Button variant="outline" className="w-full hover:bg-emerald-50 hover:text-emerald-700">
                  Browse Words <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
