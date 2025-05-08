import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function JumbleLoading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Quranic Word Jumble</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="h-7 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
          <div className="h-5 bg-gray-200 rounded animate-pulse w-1/2"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>

            <div className="h-10 bg-gray-200 rounded animate-pulse mt-6"></div>

            <div className="h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center">
              <div className="h-5 bg-gray-200 rounded animate-pulse w-1/3"></div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-28"></div>
              <div className="h-10 bg-gray-200 rounded animate-pulse w-28"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
