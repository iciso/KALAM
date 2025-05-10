import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <Skeleton className="h-10 w-64 mx-auto mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <div className="p-6">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-20 w-full mb-4" />
                <Skeleton className="h-10 w-28" />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
