import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-48 bg-emerald-700" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-40 w-full mb-8 rounded-lg" />

          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <Skeleton className="h-10 flex-1" />
            <div className="flex gap-2">
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-20" />
            </div>
          </div>

          <div className="mb-6">
            <Skeleton className="h-10 w-full max-w-md mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-lg" />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
