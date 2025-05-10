import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <Skeleton className="h-10 w-64 mx-auto mb-2" />
      <Skeleton className="h-5 w-96 mx-auto mb-8" />

      <Card className="mb-8">
        <CardHeader>
          <Skeleton className="h-6 w-40 mb-2" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-5 w-full" />
              ))}
          </div>
          <Skeleton className="h-20 w-full mt-4" />
        </CardContent>
      </Card>

      <div className="mb-8">
        <Skeleton className="h-10 w-full mb-4" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-40 mb-2" />
            <Skeleton className="h-4 w-64" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-40 w-full mb-4" />
            <Skeleton className="h-20 w-full mb-4" />
            <Skeleton className="h-20 w-full mb-4" />
            <div className="flex justify-center space-x-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
