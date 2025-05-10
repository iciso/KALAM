import { Skeleton } from "@/components/ui/skeleton"

export default function IsraMirajLoading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col items-center mb-8">
        <Skeleton className="h-10 w-3/4 max-w-md mb-4" />
        <Skeleton className="h-6 w-full max-w-xl mb-2" />
        <Skeleton className="h-6 w-2/3 max-w-lg" />
      </div>

      {/* Visualization skeleton */}
      <Skeleton className="w-full h-[700px] rounded-lg mb-8" />

      {/* Content skeletons */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-6">
          <Skeleton className="h-7 w-1/2 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-4" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <Skeleton className="h-7 w-1/2 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-4" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 mb-8">
        <Skeleton className="h-7 w-1/3 mb-4" />
        <Skeleton className="h-4 w-full mb-6" />

        <div className="space-y-6">
          <div>
            <Skeleton className="h-6 w-1/4 mb-3" />
            <Skeleton className="h-24 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <div>
            <Skeleton className="h-6 w-1/4 mb-3" />
            <Skeleton className="h-24 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    </div>
  )
}
