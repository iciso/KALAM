import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-10 w-64 mx-auto mb-6" />
      <Skeleton className="h-4 w-full max-w-2xl mx-auto mb-2" />
      <Skeleton className="h-4 w-full max-w-xl mx-auto mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <Skeleton className="h-6 w-48 mb-6" />
          <Skeleton className="h-64 w-full" />
        </div>
        <div className="border rounded-lg p-6">
          <Skeleton className="h-6 w-48 mb-6" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  )
}
